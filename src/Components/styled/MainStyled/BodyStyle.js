import styled from "styled-components";

export const MainBody = styled.div`
    height: 100vh;
    min-width: 1320px;
    width: 100%;
`

export const MainBox = styled.div`
    display: flex;
    height: 80vh;
`
  
export const LogoBox = styled.div`
    width: 50%;
    position: relative;
`

export const LogoSubBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
  
export const Logo = styled.div`
  padding-left: 100px;
  img {
    width: 300px;
  }
`;

export const LogoText = styled.div`
    width: 30%;
    font-size: 35px;
    display: flex;
    span{
        color: #5955d8;
    }
`

export const LoginBox = styled.div`
    width: 50%;
    position: relative;
`

export const LoginSubBox = styled.div`
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);

`
  
export const NextBox = styled.div`
    width: 100%;
    img{
        width: 100px;
        cursor: pointer;
        align-items: center;
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
    }
`
  
