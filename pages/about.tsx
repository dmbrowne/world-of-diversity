import React, { FC } from "react";
import { ResponsiveImageType } from "react-datocms";
import Head from "next/head";
import DefaultLayout from "@layouts/defaultLayout";
import AboutPage from "@templates/about-page";
import { datoCMSRequest } from "@utils/dato-cms";

const ABOUT_QUERY = `
  query AboutTheAuthorQuery {
    aboutMe {
      intro
      title
      subtitle
      content
      authorQuote {
        quote
        image {
          responsiveImage(imgixParams: {fit: crop, w: "320", h: "320"}) {
            webpSrcSet
            srcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }
        }
      }
      authorGallery {
        id
        responsiveImage(imgixParams: {h: "350"}) {
          webpSrcSet
          srcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
    }
  }
`;

interface Props {
  data: {
    aboutMe: {
      title: string;
      subtitle?: string;
      intro?: string;
      content?: string;
      authorQuote?: [
        {
          quote: string;
          image: {
            responsiveImage: ResponsiveImageType;
          };
        }
      ];
      authorGallery?: {
        id: string;
        responsiveImage: ResponsiveImageType;
      }[];
    };
  };
}

const About: FC<Props> = ({ data: { aboutMe } }) => {
  const authorQuote = aboutMe.authorQuote && aboutMe.authorQuote.length > 0 ? aboutMe.authorQuote[0] : undefined;
  return (
    <DefaultLayout>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <AboutPage {...aboutMe} authorQuote={authorQuote} />
    </DefaultLayout>
  );
};

export const getStaticProps = async () => ({
  props: {
    data: await datoCMSRequest({ query: ABOUT_QUERY }),
  },
});

export default About;
