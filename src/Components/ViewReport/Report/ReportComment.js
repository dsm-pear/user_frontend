import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request, useRefresh } from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportComment = (props) => {
  const [value, setValue] = useState("");
  //코멘트 버튼 클릭시
  const comments = props.comments;
  const reportId = props.reportId;

  const refreshHandler = useRefresh();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  //댓글 작성
  const postReportComment = async (e) => {
    e.preventDefault();

    try {
      await request(
        "post",
        `/comment/${reportId}`,
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        {
          content: value,
        }
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <S.CommentMain>
      <S.Add>
        <S.Search placeholder="댓글을 입력해주세요" onChange={onChange} />
        <div onClick={postReportComment}></div>
      </S.Add>
      <S.MainCom>
        {comments.map(({ userName, userEmail, content, commentId }) => (
          <S.CommentBox key={commentId}>
            <S.Info>
              <div></div>
              <Link to="/user-profile" className="Name">
                {userName}
              </Link>
              <Link to="/user-profile" className="Email">
                {userEmail}
              </Link>
              <span className="Comment">{content}</span>
            </S.Info>
            <S.Date />
          </S.CommentBox>
        ))}
      </S.MainCom>
    </S.CommentMain>
  );
};

export default ReportComment;
