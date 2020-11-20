import React from 'react';
import * as S from '../styled/Modal/SrModalStyle';
import { Close } from "../../assets";


const SubmitReportModal = ({setState, setOpa, state, opa}) => {
    const onClick = () => {
        setState("hidden");
        setOpa("0");
    }

    return (
        <S.Main opacity={opa} visibility={state}>
            <S.ModalMain>
                <S.ModalSort>
                    <S.CloseBtn onClick={onClick}>
                        <span><img src={Close} alt="Close"/></span>
                    </S.CloseBtn>
                    <S.ModalHeader>
                        <span>보고서를 </span><span>제출하겠습니까?</span>
                    </S.ModalHeader>
                    <S.ModalMainText>
                        <span>첨부 파일의 확장자가 PDF형식이 맞는지 파일명은 프로젝트명 / 학번 / 이름</span><p>
                        </p><span>순으로 작성 되어있는지 다시 한번 더 확인해주시기 바랍니다. 만약 위의 내용을</span><p>
                        </p><span>잘못 작성할 경우 보고서가 제출되지 않을 수 있습니다. 확인하고 제출 바랍니다.</span>
                    </S.ModalMainText>
                    <S.SubmitBtn>
                        <span>제출</span>
                    </S.SubmitBtn>
                </S.ModalSort>
            </S.ModalMain>
        </S.Main>
    );
}

export default SubmitReportModal;