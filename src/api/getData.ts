import axios from 'axios';

const APIKEY = '964dc226dd5b57e892e6199735b6c55f';
const ForeignAPIKEY = '35e12e0db4498fc7c91609cc76ec546a';

// 获取疫情实时数据
export function getVirusDataOnTime() {
  return axios({
    method: 'get',
    url: `https://lab.isaaclin.cn/nCoV/api/overall`,
  });
}


// 获取疫情统计数据
export function getRumor(rumorPage: number | number) {
  return axios({
    method: 'get',
    url: `http://api.tianapi.com/txapi/rumour/index?key=${APIKEY}&page=${rumorPage}`,
  });
}

// 获取疫情趋势数据
export function getTrend() {
  return axios({
    method: 'get',
    url: `https://lab.isaaclin.cn/nCoV/api/overall?latest=0`,
  });
}

// 获取全国，世界疫情数据
export function getAreaData() {
  return axios({
    method: 'get',
    url: `https://vyps.api.storeapi.net/api/94/219?appid=13921&sign=73d9771862bb1c8f8a185e80ea770f5d`,
  });
}


// 获取疫情实时数据
export function getVirusDataList() {
  return axios({
    method: 'get',
    url: `http://api.tianapi.com/ncov/index?key=${APIKEY}`,
  });
}

// 获取海外疫情数据
export function getForeignCovidData() {
  return axios({
    method: 'get',
    url: `http://api.tianapi.com/ncovabroad/index?key=${ForeignAPIKEY}`,
  });
}


// 获取全国数据(腾讯接口)
export function getAreaDataTX(){
  var CryptoJS = require("crypto-js")
  // 云市场分配的密钥Id
  var secretId = "AKID3PGuOYC4Z95t76sS2a9iauNVqZ9H0XmlU9Q4";
  // 云市场分配的密钥Key
  var secretKey = "K98zHL5jDPD3kQrU2QFMD1YuOuPQkdHpD2Z2FVFc";
  var source = "market";

  // 签名
  var datetime = (new Date()).toUTCString();
  var signStr = "x-date: " + datetime + "\n" + "x-source: " + source;
  var sign = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(signStr, secretKey))
  var auth = 'hmac id="' + secretId + '", algorithm="hmac-sha1", headers="x-date x-source", signature="' + sign + '"';

  return axios({
    method:'GET',
    baseURL:'/tx',
    url:'/release/fy_details',
    headers:{
      "X-Source": source,
      "X-Date": datetime,
      "Authorization": auth,
      "Access-Control-Allow-Origin" :"*",
      "Access-Control-Allow-Credentials": false
    }
  })
}
