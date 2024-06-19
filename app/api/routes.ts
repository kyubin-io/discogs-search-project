import { API_BASE, PER_RELEASE_PAGE } from "@/lib/constants";

export async function searchArtists(
  query: string,
  page: number,
  per_page: number
) {
  const response = await fetch(
    `${API_BASE}/database/search?q=${query}&type=artist&page=${page}&per_page=${per_page}&token=${process.env.NEXT_PUBLIC_DISCOG_TOKEN}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const json = await response.json();

  return json;
}
