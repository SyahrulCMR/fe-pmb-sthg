import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Input,
  Option,
  Select,
  Typography,
} from "@/components/components";
import Image from "next/image";

function Page() {
  const TABLE_HEAD = ["ID Pendaftaran","Nama", "NISN", "Status"];
  const TABLE_ROWS = [
    {
      id: 1,
      name: "Rival Nugraha",
      nisn: 98765445,
      status: "Pending",
    },
  ];
  return (
    <section className="pt-12 flex justify-center">
      <div className="container px-5 sm:px-0">
        <Typography variant="h4" className="my-8" color="blue-gray">
          Informasi dan Pemberitahuan
        </Typography>

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
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
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
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
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
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex items-center flex-col my-16">
          <Typography variant="h4" className="my-8" color="blue-gray">
            Lacak Pendaftaran
          </Typography>
          <Card className="w-full sm:max-w-max">
            <CardBody className="">
              <form action="">
                <div className="grid sm:grid-cols-12 gap-3 ">
                  <div className="col-span-12 sm:col-span-5">
                    <Input
                      color="blue"
                      type="search"
                      name="search"
                      label="Cari.."
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-5">
                    <Select color="blue" label="Search by">
                      <Option value="nama">Nama</Option>
                      <Option value="no_daftar">No. Pendaftaran</Option>
                      <Option value="nisn">NISN</Option>
                    </Select>
                  </div>
                  <div className="col-span-12 sm:col-span-2">
                    <Button type="submit">Cari</Button>
                  </div>
                </div>
              </form>
            </CardBody>
            <CardFooter>
              <div className="my-5 overflow-x-auto">
                <table className="w-full min-w-max table-auto text-left ">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70 text-wrap">
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map(({ id, name, nisn, status }, index) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4 border-b border-blue-gray-50"
                        : "p-4 ";

                      return (
                        <tr key={id}>
                          <td className={classes}>
                            <Typography>{id}</Typography>
                          </td>
                          <td className={classes}>
                            <Typography>{name}</Typography>
                          </td>
                          <td className={classes}>
                            <Typography>{nisn}</Typography>
                          </td>
                          <td className={classes}>
                            <Chip
                              color={status == "Pending" ? "amber" : ""}
                              value={status}
                              className="text-center"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Page;
