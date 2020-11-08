import React, { useState } from 'react';
import * as S from '../styled/SearchResult/SearchResultStyle';

const SearchResultContainer = () => {
    const [bdc, setBdc] = useState("");
    const [color, setColor] = useState("");

    //api에서 get하여 받은 데이터중에서 팀/개인/동아리를 구분하는 bdc

    let l = "개인";
    const asd = () => {
        if(l === "팀"){
            setBdc("팀");
            setColor("#6192f3")
        }
        else if(l === "개인"){
            setBdc("개인");
            setColor("#27d5b1");
        }
        else if(l === "동아리"){
            setBdc("동아리");
            setColor("#5955d8")
        }
        
    }

    return (
        <>
            <S.Container bordercolor={color}>
                <S.ContainerContant>
                    <S.ContainerBDC style={{color: color}}>
                        [{bdc}]
                    </S.ContainerBDC>
                    <S.ContainerTitle>
                        제목
                    </S.ContainerTitle>
                    <S.ContainerDay>
                        2020.11.03
                    </S.ContainerDay>
                </S.ContainerContant>
            </S.Container>

            <S.Container bordercolor={color}>
                <S.ContainerContant>
                    <S.ContainerBDC style={{color: color}}>
                        [{bdc}]
                    </S.ContainerBDC>
                    <S.ContainerTitle>
                        제목
                    </S.ContainerTitle>
                    <S.ContainerDay>
                        2020.11.03
                    </S.ContainerDay>
                </S.ContainerContant>
            </S.Container>
        </>
    )
}

export default SearchResultContainer;