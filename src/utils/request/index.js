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
import * as pageUrls from 'src/config/pageUrls';


// 请求拦截
axios.interceptors.request.use((config) => {
  if (window.token) {
    config.headers.token = window.token;
  }

  config.timeout = 1000;
  return config
});

// 响应拦截
axios.interceptors.response.use((response) => {
  if (response.data.code === 401) {
    window.location.href = pageUrls.LOGIN
  }
  return response
});

// 响应拦截
function responseInterceptors(res, observer) {
  if (res.data.code === 200) {
    observer.next(res.data.data)
  } else {
    console.log('error', res);
    observer.error(res.data.message)
  }
}


//=============================== GET =====================================
const Get = function (url, params) {
  return Observable.create(function (observer) {
    axios.get(url, {params})
      .then(res => {
        responseInterceptors(res, observer)
      })
      .catch(err => {
        observer.error(err);
      })
  })
};

//=============================== POST =====================================
//  content-type='application/json'
const Post = function (url, data) {
  return Observable.create(function (observer) {
    axios.post(url, data)
      .then(res => {
        responseInterceptors(res, observer);
      })
      .catch(err => {
        observer.error(err);
      })
  })
};

// content-type='application/x-www-form-urlencoded'
const PostForm = (url, data) => {
  return Observable.create(function (observer) {
    axios.post(url, qs.stringify(data, {
      arrayFormat: 'brackets'
    }))
      .then(res => {
        observer.next(res);
      })
      .catch(err => {
        observer.error(err);
      })
  })
};


//=============================== PUT =====================================
//  content-type='application/json'
const Put = (url, data) => {
  return Observable.create(function (observer) {
    axios.put(url, data)
      .then(res => {
        responseInterceptors(res, observer)
      })
      .catch(err => {
        observer.error(err);
      })
  })
};

// content-type='application/x-www-form-urlencoded'
const PutForm = (url, data) => {
  return Observable.create(function (observer) {
    axios.put(url, qs.stringify(data, {
      arrayFormat: 'brackets'
    }))
      .then(res => {
        responseInterceptors(res, observer)
      })
      .catch(err => {
        observer.error(err);
      })
  })
};


export default {
  Get,
  Post,
  PostForm,
  Put,
  PutForm,
  all: axios.all
}
