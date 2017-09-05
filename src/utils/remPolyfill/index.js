/**
 * intro：       rem
 * description： rem
 * author：      jufei
 * date：        2017/9/5
 */

function setRem() {
  const isRetina = window.devicePixelRatio === 2 ? 1 : 2;
  const screenWidth = window.innerWidth;
  document.getElementsByTagName('html')[0].style['fontSize'] = `${screenWidth / 10}px`;
  document.getElementsByTagName('body')[0].style['fontSize'] = `12px`;
}

window.onload = setRem;
window.onresize = setRem;



