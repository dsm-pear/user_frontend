import Axios from "axios";
export const MainURL = "http://smoothbear.eastus.cloudapp.azure.com:8000";
export const FileURL = "http://3.15.177.120:3000";

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
    })
    .catch((e) => {
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
    })
    .catch((e) => {
      console.error(e);
    });
}