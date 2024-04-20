import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if(!term) return notFound();

  const termToUse = decodeURI(term);
  return <div>SearchPage {termToUse}</div>;
}

export default SearchPage;
