import React, { useState } from 'react';
import NoticeContainer from './NoticeContainer';
import Header  from '../Main/Header';
import * as S from '../styled/NoticeStyled/NoticeStyle';
import DownArrow from '../../assets/ArrowImg/DownArrow.png';
import UpArrow from '../../assets/ArrowImg/UpArrow.png';

const Notice = () => {
    const [ range, setRange ] = useState("정렬");
    const [ show, setShow ] = useState(false);
    const [ img, setImg ] = useState(DownArrow);

    const onChoice = () => {
        if(show){
            setShow(false);
            setImg(DownArrow);
        }
        else{
            setShow(true);
            setImg(UpArrow);
        }
    }

    const onNew = () => {
        setRange("최신순");
    }

    const onOld = () => {
        setRange("오래된순");
    }

    return(
        <>
        <S.Background>
        <Header/>
        
            <S.NoticeBox>
                <S.NoticeSubBox>

                    <S.NoticeChoice onClick={onChoice}>
                        <S.Noticearr>{range}<img src={img} alt="사진"/></S.Noticearr>
                        {
                            show ?
                            <S.NoticeRange>
                                <S.NoticeC onClick={onNew}>최신순</S.NoticeC>
                                <S.NoticeC onClick={onOld}>오래된순</S.NoticeC>
                            </S.NoticeRange>
                            :null
                        }
                    </S.NoticeChoice>

                    <S.NoticeContant>

                        <NoticeContainer/>

                    </S.NoticeContant>

                    <S.NoticeAdd>
                        <S.NoticeAddNumber>
                            <a>1</a>
                            <a>2</a>
                            <a>3</a>
                            <a>4</a>
                            <a>5</a>
                        </S.NoticeAddNumber>
                    </S.NoticeAdd>
                    
                </S.NoticeSubBox>
            </S.NoticeBox>
        </S.Background>
        </>
    )
}

export default Notice;