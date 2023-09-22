import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <main className="flex-center paddings mx-auto flex-col">
      <section className="nav-paddings w-full">
      <Skeleton className="h-[274px] w-full rounded-lg" />
      </section>
    </main>
  )
}

export default Loading