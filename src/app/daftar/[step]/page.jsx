"use client";
import {
  Button,
  Card,
  CardFooter,
  Progress,
  Typography,
} from "@/components/components";

import { useParams } from "next/navigation";

import FinishComponent from "@/components/fragments/finish-component";
import SchoolForm from "@/components/daftar/school-form";
import ParentForm from "@/components/daftar/parent-form";
import UploadForm from "@/components/daftar/upload-form";
import { handleDaftar } from "@/utils/actions";
import { useEffect, useState } from "react";
import PersonalForm from "@/components/daftar/personal-form";
import Link from "next/link";

function Page() {
  const [jalur, setJalur] = useState("");
  const [progres, setProgres] = useState(25);
  const [mahasiswaId, setMahasiswaId] = useState();

  const { step } = useParams();

  useEffect(() => {
    const path = sessionStorage.getItem("_jalur") || "No Jalur";
    const id = sessionStorage.getItem("_mhs_id");
    const prog = Number(sessionStorage.getItem("_progres"));

    setJalur(path);
    setMahasiswaId(id);
    setProgres(prog);
  });

  const [prodi, kelas] = jalur.split(" ");
  return (
    <>
      {jalur === "No Jalur" ? (
        <div className="flex flex-col justify-center items-center min-h-56 gap-3">
          <Typography variant="h4" className="text-center">
            Anda belum memilih jalur, silahkan pilih jalur terlebih dahulu
          </Typography>
          <Link href={"/jalur-pendaftaran"}>
            <Button>Pilih jalur</Button>
          </Link>
        </div>
      ) : step == "finish" ? (
        <FinishComponent id={mahasiswaId} />
      ) : (
        <section className="pt-12 flex justify-center">
          <div className="container px-5 sm:px-0">
            <Card>
              <Progress value={progres} color="blue" />
              <form
                onSubmit={handleDaftar}
                encType="multipart/form-data"
                method="post">
                {step == "personal" && (
                  <PersonalForm prodi={prodi} kelas={kelas} />
                )}

                {step == "school" && <SchoolForm prodi={prodi} />}

                {step == "parent" && <ParentForm />}

                {step == "upload" && <UploadForm />}

                <CardFooter className="flex justify-end">
                  <Button type="submit">
                    {step === "upload" ? "Submit" : "Lanjutkan"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </section>
      )}
    </>
  );
}

export default Page;
