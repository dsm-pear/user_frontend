import React, { useState, useEffect } from 'react';
import Header from '../Main/Header';
import * as S from '../styled/NoticeStyled/NoticeContentStyle';
import Leave from '../../assets/ArrowImg/Leave.png';
import link from '../../assets/link.svg';
import { useHistory } from 'react-router-dom';
import { request, fileRequest, FileURL } from '../../utils/axios/axios'


const NoticeContent = (props) => {

    const { params } = props.match;
    const ContentId = params.data;

    const [ contentData, setContentData ] = useState(null);
    const [ fileData , setFileData] = useState(null);

    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    const history = useHistory()

    useEffect(() => {
        const DataApi = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setContentData(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await request(
                "get",
                `/notice/${ContentId}`,
                {},
                "", 
                );
                console.log(response)
                setContentData(response.data);
                
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
    
        DataApi();
    }, [ContentId]);

    useEffect(() => {
        const FileApi = async () => {
            try{
                const response = await fileRequest(
                    "get",
                    `/notice/files/1`,
                    {},
                    "",
                );
                setFileData(response);
                console.log(response);
            }catch(e){
                console.log(e)
            }
        }

        FileApi()
    }, [ContentId])

    const onBack = () => {
        history.push(`/notice?page=1`)
    }

    window.onpopstate = () => {
        history.push(`/notice?page=1`)
      };

    const FileDownload = () => {
        window.open(FileURL + `/notice/${fileData.id}`);
    }

    if (error) return <div>{error}</div>;
    if (!contentData) return <div>보고서가 없습니다!</div>;

    const createTime = contentData.createdAt.split(" ")

    return(
        <>
                <S.Background>
                    <Header/>

                    <S.NoticeContant key={contentData.id}>

                        {
                            loading && <div>Loading...</div>
                        }
                        <S.NoticeHeader>
                            <S.NoLeave>
                                <div onClick={onBack}>
                                    <img src={Leave} alt="사진"/>
                                </div>
                            </S.NoLeave>

                            <S.NoTitle>
                                {contentData.title}
                            </S.NoTitle>

                            <S.NoDay>
                                {createTime[0]}
                            </S.NoDay>
                        </S.NoticeHeader>

                        <S.NoticeContain>
                            {contentData.description}
                        </S.NoticeContain>


                        {
                            
                            contentData.fileName &&
                            <S.NoticeFile>
                                <S.FileLink>
                                <img onClick={FileDownload} src={link} alt="사진"/>
                                </S.FileLink>
                                <S.FileTitle>
                                    <div onClick={FileDownload}>
                                        {contentData.fileName}
                                    </div>
                                </S.FileTitle>
                            </S.NoticeFile>

                        }
                        

                    </S.NoticeContant>
                </S.Background>
        </>
    )
}

export default NoticeContent;
