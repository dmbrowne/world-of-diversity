import React, { useContext, FC } from "react";
import { Image as DatoImage, ResponsiveImageType } from "react-datocms";
import { Grid, Box, Heading, Paragraph, Button, ResponsiveContext, Text } from "grommet";
import styled from "styled-components";
import PageHeader from "@components/page-header";

interface Props {
  title: string;
  subtitle?: string;
  books: {
    id: string;
    price: number;
    title: string;
    excerpt: string;
    frontCover: {
      url: string;
      responsiveImage: ResponsiveImageType;
    };
  }[];
}

const SBookCoverContainer = styled(Box)`
  height: 290px;
  flex-shrink: 0;
  border: 2px solid ${(props) => props.theme.global?.colors?.["light-6"]?.toString()};

  img {
    height: 100%;
  }
`;

const BooksListingPage: FC<Props> = ({ books, title, subtitle }) => {
  const screensize = useContext(ResponsiveContext);
  const colCount = (() => {
    switch (screensize) {
      case "xlarge":
        return 3;
      case "medium":
      case "large":
        return 2;
      default:
        return 1;
    }
  })();

  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />
      <Grid
        columns={{ count: colCount, size: "auto" }}
        justify="start"
        gap="small"
        margin={{ horizontal: "medium", top: "large" }}
      >
        {books.map((book) => {
          const buyDetails = {
            "data-item-id": book.id,
            "data-item-price": book.price,
            "data-item-url": "/",
            "data-item-name": book.title,
            "data-item-description": book.excerpt,
            "data-item-image": book.frontCover?.url,
          };
          return (
            <Box key={book.id} direction="row" as="article" gap="small">
              <SBookCoverContainer>
                {book?.frontCover?.responsiveImage && <DatoImage data={book.frontCover.responsiveImage} />}
              </SBookCoverContainer>
              <Box>
                <Heading as="header" level={3} size="small" color="neutral-4" children={book.title} />
                <Paragraph children={book.excerpt} />
                <Box direction="row" gap="xsmall" align="center" margin={{ bottom: "xsmall" }}>
                  <Text children="Price:" size="small" />
                  <Text children={`£${book.price.toFixed(2)}`} />
                </Box>
                <Box round={{ size: "xsmall" }} elevation="small" alignSelf="start" width={{ min: "250px" }}>
                  <Button className="snipcart-add-item" {...buyDetails} fill={true} children="Purchase" primary />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </>
  );
};

export default BooksListingPage;
