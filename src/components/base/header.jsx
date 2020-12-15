import styled from "styled-components";
import {  SILVER_GREY } from "../../utils/colors";

const Header = styled.header`
  background: linear-gradient(135deg, #00023b 0%, #00023b 50%, #313264 100%);
  border-bottom: 2px solid ${SILVER_GREY};
  min-height: 5rem;
  padding: 0 2rem;
`;

export default Header;
