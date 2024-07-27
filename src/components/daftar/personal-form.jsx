"use client";

import { CardBody, Input, Radio, Typography } from "@/components/components";
import React, { useEffect, useState } from "react";
import JalurInfo from "../fragments/jalur-info";
import TitleForm from "../fragments/title-form";
import SubForm from "../fragments/sub-form";
import SelectComponent from "../fragments/select-component";
import {
  agamaOptions,
  daftarOptions,
  getDistricts,
  getProvincies,
  getRegency,
  getVillages,
  kewarganegaraanOptions,
  stayWithOptions,
} from "@/utils/data";

function PersonalForm({ prodi, kelas }) {
  const [provincies, setProvincies] = useState();
  const [regencies, setRegencies] = useState();
  const [districts, setDistricts] = useState();
  const [villages, setVillages] = useState();

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedRegency, setSelectedRegency] = useState(null);
  const [selectedDistricts, setSelectedDistricts] = useState(null);
  const [selectedVillages, setSelectedVillages] = useState(null);

  useEffect(() => {
    getProvincies().then((res) => {
      setProvincies(res);
    });
  }, []);

  useEffect(() => {
    getRegency(selectedProvince).then((res) => {
      setRegencies(res);
    });
  }, [selectedProvince]);

  useEffect(() => {
    getDistricts(selectedProvince, selectedRegency).then((res) => {
      setDistricts(res);
    });
  }, [selectedProvince, selectedRegency]);

  useEffect(() => {
    getVillages(selectedProvince, selectedRegency, selectedDistricts).then(
      (res) => {
        setVillages(res);
      }
    );
  }, [selectedProvince, selectedRegency, selectedDistricts]);

  const handleProvinceChange = (selectedOption) => {
    setSelectedProvince(selectedOption);
    setSelectedRegency(null);
  };

  const handleRegencyChange = (selectedOption) => {
    setSelectedRegency(selectedOption);
    setSelectedDistricts(null);
  };

  const handleDistrictsChange = (selectedOption) => {
    setSelectedDistricts(selectedOption);
  };
  const handleVillagesChange = (selectedOption) => {
    setSelectedVillages(selectedOption);
  };

  return (
    <CardBody>
      <Typography variant="h3" color="blue-gray">
        Formulir Pendaftaran
      </Typography>
      <Typography color="blue-gray">
        Lengkapi data pendaftaran untuk melanjutkan ke tahap selanjutnya.
      </Typography>
      <JalurInfo />

      <TitleForm display={"Informasi Pribadi"} />
      <SubForm>
        <Input
          type="text"
          label="Nama Lengkap"
          name="name"
          color="blue"
          required
        />
        <Input
          type="text"
          inputMode="numeric"
          label="NIK"
          name="nik"
          color="blue"
          required
        />
        <Input
          type="text"
          inputMode="numeric"
          label="NISN"
          name="nisn"
          color="blue"
          required
        />
        <div className="sm:flex items-center">
          <Typography>Jenis Kelamin</Typography>
          <div className="flex items-center gap-3">
            <Radio
              name="jenis_kelamin"
              label="Laki Laki"
              value={"MALE"}
              required
            />
            <Radio
              name="jenis_kelamin"
              label="Perempuan"
              value={"FEMALE"}
              required
            />
          </div>
        </div>
        <SelectComponent
          options={agamaOptions}
          placeholder={"Agama"}
          name="agama"
          required
        />
        <Input
          type="text"
          inputMode="numeric"
          label="No. Hp"
          color="blue"
          name="kontak_wa"
          required
        />
        <Input
          type="email"
          label="Alamat Email"
          color="blue"
          name="email"
          required
        />
        <Input
          type="date"
          label="Tanggal Lahir"
          color="blue"
          name="tgl_lahir"
          required
        />
        <Input
          type="text"
          label="Tempat Lahir"
          color="blue"
          name="tempat_lahir"
          required
        />

        <SelectComponent
          options={stayWithOptions}
          placeholder={"Tinggal Bersama"}
          name="stay_with"
          required
        />
        <SelectComponent
          options={kewarganegaraanOptions}
          placeholder={"Kewarganegaraan"}
          name="nationality"
          required
        />
      </SubForm>

      <TitleForm display={"Alamat"} />
      <SubForm>
        <SelectComponent
          options={provincies}
          handleChange={handleProvinceChange}
          placeholder={"Provinsi"}
          name="province"
          required
        />
        <SelectComponent
          options={regencies}
          handleChange={handleRegencyChange}
          placeholder={"Kabupaten / Kota"}
          isDisabled={selectedProvince == null}
          name="regency"
          required
        />
        <SelectComponent
          options={districts}
          handleChange={handleDistrictsChange}
          placeholder={"Kecamatan"}
          isDisabled={selectedProvince == null || selectedRegency == null}
          name="district"
          required
        />
        <SelectComponent
          options={villages}
          handleChange={handleVillagesChange}
          placeholder={"Desa"}
          isDisabled={
            selectedProvince == null ||
            selectedRegency == null ||
            selectedDistricts == null
          }
          name="village"
          required
        />

        <Input
          type="text"
          label="Kampung / Jalan"
          color="blue"
          name="kampung"
          required
        />
        <Input
          type="text"
          inputMode="numeric"
          label="RT (format: 001)"
          color="blue"
          name="rt_number"
          required
        />
        <Input
          type="text"
          inputMode="numeric"
          label="RW (format: 001)"
          color="blue"
          name="rw_number"
          required
        />
        <Input
          type="text"
          inputMode="numeric"
          label="Kode Pos"
          color="blue"
          name="pos_code"
          required
        />
      </SubForm>

      <TitleForm display={"Jalur Pendaftaran"} />

      <SubForm>
        <SelectComponent
          options={daftarOptions}
          placeholder={"Daftar Sebagai"}
          name="jenis_daftar"
          required
        />

        {prodi == "S1" && kelas == "Reguler" && (
          <>
            <div className="sm:flex items-center">
              <Typography>Penerima KIP (Opsional)</Typography>
              <div className="flex items-center gap-3">
                <Radio name="kip" label="YA" value={"YA"} />
                <Radio name="kip" label="TIDAK" value={"TIDAK"} />
              </div>
            </div>

            <div className="sm:flex items-center">
              <Typography>Penerima KPS atau PKH (Opsional)</Typography>
              <div className="flex items-center gap-3">
                <Radio name="kps_pkh" label="YA" value={"YA"} />
                <Radio name="kps_pkh" label="TIDAK" value={"TIDAK"} />
              </div>
            </div>

            <Input
              type="text"
              inputMode="numeric"
              label="Nomor KPS atau PKH (Opsional)"
              color="blue"
              name="nomor_kps_pkh"
            />
          </>
        )}
      </SubForm>
    </CardBody>
  );
}

export default PersonalForm;
