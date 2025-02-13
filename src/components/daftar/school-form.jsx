"use client";
import { CardBody, Input, Radio, Typography } from "@/components/components";
import React, { useState } from "react";
import TitleForm from "../fragments/title-form";
import SubForm from "../fragments/sub-form";
import SelectComponent from "../fragments/select-component";
import { generateGraduationYearOptions } from "@/utils/data";

function SchoolForm({ prodi, formData }) {
  const [referral, setReferral] = useState();
  const graduateOption = generateGraduationYearOptions();

  const handleReferralChange = (event) => {
    setReferral(event.target.value);
  };
  return (
    <CardBody>
      <TitleForm display={"Informasi Sekolah"} />
      <SubForm>
        <Input
          type="text"
          label="Nama Asal Sekolah"
          name="nama_sekolah"
          color="blue"
          defaultValue={formData?.nama_sekolah || ""}
          required
        />
        <Input
          type="text"
          label="Alamat Sekolah (Opsional)"
          color="blue"
          name="alamat_sekolah"
          defaultValue={formData?.alamat_sekolah || ""}
        />

        <SelectComponent
          options={graduateOption}
          placeholder={"Tahun lulus"}
          name="thn_lulus"
          defaultValue={formData?.thn_lulus || ""}
          required
        />
        {prodi == "S2" && (
          <Input
            type="text"
            label="Gelar (Opsional)"
            name="gelar"
            color="blue"
            defaultValue={formData?.gelar || ""}
          />
        )}
      </SubForm>
      <TitleForm display={"Perusahaan"} />
      <SubForm>
        <Input
          type="text"
          label="NPWP (Opsional)"
          color="blue"
          name="npwp"
          defaultValue={formData?.npwp || ""}
        />

        <Input
          type="text"
          label="Perusahan (Opsional)"
          name="perusahaan"
          color="blue"
          defaultValue={formData?.perusahaan || ""}
        />
        <Input
          type="text"
          label="Alamat Perusahaan (Opsional)"
          color="blue"
          name="alamat_perusahaan"
          defaultValue={formData?.alamat_perusahaan || ""}
        />
        <Input
          type="text"
          label="Bidang Usaha (Opsional)"
          color="blue"
          name="bidang_usaha"
          defaultValue={formData?.bidang_usaha || ""}
        />
        <Input
          type="text"
          label="Jabatan Terakhir (Opsional)"
          color="blue"
          name="jabatan_terakhir"
          defaultValue={formData?.jabatan_terakhir || ""}
        />
      </SubForm>
      <TitleForm display={"Refferal"} />
      <SubForm>
        <div className="flex flex-col gap-3 grid-cols-2">
          <Typography>Tau informasi STHG melalui</Typography>
          <div className="flex flex-col md:flex-row ">
            <Radio
              name="info_src"
              label="Social Media"
              value="social media"
              onChange={handleReferralChange}
              defaultChecked={formData?.info_src == "social media"}
            />
            <Radio
              name="info_src"
              label="Teman"
              value="teman"
              onChange={handleReferralChange}
              defaultChecked={formData?.info_src == "teman"}
            />
            <Radio
              name="info_src"
              label="Guru"
              value="guru"
              onChange={handleReferralChange}
              defaultChecked={formData?.info_src == "guru"}
            />
            <Radio
              name="info_src"
              label="Keluarga"
              value="keluarga"
              onChange={handleReferralChange}
              defaultChecked={formData?.info_src == "keluarga"}
            />
            <Radio
              name="info_src"
              label="Edufair"
              value="edufair"
              onChange={handleReferralChange}
              defaultChecked={formData?.info_src == "edufair"}
            />
            <Radio
              name="info_src"
              label="Lainnya"
              value="lainnya"
              onChange={handleReferralChange}
              defaultChecked={formData?.info_src == "lainnya"}
            />
          </div>
          {referral === "lainnya" && (
            <Input
              type="text"
              label="Tuliskan sumber informasi"
              name="info_src_other"
              color="blue"
              defaultValue={formData?.info_src_other || ""}
            />
          )}
        </div>
      </SubForm>
    </CardBody>
  );
}

export default SchoolForm;
