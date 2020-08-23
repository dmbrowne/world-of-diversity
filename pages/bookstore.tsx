import { FC } from "react";
import { ResponsiveImageType } from "react-datocms";
import DefaultLayout from "@layouts/defaultLayout";
import BooksListingPage from "@templates/books-listing-page";
import { datoCMSRequest } from "@utils/dato-cms";
import { GetStaticPropsContext } from "next";
import { PagePropsWithSocialMedia } from "../@types/page";

const BOOKS_QUERY = `query BooksListingQuery {
  booksPage {
    title
    subtitle
  }
  allBooks(first: "8") {
    price
    isOutOfStock
    title
    excerpt
    id
    frontCover {
      url
      responsiveImage(imgixParams: {fit: crop, w: "200", h: "290"}) {
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
  ...SocialMedia
}`;

interface Props {
  booksPage: {
    title: string;
    subtitle?: string;
  };
  allBooks: {
    id: string;
    price: number;
    isOutOfStock: boolean;
    title: string;
    excerpt: string;
    frontCover: {
      url: string;
      responsiveImage: ResponsiveImageType;
    };
  }[];
}

const BooksStore: FC<PagePropsWithSocialMedia<Props>> = ({ data, isPreview }) => {
  const title = data?.booksPage?.title;
  const subtitle = data?.booksPage?.subtitle;

  return (
    <DefaultLayout showPreviewNav={isPreview} socialMediaLinks={data.socialMedia}>
      <BooksListingPage title={title} subtitle={subtitle} books={data.allBooks} />
    </DefaultLayout>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => ({
  props: {
    data: await datoCMSRequest({ ...context, query: BOOKS_QUERY }),
    isPreview: !!context.preview,
  },
});

export default BooksStore;
