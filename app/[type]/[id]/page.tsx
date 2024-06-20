import Image from "next/image";
import styles from "../../../styles/release.module.css";
import { getReleaseDeital } from "@/app/api/routes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Release",
  description: "Release page",
};

type Track = {
  position: string;
  title: string;
  duration: string;
};

type Release = {
  id: number;
  title: string;
  images: { uri: string }[];
  notes: string;
  community: {
    have: number;
  };
  tracklist: Track[];
};

type RouterParams = {
  params: {
    type: string;
    id: number;
  };
};

export default async function ReleasePage(id: RouterParams) {
  const release = await getReleaseDeital(id?.params?.type, id?.params?.id);

  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div className={styles.imgWrapper}>
          <Image
            width={300}
            height={300}
            src={release?.images?.[0]?.uri || release?.thumb}
            alt={release.title}
          />
        </div>

        <div className={styles.right}>
          <div className={styles.name}>{release.title}</div>
          <div className={styles.name}>{release.artists_sort}</div>
          <h1 className={styles.about}>{release.year}</h1>

          <p>Number of people in collection: {release.community?.have}</p>
        </div>
      </div>

      <div className={styles.trackList}>
        <ul>
          {release?.tracklist?.map((track: Track, idx: number) => (
            <li className={styles.trackLi} key={idx}>
              <span className={styles.trackNo}>{idx + 1}.</span>
              <span className={styles.trackTitle}>{track.title}</span>
              <span className={styles.trackDuration}>{track.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
