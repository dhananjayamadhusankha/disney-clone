import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovie } from "@/lib/getMovies";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  const movies = await getDiscoverMovie(id);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl md:text-7xl font-bold px-10">Results for {genre}</h1>
        <MoviesCarousel movies={movies} title={`Genre`} isVertical />
      </div>
    </div>
  );
}

export default GenrePage;
