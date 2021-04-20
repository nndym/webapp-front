import { getStrapiUrl } from "./api";

export function getStrapiMedia(media:any) {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiUrl(media.url)
    : media.url;
  return imageUrl;
}