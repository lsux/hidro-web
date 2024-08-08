"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
        <Button size="default" asChild>
          {/*<Link href={process.env.NEXTLOGIN}>Click Me</Link>*/}
          <button onClick={(e) => {
            alert("Hola")
          }} hidden>Click Me</button>
        </Button>

    </div>
  );
}
