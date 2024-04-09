'use client'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCookies,deleteCookie } from 'cookies-next';
import axios from "axios";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  

  const [username, setUsername] = useState("");
  const cookies=getCookies()
  console.log(cookies)

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        router.push("/login");
      }
      const { data } = await axios.post(
        "http://localhost:8080/api",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (deleteCookie("token"), router.push("/sign-in"));
    };
    verifyCookie();
  }, [cookies, router, deleteCookie]);
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
