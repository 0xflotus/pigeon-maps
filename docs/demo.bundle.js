webpackJsonp([0],[,,,,function(t,e,n){"use strict";e.React=n(0),e.ReactDOM=n(3),e.Component=e.React.Component},,,function(t,e,n){t.exports=n(23)()},,,,,,,,,,,,function(t,e,n){t.exports=n(20)},function(t,e,n){"use strict";var o=n(4),a=n(21),i=function(t){return t&&t.__esModule?t:{default:t}}(a);n(35),o.ReactDOM.render(o.React.createElement(i.default,null),document.getElementById("root"))},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=n(4),u=n(22),c=o(u),h=n(28),m=o(h),d="pk.eyJ1IjoicGlnZW9uLW1hcHMiLCJhIjoiY2l3eW01Y2E2MDA4dzJ6cWh5dG9pYWlwdiJ9.cvdCf-7PymM1Y3xp5j71NQ",f=function(t,e){return function(n,o,a){var i="undefined"!=typeof window&&window.devicePixelRatio>=2?"@2x":"";return"https://api.mapbox.com/styles/v1/mapbox/"+t+"/tiles/256/"+a+"/"+n+"/"+o+i+"?access_token="+e}},p={osm:function(t,e,n){return"https://"+String.fromCharCode(97+(t+e+n)%3)+".tile.openstreetmap.org/"+n+"/"+t+"/"+e+".png"},wikimedia:function(t,e,n){return"https://maps.wikimedia.org/osm-intl/"+n+"/"+t+"/"+e+("undefined"!=typeof window&&window.devicePixelRatio>=2?"@2x":"")+".png"},stamen:function(t,e,n){return"https://stamen-tiles.a.ssl.fastly.net/terrain/"+n+"/"+t+"/"+e+("undefined"!=typeof window&&window.devicePixelRatio>=2?"@2x":"")+".jpg"},streets:f("streets-v10",d),satellite:f("satellite-streets-v10",d),outdoors:f("outdoors-v10",d),light:f("light-v9",d),dark:f("dark-v9",d)},v={leuven1:[[50.879,4.6997],13],leuven2:[[50.874,4.6947],13],brussels:[[50.8505,4.35149],11],ghent:[[51.0514,3.7103],12],coast:[[51.2214,2.9541],10]},g=function(t){function e(t){a(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.zoomIn=function(){n.setState({zoom:Math.min(n.state.zoom+1,18)})},n.zoomOut=function(){n.setState({zoom:Math.max(n.state.zoom-1,1)})},n.handleBoundsChange=function(t){var e=t.center,o=t.zoom,a=t.bounds;t.initial&&console.log("Got initial bounds: ",a),n.setState({center:e,zoom:o})},n.handleClick=function(t){var e=(t.event,t.latLng),n=t.pixel;console.log("Map clicked!",e,n)},n.handleMarkerClick=function(t){var e=(t.event,t.payload),n=t.anchor;console.log("Marker #"+e+" clicked at: ",n)},n.handleAnimationStart=function(){n.setState({animating:!0})},n.handleAnimationStop=function(){n.setState({animating:!1})},n.state={center:[50.879,4.6997],zoom:13,provider:"wikimedia",metaWheelZoom:!1,twoFingerDrag:!1,animate:!0,animating:!1,zoomSnap:!0,mouseEvents:!0,touchEvents:!0},n}return r(e,t),s(e,[{key:"render",value:function(){var t=this,e=this.state,n=e.center,o=e.zoom,a=e.provider,i=e.animate,r=e.metaWheelZoom,s=e.twoFingerDrag,u=e.zoomSnap,h=e.mouseEvents,d=e.touchEvents,f=e.animating;return l.React.createElement("div",{style:{textAlign:"center",marginTop:50}},l.React.createElement("div",{style:{maxWidth:600,margin:"0 auto"}},l.React.createElement(c.default,{center:n,zoom:o,provider:p[a],onBoundsChanged:this.handleBoundsChange,onClick:this.handleClick,onAnimationStart:this.handleAnimationStart,onAnimationStop:this.handleAnimationStop,animate:i,metaWheelZoom:r,twoFingerDrag:s,zoomSnap:u,mouseEvents:h,touchEvents:d,defaultWidth:600,height:400},Object.keys(v).map(function(e){return l.React.createElement(m.default,{key:e,anchor:v[e][0],payload:e,onClick:t.handleMarkerClick})}))),l.React.createElement("div",null,l.React.createElement("button",{onClick:this.zoomIn},"Zoom In"),l.React.createElement("button",{onClick:this.zoomOut},"Zoom Out")," ",Math.round(1e4*n[0])/1e4," x ",Math.round(1e4*n[1])/1e4," @ ",Math.round(100*o)/100," - ",f?"animating":"stopped"),l.React.createElement("div",{style:{marginTop:20}},Object.keys(p).map(function(e){return l.React.createElement("button",{key:e,onClick:function(){return t.setState({provider:e})},style:{fontWeight:a===e?"bold":"normal"}},e)})),l.React.createElement("div",{style:{marginTop:20}},l.React.createElement("button",{onClick:function(){return t.setState({animate:!i})}},i?"[X] animation":"[ ] animation"),l.React.createElement("button",{onClick:function(){return t.setState({twoFingerDrag:!s})}},s?"[X] two finger drag":"[ ] two finger drag"),l.React.createElement("button",{onClick:function(){return t.setState({metaWheelZoom:!r})}},r?"[X] meta wheel zoom":"[ ] meta wheel zoom"),l.React.createElement("button",{onClick:function(){return t.setState({zoomSnap:!u})}},u?"[X] zoom snap":"[ ] zoom snap"),l.React.createElement("button",{onClick:function(){return t.setState({mouseEvents:!h})}},h?"[X] mouse events":"[ ] mouse events"),l.React.createElement("button",{onClick:function(){return t.setState({touchEvents:!d})}},d?"[X] touch events":"[ ] touch events")),l.React.createElement("div",{style:{marginTop:20}},Object.keys(v).map(function(e){return l.React.createElement("button",{key:e,onClick:function(){return t.setState({center:v[e][0],zoom:v[e][1]})}},e)})))}}]),e}(l.Component);e.default=g},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e,n){return"https://maps.wikimedia.org/osm-intl/"+n+"/"+t+"/"+e+("undefined"!=typeof window&&window.devicePixelRatio>=2?"@2x":"")+".png"}function u(t,e){return t/Math.pow(2,e)*360-180}function c(t,e){var n=Math.PI-2*Math.PI*t/Math.pow(2,e);return 180/Math.PI*Math.atan(.5*(Math.exp(n)-Math.exp(-n)))}function h(t,e){var n=(0,w.default)(t);return[e.clientX-n.x,e.clientY-n.y]}function m(t){return t*(2-t)}Object.defineProperty(e,"__esModule",{value:!0});var d=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),f=n(4),p=n(7),v=o(p),g=n(25),w=o(g),_=n(26),M=o(_),y=n(27),b=o(y),x=300,S=1500,T=150,E=40,C=2,z=300,k=60,P=300,R=300,D=function(){},O=function(t,e){return(t+180)/360*Math.pow(2,e)},A=function(t,e){return(1-Math.log(Math.tan(t*Math.PI/180)+1/Math.cos(t*Math.PI/180))/Math.PI)/2*Math.pow(2,e)},Z=u(0,10),W=c(Math.pow(2,10),10),L=u(Math.pow(2,10),10),j=c(0,10),I="undefined"!=typeof window&&window.performance&&window.performance.now?function(){return window.performance.now()}:function(){var t=(new Date).getTime();return function(){return(new Date).getTime()-t}}(),F=function(t){function e(t){i(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.updateWidthHeight=function(){var t=n._containerRef.getBoundingClientRect();n.setState({width:t.width,height:t.height})},n.wa=function(t,e){return window.addEventListener(t,e)},n.wr=function(t,e){return window.removeEventListener(t,e)},n.bindMouseEvents=function(){n.wa("mousedown",n.handleMouseDown),n.wa("mouseup",n.handleMouseUp),n.wa("mousemove",n.handleMouseMove)},n.bindTouchEvents=function(){n.wa("touchstart",n.handleTouchStart),n.wa("touchmove",n.handleTouchMove),n.wa("touchend",n.handleTouchEnd)},n.unbindMouseEvents=function(){n.wr("mousedown",n.handleMouseDown),n.wr("mouseup",n.handleMouseUp),n.wr("mousemove",n.handleMouseMove)},n.unbindTouchEvents=function(){n.wr("touchstart",n.handleTouchStart),n.wr("touchmove",n.handleTouchMove),n.wr("touchend",n.handleTouchEnd)},n.bindResizeEvent=function(){n.wa("resize",n.updateWidthHeight)},n.unbindResizeEvent=function(){n.wr("resize",n.updateWidthHeight)},n.setCenterZoomTarget=function(t,e,o){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:x;if(n.props.animate&&(!o||n.distanceInScreens(t,e,n.state.center,n.state.zoom)<=n.props.animateMaxScreens)){if(n._isAnimating){window.cancelAnimationFrame(n._animFrame);var r=n.animationStep(I()),s=r.centerStep,l=r.zoomStep;n._centerStart=s,n._zoomStart=l}else n._isAnimating=!0,n._centerStart=n.limitCenterAtZoom([n._lastCenter[0],n._lastCenter[1]],n._lastZoom),n._zoomStart=n._lastZoom,n.onAnimationStart();n._animationStart=I(),n._animationEnd=n._animationStart+i,a?(n._zoomAround=a,n._centerTarget=n.calculateZoomCenter(n._lastCenter,a,n._lastZoom,e)):(n._zoomAround=null,n._centerTarget=t),n._zoomTarget=e,n._animFrame=window.requestAnimationFrame(n.animate)}else if(a){var u=n.calculateZoomCenter(n._lastCenter,a,n._lastZoom,e);n.setCenterZoom(u,e,o)}else n.setCenterZoom(t,e,o)},n.distanceInScreens=function(t,e,o,a){var i=n.state,r=i.width,s=i.height,l=n.latLngToPixel(o,o,a),u=n.latLngToPixel(t,o,a),c=n.latLngToPixel(o,o,e),h=n.latLngToPixel(t,o,e),m=(Math.abs(l[0]-u[0])+Math.abs(c[0]-h[0]))/2/r,d=(Math.abs(l[1]-u[1])+Math.abs(c[1]-h[1]))/2/s;return Math.sqrt(m*m+d*d)},n.animationStep=function(t){var e=n._animationEnd-n._animationStart,o=Math.max(t-n._animationStart,0),a=m(o/e),i=(n._zoomTarget-n._zoomStart)*a,r=n._zoomStart+i;if(n._zoomAround){return{centerStep:n.calculateZoomCenter(n._centerStart,n._zoomAround,n._zoomStart,r),zoomStep:r}}return{centerStep:[n._centerStart[0]+(n._centerTarget[0]-n._centerStart[0])*a,n._centerStart[1]+(n._centerTarget[1]-n._centerStart[1])*a],zoomStep:r}},n.animate=function(t){if(t>=n._animationEnd)n._isAnimating=!1,n.setCenterZoom(n._centerTarget,n._zoomTarget,!0),n.onAnimationStop();else{var e=n.animationStep(t),o=e.centerStep,a=e.zoomStep;n.setCenterZoom(o,a),n._animFrame=window.requestAnimationFrame(n.animate)}},n.stopAnimating=function(){n._isAnimating&&(n._isAnimating=!1,n.onAnimationStop(),window.cancelAnimationFrame(n._animFrame))},n.limitCenterAtZoom=function(t,e){return[Math.max(Math.min(isNaN(t[0])?n.state.center[0]:t[0],j),W),Math.max(Math.min(isNaN(t[1])?n.state.center[1]:t[1],L),Z)]},n.onAnimationStart=function(){n.props.onAnimationStart&&n.props.onAnimationStart()},n.onAnimationStop=function(){n.props.onAnimationStop&&n.props.onAnimationStop()},n.setCenterZoom=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=n.limitCenterAtZoom(t,e);if(Math.round(n.state.zoom)!==Math.round(e)){var r=n.tileValues(n.state),s=n.tileValues({center:i,zoom:e,width:n.state.width,height:n.state.height}),l=n.state.oldTiles;n.setState({oldTiles:l.filter(function(t){return t.roundedZoom!==r.roundedZoom}).concat(r)},D);for(var u={},c=s.tileMinX;c<=s.tileMaxX;c++)for(var h=s.tileMinY;h<=s.tileMaxY;h++){var m=c+"-"+h+"-"+s.roundedZoom;u[m]=!1}n._loadTracker=u}n.setState({center:i,zoom:e},D);var d=n.props.zoom?n.props.zoom:n._lastZoom,f=n.props.center?n.props.center:n._lastCenter;(o||Math.abs(d-e)>.001||Math.abs(f[0]-i[0])>1e-5||Math.abs(f[1]-i[1])>1e-5)&&(n._lastZoom=e,n._lastCenter=[].concat(a(i)),n.syncToProps(i,e))},n.imageLoaded=function(t){if(n._loadTracker&&t in n._loadTracker){n._loadTracker[t]=!0;0===Object.keys(n._loadTracker).filter(function(t){return!n._loadTracker[t]}).length&&n.setState({oldTiles:[]},D)}},n.handleTouchStart=function(t){if(1===t.touches.length){var e=t.touches[0],o=h(n._containerRef,e);if(n.coordsInside(o)&&(n._touchStartPixel=[o],!n.props.twoFingerDrag))if(n.stopAnimating(),n._lastTap&&I()-n._lastTap<z){t.preventDefault();var a=n.pixelToLatLng(n._touchStartPixel[0]);n.setCenterZoomTarget(null,Math.max(1,Math.min(n.state.zoom+1,18)),!1,a)}else n._lastTap=I(),n.startTrackingMoveEvents(o)}else if(2===t.touches.length&&n._touchStartPixel){t.preventDefault(),n.stopTrackingMoveEvents(),(n.state.pixelDelta||n.state.zoomDelta)&&n.sendDeltaChange();var i=h(n._containerRef,t.touches[0]),r=h(n._containerRef,t.touches[1]);n._touchStartPixel=[i,r],n._touchStartMidPoint=[(i[0]+r[0])/2,(i[1]+r[1])/2],n._touchStartDistance=Math.sqrt(Math.pow(i[0]-r[0],2)+Math.pow(i[1]-r[1],2))}},n.handleTouchMove=function(t){if(1===t.touches.length&&n._touchStartPixel){var e=t.touches[0],o=h(n._containerRef,e);n.props.twoFingerDrag?n.coordsInside(o)&&n.showWarning("fingers"):(t.preventDefault(),n.trackMoveEvents(o),n.setState({pixelDelta:[o[0]-n._touchStartPixel[0][0],o[1]-n._touchStartPixel[0][1]]},D))}else if(2===t.touches.length&&n._touchStartPixel){var a=n.state,i=a.width,r=a.height,s=a.zoom;t.preventDefault();var l=h(n._containerRef,t.touches[0]),u=h(n._containerRef,t.touches[1]),c=[(l[0]+u[0])/2,(l[1]+u[1])/2],m=[c[0]-n._touchStartMidPoint[0],c[1]-n._touchStartMidPoint[1]],d=Math.sqrt(Math.pow(l[0]-u[0],2)+Math.pow(l[1]-u[1],2)),f=Math.min(18,s+Math.log2(d/n._touchStartDistance))-s,p=Math.pow(2,f),v=[(i/2-c[0])*(p-1),(r/2-c[1])*(p-1)];n.setState({zoomDelta:f,pixelDelta:[v[0]+m[0]*p,v[1]+m[1]*p]},D)}},n.handleTouchEnd=function(t){if(n._touchStartPixel){var e=n.props,o=e.zoomSnap,a=e.twoFingerDrag,i=n.state.zoomDelta,r=n.sendDeltaChange(),s=r.center,l=r.zoom;if(0===t.touches.length)if(a)n.clearWarning();else{var u=n._touchStartPixel[0],c=h(n._containerRef,t.changedTouches[0]);(Math.abs(u[0]-c[0])>C||Math.abs(u[1]-c[1])>C)&&(!n._secondTouchEnd||I()-n._secondTouchEnd>P)&&(t.preventDefault(),n.throwAfterMoving(c,s,l)),n._touchStartPixel=null,n._secondTouchEnd=null}else if(1===t.touches.length){t.preventDefault();var m=h(n._containerRef,t.touches[0]);if(n._secondTouchEnd=I(),n._touchStartPixel=[m],n.startTrackingMoveEvents(m),o){var d=n.pixelToLatLng(n._touchStartMidPoint),f=void 0;f=a&&Math.round(n.state.zoom)===Math.round(n.state.zoom+i)?Math.round(n.state.zoom):i>0?Math.ceil(n.state.zoom):Math.floor(n.state.zoom);var p=Math.max(1,Math.min(f,18));n.setCenterZoomTarget(d,p,!1,d)}}}},n.handleMouseDown=function(t){var e=h(n._containerRef,t);if(0===t.button&&(!t.target||!(0,M.default)(t.target,"pigeon-drag-block"))&&n.coordsInside(e))if(n.stopAnimating(),t.preventDefault(),n._lastClick&&I()-n._lastClick<z){var o=n.pixelToLatLng(n._mousePosition);n.setCenterZoomTarget(null,Math.max(1,Math.min(n.state.zoom+1,18)),!1,o)}else n._lastClick=I(),n._mouseDown=!0,n._dragStart=e,n.startTrackingMoveEvents(e)},n.handleMouseMove=function(t){n._mousePosition=h(n._containerRef,t),n._mouseDown&&n._dragStart&&(n.trackMoveEvents(n._mousePosition),n.setState({pixelDelta:[n._mousePosition[0]-n._dragStart[0],n._mousePosition[1]-n._dragStart[1]]},D))},n.handleMouseUp=function(t){var e=n.state.pixelDelta;if(n._mouseDown){n._mouseDown=!1;var o=h(n._containerRef,t);if(!n.props.onClick||t.target&&(0,M.default)(t.target,"pigeon-click-block")||e&&!(Math.abs(e[0])+Math.abs(e[1])<=C)){var a=n.sendDeltaChange(),i=a.center,r=a.zoom;n.throwAfterMoving(o,i,r)}else{var s=n.pixelToLatLng(o);n.props.onClick({event:t,latLng:s,pixel:o}),n.setState({pixelDelta:null},D)}}},n.startTrackingMoveEvents=function(t){n._moveEvents=[{timestamp:I(),coords:t}]},n.stopTrackingMoveEvents=function(){n._moveEvents=[]},n.trackMoveEvents=function(t){var e=I();e-n._moveEvents[n._moveEvents.length-1].timestamp>40&&(n._moveEvents.push({timestamp:e,coords:t}),n._moveEvents.length>2&&n._moveEvents.shift())},n.throwAfterMoving=function(t,e,o){var a=n.state,i=a.width,r=a.height,s=n.props.animate,l=I(),h=n._moveEvents.shift();if(h&&s){var m=Math.max(l-h.timestamp,1),d=[(t[0]-h.coords[0])/m*120,(t[1]-h.coords[1])/m*120],f=Math.sqrt(d[0]*d[0]+d[1]*d[1]);if(f>E){var p=Math.sqrt(i*i+r*r),v=S*f/p,g=u(O(e[1],o)-d[0]/256,o),w=c(A(e[0],o)-d[1]/256,o);n.setCenterZoomTarget([w,g],o,!1,null,v)}}n.stopTrackingMoveEvents()},n.sendDeltaChange=function(){var t=n.state,e=t.center,o=t.zoom,a=t.pixelDelta,i=t.zoomDelta,r=e[0],s=e[1];return(a||0!==i)&&(s=u(O(e[1],o+i)-(a?a[0]/256:0),o+i),r=c(A(e[0],o+i)-(a?a[1]/256:0),o+i),n.setCenterZoom([r,s],o+i)),n.setState({pixelDelta:null,zoomDelta:0},D),{center:n.limitCenterAtZoom([r,s],o+i),zoom:o+i}},n.getBounds=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.state.center,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.zoomPlusDelta(),o=n.state,a=o.width,i=o.height;return{ne:n.pixelToLatLng([a-1,0],t,e),sw:n.pixelToLatLng([0,i-1],t,e)}},n.syncToProps=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.state.center,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.zoom,o=n.props.onBoundsChanged;if(o){o({center:t,zoom:e,bounds:n.getBounds(t,e),initial:!n._boundsSynced}),n._boundsSynced=!0}},n.handleWheel=function(t){var e=n.props,o=e.mouseEvents,a=e.metaWheelZoom,i=e.zoomSnap,r=e.animate;if(o)if(!a||t.metaKey){t.preventDefault();var s=-t.deltaY/T;if(!i&&n._zoomTarget){var l=n._zoomTarget-n.state.zoom;n.zoomAroundMouse(s+l,i)}else r?n.zoomAroundMouse(s,i):(!n._lastWheel||I()-n._lastWheel>x)&&(n._lastWheel=I(),n.zoomAroundMouse(s,i))}else n.showWarning("wheel")},n.showWarning=function(t){n.state.showWarning&&n.state.warningType===t||n.setState({showWarning:!0,warningType:t}),n._warningClearTimeout&&window.clearTimeout(n._warningClearTimeout),n._warningClearTimeout=window.setTimeout(n.clearWarning,R)},n.clearWarning=function(){n.state.showWarning&&n.setState({showWarning:!1})},n.zoomAroundMouse=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=n.state.zoom;if(!(!n._mousePosition||1===o&&t<0||18===o&&t>0)){var a=n.pixelToLatLng(n._mousePosition),i=o+t;e&&(i=t<0?Math.floor(i):Math.ceil(i)),i=Math.max(1,Math.min(i,18)),n.setCenterZoomTarget(null,i,!1,a)}},n.zoomPlusDelta=function(){return n.state.zoom+n.state.zoomDelta},n.pixelToLatLng=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.center,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.zoomPlusDelta(),a=n.state,i=a.width,r=a.height,s=a.pixelDelta,l=[(t[0]-i/2-(s?s[0]:0))/256,(t[1]-r/2-(s?s[1]:0))/256],h=O(e[1],o)+l[0],m=A(e[0],o)+l[1];return n.limitCenterAtZoom([c(m,o),u(h,o)],o)},n.latLngToPixel=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.center,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.zoomPlusDelta(),a=n.state,i=a.width,r=a.height,s=a.pixelDelta,l=n.limitCenterAtZoom(e),u=O(l[1],o),c=A(l[0],o),h=O(t[1],o),m=A(t[0],o);return[256*(h-u)+i/2+(s?s[0]:0),256*(m-c)+r/2+(s?s[1]:0)]},n.calculateZoomCenter=function(t,e,o,a){var i=n.state,r=i.width,s=i.height,l=n.latLngToPixel(e,t,o),u=n.latLngToPixel(e,t,a),c=n.pixelToLatLng([r/2+u[0]-l[0],s/2+u[1]-l[1]],t,a);return n.limitCenterAtZoom(c,a)},n.setRef=function(t){n._containerRef=t},n.syncToProps=(0,b.default)(n.syncToProps,k),n._mousePosition=null,n._dragStart=null,n._mouseDown=!1,n._moveEvents=[],n._lastClick=null,n._lastTap=null,n._touchStartPixel=null,n._isAnimating=!1,n._animationStart=null,n._animationEnd=null,n._centerTarget=null,n._zoomTarget=null,n._lastZoom=t.defaultZoom?t.defaultZoom:t.zoom,n._lastCenter=t.defaultCenter?t.defaultCenter:t.center,n._boundsSynced=!1,n.state={zoom:n._lastZoom,center:n._lastCenter,width:t.width||t.defaultWidth,height:t.height||t.defaultHeight,zoomDelta:0,pixelDelta:null,oldTiles:[],showWarning:!1,warningType:null},n}return s(e,t),d(e,[{key:"componentDidMount",value:function(){this.props.mouseEvents&&this.bindMouseEvents(),this.props.touchEvents&&this.bindTouchEvents(),this.props.width&&this.props.height||(this.updateWidthHeight(),this.bindResizeEvent()),this.syncToProps()}},{key:"componentWillUnmount",value:function(){this.props.mouseEvents&&this.unbindMouseEvents(),this.props.touchEvents&&this.unbindTouchEvents(),this.props.width&&this.props.height||this.unbindResizeEvent()}},{key:"componentWillReceiveProps",value:function(t){if(t.mouseEvents!==this.props.mouseEvents&&(t.mouseEvents?this.bindMouseEvents():this.unbindMouseEvents()),t.touchEvents!==this.props.touchEvents&&(t.touchEvents?this.bindTouchEvents():this.unbindTouchEvents()),t.width&&t.width!==this.props.width&&this.setState({width:t.width}),t.height&&t.height!==this.props.height&&this.setState({height:t.height}),(t.center||t.zoom)&&(t.center&&(t.center[0]!==this.props.center[0]||t.center[1]!==this.props.center[1])||t.zoom!==this.props.zoom)){var e=t.center?t.center:this.state.center,n=t.zoom?t.zoom:this.state.zoom;(Math.abs(n-this.state.zoom)>.001||Math.abs(e[0]-this.state.center[0])>1e-4||Math.abs(e[1]-this.state.center[1])>1e-4)&&this.setCenterZoomTarget(e,n,!0)}}},{key:"coordsInside",value:function(t){var e=this.state,n=e.width,o=e.height;if(t[0]<0||t[1]<0||t[0]>=n||t[1]>=o)return!1;var a=this._containerRef,i=(0,w.default)(a),r=document.elementFromPoint(t[0]+i.x,t[1]+i.y);return a===r||a.contains(r)}},{key:"tileValues",value:function(t){var e=t.center,n=t.zoom,o=t.pixelDelta,a=t.zoomDelta,i=t.width,r=t.height,s=Math.round(n+(a||0)),l=n+(a||0)-s,u=Math.pow(2,l),c=i/u,h=r/u,m=O(e[1],s)-(o?o[0]/256/u:0),d=A(e[0],s)-(o?o[1]/256/u:0),f=c/2/256,p=h/2/256;return{tileMinX:Math.floor(m-f),tileMaxX:Math.floor(m+f),tileMinY:Math.floor(d-p),tileMaxY:Math.floor(d+p),tileCenterX:m,tileCenterY:d,roundedZoom:s,zoomDelta:a||0,scaleWidth:c,scaleHeight:h,scale:u}}},{key:"renderTiles",value:function(){for(var t=this,e=this.state.oldTiles,n=this.props.provider||l,o=this.tileValues(this.state),a=o.tileMinX,i=o.tileMaxX,r=o.tileMinY,s=o.tileMaxY,u=o.tileCenterX,c=o.tileCenterY,h=o.roundedZoom,m=o.scaleWidth,d=o.scaleHeight,p=o.scale,v=[],g=0;g<e.length;g++){var w=e[g],_=w.roundedZoom-h;if(!(Math.abs(_)>4||0===_))for(var M=1/Math.pow(2,_),y=256*-(a-w.tileMinX*M),b=256*-(r-w.tileMinY*M),x=Math.max(w.tileMinX,0),S=Math.max(w.tileMinY,0),T=Math.min(w.tileMaxX,Math.pow(2,w.roundedZoom)-1),E=Math.min(w.tileMaxY,Math.pow(2,w.roundedZoom)-1),C=x;C<=T;C++)for(var z=S;z<=E;z++)v.push({key:C+"-"+z+"-"+w.roundedZoom,url:n(C,z,w.roundedZoom),left:y+256*(C-w.tileMinX)*M,top:b+256*(z-w.tileMinY)*M,width:256*M,height:256*M,active:!1})}for(var k=Math.max(a,0),P=Math.max(r,0),R=Math.min(i,Math.pow(2,h)-1),D=Math.min(s,Math.pow(2,h)-1),O=k;O<=R;O++)for(var A=P;A<=D;A++)v.push({key:O+"-"+A+"-"+h,url:n(O,A,h),left:256*(O-a),top:256*(A-r),width:256,height:256,active:!0});var Z={width:m,height:d,position:"absolute",top:0,left:0,overflow:"hidden",willChange:"transform",transform:"scale("+p+", "+p+")",transformOrigin:"top left"},W=-(256*(u-a)-m/2),L=-(256*(c-r)-d/2),j={position:"absolute",width:256*(i-a+1),height:256*(s-r+1),willChange:"transform",transform:"translate("+W+"px, "+L+"px)"};return f.React.createElement("div",{style:Z},f.React.createElement("div",{style:j},v.map(function(e){return f.React.createElement("img",{key:e.key,src:e.url,width:e.width,height:e.height,onLoad:function(){return t.imageLoaded(e.key)},style:{position:"absolute",left:e.left,top:e.top,willChange:"transform",transform:e.transform,transformOrigin:"top left",opacity:1}})})))}},{key:"renderOverlays",value:function(){var t=this,e=this.state,n=e.width,o=e.height,a=e.center,i={bounds:this.getBounds(),zoom:this.zoomPlusDelta(),center:a,width:n,height:o},r=void 0;r=f.React.Children.map(this.props.children,function(e){var n=e.props,o=n.anchor,r=n.position,s=n.offset,l=t.latLngToPixel(o||r||a);return f.React.cloneElement(e,{left:l[0]-(s?s[0]:0),top:l[1]-(s?s[1]:0),latLngToPixel:t.latLngToPixel,pixelToLatLng:t.pixelToLatLng,mapState:i})});var s={position:"absolute",width:n,height:o,top:0,left:0};return f.React.createElement("div",{style:s},r)}},{key:"renderAttribution",value:function(){var t=this.props,e=t.attribution,n=t.attributionPrefix;if(!1===e)return null;var o={position:"absolute",bottom:0,right:0,fontSize:"11px",padding:"2px 5px",background:"rgba(255, 255, 255, 0.7)",fontFamily:"'Helvetica Neue', Helvetica, Arial, sans-serif",color:"#333"},a={color:"#0078A8",textDecoration:"none"};return f.React.createElement("div",{key:"attr",className:"pigeon-attribution",style:o},!1===n?null:f.React.createElement("span",null,n||f.React.createElement("a",{href:"https://github.com/mariusandra/pigeon-maps",style:a},"Pigeon")," | "),e||f.React.createElement("span",null," © ",f.React.createElement("a",{href:"https://www.openstreetmap.org/copyright",style:a},"OpenStreetMap")," contributors"))}},{key:"renderWarning",value:function(){var t=this.props,e=t.metaWheelZoom,n=t.metaWheelZoomWarning,o=t.twoFingerDrag,a=t.twoFingerDragWarning,i=t.warningZIndex,r=this.state,s=r.showWarning,l=r.warningType,u=r.width,c=r.height;if(e&&n||o&&a){var h={position:"absolute",top:0,left:0,width:u,height:c,overflow:"hidden",pointerEvents:"none",opacity:s?100:0,transition:"opacity 300ms",background:"rgba(0,0,0,0.5)",color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",fontSize:22,fontFamily:'"Arial", sans-serif',zIndex:i},m="undefined"!=typeof window&&window.navigator&&window.navigator.platform.toUpperCase().indexOf("MAC")>=0?"⌘":"⊞",d="fingers"===l?a:n;return f.React.createElement("div",{style:h},d.replace("META",m))}return null}},{key:"render",value:function(){var t=this.props,e=t.touchEvents,n=t.twoFingerDrag,o=this.state,a=o.width,i=o.height,r={width:this.props.width?a:"100%",height:this.props.height?i:"100%",position:"relative",display:"inline-block",overflow:"hidden",background:"#dddddd",touchAction:e?n?"pan-x pan-y":"none":"auto"};return f.React.createElement("div",{style:r,ref:this.setRef,onWheel:this.handleWheel},a&&i&&this.renderTiles(),a&&i&&this.renderOverlays(),a&&i&&this.renderAttribution(),a&&i&&this.renderWarning())}}]),e}(f.Component);F.propTypes={center:v.default.array,defaultCenter:v.default.array,zoom:v.default.number,defaultZoom:v.default.number,width:v.default.number,defaultWidth:v.default.number,height:v.default.number,defaultHeight:v.default.number,provider:v.default.func,children:v.default.node,animate:v.default.bool,animateMaxScreens:v.default.number,metaWheelZoom:v.default.bool,metaWheelZoomWarning:v.default.string,twoFingerDrag:v.default.bool,twoFingerDragWarning:v.default.string,warningZIndex:v.default.number,attribution:v.default.any,attributionPrefix:v.default.any,zoomSnap:v.default.bool,mouseEvents:v.default.bool,touchEvents:v.default.bool,onClick:v.default.func,onBoundsChanged:v.default.func,onAnimationStart:v.default.func,onAnimationStop:v.default.func},F.defaultProps={animate:!0,metaWheelZoom:!1,metaWheelZoomWarning:"Use META+wheel to zoom!",twoFingerDrag:!1,twoFingerDragWarning:"Use two fingers to move the map",zoomSnap:!0,mouseEvents:!0,touchEvents:!0,warningZIndex:100,animateMaxScreens:5},e.default=F},function(t,e,n){"use strict";var o=n(1),a=n(2),i=n(24);t.exports=function(){function t(t,e,n,o,r,s){s!==i&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=o,n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";function o(t){var e=t.getBoundingClientRect();return{x:e.left,y:e.top}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(t,e,n){"use strict";function o(t,e){for(;t;){if(t.classList&&t.classList.contains(e))return!0;t=t.offsetParent}return!1}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(t,e,n){"use strict";function o(t,e){var n=void 0;return function(){for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];var r=this;clearTimeout(n),n=setTimeout(function(){return t.apply(r,a)},e)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(t,e,n){t.exports=n(29)},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=n(30),u=n(7),c=o(u),h=n(31),m=o(h),d=n(32),f=o(d),p=n(33),v=o(p),g=n(34),w=o(g),_={left:15,top:31},M=function(t){function e(t){a(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.eventParameters=function(t){return{event:t,anchor:n.props.anchor,payload:n.props.payload}},n.handleClick=function(){n.props.onClick&&n.props.onClick(n.eventParameters())},n.handleContextMenu=function(){n.props.onContextMenu&&n.props.onContextMenu(n.eventParameters())},n.handleMouseOver=function(){n.props.onMouseOver&&n.props.onMouseOver(n.eventParameters()),n.setState({hover:!0})},n.handleMouseOut=function(){n.props.onMouseOut&&n.props.onMouseOut(n.eventParameters()),n.setState({hover:!1})},n.state={hover:!1},n}return r(e,t),s(e,[{key:"isRetina",value:function(){return"undefined"!=typeof window&&window.devicePixelRatio>=2}},{key:"isHover",value:function(){return"boolean"==typeof this.props.hover?this.props.hover:this.state.hover}},{key:"image",value:function(){return this.isRetina()?this.isHover()?w.default:f.default:this.isHover()?v.default:m.default}},{key:"componentDidMount",value:function(){(this.isRetina()?[f.default,w.default]:[m.default,v.default]).forEach(function(t){(new window.Image).src=t})}},{key:"render",value:function(){var t=this.props,e=t.left,n=t.top,o=t.onClick,a={position:"absolute",transform:"translate("+(e-_.left)+"px, "+(n-_.top)+"px)",cursor:o?"pointer":"default"};return l.React.createElement("div",{style:a,className:"pigeon-click-block",onClick:this.handleClick,onContextMenu:this.handleContextMenu,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},l.React.createElement("img",{src:this.image(),width:29,height:34,alt:""}))}}]),e}(l.Component);M.propTypes={anchor:c.default.array.isRequired,payload:c.default.any,hover:c.default.bool,onClick:c.default.func,onContextMenu:c.default.func,onMouseOver:c.default.func,onMouseOut:c.default.func,left:c.default.number,top:c.default.number,latLngToPixel:c.default.func,pixelToLatLng:c.default.func},e.default=M},function(t,e,n){"use strict";e.React=n(0),e.ReactDOM=n(3),e.Component=e.React.Component},function(t,e,n){t.exports=n.p+"pin.png"},function(t,e,n){t.exports=n.p+"pin@2x.png"},function(t,e,n){t.exports=n.p+"pin-hover.png"},function(t,e,n){t.exports=n.p+"pin-hover@2x.png"},function(t,e,n){t.exports=n.p+"index.html"}],[19]);