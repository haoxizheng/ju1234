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
import message from 'src/components/Message/message';
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

// 响应拦截
function responseInterceptors(res, observer) {
  if (res.data.code === 200) {
    observer.next(res.data.data)
  } else {
    observer.error(res.data.message);
  }
}


//=============================== GET =====================================
const Get = function (url, params) {
  return Observable.create(async function (observer) {
    let res;
    try {
      res = await axios.get(url, {params})
    } catch (err) {
      message.error('网络异常，请稍后再试');
      observer.complete();
    }
    responseInterceptors(res, observer);
  })
};

//=============================== POST =====================================
//  content-type='application/json'
const Post = function (url, data) {
  return Observable.create(async function (observer) {
    let res;
    try {
      res = await axios.post(url, data)
    } catch (err) {
      message.error('网络异常，请稍后再试');
      observer.complete();
    }
    responseInterceptors(res, observer);
  })
};

// content-type='application/x-www-form-urlencoded'
const PostForm = (url, data) => {
  return Observable.create(async function (observer) {
    let res;
    try {
      res = await axios.post(url, qs.stringify(data, {
        arrayFormat: 'brackets'
      }));
    } catch (err) {
      message.error('网络异常，请稍后再试');
      observer.complete();
    }
    responseInterceptors(res, observer);

  })
};


//=============================== PUT =====================================
//  content-type='application/json'
const Put = (url, data) => {
  return Observable.create(async function (observer) {
    let res;
    try {
      res = await axios.put(url, data);
    } catch (err) {
      message.error('网络异常，请稍后再试');
      observer.complete();
    }
    responseInterceptors(res, observer);
  })
};

// content-type='application/x-www-form-urlencoded'
const PutForm = (url, data) => {
  return Observable.create(async function (observer) {
    let res;
    try {
      res = await axios.put(url, qs.stringify(data, {
        arrayFormat: 'brackets'
      }))
    } catch (err) {
      message.error('网络异常，请稍后再试');
      observer.complete();
    }
    responseInterceptors(res, observer);

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
