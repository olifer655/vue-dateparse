!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DateParse=t():e.DateParse=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r={read:function(e,t){if("object"!==("undefined"==typeof e?"undefined":n(e))&&(e=new Date(e)),"Invalid Date"===e.toString())return console.warn("Invalid Date. Check you input please.");var r={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()};for(var o in r){var u=r[o];u=10>u?"0"+u:u,r[o]=u.toString()}var i=r.year,a=r.month,f=r.day,c=r.hour,s=r.minutes,p=r.seconds;return"string"!=typeof t&&console.warn("parseString need to be a String, but we get "+("undefined"==typeof t?"undefined":n(t))),t=t.replace(/Y+/,function(e){return i.substring(i.length,-e.length)}).replace(/M+/,function(){return a}).replace(/d+/,function(){return f}).replace(/H+/,function(){return parseInt(c)+12}).replace(/h+/,function(){return c}).replace(/m+/,function(){return s}).replace(/s+/,function(){return p})},write:function(){}};t["default"]=r}])});