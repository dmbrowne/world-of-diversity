import React, { useContext, FC, useEffect, useState } from "react";
import { Image as DatoImage, ResponsiveImageType } from "react-datocms";
import { Grid, Box, Heading, Paragraph, Button, ResponsiveContext, Text } from "grommet";
import styled from "styled-components";
import PageHeader from "@components/page-header";
import { Snackbar } from "@material-ui/core";
import { Close, FormClose } from "grommet-icons";

interface Props {
  title: string;
  subtitle?: string;
  books: {
    id: string;
    price: number;
    title: string;
    excerpt: string;
    isOutOfStock: boolean;
    frontCover: {
      url: string;
      responsiveImage: ResponsiveImageType;
    };
  }[];
}

const SBookCoverContainer = styled(Box)`
  height: 290px;
  width: 200px;
  flex-shrink: 0;
  border: 2px solid ${(props) => props.theme.global?.colors?.["light-6"]?.toString()};
`;

const BooksListingPage: FC<Props> = ({ books, title, subtitle }) => {
  const screensize = useContext(ResponsiveContext);
  const [showCartAdded, setShowCartAdded] = useState<string | void>();
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

  useEffect(() => {
    const { Snipcart } = window as any;
    Snipcart.ready.then(() => {
      Snipcart.events.on("item.added", (cartItem: any) => {
        console.log(cartItem);
        setShowCartAdded(`"${cartItem.name}" added to cart`);
      });
      Snipcart.events.on("item.updated", (cartItem: any) => {
        console.log("helllo");
        setShowCartAdded("Cart updated");
      });
    });
  }, []);

  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />
      <Grid
        columns={{ count: colCount, size: "auto" }}
        justify="start"
        gap="small"
        margin={{ horizontal: "medium", vertical: "large" }}
      >
        {books.map((book) => {
          const buyDetails = {
            "data-item-id": book.id,
            "data-item-price": book.price,
            "data-item-url": `${process.env.NEXT_PUBLIC_BOOKSTORE_URL}`,
            "data-item-name": book.title,
            "data-item-description": book.excerpt,
            "data-item-image": book.frontCover?.url,
            ...(book.isOutOfStock ? { "data-item-max-quantity": 0 } : {}),
          };
          return (
            <Box
              key={book.id}
              direction={screensize === "small" ? "column" : "row"}
              as="article"
              gap="small"
              margin={{ top: "small", bottom: "medium" }}
            >
              <SBookCoverContainer>
                {book?.frontCover?.responsiveImage && <DatoImage data={book.frontCover.responsiveImage} />}
              </SBookCoverContainer>
              <Box>
                <Heading as="header" level={3} size="small" color="neutral-2" children={book.title} />
                <Paragraph children={book.excerpt} />
                <Box direction="row" gap="xsmall" align="center">
                  <Text children="Price:" size="small" />
                  <Text color="neutral-1" children={`£${book.price.toFixed(2)}`} />
                </Box>
                <Box height="32px" margin={{ top: "xsmall", bottom: "small" }}>
                  {book.isOutOfStock && (
                    <Box round={{ size: "xxsmall" }} background="neutral-4" pad="xsmall" alignSelf="start">
                      <Text weight="bold" size="small">
                        Out of stock
                      </Text>
                    </Box>
                  )}
                </Box>
                <Box round={{ size: "xsmall" }} elevation="small" width="250px">
                  <Button
                    disabled={book.isOutOfStock}
                    className="snipcart-add-item"
                    {...buyDetails}
                    fill={true}
                    label="Purchase"
                    primary
                  />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={!!showCartAdded}
        autoHideDuration={4000}
        onClose={() => setShowCartAdded()}
        message={showCartAdded || "Item added to cart"}
        action={
          <Box align="center" direction="row">
            <Button size="small" className="snipcart-checkout" label="View cart" color="brand" />
            <Button
              style={{ paddingRight: 0 }}
              size="small"
              aria-label="close"
              icon={<FormClose />}
              onClick={() => setShowCartAdded()}
            />
          </Box>
        }
      />
    </>
  );
};

export default BooksListingPage;
