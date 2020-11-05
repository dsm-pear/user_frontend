import React, { useState } from 'react';
import NoticeContainer from './NoticeContainer';
import Header  from '../Main/Header';
import * as S from '../../style/NoticeStyled/NoticeStyle';
import DownArrow from '../../assets/ArrowImg/DownArrow.png';
import UpArrow from '../../assets/ArrowImg/UpArrow.png';

const Notice = () => {
    const [ range, setRange ] = useState("정렬");
    const [ show, setShow ] = useState(false);
    const [ img, setImg ] = useState(DownArrow);

    const onChoice = () => {
        if(show===true){
            setShow(false);
            setImg(DownArrow);
        }
        else{
            setShow(true);
            setImg(UpArrow);
        }
    }

    const onChange = (e) => {
        if(e === 1){
            setRange("최신순");
        }
        else if(e === 2){
            setRange("오래된순");
        }
    }

    return(
        <>
        <S.Background>
        <Header/>
        
            <S.NoticeBox>
                <S.NoticeSubBox>

                    <S.NoticeChoice onClick={onChoice}>
                        <S.Noticearr>{range}<img src={img}/></S.Noticearr>
                        {
                            show ?
                            <S.NoticeRange>
                                <S.NoticeC onClick={()=>onChange(1)}>최신순</S.NoticeC>
                                <S.NoticeC onClick={()=>onChange(2)}>오래된순</S.NoticeC>
                            </S.NoticeRange>
                            :null
                        }
                    </S.NoticeChoice>

                    <S.NoticeContant>

                        <NoticeContainer/>

                    </S.NoticeContant>

                    <S.NoticeAdd>
                        더보기
                        <S.NoticeAddImg>
                            <img  src={DownArrow}/>
                        </S.NoticeAddImg>
                    </S.NoticeAdd>
                    
                </S.NoticeSubBox>
            </S.NoticeBox>
        </S.Background>
        </>
    )
}

export default Notice;