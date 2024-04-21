import { getImagePath } from "@/lib/getImagePath";
import { Movie } from "@/typings";
import Image from "next/image";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-md">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-900 dark:to-[#1A1C29]/80 z-10 rounded-md" />
      <p className="absolute z-20 bottom-5 left-5 text-white">{movie.title}</p>
      <Image
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        width={1920}
        height={1080}
        alt={movie.title}
        className="w-fit lg:w-[400px] h-56 object-cover object-center shadow-sm shadow-gray-900 drop-shadow-xl rounded-md"
      />
    </div>
  );
}

export default MovieCard;
