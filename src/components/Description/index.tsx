import { getAnime } from "@services/anime";
import Image from "next/image";
import css from "./styles.module.css";

interface Props {
  idAnime: string;
}

async function Description({ idAnime }: Props) {
  const anime = await getAnime(idAnime);

  return (
    <div className={css.container}>
      <div key={anime?.id}>
        <div className={css.box}>
          <Image
            src={anime?.images.large ?? ""}
            alt={anime?.title ?? ""}
            width={225}
            height={318}
          />
          <div className={css.informations}>
            <p className={css.title}>
              {anime?.title ?? ""} - {anime?.title_japanese ?? ""}
            </p>

            <ul className={css.itemsDescriptions}>
              <li className={css.liDescriptions}>Sinopse: {anime?.synopsis ?? ""}</li>
              <li className={css.liDescriptions}>Duração: {anime?.duration ?? ""}</li>
              <li className={css.liDescriptions}>Favoritado: {anime?.favorites ?? ""}</li>
              <li className={css.liDescriptions}>Lançamento: {anime?.year ?? ""}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Description };
