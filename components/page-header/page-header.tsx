import styled from "styled-components";
import { Heading } from "grommet";

const SPageHeader = styled.div`
  height: 350px;
  background: url(/assets/images/clouds-bg.svg) no-repeat center bottom/cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SShadowHeading = styled(Heading)`
  text-shadow: 1px 2px 4px rgba(72, 72, 72, 0.72);
`;

const SSubHeading = styled(Heading)`
  border-top: ${(props) => props.theme.global.colors.brand} 5px solid;
  color: rgba(255, 255, 255, 0.6);
`;

const PageHeader = ({ title, subtitle }) => {
  return (
    <SPageHeader>
      <div>
        <SShadowHeading level={1} textAlign="center" children={title} color="brand" margin="none" />
        <SSubHeading level={2} textAlign="center" margin="none" children={subtitle} />
      </div>
    </SPageHeader>
  );
};

export default PageHeader;
