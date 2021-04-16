import React from 'react';
import * as S from '../styled/MainStyled/QuestionsStyle';
import closeimg from '../../assets/closeimg.png';

const QuestModal = ({
    visible,
    onClose,
    message,
    }) => {
    
      const close = (e) => {
        if (onClose) {
          onClose(e)
        }
      }

    return (
        <S.ModalBox visible={visible}>
<<<<<<< HEAD
            <S.ModalBackground>
=======
            <S.ModalBackground id="asd">
>>>>>>> develop
                    <S.Modal>
                        <S.ModalClose>
                            <img src={closeimg} alt="사진" className="modal-close" onClick={close}/>
                        </S.ModalClose>
                        <S.ModalContant>
                            {message}
                        </S.ModalContant>
                    </S.Modal>
            </S.ModalBackground>
        </S.ModalBox>
    )
}

export default QuestModal;