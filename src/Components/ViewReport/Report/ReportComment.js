import React, { useState } from "react";
import { request, useRefresh } from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";
import Comments from "./Comments";

const ReportComment = ({ match, content, email, reportId }) => {
  //코멘트 버튼 클릭시
  const [reportComment, setReportComment] = useState([]);
  const refreshHandler = useRefresh();

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

      setReportComment(data.reportComment);

    } catch (e) {
      console.log('에러');
      console.error(e);
      switch (e.data.status) {
        case 400:
          alert("프로필 불러오기를 실패했습니다.");
          break;
        case 401:
          refreshHandler().then(() => {
           postReportComment();
          });
          break;
        default:
          break;
      }
    }
  };

  return (
    <S.CommentMain>
      <S.Add>
        <S.Search placeholder="댓글을 입력해주세요" content={reportComment.content}/>
        <div onClick={postReportComment}></div>
      </S.Add>
      <S.MainCom>
        {reportComment.map(({ userName, email, content }, i) => (
          <Comments key={i} name={userName} email={email} content={content} />
        ))}
      </S.MainCom>
    </S.CommentMain>
  );
};

export default ReportComment;
