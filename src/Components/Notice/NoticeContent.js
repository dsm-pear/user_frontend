import React, { useState } from 'react';
import Header from '../Main/Header';
import * as S from '../styled/NoticeStyled/NoticeContentStyle';
import Leave from '../../assets/ArrowImg/Leave.png';
import link from '../../assets/link.svg';
import { Link } from 'react-router-dom';


const NoticeContent = (props) => {
    const { params } = props.match;
    console.log(params.data);

    const [ contentData, setContentData ] = useState("");
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    // axios.get('/https://api.dsm-pear.hs.kr/notice/', {
    //     params: {
    //         noticeId: params.data
    //     }
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //     if(response.status === 200){
    //         setContentData(response.data)
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     setError(error)
    // });

    return(
        <>
                <S.Background>
                    <Header/>

                    <S.NoticeContant key={contentData.notice_id}>
                        <S.NoticeHeader>
                            <S.NoLeave>
                                <Link to={'/notice'}>
                                    <img src={Leave} alt="사진"/>
                                </Link>
                            </S.NoLeave>

                            <S.NoTitle>
                                {params.data}
                            </S.NoTitle>

                            <S.NoDay>
                                {contentData.created_at}
                            </S.NoDay>
                        </S.NoticeHeader>

                        <S.NoticeContain>
                            {contentData.description}
                        </S.NoticeContain>

                        <S.NoticeFile>
                            <S.FileLink>
                            <img src={link} alt="사진"/>
                            </S.FileLink>
                            <S.FileTitle>
                                <div>아무말 대잔치</div>
                            </S.FileTitle>
                        </S.NoticeFile>

                    </S.NoticeContant>
                </S.Background>
        </>
    )
}

export default NoticeContent;