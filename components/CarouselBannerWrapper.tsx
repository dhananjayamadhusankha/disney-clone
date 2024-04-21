import { getDiscoverMovie } from "@/lib/getMovies";
import CarouselBanner from "./CarouselBanner";

type Props = {
  id?: string;
  keywords?: string;
};

async function CarouselBannerWrapper({ id, keywords }: Props) {
  const movies = await getDiscoverMovie(id, keywords);
  return <CarouselBanner movies={movies} />;

  // return <div>wrapper</div>
}

export default CarouselBannerWrapper;
