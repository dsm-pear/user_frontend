import React from "react";
import { request, useRefresh } from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";
import Comments from "./Comments";

const ReportComment = (props) => {
  //코멘트 버튼 클릭시
  
  const refreshHandler = useRefresh();

  //댓글 작성
  const postReportComment = async () => {
    try {
      await request(
        "post",
        `/report/comment/${props.reportId}`,
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        "",
      );

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
        <S.Search placeholder="댓글을 입력해주세요" content={props.content}/>
        <div onClick={postReportComment}></div>
      </S.Add>
      <S.MainCom>
        {props.comment.map(({ userName, email, content, commentId }) => (
          <Comments commentId={commentId} name={userName} email={email} content={content} />
        ))}
      </S.MainCom>
    </S.CommentMain>
  );
};

export default ReportComment;
