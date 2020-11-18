import React from "react";
import * as S from "../../styled/ViewReport/MainStyle";
import Comments from "./Comments";

const ReportComment = ({}) => {
  const comment = [
    {
      name: "강은빈",
      email: "kub0803@gmaile.com",
      comment:
        "오!! 획기적인 아이디어 입니다 오!! 획기적인 아이디어 입니다오!! 획기적인 아이디어 입니다오!! 획기적인 아이디어 입니다오!! 획기적인 아이디어 입니다오!! 획기적인 아이디어 입니다오!! 획기적인 아이디어 입니다오!! 획기적인 아이디어 입니다오!! 획기적인 아이디어 입니다오!! 획기적인 아이디어 입니다",
    },
    {
      name: "강은빈",
      email: "kub0803@gmaile.com",
      comment: "오!! 획기적인 아이디어 입니다",
    },
    {
      name: "강은빈",
      email: "kub0803@gmaile.com",
      comment: "오!! 획기적인 아이디어 입니다",
    },
    {
      name: "강은빈",
      email: "kub0803@gmaile.com",
      comment: "오!! 획기적인 아이디어 입니다",
    },
    {
      name: "강은빈",
      email: "kub0803@gmaile.com",
      comment: "오!! 획기적인 아이디어 입니다",
    },
    {
      name: "강은빈",
      email: "kub0803@gmaile.com",
      comment: "오!! 획기적인 아이디어 입니다",
    },
  ];
  return (
    <S.CommentMain>
      <S.Add>
        <S.Search placeholder="댓글을 입력해주세요" />
        <div></div>
      </S.Add>
      <S.MainCom>
        {comment.map(({ name, email, comment }, i) => (
          <Comments key={i} name={name} email={email} comment={comment} />
        ))}
      </S.MainCom>
    </S.CommentMain>
  );
};

export default ReportComment;
