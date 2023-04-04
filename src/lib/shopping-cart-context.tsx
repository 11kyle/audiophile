import React, { Dispatch, createContext, useReducer } from "react"
import produce from 'immer';

export const ShoppingCartContext = createContext<Product[] | null>(null)
export const ShoppingCartDispatchContext = createContext<Dispatch<ProductAction> | null>(null)

type Props = {
  children: React.ReactNode
}

export function ShoppingCartProvider({ children }: Props) {
  const [products, dispatch] = useReducer(productsReducer, initialProducts)

  return (
    <ShoppingCartContext.Provider value={products}>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartContext.Provider>
  )
}

function productsReducer(products: Product[], action: ProductAction) {
  return produce(products, draft => {
    switch (action.type) {
      case 'added': {
        const existingProduct = draft.find((p) => p.id === action.product.id);

        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          draft.push({
            id: action.product.id,
            name: action.product.name,
            price: action.product.price,
            imgSrc: action.product.imgSrc,
            imgAlt: action.product.imgAlt,
            quantity: action.product.quantity,
          });
        }
        break;
      }
      case 'updated': {
        const index = draft.findIndex((p) => p.id === action.product.id);
        draft[index] = action.product;
        break;
      }
      case 'deleted': {
        const index = draft.findIndex((p) => p.id === action.id);
        draft.splice(index, 1);
        break;
      }
      default:
        throw Error('Unknown action: ' + action.type);
    }
  });
}


type Product = {
  id: string
  name: string
  price: number
  imgSrc: string
  imgAlt: string
  quantity: number
}

interface ProductAction {
  type: 'added' | 'updated' | 'deleted'
  product: Product;
  id?: string;
  name?: string;
  price?: number;
  imgSrc?: string;
  imgAlt?: string;
  quantity?: number;
}

const initialProducts: Product[] = []
