import Axios from "axios";
const URL = "http://20.55.121.118:8000";
export function request(method, url, header, data) {
  return Axios({
    method,
    url: URL + url,
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
