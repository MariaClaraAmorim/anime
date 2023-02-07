import { Description } from "@components/Description";

interface AnimePageProps {
  params: { id: string };
}

export default async function Anime({ params }: AnimePageProps) {
  return <Description idAnime={params.id} />;
}
