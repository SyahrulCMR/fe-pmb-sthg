import { CardBody, Input } from "@/components/components";
import React from "react";
import TitleForm from "../fragments/title-form";
import SubForm from "../fragments/sub-form";
import SelectComponent from "../fragments/select-component";
import {
  agamaOptions,
  latestGraduateOptions,
  penghasilanOptions,
} from "@/utils/data";

function ParentForm() {
  return (
    <CardBody>
      <TitleForm display={"Identitas Ayah"} />
      <SubForm>
        <Input
          type="text"
          label="Nama Ayah"
          color="blue"
          name="nama_ayah"
          required
        />
        <Input
          type="text"
          inputMode="numeric"
          label="NIK Ayah"
          color="blue"
          name="nik_ayah"
          required
        />
        <Input
          type="text"
          label="Tempat Lahir Ayah (Opsional)"
          color="blue"
          name="tempat_lahir_ayah"
        />
        <Input
          type="date"
          label="Tanggal Lahir Ayah (Opsional)"
          color="blue"
          name="tgl_lahir_ayah"
        />
        <Input
          type="text"
          label="Alamat Ayah (Opsional)"
          color="blue"
          name="alamat_ayah"
        />
        <SelectComponent
          options={agamaOptions}
          placeholder={"Agama Ayah (Opsional)"}
          name="agama_ayah"
        />
        <SelectComponent
          options={latestGraduateOptions}
          placeholder={"Pendidikan Terakhir Ayah (Opsional)"}
          name="pendidikan_ayah"
        />
        <Input
          type="text"
          label="Pekerjaan Ayah (Opsional)"
          color="blue"
          name="pekerjaan_ayah"
        />
        <SelectComponent
          options={penghasilanOptions}
          placeholder={"Penghasilan Ayah (Opsional)"}
          name="penghasilan_ayah"
        />
      </SubForm>

      <TitleForm display={"Identitas Ibu"} />
      <SubForm>
        <Input
          type="text"
          label="Nama Ibu"
          color="blue"
          name="nama_ibu"
          required
        />
        <Input
          type="text"
          inputMode="numeric"
          label="NIK Ibu"
          color="blue"
          name="nik_ibu"
          required
        />
        <Input
          type="text"
          label="Tempat Lahir Ibu (Opsional)"
          color="blue"
          name="tempat_lahir_ibu"
        />
        <Input
          type="date"
          label="Tanggal Lahir Ibu (Opsional)"
          color="blue"
          name="tgl_lahir_ibu"
        />
        <Input
          type="text"
          label="Alamat Ibu (Opsional)"
          color="blue"
          name="alamat_ibu"
        />
        <SelectComponent
          options={agamaOptions}
          placeholder={"Agama Ibu (Opsional)"}
          name="agama_ibu"
        />
        <SelectComponent
          options={latestGraduateOptions}
          placeholder={"Pendidikan Terakhir Ibu (Opsional)"}
          name="pendidikan_ibu"
        />

        <Input
          type="text"
          label="Pekerjaan Ibu (Opsional)"
          color="blue"
          name="pekerjaan_ibu"
        />
        <SelectComponent
          options={penghasilanOptions}
          placeholder={"Penghasilan Ibu (Opsional)"}
          name="penghasilan_ibu"
        />
      </SubForm>

      <TitleForm display={"Identitas Wali"} />
      <SubForm>
        <Input
          type="text"
          label="Nama Wali (Opsional)"
          color="blue"
          name="nama_wali"
        />
        <Input
          type="text"
          inputMode="numeric"
          label="NIK Wali (Opsional)"
          color="blue"
          name="nik_wali"
        />
        <Input
          type="text"
          label="Alamat Wali (Opsional)"
          color="blue"
          name="alamat_wali"
        />
        <SelectComponent
          options={latestGraduateOptions}
          placeholder={"Pendidikan Terakhir Wali (Opsional)"}
          name="pendidikan_wali"
        />
      </SubForm>
      <TitleForm display={"Kontak"} />
      <SubForm>
        <Input
          type="text"
          inputMode="numeric"
          label="Kontak Orang Tua"
          color="blue"
          name="kontak_orangtua"
          required
        />

        <Input
          type="text"
          inputMode="numeric"
          label="Kontak Wali (Opsional)"
          color="blue"
          name="kontak_wali"
        />
      </SubForm>
    </CardBody>
  );
}

export default ParentForm;
