import Axios from "axios";
const URL = "https://api.dsm-pear.hs.kr";
export function request(method, url, header, data) {
  return Axios({
    method,
    url: URL + url,
    headers: header,
    data: data,
  })
    .then((res) => res.json())
    .catch((e) => console.error(e));
}
