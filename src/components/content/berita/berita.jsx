import { ArrowRightIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Typography,
} from "@/components/components";
import Image from "next/image";
import { formatTanggal, getBerita, getLatestContent } from "@/utils/data";
import Link from "next/link";

async function Berita() {
  const berita = await getBerita();
  const latestBerita = getLatestContent(berita.data, 3);
  return (
    <div>
      <div className="flex justify-between items-center mb-8 ">
        <Typography variant="h4" className=" ml-3">
          Informasi dan Pemberitahuan
        </Typography>
        <Button variant="text" className="lg:flex items-center gap-1 hidden">
          Lihat Seluruh Informasi
          <ArrowRightIcon className="h-5 w-5 font-bold" />
        </Button>
      </div>
      <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestBerita.map((berita) => (
          <Card className="mt-6 sm:w-96 shadow-none border-2" key={berita.id}>
            <CardHeader
              color="blue-gray"
              className="relative h-56 shadow-none rounded-md"
              floated={false}>
              <Image
                src={berita.foto}
                alt="card-image"
                width={1000}
                height={1000}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {berita.judul}
              </Typography>
              <Typography className="truncate">{berita.deskripsi}</Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between items-center">
              <Typography>
                {formatTanggal(new Date(berita.created_at))}
              </Typography>
              <Link href={``}>Read More</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Berita;
