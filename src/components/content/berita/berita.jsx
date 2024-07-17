import { ArrowRightIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@/components/components";
import Image from "next/image";

function Berita() {
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
      <div className="lg:grid grid-cols-3 gap-8">
        <Card className="mt-6 sm:w-96 shadow-none border-2">
          <CardHeader
            color="blue-gray"
            className="relative h-56 shadow-none rounded-md"
            floated={false}>
            <Image
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              width={1000}
              height={1000}
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 sm:w-96 shadow-none border-2">
          <CardHeader
            color="blue-gray"
            className="relative h-56 shadow-none rounded-md"
            floated={false}>
            <Image
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              width={1000}
              height={1000}
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 sm:w-96 shadow-none border-2">
          <CardHeader
            color="blue-gray"
            className="relative h-56 shadow-none rounded-md"
            floated={false}>
            <Image
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              width={1000}
              height={1000}
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Berita;
