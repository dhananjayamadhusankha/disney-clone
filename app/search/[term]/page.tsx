import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) return notFound();

  const termToUse = decodeURI(term);

  // API call to get the Searched Movies
  const movies = await getSearchMovies(termToUse);

  // API call to get the Popular Movies
  const popularMovies = await getPopularMovies();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="font-bold text-6xl md:text-7xl px-10">Results for {termToUse}</h1>
        <MoviesCarousel movies={movies} title="Movies" isVertical />
        <MoviesCarousel movies={popularMovies} title="You may also like" />
      </div>
    </div>
  );
}

export default SearchPage;
