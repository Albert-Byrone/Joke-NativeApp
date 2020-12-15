import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "../root/store";

import Header from "../components/base/header";
import ContentContainer from "../components/base/container";
import AppRoutes from "./Routes";

const AppHeader = styled(Header)`
  align-items: center;
  display: flex;
`;
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <AppHeader>
      </AppHeader>
      <ContentContainer>
        <AppRoutes />
      </ContentContainer>
    </AppContainer>
  </Provider>
);

export default App;
