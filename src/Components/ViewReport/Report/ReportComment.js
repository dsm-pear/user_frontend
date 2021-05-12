import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { request /* useRefresh */ } from "../../../utils/axios/axios";
import * as S from "../../styled/ViewReport/MainStyle";

const ReportComment = (props) => {
  const [value, setValue] = useState("");
  const history = useHistory();
  //코멘트 버튼 클릭시

  const comments = props.comments;
  const reportId = props.reportId;

  //const refreshHandler = useRefresh();

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
      console.error(e);
    }
  };

  //댓글 삭제
  //코멘트 아이디 가져오기
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

  //유저 프로필 이동 이메일 보냄
  const userProfileMove = (userEmail) => {
    console.log(userEmail);
    history.push({
      pathname: `/user-profile?useremail=${userEmail}`,
    });
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
              <Link
                to={`/user-profile/${userEmail}`}
                onClick={() => userProfileMove(userEmail)}
                className="Email"
              >
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

            <S.Date />
          </S.CommentBox>
        ))}
      </S.MainCom>
    </S.CommentMain>
  );
};

export default ReportComment;
