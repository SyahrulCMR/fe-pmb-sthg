"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@/components/components";
import SubForm from "@/components/fragments/sub-form";
import TitleForm from "@/components/fragments/title-form";
import { useParams } from "next/navigation";

function Page() {
  const params = useParams();

  return (
    <section className="pt-12 flex justify-center">
      <div className="container px-5 sm:px-0">
        <Card>
          <form action="" method="post">
            <CardBody>
              <TitleForm display={"Informasi Pribadi"} />
              <SubForm>
                <Input
                  type="file"
                  label="Nama Lengkap"
                  name="name"
                  color="blue"
                />

                <Input type="number" label="No. Hp" color="blue" />
                <Input type="email" label="Alamat Email" color="blue" />
                <Input type="date" label="Tanggal Lahir" color="blue" />
                <Input type="text" label="Tempat Lahir" color="blue" />
              </SubForm>

              <TitleForm display={"Asal Sekolah"} />
              <SubForm>
                <Input type="text" label="Nama Sekolah" color="blue" />
                <Input type="text" label="Jurusan" color="blue" />
              </SubForm>
            </CardBody>
          </form>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default Page;
