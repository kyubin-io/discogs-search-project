import Image from "next/image";
import styles from "../styles/artist.module.css";
import { getArtist } from "@/app/api/routes";
import MusicPNG from "../public/img/music.png";

export default async function ArtistInfo({ id }: { id: number }) {
  const artist = await getArtist(id);

  return (
    <section className={styles.section}>
      <div className={styles.imgWrapper}>
        <Image
          fill={true}
          src={artist?.images?.[0]?.uri || MusicPNG}
          alt={artist.name}
        />
      </div>

      <div className={styles.right}>
        <h1 className={styles.about}>About</h1>
        <div className={styles.name}>{artist.name}</div>
      </div>
    </section>
  );
}
