'use client'
import { Button, Card, CardBody, Typography } from "@/components/components";
import { useRouter } from "next/navigation";

function SearchJalur() {
  const router = useRouter()
  return (
    <Card className="shadow-none border-2">
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Informasi Program Studi
        </Typography>
        <div>
          <div className="border rounded-md p-5 grid grid-cols-4 mt-3">
            <div className="col-span-3">
              <Typography>S1 - Hukum</Typography>
              <Typography>Tersedia 9 Jalur Pendaftaran</Typography>
            </div>
            <Button onClick={()=>{
              router.push('/jalur-pendaftaran')
            }} variant="outlined" className="px-2 text-center">
              Lihat Detail
            </Button>
          </div>
          <div className="border rounded-md p-5 grid grid-cols-4 mt-3">
            <div className="col-span-3">
              <Typography>S2 - Hukum</Typography>
              <Typography>Tersedia 2 Jalur Pendaftaran</Typography>
            </div>
            <Button variant="outlined" className="px-2 text-center">
              Lihat Detail
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default SearchJalur;
