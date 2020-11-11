import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";

const Comments = ({ name, email, comment }) => {

  return (
    <S.CommentBox>
      <S.info>
        <span>{name}</span>
        <span>{email}</span>
        <span>{comment}</span>
      </S.info>
      <S.date></S.date>
    </S.CommentBox>
  );
};

export default Comments;
