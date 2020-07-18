import Head from "next/head";
import { FC } from "react";
import { ResponsiveImageType } from "react-datocms";
import DefaultLayout from "@layouts/defaultLayout";
import BooksListingPage from "@templates/books-listing-page";
import { datoCMSRequest } from "@utils/dato-cms";

const BOOKS_QUERY = `query BooksListingQuery {
  booksPage {
    title
    subtitle
  }
  allBooks(first: "8") {
    price
    stock
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
      stock: number;
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
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css" />
      </Head>
      <BooksListingPage title={title} subtitle={subtitle} books={data.allBooks} />
      <div hidden id="snipcart" data-api-key={process.env.SNIPCART_API_KEY} data-config-add-product-behavior="none" />
      <script src="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js" />
    </DefaultLayout>
  );
};

export const getStaticProps = async () => ({
  props: {
    data: await datoCMSRequest({ query: BOOKS_QUERY }),
  },
});

export default BooksStore;
