"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Input,
  Typography,
} from "@/components/components";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
// 9c9948fd-0dcb-471b-8c23-44090ed63f9b
function Page() {
  const [idMhs, setIdMhs] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = formData.get("id");

    toast.promise(
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/getPersyaratanByMahasiswa?id_mahasiswa=${id}`
      )
        .then((res) => {
          if (!res.ok) {
            // Jika response tidak OK (misalnya 404), lempar error
            throw new Error("ID tidak ditemukan");
          }
          return res.json();
        })
        .then((data) => {
          setIdMhs(id);
          return data;
        }),
      {
        loading: "Harap tunggu..",
        error: (err) => {
          return `${err.message}` || "Ups terjadi kesalahan";
        },
      }
    );
  };

  const handleDownload = (id) => {
    document.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/formulir-pmb?daftar=${id}`;
  };

  // console.log(mahasiswa);
  return (
    <section className="pt-12 flex justify-center">
      <div className="container px-5 sm:px-0">
        <div className="flex items-center flex-col my-16">
          <Typography variant="h3" className="my-8" color="blue-gray">
            Lacak Pendaftaran
          </Typography>
          <Card className="w-full sm:max-w-max min-h-48">
            <CardBody className="">
              <form onSubmit={handleSubmit} method="POST">
                <div className="grid sm:grid-cols-12 gap-3 ">
                  <div className="col-span-12 sm:col-span-10">
                    <Input
                      color="blue"
                      type="text"
                      name="id"
                      label="Id Pendaftaran"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-2">
                    <Button type="submit">Cari</Button>
                  </div>
                </div>
              </form>
            </CardBody>
            {idMhs && (
              <CardFooter className="flex flex-col justify-center items-center">
                <h5 className="text-blue-gray-900 text-xl">
                  Selamat, Kamu sudah terdaftar
                </h5>

                <Image
                  src={"/success_daftar.svg"}
                  width={300}
                  height={300}
                  alt="Success terdaftar"
                />
                <Button onClick={() => handleDownload(idMhs)} className="mt-3" disabled>
                  Unduh Formulir
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Page;
