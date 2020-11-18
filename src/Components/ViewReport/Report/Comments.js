import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";

const Comments = ({ name, email, comment }) => {
  return (
    <S.CommentBox>
      <S.Info>
        <div></div>
        <span className="Name">{name}</span>
        <span className="Email">{email}</span>
        <span className="Comment">{comment}</span>
      </S.Info>
      <S.Date></S.Date>
    </S.CommentBox>
  );
};

export default Comments;
