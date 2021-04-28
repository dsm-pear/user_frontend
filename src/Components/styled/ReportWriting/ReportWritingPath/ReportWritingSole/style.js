import styled from "styled-components";

export const ReportBody = styled.div`
  width: 100%;
  height: 100%;
`;

export const ReportMain = styled.div`
  &:hover {
    cursor: default;
  }
`;

export const ReportTitle = styled.div`
  width: 100%;
  height: 100%;

  input {
    width: 100%;
    background: #f8f8f8;
    border: 1px solid #f8f8f8;
    outline: none;
    padding: 0.8rem 0.8rem;
    font-family: BBTreeGL;
    font-weight: normal;
    font-size: 14px;
    text-align: left;

    &:hover {
      cursor: text;
    }
  }
`;

export const UseLang = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0.8rem;
  display: flex;
  background: #f8f8f8;
  border: 1px solid #f8f8f8;
  padding: 0.8rem 0.8rem;

  input {
    width: 100%;
    border: 1px solid #f8f8f8;
    background: #f8f8f8;
    outline: none;
    font-family: BBTreeGL;
    font-weight: normal;
    font-size: 14px;
    text-align: left;

    &:hover {
      cursor: text;
    }
  }

  &:hover {
    cursor: text;
  }
`;

export const colors = [
  "navajowhite",
  "lavender",
  "mistyrose",
  "lightgreen",
  "lavenderblush",
  "honeydew",
  "oldlace",
  "ivory",
];

export const Tag = styled.div`
  border: 1px solid;
  white-space: nowrap;
  color: #546e7a;
  background-color: ${({ index }) => colors[index % colors.length]};
  border: 1px solid ${({ index }) => colors[index % colors.length]};
  border-radius: 5px;
  padding: 0.1rem 0.3rem;
  font-family: BBTreeGL;
  font-size: 14px;
  margin-right: 0.4rem;

  &:hover {
    cursor: pointer;
  }
`;

export const ReprotWriteBox = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0.8rem;

  textarea {
    resize: none;
    width: 100%;
    background: #f8f8f8;
    border: 1px solid #f8f8f8;
    outline: none;
    padding: 0.8rem 0.8rem;
    font-family: BBTreeGL;
    font-size: 14px;
    text-align: left;

    &:hover {
      cursor: text;
    }
  }
`;

export const LinkBox = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    width: 100%;
    height: 100%;

    &:hover {
      cursor: text;
    }
  }
  span > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    background: #f8f8f8;
    border: 1px solid #f8f8f8;
    padding: 0.4rem 0.4rem;

    &:hover {
      cursor: text;
    }
  }
  div > img {
    width: 20px;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
  div > input {
    width: 100%;
    border: none;
    outline: none;
    background: #f8f8f8;
    margin-left: 0.4rem;
    font-family: BBTreeGL;
    font-size: 13px;

    &:hover {
      cursor: text;
    }
  }
`;

export const AttachFile = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const inAttachFile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  outline: none;
  padding: 0.4rem 0.4rem;
  background: #f8f8f8;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  &:hover {
    cursor: default;
  }

  img {
    width: 20px;
    margin-right: 8px;

    &:hover {
      cursor: pointer;
    }
  }

  div {
    font-size: 13px;
    font-family: BBTreeGL;
    color: gray;
  }

  span {
    font-size: 13px;
    font-family: BBTreeGL;
    color: gray;

    &:hover {
      cursor: default;
    }
  }
`;

export const SubmitBox = styled.div`
  width: 100%;
  display: flex;
  margin: 4.5rem 0 0;

  &:hover {
    cursor: default;
  }
`;

export const SaveSubBtn = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  &:hover {
    cursor: default;
  }
`;

export const SaveBtn = styled.div`
  div {
    text-align: center;
    width: 5.5rem;
    border: 1px solid #6192f3;
    border-radius: 18px;
    outline: none;
    background: #6192f3;
    transition: 0.3s;
    padding: 0.3rem 1rem;
    color: white;
    font-family: BBTreeGL;
    font-size: 13px;
  }
  div:hover {
    cursor: pointer;
    background: #719cf0;
    transition: 0.3s;
  }

  &:hover {
    cursor: default;
  }
`;

export const SubBtn = styled.div`
  margin-left: 1rem;

  div {
    text-align: center;
    width: 5.5rem;
    border: 1px solid #6192f3;
    border-radius: 18px;
    outline: none;
    background: #6192f3;
    transition: 0.3s;
    padding: 0.3rem 1rem;
    color: white;
    font-family: BBTreeGL;
    font-size: 13px;
  }
  div:hover {
    cursor: pointer;
    background: #719cf0;
    transition: 0.3s;
  }

  &:hover {
    cursor: default;
  }
`;
