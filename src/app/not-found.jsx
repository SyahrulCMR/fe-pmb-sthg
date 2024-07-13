"use client"

import { Button, Typography } from "@/components/components";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="h-[50vh] flex justify-center items-center">
      <div className="text-center">
        <Typography variant="h1">
          Opss
        </Typography>
        <p className="my-5">Halaman tidak ditemukan</p>
        <Button color="blue" onClick={()=>{
          router.push('/')
        }}>Home Page</Button>
      </div>
    </div>
  );
}
