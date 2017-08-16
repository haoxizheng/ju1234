/**
 * intro：       request function
 * description：
 * author：      jufei
 * date：        2017/8/16
 */

import axios from 'axios';
import qs from 'qs';

//=============================== GET =====================================
const Get = function (url,params) {
  return axios.get(url,{
    params
  })
};

//=============================== POST =====================================
//  content-type='application/json'
const Post = function (url,data) {
  return axios.post(url,data)
};

// content-type='application/x-www-form-urlencoded'
const PostForm = (url, data) => {
  return axios.post(url, qs.stringify(data, {
    arrayFormat: 'brackets'
  }));
};


//=============================== PUT =====================================
//  content-type='application/json'
const Put = (url, data) => {
  return axios.put(url, data);
};

// content-type='application/x-www-form-urlencoded'
const PutForm = (url, data) => {
  return axios.put(url, qs.stringify(data, {
    arrayFormat: 'brackets'
  }));
};


export default {
  Get,
  Post,
  PostForm,
  Put,
  PutForm,
  all: axios.all
}
