"use client";

import JalurInfo from "@/components/fragments/jalur-info";
import SubForm from "@/components/fragments/sub-form";
import TitleForm from "@/components/fragments/title-form";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Radio,
  Typography,
} from "@/components/components";
import SelectComponent from "@/components/fragments/select-component";
import { useEffect, useState } from "react";
import {
  agamaOptions,
  daftarOptions,
  getDistricts,
  getProvincies,
  getRegency,
  getVillages,
  jalurOptions,
  kewarganegaraanOptions,
  stayWithOptions,
} from "@/utils/data";

function Page() {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const province = formData.get("province");
    const regency = formData.get("regency");
    const district = formData.get("district");
    const village = formData.get("village");
    const kampung = formData.get("kampung");
    const pos_code = formData.get("pos_code");

    const alamat = `${kampung} ${village} ${district} ${regency} ${province}, ${pos_code}`;

    const data = {
      nama_lengkap: formData.get("name"),
      nik: formData.get("nik"),
      nisn: formData.get("nisn"),
      tempat_lahir: formData.get("tempat_lahir"),
      tgl_lahir: formData.get("tgl_lahir"),
      jenis_kelamin: formData.get("jenis_kelamin"),
      agama: formData.get("agama"),
      nationality: formData.get("nationality"),
      stay_with: formData.get("stay_with"),
      domisili: regency,
      kontak_wa: formData.get("kontak_wa"),
      email: formData.get("email"),
      jalur: formData.get("jalur"),
      jenis_daftar: formData.get("jenis_daftar"),
      alamat,
    };

    sessionStorage.setItem("_form", JSON.stringify(data));
  };

  return (
    <section className="pt-12 flex justify-center">
      {/* {jalur === null
        ? "Silahkan ambil jalur terlebih dahulu"
        : `Anda mendaftar melalui jalur ${jalur}`} */}
      <div className="container px-5 sm:px-0">
        <Card className="shadow-none border-2">
          <form onSubmit={handleSubmit}>
            <CardBody>
              <Typography variant="h3" color="blue-gray">
                Formulir Pendaftaran
              </Typography>
              <Typography color="blue-gray">
                Lengkapi data pendaftaran untuk melanjutkan ke tahap
                selanjutnya.
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
                  type="number"
                  label="NIK"
                  name="nik"
                  color="blue"
                  min={0}
                  required
                />
                <Input
                  type="number"
                  label="NISN"
                  name="nisn"
                  color="blue"
                  min={0}
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
                  type="number"
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
                  isDisabled={
                    selectedProvince == null || selectedRegency == null
                  }
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
                  min={0}
                  name="kampung"
                  required
                />
                <Input
                  type="number"
                  label="Kode Pos"
                  color="blue"
                  min={0}
                  name="pos_code"
                  required
                />
              </SubForm>

              <TitleForm display={"Jalur Pendaftaran"} />

              <SubForm>
                <SelectComponent
                  options={jalurOptions}
                  placeholder={"Jalur"}
                  name="jalur"
                  required
                />
                <SelectComponent
                  options={daftarOptions}
                  placeholder={"Daftar Sebagai"}
                  name="jenis_daftar"
                  required
                />
              </SubForm>
            </CardBody>

            <CardFooter className="flex justify-end">
              <Button type="submit">Lanjutkan</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
}

export default Page;
