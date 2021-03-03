import React, { useEffect } from "react";
import { request, useRefresh } from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";
import Comments from "./Comments";

const ReportComment = (props) => {
  //코멘트 버튼 클릭시

  const comment = props.comment;
  console.log(comment);
  const refreshHandler = useRefresh();

  //댓글 작성
  const postReportComment = async (e) => {
    try {
      await request(
        "post",
        `/report/comment/${props.reportId}`,
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        {
          content: e.target.value,
        }
      );
    } catch (e) {
      console.log("에러");
      console.error(e);
      /* switch (e.data.status) {
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
      } */
    }
  };

  return (
    <S.CommentMain>
      <S.Add>
        <S.Search placeholder="댓글을 입력해주세요" value={props.content} />
        <div onClick={postReportComment}></div>
      </S.Add>
      <S.MainCom>
        {/*  {props.comment.map(({ name, email, content, commentId }) => (
          <Comments
            commentId={commentId}
            name={name}
            email={email}
            content={content}
          />
        ))} */}
      </S.MainCom>
    </S.CommentMain>
  );
};

export default ReportComment;
