import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <main className="flex-center paddings mx-auto flex-col">
      <section className="nav-paddings w-full">
        <Skeleton className="h-[274px] w-full rounded-lg" />
      </section>
      <section className="mt-6 flex w-full flex-col sm:mt-20">
        <Skeleton className="h-10 w-56" />
      </section>
    </main>
  );
};

export default Loading;
