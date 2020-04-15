/*
 * @Description: 解析URL
 * @Author: Looper
 * @Date: 2020-04-14 22:30:50
 * @LastEditors: Looper
 * @LastEditTime: 2020-04-15 22:59:04
 * @FilePath: /Frontend-01-Template/week01/url.js
 */

/**
 * @description: 获取url中的query
 * @param {String} url
 * @return: url中的query
 */
function getQueryString(url) {
  const start = url.indexOf("?") > -1 ? url.indexOf("?") : -1;
  if (start === -1) return null;
  const end = url.indexOf("#") > -1 ? url.indexOf("#") : -1;
  return end === -1
    ? url.substring(start + 1, url.length)
    : url.substring(start + 1, end);
}

/**
 * @description: 解析url中的query
 * @param {String} key
 * @return: value
 */

function getQuery(key) {
  const reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
  const r = window.location.search.substr(1).match(reg);
  return !r ? null : decodeURIComponent(r[2]);
}

/**
 * @description: 以k-v形式返回query
 * @param {String} url
 * @return: 返回query的k-v
 */
function getQueryMap(url) {
  var address = new URL(url);
  var params = {},
    seg = address.search.replace(/^\?/, "").split("&"),
    len = seg.length,
    p;
  for (var i = 0; i < len; i++) {
    if (seg[i]) {
      p = seg[i].split("=");
      params[p[0]] = p[1];
    }
  }
  return params;
}

/**
 * @description:  解析url
 * @param {String} url
 * @return: url属性对象
 */
function parseURL(url) {
  var address = new URL(url);
  return {
    source: url,
    protocol: address.protocol.replace(":", ""),
    host: address.hostname,
    port: address.port,
    query: address.search,
    params: getQueryMap(url),
    hash: address.hash.replace("#", ""),
    path: address.pathname.replace(/^([^\/])/, "/$1"),
  };
}
