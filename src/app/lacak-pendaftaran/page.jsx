import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Input,
  Typography,
} from "@/components/components";
// 9c9948fd-0dcb-471b-8c23-44090ed63f9b
function Page() {
  const TABLE_HEAD = ["ID Pendaftaran", "Nama", "NISN", "Status"];
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
        <div className="flex items-center flex-col my-16">
          <Typography variant="h3" className="my-8" color="blue-gray">
            Lacak Pendaftaran
          </Typography>
          <Card className="w-full sm:max-w-max">
            <CardBody className="">
              <form action="">
                <div className="grid sm:grid-cols-12 gap-3 ">
                  <div className="col-span-12 sm:col-span-10">
                    <Input
                      color="blue"
                      type="search"
                      name="search"
                      label="Id Pendaftaran"
                    />
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
