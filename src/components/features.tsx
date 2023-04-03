type Props = {
  features: string
}

export default function Features({ features }: Props) {
  return (
    <div className="bg-white px-6 py-32">
      <div className="mx-auto text-base leading-7 text-gray-500">
        <h1 className="mt-2 uppercase text-2xl font-bold tracking-tight text-gray-900">Features</h1>
          {features.split(/\r?\n|\r|\n/g).map((str, index) => (
            <p key={index} className="mt-6 leading-8">{str}</p>
          ))}
      </div>
    </div>
  )
}