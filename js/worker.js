importScripts('highlight/highlight.pack.js');
self.onmessage = function (event) {
	var result = hljs.highlightAuto(event.data);
	postMessage(result);
};