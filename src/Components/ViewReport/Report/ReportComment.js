import React from "react";
import { useState } from "react";
import { request } from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";
import Comments from "./Comments";

const ReportComment = ({ match, content, userName, email, reportId }) => {
  //코멘트 버튼 클릭시
  const [reportComment, setReportComment] = useState(null);

  const postReportComment = async () => {
    try {
      const data = await request(
        "post",
        `/report/comment/${match.params.reportid}`,
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        {
          userEmail: email,
          content,
          reportId,
        }
      );

      setReportComment(data.data);

    } catch (e) {
      console.log('에러');
      console.error(e);
    }
  };

  const comment = [
    {
      name: userName,
      email,
      content,
    },
  ];

  return (
    <S.CommentMain>
      <S.Add>
        <S.Search placeholder="댓글을 입력해주세요" content={reportComment.content}/>
        <div onClick={postReportComment}></div>
      </S.Add>
      <S.MainCom>
        {comment.map(({ userName, email, content }, i) => (
          <Comments key={i} name={userName} email={email} content={content} />
        ))}
      </S.MainCom>
    </S.CommentMain>
  );
};

export default ReportComment;
