import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { request, useRefresh } from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";

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
      console.error(e);
    }
  };

  return (
    <S.CommentMain>
      <S.Add>
        <S.Search placeholder="댓글을 입력해주세요" value={props.content} />
        <div onClick={postReportComment}></div>
      </S.Add>
      <S.MainCom>
{/*         {props.comment.map(({ name, email, content, commentId }) => (
          <S.CommentBox>
            <S.Info>
              <div></div>
              <Link to="/user-profile" className="Name">
                {name}
              </Link>
              <Link to="/user-profile" className="Email">
                {email}
              </Link>
              <span className="Comment">{comment}</span>
            </S.Info>
            <S.Date />
          </S.CommentBox>
        ))} */}
      </S.MainCom>
    </S.CommentMain>
  );
};

export default ReportComment;
