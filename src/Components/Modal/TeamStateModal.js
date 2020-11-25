import React, {  } from 'react';
import * as S from '../styled/Modal/TsModalStyle';
import * as I from '../styled/Modal/TsModalInStyle';
import { Close } from "../../assets";

const TeamStateModal = () => {
    return (
        <S.Main>
            <S.ModalMain>
                <S.ModalSort>
                    <S.CloseBtn>
                        <span><img src={Close} alt="Close"/></span>
                    </S.CloseBtn>
                    <S.ClickMember>
                        <I.MemberBox>
                            <div>
                                <span>전규현(201215jgh@dsm.hs.kr)</span><input type="checkbox" name="Teaminfo" value="member"/>
                            </div>
                        </I.MemberBox>
                    </S.ClickMember>
                </S.ModalSort>
            </S.ModalMain>
        </S.Main>
    );
}

export default TeamStateModal;