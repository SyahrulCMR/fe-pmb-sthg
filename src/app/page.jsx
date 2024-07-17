import CarouselComponent from "@/components/carousel/carousel";
import Berita from "@/components/content/berita/berita";
import CaraDaftar from "@/components/content/cara-daftar/cara-daftar";
import SearchJalur from "@/components/content/search-jalur/search-jalur";

export default function Home() {
  return (
    <>
      <CarouselComponent />
      <section className="pt-12 flex justify-center">
        <div className="container px-5 sm:px-0">
          <div className="lg:grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <SearchJalur />
            </div>
            <div className="mt-5 sm:mt-0">
              <CaraDaftar />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12 flex justify-center">
        <div className="container px-5 sm:px-0">
          <Berita />
        </div>
      </section>
    </>
  );
}
