/**
 * intro：       request function
 * description：
 * author：      jufei
 * date：        2017/8/16
 */

import axios from 'axios';
import qs from 'qs';
import {Observable} from 'rxjs';
//===============================================================
import {message} from 'jc';
//===============================================================
import * as pageUrls from 'src/config/pageUrls';


// 请求拦截
axios.interceptors.request.use((config) => {
  if (window.token) {
    config.headers.token = window.token;
  }
  config.timeout = 10000;
  return config
});

// 响应拦截
axios.interceptors.response.use((response) => {
  if (response.data.code === 401) {
    window.location.href = pageUrls.LOGIN
  }
  return response
});


//=============================== GET =====================================
const Get = function (url, params) {
  return Observable.fromPromise(axios.get(url, {params}))
};

//=============================== POST =====================================n
//  content-type='application/json'
const Post = function (url, data) {
  return Observable.fromPromise(axios.post(url, data))
};

// content-type='application/x-www-form-urlencoded'
const PostForm = (url, data) => {
  return Observable.fromPromise(axios.post(url, qs.stringify(data, {
    arrayFormat: 'brackets'
  })));
};


//=============================== PUT =====================================
//  content-type='application/json'
const Put = (url, data) => {
  return Observable.fromPromise(axios.put(url, data))
};

// content-type='application/x-www-form-urlencoded'
const PutForm = (url, data) => {
  return Observable.fromPromise(axios.put(url, qs.stringify(data, {
    arrayFormat: 'brackets'
  })))
};


export default {
  Get,
  Post,
  PostForm,
  Put,
  PutForm,
  all: axios.all
}
