"use client";
import { Carousel } from "@/components/components";
import { getLatestContent, getPengumuman } from "@/utils/data";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CarouselComponent() {
  const [pengumuman, setPengumuman] = useState();

  useEffect(() => {
    getPengumuman().then((val) => {
      const data = getLatestContent(val.data, 3);
      setPengumuman(data);
    });
  }, []);

  // console.log(pengumuman.data);

  return (
    <Carousel
      className="max-h-40 lg:max-h-96 overflow-hidden"
      autoplay={true}
      loop={true}
      autoplayDelay={10000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="z-0 absolute bottom-4 left-2/4 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}>
      {pengumuman &&
        pengumuman.map((item) => (
          <Image
            width={2940}
            height={1000}
            src={item.foto}
            alt="image 1"
            className="h-full w-full object-contain"
          />
        ))}
    </Carousel>
  );
}
