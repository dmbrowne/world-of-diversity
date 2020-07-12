import DefaultLayout from "../layouts/defaultLayout";
import PageHeader from "../components/page-header";
import { Grid, Image, Box, Heading, Paragraph, Button } from "grommet";

const books = [
  {
    id: "abfb9a18-1f07-4ff1-98fe-31be1cc880c9",
    title: "Just like you",
    description:
      "Nisi facilis atque eum fugit. Tenetur qui dignissimos. Doloribus debitis quam veritatis rerum blanditiis nemo quis distinctio. Laboriosam facilis vel itaque tempore fuga.",
    price: 999,
    cover: "/assets/images/white-book-beside-white-mug-2128012.jpg",
  },
  {
    id: "e1d841bb-fc33-42e0-bfd8-ed6b6ed906ea",
    title: "Ergonomic Granite Chips",
    description:
      "Veritatis voluptate odio voluptatem ex. Voluptatum laudantium et rerum omnis iusto quia. Quibusdam non omnis voluptas. Id dicta et qui magnam id. Eum eligendi neque.",
    price: 1299,
    cover: "/assets/images/close-up-of-paper-over-white-background-256450.jpg",
  },
  {
    id: "3849338a-d0ee-4874-b9a8-7da6045c5f8e",
    title: "Small Concrete Computer",
    description:
      "Aperiam quis culpa magnam eum pariatur voluptate nisi debitis quo. Voluptas dolor iure nobis ad maxime. Quam est ut vitae consequatur minus. Excepturi sunt impedit.",
    price: 699,
    cover: "/assets/images/take-the-risk-book-2386687.jpg",
  },
];

const BooksStore = () => {
  return (
    <DefaultLayout>
      <PageHeader title="Books" subtitle="Brief text describing books etc" />
      <Grid columns={{ count: 3, size: "auto" }} justify="start" gap="small" margin="medium">
        {books.map((book) => (
          <Box key={book.id} direction="row" as="article" gap="small">
            <Box height="200px" flex={{ shrink: 0 }}>
              <Image fit="contain" fill="vertical" src={book.cover} />
            </Box>
            <Box>
              <Heading as="header" level={3} color="neutral-4" children={book.title} />
              <Paragraph children={book.description} />
              <Box round={{ size: "xsmall" }} elevation="small" alignSelf="start" width={{ min: "250px" }}>
                <Button fill={true} children="Purchase" primary />
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </DefaultLayout>
  );
};

export default BooksStore;
