var deny='PROXY 127.0.0.1:21';
var proxy='PROXY 127.0.0.1:8087';

var Deny = {
	 "qiyou.com":false,
	 "cnzz.com":false,
	 "51.la":false,
	 "googlesyndication.com":false,
	 "doubleclick.net":false,
	 "google-analytics.com":false,
	 "linezing.com":false,
	 "mediav.com":false,
	 "tanx.com":false,
	 "wumii.com":false,
	 "360.cn":false,
	 "51yes.com":false,
	 "cpro.baidu.com":false,
	 "widget.weibo.com":false,
	 "jiathis.com":false,
	 "alimama.cn":false,
	 "alimama.com":false,
	 "pos.baidu.com":false,
	 "share.baidu.com":false,
	 "duoshuo.com":false,
	 "uyan.cc":false,
	 "disqus.com":false,
	 "pos.baidu.com":false,
	 "hm.baidu.com":false,
	 "tjs.sjs.sinajs.cn":false,
	 "cbjs.baidu.com":false,
	 "login.sina.com.cn":false,
	 "drmcmm.baidu.com":false,
	 "cb.baidu.com":false,
	 "cbjs.baidu.com":false,
	 "widget.weibo.com":false,
	 "comment.v.t.qq.com":false,
	 "platform.twitter.com":false,
	 "addthis.com":false,
	 "show.v.t.qq.com":false,
	 "yigao.com":false,
	 "alitui.weibo.com":false,
	 "im.weibo.com":false,
	 "37cs.com":false,
	 "biz.weibo.com":false,
	 "cpro.baidustatic.com":false,
	 "cpro.baidustatic.com":false,
	 "feitian001.com":false,
	 "youyou234.com":false,
	 "tajs.qq.com":false,
	 "follow.v.t.qq.com":false,
	 "9377.com":false,
	 "91hui.com":false,
	 "37wan.com":false,
	 "youle55.com":false
	 };

var Proxy = {
	 "twitter.com":true,
	 "google.com":true,
	 "t.co":true,
	 "wikipedia.org":true,
	 "feedburner.com":true,
	 "youtube.com":true,
	 "ytimg.com":true,
	 "blogspot.com":true,
	 "nytimes.com":true,
	 "googleusercontent.com":true,
	 "gstatic.com":true,
	 "boxun.com":true,
	 "bit.ly":true,
	 "trello.com":true,
	 "facebook.com":true,
	 "ju.mp":true,
	 "googleapis.com":true,
	 "appspot.com":true,
	 "t66y.com":true,
	 "stackoverflow.com":true,
	 "golang.org":true,
	 "developer.mozilla.org":true,
	 "laravel.io":true,
	 "googlecode.com":true,
	 "html5index.org":true
};

function FindProxyForURL(url, host) {
  	var lastPos = 0;
    var domain = host;
    while(lastPos >= 0) {
		if( ( typeof Deny[domain] ) != "undefined" )
			return deny;
		if( ( typeof Proxy[domain] ) != "undefined" )
			return proxy;
        lastPos = host.indexOf('.', lastPos + 1);
        domain = host.slice(lastPos + 1);
    }

	return 'DIRECT';
}

