/**
 * intro：       API
 * description：
 * author：      jufei
 * date：        2017/8/16
 */


module.exports = {
  // =====================登录注册，用户系统===========================
  LOGIN: '/api/login',
  LOGOUT: '/api/logout',
  REGISTER: '/api/register',
  GET_LOGIN_STATUS: '/api/isLogin',
  GET_USER_INFO: '/api/user/info',

  // =====================todolist===========================
  POST_TODO_CREATE: '/api/todo/create',
  GET_TODO_DETAIL: todoId => `/api/todo/${todoId}`,
  PUT_TODO_DONE: todoId => `/api/todo/done/${todoId}`,
  GET_TODO_LIST: '/api/todo/list',
  PUT_TODO_DETAIL: todoId => `/api/todo/edit/${todoId}`,
};
