import CarouselComponent from "@/components/carousel/carousel";
import Berita from "@/components/content/berita/berita";
import CaraDaftar from "@/components/content/cara-daftar/cara-daftar";
import SearchJalur from "@/components/content/search-jalur/search-jalur";

export default function Home() {
  return (
    <>
      <CarouselComponent />
      <section className="pt-12 flex justify-center">
        <div className="container">
          <div className="lg:grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <SearchJalur />
            </div>
            <div>
              <CaraDaftar />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12 flex justify-center">
        <div className="container ">
          <Berita />
        </div>
      </section>
    </>
  );
}
