import Axios from "axios";
import { useHistory } from 'react-router-dom';

export const MainURL = "http://10.156.147.50:8081";
export const FileURL = "http://10.156.147.50:3000";

export function request(method, url, header, data) {
  return Axios({
    method,
    url: MainURL + url,
    headers: header,
    data: data,
  })
    .then((res) => {
      console.log("다 받기 성공");
      console.log(res);
      return res;
    })
    .catch((e) => {
      console.log(MainURL + url)
      console.error(e);
    });
}

export function fileRequest(method, url, header, data) {
  return Axios({
    method,
    url: FileURL + url,
    headers: header,
    data: data,
  })
    .then((res) => {
      console.log("다 받기 성공");
      console.log(res);
      return res;
    })
    .catch((e) => {
      console.error(e);
    });

}


export function useRefresh(data) {
  const history = useHistory();
  return Axios({
    method : "put",
    url : MainURL + "/auth",
    headers: { "X-Refresh-Token" : localStorage.getItem('refresh-token')},
    data : data,
  })
  .then((res)=> {
    localStorage.setItem('access-token', res.data.access_token);
  })
  .catch(() => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    //history.push('/');
  })
}