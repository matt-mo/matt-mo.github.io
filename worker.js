onmessage = function(event){
	importScripts('/highlight/highlight.pack.js');
	var result = self.hljs.highlightAuto(event.data);
	postMessage(result.value);
};