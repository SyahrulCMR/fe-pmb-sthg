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
  Option,
  Radio,
  Select,
  Typography,
} from "@/components/components";
import SelectComponent from "@/components/fragments/select-component";
import { useEffect, useState } from "react";
import {
  generateGraduationYearOptions,
  getProvincies,
  getRegency,
  jenisSekolahOptions,
  kewarganegaraanOptions,
  prodiOptions,
} from "@/utils/data";

function Page() {
  const [provincies, setProvincies] = useState();
  const [regencies, setRegencies] = useState();

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedRegency, setSelectedRegency] = useState(null);

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

  const handleProvinceChange = (selectedOption) => {
    setSelectedProvince(selectedOption);
    setSelectedRegency(null);
  };
  const handleRegencyChange = (selectedOption) => {
    setSelectedRegency(selectedOption);
  };

  return (
    <section className="pt-12 flex justify-center">
      {/* {jalur === null
        ? "Silahkan ambil jalur terlebih dahulu"
        : `Anda mendaftar melalui jalur ${jalur}`} */}
      <div className="container px-5 sm:px-0">
        <Card className="shadow-none border-2">
          <form action="">
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
                />
                <div className="sm:flex items-center">
                  <Typography>Jenis Kelamin</Typography>
                  <div className="flex items-center gap-3">
                    <Radio name="gender" label="Laki Laki" />
                    <Radio name="gender" label="Perempuan" />
                  </div>
                </div>
                <Input type="number" label="No. Hp" color="blue" />
                <Input type="email" label="Alamat Email" color="blue" />
                <Input type="date" label="Tanggal Lahir" color="blue" />
                <Input type="text" label="Tempat Lahir" color="blue" />
                <SelectComponent
                  options={kewarganegaraanOptions}
                  placeholder={"Kewarganegaraan"}
                />
              </SubForm>

              <TitleForm display={"Asal Sekolah"} />
              <SubForm>
                <SelectComponent
                  options={provincies}
                  handleChange={handleProvinceChange}
                  placeholder={"Provinsi"}
                />
                <SelectComponent
                  options={regencies}
                  handleChange={handleRegencyChange}
                  placeholder={"Kabupaten / Kota"}
                  isDisabled={selectedProvince == null}
                />
                <SelectComponent
                  options={jenisSekolahOptions}
                  placeholder={"Jenis Sekolah"}
                />
                <Input type="text" label="Nama Sekolah" color="blue" />
                <Input type="text" label="Jurusan" color="blue" />
                <SelectComponent
                  options={generateGraduationYearOptions()}
                  placeholder={"Tahun Lulus"}
                />
              </SubForm>

              <TitleForm display={"Pilihan Prodi"} />
              <SubForm>
                <SelectComponent options={prodiOptions} placeholder={"Prodi"} />
              </SubForm>
            </CardBody>

            
            <CardFooter className="flex justify-end">
              <Button>Lanjutkan</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
}

export default Page;
