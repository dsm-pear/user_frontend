import React from 'react';
import * as S from '../../styled/ViewReport/style';
import ReportGrade from "../ReportGrade";
import Categorybar from '../Category/Categorybar';
import MainProject from '../MainProject';
import Header from '../../Main/Header';

function ReportGame() {
    return (
      <S.Main>
        <Header></Header>
        <S.Cover>
          <div className="coverCategory">
            <ReportGrade grade="1" />
            <Categorybar/>
          </div>
          <MainProject/>
        </S.Cover>
      </S.Main>
    );
  }
  
  export default ReportGame;