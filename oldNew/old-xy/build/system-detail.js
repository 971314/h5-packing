function GetQueryString(t){var e=decodeURI(window.location.search.substr(1)),n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),r=e.match(n);return r?unescape(r[2]):null}var txt=decodeURI(GetQueryString("txt"));$("#txt").html(txt);