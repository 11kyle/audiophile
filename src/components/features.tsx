type Props = {
  features: string
}

export default function Features({ features }: Props) {
  return (
    <div className="bg-white px-6 py-32">
      <div className="mx-auto text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Features</h1>
          {features.split(/\r?\n|\r|\n/g).map((str, index) => (
            <p key={index} className="mt-6 text-xl leading-8">{str}</p>
          ))}
      </div>
    </div>
  )
}