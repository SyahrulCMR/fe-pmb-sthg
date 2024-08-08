import { CardBody, Input } from "@/components/components";
import React from "react";
import TitleForm from "../fragments/title-form";
import SubForm from "../fragments/sub-form";
import SelectComponent from "../fragments/select-component";
import { generateGraduationYearOptions } from "@/utils/data";

function SchoolForm({prodi}) {
  const graduateOption = generateGraduationYearOptions();
  return (
    <CardBody>
      <TitleForm display={"Informasi Sekolah"} />
      <SubForm>
        <Input
          type="text"
          label="Nama Asal Sekolah"
          name="nama_sekolah"
          color="blue"
          required
        />
        <Input
          type="text"
          label="Alamat Sekolah (Opsional)"
          color="blue"
          name="alamat_sekolah"
        />

        <SelectComponent
          options={graduateOption}
          placeholder={"Tahun lulus"}
          name="thn_lulus"
          required
        />
        {prodi == "S2" && (
          <Input
            type="text"
            label="Gelar (Opsional)"
            name="gelar"
            color="blue"
          />
        )}
      </SubForm>
      <TitleForm display={"Perusahaan"} />
      <SubForm>
        <Input type="text" label="NPWP (Opsional)" color="blue" name="npwp" />

        <Input type="text" label="Perusahan (Opsional)" name="perusahaan" color="blue" />
        <Input
          type="text"
          label="Alamat Perusahaan (Opsional)"
          color="blue"
          name="alamat_perusahaan"
        />
        <Input
          type="text"
          label="Bidang Usaha (Opsional)"
          color="blue"
          name="bidang_usaha"
        />
        <Input
          type="text"
          label="Jabatan Terakhir (Opsional)"
          color="blue"
          name="jabatan_terakhir"
        />
      </SubForm>
    </CardBody>
  );
}

export default SchoolForm;
