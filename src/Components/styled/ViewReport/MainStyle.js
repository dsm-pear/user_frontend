import styled from "styled-components";
import { MainScrollBackground } from "../../../assets/index";
import { MainBackground } from "../../../assets/index";

const Main = styled.div`
  height: 100vh;
  background-image: url(${MainBackground});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Main };
