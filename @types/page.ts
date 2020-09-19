import { SocialMediaLinks } from "@components/footer/footer";

export interface PageProps<P> {
  isPreview: boolean;
  data: P;
}
export interface PagePropsWithSocialMedia<P> extends PageProps<P> {
  data: P & {
    socialMedia: SocialMediaLinks;
  };
}
