import Spinner from "@/components/loader/spinner";

export default function RootLoading() {
  return (
    <div className="flex h-svh w-full items-center justify-center">
      <Spinner />
    </div>
  );
}
