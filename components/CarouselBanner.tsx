"use client";

import { Movie } from "@/typings";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";
Autoplay.globalOptions = { delay: 8000 };

function CarouselBanner({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  return (
    <div
      className="overflow-hidden cursor-pointer relative lg:-mt-40"
      ref={emblaRef}
    >
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-full w-fit min-w-0 relative">
            <Image
              src={getImagePath(movie.backdrop_path, true)}
              alt={movie.title}
              height={1920}
              width={1080}
            />
            <div className="">
              <h2 className="font-bold text-5xl max-w-xl z-50">
                {movie.title}
              </h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselBanner;
