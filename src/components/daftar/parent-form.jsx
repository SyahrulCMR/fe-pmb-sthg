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

function ParentForm({formData}) {
  return (
    <CardBody>
      <TitleForm display={"Identitas Ayah"} />
      <SubForm>
        <Input
          type="text"
          label="Nama Ayah"
          color="blue"
          name="nama_ayah"
          defaultValue={formData?.nama_ayah || ""}
          required
        />
        <Input
          type="text"
          inputMode="numeric"
          label="NIK Ayah"
          color="blue"
          name="nik_ayah"
          defaultValue={formData?.nik_ayah || ""}
          required
        />
        <Input
          type="text"
          label="Tempat Lahir Ayah (Opsional)"
          color="blue"
          name="tempat_lahir_ayah"
          defaultValue={formData?.tempat_lahir_ayah || ""}
        />
        <Input
          type="date"
          label="Tanggal Lahir Ayah (Opsional)"
          color="blue"
          name="tgl_lahir_ayah"
          defaultValue={formData?.tgl_lahir_ayah || ""}
        />
        <Input
          type="text"
          label="Alamat Ayah (Opsional)"
          color="blue"
          name="alamat_ayah"
          defaultValue={formData?.alamat_ayah || ""}
        />
        <SelectComponent
          options={agamaOptions}
          placeholder={"Agama Ayah (Opsional)"}
          name="agama_ayah"
          defaultValue={formData?.agama_ayah || ""}
        />
        <SelectComponent
          options={latestGraduateOptions}
          placeholder={"Pendidikan Terakhir Ayah (Opsional)"}
          name="pendidikan_ayah"
          defaultValue={formData?.pendidikan_ayah || ""}
        />
        <Input
          type="text"
          label="Pekerjaan Ayah (Opsional)"
          color="blue"
          name="pekerjaan_ayah"
          defaultValue={formData?.pekerjaan_ayah || ""}
        />
        <SelectComponent
          options={penghasilanOptions}
          placeholder={"Penghasilan Ayah (Opsional)"}
          name="penghasilan_ayah"
          defaultValue={formData?.penghasilan_ayah || ""}
        />
      </SubForm>

      <TitleForm display={"Identitas Ibu"} />
      <SubForm>
        <Input
          type="text"
          label="Nama Ibu"
          color="blue"
          name="nama_ibu"
          defaultValue={formData?.nama_ibu || ""}
          required
        />
        <Input
          type="text"
          inputMode="numeric"
          label="NIK Ibu"
          color="blue"
          name="nik_ibu"
          defaultValue={formData?.nik_ibu || ""}
          required
        />
        <Input
          type="text"
          label="Tempat Lahir Ibu (Opsional)"
          color="blue"
          name="tempat_lahir_ibu"
          defaultValue={formData?.tempat_lahir_ibu || ""}
        />
        <Input
          type="date"
          label="Tanggal Lahir Ibu (Opsional)"
          color="blue"
          name="tgl_lahir_ibu"
          defaultValue={formData?.tgl_lahir_ibu || ""}
        />
        <Input
          type="text"
          label="Alamat Ibu (Opsional)"
          color="blue"
          name="alamat_ibu"
          defaultValue={formData?.alamat_ibu || ""}
        />
        <SelectComponent
          options={agamaOptions}
          placeholder={"Agama Ibu (Opsional)"}
          name="agama_ibu"
          defaultValue={formData?.agama_ibu || ""}
        />
        <SelectComponent
          options={latestGraduateOptions}
          placeholder={"Pendidikan Terakhir Ibu (Opsional)"}
          name="pendidikan_ibu"
          defaultValue={formData?.pendidikan_ibu || ""}
        />

        <Input
          type="text"
          label="Pekerjaan Ibu (Opsional)"
          color="blue"
          name="pekerjaan_ibu"
          defaultValue={formData?.pekerjaan_ibu || ""}
        />
        <SelectComponent
          options={penghasilanOptions}
          placeholder={"Penghasilan Ibu (Opsional)"}
          name="penghasilan_ibu"
          defaultValue={formData?.penghasilan_ibu || ""}
        />
      </SubForm>

      <TitleForm display={"Identitas Wali"} />
      <SubForm>
        <Input
          type="text"
          label="Nama Wali (Opsional)"
          color="blue"
          name="nama_wali"
          defaultValue={formData?.nama_wali || ""}
        />
        <Input
          type="text"
          inputMode="numeric"
          label="NIK Wali (Opsional)"
          color="blue"
          name="nik_wali"
          defaultValue={formData?.nik_wali || ""}
        />
        <Input
          type="text"
          label="Alamat Wali (Opsional)"
          color="blue"
          name="alamat_wali"
          defaultValue={formData?.alamat_wali || ""}
        />
        <SelectComponent
          options={latestGraduateOptions}
          placeholder={"Pendidikan Terakhir Wali (Opsional)"}
          name="pendidikan_wali"
          defaultValue={formData?.pendidikan_wali || ""}
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
          defaultValue={formData?.kontak_orangtua || ""}
          required
        />

        <Input
          type="text"
          inputMode="numeric"
          label="Kontak Wali (Opsional)"
          color="blue"
          name="kontak_wali"
          defaultValue={formData?.kontak_wali || ""}
        />
      </SubForm>
    </CardBody>
  );
}

export default ParentForm;
