"use client";

import { getJalur } from "@/utils/data";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Typography } from "@/components/components";
import Link from "next/link";
import { useEffect, useState } from "react";

function JalurInfo() {
  const [jalur, setJalur] = useState();

  useEffect(() => {
    setJalur(getJalur());
  }, []);

  return (
    <div className="mt-8">
      <Typography variant="h5" color="blue-gray" className="mb-4">
        Kamu Memilih Jalur Pendaftaran
      </Typography>
      <div className="border border-blue-500 flex justify-between items-center rounded-lg p-5">
        <div className="flex items-center gap-5">
          <InformationCircleIcon className="h-12 w-12 text-blue-500" />
          <div>
            <Typography variant="h6" color="blue">
              {jalur}
            </Typography>
            <Typography>Regular</Typography>
          </div>
        </div>
        <Link href={"/jalur-pendaftaran"} className="underline text-blue-700">
          Pindah Jalur
        </Link>
      </div>
    </div>
  );
}

export default JalurInfo;
