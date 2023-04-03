type Props = {
  accessories: [{
    item: string
    quantity: number
  }]
}

export default function Included({ accessories }: Props) {
  return (
    <div className="bg-white px-6 pb-32 lg:py-32">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-1">
        <div>
          <h2 className="mt-2 uppercase text-2xl font-bold tracking-tight text-gray-900">In the box</h2>
        </div>
        <div>
          <ul className="flex flex-col gap-y-2 mt-6">
            {accessories.map((accessory, index: number) => (
              <li key={index} className="font-medium text-gray-500">
                <span className="text-orange-500 mr-6">{accessory.quantity}x</span>
                {accessory.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}