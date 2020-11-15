import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";

const Comments = ({ name, email, comment }) => {

  return (
    <S.CommentBox>
      <S.Info>
        <div></div>
        <a href="/user-profile" className="Name">{name}</a>
        <a href="/user-profile"  className="Email">{email}</a>
        <a href="/user-profile"  className="Comment">{comment}</a>
      </S.Info>
      <S.Date></S.Date>
    </S.CommentBox>
  );
};

export default Comments;
