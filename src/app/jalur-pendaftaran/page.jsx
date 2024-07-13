
import InformatinComponent from "@/components/jalur-pendaftaran/informaton/information";
import JalurList from "@/components/jalur-pendaftaran/jalur-list/jalur-list";

function Page() {
  return (
    <>
      <section className="pt-12 flex justify-center">
        <div className="container">
          <InformatinComponent />
        </div>
      </section>

      <section className="pt-12 flex justify-center">
        <div className="container">
          <JalurList />
        </div>
      </section>
    </>
  );
}

export default Page;
