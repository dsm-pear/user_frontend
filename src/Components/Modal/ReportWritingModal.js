import React, { useState } from 'react';
import * as S from '../styled/Modal/RwModalStyle';
import * as I from '../styled/Modal/RwModalInStyle';
import { Close } from "../../assets";
import { searchImg } from "../../assets";
import { NowTeam } from "../../assets";
import { clickNT } from "../../assets";

const ReportWritingModal = ({setOpen, setMyHei, open, myHei, opas}) => {
    const [ toggled, setToggled ] = useState(false);
    
    const onClick = () => {
        setOpen("hidden")
        setMyHei("0")
    }

    const btnClick = () => {
        setToggled(!toggled);
    }

    return (
        <S.Main visibility={open}>
            <S.ModalMain height={myHei} opas={opas}>
                <S.ModalSort>
                    <S.CloseBtn onClick={onClick}>
                        <span><img src={Close} alt="Close"/></span>
                    </S.CloseBtn>
                    <S.SearchInput>
                        <I.BorderInput>
                            <form name="input-name" action="" method="post">
                                <span><input type={Text} /><img src={searchImg} alt="search" /></span>
                            </form>
                        </I.BorderInput>
                    </S.SearchInput>
                    <S.SearchResult>
                        <I.BorderResult>
                            <div>
                                <form name="team-member" action="" method="post">
                                    <div>
                                        <span>전규현(201215jgh@dsm.hs.kr)</span><input type="checkbox" name="Teaminfo" value="member"/>
                                    </div>
                                </form>
                           </div>
                        </I.BorderResult>
                    </S.SearchResult>
                    <S.TeamState>
                        <I.BorderState onClick={btnClick}>
                            <span>현재 팀 상태</span>
                            {
                                toggled === true ?
                                <img src={clickNT} alt="clickNT"/>
                                :<img src={NowTeam} alt="NowTeam"/>
                            }
                        </I.BorderState>
                    </S.TeamState>
                </S.ModalSort>
            </S.ModalMain>
        </S.Main>
    );
}

export default ReportWritingModal;