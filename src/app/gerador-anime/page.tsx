import Image from "next/image";
import css from "./styles.module.css";

export default async function geradorPage() {
  return (
    <>
      <div className={css.container}>
        <div className={css.box}>
          {/* <Image src={`${animeApi}/${animeUrl}`} alt="anime" /> */}
          <Image
            className={css.imgAnimeGerado}
            src={"/thirteen.svg"}
            alt="anime"
            width={350}
            height={300}
          />
        </div>

        <div className={css.gerador}>
          <button className={css.btnGerador}>Gerar novo anime</button>
        </div>
      </div>
    </>
  );
}
