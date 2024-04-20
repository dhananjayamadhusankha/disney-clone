type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
    console.log(genre);
  return <div>GenrePage {id} {genre}</div>;
}

export default GenrePage;