import axios from 'axios';

const APIKEY = '964dc226dd5b57e892e6199735b6c55f';
// 获取疫情实时数据
export function getVirusDataOnTime() {
  return axios({
    method: 'get',
    url: `https://lab.isaaclin.cn/nCoV/api/overall`,
  });
}
// 获取疫情统计数据
export function getVirusDataStatic() {
  return axios({
    method: 'get',
    url: `http://api.tianapi.com/txapi/ncovcity/index?key=${APIKEY}`,
  });
}

// 获取全国，世界疫情数据
export function getAreaData() {
  return axios({
    method: 'get',
    url: `https://vyps.api.storeapi.net/api/94/219?appid=13921&sign=73d9771862bb1c8f8a185e80ea770f5d`,
    // url:`https://lab.isaaclin.cn/nCoV/api/area?countryEng=China`,
    // url:"/api/area?countryEng=China",
  });
}

// 获取疫情实时数据
export function getVirusDataList() {
  return axios({
    method: 'get',
    url: `http://api.tianapi.com/ncov/index?key=${APIKEY}`,
  });
}
