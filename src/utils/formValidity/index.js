/**
 * intro：       form value validity
 * description： form value validity
 * author：      jufei
 * date：        2017/8/24
 */


export default {
  ACCOUNT: /^([\u4e00-\u9fa5]|\w)+$/,
  PHONE: /^\d{11}$/,
  PASSWORD: /^\w{6,20}$/
}
