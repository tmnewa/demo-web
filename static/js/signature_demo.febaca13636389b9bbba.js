webpackJsonp([4],{100:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function r(e,t){return Math.atan2(t.x-e.x,t.y-e.y)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(43),u=a(o),c=n(44),s=a(c),l=n(45),_=a(l),d=n(47),f=a(d),g=n(46),h=a(g),p=n(15),m=a(p),v=n(91),w=a(v),S=(n(90),n(115)),y=a(S),C=(w.default.bind(y.default),function(e){function t(){(0,s.default)(this,t);var e=(0,f.default)(this,(t.__proto__||(0,u.default)(t)).call(this));return e._creatCanvas=function(){var t=e.props.area_proportion,n=window.innerWidth/window.innerHeight;n>1?n>t?(console.log("land max height"),e.setState({canvas:{width:window.innerHeight*t,height:window.innerHeight}})):(console.log("land max width"),e.setState({canvas:{width:window.innerWidth,height:window.innerWidth/t}})):1/n>t?(console.log("port max width"),e.setState({canvas:{width:window.innerWidth,height:window.innerWidth*t}})):(console.log("port max height"),console.log(window.innerHeight),e.setState({canvas:{width:window.innerHeight/t,height:window.innerHeight}}));var a=e.refCanvasSignature;e.ctx=a.getContext("2d"),e.ctx.lineJoin=e.ctx.lineCap="round"},e._drawStartSignature=function(t){t.preventDefault(),e.isDrawing=!0,e.lastPoint={x:t.touches[0].clientX-e.refCanvasSignature.offsetLeft,y:t.touches[0].clientY-e.refCanvasSignature.offsetTop}},e._drawMoveSignature=function(t){if(e.isDrawing){for(var n={x:t.touches[0].clientX-e.refCanvasSignature.offsetLeft,y:t.touches[0].clientY-e.refCanvasSignature.offsetTop},a=i(e.lastPoint,n),o=r(e.lastPoint,n),u=t.touches[0].force,c=0;c<a;c++){var s=e.lastPoint.x+Math.sin(o)*c,l=e.lastPoint.y+Math.cos(o)*c,_=e.ctx.createRadialGradient(s,l,0,s,l,e.rectSize/3*(u+.05));_.addColorStop(0,"#000"),_.addColorStop(.3,"rgba(0,0,0,0.5)"),_.addColorStop(1,"rgba(0,0,0,0)"),e.ctx.fillStyle=_,e.ctx.fillRect(s-e.rectSize/2,l-e.rectSize/2,e.rectSize,e.rectSize)}e.lastPoint=n}},e._drawEndSignature=function(){e.isDrawing=!1,e.alreadySign=!0},e._getScaleOrigin=function(){var t=document.getElementById(e.props.dom_signature_id);e.setState({transformOrigin:t.offsetLeft+t.clientWidth/2+"px "+(t.offsetTop+t.clientHeight/2)+"px"})},e._cleanSignature=function(){var t=e.refCanvasSignature;e.ctx.clearRect(0,0,t.width,t.height),e.alreadySign=!1},e._completeSignature=function(){var t=e.props.closeSignature,n=e.refCanvasSignature.toDataURL();if(window.innerWidth/window.innerHeight<1){var a=new Image;a.onload=function(){var i=a.width,r=a.height,o=document.createElement("canvas"),u=o.getContext("2d");o.width=r,o.height=i,u.transform(0,-1,1,0,0,i),u.drawImage(a,0,0),n=o.toDataURL(),t(n,e.alreadySign)},a.src=n}else t(n,e.alreadySign)},e.state={transformOrigin:!1,canvas:{height:!1,width:!1}},e.isDrawing=!1,e.lastPoint=!1,e.ctx=!1,e.rectSize=60,e.alreadySign=!1,e}return(0,h.default)(t,e),(0,_.default)(t,[{key:"componentWillMount",value:function(){this._getScaleOrigin()}},{key:"componentDidMount",value:function(){var e=this;this._creatCanvas(),window.addEventListener("orientationchange",function(t){e._cleanSignature(),setTimeout(e._creatCanvas,0)})}},{key:"render",value:function(){var e=this,t=this.state,n=t.transformOrigin,a=t.canvas,i=this.props,r=i.signature_open,o=(i.closeSignature,i.area_proportion);return m.default.createElement("div",{className:y.default.container+(0,w.default)({" active":r}),style:{transformOrigin:n}},o&&m.default.createElement("canvas",{ref:function(t){return e.refCanvasSignature=t},width:a.width,height:a.height-32,onTouchStart:this._drawStartSignature,onTouchMove:this._drawMoveSignature,onTouchEnd:this._drawEndSignature}),m.default.createElement("div",{className:y.default.box__btns},m.default.createElement("div",{className:y.default.btn__signatureClean,onClick:this._cleanSignature},m.default.createElement("i",{className:"fa fa-eraser","aria-hidden":"true"})),m.default.createElement("div",{className:y.default.btn__signatureDone,onClick:this._completeSignature},m.default.createElement("i",{className:"fa fa-check","aria-hidden":"true"}))))}}]),t}(p.PureComponent));C.propTypes={dom_signature_id:p.PropTypes.string.isRequired,signature_open:p.PropTypes.bool.isRequired,closeSignature:p.PropTypes.func.isRequired,area_proportion:p.PropTypes.number},t.default=C},101:function(e,t,n){"use strict";function a(e){console.log("sent out"),console.log(e),console.log(e.clientHeight),(new i.TimelineLite).to(e,.3,{y:-e.clientHeight,ease:i.Power2.easeOut})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var i=n(90)},102:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(43),r=a(i),o=n(44),u=a(o),c=n(45),s=a(c),l=n(47),_=a(l),d=n(46),f=a(d),g=n(15),h=a(g),p=n(117),m=a(p),v=n(90),w=n(103),S=a(w),y=void 0,C=void 0,b=void 0,x=void 0,E=void 0,M=function(e){function t(){return(0,u.default)(this,t),(0,_.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){y=window.innerWidth,C=window.innerHeight,b=C/3,x=y/2-b/2,E=.2*C}},{key:"componentDidMount",value:function(){var e=this;window.innerHeight>window.innerWidth&&setTimeout(function(){(0,S.default)(e.refCircleLight,e.refTitle,e.props.id_contract)},1200)}},{key:"componentWillLeave",value:function(e){v.TweenMax.to(this.refContainer,.5,{opacity:0,onComplete:e})}},{key:"render",value:function(){var e=this,t=this.props.cbHintDone;return h.default.createElement("div",{ref:function(t){return e.refContainer=t},className:m.default.container,onClick:t},h.default.createElement("h1",{ref:function(t){return e.refTitle=t}},"吉時保線上簽核"),h.default.createElement("svg",{viewBox:"0 0 "+y+" "+C},h.default.createElement("defs",null,h.default.createElement("mask",{id:"clip_hint"},h.default.createElement("rect",{width:"100%",height:"100%",fill:"white"}),h.default.createElement("circle",{className:"svg__hintCircle",ref:function(t){return e.refCircleLight=t},cx:.5*y,cy:.5*-C,r:"0",fill:"black"}))),h.default.createElement("rect",{className:m.default.svg__bg,x:"0",y:"0",width:window.innerWidth,height:window.innerHeight,mask:"url(#clip_hint)"}),h.default.createElement("image",{x:x,y:E,width:b,height:b,className:m.default.svg__logo,xlinkHref:n(126)})))}}]),t}(g.PureComponent);M.propTypes={cbHintDone:g.PropTypes.func.isRequired,id_contract:g.PropTypes.string.isRequired},t.default=M},103:function(e,t,n){"use strict";function a(e,t,n){var a=new i.TimelineLite,r=(document.getElementById(n),window.innerWidth),o=window.innerHeight;a.to(e,1,{force3D:!1,attr:{cy:.37*o,r:.22*o},ease:i.Power2.easeOut}).to(e,1,{force3D:!1,attr:{cy:16*(62.2+1.74)+.15*o,r:.3*r},delay:1}).to(e,1,{force3D:!1,transformOrigin:"center center",skewX:40,rotation:-25,attr:{r:.3*r}}).to(t,1,{opacity:1,ease:i.Power2.easeOut})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var i=n(90)},107:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(15),r=a(i),o=n(42),u=n(96),c=a(u);(0,o.render)(r.default.createElement(c.default,{img_contract:n(98)}),document.getElementById("app"))},115:function(e,t){e.exports={container:"Signature__container___NdjX7",box__btns:"Signature__box__btns___i4D80",btn__signatureDone:"Signature__btn__signatureDone___3Ckj0",btn__signatureClean:"Signature__btn__signatureClean___2g97P"}},116:function(e,t){e.exports={container:"SignatureContainer__container___2_x8m",box__contract:"SignatureContainer__box__contract___r9p2f","box__contract--hint":"SignatureContainer__box__contract--hint___3gIgl",img__contract:"SignatureContainer__img__contract___1HlBB",signature_position:"SignatureContainer__signature_position___2oE9H",signatureArea:"SignatureContainer__signatureArea___2Hbf0",signature_requirement:"SignatureContainer__signature_requirement___1vlnB",signature_requirement2:"SignatureContainer__signature_requirement2___2dEKV",btn__search:"SignatureContainer__btn__search___3h05D",btn__confirm:"SignatureContainer__btn__confirm___3sd8a"}},117:function(e,t){e.exports={container:"SignatureHintMask__container___2KwXP",svg__bg:"SignatureHintMask__svg__bg___OjmQU",svg__logo:"SignatureHintMask__svg__logo___3VAwu",svg__hintCircle:"SignatureHintMask__svg__hintCircle___13LO4"}},126:function(e,t,n){e.exports=n.p+"static/img/logo_newa.c58150e.png"},15:function(e,t){e.exports=React},42:function(e,t){e.exports=ReactDOM},96:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(43),r=a(i),o=n(44),u=a(o),c=n(45),s=a(c),l=n(47),_=a(l),d=n(46),f=a(d),g=n(15),h=a(g),p=n(91),m=a(p),v=n(124),w=a(v),S=n(116),y=a(S),C=n(102),b=a(C),x=n(100),E=a(x),M=n(101),k=a(M),P=m.default.bind(y.default),H=function(e){function t(){var e,n,a,i;(0,u.default)(this,t);for(var o=arguments.length,c=Array(o),s=0;s<o;s++)c[s]=arguments[s];return n=a=(0,_.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(c))),a.state={hintMaskDone:!1,signatureAreaOpen:!1,signatureComplete:!1,area_proportion:!1,imageSignature:!1,zoomIn:!1},a._getSignatureAreaProportion=function(){a.setState({area_proportion:a.refSignatureArea.clientWidth/a.refSignatureArea.clientHeight})},a._zoomOutViewSize=function(){var e=document.querySelector('meta[name="viewport"]');e&&(e.content="width=1041, user-scalable=no")},a._releaseScalable=function(){document.querySelector('meta[name="viewport"]').content="width=1040"},a._cbHintDone=function(){a.setState({hintMaskDone:!0},function(){a._releaseScalable()})},a._openSignatureArea=function(){a._zoomOutViewSize(),a.setState({signatureAreaOpen:!0})},a._closeSignatureArea=function(e,t){a.setState({signatureAreaOpen:!1,signatureComplete:t,imageSignature:e},function(){a._releaseScalable()})},a._completeSignature=function(e){a.setState({signatureComplete:e})},a._confirmContract=function(){(0,k.default)(a.refContract)},i=n,(0,_.default)(a,i)}return(0,f.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this._getSignatureAreaProportion();var e=document.querySelector('meta[name="viewport"]');document.body.addEventListener("gesturestart",function(){e.content="width=1040"},!1)}},{key:"render",value:function(){var e=this,t=this.props.img_contract,n=this.state,a=n.hintMaskDone,i=n.signatureAreaOpen,r=n.area_proportion,o=n.imageSignature,u=n.signatureComplete;return h.default.createElement("div",{className:P("container",{active:o})},h.default.createElement("div",{id:"box_contract",ref:function(t){return e.refContract=t},className:P("box__contract",{"box__contract--hint":!a})},h.default.createElement("img",{src:t,className:y.default.img__contract,alt:""}),h.default.createElement("div",{id:"signature_proposer",ref:function(t){return e.refSignatureArea=t},className:P("signature_position","signature_requirement",{active:o}),style:{backgroundImage:"url("+o+")"},onClick:this._openSignatureArea})),!!r&&h.default.createElement(E.default,{dom_signature_id:"signature_proposer",signature_open:i,area_proportion:r,closeSignature:this._closeSignatureArea}),h.default.createElement(w.default,null,!a&&h.default.createElement(b.default,{cbHintDone:this._cbHintDone,id_contract:"box_contract"})),h.default.createElement("div",{className:P("btn__confirm",{active:u}),onClick:this._confirmContract},"確認送出"))}}]),t}(g.PureComponent);H.propTypes={img_contract:g.PropTypes.string.isRequired},t.default=H},98:function(e,t,n){e.exports=n.p+"static/img/contract_hash.47e78d0.jpg"}},[107]);
//# sourceMappingURL=signature_demo.febaca13636389b9bbba.js.map