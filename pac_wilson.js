var deny='PROXY 127.0.0.1:21';
var proxy='PROXY 127.0.0.1:8087';

var Deny = {
	 "qiyou.com":false
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
	 "html5index.org":true,
	 "maven.org":true,
	 "googlesource.com":true
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

