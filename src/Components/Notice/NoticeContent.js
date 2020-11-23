import React, { useState, useEffect } from 'react';
import Header from '../Main/Header';
import * as S from '../styled/NoticeStyled/NoticeContentStyle';
import Leave from '../../assets/ArrowImg/Leave.png';
import link from '../../assets/link.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';


const NoticeContent = (props) => {
    const { params } = props.match;
    const pvalue = params.data - 1;

    const [ contentData, setContentData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    useEffect(() => {
        const DataApi = async () => {
          try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setContentData(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
              `https://jsonplaceholder.typicode.com/users`
            );
            setContentData(response.data);
            
          } catch (e) {
            setError(e);
          }
          setLoading(false);
        };
    
        DataApi();
      }, []);
    
      if (loading) return <div>로딩중..</div>;
      if (error) return <div>에러가 발생했습니다</div>;
      if (!contentData) return null;
    return(
        <>
                <S.Background>
                    <Header/>

                    <S.NoticeContant key={contentData[pvalue].id}>
                        <S.NoticeHeader>
                            <S.NoLeave>
                                <Link to={'/notice'}>
                                    <img src={Leave} alt="사진"/>
                                </Link>
                            </S.NoLeave>

                            <S.NoTitle>
                                {contentData[pvalue].name}
                            </S.NoTitle>

                            <S.NoDay>
                                {contentData[pvalue].username}
                            </S.NoDay>
                        </S.NoticeHeader>

                        <S.NoticeContain>
                            {contentData[pvalue].name}
                        </S.NoticeContain>

                        <S.NoticeFile>
                            <S.FileLink>
                            <img src={link} alt="사진"/>
                            </S.FileLink>
                            <S.FileTitle>
                                <div>파일이름</div>
                            </S.FileTitle>
                        </S.NoticeFile>

                    </S.NoticeContant>
                </S.Background>
        </>
    )
}

export default NoticeContent;

/*
const a = async () => {
        try{
            const res = await axios.get(`http://3.18.113.20:3000/file/13`);
            if(res.status === 200){
                setContentData(res.data)
                console.log(res);
            }
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        setLoading(false);
        a()
        setLoading(true);
    },[])
    */