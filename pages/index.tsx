import { FC, useRef, useEffect, useState } from "react";
import { ResponsiveImageType } from "react-datocms";
import { createMuiTheme, ThemeProvider as MaterialThemeProvider } from "@material-ui/core";
import { datoCMSRequest } from "@utils/dato-cms";
import HomePage from "@templates/home-page/home-page";
import TransparentHeaderLayout from "@layouts/transparent-header";

const HOMEPAGE_QUERY = `query HomePageQuery {
  homepage {
    headline
    title
    websiteDescription
    coverImage {
      responsiveImage {
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
    factHeadline
    factDetails
    factFigure {
      responsiveImage {
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
    servicesHeadline
    services {
      id
      header
      shortDescription
      image {
        responsiveImage {
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
    mailingListCtaTitle
    mailingListDescription
  }
}`;

type ImageType = {
  responsiveImage: ResponsiveImageType;
};

interface Props {
  data: {
    homepage: {
      title: string;
      websiteDescription?: string;
      coverImage: ImageType;
      factHeadline?: string;
      factDetails?: string;
      factFigure: ImageType;
      servicesHeadline?: string;
      services?: [
        {
          id: string;
          header: string;
          shortDescription?: string;
          image?: ImageType;
        }
      ];
      mailingListCtaTitle?: string;
      mailingListDescription?: string;
    };
  };
}

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Londrina Solid', Roboto, sans-serif",
  },
});

const Home: FC<Props> = ({ data: { homepage } }) => {
  const heroSectionRef = useRef<HTMLElement>();
  const [menuTransparency, setMenuTransparency] = useState(0);

  useEffect(() => {
    function monitorHeroSection() {
      if (!heroSectionRef.current) return;

      const { x, height, top } = heroSectionRef.current.getBoundingClientRect();
      const bottomPosition = x + top + height;
      const fixedBottomPostionInDocument = heroSectionRef.current.offsetTop + height;
      const ratioToWindowTopProximity = (fixedBottomPostionInDocument - bottomPosition) / fixedBottomPostionInDocument;

      if (menuTransparency < 1 && ratioToWindowTopProximity >= 1) setMenuTransparency(1);
      else setMenuTransparency(ratioToWindowTopProximity);
    }
    window.addEventListener("scroll", monitorHeroSection);
    return () => window.removeEventListener("scroll", monitorHeroSection);
  }, []);

  return (
    <TransparentHeaderLayout menuTransparency={menuTransparency}>
      <MaterialThemeProvider theme={theme}>
        <HomePage {...homepage} heroSectionRef={heroSectionRef} services={homepage.services || []} />
      </MaterialThemeProvider>
    </TransparentHeaderLayout>
  );
};

export const getStaticProps = async () => ({
  props: {
    data: await datoCMSRequest({ query: HOMEPAGE_QUERY }),
  },
});

export default Home;
