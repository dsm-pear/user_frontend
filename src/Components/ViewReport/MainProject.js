import React, { useEffect, useState } from "react";
import { request, useRefresh } from "../../utils/axios/axios";
import { Link } from "react-router-dom";
import queryString from "query-string";
import * as N from "../styled/NoticeStyled/NoticeStyle";
//import {LeftArrow, RightArrow} from '../../assets/index';
import * as S from "../styled/ViewReport/style";
import ProjectHeader from "./ProjectHeader";
import Project from "./Project";

function MainProject({ type, field, grade }, location) {
  const [ReportListResponses, setReportListResponses] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [EndPage, setEndPage] = useState(1);
  const [page, setPage] = useState(5);
  const [basicsPage, setBasicPage] = useState(1);
  let page_arr = [];

  const query = queryString.parse(location.search);
  const refreshHandler = useRefresh();

  useEffect(() => {
    //프로젝트 목록 리스트 얻어오기
    const getProjectList = async () => {
      try {
        const data = await request(
          "get",
          `/report/filter?size=6&page=0&type=&field=&grade=${query}`,
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          ""
        );
        //데이터 출력
        console.log(data);
        setReportListResponses(data.data.reportResponses);
      } catch (e) {
        console.error(e);
        console.lof(e.data.status);
        switch (e.data.status) {
          case 400:
            alert("프로필 불러오기를 실패했습니다.");
            break;
          case 401:
            refreshHandler().then(() => {
              getProjectList();
            });
            break;
          default:
            break;
        }
      }
    };

    getProjectList();
  }, []);

  //페이지 넘버링
  if (EndPage < 5) {
    for (let i = basicsPage; i <= EndPage; i++) {
      page_arr[i] = i;
    }
  } else {
    for (let i = basicsPage; i <= page; i++) {
      page_arr[i] = i;
    }
  }

  const processed = (querys) =>
    page_arr.map((num) => {
      if (Number(querys.page) !== num) {
        return (
          <Link
            onClick={() => setNowPage(num)}
            to={`/report/filter?size=6page=${page_arr[num]}type=${type}&grade=${query}&field=${field}`}
            key={num}
          >
            {" "}
            {page_arr[num]}{" "}
          </Link>
        );
      } else {
        return (
          <Link
            onClick={() => setNowPage(num)}
            to={`/view-report/report/filter?size=6page=${page_arr[num]}type=${type}&grade=${query}&field=${field}`}
            style={{ color: "#6192f3" }}
            key={num}
          >
            {" "}
            {page_arr[num]}{" "}
          </Link>
        );
      }
    });

  const prev = () => {
    if (basicsPage !== 1) {
      if (page % 5 !== 0) {
        setPage(page - (page % 5));
        setBasicPage(basicsPage - (basicsPage % 5) - 4);
      } else {
        setPage(page - 5);
        setBasicPage(basicsPage - 5);
      }
    }
  };
  const next = () => {
    if (page < EndPage) {
      if (EndPage < page + 5) {
        setPage(EndPage);
        setBasicPage(basicsPage + 5);
      } else {
        setPage(page + 5);
        setBasicPage(basicsPage + 5);
      }
    }
  };

  return (
    <>
      <S.MainProject>
        <ProjectHeader />
        <S.MainCover>
          {ReportListResponses.map(({ reportId, type, title, createdAt }) => (
            <Project
              reportId={reportId}
              team={type}
              title={title}
              date={createdAt}
            />
          ))}
        </S.MainCover>

        <N.NoticeAdd>
          <N.NoticeAddNumber>
            <span onClick={prev}>이전</span>
            {processed(query)}
            <span onClick={next}>다음</span>
          </N.NoticeAddNumber>
        </N.NoticeAdd>
      </S.MainProject>
    </>
  );
}

export default MainProject;
