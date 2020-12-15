import styled from "styled-components";

import media from "../../utils/media";
// import { WHITE_GREY } from "../../utils/colors";

const ContentContainer = styled.div`
  background-color: smokewhite;
  height: 100%;
  flex: 1 0 auto;

  ${media.small`
    padding: 0 2rem;
  `};
`;

export default ContentContainer;
