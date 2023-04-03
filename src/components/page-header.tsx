type Props = {
  title: string
}
export default function PageHeader({ title }: Props) {
  return (
    <div className="bg-[#191919] px-6 py-8 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="uppercase text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {title}
        </h2>
      </div>
    </div>
  )
}