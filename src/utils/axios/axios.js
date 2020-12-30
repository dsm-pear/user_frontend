import Axios from "axios";
const MainURL = "http://10.156.147.50:8081";
const FileURL = "http://10.156.147.50:3000";

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
      console.error(e);
    });
}

export function FileRequest(method, url, header, data) {
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
