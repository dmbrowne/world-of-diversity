import { FC } from "react";
import { ResponsiveImageType } from "react-datocms";
import DefaultLayout from "@layouts/defaultLayout";
import BooksListingPage from "@templates/books-listing-page";
import { datoCMSRequest } from "@utils/dato-cms";
import { GetStaticPropsContext } from "next";

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
}`;

interface Props {
  data: {
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
  };
}

const BooksStore: FC<Props> = ({ data }) => {
  const title = data?.booksPage?.title;
  const subtitle = data?.booksPage?.subtitle;

  return (
    <DefaultLayout>
      <BooksListingPage title={title} subtitle={subtitle} books={data.allBooks} />
    </DefaultLayout>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => ({
  props: {
    data: await datoCMSRequest({ ...context, query: BOOKS_QUERY }),
    isPreview: true,
  },
});

export default BooksStore;
