import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // <main >
    // <Navbar />
    // </main>/
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl"  >
        <h1 className="text-6xl font-bold">
          Build Your Dream Pc Online With{" "}
          <span className="text-indigo-600">Pc-Mods</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
        Craft your dream PC online with PC-Mods! Explore endless customization options for your ultimate gaming rig. Start building now!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href='/user/build' className={buttonVariants({variant:'startbuilding'})}>Start Building</Link>
          <Button variant='destructive'>Compatibility Checker &rarr;</Button>
        </div>
      </div>

      
    </MaxWidthWrapper>
  );
}
