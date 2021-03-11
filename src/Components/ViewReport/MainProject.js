import React, { useState } from "react";
//import { Link } from "react-router-dom";
//import queryString from "query-string";
//import * as N from "../styled/NoticeStyled/NoticeStyle";
//import {LeftArrow, RightArrow} from '../../assets/index';
import * as S from "../styled/ViewReport/style";
import Project from "./Project";
import ProHeader from "./ProHeader";
import { useHistory } from "react-router-dom";

//위에 카테고리 개인, 팀, 동아리
function MainProject(props) {
  const history = useHistory();
  const [reportId, setReportId] = useState("");
  console.log(props.ReportListResponses);

  const reportMain = () => {
    history.push(`/view-report/${reportId}`);
  };

  return (
    <>
      <S.MainProject>
        {/* 얘는 카테고리네임에게 setType을 전달함 */}
        <ProHeader setType={props.setType} />
        <S.MainCover>
          {props.ReportListResponses.map(
            ({ reportId, type, title, createdAt }, i) => (
              <Project
                key={i}
                reportId={reportId}
                team={type}
                title={title}
                date={createdAt}
              />
            )
          )}
        </S.MainCover>

        {/* <N.NoticeAdd>
          <N.NoticeAddNumber>
            <span onClick={prev}>이전</span>
            {processed(query)}
            <span onClick={next}>다음</span>
          </N.NoticeAddNumber>
        </N.NoticeAdd> */}
      </S.MainProject>
    </>
  );
}

export default MainProject;
