import { Card, CardBody, Typography } from "@/components/components";

async function InformationComponent() {
  return (
    <Card className="shadow-none border-2">
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          Jalur Pendaftaran
        </Typography>
      </CardBody>
    </Card>
  );
}

export default InformationComponent;
