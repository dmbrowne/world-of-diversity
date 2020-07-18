import { FC } from "react";
import { ResponsiveImageType, Image as DatoImage } from "react-datocms";
import { Box, Image } from "grommet";

type ImageProps =
  | {
      src: string;
      responsiveImage?: null;
    }
  | {
      responsiveImage: ResponsiveImageType;
      src?: null;
    };

type Props = ImageProps & {
  size?: string;
};

const Avatar: FC<Props> = ({ responsiveImage, src, size = "medium" }) => {
  return (
    <Box align="center" justify="center" overflow="hidden" round="full" width={size} height={size}>
      {!!responsiveImage ? <DatoImage data={responsiveImage} /> : <Image src={src} />}
    </Box>
  );
};

export default Avatar;
