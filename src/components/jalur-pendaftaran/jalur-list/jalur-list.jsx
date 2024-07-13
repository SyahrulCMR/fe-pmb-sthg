"use client"
import { BanknotesIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, Chip, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";


function JalurList() {
    const router = useRouter()
  return (
    <div className="flex flex-col gap-5">
      <Card className="shadow-none border-2">
        <CardBody className="lg:grid grid-cols-12">
          <div className="col-span-9">
            <Typography variant="h5" color="blue-gray">
              USM 2024 ONLINE - USM-Sarjana Gelombang 3
            </Typography>
            <Typography className="pt-5 pb-3">
              Untuk informasi lainnya bisa kontak hotline PMB kami di
              0811-960-193 JIKA Kesulitan dalam mendaftar silahkan klik panduan
              pendaftaran di halaman : unpas.ac.id/pmb cari informasi tatacara
              daftar.
            </Typography>
            <Chip variant="ghost" value="Regular" className="inline " />
          </div>
          <div className="mt-5 lg:mt-0 col-span-3 lg:border-l-2 flex flex-col justify-center gap-5 lg:pl-5">
            <div>
              <div className="flex gap-3">
                <CalendarIcon className="h-5 w-5" />
                <Typography>2 Jul 2024 - 9 Agu 2024</Typography>
              </div>
              <div className="flex gap-3">
                <BanknotesIcon className="h-5 w-5" />
                <Typography>Harga : <span className="font-bold text-blue-gray-900">Rp. 300.000</span></Typography>
              </div>
            </div>
            <Button className="block" onClick={()=>{
                sessionStorage.setItem(
                  "jalur",
                  "USM 2024 ONLINE - USM-Sarjana Gelombang 3"
                );
                router.push("/daftar");
            }
                
            }>Daftar</Button>
          </div>
        </CardBody>
      </Card>
      <Card className="shadow-none border-2">
        <CardBody className="lg:grid grid-cols-12">
          <div className="col-span-9">
            <Typography variant="h5" color="blue-gray">
              USM 2024 ONLINE - USM-Sarjana Gelombang 3
            </Typography>
            <Typography className="pt-5 pb-3">
              Untuk informasi lainnya bisa kontak hotline PMB kami di
              0811-960-193 JIKA Kesulitan dalam mendaftar silahkan klik panduan
              pendaftaran di halaman : unpas.ac.id/pmb cari informasi tatacara
              daftar.
            </Typography>
            <Chip variant="ghost" value="Regular" className="inline " />
          </div>
          <div className="mt-5 lg:mt-0 col-span-3 lg:border-l-2 flex flex-col justify-center gap-5 lg:pl-5">
            <div>
              <div className="flex gap-3">
                <CalendarIcon className="h-5 w-5" />
                <Typography>2 Jul 2024 - 9 Agu 2024</Typography>
              </div>
              <div className="flex gap-3">
                <BanknotesIcon className="h-5 w-5" />
                <Typography>Harga : <span className="font-bold text-blue-gray-900">Rp. 300.000</span></Typography>
              </div>
            </div>
            <Button className="block">Daftar</Button>
          </div>
        </CardBody>
      </Card>
      <Card className="shadow-none border-2">
        <CardBody className="lg:grid grid-cols-12">
          <div className="col-span-9">
            <Typography variant="h5" color="blue-gray">
              USM 2024 ONLINE - USM-Sarjana Gelombang 3
            </Typography>
            <Typography className="pt-5 pb-3">
              Untuk informasi lainnya bisa kontak hotline PMB kami di
              0811-960-193 JIKA Kesulitan dalam mendaftar silahkan klik panduan
              pendaftaran di halaman : unpas.ac.id/pmb cari informasi tatacara
              daftar.
            </Typography>
            <Chip variant="ghost" value="Regular" className="inline " />
          </div>
          <div className="mt-5 lg:mt-0 col-span-3 lg:border-l-2 flex flex-col justify-center gap-5 lg:pl-5">
            <div>
              <div className="flex gap-3">
                <CalendarIcon className="h-5 w-5" />
                <Typography>2 Jul 2024 - 9 Agu 2024</Typography>
              </div>
              <div className="flex gap-3">
                <BanknotesIcon className="h-5 w-5" />
                <Typography>Harga : <span className="font-bold text-blue-gray-900">Rp. 300.000</span></Typography>
              </div>
            </div>
            <Button className="block">Daftar</Button>
          </div>
        </CardBody>
      </Card>
      <Card className="shadow-none border-2">
        <CardBody className="lg:grid grid-cols-12">
          <div className="col-span-9">
            <Typography variant="h5" color="blue-gray">
              USM 2024 ONLINE - USM-Sarjana Gelombang 3
            </Typography>
            <Typography className="pt-5 pb-3">
              Untuk informasi lainnya bisa kontak hotline PMB kami di
              0811-960-193 JIKA Kesulitan dalam mendaftar silahkan klik panduan
              pendaftaran di halaman : unpas.ac.id/pmb cari informasi tatacara
              daftar.
            </Typography>
            <Chip variant="ghost" value="Regular" className="inline " />
          </div>
          <div className="mt-5 lg:mt-0 col-span-3 lg:border-l-2 flex flex-col justify-center gap-5 lg:pl-5">
            <div>
              <div className="flex gap-3">
                <CalendarIcon className="h-5 w-5" />
                <Typography>2 Jul 2024 - 9 Agu 2024</Typography>
              </div>
              <div className="flex gap-3">
                <BanknotesIcon className="h-5 w-5" />
                <Typography>Harga : <span className="font-bold text-blue-gray-900">Rp. 300.000</span></Typography>
              </div>
            </div>
            <Button className="block">Daftar</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default JalurList