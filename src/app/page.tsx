import Button from "@/components/button/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center items-center h-svh">
      <h1>welcome next form</h1>
      <div className="flex gap-5 mt-5">
        <Link href="/yup">
          <Button>Yup</Button>
        </Link>
        <Link href="/zod">
          <Button>Zod</Button>
        </Link>
      </div>
    </main>
  );
}
