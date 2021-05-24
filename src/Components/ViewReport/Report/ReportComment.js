import React, { useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportComment = (props) => {
  const [value, setValue] = useState("");

  const comments = props.comments;
  const reportId = props.reportId;

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
        },
        window.location.reload()
      );
    } catch (e) {
      alert("댓글을 작성 할 수 없습니다.");
    }
  };

  //댓글 삭제
  const deleteReportComment = async (commentId) => {
    console.log(commentId);
    try {
      await request(
        "delete",
        `/comment/${commentId}`,
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );
      window.location.reload();
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
        {comments.map(({ userName, userEmail, content, commentId, isMine }) => (
          <S.CommentBox key={commentId}>
            <S.Info>
              <div></div>
              <Link to={`/user-profile/${userEmail}`} className="Name">
                {userName}
              </Link>
              <Link to={`/user-profile/${userEmail}`} className="Email">
                {userEmail}
              </Link>
              <span className="Comment">{content}</span>
              {isMine === true ? (
                <button
                  className="deleteButton"
                  onClick={() => deleteReportComment(commentId)}
                >
                  삭제
                </button>
              ) : null}
            </S.Info>
          </S.CommentBox>
        ))}
      </S.MainCom>
    </S.CommentMain>
  );
};

export default ReportComment;
