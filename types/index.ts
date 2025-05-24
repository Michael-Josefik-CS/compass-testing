export interface Experience {
  uid: string;
  title: string;
  description: string;
  region?: {
    title: string;
  };
  hero_image?: {
    url: string;
  };
}