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
  margin: 1.5rem 0 3rem;

  &:hover {
    cursor: default;
  }
`;

export const MakeTeam = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  width: 73%;
  height: 145px;

  &:hover {
    cursor: default;
  }

  span {
    width: 100%;
    height: 100%;
  }
`;

export const SetTeamName = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const TeamNameBox = styled.div`
  font-family: BBTreeGL;
  width: 100%;
  height: 100%;
`;

export const InputTeamName = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 0.8rem;
  border: 1px solid #4d4d4d;
  border-radius: 7px 7px 0 0;
  outline: none;

  &:hover {
    cursor: text;
  }
`;

export const MtBtnBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid #4d4d4d;
  border-radius: 0 0 7px 7px;
  border-top: none;
  padding: 0.4rem 0.8rem;

  &:hover {
    cursor: default;
  }
`;

export const MemberResult = styled.div`
  width: 80%;
  height: 100%;
  font-family: BBTreeGL;

  &:hover {
    cursor: default;
  }
`;

export const ResultHeader = styled.div`
  margin-bottom: 12px;

  &:hover {
    cursor: default;
  }
`;

export const ResultBody = styled.div`
  display: flex;
  height: 75%;
  overflow-y: scroll;
  overflow-x: auto;
  font-size: 12px;
  white-space: pre;
  flex-wrap: wrap;

  &:hover {
    cursor: default;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #81bcff, #56d4e2);
    border-radius: 10px;
    &:hover {
      background: linear-gradient(135deg, #9dc9fa, #77dce6);
    }
  }
`;

export const MtFlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;

  &:hover {
    cursor: default;
  }
`;

export const MtBtn = styled.div`
  text-align: center;
  width: 5.7rem;
  height: 24px;
  margin-top: 6rem;
  border: 1px solid #6192f3;
  border-radius: 18px;
  outline: none;
  background: #6192f3;
  transition: 0.3s;
  padding: 0.3rem 1rem;
  color: white;
  font-family: BBTreeGL;
  font-size: 13px;

  &:hover {
    cursor: pointer;
    background: #719cf0;
    transition: 0.3s;
  }
`;

export const SaveSubBtn = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  width: 27%;
  display: flex;
  justify-content: flex-end;
  margin-top: 9.2rem;

  &:hover {
    cursor: default;
  }
`;

export const TeamName = styled.div`
  width: ${({ width }) => width};
  transition: all 0.6s;
  background: #f8f8f8;
  outline: none;
  border: 1px solid #f8f8f8;
  border-radius: 21px;
  padding: 0.3rem 1rem;

  span > input {
    background: #f8f8f8;
    outline: none;
    border: 1px solid #f8f8f8;
    text-align: left;
    font-size: 13px;
    font-family: BBTreeGL;
  }
`;

export const SaveBtn = styled.div`
  margin-right: 1rem;

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
