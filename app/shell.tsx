import { Button } from "@/components/ui/button";
import Link from "next/link";
import GithubIcon from "./_components/github-icon";

export default async function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen flex-col overflow-x-hidden">
      <div className="flex w-full items-center gap-2 p-2">
        <h1 className="scroll-m-20 text-3xl font-extrabold leading-none tracking-tight lg:text-4xl">
          <span className="text-neutral-500">(Unofficial)</span> FiveM Docs
        </h1>
        <Link href="/" className="px-4 pb-4" passHref legacyBehavior>
          <Button variant="secondary">Home</Button>
        </Link>
        <Link href="/docs/natives" className="px-4 pb-4" passHref legacyBehavior>
          <Button variant="secondary">Natives</Button>
        </Link>

        <Link
          href="https://github.com/jellyton255/fivem-docs"
          className="ml-auto flex size-8 items-center justify-center gap-2 fill-neutral-50"
        >
          <GithubIcon />
        </Link>
      </div>
      <div className="flex h-0 w-full grow px-4 pb-4">{children}</div>
    </div>
  );
}
