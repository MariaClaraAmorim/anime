"use client";
import { Anime } from "@dto/anime";
import { getAnime } from "@services/anime";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import css from "./styles.module.css";

interface Props {
  idAnime: string;
}

function Description({ idAnime }: Props) {
  const [anime, setAnime] = useState<Anime>();

  const getAnimeInformation = useCallback(async () => {
    const response = await getAnime(idAnime);

    setAnime(response);
  }, [idAnime]);

  useEffect(() => {
    getAnimeInformation();
  }, [getAnimeInformation]);

  return (
    <>
      <div className={css.container}>
        <div className={css.content} key={anime?.id}>
          <div className={css.wrapper}>
            <div>
              <Image
                className={css.imgAnime}
                src={anime?.images.large ?? ""}
                alt={anime?.title ?? ""}
                width={300}
                height={400}
              />
            </div>
            <div className={css.description}>
              <p className={css.title}>
                {anime?.title ?? ""} - {anime?.title_japanese ?? ""}
              </p>
              <ul className={css.items}>
                <li className={css.synopsis}>
                  <strong> Sinopse:</strong> {anime?.synopsis ?? ""}
                </li>
                <li className={css.liDescriptions}>
                  <strong> Duração:</strong> {anime?.duration ?? ""}
                </li>
                <li className={css.liDescriptions}>
                  <strong> Favoritado por:</strong> {anime?.favorites ?? ""}{" "}
                  pessoas
                </li>
                <li className={css.liDescriptions}>
                  <strong> Lançamento:</strong> {anime?.year ?? ""}
                </li>
              </ul>
            </div>
          </div>

          <div className={css.medias}>
            {anime?.trailer?.url ? (
              <iframe
                width="560"
                height="315"
                src={anime.trailer.embed_url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <div className={css.description}>
                Foi mal, meu parça! Não temos trailler para esse anime
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export { Description };
