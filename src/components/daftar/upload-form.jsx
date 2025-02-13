"use client";

import { Button, CardBody, Input, Typography } from "@/components/components";
import React, { useEffect, useState } from "react";
import TitleForm from "../fragments/title-form";
import SubForm from "../fragments/sub-form";
import Link from "next/link";

function UploadForm({ formData }) {
  const [mhsId, setMhsId] = useState("");

  const handleDownload = (id) => {
    document.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/formulir-pmb?daftar=${id}`;
  };

  useEffect(() => {
    const storedData = localStorage.getItem("_mhs_id");
    console.log(storedData);
    if (storedData) {
      try {
        setMhsId(storedData);
      } catch (error) {
        console.error("Failed get data:", error);
      }
    }
  }, []);

  return (
    <CardBody>
      <TitleForm display={"Upload Dokumen Pendukung"} />

      <SubForm>
        <Input
          type="file"
          label="Scan KTP"
          color="blue"
          accept=".jpg, .jpeg, .png, .pdf"
          name="scan_ktp"
          required
        />
        <Input
          type="file"
          label="Scan Ijazah"
          color="blue"
          accept=".jpg, .jpeg, .png, .pdf"
          name="scan_ijazah"
          required
        />
        <Input
          type="file"
          label="Scan Kartu Keluarga"
          color="blue"
          accept=".jpg, .jpeg, .png, .pdf"
          name="scan_kk"
          required
        />
        <Input
          type="file"
          label="Foto 3x4"
          color="blue"
          accept=".jpg, .jpeg, .png, .pdf"
          name="photo_3x4"
          required
        />
        <Input
          type="file"
          label="Foto 4x6"
          color="blue"
          accept=".jpg, .jpeg, .png, .pdf"
          name="photo_4x6"
          required
        />

        {formData?.jenis_daftar == "PINDAHAN" && (
          <Input
            type="file"
            label="Scan Transkrip"
            color="blue"
            accept=".jpg, .jpeg, .png, .pdf"
            name="scan_transkip"
          />
        )}
        {formData?.kip == 1 && (
          <Input
            type="file"
            label="Scan Kartu Indonesia Pintar (KIP)"
            color="blue"
            accept=".jpg, .jpeg, .png, .pdf"
            name="scan_kip"
          />
        )}
        {formData?.kps_pkh == 1 && (
          <Input
            type="file"
            label="Scan Proram Keluarga Harapan (PKH)"
            color="blue"
            accept=".jpg, .jpeg, .png, .pdf"
            name="scan_pkh"
          />
        )}
      </SubForm>
      <div className="my-8 flex flex-col gap-5">
        <Typography className="italic text-blue-gray-900 text-sm">
          Note: bisa transfer ke no rek BJB Syariah{" "}
          <span className="font-bold">
            00200102111169 a.n Yayasan Galunggung
          </span>
        </Typography>
        <Input
          type="file"
          label="Bukti Bayar (Opsional)"
          color="blue"
          accept=".jpg, .jpeg, .png, .pdf"
          name="bukti_bayar"
        />
      </div>
      <TitleForm display={"Upload Formulir"} />

      <SubForm>
        <div className="flex flex-col gap-5">
          <Typography className="text-blue-gray-900">
            Formulir dapat diunduh melalui{" "}
            <Link
              href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/formulir-pmb?daftar=${mhsId}`}
              className="underline text-blue-500 ">
              Link
            </Link>{" "}
            berikut
          </Typography>
          <Input
            type="file"
            label="Formulir"
            color="blue"
            accept=".jpg, .jpeg, .png, .pdf"
            name="formulir"
            required
          />
        </div>
      </SubForm>
    </CardBody>
  );
}

export default UploadForm;
