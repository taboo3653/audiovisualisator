(this.webpackJsonpaudiovisualisator=this.webpackJsonpaudiovisualisator||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/song.43051082.mp3"},,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),u=(a(14),a(4)),c=a(5),s=a(7),l=a(6),d=a(8),h=(a(15),a(16),function(e){var t=e.value,a={backgroundColor:"rgba(".concat(t,", 0, 0, 1)")};return r.a.createElement("div",{className:"Cell",style:a})}),m=a(1),v=a.n(m),f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={values:[]},a.audioRef=r.a.createRef(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.audioContext.createAnalyser(),this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.source=this.audioContext.createMediaElementSource(this.audioRef.current),this.source.connect(this.analyser),setInterval((function(){e.analyser.getByteTimeDomainData(e.dataArray);for(var t=Math.floor(e.dataArray.length/144),a=[],n=0;n<144;n++)a[n]=e.dataArray.slice(n*t,n*t+t);var r=a.map((function(e){var t=e.reduce((function(e,t){return e+t}),0);return Math.round(t/e.length)}));e.setState({values:r})}),100)}},{key:"render",value:function(){var e=this.state.values.map((function(e,t){return r.a.createElement(h,{key:t,value:e})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("audio",{ref:this.audioRef,src:v.a,autoPlay:!0}),r.a.createElement("audio",{src:v.a,autoPlay:!0})),r.a.createElement("div",{className:"Visualizer"},e))}}]),t}(r.a.Component);a(17);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.09d59dcb.chunk.js.map