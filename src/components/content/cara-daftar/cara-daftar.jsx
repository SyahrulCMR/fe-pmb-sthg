import { Card, CardBody, Typography } from "@/components/components";

function CaraDaftar() {
  const steps = [
    "Pilih jalur pendaftaran",
    "Lengkapi formulir pendaftaran",
    "Selesaikan pembayaran formulir",
    "Lengkapi berkas dan ikuti seleksi pendaftaran",
  ];
  return (
    <Card className="shadow-none border-2">
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Tata Cara Pendaftaran
        </Typography>
        <ol className="pt-3">
          {steps.map((step, index) => (
            <li key={index}>
              {++index}. {step}
            </li>
          ))}
        </ol>
      </CardBody>
    </Card>
  );
}

export default CaraDaftar;
