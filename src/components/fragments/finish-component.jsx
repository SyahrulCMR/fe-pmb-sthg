"use client";
import { Button, Typography } from "@/components/components";
import React from "react";
import CopyComponent from "./copy-component";
import { useRouter } from "next/navigation";

function FinishComponent({ id }) {
  const router = useRouter();

  const deleteStorage = (path) => {
    sessionStorage.setItem("_form", "");
    sessionStorage.setItem("_jalur", "");
    sessionStorage.setItem("_progres", "");
    sessionStorage.setItem("_mhs_id", "");
    router.push(path);
  };
  return (
    <section className="py-16 flex justify-center">
      <div className="container px-5 sm:px-0">
        <div className="h-[50vh] flex justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <Typography variant="h1">Selamat !!</Typography>
            <p className="my-5">
              Pendaftaranmu berhasil. Tahap selanjutnya adalah datang ke Kampus
              STHG untuk melakukan pembayaran
            </p>
            <p className="my-5">Id Pendaftaranmu</p>
            <CopyComponent text={id} />
            <div className=" flex items-center gap-2 mt-5">
              <Button
                onClick={() => {
                  deleteStorage("/");
                }}>
                Home Page
              </Button>

              <Button
                onClick={() => {
                  deleteStorage("/lacak-pendaftaran");
                }}>
                Lacak Pendaftaran
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinishComponent;
