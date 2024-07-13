function CopyRight() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center py-8">
      {" "}
      Copyright @ {currentYear} Sekolah Tinggi Hukum Galunggung
    </div>
  );
}

export default CopyRight;
