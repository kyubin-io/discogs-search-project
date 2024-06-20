import ArtistInfo from "@/components/ArtistInfo";
import Releases from "@/components/Releases";
import { Suspense } from "react";

type Release = {
  id: number;
  title: string;
  thumb: string;
};

export default function ArtistPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <ArtistInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>
        <Releases id={id} />
      </Suspense>
    </>
  );
}
