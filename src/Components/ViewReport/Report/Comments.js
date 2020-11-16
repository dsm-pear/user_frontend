import React from "react";
import { Link } from 'react-router-dom';
import * as S from "../../styled/ViewReport/MainStyle";

const Comments = ({ name, email, comment }) => {

  return (
    <S.CommentBox>
      <S.Info>
        <div></div>
        <Link to="/user-profile" className="Name">{name}</Link>
        <Link to="/user-profile"  className="Email">{email}</Link>
        <span  className="Comment">{comment}</span>
      </S.Info>
      <S.Date></S.Date>
    </S.CommentBox>
  );
};

export default Comments;
