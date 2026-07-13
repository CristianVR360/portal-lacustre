// Garden Gnome Software - Skin
// Pano2VR 6.1.2/17873
// Filename: Horizonte parcelas.ggsk
// Generated 2026-07-09T17:57:33

function pano2vrSkin(player,base) {
	player.addVariable('var_compass', 2, true);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, true);
	player.addVariable('vis_card', 2, false);
	player.addVariable('ht_ani', 2, true);
	player.addVariable('descriptionPopUp', 0, "");
	player.addVariable('OpenPopUp', 2, false);
	player.addVariable('ht_ani_1', 2, true);
	player.addVariable('enlaceTemporal', 0, "");
	player.addVariable('numerolote', 0, "");
	player.addVariable('popup_geoInfo', 2, false);
	player.addVariable('tagsOn', 2, true);
	player.addVariable('price', 0, "");
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('MostrarParche', 2, false);
	player.addVariable('taganimation', 2, false);
	player.addVariable('Etapas', 0, "");
	player.addVariable('menu_open', 2, false);
	player.addVariable('menu_touch', 2, false);
	player.addVariable('menu_cloner', 1, 0);
	player.addVariable('category_var', 0, "");
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._rectangle_20=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 469px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 630px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_20.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_20.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._rectangle_20);
		el=me._compass=document.createElement('div');
		el.ggId="Compass";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compass.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._compass.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._compass.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._compass.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._compass.style[domTransition]='right 0s, bottom 0s, opacity 0s';
				if (me._compass.ggCurrentLogicStatePosition == 0) {
					me._compass.style.right='31px';
					me._compass.style.bottom='85px';
				}
				else {
					me._compass.style.right='31px';
					me._compass.style.bottom='5px';
				}
			}
		}
		me._compass.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._compass.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._compass.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._compass.style[domTransition]='right 0s, bottom 0s, opacity 0s';
				if (me._compass.ggCurrentLogicStateAlpha == 0) {
					me._compass.style.visibility="hidden";
					me._compass.style.opacity=0;
				}
				else {
					me._compass.style.visibility=me._compass.ggVisible?'inherit':'hidden';
					me._compass.style.opacity=1;
				}
			}
		}
		me._compass.ggUpdatePosition=function (useTransition) {
		}
		el=me._compassring=document.createElement('div');
		el.ggId="CompassRing";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 14px solid rgba(255,255,255,0.686275);';
		hs+='cursor : default;';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		hs+='color: white;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compassring.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compassring.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._n=document.createElement('div');
		els=me._n__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="N";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 15px;';
		hs+='height: 15px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="N";
		el.appendChild(els);
		me._n.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._n.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._compassring.appendChild(me._n);
		el=me._e=document.createElement('div');
		els=me._e__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="E";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : -13px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 15px;';
		hs+='height: 15px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="E";
		el.appendChild(els);
		me._e.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._e.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._compassring.appendChild(me._e);
		el=me._s=document.createElement('div');
		els=me._s__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="S";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:-180,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -13px;';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 15px;';
		hs+='height: 15px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="S";
		el.appendChild(els);
		me._s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._s.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._compassring.appendChild(me._s);
		el=me._o=document.createElement('div');
		els=me._o__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="O";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 15px;';
		hs+='left : -13px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 15px;';
		hs+='height: 15px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="O";
		el.appendChild(els);
		me._o.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._o.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._compassring.appendChild(me._o);
		me._compass.appendChild(me._compassring);
		el=me._compasspointer1=document.createElement('div');
		els=me._compasspointer1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDkuNzIgMTczLjg2Ij4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO30uY2xzLTJ7ZmlsbDojYjdiN2I3O308L3N0eWxlPgogPC9kZWZzPgogPHRpdGxlPlJlY3Vyc28gMTwvdGl0bGU+CiA8ZyBpZD0iQ2FwYV8yIiBkYXRhLW5hbWU9IkNhcGEgMiI+CiAgPGcgaWQ9IkNhcGFfMS0yIiBkYXRhLW5hbWU9IkNhcGEgMSI+CiAgIDxwb2x5Z29uIHBvaW50cz0iMTQ5LjcyIDE3My44NiA3NC44NiAxMzUuODYgNzQuODYgMCAxNDkuNzIgMTczLjg2IiBjbGFzcz0iY2xzLTEiLz4KICAgPHBvbH'+
			'lnb24gcG9pbnRzPSI3NC44NiAwIDc0Ljg2IDEzNS44NiAwIDE3My44NiA3NC44NiAwIiBjbGFzcz0iY2xzLTIiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._compasspointer1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;color: white;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="CompassPointer1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		hs+='color: white;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compasspointer1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compasspointer1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_compass') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._compasspointer1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._compasspointer1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._compasspointer1.style[domTransition]='';
				if (me._compasspointer1.ggCurrentLogicStateVisible == 0) {
					me._compasspointer1.style.visibility="hidden";
					me._compasspointer1.ggVisible=false;
				}
				else {
					me._compasspointer1.style.visibility=(Number(me._compasspointer1.style.opacity)>0||!me._compasspointer1.style.opacity)?'inherit':'hidden';
					me._compasspointer1.ggVisible=true;
				}
			}
		}
		me._compasspointer1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._compass.appendChild(me._compasspointer1);
		el=me._beamdot=document.createElement('div');
		el.ggId="BeamDot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(0,0,0,0.862745);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._beamdot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._beamdot.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_compass') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._beamdot.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._beamdot.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._beamdot.style[domTransition]='';
				if (me._beamdot.ggCurrentLogicStateVisible == 0) {
					me._beamdot.style.visibility=(Number(me._beamdot.style.opacity)>0||!me._beamdot.style.opacity)?'inherit':'hidden';
					me._beamdot.ggVisible=true;
				}
				else {
					me._beamdot.style.visibility="hidden";
					me._beamdot.ggVisible=false;
				}
			}
		}
		me._beamdot.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._compassbeam=document.createElement('div');
		els=me._compassbeam__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+CiA8cGF0aCBpZD0iVHJpYW5nbGVfMSIgY2xhc3M9ImNscy0xIiBkYXRhLW5hbWU9IlRyaWFuZ2xlIDEiIGQ9Ik01MCw1MEw2NiwxOEgzNEw1MCw1MCIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjY4NjI3NSIvPgo8L3N2Zz4K';
		me._compassbeam__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="CompassBeam";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compassbeam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compassbeam.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._beamdot.appendChild(me._compassbeam);
		me._compass.appendChild(me._beamdot);
		me.divSkin.appendChild(me._compass);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 106px;';
		hs+='left : 50%;';
		hs+='margin-left : -54.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 109px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.offsetWidth - (me._thumbnail_menu.ggVertScrollVisible ? 9 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.offsetWidth - (me._thumbnail_menu.ggVertScrollVisible ? 9 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.offsetHeight - (me._thumbnail_menu.ggHorScrollVisible ? 9 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.offsetHeight - (me._thumbnail_menu.ggHorScrollVisible ? 9 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			me._thumbnail_menu.ggDragLastY = t[0].clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
			}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggDragLastY = t[0].clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._thumbnail_menu__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 9px; height: 480px; background-color: rgba(0,0,0,0.392157); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_menu__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 9px; height: 480px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_menu.ggScrollPosY = 0;
		me._thumbnail_menu.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragLastY = e.clientY;
				me._thumbnail_menu.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffY = t[0].clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragLastY = t[0].clientY;
				me._thumbnail_menu.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_menu.ggScrollHeight;
			if (e.offsetY < me._thumbnail_menu.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_menu.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_menu.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_menu.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_menu.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_menu.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 9px; height: 9px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : calc(100% - 36px);';
		hs+='left : 0%;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 115px;';
		hs+='pointer-events:none;';
		hs+='background-color:white;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style[domTransition]='opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._thumbnail_menu.style.opacity == 0.0) { me._thumbnail_menu.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu.style.opacity=0;
				}
				else {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
			}
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 9;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (9/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._thumbnail_menu__vertScrollBg.style.visibility = 'inherit';
				me._thumbnail_menu__vertScrollFg.style.visibility = 'inherit';
				me._thumbnail_menu.ggVertScrollVisible = true;
				if(me._thumbnail_menu.ggVertScrollVisible) {
					me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.offsetWidth - 9;
					if (me._thumbnail_menu.ggHorScrollVisible) {
						me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.offsetHeight - 9;
						me._thumbnail_menu.ggAvailableHeightWithScale = me._thumbnail_menu.getBoundingClientRect().height - me._thumbnail_menu__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_menu__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.offsetHeight;
						me._thumbnail_menu.ggAvailableHeightWithScale = me._thumbnail_menu.getBoundingClientRect().height;
						me._thumbnail_menu__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_menu__vertScrollBg.style.height = me._thumbnail_menu.ggAvailableHeight + 'px';
					me._thumbnail_menu.ggVPercentVisible = me._thumbnail_menu.ggAvailableHeightWithScale / contentHeight;
					if (me._thumbnail_menu.ggVPercentVisible > 1.0) me._thumbnail_menu.ggVPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollHeight =  Math.round(me._thumbnail_menu__vertScrollBg.offsetHeight * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu__vertScrollFg.style.height = me._thumbnail_menu.ggScrollHeight + 'px';
					me._thumbnail_menu.ggScrollPosY = me._thumbnail_menu.ggScrollPosYPercent * me._thumbnail_menu.ggAvailableHeight;
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
					me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				} else {
					me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.offsetWidth;
					me._thumbnail_menu.ggScrollPosY = 0;
					me._thumbnail_menu.ggScrollPosYPercent = 0.0;
					me._thumbnail_menu__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_menu__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_menu.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu);
					me._thumbnail_menu.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 110;
		el.ggHeight = 106;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._rectangle_1 && me._thumbnail_cloner.ggInstances[i]._rectangle_1.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._rectangle_1.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._text_14 && me._thumbnail_cloner.ggInstances[i]._text_14.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._text_14.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._svg_11 && me._thumbnail_cloner.ggInstances[i]._svg_11.logicBlock_scaling) {
						me._thumbnail_cloner.ggInstances[i]._svg_11.logicBlock_scaling();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_nodeimage && me._thumbnail_cloner.ggInstances[i]._thumbnail_nodeimage.logicBlock_scaling) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_nodeimage.logicBlock_scaling();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumCols = 0;
			curNumCols = me._thumbnail_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_changenode();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "mostrar";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 106px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 535px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style[domTransition]='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('ht_ani', !player.getVariableValue('ht_ani'));
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._header=document.createElement('div');
		el.ggId="header";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background-color:white;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._header.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._header.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_hide_button=document.createElement('div');
		els=me._thumbnail_hide_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIGlkPSJDYXBhXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMT'+
			'AwIDEwMCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MTE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMCwxOC43QzAsMTEuOSw1LjYsNi4yLDEyLjUsNi4yaDc1YzYuOSwwLDEyLjUsNS42LDEyLjUsMTIuNXY2Mi41YzAsNi45LTUuNiwxMi41LTEyLjUsMTIuNWgtNzVDNS42LDkzLjcsMCw4OC4xLDAsODEuMiYjeGQ7JiN4YTsmI3g5O1YxOC43eiBNNjMuMiwzOS42Yy0wLjktMS4zLTIuMy0yLjEtMy45LTIuMXMtMywwLjgtMy45'+
			'LDIuMWwtMTcsMjQuOUwzMy4zLDU4Yy0wLjktMS4xLTIuMi0xLjgtMy43LTEuOFMyNi45LDU2LjksMjYsNThMMTMuNSw3My42JiN4ZDsmI3hhOyYjeDk7Yy0xLjEsMS40LTEuMywzLjMtMC42LDVzMi40LDIuNyw0LjIsMi43aDE4LjhoNi4zaDQwLjZjMS43LDAsMy4zLTEsNC4xLTIuNWMwLjgtMS41LDAuNy0zLjQtMC4zLTQuOEw2My4yLDM5LjZMNjMuMiwzOS42eiYjeGQ7JiN4YTsmI3g5OyBNMjEuOSwzNy41YzUuMiwwLDkuNC00LjIsOS40LTkuNGMwLTUuMi00LjItOS40LTkuNC05LjRzLTkuNCw0LjItOS40LDkuNEMxMi41LDMzLjMsMTYuNywzNy41LDIxLjksMzcuNXoiLz4KIDxsaW5lIHkxPS'+
			'I4OS40IiB4MT0iNiIgY2xhc3M9InN0MCIgeDI9IjkyLjkiIHkyPSIxMS40Ii8+Cjwvc3ZnPgo=';
		me._thumbnail_hide_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_hide_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIGlkPSJDYXBhXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMT'+
			'AwIDEwMCI+CiA8cGF0aCBkPSJNMCwxOC43QzAsMTEuOSw1LjYsNi4yLDEyLjUsNi4yaDc1YzYuOSwwLDEyLjUsNS42LDEyLjUsMTIuNXY2Mi41YzAsNi45LTUuNiwxMi41LTEyLjUsMTIuNWgtNzVDNS42LDkzLjcsMCw4OC4xLDAsODEuMiYjeGQ7JiN4YTsmI3g5O1YxOC43eiBNNjMuMiwzOS42Yy0wLjktMS4zLTIuMy0yLjEtMy45LTIuMXMtMywwLjgtMy45LDIuMWwtMTcsMjQuOUwzMy4zLDU4Yy0wLjktMS4xLTIuMi0xLjgtMy43LTEuOFMyNi45LDU2LjksMjYsNThMMTMuNSw3My42JiN4ZDsmI3hhOyYjeDk7Yy0xLjEsMS40LTEuMywzLjMtMC42LDVzMi40LDIuNyw0LjIsMi43aDE4LjhoNi4z'+
			'aDQwLjZjMS43LDAsMy4zLTEsNC4xLTIuNWMwLjgtMS41LDAuNy0zLjQtMC4zLTQuOEw2My4yLDM5LjZMNjMuMiwzOS42eiYjeGQ7JiN4YTsmI3g5OyBNMjEuOSwzNy41YzUuMiwwLDkuNC00LjIsOS40LTkuNGMwLTUuMi00LjItOS40LTkuNC05LjRzLTkuNCw0LjItOS40LDkuNEMxMi41LDMzLjMsMTYuNywzNy41LDIxLjksMzcuNXoiLz4KPC9zdmc+Cg==';
		me._thumbnail_hide_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="thumbnail_hide_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_hide_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_hide_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_hide_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_hide_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_hide_button.style[domTransition]='opacity 0s';
				if (me._thumbnail_hide_button.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_hide_button.style.visibility="hidden";
					me._thumbnail_hide_button.style.opacity=0;
				}
				else {
					me._thumbnail_hide_button.style.visibility=me._thumbnail_hide_button.ggVisible?'inherit':'hidden';
					me._thumbnail_hide_button.style.opacity=1;
				}
			}
		}
		me._thumbnail_hide_button.onmouseover=function (e) {
			me._thumbnail_hide_button__img.style.visibility='hidden';
			me._thumbnail_hide_button__imgo.style.visibility='inherit';
		}
		me._thumbnail_hide_button.onmouseout=function (e) {
			me._thumbnail_hide_button__img.style.visibility='inherit';
			me._thumbnail_hide_button__imgo.style.visibility='hidden';
		}
		me._thumbnail_hide_button.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_hide_button);
		el=me._thumbnail_show_button=document.createElement('div');
		els=me._thumbnail_show_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIGlkPSJDYXBhXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMT'+
			'AwIDEwMCI+CiA8cGF0aCBkPSJNMCwxOC43QzAsMTEuOSw1LjYsNi4yLDEyLjUsNi4yaDc1YzYuOSwwLDEyLjUsNS42LDEyLjUsMTIuNXY2Mi41YzAsNi45LTUuNiwxMi41LTEyLjUsMTIuNWgtNzVDNS42LDkzLjcsMCw4OC4xLDAsODEuMiYjeGQ7JiN4YTsmI3g5O1YxOC43eiBNNjMuMiwzOS42Yy0wLjktMS4zLTIuMy0yLjEtMy45LTIuMXMtMywwLjgtMy45LDIuMWwtMTcsMjQuOUwzMy4zLDU4Yy0wLjktMS4xLTIuMi0xLjgtMy43LTEuOFMyNi45LDU2LjksMjYsNThMMTMuNSw3My42JiN4ZDsmI3hhOyYjeDk7Yy0xLjEsMS40LTEuMywzLjMtMC42LDVzMi40LDIuNyw0LjIsMi43aDE4LjhoNi4z'+
			'aDQwLjZjMS43LDAsMy4zLTEsNC4xLTIuNWMwLjgtMS41LDAuNy0zLjQtMC4zLTQuOEw2My4yLDM5LjZMNjMuMiwzOS42eiYjeGQ7JiN4YTsmI3g5OyBNMjEuOSwzNy41YzUuMiwwLDkuNC00LjIsOS40LTkuNGMwLTUuMi00LjItOS40LTkuNC05LjRzLTkuNCw0LjItOS40LDkuNEMxMi41LDMzLjMsMTYuNywzNy41LDIxLjksMzcuNXoiLz4KPC9zdmc+Cg==';
		me._thumbnail_show_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_show_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIGlkPSJDYXBhXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMT'+
			'AwIDEwMCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MTE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMCwxOC43QzAsMTEuOSw1LjYsNi4yLDEyLjUsNi4yaDc1YzYuOSwwLDEyLjUsNS42LDEyLjUsMTIuNXY2Mi41YzAsNi45LTUuNiwxMi41LTEyLjUsMTIuNWgtNzVDNS42LDkzLjcsMCw4OC4xLDAsODEuMiYjeGQ7JiN4YTsmI3g5O1YxOC43eiBNNjMuMiwzOS42Yy0wLjktMS4zLTIuMy0yLjEtMy45LTIuMXMtMywwLjgtMy45'+
			'LDIuMWwtMTcsMjQuOUwzMy4zLDU4Yy0wLjktMS4xLTIuMi0xLjgtMy43LTEuOFMyNi45LDU2LjksMjYsNThMMTMuNSw3My42JiN4ZDsmI3hhOyYjeDk7Yy0xLjEsMS40LTEuMywzLjMtMC42LDVzMi40LDIuNyw0LjIsMi43aDE4LjhoNi4zaDQwLjZjMS43LDAsMy4zLTEsNC4xLTIuNWMwLjgtMS41LDAuNy0zLjQtMC4zLTQuOEw2My4yLDM5LjZMNjMuMiwzOS42eiYjeGQ7JiN4YTsmI3g5OyBNMjEuOSwzNy41YzUuMiwwLDkuNC00LjIsOS40LTkuNGMwLTUuMi00LjItOS40LTkuNC05LjRzLTkuNCw0LjItOS40LDkuNEMxMi41LDMzLjMsMTYuNywzNy41LDIxLjksMzcuNXoiLz4KIDxsaW5lIHkxPS'+
			'I4OS40IiB4MT0iNiIgY2xhc3M9InN0MCIgeDI9IjkyLjkiIHkyPSIxMS40Ii8+Cjwvc3ZnPgo=';
		me._thumbnail_show_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="thumbnail_show_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_show_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_show_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_show_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_show_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_show_button.style[domTransition]='opacity 0s';
				if (me._thumbnail_show_button.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_show_button.style.visibility=me._thumbnail_show_button.ggVisible?'inherit':'hidden';
					me._thumbnail_show_button.style.opacity=1;
				}
				else {
					me._thumbnail_show_button.style.visibility="hidden";
					me._thumbnail_show_button.style.opacity=0;
				}
			}
		}
		me._thumbnail_show_button.onmouseover=function (e) {
			me._thumbnail_show_button__img.style.visibility='hidden';
			me._thumbnail_show_button__imgo.style.visibility='inherit';
		}
		me._thumbnail_show_button.onmouseout=function (e) {
			me._thumbnail_show_button__img.style.visibility='inherit';
			me._thumbnail_show_button__imgo.style.visibility='hidden';
		}
		me._thumbnail_show_button.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_show_button);
		me._header.appendChild(me._thumbnail);
		el=me._svg_30=document.createElement('div');
		els=me._svg_30__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIGlkPSJDYXBhXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMT'+
			'AwIDEwMCI+CiA8cGF0aCBkPSJNOTkuNCwxMC42YzEuMi0yLjksMC41LTYuMi0xLjctOC4zYy0yLjItMi4yLTUuNS0yLjktOC4zLTEuN0w0LjgsMzUuMmMtMy40LDEuNC01LjMsNS00LjYsOC42UzQsNTAsNy43LDUwSDUwdjQyLjMmI3hkOyYjeGE7JiN4OTtjMCwzLjcsMi42LDYuOCw2LjIsNy41YzMuNiwwLjcsNy4yLTEuMiw4LjYtNC42QzY0LjgsOTUuMiw5OS40LDEwLjYsOTkuNCwxMC42eiIvPgo8L3N2Zz4K';
		me._svg_30__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 57px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_30.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['svg_30'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_30.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_30.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_30.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._svg_30.ggCurrentLogicStateScaling == 0) {
					me._svg_30.ggParameter.sx = 1.1;
					me._svg_30.ggParameter.sy = 1.1;
					me._svg_30.style[domTransform]=parameterToTransform(me._svg_30.ggParameter);
				}
				else {
					me._svg_30.ggParameter.sx = 1;
					me._svg_30.ggParameter.sy = 1;
					me._svg_30.style[domTransform]=parameterToTransform(me._svg_30.ggParameter);
				}
			}
		}
		me._svg_30.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width >= 1000))
				)
			) {
				player.openNext("{node1}","-180\/-77\/90");
			}
			player.openNext("{node6}","");
			player.setVariableValue('vis_card', false);
		}
		me._svg_30.onmouseover=function (e) {
			me.elementMouseOver['svg_30']=true;
			me._svg_30.logicBlock_scaling();
		}
		me._svg_30.onmouseout=function (e) {
			me.elementMouseOver['svg_30']=false;
			me._svg_30.logicBlock_scaling();
		}
		me._svg_30.ontouchend=function (e) {
			me.elementMouseOver['svg_30']=false;
			me._svg_30.logicBlock_scaling();
		}
		me._svg_30.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._svg_30);
		el=me._main_title=document.createElement('div');
		els=me._main_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="main_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text mainTitle";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._main_title.ggUpdateText=function() {
			var hs=player.getNodeUserdata('_master').title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._main_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._main_title.ggUpdateText();
		});
		el.appendChild(els);
		me._main_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._main_title.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.ggUserdata.tags.indexOf("mostrar") != -1))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._main_title.ggCurrentLogicStateText != newLogicStateText) {
				me._main_title.ggCurrentLogicStateText = newLogicStateText;
				me._main_title.style[domTransition]='';
				if (me._main_title.ggCurrentLogicStateText == 0) {
					me._main_title.ggText=me.ggUserdata.title;
					me._main_title__text.innerHTML=me._main_title.ggText;
					if (me._main_title.ggUpdateText) {
					me._main_title.ggUpdateText=function() {
						var hs=me.ggUserdata.title;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._main_title.ggUpdatePosition) me._main_title.ggUpdatePosition();
					}
				}
				else {
					me._main_title.ggText=player.getNodeUserdata('_master').title;
					me._main_title__text.innerHTML=me._main_title.ggText;
					if (me._main_title.ggUpdateText) {
					me._main_title.ggUpdateText=function() {
						var hs=player.getNodeUserdata('_master').title;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._main_title.ggUpdatePosition) me._main_title.ggUpdatePosition();
					}
				}
			}
		}
		me._main_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._header.appendChild(me._main_title);
		me.divSkin.appendChild(me._header);
		el=me._menu_inferior=document.createElement('div');
		el.ggId="Menu inferior";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 40px;';
		hs+='height : 55px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_inferior.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_inferior.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("main") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_inferior.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_inferior.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_inferior.style[domTransition]='';
				if (me._menu_inferior.ggCurrentLogicStateVisible == 0) {
					me._menu_inferior.style.visibility="hidden";
					me._menu_inferior.ggVisible=false;
				}
				else {
					me._menu_inferior.style.visibility="hidden";
					me._menu_inferior.ggVisible=false;
				}
			}
		}
		me._menu_inferior.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTcgMTc7IiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE3ID'+
			'E3Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwLjksNC45TDcuMiw4LjVsMy42LDMuNmwtMC43LDAuN0w1LjgsOC41bDQuNC00LjRDMTAuMSw0LjEsMTAuOSw0LjksMTAuOSw0Ljl6IE0xNyw4LjUmI3hkOyYjeGE7JiN4OTtjMCw0LjctMy44LDguNS04LjUsOC41UzAsMTMuMiwwLDguNVMzLjgsMCw4LjUsMFMxNywzLjgsMTcsOC41eiBNMTYsOC41QzE2LDQuNCwxMi42LDEsOC41LDFTMSw0LjQsMSw4LjVTNC40LDE2LDguNSwxNiYjeGQ7JiN4YTsmI3g5O1MxNiwxMi42LDE2LDgu'+
			'NXoiLz4KPC9zdmc+Cg==';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 24px;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['svg_3'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_3.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._svg_3.ggCurrentLogicStateScaling == 0) {
					me._svg_3.ggParameter.sx = 1.1;
					me._svg_3.ggParameter.sy = 1.1;
					me._svg_3.style[domTransform]=parameterToTransform(me._svg_3.ggParameter);
				}
				else {
					me._svg_3.ggParameter.sx = 1;
					me._svg_3.ggParameter.sy = 1;
					me._svg_3.style[domTransform]=parameterToTransform(me._svg_3.ggParameter);
				}
			}
		}
		me._svg_3.onclick=function (e) {
			player.openNext("{"+player.getLastVisitedNode()+"}","");
		}
		me._svg_3.onmouseover=function (e) {
			me.elementMouseOver['svg_3']=true;
			me._text_12.logicBlock_visible();
			me._svg_3.logicBlock_scaling();
		}
		me._svg_3.onmouseout=function (e) {
			me.elementMouseOver['svg_3']=false;
			me._text_12.logicBlock_visible();
			me._svg_3.logicBlock_scaling();
		}
		me._svg_3.ontouchend=function (e) {
			me.elementMouseOver['svg_3']=false;
			me._text_12.logicBlock_visible();
			me._svg_3.logicBlock_scaling();
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_12=document.createElement('div');
		els=me._text_12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -23px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 49px;';
		hs+='pointer-events:auto;';
		hs+='font-size:12pt;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 49px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="volver";
		el.appendChild(els);
		me._text_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['svg_3'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_12.style[domTransition]='';
				if (me._text_12.ggCurrentLogicStateVisible == 0) {
					me._text_12.style.visibility=(Number(me._text_12.style.opacity)>0||!me._text_12.style.opacity)?'inherit':'hidden';
					me._text_12.ggVisible=true;
				}
				else {
					me._text_12.style.visibility="hidden";
					me._text_12.ggVisible=false;
				}
			}
		}
		me._text_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._svg_3.appendChild(me._text_12);
		me._menu_inferior.appendChild(me._svg_3);
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODMuOTYgMzgzLjkzIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPgogPC9kZWZzPgogPHRpdGxlPmluZm9pY29uPC90aXRsZT4KIDxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj4KICA8ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMCwyMDMuOTN2LTI0Yy4yMi0xLjIxLjQ4LTIuNDIuNjctMy42NCwxLjQyLTkuMjQsMi4yLTE4LjYzLDQuMzQtMjcuN0MyOS4zMSw0NS42NSwxMjkuNDItMT'+
			'cuNjEsMjMzLDQuMzVjODQuNzcsMTgsMTQ4LjE0LDkzLjQyLDE1MC44NywxODAsMS42MSw1MC45MS0xNC4wOSw5NS45NS00Ny42OSwxMzQuMjgtMjkuNiwzMy43Ni02Ni44MSw1NC41NC0xMTEuMDgsNjIuNC03LDEuMjQtMTQuMDUsMi0yMS4wOCwyLjkySDE4MGExOS40OCwxOS40OCwwLDAsMC0yLjg4LS42MmMtMjAuNDYtMS41My00MC4yOS01LjkxLTU5LTE0LjI0QzU0Ljg4LDM0MSwxNi4yOSwyOTMsMi45NCwyMjUsMS41NywyMTguMDYsMSwyMTEsMCwyMDMuOTNabTE5Mi0xNzRBMTYyLDE2MiwwLDAsMCwzMCwxOTEuNzVjLS4xNCw4OS40OCw3Mi41LDE2Mi4xOSwxNjIsMTYyLjE3QTE2MiwxNjIs'+
			'MCwwLDAsMzU0LDE5Mi4wOUMzNTQuMTUsMTAyLjU5LDI4MS41MiwyOS45MSwxOTIsMjkuOTNaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE3NywyMjMuOTRxMC0yMy40MSwwLTQ2Ljg0YzAtOS42MSw2LjQxLTE2LjU2LDE1LjExLTE2LjQ2UzIwNywxNjcuNTQsMjA3LDE3N3EwLDQ3LDAsOTQuMDZjMCw5LjUxLTYuMTgsMTYuMTYtMTQuOTIsMTYuMTlzLTE1LTYuNjMtMTUuMDYtMTZRMTc3LDI0Ny41NSwxNzcsMjIzLjk0WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOTIuMTcsMTAxLjg3YTIwLjE1LDIwLjE1LDAsMCwxLDIwLjA3LDIwLjM1LDIwLjI0LDIwLjI0LDAsMSwxLT'+
			'QwLjQ4LS4zM0EyMC4xNywyMC4xNywwLDAsMSwxOTIuMTcsMTAxLjg3WiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDx=21;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 34px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['svg_4'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_4.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._svg_4.ggCurrentLogicStateScaling == 0) {
					me._svg_4.ggParameter.sx = 1.1;
					me._svg_4.ggParameter.sy = 1.1;
					me._svg_4.style[domTransform]=parameterToTransform(me._svg_4.ggParameter);
				}
				else {
					me._svg_4.ggParameter.sx = 1;
					me._svg_4.ggParameter.sy = 1;
					me._svg_4.style[domTransform]=parameterToTransform(me._svg_4.ggParameter);
				}
			}
		}
		me._svg_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("mainPano") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_4.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._svg_4.ggCurrentLogicStateVisible == 0) {
					me._svg_4.style.visibility="hidden";
					me._svg_4.ggVisible=false;
				}
				else {
					me._svg_4.style.visibility="hidden";
					me._svg_4.ggVisible=false;
				}
			}
		}
		me._svg_4.onclick=function (e) {
			me._card_title.ggText=me.ggUserdata.title;
			me._card_title.ggTextDiv.innerHTML=me._card_title.ggText;
			if (me._card_title.ggUpdateText) {
				me._card_title.ggUpdateText=function() {
					var hs=me.ggUserdata.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._card_title.ggUpdatePosition) {
				me._card_title.ggUpdatePosition();
			}
			me._card_title.ggTextDiv.scrollTop = 0;
			me._card_body.ggText=me.ggUserdata.description;
			me._card_body.ggTextDiv.innerHTML=me._card_body.ggText;
			if (me._card_body.ggUpdateText) {
				me._card_body.ggUpdateText=function() {
					var hs=me.ggUserdata.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._card_body.ggUpdatePosition) {
				me._card_body.ggUpdatePosition();
			}
			me._card_body.ggTextDiv.scrollTop = 0;
			me._card_price.ggText=me.ggUserdata.information;
			me._card_price.ggTextDiv.innerHTML=me._card_price.ggText;
			if (me._card_price.ggUpdateText) {
				me._card_price.ggUpdateText=function() {
					var hs=me.ggUserdata.information;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._card_price.ggUpdatePosition) {
				me._card_price.ggUpdatePosition();
			}
			me._card_price.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_card', true);
		}
		me._svg_4.onmouseover=function (e) {
			me.elementMouseOver['svg_4']=true;
			me._text_11.logicBlock_visible();
			me._svg_4.logicBlock_scaling();
		}
		me._svg_4.onmouseout=function (e) {
			me.elementMouseOver['svg_4']=false;
			me._text_11.logicBlock_visible();
			me._svg_4.logicBlock_scaling();
		}
		me._svg_4.ontouchend=function (e) {
			me.elementMouseOver['svg_4']=false;
			me._text_11.logicBlock_visible();
			me._svg_4.logicBlock_scaling();
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_11=document.createElement('div');
		els=me._text_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -25px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 49px;';
		hs+='pointer-events:auto;';
		hs+='font-size:12pt;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="informaci\xf3n";
		el.appendChild(els);
		me._text_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['svg_4'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_11.style[domTransition]='';
				if (me._text_11.ggCurrentLogicStateVisible == 0) {
					me._text_11.style.visibility=(Number(me._text_11.style.opacity)>0||!me._text_11.style.opacity)?'inherit':'hidden';
					me._text_11.ggVisible=true;
				}
				else {
					me._text_11.style.visibility="hidden";
					me._text_11.ggVisible=false;
				}
			}
		}
		me._text_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((47-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._svg_4.appendChild(me._text_11);
		me._menu_inferior.appendChild(me._svg_4);
		me.divSkin.appendChild(me._menu_inferior);
		el=me._textoguia=document.createElement('div');
		el.ggId="Textoguia";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 44px;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 640px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._textoguia.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._textoguia.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getTilt() >= -63))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._textoguia.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._textoguia.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._textoguia.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._textoguia.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._textoguia.style.opacity == 0.0) { me._textoguia.style.visibility="hidden"; } }, 1005);
					me._textoguia.style.opacity=0;
				}
				else {
					me._textoguia.style.visibility=me._textoguia.ggVisible?'inherit':'hidden';
					me._textoguia.style.opacity=1;
				}
			}
		}
		me._textoguia.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 271px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._textoguia.appendChild(me._rectangle_3);
		el=me._text_41=document.createElement('div');
		els=me._text_41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:700; font-size:16px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 23px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Explora cada lote haciendo clic en ellos";
		el.appendChild(els);
		me._text_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_41.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._textoguia.appendChild(me._text_41);
		me.divSkin.appendChild(me._textoguia);
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=100;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 526px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp + me._timer_2.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style[domTransition]='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility="hidden";
					me._timer_2.ggVisible=false;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_2);
		el=me._variables=document.createElement('div');
		els=me._variables__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="variables";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 102px;';
		hs+='height: 22px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._variables.ggUpdateText=function() {
			var hs=player.getCurrentNode();
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._variables.ggUpdateText();
		player.addListener('changenode', function() {
			me._variables.ggUpdateText();
		});
		el.appendChild(els);
		me._variables.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._variables.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._variables);
		el=me._buttonmasterplan=document.createElement('div');
		els=me._buttonmasterplan__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ButtonMasterplan";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 47px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:700; font-size:16px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.509804);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 8px 5px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Ver vista general";
		el.appendChild(els);
		me._buttonmasterplan.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._buttonmasterplan.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['buttonmasterplan'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._buttonmasterplan.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._buttonmasterplan.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._buttonmasterplan.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._buttonmasterplan.ggCurrentLogicStateScaling == 0) {
					me._buttonmasterplan.ggParameter.sx = 1.1;
					me._buttonmasterplan.ggParameter.sy = 1.1;
					me._buttonmasterplan.style[domTransform]=parameterToTransform(me._buttonmasterplan.ggParameter);
				}
				else {
					me._buttonmasterplan.ggParameter.sx = 1;
					me._buttonmasterplan.ggParameter.sy = 1;
					me._buttonmasterplan.style[domTransform]=parameterToTransform(me._buttonmasterplan.ggParameter);
				}
			}
		}
		me._buttonmasterplan.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("main") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._buttonmasterplan.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._buttonmasterplan.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._buttonmasterplan.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._buttonmasterplan.ggCurrentLogicStateVisible == 0) {
					me._buttonmasterplan.style.visibility="hidden";
					me._buttonmasterplan.ggVisible=false;
				}
				else {
					me._buttonmasterplan.style.visibility=(Number(me._buttonmasterplan.style.opacity)>0||!me._buttonmasterplan.style.opacity)?'inherit':'hidden';
					me._buttonmasterplan.ggVisible=true;
				}
			}
		}
		me._buttonmasterplan.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getTilt() <= -63))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._buttonmasterplan.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._buttonmasterplan.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._buttonmasterplan.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._buttonmasterplan.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._buttonmasterplan.style.opacity == 0.0) { me._buttonmasterplan.style.visibility="hidden"; } }, 1005);
					me._buttonmasterplan.style.opacity=0;
				}
				else {
					me._buttonmasterplan.style.visibility=me._buttonmasterplan.ggVisible?'inherit':'hidden';
					me._buttonmasterplan.style.opacity=1;
				}
			}
		}
		me._buttonmasterplan.onclick=function (e) {
			player.openNext("{node31}","");
		}
		me._buttonmasterplan.onmouseover=function (e) {
			me.elementMouseOver['buttonmasterplan']=true;
			me._buttonmasterplan.logicBlock_scaling();
		}
		me._buttonmasterplan.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._buttonmasterplan__text)
					return;
				}
			}
			me.elementMouseOver['buttonmasterplan']=false;
			me._buttonmasterplan.logicBlock_scaling();
		}
		me._buttonmasterplan.ontouchend=function (e) {
			me.elementMouseOver['buttonmasterplan']=false;
			me._buttonmasterplan.logicBlock_scaling();
		}
		me._buttonmasterplan.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._buttonmasterplan);
		el=me._text_infotagsgeo=document.createElement('div');
		els=me._text_infotagsgeo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_infotagsgeo";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='font-weight:600;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.509804);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 7px 4px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._text_infotagsgeo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_infotagsgeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('popup_geoInfo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_infotagsgeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_infotagsgeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_infotagsgeo.style[domTransition]='';
				if (me._text_infotagsgeo.ggCurrentLogicStateVisible == 0) {
					me._text_infotagsgeo.style.visibility=(Number(me._text_infotagsgeo.style.opacity)>0||!me._text_infotagsgeo.style.opacity)?'inherit':'hidden';
					me._text_infotagsgeo.ggVisible=true;
				}
				else {
					me._text_infotagsgeo.style.visibility="hidden";
					me._text_infotagsgeo.ggVisible=false;
				}
			}
		}
		me._text_infotagsgeo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._text_infotagsgeo);
		el=me._button_next_previous=document.createElement('div');
		el.ggId="button_next_previous";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 84px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_next_previous.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_next_previous.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._pano_prev=document.createElement('div');
		els=me._pano_prev__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzMnB4IiBpZD0iTGF5ZXJfMSIgeD0iMH'+
			'B4IiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNSwwLDEyLjUsNS41OTUsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1MyYjeGQ7JiN4'+
			'YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMCwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ2bDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ2LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLDUuMzE1LTEuMTI5LDcuMTQ4LTIuOTZsMCwwYzEuODMtMS44MzMsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwQzEzLjIwNS'+
			'w1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTNMOC44NTMsOC44NTN6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xOS45MTYsMjIuNjE2bC01Ljg5NS01Ljc2Yy0wLjIzMi0wLjIyNy0wLjM2LTAuNTMyLTAuMzYtMC44NTZsMCwwYzAtMC4zMjQsMC4xMjgtMC42MjksMC4zNi0wLjg1NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsNS44OTUtNS43NjFjMC4zNDQtMC4zMzYsMC44NTgtMC40MzQsMS4zMDEtMC4yNDdsMCwwYzAuNDQyLDAuMTg2LDAuNzMyLDAuNjIyLDAuNzMyLDEuMTAzbDAsMHYxMS41MjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjQ3OS0wLjI5'+
			'LDAuOTE3LTAuNzMyLDEuMTAzbDAsMGMtMC4xNDksMC4wNjMtMC4zMDcsMC4wOTQtMC40NjMsMC4wOTRsMCwwQzIwLjQ0NywyMi45NTcsMjAuMTQ1LDIyLjgzOSwxOS45MTYsMjIuNjE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7TDE5LjkxNiwyMi42MTZ6IE0xNi41NjksMTZsMi45ODgsMi45MTl2LTUuODM4TDE2LjU2OSwxNkwxNi41NjksMTZ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNC4wMTEsMjIuNjE2bC01Ljg5Ni01Ljc2MWMtMC4yMzQtMC4yMjktMC4zNjMtMC41NC0wLjM2LTAuODY4bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjAwNC0wLjMyOSwwLjEzOS0wLjYzNy'+
			'wwLjM3OS0wLjg2MWwwLDBsNi4xNjEtNS43NjFjMC40ODItMC40NTIsMS4yNC0wLjQyNiwxLjY5MSwwLjA1N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40NTEsMC40ODIsMC40MjYsMS4yMzktMC4wNTYsMS42OWwwLDBsLTUuMjQ4LDQuOTA3bDUsNC44ODZ2MC4wMDFjMC40NzIsMC40NjEsMC40ODEsMS4yMTksMC4wMiwxLjY5MWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMjM1LDAuMjM5LTAuNTQ1LDAuMzU5LTAuODU2LDAuMzU5bDAsMEMxNC41NDYsMjIuOTU3LDE0LjI0NCwyMi44NDQsMTQuMDExLDIyLjYxNkwxNC4wMTEsMjIuNjE2eiIvPgogIDwv'+
			'Zz4KIDwvZz4KIDxnIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDUsMCwxMi41LDUuNTk1LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAsMi43OT'+
			'UsMS4xMjksNS4zMTQsMi45Niw3LjE0NmwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMCw1LjMxNS0xLjEyOSw3LjE0OC0yLjk2bDAsMGMxLjgzLTEuODMzLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEzLTUuMzE0LTIuOTYtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODUzTDguODUzLDguODUzeiIvPgogIDxnPgogICA8cGF0aCBk'+
			'PSJNMTkuOTE2LDIyLjYxNmwtNS44OTUtNS43NmMtMC4yMzItMC4yMjctMC4zNi0wLjUzMi0wLjM2LTAuODU2bDAsMGMwLTAuMzI0LDAuMTI4LTAuNjI5LDAuMzYtMC44NTVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bDUuODk1LTUuNzYxYzAuMzQ0LTAuMzM2LDAuODU4LTAuNDM0LDEuMzAxLTAuMjQ3bDAsMGMwLjQ0MiwwLjE4NiwwLjczMiwwLjYyMiwwLjczMiwxLjEwM2wwLDB2MTEuNTIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC40NzktMC4yOSwwLjkxNy0wLjczMiwxLjEwM2wwLDBjLTAuMTQ5LDAuMDYzLTAuMzA3LDAuMDk0LTAuNDYzLDAuMDk0bDAsME'+
			'MyMC40NDcsMjIuOTU3LDIwLjE0NSwyMi44MzksMTkuOTE2LDIyLjYxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0wxOS45MTYsMjIuNjE2eiBNMTYuNTY5LDE2bDIuOTg4LDIuOTE5di01LjgzOEwxNi41NjksMTZMMTYuNTY5LDE2eiIvPgogICA8cGF0aCBkPSJNMTQuMDExLDIyLjYxNmwtNS44OTYtNS43NjFjLTAuMjM0LTAuMjI5LTAuMzYzLTAuNTQtMC4zNi0wLjg2OGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4wMDQtMC4zMjksMC4xMzktMC42MzcsMC4zNzktMC44NjFsMCwwbDYuMTYxLTUuNzYxYzAuNDgyLTAuNDUyLDEuMjQtMC40MjYsMS42OTEsMC4wNTds'+
			'MCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNDUxLDAuNDgyLDAuNDI2LDEuMjM5LTAuMDU2LDEuNjlsMCwwbC01LjI0OCw0LjkwN2w1LDQuODg2djAuMDAxYzAuNDcyLDAuNDYxLDAuNDgxLDEuMjE5LDAuMDIsMS42OTFsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjIzNSwwLjIzOS0wLjU0NSwwLjM1OS0wLjg1NiwwLjM1OWwwLDBDMTQuNTQ2LDIyLjk1NywxNC4yNDQsMjIuODQ0LDE0LjAxMSwyMi42MTZMMTQuMDExLDIyLjYxNnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_prev__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_prev__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzMnB4IiBpZD0iTGF5ZXJfMSIgeD0iMH'+
			'B4IiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA1LDAsMTIuNSw1LjU5NSwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBD'+
			'OS4wOTYsMjguNDk4LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTUtMS4xMjksNy4xNDgtMi45NmwwLDBjMS44My0xLjgzMywyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS4xMy01LjMxNC0yLjk2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3'+
			'g5OyYjeDk7JiN4OTtDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1M0w4Ljg1Myw4Ljg1M3oiLz4KICA8Zz4KICAgPHBhdGggZD0iTTE5LjkxNiwyMi42MTZsLTUuODk1LTUuNzZjLTAuMjMyLTAuMjI3LTAuMzYtMC41MzItMC4zNi0wLjg1NmwwLDBjMC0wLjMyNCwwLjEyOC0wLjYyOSwwLjM2LTAuODU1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2w1Ljg5NS01Ljc2MWMwLjM0NC0wLjMzNiwwLjg1OC0wLjQzNCwxLjMwMS0wLjI0N2wwLDBjMC40NDIsMC4xODYsMC43MzIsMC42MjIsMC43MzIs'+
			'MS4xMDNsMCwwdjExLjUyMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNDc5LTAuMjksMC45MTctMC43MzIsMS4xMDNsMCwwYy0wLjE0OSwwLjA2My0wLjMwNywwLjA5NC0wLjQ2MywwLjA5NGwwLDBDMjAuNDQ3LDIyLjk1NywyMC4xNDUsMjIuODM5LDE5LjkxNiwyMi42MTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtMMTkuOTE2LDIyLjYxNnogTTE2LjU2OSwxNmwyLjk4OCwyLjkxOXYtNS44MzhMMTYuNTY5LDE2TDE2LjU2OSwxNnoiLz4KICAgPHBhdGggZD0iTTE0LjAxMSwyMi42MTZsLTUuODk2LTUuNzYxYy0wLjIzNC0wLjIyOS0wLjM2My0wLjU0LTAuMzYtMC44Nj'+
			'hsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMDA0LTAuMzI5LDAuMTM5LTAuNjM3LDAuMzc5LTAuODYxbDAsMGw2LjE2MS01Ljc2MWMwLjQ4Mi0wLjQ1MiwxLjI0LTAuNDI2LDEuNjkxLDAuMDU3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQ1MSwwLjQ4MiwwLjQyNiwxLjIzOS0wLjA1NiwxLjY5bDAsMGwtNS4yNDgsNC45MDdsNSw0Ljg4NnYwLjAwMWMwLjQ3MiwwLjQ2MSwwLjQ4MSwxLjIxOSwwLjAyLDEuNjkxbDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4yMzUsMC4yMzktMC41NDUsMC4zNTktMC44NTYsMC4zNTlsMCwwQzE0LjU0'+
			'NiwyMi45NTcsMTQuMjQ0LDIyLjg0NCwxNC4wMTEsMjIuNjE2TDE0LjAxMSwyMi42MTZ6Ii8+CiAgPC9nPgogPC9nPgogPGcgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA1LDAsMTIuNSw1LjU5NSwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOT'+
			'YsMjguNDk4LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTUtMS4xMjksNy4xNDgtMi45NmwwLDBjMS44My0xLjgzMywyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS4xMy01LjMxNC0yLjk2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7JiN4OTtDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1M0w4Ljg1Myw4Ljg1M3oiLz4KICA8Zz4KICAgPHBhdGggZD0iTTE5LjkxNiwyMi42MTZsLTUuODk1LTUuNzZjLTAuMjMyLTAuMjI3LTAuMzYtMC41MzItMC4zNi0wLjg1NmwwLDBjMC0wLjMyNCwwLjEyOC0wLjYyOSwwLjM2LTAuODU1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2w1Ljg5NS01Ljc2MWMwLjM0NC0wLjMzNiwwLjg1OC0wLjQzNCwxLjMwMS0wLjI0N2wwLDBjMC40NDIsMC4xODYsMC43MzIsMC42MjIsMC43MzIsMS4xMD'+
			'NsMCwwdjExLjUyMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNDc5LTAuMjksMC45MTctMC43MzIsMS4xMDNsMCwwYy0wLjE0OSwwLjA2My0wLjMwNywwLjA5NC0wLjQ2MywwLjA5NGwwLDBDMjAuNDQ3LDIyLjk1NywyMC4xNDUsMjIuODM5LDE5LjkxNiwyMi42MTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtMMTkuOTE2LDIyLjYxNnogTTE2LjU2OSwxNmwyLjk4OCwyLjkxOXYtNS44MzhMMTYuNTY5LDE2TDE2LjU2OSwxNnoiLz4KICAgPHBhdGggZD0iTTE0LjAxMSwyMi42MTZsLTUuODk2LTUuNzYxYy0wLjIzNC0wLjIyOS0wLjM2My0wLjU0LTAuMzYtMC44NjhsMCww'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMDA0LTAuMzI5LDAuMTM5LTAuNjM3LDAuMzc5LTAuODYxbDAsMGw2LjE2MS01Ljc2MWMwLjQ4Mi0wLjQ1MiwxLjI0LTAuNDI2LDEuNjkxLDAuMDU3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQ1MSwwLjQ4MiwwLjQyNiwxLjIzOS0wLjA1NiwxLjY5bDAsMGwtNS4yNDgsNC45MDdsNSw0Ljg4NnYwLjAwMWMwLjQ3MiwwLjQ2MSwwLjQ4MSwxLjIxOSwwLjAyLDEuNjkxbDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4yMzUsMC4yMzktMC41NDUsMC4zNTktMC44NTYsMC4zNTlsMCwwQzE0LjU0NiwyMi'+
			'45NTcsMTQuMjQ0LDIyLjg0NCwxNC4wMTEsMjIuNjE2TDE0LjAxMSwyMi42MTZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._pano_prev__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Pano Prev";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano_prev.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pano_prev.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._pano_prev.onmouseover=function (e) {
			me._pano_prev__img.style.visibility='hidden';
			me._pano_prev__imgo.style.visibility='inherit';
			me.elementMouseOver['pano_prev']=true;
			me._tt_pano_prev.logicBlock_visible();
		}
		me._pano_prev.onmouseout=function (e) {
			me._pano_prev__img.style.visibility='inherit';
			me._pano_prev__imgo.style.visibility='hidden';
			me.elementMouseOver['pano_prev']=false;
			me._tt_pano_prev.logicBlock_visible();
		}
		me._pano_prev.ontouchend=function (e) {
			me.elementMouseOver['pano_prev']=false;
			me._tt_pano_prev.logicBlock_visible();
		}
		me._pano_prev.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_pano_prev=document.createElement('div');
		els=me._tt_pano_prev__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_pano_prev";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Previous Panorama";
		el.appendChild(els);
		me._tt_pano_prev.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_pano_prev.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_pano_prev.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_pano_prev.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_pano_prev.style[domTransition]='left 0s, top 0s';
				if (me._tt_pano_prev.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_pano_prev.style.top='-25px';
					me._tt_pano_prev.ggUpdatePosition(true);
				}
				else {
					me._tt_pano_prev.ggDx=0;
					me._tt_pano_prev.style.top='32px';
					me._tt_pano_prev.ggUpdatePosition(true);
				}
			}
		}
		me._tt_pano_prev.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['pano_prev'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_pano_prev.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_pano_prev.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_pano_prev.style[domTransition]='left 0s, top 0s';
				if (me._tt_pano_prev.ggCurrentLogicStateVisible == 0) {
					me._tt_pano_prev.style.visibility=(Number(me._tt_pano_prev.style.opacity)>0||!me._tt_pano_prev.style.opacity)?'inherit':'hidden';
					me._tt_pano_prev.ggVisible=true;
				}
				else {
					me._tt_pano_prev.style.visibility="hidden";
					me._tt_pano_prev.ggVisible=false;
				}
			}
		}
		me._tt_pano_prev.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._pano_prev.appendChild(me._tt_pano_prev);
		me._button_next_previous.appendChild(me._pano_prev);
		el=me._pano_next=document.createElement('div');
		els=me._pano_next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzMnB4IiBpZD0iTGF5ZXJfMSIgeD0iMH'+
			'B4IiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUwMSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIu'+
			'Nzk1LDEuMTI5LDUuMzEzLDIuOTYsNy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44My0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTMtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLD'+
			'EwLjY4Nyw1Ljg5NCwxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMC43ODQsMjIuODY0Yy0wLjQ0My0wLjE4Ny0wLjczMi0wLjYyMi0wLjczMi0xLjEwM2wwLDBWMTAuMjM5YzAtMC40OCwwLjI5LTAuOTE3LDAuNzMyLTEuMTAzbDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQ0Mi0wLjE4NiwwLjk1Ny0wLjA4OCwxLjMsMC4yNDdsMCwwbDUuODk1LDUuNzYxYzAuMjMyLDAuMjI2LDAuMzYsMC41MzEsMC4zNiwwLjg1NWwwLDBjMCwwLjMyNC0wLjEyOCwwLjYyOS0wLjM2LDAuODU2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'JiN4OTsmI3g5O2wtNS44OTUsNS43NmMtMC4yMjgsMC4yMjQtMC41MywwLjM0MS0wLjgzNywwLjM0MWwwLDBDMTEuMDksMjIuOTU3LDEwLjkzMywyMi45MjcsMTAuNzg0LDIyLjg2NEwxMC43ODQsMjIuODY0eiBNMTIuNDQ0LDE4LjkyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7TDE1LjQzMiwxNmwtMi45ODctMi45MTlWMTguOTJMMTIuNDQ0LDE4LjkyeiIvPgogICA8cGF0aCBkPSJNMTYuMDEzLDIyLjU3OGMtMC40NTEtMC40ODItMC40MjYtMS4yMzksMC4wNTctMS42OWwwLDBsNS4yNDctNC45MDdsLTUtNC44ODcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNDczLTAuND'+
			'YxLTAuNDgyLTEuMjE5LTAuMDItMS42OTFsMCwwYzAuNDYyLTAuNDczLDEuMjE5LTAuNDgyLDEuNjkyLTAuMDJsMCwwbDUuODk1LDUuNzYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMjM1LDAuMjI5LDAuMzY0LDAuNTQsMC4zNiwwLjg2OWwwLDBjLTAuMDA0LDAuMzI5LTAuMTQsMC42MzYtMC4zNzksMC44NjFsMCwwbC02LjE2MSw1Ljc2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4yMywwLjIxNi0wLjUyNCwwLjMyMy0wLjgxNywwLjMyM2wwLDBDMTYuNTY3LDIyLjk1OCwxNi4yNDksMjIuODMsMTYuMDEzLDIyLjU3OEwxNi4wMTMsMjIuNTc4eiIvPgogIDwvZz4K'+
			'IDwvZz4KIDxnIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxwYXRoIGQ9Ik0zLjUsMTZDMy41MDEsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNTAxLDIyLjkwMywzLjUsMTZMMy41LDE2eiBNNS44OTMsMTZjMCwyLjc5NSwxLjEyOSw1LjMxMywyLjk2LDcuMTQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wwLDBjMS44MzMsMS44Mz'+
			'EsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMS0yLjc5NS0xLjEzLTUuMzEzLTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODcsNS44OTQsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPgogIDxnPgogICA8cGF0aCBk'+
			'PSJNMTAuNzg0LDIyLjg2NGMtMC40NDMtMC4xODctMC43MzItMC42MjItMC43MzItMS4xMDNsMCwwVjEwLjIzOWMwLTAuNDgsMC4yOS0wLjkxNywwLjczMi0xLjEwM2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40NDItMC4xODYsMC45NTctMC4wODgsMS4zLDAuMjQ3bDAsMGw1Ljg5NSw1Ljc2MWMwLjIzMiwwLjIyNiwwLjM2LDAuNTMxLDAuMzYsMC44NTVsMCwwYzAsMC4zMjQtMC4xMjgsMC42MjktMC4zNiwwLjg1NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTUuODk1LDUuNzZjLTAuMjI4LDAuMjI0LTAuNTMsMC4zNDEtMC44MzcsMC4zNDFsMCwwQzExLj'+
			'A5LDIyLjk1NywxMC45MzMsMjIuOTI3LDEwLjc4NCwyMi44NjRMMTAuNzg0LDIyLjg2NHogTTEyLjQ0NCwxOC45MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0wxNS40MzIsMTZsLTIuOTg3LTIuOTE5VjE4LjkyTDEyLjQ0NCwxOC45MnoiLz4KICAgPHBhdGggZD0iTTE2LjAxMywyMi41NzhjLTAuNDUxLTAuNDgyLTAuNDI2LTEuMjM5LDAuMDU3LTEuNjlsMCwwbDUuMjQ3LTQuOTA3bC01LTQuODg3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ3My0wLjQ2MS0wLjQ4Mi0xLjIxOS0wLjAyLTEuNjkxbDAsMGMwLjQ2Mi0wLjQ3MywxLjIxOS0wLjQ4MiwxLjY5Mi0wLjAybDAs'+
			'MGw1Ljg5NSw1Ljc2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjIzNSwwLjIyOSwwLjM2NCwwLjU0LDAuMzYsMC44NjlsMCwwYy0wLjAwNCwwLjMyOS0wLjE0LDAuNjM2LTAuMzc5LDAuODYxbDAsMGwtNi4xNjEsNS43NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMjMsMC4yMTYtMC41MjQsMC4zMjMtMC44MTcsMC4zMjNsMCwwQzE2LjU2NywyMi45NTgsMTYuMjQ5LDIyLjgzLDE2LjAxMywyMi41NzhMMTYuMDEzLDIyLjU3OHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_next__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_next__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzMnB4IiBpZD0iTGF5ZXJfMSIgeD0iMH'+
			'B4IiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVs'+
			'MCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45Niw3LjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEtMi43OTUtMS4xMy01LjMxMy0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC'+
			'01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMTAuNjg3LDUuODk0LDEzLjIwNSw1Ljg5MywxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEwLjc4NCwyMi44NjRjLTAuNDQzLTAuMTg3LTAuNzMyLTAuNjIyLTAuNzMyLTEuMTAzbDAsMFYxMC4yMzljMC0wLjQ4LDAuMjktMC45MTcsMC43MzItMS4xMDNsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNDQyLTAuMTg2LDAuOTU3LTAuMDg4LDEuMywwLjI0N2wwLDBsNS44OTUsNS43NjFjMC4yMzIsMC4yMjYsMC4zNiwwLjUzMSwwLjM2LDAuODU1'+
			'bDAsMGMwLDAuMzI0LTAuMTI4LDAuNjI5LTAuMzYsMC44NTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC01Ljg5NSw1Ljc2Yy0wLjIyOCwwLjIyNC0wLjUzLDAuMzQxLTAuODM3LDAuMzQxbDAsMEMxMS4wOSwyMi45NTcsMTAuOTMzLDIyLjkyNywxMC43ODQsMjIuODY0TDEwLjc4NCwyMi44NjR6IE0xMi40NDQsMTguOTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtMMTUuNDMyLDE2bC0yLjk4Ny0yLjkxOVYxOC45MkwxMi40NDQsMTguOTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNi4wMTMsMjIuNTc4Yy0wLjQ1MS0wLjQ4Mi0wLjQyNi0xLjIzOSwwLjA1Ny0xLjY5bDAsMGw1Lj'+
			'I0Ny00LjkwN2wtNS00Ljg4NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40NzMtMC40NjEtMC40ODItMS4yMTktMC4wMi0xLjY5MWwwLDBjMC40NjItMC40NzMsMS4yMTktMC40ODIsMS42OTItMC4wMmwwLDBsNS44OTUsNS43NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4yMzUsMC4yMjksMC4zNjQsMC41NCwwLjM2LDAuODY5bDAsMGMtMC4wMDQsMC4zMjktMC4xNCwwLjYzNi0wLjM3OSwwLjg2MWwwLDBsLTYuMTYxLDUuNzYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjIzLDAuMjE2LTAuNTI0LDAuMzIzLTAuODE3LDAuMzIzbDAsMEMxNi41Njcs'+
			'MjIuOTU4LDE2LjI0OSwyMi44MywxNi4wMTMsMjIuNTc4TDE2LjAxMywyMi41Nzh6Ii8+CiAgPC9nPgogPC9nPgogPGcgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMD'+
			'k2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45Niw3LjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEtMi43OTUtMS4xMy01LjMxMy0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwx'+
			'LjEyOS03LjE0NywyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMTAuNjg3LDUuODk0LDEzLjIwNSw1Ljg5MywxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEwLjc4NCwyMi44NjRjLTAuNDQzLTAuMTg3LTAuNzMyLTAuNjIyLTAuNzMyLTEuMTAzbDAsMFYxMC4yMzljMC0wLjQ4LDAuMjktMC45MTcsMC43MzItMS4xMDNsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNDQyLTAuMTg2LDAuOTU3LTAuMDg4LDEuMywwLjI0N2wwLDBsNS44OTUsNS43NjFjMC4yMzIsMC4yMjYsMC4zNiwwLjUzMSwwLjM2LDAuODU1bDAsMGMwLD'+
			'AuMzI0LTAuMTI4LDAuNjI5LTAuMzYsMC44NTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC01Ljg5NSw1Ljc2Yy0wLjIyOCwwLjIyNC0wLjUzLDAuMzQxLTAuODM3LDAuMzQxbDAsMEMxMS4wOSwyMi45NTcsMTAuOTMzLDIyLjkyNywxMC43ODQsMjIuODY0TDEwLjc4NCwyMi44NjR6IE0xMi40NDQsMTguOTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtMMTUuNDMyLDE2bC0yLjk4Ny0yLjkxOVYxOC45MkwxMi40NDQsMTguOTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNi4wMTMsMjIuNTc4Yy0wLjQ1MS0wLjQ4Mi0wLjQyNi0xLjIzOSwwLjA1Ny0xLjY5bDAsMGw1LjI0Ny00Ljkw'+
			'N2wtNS00Ljg4NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40NzMtMC40NjEtMC40ODItMS4yMTktMC4wMi0xLjY5MWwwLDBjMC40NjItMC40NzMsMS4yMTktMC40ODIsMS42OTItMC4wMmwwLDBsNS44OTUsNS43NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4yMzUsMC4yMjksMC4zNjQsMC41NCwwLjM2LDAuODY5bDAsMGMtMC4wMDQsMC4zMjktMC4xNCwwLjYzNi0wLjM3OSwwLjg2MWwwLDBsLTYuMTYxLDUuNzYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjIzLDAuMjE2LTAuNTI0LDAuMzIzLTAuODE3LDAuMzIzbDAsMEMxNi41NjcsMjIuOTU4LD'+
			'E2LjI0OSwyMi44MywxNi4wMTMsMjIuNTc4TDE2LjAxMywyMi41Nzh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._pano_next__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Pano Next";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pano_next.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._pano_next.onmouseover=function (e) {
			me._pano_next__img.style.visibility='hidden';
			me._pano_next__imgo.style.visibility='inherit';
			me.elementMouseOver['pano_next']=true;
			me._tt_pano_next.logicBlock_visible();
		}
		me._pano_next.onmouseout=function (e) {
			me._pano_next__img.style.visibility='inherit';
			me._pano_next__imgo.style.visibility='hidden';
			me.elementMouseOver['pano_next']=false;
			me._tt_pano_next.logicBlock_visible();
		}
		me._pano_next.ontouchend=function (e) {
			me.elementMouseOver['pano_next']=false;
			me._tt_pano_next.logicBlock_visible();
		}
		me._pano_next.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_pano_next=document.createElement('div');
		els=me._tt_pano_next__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_pano_next";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Next Panorama";
		el.appendChild(els);
		me._tt_pano_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_pano_next.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_pano_next.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_pano_next.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_pano_next.style[domTransition]='left 0s, top 0s';
				if (me._tt_pano_next.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_pano_next.style.top='-25px';
					me._tt_pano_next.ggUpdatePosition(true);
				}
				else {
					me._tt_pano_next.ggDx=0;
					me._tt_pano_next.style.top='32px';
					me._tt_pano_next.ggUpdatePosition(true);
				}
			}
		}
		me._tt_pano_next.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['pano_next'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_pano_next.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_pano_next.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_pano_next.style[domTransition]='left 0s, top 0s';
				if (me._tt_pano_next.ggCurrentLogicStateVisible == 0) {
					me._tt_pano_next.style.visibility=(Number(me._tt_pano_next.style.opacity)>0||!me._tt_pano_next.style.opacity)?'inherit':'hidden';
					me._tt_pano_next.ggVisible=true;
				}
				else {
					me._tt_pano_next.style.visibility="hidden";
					me._tt_pano_next.ggVisible=false;
				}
			}
		}
		me._tt_pano_next.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._pano_next.appendChild(me._tt_pano_next);
		me._button_next_previous.appendChild(me._pano_next);
		me.divSkin.appendChild(me._button_next_previous);
		el=me._button_auto_rotate=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_auto_rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._button_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._stop_rotate_image=document.createElement('div');
		els=me._stop_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xOTYuMSwzNzAuNGM1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40YzcuNywwLDE0LjksMi42LDIwLjYsN2wtNi40LDYuNGMtNC0yLjgtOC45LTQuNC0xNC4yLTQuNGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNiwwLjUtMS40LDAuNC0yLTAuMmMtMC41LTAuNS0zLjEtMy41LTQt'+
			'NC40Qy0xOTYuOSwzNzItMTk2LjgsMzcxLTE5Ni4xLDM3MC40eiBNLTIxNy4yLDM5N2MtMC41LDAtMC44LTAuMi0xLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjUtMC4yLTEsMC4xLTEuM2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC42YzAsNS4yLDEuNywxMC4xLDQuNSwxNC4xbC02LjQsNi40Yy00LjQtNS43LTctMTIuOC03LjEtMjAuNWgtMC41SC0yMTcuMnogTS0yMDcuMi'+
			'w0MzIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NmMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDLTIwNi40LDQzMi4yLTIwNi44LDQzMi4zLTIwNy4yLDQzMi4zeiBNLTE1My45LDQyMy4zYy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTcuNywwLTE0LjgtMi42LTIwLjUtNi45bDYuNC02LjRjNCwyLjcsOC44LDQuMywxNCw0LjNj'+
			'NS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTUzLjEsNDIxLjgtMTUzLjIsNDIyLjgtMTUzLjksNDIzLjN6IE0tMTQ0LjUsNDE2LjljLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC0xMi44LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMC45LTAuMS0xLjNjMC4zLTAuNSwwLjYtMC43LDEuMS0wLjdoNy42aDAuN2MwLTUuMy0xLjYtMTAuMS00LjQtMTQuMmw2LjQtNi40YzQuNCw1LjcsNywxMi45LDcsMjAuNmgwLjVoNy43JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTtjMC41LDAsMC44LDAuMiwxLjEsMC43YzAuMywwLjUsMC4yLDEtMC4xLDEuM0wtMTQ0LjUsNDE2Ljl6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDIuOCwzNjEuN2MwLjQsMCwwLjgsMC4xLDEuMSwwLjRsMS43LDEuN2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTY2LDY2Yy0wLjMsMC4zLTAuNywwLjQtMS4xLDAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NkMtMTQzLjYsMzYxLjgtMTQzLjIsMzYxLjctMTQyLjgs'+
			'MzYxLjciLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTIuMywzNzcuMWMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zYzUuMywwLDEwLjEsMS42LDE0LjIsNC40bDYuNC02LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy01LjctNC40LTEyLjktNy0yMC42LTdjLTgsMC0xNS4zLDIuOC0yMS4xLDcuNGMtMC43LDAuNS0wLjgsMS42LTAuMSwyLjNDLTE5NS40LDM3My43LTE5Mi44LDM3Ni42LTE5Mi4zLDM3Ny4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzMS43LDM5Ny43Yy0wLjMtMC41LTAuNi0wLjctMS4xLTAuN2'+
			'gtNy43aC0wLjVjMC03LjctMi42LTE0LjktNy0yMC42bC02LjQsNi40YzIuOCw0LDQuNCw4LjksNC40LDE0LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aC0wLjdoLTcuNmMtMC41LDAtMC44LDAuMi0xLjEsMC43Yy0wLjMsMC41LTAuMiwxLDAuMSwxLjNsMTIuOCwxNy44YzAuMywwLjQsMC42LDAuNiwxLDAuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjZsMTIuNy0xNy44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjYtMTMxLjQsMzk4LjItMTMxLjcsMzk3Ljd6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIwOSwzOTdjMC4xLDcuNywyLjcs'+
			'MTQuOCw3LjEsMjAuNWw2LjQtNi40Yy0yLjgtNC00LjUtOC44LTQuNS0xNC4xaDAuNmg3LjZjMC41LDAsMC44LTAuMiwxLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMtMC41LDAuMi0xLTAuMS0xLjNsLTEyLjgtMTcuOGMtMC4zLTAuNC0wLjYtMC42LTEtMC42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLjUsMC42LDAuNywxLjEsMC43aDcuN0gtMjA5eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1Ny43LDQxNi42Yy0wLjYtMC42LTEuNC0wLjYtMi'+
			'0wLjJjLTQuMiwzLjMtOS41LDUuMy0xNS4zLDUuM2MtNS4yLDAtMTAtMS42LTE0LTQuM2wtNi40LDYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNS43LDQuMywxMi44LDYuOSwyMC41LDYuOWM4LDAsMTUuMy0yLjgsMjEuMS03LjRjMC43LTAuNSwwLjgtMS42LDAuMS0yLjNDLTE1NC42LDQyMC4xLTE1Ny4yLDQxNy4xLTE1Ny43LDQxNi42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._stop_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTk4LjUsMzY3LjVjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmM4LjYsMCwxNi41LDIuOSwyMi45LDcuOGwtNy4yLDcuMmMtNC41LTMuMS05LjktNC45LTE1LjctNC45Yy02LjQsMC0xMi4zLDIuMi0xNyw1LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYt'+
			'My41LTMuOC00LjQtNC45Qy0xOTkuMywzNjkuMi0xOTkuMywzNjguMS0xOTguNSwzNjcuNXogTS0yMjEuOSwzOTdjLTAuNSwwLTAuOS0wLjItMS4yLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC41LTAuMi0xLjEsMC4xLTEuNWwxNC4xLTE5LjhjMC4zLTAuNCwwLjYtMC42LDEuMi0wLjZjMC40LDAsMC43LDAuMiwxLjEsMC42bDE0LjIsMTkuOGMwLjMsMC40LDAuNCwxLDAuMSwxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMiwwLjdoLTguNWgtMC43YzAuMSw1LjgsMS45LDExLjIsNSwxNS42bC03LjEsNy4xYy00LjktNi4zLTcuOC0xNC4yLTcuOS0yMi44aC'+
			'0wLjZILTIyMS45eiBNLTIxMC43LDQzNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40bDczLjMtNzMuM2MwLjMtMC4zLDAuOC0wLjUsMS4yLTAuNXMwLjksMC4yLDEuMiwwLjVsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zQy0yMDkuOSw0MzYuMS0yMTAuMyw0MzYuMy0yMTAuNyw0MzYuM3ogTS0xNTEuNSw0MjYuM2MtNi40LDUuMS0xNC42LDguMi0yMy41LDguMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy04LjUsMC0xNi40LTIuOS0yMi44LTcuN2w3'+
			'LjItNy4yYzQuNCwzLDkuOCw0LjgsMTUuNiw0LjhjNi40LDAsMTIuMy0yLjIsMTctNS45YzAuNy0wLjUsMS42LTAuNCwyLjIsMC4yYzAuNiwwLjYsMy41LDMuOCw0LjQsNC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE1MC43LDQyNC41LTE1MC43LDQyNS43LTE1MS41LDQyNi4zeiBNLTE0MS4xLDQxOS4xYy0wLjMsMC40LTAuNiwwLjYtMS4yLDAuNmMtMC40LDAtMC43LTAuMi0xLjEtMC42bC0xNC4yLTE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMS0wLjEtMS41YzAuMy0wLjUsMC42LTAuNywxLjItMC43aDguNGgwLjdjMC01LjgtMS44LTExLjMtNC45LTE1LjdsNy4yLTcuMm'+
			'M0LjksNi40LDcuOCwxNC4zLDcuOCwyMi45aDAuNmg4LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM5LjMsMzU3LjdjMC40LDAsMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNjLTAuMywwLjMtMC44LDAuNS0xLjIsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40'+
			'bDczLjMtNzMuM0MtMTQwLjEsMzU3LjktMTM5LjcsMzU3LjctMTM5LjMsMzU3LjciLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTQuMiwzNzQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWM1LjgsMCwxMS4zLDEuOCwxNS43LDQuOWw3LjItNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNi40LTQuOS0xNC4zLTcuOC0yMi45LTcuOGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yYy0wLjgsMC42LTAuOCwxLjgtMC4yLDIuNkMtMTk3LjcsMzcxLjEtMTk0LjgsMzc0LjQtMTk0LjIsMzc0Ljl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRk'+
			'ZGRkYiIGQ9Ik0tMTI2LjksMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjItMC43aC04LjZoLTAuNmMwLTguNi0yLjktMTYuNS03LjgtMjIuOWwtNy4yLDcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMy4xLDQuNSw0LjksOS45LDQuOSwxNS43aC0wLjdoLTguNGMtMC41LDAtMC45LDAuMi0xLjIsMC43Yy0wLjMsMC41LTAuMiwxLjEsMC4xLDEuNWwxNC4yLDE5LjhjMC4zLDAuNCwwLjYsMC42LDEuMSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNSwwLDAuOS0wLjIsMS4yLTAuNmwxNC4xLTE5LjhDLTEyNi43LDM5OC44LTEyNi42LDM5OC4zLTEyNi45LDM5Ny43eiIvPgogIDwvZz4K'+
			'ICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0yMTIuNywzOTdjMC4xLDguNiwzLDE2LjUsNy45LDIyLjhsNy4xLTcuMWMtMy4xLTQuNC01LTkuOC01LTE1LjZoMC43aDguNWMwLjUsMCwwLjktMC4yLDEuMi0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMy0wLjUsMC4yLTEuMS0wLjEtMS41bC0xNC4yLTE5LjhjLTAuMy0wLjQtMC42LTAuNi0xLjEtMC42Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMsMC41LDAuNiwwLjcsMS4yLDAuN2g4LjZILTIxMi43eiIvPgogIC'+
			'A8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1NS44LDQxOC44Yy0wLjYtMC42LTEuNS0wLjctMi4yLTAuMmMtNC43LDMuNy0xMC42LDUuOS0xNyw1LjljLTUuOCwwLTExLjEtMS44LTE1LjYtNC44bC03LjIsNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjMsNC44LDE0LjIsNy43LDIyLjgsNy43YzguOSwwLDE3LTMuMSwyMy41LTguMmMwLjgtMC42LDAuOC0xLjgsMC4yLTIuNkMtMTUyLjMsNDIyLjYtMTU1LjIsNDE5LjQtMTU1LjgsNDE4Ljh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._stop_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="stop_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style[domTransition]='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image.onmouseover=function (e) {
			me._stop_rotate_image__img.style.visibility='hidden';
			me._stop_rotate_image__imgo.style.visibility='inherit';
		}
		me._stop_rotate_image.onmouseout=function (e) {
			me._stop_rotate_image__img.style.visibility='inherit';
			me._stop_rotate_image__imgo.style.visibility='hidden';
		}
		me._stop_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._stop_rotate_image);
		el=me._start_rotate_image=document.createElement('div');
		els=me._start_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE1My45LDQyMy42Yy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40aDBjLTE4LjcsMC0zNC0xNS4yLTM0LTM0aC0wLjVoLTcuN2MtMC41LDAtMC44LTAuMi0xLjEtMC43Yy0wLjMtMC41LTAuMi0xLDAuMS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZj'+
			'MC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjNjLTAuMywwLjUtMC42LDAuNy0xLjEsMC43aC03LjZoLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMTMuOCwxMS4yLDI1LDI1LDI1aDBjNS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjRDLTE1My4xLDQyMi0xNTMuMiw0MjMuMS0xNTMuOSw0MjMuNnomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE3OSwzOTdjMC0yLjIsMS44LTQsNC00YzIuMiwwLDQsMS44LDQsNGMwLDIuMi0xLjgsNC00LDRDLTE3Ny4yLDQwMS0xNzksMzk5LjItMTc5LD'+
			'M5N3ogTS0xNDQuNSw0MTYuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC40LTAuNiwwLjYtMS4xLDAuNmMtMC40LDAtMC43LTAuMi0xLTAuNmwtMTIuOC0xNy44Yy0wLjMtMC40LTAuNC0wLjktMC4xLTEuM2MwLjMtMC41LDAuNi0wLjcsMS4xLTAuN2g3LjZoMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xMy44LTExLjItMjUtMjUtMjVoMGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zYy0wLjYsMC41LTEuNCwwLjQtMi0wLjJjLTAuNS0wLjUtMy4xLTMuNS00LTQuNGMtMC42LTAuNy0wLjYtMS44LDAuMS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40aDBj'+
			'MTguNywwLDM0LDE1LjIsMzQsMzRoMC41aDcuN2MwLjUsMCwwLjgsMC4yLDEuMSwwLjdjMC4zLDAuNSwwLjIsMS0wLjEsMS4zTC0xNDQuNSw0MTYuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1My43LDQyMS4zYy0wLjgtMC45LTMuNS0zLjktNC00LjRjLTAuNi0wLjYtMS40LTAuNi0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zaDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMTMuOCwwLTI1LTExLjItMjUtMjVoMC43aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjdjMC4zLTAuNSwwLjItMS0wLjEtMS4zbC0xMi44LTE3LjhjLTAuMy'+
			'0wLjQtMC42LTAuNi0xLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjNjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43aDAuNWMwLDE4LjcsMTUuMiwzNCwzNCwzNGgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjOCwwLDE1LjMtMi44LDIxLjEtNy40Qy0xNTMuMiw0MjMuMS0xNTMuMSw0MjItMTUzLjcsNDIxLjN6Ii8+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzEuNywzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMS0wLjdoLTcuN2gtMC41YzAtMTguNy0xNS4yLTM0LTM0LTM0aDBjLTgsMC0x'+
			'NS4zLDIuOC0yMS4xLDcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC41LTAuOCwxLjYtMC4xLDIuM2MwLjgsMC45LDMuNSwzLjksNCw0LjRjMC42LDAuNiwxLjQsMC42LDIsMC4yYzQuMi0zLjMsOS41LTUuMywxNS4zLTUuM2gwYzEzLjgsMCwyNSwxMS4yLDI1LDI1aC0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjctMTMxLjQsMzk4Lj'+
			'ItMTMxLjcsMzk3Ljd6Ii8+CiAgPGNpcmNsZSByPSI0IiBmaWxsPSIjRkZGRkZGIiBjeD0iLTE3NSIgY3k9IjM5NyIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjctMTc1LDMzNC43eiBNLTE1MS41LDQyNi42Yy02LjQsNS4xLTE0LjYsOC4yLTIzLjUsOC4yaDBjLTIwLjgsMC0zNy43LTE2LjktMzcuNy0zNy43aC0wLjZoLTguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4yLTEuMi0wLjdjLTAuMy0wLjUtMC4yLTEuMSwwLjEtMS41bDE0LjEtMTkuOGMwLjMtMC40LDAu'+
			'Ni0wLjYsMS4yLTAuNmMwLjQsMCwwLjcsMC4yLDEuMSwwLjZsMTQuMiwxOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuNCwwLjQsMSwwLjEsMS41Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC40aC0wLjdjMCwxNS4zLDEyLjQsMjcuNywyNy43LDI3LjdoMGM2LjQsMCwxMi4zLTIuMiwxNy01LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjctMC41LDEuNi0wLjQsMi4yLDAuMmMwLjYsMC42LDMuNSwzLjgsNC40LDQuOUMtMTUwLjcsNDI0LjgtMTUwLjcsNDI2LTE1MS41LDQyNi42eiBNLTE3OS40LDM5N2MwLTIuNCwyLTQuNCw0LjQtNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi40LDAsNC'+
			'40LDIsNC40LDQuNGMwLDIuNC0yLDQuNC00LjQsNC40Qy0xNzcuNCw0MDEuNC0xNzkuNCwzOTkuNS0xNzkuNCwzOTd6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNmwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTE1LjMtMTIuNC0yNy43LTI3LjctMjcuN2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuNCwwLTEyLjMsMi4yLTE3LDUuOWMtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYtMy41LTMuOC00LjQtNC45'+
			'Yy0wLjctMC44LTAuNi0yLDAuMi0yLjZjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMjAuOCwwLDM3LjcsMTYuOSwzNy43LDM3LjdoMC42aDguNmMwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLjQsNDI0Yy0wLjktMS0zLjktNC4zLTQuNC00LjljLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTE1LjMsMC0yNy'+
			'43LTEyLjQtMjcuNy0yNy43aDAuN2g4LjRjMC41LDAsMC45LTAuMiwxLjItMC43czAuMi0xLjEtMC4xLTEuNWwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNi0wLjYtMS4xLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41YzAuMywwLjUsMC42LDAuNywxLjIsMC43aDguNmgwLjZjMCwyMC44LDE2LjksMzcuNywzNy43LDM3LjdoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzguOSwwLDE3LTMuMSwyMy41LTguMkMtMTUwLjcsNDI2LTE1MC43LDQyNC44LTE1MS40LDQyNHoiLz4KICA8cGF0aCBmaWxsPSIjRkZGRkZG'+
			'IiBkPSJNLTEyNi45LDM5Ny44Yy0wLjMtMC41LTAuNi0wLjctMS4yLTAuN2gtOC42aC0wLjZjMC0yMC44LTE2LjktMzcuNy0zNy43LTM3LjdoMGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42YzAuOSwxLDMuOSw0LjMsNC40LDQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWgwYzE1LjMsMCwyNy43LDEyLjQsMjcuNywyNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOG'+
			'MwLjMsMC40LDAuNiwwLjYsMS4xLDAuNmMwLjUsMCwwLjktMC4yLDEuMi0wLjZsMTQuMS0xOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEyNi43LDM5OC45LTEyNi42LDM5OC4zLTEyNi45LDM5Ny44eiIvPgogIDxjaXJjbGUgcj0iNC40IiBmaWxsPSIjRkZGRkZGIiBjeD0iLTE3NSIgY3k9IjM5NyIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="start_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image.style[domTransition]='';
				if (me._start_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image.style.visibility="hidden";
					me._start_rotate_image.ggVisible=false;
				}
				else {
					me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
					me._start_rotate_image.ggVisible=true;
				}
			}
		}
		me._start_rotate_image.onmouseover=function (e) {
			me._start_rotate_image__img.style.visibility='hidden';
			me._start_rotate_image__imgo.style.visibility='inherit';
		}
		me._start_rotate_image.onmouseout=function (e) {
			me._start_rotate_image__img.style.visibility='inherit';
			me._start_rotate_image__imgo.style.visibility='hidden';
		}
		me._start_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._start_rotate_image);
		me.divSkin.appendChild(me._button_auto_rotate);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container z-index:9999;";
		el.ggType='container';
		hs ='';
		hs+='bottom : 67px;';
		hs+='height : 206px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 360px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 402))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._information.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._information.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._information.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._information.ggCurrentLogicStateScaling == 0) {
					me._information.ggParameter.sx = 0.8;
					me._information.ggParameter.sy = 0.8;
					me._information.style[domTransform]=parameterToTransform(me._information.ggParameter);
				}
				else {
					me._information.ggParameter.sx = 1;
					me._information.ggParameter.sy = 1;
					me._information.style[domTransform]=parameterToTransform(me._information.ggParameter);
				}
			}
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('tagsOn') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else if (me._information.ggCurrentLogicStateVisible == 1) {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		el=me._information_bg=document.createElement('div');
		el.ggId="information_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(46,47,51,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 206px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 360px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._information_bg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._information.appendChild(me._information_bg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 137px;';
		hs+='left : 190px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 11pt;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 154px;';
		hs+='height: 137px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 249px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: 800; text-transform: uppercase;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 249px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._info_popup_close=document.createElement('div');
		els=me._info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._info_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._info_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._info_popup_close.onmouseover=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
		}
		me._info_popup_close.onmouseout=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
		}
		me._info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_popup_close);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 2px;';
		hs+='border-radius : 2px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 2px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : inherit;';
		hs+='width : 314px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._rectangle_2);
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="External 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 168px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 168px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = parentHeight;
			img.style.width=parentWidth + 'px';
			img.style.height=parentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._information.appendChild(me._external_1);
		me.divSkin.appendChild(me._information);
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 110px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 155px;';
		hs+='pointer-events:auto;';
		hs+='border-top-right-radius: 15px; border-bottom-right-radius: 15px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 155px;';
		hs+='height: 33px;';
		hs+='background: #3a68ff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 5px 7px 5px;';
		hs+='overflow: hidden;';
		hs+="border-top-right-radius: 15px; border-bottom-right-radius: 15px;";
		els.setAttribute('style',hs);
		els.innerHTML="Ver Mejoras";
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("mostrarmejoras") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_4.style[domTransition]='';
				if (me._text_4.ggCurrentLogicStateVisible == 0) {
					me._text_4.style.visibility=(Number(me._text_4.style.opacity)>0||!me._text_4.style.opacity)?'inherit':'hidden';
					me._text_4.ggVisible=true;
				}
				else {
					me._text_4.style.visibility="hidden";
					me._text_4.ggVisible=false;
				}
			}
		}
		me._text_4.onclick=function (e) {
			player.setVariableValue('MostrarParche', !player.getVariableValue('MostrarParche'));
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._text_4);
		el=me._circulo=document.createElement('div');
		el.ggId="circulo";
		el.ggDx=-72;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 19px;';
		hs+='border-radius : 19px;';
		hs+='background : #3a68ff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 110px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circulo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._circulo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("mostrarmejoras") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._circulo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._circulo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._circulo.style[domTransition]='';
				if (me._circulo.ggCurrentLogicStateVisible == 0) {
					me._circulo.style.visibility=(Number(me._circulo.style.opacity)>0||!me._circulo.style.opacity)?'inherit':'hidden';
					me._circulo.ggVisible=true;
				}
				else {
					me._circulo.style.visibility="hidden";
					me._circulo.ggVisible=false;
				}
			}
		}
		me._circulo.onclick=function (e) {
			player.setVariableValue('MostrarParche', !player.getVariableValue('MostrarParche'));
		}
		me._circulo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAgMTA7IiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwID'+
			'EwIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTUsMC4yQzIuNCwwLjIsMC4yLDIuNCwwLjIsNVMyLjQsOS44LDUsOS44UzkuOCw3LjYsOS44LDVTNy42LDAuMiw1LDAuMnogTTQuNCwyLjVjMC4zLDAsMC41LTAuMSwwLjgtMC4yJiN4ZDsmI3hhOyYjeDk7QzUuNywyLDUuOSwxLjUsNiwwLjljMC0wLjEsMC0wLjIsMC4xLTAuMmMwLjEsMCwwLjIsMC4xLDAuMiwwLjJjMCwwLjMsMC4xLDAuNSwwLjIsMC44YzAuMywwLjUsMC44LDAuOCwxLjQsMC44JiN4ZDsmI3hhOyYjeDk7YzAuMSww'+
			'LDAuMSwwLDAuMiwwLjFDOCwyLjYsOCwyLjgsNy44LDIuOGMtMC4yLDAtMC40LDAtMC42LDAuMWMtMC42LDAuMi0xLDAuOC0xLDEuNHYwLjFjMCwwLjEtMC4xLDAuMS0wLjIsMC4xQzYsNC41LDYsNC40LDYsNC4zJiN4ZDsmI3hhOyYjeDk7YzAtMC4xLDAtMC4zLTAuMS0wLjRDNS43LDMuMiw1LjEsMi44LDQuNCwyLjhjMCwwLTAuMSwwLTAuMSwwYzAsMC0wLjEtMC4xLDAtMC4xQzQuMywyLjUsNC4zLDIuNSw0LjQsMi41eiBNNC42LDYuMSYjeGQ7JiN4YTsmI3g5O2MtMC43LDAuNS0xLjEsMS4xLTEuMSwydjBjMCwwLjEtMC4xLDAuMi0wLjIsMC4yYy0wLjEsMC0wLjEtMC4xLTAuMS0wLjJjMC0wLj'+
			'YtMC4yLTEuMS0wLjUtMS41QzIuMiw2LjEsMS42LDUuOCwwLjgsNS43JiN4ZDsmI3hhOyYjeDk7Yy0wLjEsMC0wLjIsMC0wLjItMC4xVjUuNWMwLTAuMSwwLjEtMC4xLDAuMi0wLjFjMS4yLDAsMi4zLTEsMi40LTIuMmMwLTAuMSwwLTAuMiwwLTAuMmMwLTAuMSwwLTAuMiwwLjEtMC4yYzAuMSwwLDAuMSwwLjEsMC4yLDAuMiYjeGQ7JiN4YTsmI3g5O2MwLDAuNSwwLjEsMC45LDAuNCwxLjNjMC41LDAuNywxLjIsMS4xLDIsMS4xYzAuMSwwLDAuMiwwLjEsMC4yLDAuMWMwLDAuMS0wLjEsMC4xLTAuMiwwLjFDNS41LDUuNyw1LDUuOSw0LjYsNi4xeiBNOC42LDcuMSYjeGQ7JiN4YTsmI3g5O2MtMC43'+
			'LDAtMS4yLDAuNi0xLjIsMS4zYzAsMC4xLTAuMSwwLjItMC4yLDAuMmMtMC4xLDAtMC4xLTAuMS0wLjEtMC4yQzcuMSw4LDcsNy44LDYuOCw3LjZjLTAuMy0wLjMtMC42LTAuNS0xLTAuNSYjeGQ7JiN4YTsmI3g5O2MtMC4xLDAtMC4xLDAtMC4yLTAuMWMwLTAuMSwwLTAuMiwwLjItMC4yYzAuMywwLDAuNi0wLjEsMC44LTAuM2MwLjMtMC4zLDAuNS0wLjYsMC41LTFjMC0wLjEsMC0wLjEsMC4xLTAuMmMwLjEsMCwwLjIsMCwwLjIsMC4yJiN4ZDsmI3hhOyYjeDk7YzAsMC4yLDAsMC40LDAuMiwwLjZjMC4yLDAuNCwwLjYsMC43LDEuMSwwLjdjMC4xLDAsMC4yLDAsMC4yLDAuMUM4LjgsNyw4LjcsNy'+
			'4xLDguNiw3LjF6Ii8+Cjwvc3ZnPgo=';
		me._svg_5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 145px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.onclick=function (e) {
			player.setVariableValue('MostrarParche', !player.getVariableValue('MostrarParche'));
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._circulo.appendChild(me._svg_5);
		me.divSkin.appendChild(me._circulo);
		el=me._iconografa=document.createElement('div');
		el.ggId="Iconograf\xeda";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 6px;';
		hs+='border-radius : 6px;';
		hs+='background : rgba(16,16,16,0.588235);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='bottom : 23px;';
		hs+='cursor : default;';
		hs+='height : 143px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 131px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._iconografa.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._iconografa.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_60=document.createElement('div');
		els=me._text_60__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggDx=20;
		el.ggDy=-52;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Disponible";
		el.appendChild(els);
		me._text_60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_60.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._iconografa.appendChild(me._text_60);
		el=me._text_6=document.createElement('div');
		els=me._text_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggDx=19;
		el.ggDy=-27;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Vendido";
		el.appendChild(els);
		me._text_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._iconografa.appendChild(me._text_6);
		el=me._reservado1=document.createElement('div');
		els=me._reservado1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Reservado";
		el.ggDx=20;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Reservado";
		el.appendChild(els);
		me._reservado1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._reservado1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._iconografa.appendChild(me._reservado1);
		el=me._rectangle_62=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggDx=-50;
		el.ggDy=-52;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_62.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._iconografa.appendChild(me._rectangle_62);
		el=me._rectangle_61=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggDx=-50;
		el.ggDy=-27;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #aa0000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_61.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._iconografa.appendChild(me._rectangle_61);
		el=me._rectangle_60=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggDx=-50;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #aaff00;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_60.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._iconografa.appendChild(me._rectangle_60);
		el=me._reservado0=document.createElement('div');
		els=me._reservado0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Reservado";
		el.ggDx=20;
		el.ggDy=25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="En promoci\xf3n";
		el.appendChild(els);
		me._reservado0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._reservado0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._iconografa.appendChild(me._reservado0);
		el=me._rectangle_6=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggDx=-50;
		el.ggDy=25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._iconografa.appendChild(me._rectangle_6);
		el=me._reservado=document.createElement('div');
		els=me._reservado__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Reservado";
		el.ggDx=20;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Bosque nativo";
		el.appendChild(els);
		me._reservado.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._reservado.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._iconografa.appendChild(me._reservado);
		me.divSkin.appendChild(me._iconografa);
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_7__img.setAttribute('src',basePath + 'images/svg_7.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 96px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_7.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_7);
		el=me._svg_18=document.createElement('div');
		els=me._svg_18__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_18__img.setAttribute('src',basePath + 'images/svg_18.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 18";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 462px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_18.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_18.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._svg_18);
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_10__img.setAttribute('src',basePath + 'images/svg_10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 10";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_10.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_10.onclick=function (e) {
			player.openUrl("https:\/\/api.whatsapp.com\/send\/?phone=56984305751&text&type=phone_number&app_absent=0","");
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._svg_10);
		el=me._card=document.createElement('div');
		els=me._card__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMwMCAxODAiPgogPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI5LjguMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS4xIEJ1aWxkIDMpICAtLT4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLnN0MCB7CiAgICAgICAgb3BhY2l0eTogLjk7CiAgICAgIH0KCiAgICAgIC5zdDEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgIH0KCiAgICAgIC5zdD'+
			'IgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjZmZmOwogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMzguMywwSDE0LjRDNi41LDAsMCw2LjUsMCwxNC40djE1MS4yYzAsOCw2LjUsMTQuNCwxNC40LDE0LjRoMjcxLjJjOCwwLDE0LjQtNi41LDE0LjQtMTQuNFY2MS43YzAtOC02LjUtMTQuNC0xNC40LTE0LjRoMGMtMTguMiwwLTMyLjktMTQuNy0zMi45LTMyLjloMGMwLTgtNi41LTE0LjQtMTQuNC0xNC40WiIvPgogPGc+CiAgPHJlY3QgeT0iMTUuMiIgcnk9IjkuMyIg'+
			'd2lkdGg9IjU4LjMiIGNsYXNzPSJzdDIiIHg9IjE4LjciIGhlaWdodD0iMTkuMiIgcng9IjkuMyIvPgogIDxnPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjkuNywyMC4xdjcuMmg1Ljd2MS44aC03Ljd2LTloMi4xLS4xWiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDAuOSwyOS40Yy0yLjksMC00LjgtMS40LTQuOC0zLjlzMi0zLjgsNC44LTMuOCw0LjksMS4yLDQuOSwzLjgtMS45LDMuOS00LjksMy45Wk00MC45LDIzLjJjLTEuOCwwLTMsLjctMywyLjNzMS4yLDIuNCwzLDIuNCwzLS44LDMtMi40LTEuMi0yLjMtMy0yLjNaIi8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00OS45LD'+
			'IyaDQuNHYxLjZoLTQuNHYyLjhjMCwxLC40LDEuNCwxLjksMS40czEuOC0uMiwyLjQtLjRjMCwuNi4yLDEuMi4zLDEuNy0uOS4yLTEuOC4zLTIuOS4zLTIuNywwLTMuNS0xLjItMy41LTIuN3YtMy4xaC0xLjJ2LTEuNWgxLjJ2LTEuNWgxLjl2MS41aC0uMVoiLz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTU3LjMsMjZjMCwxLjQsMS4xLDIsMywyczIuNS0uNiwyLjUtMS4zaDEuOGMwLDEuNi0uOCwyLjctNC4zLDIuN3MtNC44LTEuMi00LjgtMy45LDEuOC0zLjgsNC44LTMuOCw0LjMsMS4yLDQuMywzLjEsMCwuOCwwLDEuMmgtNy4zWk01Ny4zLDI1aDUuNHYtLjNjMC0xLjEtLjctMS42LTIuNS0x'+
			'LjZzLTIuOC41LTIuOSwyaDBaIi8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02OC4yLDIzYzAsLjgtLjQsMS4yLTEuMiwxLjJzLTEuMi0uNC0xLjItMS4yLjQtMS4yLDEuMi0xLjIsMS4yLjQsMS4yLDEuMlpNNjguMiwyOGMwLC44LS40LDEuMi0xLjIsMS4ycy0xLjItLjQtMS4yLTEuMi40LTEuMiwxLjItMS4yLDEuMi40LDEuMiwxLjJaIi8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHJlY3QgeT0iNjYuNCIgcnk9IjkuNiIgd2lkdGg9IjIxMi45IiBjbGFzcz0ic3QyIiB4PSIxOC43IiBoZWlnaHQ9IjE5LjIiIHJ4PSI5LjYiLz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2LjQsNz'+
			'kuN3YtNi44aDEuNnY2LjhoLTEuNloiLz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTM3LjcsNzIuOXY2LjhoLTEuNmMtLjUtLjctMi40LTIuNi0zLjktNC4xLS4zLS40LS43LS43LS45LTEuMXY1LjJoLTEuNXYtNi44aDEuOWMuNC41LDIuNSwyLjcsMy44LDQsLjMuMy42LjYuOCwxaDB2LTVoMS41LDBaIi8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00Ni41LDcyLjl2MS4zaC01LjN2Mi4xaDUuMnYxLjJoLTUuMnYyLjJoLTEuNnYtNi44aDYuOSwwWiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTEuOSw3OS45Yy0yLjgsMC00LjQtMS4zLTQuNC0zLjZzMS42LTMuNSw0LjQtMy41LDQu'+
			'NCwxLjIsNC40LDMuNS0xLjUsMy42LTQuNCwzLjZaTTU0LjcsNzYuM2MwLTEuNS0uOS0yLjItMi44LTIuMnMtMi44LjctMi44LDIuMi45LDIuMywyLjgsMi4zLDIuOC0uOCwyLjgtMi4zWiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjMuMyw3Ni45YzEuMSwwLDEuNi40LDEuOSwxLjQuMi42LjQsMS4xLjUsMS40aC0xLjRxLS4zLDAtLjUtLjdjLS40LTEuMy0uNi0xLjYtMS44LTEuNmgtMi42djIuM2gtMS42di02LjhoNC42YzEuOSwwLDIuOS42LDIuOSwycy0uNiwxLjgtMiwyaDBaTTYyLDc2LjNjMS4yLDAsMS43LS40LDEuNy0xLjFzLS41LTEuMS0xLjgtMS4xaC0yLjd2Mi4xaDIuOFoiLz'+
			'4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTc1LjIsNzkuN3YtNS4zaDBjLS4yLjUtLjUsMS0uNywxLjVsLTIuMiwzLjhoLS43bC0yLjMtNGMtLjMtLjUtLjUtMS0uNy0xLjVoMHY1LjRoLTEuNXYtNi44aDIuMWMuNC43LDEuMiwyLjIsMi4xLDMuNy4yLjQuNS44LjcsMS4yaDBjLjItLjQuNS0uOS43LTEuMi45LTEuNSwxLjctMywyLjEtMy43aDEuOXY2LjhoLTEuNiwwWiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNODUuMSw3OS43YzAtLjItLjMtLjgtLjYtMS41aC00LjNjLS4zLjYtLjYsMS4yLS43LDEuNWgtMS44Yy45LTEuNiwzLTUuNywzLjQtNi44aDIuM2MuNSwxLjEsMi41LDUsMy41'+
			'LDYuOGgtMS45LDBaTTg0LDc3LjFjLS4zLS43LS43LTEuNC0xLTIuMS0uMy0uNi0uNS0xLS42LTEuMywwLC4zLS4zLjctLjYsMS4zcy0uNiwxLjMtMSwyaDMuMloiLz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTkzLjksNzUuNWMwLTEtLjgtMS41LTIuNS0xLjVzLTIuNy42LTIuNywyLjIsMSwyLjMsMi44LDIuMywyLjQtLjUsMi40LTEuNHYtLjJoMS42di4zYzAsMS42LTEuMSwyLjctNCwyLjdzLTQuNC0xLjEtNC40LTMuNSwxLjYtMy41LDQuMy0zLjUsNCwuOSw0LDIuNSwwLC4yLDAsLjRoLTEuNnYtLjJoMFoiLz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTk3LjEsNzkuN3YtNi44aDEuNn'+
			'Y2LjhoLTEuNloiLz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTEwNC41LDc5LjljLTIuOCwwLTQuNC0xLjMtNC40LTMuNnMxLjYtMy41LDQuNC0zLjUsNC40LDEuMiw0LjQsMy41LTEuNSwzLjYtNC40LDMuNlpNMTA3LjMsNzYuM2MwLTEuNS0uOS0yLjItMi44LTIuMnMtMi44LjctMi44LDIuMi45LDIuMywyLjgsMi4zLDIuOC0uOCwyLjgtMi4zWk0xMDcuMyw3MS4yYy0uNiwwLTMuNy45LTQuNCwxLjEsMC0uMiwwLS4zLS4yLS41LjYtLjIsMy43LTEuMyw0LjItMS41LDAsLjMuMi42LjMuOWgwWiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTE4LjEsNzIuOXY2LjhoLTEuNmMtLjUtLjct'+
			'Mi40LTIuNi0zLjktNC4xLS4zLS40LS43LS43LS45LTEuMXY1LjJoLTEuNXYtNi44aDEuOWMuNC41LDIuNSwyLjcsMy44LDRzLjYuNi44LDFoMHYtNWgxLjUtLjFaIi8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMjcuNSw3Mi45YzIuOCwwLDMuOSwxLDMuOSwzLjNzLTEsMy41LTMuOSwzLjVoLTMuOXYtNi44aDMuOVpNMTI5LjgsNzYuMmMwLTEuNi0uNy0yLjEtMi40LTIuMWgtMi4zdjQuMmgyLjNjMS42LDAsMi40LS42LDIuNC0yLjJoMFoiLz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTEzOS45LDcyLjl2MS4yaC01LjR2MS43aDUuM3YxLjFoLTUuM3YxLjdoNS40djEuMmgtN3YtNi44aD'+
			'daIi8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNDYuNSw3Ny42YzAsLjguNiwxLjEsMi4zLDEuMXMyLjItLjMsMi4yLS44LS40LS44LTIuNS0xYy0yLjgtLjItMy41LS44LTMuNS0yLjFzMS4xLTIsMy42LTIsMy43LjYsMy43LDIsMCwuMywwLC40aC0xLjR2LS4zYzAtLjYtLjQtMS0yLjMtMXMtMi4xLjMtMi4xLjguMy44LDIuNS45YzIuNi4yLDMuNS44LDMuNSwyLjFzLTEuMSwyLjEtMy43LDIuMS0zLjktLjYtMy45LTIsMC0uMywwLS41aDEuNnYuMmgwWiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTYyLDcyLjl2My43YzAsMi4xLTEuMSwzLjItMy45LDMuMnMtMy45LTEuMS0zLjkt'+
			'My4yLDAtMS4zLDAtMS44di0xLjloMS42djMuN2MwLDEuMy43LDEuOSwyLjQsMS45czIuMy0uNiwyLjMtMS45di0zLjdoMS42LS4xWiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTY4LjIsNzIuOWMxLjksMCwzLjEuNiwzLjEsMi41cy0xLjEsMi41LTMuMSwyLjVoLTIuN3YxLjhoLTEuN3YtNi44aDQuNFpNMTY5LjcsNzUuNGMwLS45LS41LTEuMy0xLjgtMS4zaC0yLjV2Mi41aDIuNGMxLDAsMS45LS4zLDEuOS0xLjNoMFoiLz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTE3OS41LDcyLjl2MS4yaC01LjR2MS43aDUuM3YxLjFoLTUuM3YxLjdoNS40djEuMmgtN3YtNi44aDdaIi8+CiAgID'+
			'xwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xODYuOCw3Ni45YzEuMSwwLDEuNi40LDEuOSwxLjQuMi42LjQsMS4xLjUsMS40aC0xLjRxLS4zLDAtLjUtLjdjLS40LTEuMy0uNi0xLjYtMS44LTEuNmgtMi42djIuM2gtMS42di02LjhoNC42YzEuOSwwLDIuOS42LDIuOSwycy0uNiwxLjgtMiwyaDBaTTE4NS42LDc2LjNjMS4yLDAsMS43LS40LDEuNy0xLjFzLS41LTEuMS0xLjgtMS4xaC0yLjd2Mi4xaDIuOFoiLz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTE5Ny40LDcyLjl2MS4zaC01LjN2Mi4xaDUuMnYxLjJoLTUuMnYyLjJoLTEuNnYtNi44aDYuOVoiLz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0i'+
			'TTE5OSw3OS43di02LjhoMS42djYuOGgtMS42WiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjA4LjgsNzUuNWMwLTEtLjgtMS41LTIuNS0xLjVzLTIuNy42LTIuNywyLjIsMSwyLjMsMi44LDIuMywyLjQtLjUsMi40LTEuNHYtLjJoMS42di4zYzAsMS42LTEuMSwyLjctNCwyLjdzLTQuNC0xLjEtNC40LTMuNSwxLjYtMy41LDQuMy0zLjUsNCwuOSw0LDIuNSwwLC4yLDAsLjRoLTEuNnYtLjJoMFoiLz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTIxMiw3OS43di02LjhoMS42djYuOGgtMS42WiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjIyLjUsNzIuOXYxLjJoLTUuNHYxLjdoNS'+
			'4zdjEuMWgtNS4zdjEuN2g1LjR2MS4yaC03di02LjhoN1oiLz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTIyNS40LDc1LjFjMCwuNi0uMy45LS45LjlzLS45LS4zLS45LS45LjMtLjkuOS0uOS45LjMuOS45Wk0yMjUuMyw3OC44YzAsLjYtLjMuOS0uOS45cy0uOS0uMy0uOS0uOS4zLS45LjktLjkuOS4zLjkuOVoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._card__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="card";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 200px;';
		hs+='height : 180px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._card.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._card.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_card') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._card.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._card.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._card.style[domTransition]='';
				if (me._card.ggCurrentLogicStateVisible == 0) {
					me._card.style.visibility=(Number(me._card.style.opacity)>0||!me._card.style.opacity)?'inherit':'hidden';
					me._card.ggVisible=true;
				}
				else {
					me._card.style.visibility="hidden";
					me._card.ggVisible=false;
				}
			}
		}
		me._card.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._card_body=document.createElement('div');
		els=me._card_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="card_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text cardDescription";
		el.ggType='text';
		hs ='';
		hs+='height : 67px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 94px;';
		hs+='visibility : inherit;';
		hs+='width : 260px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 260px;';
		hs+='height: 67px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._card_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._card_body.ggUpdatePosition=function (useTransition) {
		}
		me._card.appendChild(me._card_body);
		el=me._card_title=document.createElement('div');
		els=me._card_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="card_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text cardTitle";
		el.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 82px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 73px;';
		hs+='height: 19px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._card_title.ggUpdateText=function() {
			var hs=player.getVariableValue('numerolote');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._card_title.ggUpdateText();
		player.addListener('timer', function() {
			me._card_title.ggUpdateText();
		});
		el.appendChild(els);
		me._card_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._card_title.ggUpdatePosition=function (useTransition) {
		}
		me._card.appendChild(me._card_title);
		el=me._card_price=document.createElement('div');
		els=me._card_price__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="card_price";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text cardPrice";
		el.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 42px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 73px;';
		hs+='height: 19px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._card_price.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._card_price.ggUpdatePosition=function (useTransition) {
		}
		me._card.appendChild(me._card_price);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -185px;';
		hs+='height : 17px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 169px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDI1LjIgMjgzLjU7IiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMC'+
			'AwIDQyNS4yIDI4My41Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojQjRCNkMzO30mI3hkOwoJLnN0MXtmaWxsOiMxQjFBMTg7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzY4LjIsMjgzLjVINTdjLTMxLjUsMC01Ny0yMS4yLTU3LTQ3LjVWNDcuNUMwLDIxLjIsMjUuNSwwLDU3LDBoMzExLjJjMzEuNSwwLDU3LDIxLjIsNTcsNDcuNXYxODguNCYjeGQ7JiN4YTsmI3g5O0M0MjUuMiwyNjIuMSwzOTkuNywyODMuNSwzNjguMiwyODMuNXoiLz4KIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMDguMSw0NS44Yy0yNC0yNC01NS45LTM3LjMtODku'+
			'OC0zNy4zYy03MCwwLTEyNyw1Ny0xMjcsMTI3YzAsMjIuNCw1LjksNDQuMiwxNi45LDYzLjRsLTE4LDY1LjhsNjcuMy0xNy43JiN4ZDsmI3hhOyYjeDk7YzE4LjUsMTAuMSwzOS40LDE1LjQsNjAuNywxNS40aDAuMWM2OS45LDAsMTI4LjEtNTcsMTI4LjEtMTI3QzM0Ni40LDEwMS43LDMzMiw2OS44LDMwOC4xLDQ1Ljh6IE0yMTguMywyNDEuMSYjeGQ7JiN4YTsmI3g5O2MtMTksMC0zNy41LTUuMS01My44LTE0LjdsLTMuOC0yLjNsLTM5LjksMTAuNWwxMC42LTM4LjlsLTIuNS00Yy0xMC42LTE2LjgtMTYuMS0zNi4yLTE2LjEtNTYuMmMwLTU4LjEsNDcuNC0xMDUuNSwxMDUuNi0xMDUuNSYjeGQ7Ji'+
			'N4YTsmI3g5O2MyOC4yLDAsNTQuNywxMSw3NC41LDMxczMyLjEsNDYuNCwzMi4xLDc0LjZDMzI1LDE5My44LDI3Ni40LDI0MS4xLDIxOC4zLDI0MS4xeiBNMjc2LjIsMTYyLjFjLTMuMS0xLjYtMTguNy05LjItMjEuNi0xMC4zJiN4ZDsmI3hhOyYjeDk7Yy0yLjktMS4xLTUuMS0xLjYtNy4yLDEuNmMtMi4xLDMuMi04LjIsMTAuMy0xMCwxMi41Yy0xLjksMi4xLTMuNywyLjQtNi44LDAuOGMtMTguNi05LjMtMzAuOS0xNi43LTQzLjItMzcuNyYjeGQ7JiN4YTsmI3g5O2MtMy4zLTUuNiwzLjMtNS4yLDkuMy0xNy4zYzEuMS0yLjEsMC41LTMuOS0wLjMtNS42Yy0wLjgtMS42LTcuMi0xNy4yLTkuOC0y'+
			'My42Yy0yLjYtNi4yLTUuMi01LjMtNy4yLTUuNGMtMS45LTAuMS0zLjktMC4xLTYtMC4xJiN4ZDsmI3hhOyYjeDk7Yy0yLjEsMC01LjYsMC44LTguNCwzLjljLTIuOSwzLjItMTEuMSwxMC44LTExLjEsMjYuNHMxMS40LDMwLjcsMTMsMzIuOGMxLjYsMi4xLDIyLjQsMzQuMiw1NC4yLDQ3LjljMjAuMSw4LjcsMjgsOS40LDM4LjEsOCYjeGQ7JiN4YTsmI3g5O2M2LjEtMC45LDE4LjctNy42LDIxLjQtMTUuMWMyLjctNy41LDIuNy0xMy44LDEuOS0xNS4xQzI4MS41LDE2NC40LDI3OS4zLDE2My42LDI3Ni4yLDE2Mi4xeiIvPgo8L3N2Zz4K';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=-38;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['svg_1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_1.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._svg_1.ggCurrentLogicStateScaling == 0) {
					me._svg_1.ggParameter.sx = 1.1;
					me._svg_1.ggParameter.sy = 1.1;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
				else {
					me._svg_1.ggParameter.sx = 1;
					me._svg_1.ggParameter.sy = 1;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
			}
		}
		me._svg_1.onclick=function (e) {
			player.openUrl("https:\/\/wa.me\/","_blank");
		}
		me._svg_1.onmouseover=function (e) {
			me.elementMouseOver['svg_1']=true;
			me._svg_1.logicBlock_scaling();
		}
		me._svg_1.onmouseout=function (e) {
			me.elementMouseOver['svg_1']=false;
			me._svg_1.logicBlock_scaling();
		}
		me._svg_1.ontouchend=function (e) {
			me.elementMouseOver['svg_1']=false;
			me._svg_1.logicBlock_scaling();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_2.appendChild(me._svg_1);
		el=me._buttongdownload=document.createElement('div');
		els=me._buttongdownload__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="buttongdownload";
		el.ggDx=32;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: 700; margin-bottom:2px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 75px;';
		hs+='height: 18px;';
		hs+='background: #b4b6c3;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 2px;';
		hs+=cssPrefix + 'border-radius: 2px;';
		hs+='color: #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: 800;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Cotizar";
		el.appendChild(els);
		me._buttongdownload.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._buttongdownload.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['buttongdownload'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._buttongdownload.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._buttongdownload.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._buttongdownload.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._buttongdownload.ggCurrentLogicStateScaling == 0) {
					me._buttongdownload.ggParameter.sx = 1.1;
					me._buttongdownload.ggParameter.sy = 1.1;
					me._buttongdownload.style[domTransform]=parameterToTransform(me._buttongdownload.ggParameter);
				}
				else {
					me._buttongdownload.ggParameter.sx = 1;
					me._buttongdownload.ggParameter.sy = 1;
					me._buttongdownload.style[domTransform]=parameterToTransform(me._buttongdownload.ggParameter);
				}
			}
		}
		me._buttongdownload.onclick=function (e) {
			player.openUrl("https:\/\/","_blank");
		}
		me._buttongdownload.onmouseover=function (e) {
			me.elementMouseOver['buttongdownload']=true;
			me._buttongdownload.logicBlock_scaling();
		}
		me._buttongdownload.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._buttongdownload__text)
					return;
				}
			}
			me.elementMouseOver['buttongdownload']=false;
			me._buttongdownload.logicBlock_scaling();
		}
		me._buttongdownload.ontouchend=function (e) {
			me.elementMouseOver['buttongdownload']=false;
			me._buttongdownload.logicBlock_scaling();
		}
		me._buttongdownload.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_2.appendChild(me._buttongdownload);
		me._card.appendChild(me._container_2);
		el=me._svg_13=document.createElement('div');
		els=me._svg_13__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQyLjYgNDIuNiI+CiA8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMjkuOC4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogMi4xLjEgQnVpbGQgMikgIC0tPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuc3QwIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPHJlY3QgeT0iMi4xIiByeT0iMjAiIHdpZHRoPS'+
			'I0MCIgY2xhc3M9InN0MCIgeD0iMS4zIiBoZWlnaHQ9IjQwIiByeD0iMjAiLz4KIDxwYXRoIGQ9Ik0yOS44LDEyLjdoMHMtMTcuMSwwLTE3LjEsMHYxaDEyLjFjMS4zLDAsMS45LDEuNiwxLDIuNWwtMTMsMTMsLjcuNywxMi45LTEyLjljLjktLjksMi41LS4zLDIuNSwxdjExLjhoMVYxMi43aDBaIi8+Cjwvc3ZnPgo=';
		me._svg_13__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_13.onclick=function (e) {
			player.setVariableValue('vis_card', false);
		}
		me._svg_13.ggUpdatePosition=function (useTransition) {
		}
		me._card.appendChild(me._svg_13);
		me.divSkin.appendChild(me._card);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._thumbnail_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._thumbnail_menu.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_nodisponible_mouseover = function(){
		if(hotspotTemplates['ht_noDisponible']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_noDisponible'].length; i++) {
				if (hotspotTemplates['ht_noDisponible'][i]._text_1_1 && hotspotTemplates['ht_noDisponible'][i]._text_1_1.logicBlock_visible) {
					hotspotTemplates['ht_noDisponible'][i]._text_1_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_reservado_mouseover = function(){
		if(hotspotTemplates['ht_reservado']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_reservado'].length; i++) {
				if (hotspotTemplates['ht_reservado'][i]._hotspotidelement && hotspotTemplates['ht_reservado'][i]._hotspotidelement.logicBlock_scaling) {
					hotspotTemplates['ht_reservado'][i]._hotspotidelement.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_reservado_mouseover = function(){
		if(hotspotTemplates['ht_reservado']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_reservado'].length; i++) {
				if (hotspotTemplates['ht_reservado'][i]._text_13 && hotspotTemplates['ht_reservado'][i]._text_13.logicBlock_visible) {
					hotspotTemplates['ht_reservado'][i]._text_13.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_arrow_d0_positionchanged = function(){
		if(hotspotTemplates['ht_arrow_d']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_arrow_d'].length; i++) {
				if (hotspotTemplates['ht_arrow_d'][i]._ht_arrow_d0.logicBlock_alpha) {
					hotspotTemplates['ht_arrow_d'][i]._ht_arrow_d0.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tag_geoinfo_changenode = function(){
		if(hotspotTemplates['ht_tag_geoinfo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geoinfo'].length; i++) {
				if (hotspotTemplates['ht_tag_geoinfo'][i]._ht_tag_geoinfo.logicBlock_visible) {
					hotspotTemplates['ht_tag_geoinfo'][i]._ht_tag_geoinfo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tag_geoinfo_mouseover = function(){
		if(hotspotTemplates['ht_tag_geoinfo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geoinfo'].length; i++) {
				if (hotspotTemplates['ht_tag_geoinfo'][i]._text_20 && hotspotTemplates['ht_tag_geoinfo'][i]._text_20.logicBlock_alpha) {
					hotspotTemplates['ht_tag_geoinfo'][i]._text_20.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tag_geoinfo_varchanged_tagsOn = function(){
		if(hotspotTemplates['ht_tag_geoinfo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geoinfo'].length; i++) {
				if (hotspotTemplates['ht_tag_geoinfo'][i]._ht_tag_geoinfo.logicBlock_visible) {
					hotspotTemplates['ht_tag_geoinfo'][i]._ht_tag_geoinfo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tag_geo_changenode = function(){
		if(hotspotTemplates['ht_tag_geo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geo'].length; i++) {
				if (hotspotTemplates['ht_tag_geo'][i]._ht_tag_geo.logicBlock_visible) {
					hotspotTemplates['ht_tag_geo'][i]._ht_tag_geo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tag_geo_varchanged_tagsOn = function(){
		if(hotspotTemplates['ht_tag_geo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geo'].length; i++) {
				if (hotspotTemplates['ht_tag_geo'][i]._ht_tag_geo.logicBlock_visible) {
					hotspotTemplates['ht_tag_geo'][i]._ht_tag_geo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_promocion_mouseover = function(){
		if(hotspotTemplates['ht_promocion']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_promocion'].length; i++) {
				if (hotspotTemplates['ht_promocion'][i]._circle7 && hotspotTemplates['ht_promocion'][i]._circle7.logicBlock_scaling) {
					hotspotTemplates['ht_promocion'][i]._circle7.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_promocion_mouseover = function(){
		if(hotspotTemplates['ht_promocion']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_promocion'].length; i++) {
				if (hotspotTemplates['ht_promocion'][i]._text_10 && hotspotTemplates['ht_promocion'][i]._text_10.logicBlock_visible) {
					hotspotTemplates['ht_promocion'][i]._text_10.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodo_rounded_changenode = function(){
		if(hotspotTemplates['ht_nodo_rounded']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodo_rounded'].length; i++) {
				if (hotspotTemplates['ht_nodo_rounded'][i]._node_title0 && hotspotTemplates['ht_nodo_rounded'][i]._node_title0.logicBlock_visible) {
					hotspotTemplates['ht_nodo_rounded'][i]._node_title0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodo_rounded_mouseover = function(){
		if(hotspotTemplates['ht_nodo_rounded']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodo_rounded'].length; i++) {
				if (hotspotTemplates['ht_nodo_rounded'][i]._node_image0 && hotspotTemplates['ht_nodo_rounded'][i]._node_image0.logicBlock_scaling) {
					hotspotTemplates['ht_nodo_rounded'][i]._node_image0.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_nodo_rounded'][i]._node_visited0 && hotspotTemplates['ht_nodo_rounded'][i]._node_visited0.logicBlock_scaling) {
					hotspotTemplates['ht_nodo_rounded'][i]._node_visited0.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tag_acceso_changenode = function(){
		if(hotspotTemplates['ht_tag_acceso']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_acceso'].length; i++) {
				if (hotspotTemplates['ht_tag_acceso'][i]._ht_tag_acceso.logicBlock_visible) {
					hotspotTemplates['ht_tag_acceso'][i]._ht_tag_acceso.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tag_acceso_varchanged_tagsOn = function(){
		if(hotspotTemplates['ht_tag_acceso']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_acceso'].length; i++) {
				if (hotspotTemplates['ht_tag_acceso'][i]._ht_tag_acceso.logicBlock_visible) {
					hotspotTemplates['ht_tag_acceso'][i]._ht_tag_acceso.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodo_roundedb_mouseover = function(){
		if(hotspotTemplates['ht_nodo_roundedB']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodo_roundedB'].length; i++) {
				if (hotspotTemplates['ht_nodo_roundedB'][i]._node_image && hotspotTemplates['ht_nodo_roundedB'][i]._node_image.logicBlock_scaling) {
					hotspotTemplates['ht_nodo_roundedB'][i]._node_image.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_nodo_roundedB'][i]._node_visited && hotspotTemplates['ht_nodo_roundedB'][i]._node_visited.logicBlock_scaling) {
					hotspotTemplates['ht_nodo_roundedB'][i]._node_visited.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_nodo_roundedB'][i]._node_title && hotspotTemplates['ht_nodo_roundedB'][i]._node_title.logicBlock_visible) {
					hotspotTemplates['ht_nodo_roundedB'][i]._node_title.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_disponible_mouseover = function(){
		if(hotspotTemplates['ht_disponible']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_disponible'].length; i++) {
				if (hotspotTemplates['ht_disponible'][i]._circle5 && hotspotTemplates['ht_disponible'][i]._circle5.logicBlock_scaling) {
					hotspotTemplates['ht_disponible'][i]._circle5.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_disponible_mouseover = function(){
		if(hotspotTemplates['ht_disponible']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_disponible'].length; i++) {
				if (hotspotTemplates['ht_disponible'][i]._text_1 && hotspotTemplates['ht_disponible'][i]._text_1.logicBlock_visible) {
					hotspotTemplates['ht_disponible'][i]._text_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_bosque_mouseover = function(){
		if(hotspotTemplates['ht_bosque']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_bosque'].length; i++) {
				if (hotspotTemplates['ht_bosque'][i]._text_51 && hotspotTemplates['ht_bosque'][i]._text_51.logicBlock_visible) {
					hotspotTemplates['ht_bosque'][i]._text_51.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_playa_mouseover = function(){
		if(hotspotTemplates['ht_playa']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_playa'].length; i++) {
				if (hotspotTemplates['ht_playa'][i]._text_50 && hotspotTemplates['ht_playa'][i]._text_50.logicBlock_visible) {
					hotspotTemplates['ht_playa'][i]._text_50.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_parche1_changenode = function(){
		if(hotspotTemplates['ht_parche1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_parche1'].length; i++) {
				if (hotspotTemplates['ht_parche1'][i]._external_2 && hotspotTemplates['ht_parche1'][i]._external_2.logicBlock_visible) {
					hotspotTemplates['ht_parche1'][i]._external_2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_parche1_varchanged_MostrarParche = function(){
		if(hotspotTemplates['ht_parche1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_parche1'].length; i++) {
				if (hotspotTemplates['ht_parche1'][i]._external_2 && hotspotTemplates['ht_parche1'][i]._external_2.logicBlock_visible) {
					hotspotTemplates['ht_parche1'][i]._external_2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tagb_changenode = function(){
		if(hotspotTemplates['ht_tagB']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tagB'].length; i++) {
				if (hotspotTemplates['ht_tagB'][i]._ht_tagb.logicBlock_visible) {
					hotspotTemplates['ht_tagB'][i]._ht_tagb.logicBlock_visible();
				}
				if (hotspotTemplates['ht_tagB'][i]._circletag2 && hotspotTemplates['ht_tagB'][i]._circletag2.logicBlock_alpha) {
					hotspotTemplates['ht_tagB'][i]._circletag2.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_tagB'][i]._circletag2 && hotspotTemplates['ht_tagB'][i]._circletag2.logicBlock_scaling) {
					hotspotTemplates['ht_tagB'][i]._circletag2.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tagb_varchanged_tagsOn = function(){
		if(hotspotTemplates['ht_tagB']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tagB'].length; i++) {
				if (hotspotTemplates['ht_tagB'][i]._ht_tagb.logicBlock_visible) {
					hotspotTemplates['ht_tagB'][i]._ht_tagb.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tagb_varchanged_taganimation = function(){
		if(hotspotTemplates['ht_tagB']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tagB'].length; i++) {
				if (hotspotTemplates['ht_tagB'][i]._circletag2 && hotspotTemplates['ht_tagB'][i]._circletag2.logicBlock_alpha) {
					hotspotTemplates['ht_tagB'][i]._circletag2.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_tagB'][i]._circletag2 && hotspotTemplates['ht_tagB'][i]._circletag2.logicBlock_scaling) {
					hotspotTemplates['ht_tagB'][i]._circletag2.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tagbunder_changenode = function(){
		if(hotspotTemplates['ht_tagBunder']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tagBunder'].length; i++) {
				if (hotspotTemplates['ht_tagBunder'][i]._ht_tagbunder.logicBlock_visible) {
					hotspotTemplates['ht_tagBunder'][i]._ht_tagbunder.logicBlock_visible();
				}
				if (hotspotTemplates['ht_tagBunder'][i]._circletag0 && hotspotTemplates['ht_tagBunder'][i]._circletag0.logicBlock_alpha) {
					hotspotTemplates['ht_tagBunder'][i]._circletag0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_tagBunder'][i]._circletag0 && hotspotTemplates['ht_tagBunder'][i]._circletag0.logicBlock_scaling) {
					hotspotTemplates['ht_tagBunder'][i]._circletag0.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tagbunder_varchanged_tagsOn = function(){
		if(hotspotTemplates['ht_tagBunder']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tagBunder'].length; i++) {
				if (hotspotTemplates['ht_tagBunder'][i]._ht_tagbunder.logicBlock_visible) {
					hotspotTemplates['ht_tagBunder'][i]._ht_tagbunder.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tagbunder_varchanged_taganimation = function(){
		if(hotspotTemplates['ht_tagBunder']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tagBunder'].length; i++) {
				if (hotspotTemplates['ht_tagBunder'][i]._circletag0 && hotspotTemplates['ht_tagBunder'][i]._circletag0.logicBlock_alpha) {
					hotspotTemplates['ht_tagBunder'][i]._circletag0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_tagBunder'][i]._circletag0 && hotspotTemplates['ht_tagBunder'][i]._circletag0.logicBlock_scaling) {
					hotspotTemplates['ht_tagBunder'][i]._circletag0.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tag_geogris_changenode = function(){
		if(hotspotTemplates['ht_tag_geogris']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geogris'].length; i++) {
				if (hotspotTemplates['ht_tag_geogris'][i]._ht_tag_geogris.logicBlock_visible) {
					hotspotTemplates['ht_tag_geogris'][i]._ht_tag_geogris.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tag_geogris_varchanged_tagsOn = function(){
		if(hotspotTemplates['ht_tag_geogris']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geogris'].length; i++) {
				if (hotspotTemplates['ht_tag_geogris'][i]._ht_tag_geogris.logicBlock_visible) {
					hotspotTemplates['ht_tag_geogris'][i]._ht_tag_geogris.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_pozodeagua_mouseover = function(){
		if(hotspotTemplates['ht_Pozodeagua']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Pozodeagua'].length; i++) {
				if (hotspotTemplates['ht_Pozodeagua'][i]._text_5 && hotspotTemplates['ht_Pozodeagua'][i]._text_5.logicBlock_visible) {
					hotspotTemplates['ht_Pozodeagua'][i]._text_5.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._compassring.ggParameter) {
			hs+=parameterToTransform(me._compassring.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(-1 * player.getPanNorth() + 0)) + 'deg) ';
		me._compassring.style[domTransform]=hs;
		var hs='';
		if (me._compassbeam.ggParameter) {
			hs+=parameterToTransform(me._compassbeam.ggParameter) + ' ';
		}
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me._compassbeam.style[domTransform]=hs;
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('ht_ani', !player.getVariableValue('ht_ani'));
			} else {
			}
		}
		me._timer_1.ggUpdateConditionTimer();
		me._timer_2.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_nodisponible(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_nodisponible=document.createElement('div');
		el.ggId="ht_noDisponible";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 143px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_nodisponible.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_nodisponible.onclick=function (e) {
			player.setVariableValue('vis_card', false);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodisponible.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodisponible.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_nodisponible']=true;
			me._text_1_1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodisponible.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_nodisponible']=false;
			me._text_1_1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodisponible.ontouchend=function (e) {
			me.elementMouseOver['ht_nodisponible']=false;
			me._text_1_1.logicBlock_visible();
		}
		me._ht_nodisponible.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_31=document.createElement('div');
		els=me._text_31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 23px;';
		hs+='height: 23px;';
		hs+='background: #aa0000;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		hs+="border-radius:50%; line-height:20px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_31.onclick=function (e) {
			player.setVariableValue('var_compass', false);
		}
		me._text_31.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_nodisponible.appendChild(me._text_31);
		el=me._text_1_1=document.createElement('div');
		els=me._text_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 99;';
		hs+='bottom : -32px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 79px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Vendido";
		el.appendChild(els);
		me._text_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_nodisponible'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_1.style[domTransition]='';
				if (me._text_1_1.ggCurrentLogicStateVisible == 0) {
					me._text_1_1.style.visibility=(Number(me._text_1_1.style.opacity)>0||!me._text_1_1.style.opacity)?'inherit':'hidden';
					me._text_1_1.ggVisible=true;
				}
				else {
					me._text_1_1.style.visibility="hidden";
					me._text_1_1.ggVisible=false;
				}
			}
		}
		me._text_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((77-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_nodisponible.appendChild(me._text_1_1);
		me.__div = me._ht_nodisponible;
	};
	function SkinHotspotClass_ht_reservado(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_reservado=document.createElement('div');
		el.ggId="ht_reservado";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 361px;';
		hs+='position : absolute;';
		hs+='top : 146px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_reservado.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_reservado.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_reservado.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_reservado.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_reservado']=true;
			me._text_13.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_reservado.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_reservado']=false;
			me._text_13.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_reservado.ontouchend=function (e) {
			me.elementMouseOver['ht_reservado']=false;
			me._text_13.logicBlock_visible();
		}
		me._ht_reservado.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspotidelement=document.createElement('div');
		els=me._hotspotidelement__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hotspotIdElement";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : -8px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 23px;';
		hs+='height: 23px;';
		hs+='background: #021379;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		hs+="border-radius:50%; line-height:20px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hotspotidelement.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspotidelement.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hotspotidelement'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hotspotidelement.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hotspotidelement.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hotspotidelement.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._hotspotidelement.ggCurrentLogicStateScaling == 0) {
					me._hotspotidelement.ggParameter.sx = 1.1;
					me._hotspotidelement.ggParameter.sy = 1.1;
					me._hotspotidelement.style[domTransform]=parameterToTransform(me._hotspotidelement.ggParameter);
				}
				else {
					me._hotspotidelement.ggParameter.sx = 1;
					me._hotspotidelement.ggParameter.sy = 1;
					me._hotspotidelement.style[domTransform]=parameterToTransform(me._hotspotidelement.ggParameter);
				}
			}
		}
		me._hotspotidelement.onmouseover=function (e) {
			me.elementMouseOver['hotspotidelement']=true;
			me._hotspotidelement.logicBlock_scaling();
		}
		me._hotspotidelement.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._hotspotidelement__text)
					return;
				}
			}
			me.elementMouseOver['hotspotidelement']=false;
			me._hotspotidelement.logicBlock_scaling();
		}
		me._hotspotidelement.ontouchend=function (e) {
			me.elementMouseOver['hotspotidelement']=false;
			me._hotspotidelement.logicBlock_scaling();
		}
		me._hotspotidelement.ggUpdatePosition=function (useTransition) {
		}
		me._ht_reservado.appendChild(me._hotspotidelement);
		el=me._text_13=document.createElement('div');
		els=me._text_13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : -32px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 79px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Lote "+me.hotspot.title+" - Reservada<br\/>";
		el.appendChild(els);
		me._text_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_reservado'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_13.style[domTransition]='';
				if (me._text_13.ggCurrentLogicStateVisible == 0) {
					me._text_13.style.visibility=(Number(me._text_13.style.opacity)>0||!me._text_13.style.opacity)?'inherit':'hidden';
					me._text_13.ggVisible=true;
				}
				else {
					me._text_13.style.visibility="hidden";
					me._text_13.ggVisible=false;
				}
			}
		}
		me._text_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((77-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_reservado.appendChild(me._text_13);
		me.__div = me._ht_reservado;
	};
	function SkinHotspotClass_ht_tag_georeferencia_largeright(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_largeright=document.createElement('div');
		el.ggId="ht_tag_georeferencia_largeRight";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 127px;';
		hs+='position : absolute;';
		hs+='top : 285px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_largeright.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_largeright.onclick=function (e) {
			player.setVariableValue('vis_info_popup', !player.getVariableValue('vis_info_popup'));
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			skin._external_1.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeright.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeright.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeright.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeright.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag9=document.createElement('div');
		els=me._subtag9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -100px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag9.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeright.appendChild(me._subtag9);
		el=me._titletag9=document.createElement('div');
		els=me._titletag9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -118px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag9.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeright.appendChild(me._titletag9);
		el=me._circle15=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle15.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeright.appendChild(me._circle15);
		el=me._linev9=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 102px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_largeright.appendChild(me._linev9);
		me.__div = me._ht_tag_georeferencia_largeright;
	};
	function SkinHotspotClass_ht_tag_georeferencia_largeleft(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_largeleft=document.createElement('div');
		el.ggId="ht_tag_georeferencia_largeLeft";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 262px;';
		hs+='position : absolute;';
		hs+='top : 288px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_largeleft.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_largeleft.onclick=function (e) {
			player.setVariableValue('vis_info_popup', !player.getVariableValue('vis_info_popup'));
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			skin._external_1.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeleft.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeleft.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeleft.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeleft.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag8=document.createElement('div');
		els=me._subtag8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : -100px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag8.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeleft.appendChild(me._subtag8);
		el=me._titletag8=document.createElement('div');
		els=me._titletag8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : -118px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag8.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeleft.appendChild(me._titletag8);
		el=me._circle14=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle14.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeleft.appendChild(me._circle14);
		el=me._linev8=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 102px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_largeleft.appendChild(me._linev8);
		me.__div = me._ht_tag_georeferencia_largeleft;
	};
	function SkinHotspotClass_ht_tag_georeferencia_mediumright(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_mediumright=document.createElement('div');
		el.ggId="ht_tag_georeferencia_mediumRight";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 127px;';
		hs+='position : absolute;';
		hs+='top : 285px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_mediumright.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_mediumright.onclick=function (e) {
			player.setVariableValue('vis_info_popup', !player.getVariableValue('vis_info_popup'));
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			skin._external_1.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumright.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumright.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumright.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumright.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag7=document.createElement('div');
		els=me._subtag7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -61px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag7.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumright.appendChild(me._subtag7);
		el=me._titletag7=document.createElement('div');
		els=me._titletag7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -79px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag7.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumright.appendChild(me._titletag7);
		el=me._circle13=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle13.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumright.appendChild(me._circle13);
		el=me._linev7=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 63px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_mediumright.appendChild(me._linev7);
		me.__div = me._ht_tag_georeferencia_mediumright;
	};
	function SkinHotspotClass_ht_arrow_d0(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_arrow_d0=document.createElement('div');
		el.ggId="ht_arrow_d";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 461px;';
		hs+='position : absolute;';
		hs+='top : 282px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_arrow_d0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_arrow_d0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getTilt() >= -45))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_arrow_d0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_arrow_d0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_arrow_d0.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_arrow_d0.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_arrow_d0.style.opacity == 0.0) { me._ht_arrow_d0.style.visibility="hidden"; } }, 505);
					me._ht_arrow_d0.style.opacity=0;
				}
				else {
					me._ht_arrow_d0.style.visibility=me._ht_arrow_d0.ggVisible?'inherit':'hidden';
					me._ht_arrow_d0.style.opacity=1;
				}
			}
		}
		me._ht_arrow_d0.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_arrow_d0.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_arrow_d0.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_arrow_d0.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_arrow_d0.ggUpdatePosition=function (useTransition) {
		}
		el=me._arrow0=document.createElement('div');
		els=me._arrow0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="arrow";
		el.ggDx=-11;
		el.ggDy=41;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 245px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 239px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 239px;';
		hs+='height: 245px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="    <div class=\"arrow\"><br\/>        <span><\/span><br\/>        <span><\/span><br\/>        <span><\/span><br\/>    <\/div>";
		el.appendChild(els);
		me._arrow0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._arrow0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_arrow_d0.appendChild(me._arrow0);
		el=me._text_21=document.createElement('div');
		els=me._text_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -107px;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Arrastrar";
		el.appendChild(els);
		me._text_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_21.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_arrow_d0.appendChild(me._text_21);
		me.__div = me._ht_arrow_d0;
	};
	function SkinHotspotClass_ht_tag_georeferencia_mediumleft(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_mediumleft=document.createElement('div');
		el.ggId="ht_tag_georeferencia_mediumLeft";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 127px;';
		hs+='position : absolute;';
		hs+='top : 285px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_mediumleft.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_mediumleft.onclick=function (e) {
			player.setVariableValue('vis_info_popup', !player.getVariableValue('vis_info_popup'));
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			skin._external_1.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumleft.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumleft.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumleft.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumleft.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag6=document.createElement('div');
		els=me._subtag6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : -61px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag6.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumleft.appendChild(me._subtag6);
		el=me._titletag6=document.createElement('div');
		els=me._titletag6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : -79px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag6.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumleft.appendChild(me._titletag6);
		el=me._circle12=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle12.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumleft.appendChild(me._circle12);
		el=me._linev6=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 63px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_mediumleft.appendChild(me._linev6);
		me.__div = me._ht_tag_georeferencia_mediumleft;
	};
	function SkinHotspotClass_ht_tag_georeferencia_smallleft(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_smallleft=document.createElement('div');
		el.ggId="ht_tag_georeferencia_smallLeft";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 127px;';
		hs+='position : absolute;';
		hs+='top : 285px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_smallleft.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_smallleft.onclick=function (e) {
			player.setVariableValue('vis_info_popup', !player.getVariableValue('vis_info_popup'));
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			skin._external_1.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallleft.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallleft.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallleft.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallleft.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag5=document.createElement('div');
		els=me._subtag5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : -31px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag5.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallleft.appendChild(me._subtag5);
		el=me._titletag5=document.createElement('div');
		els=me._titletag5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : -49px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag5.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallleft.appendChild(me._titletag5);
		el=me._circle11=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle11.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallleft.appendChild(me._circle11);
		el=me._linev5=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_smallleft.appendChild(me._linev5);
		me.__div = me._ht_tag_georeferencia_smallleft;
	};
	function SkinHotspotClass_ht_tag_georeferencia_smallright(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_smallright=document.createElement('div');
		el.ggId="ht_tag_georeferencia_smallRight";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 461px;';
		hs+='position : absolute;';
		hs+='top : 263px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_smallright.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_smallright.onclick=function (e) {
			player.setVariableValue('vis_info_popup', !player.getVariableValue('vis_info_popup'));
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			skin._external_1.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallright.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallright.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallright.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallright.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag4=document.createElement('div');
		els=me._subtag4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag4.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallright.appendChild(me._subtag4);
		el=me._titletag4=document.createElement('div');
		els=me._titletag4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -49px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag4.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallright.appendChild(me._titletag4);
		el=me._circle10=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle10.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallright.appendChild(me._circle10);
		el=me._linev4=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_smallright.appendChild(me._linev4);
		me.__div = me._ht_tag_georeferencia_smallright;
	};
	function SkinHotspotClass_ht_tag_geoinfo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_geoinfo=document.createElement('div');
		el.ggId="ht_tag_geoinfo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 44px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_geoinfo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_geoinfo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('tagsOn') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tag_geoinfo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tag_geoinfo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tag_geoinfo.style[domTransition]='';
				if (me._ht_tag_geoinfo.ggCurrentLogicStateVisible == 0) {
					me._ht_tag_geoinfo.style.visibility="hidden";
					me._ht_tag_geoinfo.ggVisible=false;
				}
				else {
					me._ht_tag_geoinfo.style.visibility=(Number(me._ht_tag_geoinfo.style.opacity)>0||!me._ht_tag_geoinfo.style.opacity)?'inherit':'hidden';
					me._ht_tag_geoinfo.ggVisible=true;
				}
			}
		}
		me._ht_tag_geoinfo.onclick=function (e) {
			player.setVariableValue('popup_geoInfo', true);
			skin._text_infotagsgeo.ggText=" "+me.hotspot.title+" "+me.hotspot.description;
			skin._text_infotagsgeo.ggTextDiv.innerHTML=skin._text_infotagsgeo.ggText;
			if (skin._text_infotagsgeo.ggUpdateText) {
				skin._text_infotagsgeo.ggUpdateText=function() {
					var hs=" "+me.hotspot.title+" "+me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._text_infotagsgeo.ggUpdatePosition) {
				skin._text_infotagsgeo.ggUpdatePosition();
			}
			skin._text_infotagsgeo.ggTextDiv.scrollTop = 0;
			skin._external_1.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geoinfo.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geoinfo.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_tag_geoinfo']=true;
			me._text_20.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geoinfo.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_tag_geoinfo']=false;
			me._text_20.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geoinfo.ontouchend=function (e) {
			me.elementMouseOver['ht_tag_geoinfo']=false;
			me._text_20.logicBlock_alpha();
		}
		me._ht_tag_geoinfo.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_geotag2=document.createElement('div');
		els=me._text_geotag2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_geotag";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Montserrat\", sans-serif; font-weight:800; font-size:13pt;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 25px;';
		hs+='height: 25px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(21,21,21,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 1px 1px 1px;';
		hs+='overflow: hidden;';
		hs+="border-radius:50%;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.url;
		el.appendChild(els);
		me._text_geotag2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_geotag2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tag_geoinfo.appendChild(me._text_geotag2);
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-transform: uppercase; text-shadow:2px 2px 6px black; font-size: 10pt;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_20.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_tag_geoinfo'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_20.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_20.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_20.style[domTransition]='opacity 500ms ease 0ms';
				if (me._text_20.ggCurrentLogicStateAlpha == 0) {
					me._text_20.style.visibility=me._text_20.ggVisible?'inherit':'hidden';
					me._text_20.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._text_20.style.opacity == 0.0) { me._text_20.style.visibility="hidden"; } }, 505);
					me._text_20.style.opacity=0;
				}
			}
		}
		me._text_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_tag_geoinfo.appendChild(me._text_20);
		me.__div = me._ht_tag_geoinfo;
	};
	function SkinHotspotClass_ht_tag_geo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_geo=document.createElement('div');
		el.ggId="ht_tag_geo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 95px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_geo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_geo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('tagsOn') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tag_geo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tag_geo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tag_geo.style[domTransition]='';
				if (me._ht_tag_geo.ggCurrentLogicStateVisible == 0) {
					me._ht_tag_geo.style.visibility="hidden";
					me._ht_tag_geo.ggVisible=false;
				}
				else {
					me._ht_tag_geo.style.visibility=(Number(me._ht_tag_geo.style.opacity)>0||!me._ht_tag_geo.style.opacity)?'inherit':'hidden';
					me._ht_tag_geo.ggVisible=true;
				}
			}
		}
		me._ht_tag_geo.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geo.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geo.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geo.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geo.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_geotag1=document.createElement('div');
		els=me._text_geotag1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_geotag";
		el.ggDy=-85;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		hs+='font-weight:600;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ea374c;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 11px 2px 11px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_geotag1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_geotag1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tag_geo.appendChild(me._text_geotag1);
		el=me._rectangle_large1=document.createElement('div');
		el.ggId="Rectangle_large";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ea374c;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 86px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_large1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_large1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_geo.appendChild(me._rectangle_large1);
		el=me._circle9=document.createElement('div');
		el.ggId="circle";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ea374c;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 9px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:50%;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tag_geo.appendChild(me._circle9);
		me.__div = me._ht_tag_geo;
	};
	function SkinHotspotClass_ht_tag_background(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_background=document.createElement('div');
		el.ggId="ht_tag_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 429px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_background.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_background.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_background.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_background.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_background.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._tagbkg=document.createElement('div');
		els=me._tagbkg__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tagbkg";
		el.ggDx=0;
		el.ggDy=-23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.607843);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title+" | "+me.hotspot.description;
		el.appendChild(els);
		me._tagbkg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tagbkg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_tag_background.appendChild(me._tagbkg);
		el=me._circle8=document.createElement('div');
		el.ggId="circle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 11px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tag_background.appendChild(me._circle8);
		me.__div = me._ht_tag_background;
	};
	function SkinHotspotClass_ht_promocion(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_promocion=document.createElement('div');
		el.ggId="ht_promocion";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 361px;';
		hs+='position : absolute;';
		hs+='top : 146px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_promocion.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_promocion.onclick=function (e) {
			player.setVariableValue('vis_card', true);
			player.setVariableValue('numerolote', me.hotspot.title);
			player.setVariableValue('popup_geoInfo', false);
			skin._card_body.ggText=me.hotspot.description;
			skin._card_body.ggTextDiv.innerHTML=skin._card_body.ggText;
			if (skin._card_body.ggUpdateText) {
				skin._card_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._card_body.ggUpdatePosition) {
				skin._card_body.ggUpdatePosition();
			}
			skin._card_body.ggTextDiv.scrollTop = 0;
			skin._card_price.ggText=me.hotspot.url;
			skin._card_price.ggTextDiv.innerHTML=skin._card_price.ggText;
			if (skin._card_price.ggUpdateText) {
				skin._card_price.ggUpdateText=function() {
					var hs=me.hotspot.url;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._card_price.ggUpdatePosition) {
				skin._card_price.ggUpdatePosition();
			}
			skin._card_price.ggTextDiv.scrollTop = 0;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_promocion.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_promocion.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_promocion']=true;
			me._text_10.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_promocion.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_promocion']=false;
			me._text_10.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_promocion.ontouchend=function (e) {
			me.elementMouseOver['ht_promocion']=false;
			me._text_10.logicBlock_visible();
		}
		me._ht_promocion.ggUpdatePosition=function (useTransition) {
		}
		el=me._circle7=document.createElement('div');
		els=me._circle7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="circle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 23px;';
		hs+='height: 23px;';
		hs+='background: #aaff00;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 2px 2px 2px;';
		hs+='overflow: hidden;';
		hs+="border-radius:50%; line-height:20px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._circle7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle7.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['circle7'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._circle7.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._circle7.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._circle7.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._circle7.ggCurrentLogicStateScaling == 0) {
					me._circle7.ggParameter.sx = 1.1;
					me._circle7.ggParameter.sy = 1.1;
					me._circle7.style[domTransform]=parameterToTransform(me._circle7.ggParameter);
				}
				else {
					me._circle7.ggParameter.sx = 1;
					me._circle7.ggParameter.sy = 1;
					me._circle7.style[domTransform]=parameterToTransform(me._circle7.ggParameter);
				}
			}
		}
		me._circle7.onmouseover=function (e) {
			me.elementMouseOver['circle7']=true;
			me._circle7.logicBlock_scaling();
		}
		me._circle7.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._circle7__text)
					return;
				}
			}
			me.elementMouseOver['circle7']=false;
			me._circle7.logicBlock_scaling();
		}
		me._circle7.ontouchend=function (e) {
			me.elementMouseOver['circle7']=false;
			me._circle7.logicBlock_scaling();
		}
		me._circle7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_promocion.appendChild(me._circle7);
		el=me._text_10=document.createElement('div');
		els=me._text_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : -32px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 79px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Lote "+me.hotspot.title+" - Promoci\xf3n";
		el.appendChild(els);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_promocion'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_10.style[domTransition]='';
				if (me._text_10.ggCurrentLogicStateVisible == 0) {
					me._text_10.style.visibility=(Number(me._text_10.style.opacity)>0||!me._text_10.style.opacity)?'inherit':'hidden';
					me._text_10.ggVisible=true;
				}
				else {
					me._text_10.style.visibility="hidden";
					me._text_10.ggVisible=false;
				}
			}
		}
		me._text_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((77-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_promocion.appendChild(me._text_10);
		me.__div = me._ht_promocion;
	};
	function SkinHotspotClass_ht_nodo_rounded(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_nodo_rounded=document.createElement('div');
		el.ggId="ht_nodo_rounded";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_nodo_rounded.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_nodo_rounded.onclick=function (e) {
			if (
				(
					((me._ht_nodo_rounded.ggIsActive() == false))
				)
			) {
				player.openNext(me.hotspot.url,me.hotspot.target);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodo_rounded.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodo_rounded.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_nodo_rounded']=true;
			me._node_image0.logicBlock_scaling();
			me._node_visited0.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodo_rounded.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_nodo_rounded']=false;
			me._node_image0.logicBlock_scaling();
			me._node_visited0.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodo_rounded.ontouchend=function (e) {
			me.elementMouseOver['ht_nodo_rounded']=false;
			me._node_image0.logicBlock_scaling();
			me._node_visited0.logicBlock_scaling();
		}
		me._ht_nodo_rounded.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=22;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 7px;';
		hs+='border-radius : 7px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		hs+='transform: rotate(45deg);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_nodo_rounded.appendChild(me._rectangle_4);
		el=me._node_image0=document.createElement('div');
		els=me._node_image0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_image0_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: circle(17px at 50% 50%);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_nodo_rounded'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node_image0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node_image0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node_image0.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._node_image0.ggCurrentLogicStateScaling == 0) {
					me._node_image0.ggParameter.sx = 1.15;
					me._node_image0.ggParameter.sy = 1.15;
					me._node_image0.style[domTransform]=parameterToTransform(me._node_image0.ggParameter);
				}
				else {
					me._node_image0.ggParameter.sx = 1;
					me._node_image0.ggParameter.sy = 1;
					me._node_image0.style[domTransform]=parameterToTransform(me._node_image0.ggParameter);
				}
			}
		}
		me._node_image0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_nodo_rounded.appendChild(me._node_image0);
		el=me._node_visited0=document.createElement('div');
		el.ggId="node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		hs+='border-radius:50%;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_visited0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._node_visited0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_nodo_rounded'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node_visited0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node_visited0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node_visited0.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._node_visited0.ggCurrentLogicStateScaling == 0) {
					me._node_visited0.ggParameter.sx = 1.15;
					me._node_visited0.ggParameter.sy = 1.15;
					me._node_visited0.style[domTransform]=parameterToTransform(me._node_visited0.ggParameter);
				}
				else {
					me._node_visited0.ggParameter.sx = 1;
					me._node_visited0.ggParameter.sy = 1;
					me._node_visited0.style[domTransform]=parameterToTransform(me._node_visited0.ggParameter);
				}
			}
		}
		me._node_visited0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_nodo_rounded.appendChild(me._node_visited0);
		el=me._node_title0=document.createElement('div');
		els=me._node_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 67px;';
		hs+='height: auto;';
		hs+='background: #005486;';
		hs+='background: rgba(0,84,134,0.870588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._node_title0.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title0.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_title0.ggUpdateText();
		});
		el.appendChild(els);
		me._node_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._node_title0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title0.style[domTransition]='';
				if (me._node_title0.ggCurrentLogicStateVisible == 0) {
					me._node_title0.style.visibility="hidden";
					me._node_title0.ggVisible=false;
				}
				else {
					me._node_title0.style.visibility=(Number(me._node_title0.style.opacity)>0||!me._node_title0.style.opacity)?'inherit':'hidden';
					me._node_title0.ggVisible=true;
				}
			}
		}
		me._node_title0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_nodo_rounded.appendChild(me._node_title0);
		el=me._text_7=document.createElement('div');
		els=me._text_7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 20px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="+";
		el.appendChild(els);
		me._text_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_nodo_rounded.appendChild(me._text_7);
		me.__div = me._ht_nodo_rounded;
	};
	function SkinHotspotClass_ht_tag_acceso(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_acceso=document.createElement('div');
		el.ggId="ht_tag_acceso";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 113px;';
		hs+='position : absolute;';
		hs+='top : 398px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_acceso.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_acceso.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('tagsOn') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tag_acceso.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tag_acceso.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tag_acceso.style[domTransition]='';
				if (me._ht_tag_acceso.ggCurrentLogicStateVisible == 0) {
					me._ht_tag_acceso.style.visibility="hidden";
					me._ht_tag_acceso.ggVisible=false;
				}
				else {
					me._ht_tag_acceso.style.visibility=(Number(me._ht_tag_acceso.style.opacity)>0||!me._ht_tag_acceso.style.opacity)?'inherit':'hidden';
					me._ht_tag_acceso.ggVisible=true;
				}
			}
		}
		me._ht_tag_acceso.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_acceso.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_acceso.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_acceso.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_acceso.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_geotag0=document.createElement('div');
		els=me._text_geotag0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_geotag";
		el.ggDx=0;
		el.ggDy=-47;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:none;';
		hs+='font-weight:600;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #ea374c;';
		hs+='background: rgba(234,55,76,0.980392);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 13px 4px 13px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_geotag0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_geotag0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((16-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_tag_acceso.appendChild(me._text_geotag0);
		el=me._rectangle_large0=document.createElement('div');
		el.ggId="Rectangle_large";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ea374c;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_large0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_large0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_acceso.appendChild(me._rectangle_large0);
		el=me._circle6=document.createElement('div');
		el.ggId="circle";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ea374c;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 9px;';
		hs+='pointer-events:none;';
		hs+='border-radius:50%;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tag_acceso.appendChild(me._circle6);
		me.__div = me._ht_tag_acceso;
	};
	function SkinHotspotClass_ht_nodo_roundedb(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_nodo_roundedb=document.createElement('div');
		el.ggId="ht_nodo_roundedB";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_nodo_roundedb.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_nodo_roundedb.onclick=function (e) {
			if (
				(
					((me._ht_nodo_roundedb.ggIsActive() == false))
				)
			) {
				player.openNext(me.hotspot.url,me.hotspot.target);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodo_roundedb.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodo_roundedb.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_nodo_roundedb']=true;
			me._node_image.logicBlock_scaling();
			me._node_visited.logicBlock_scaling();
			me._node_title.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodo_roundedb.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_nodo_roundedb']=false;
			me._node_image.logicBlock_scaling();
			me._node_visited.logicBlock_scaling();
			me._node_title.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodo_roundedb.ontouchend=function (e) {
			me.elementMouseOver['ht_nodo_roundedb']=false;
			me._node_image.logicBlock_scaling();
			me._node_visited.logicBlock_scaling();
			me._node_title.logicBlock_visible();
		}
		me._ht_nodo_roundedb.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_image=document.createElement('div');
		els=me._node_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: circle(18px at 50% 50%);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_nodo_roundedb'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node_image.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._node_image.ggCurrentLogicStateScaling == 0) {
					me._node_image.ggParameter.sx = 1.15;
					me._node_image.ggParameter.sy = 1.15;
					me._node_image.style[domTransform]=parameterToTransform(me._node_image.ggParameter);
				}
				else {
					me._node_image.ggParameter.sx = 1;
					me._node_image.ggParameter.sy = 1;
					me._node_image.style[domTransform]=parameterToTransform(me._node_image.ggParameter);
				}
			}
		}
		me._node_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_nodo_roundedb.appendChild(me._node_image);
		el=me._node_visited=document.createElement('div');
		el.ggId="node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		hs+='border-radius:50%;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._node_visited.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_nodo_roundedb'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node_visited.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node_visited.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node_visited.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._node_visited.ggCurrentLogicStateScaling == 0) {
					me._node_visited.ggParameter.sx = 1.15;
					me._node_visited.ggParameter.sy = 1.15;
					me._node_visited.style[domTransform]=parameterToTransform(me._node_visited.ggParameter);
				}
				else {
					me._node_visited.ggParameter.sx = 1;
					me._node_visited.ggParameter.sy = 1;
					me._node_visited.style[domTransform]=parameterToTransform(me._node_visited.ggParameter);
				}
			}
		}
		me._node_visited.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_nodo_roundedb.appendChild(me._node_visited);
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #005486;';
		hs+='background: rgba(0,84,134,0.870588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_nodo_roundedb'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style[domTransition]='';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
				else {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
			}
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((53-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_nodo_roundedb.appendChild(me._node_title);
		me.__div = me._ht_nodo_roundedb;
	};
	function SkinHotspotClass_ht_disponible(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_disponible=document.createElement('div');
		el.ggId="ht_disponible";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 361px;';
		hs+='position : absolute;';
		hs+='top : 146px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_disponible.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_disponible.onclick=function (e) {
			player.setVariableValue('vis_card', true);
			player.setVariableValue('numerolote', me.hotspot.title);
			player.setVariableValue('popup_geoInfo', false);
			skin._card_body.ggText=me.hotspot.description;
			skin._card_body.ggTextDiv.innerHTML=skin._card_body.ggText;
			if (skin._card_body.ggUpdateText) {
				skin._card_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._card_body.ggUpdatePosition) {
				skin._card_body.ggUpdatePosition();
			}
			skin._card_body.ggTextDiv.scrollTop = 0;
			skin._card_price.ggText=me.hotspot.url;
			skin._card_price.ggTextDiv.innerHTML=skin._card_price.ggText;
			if (skin._card_price.ggUpdateText) {
				skin._card_price.ggUpdateText=function() {
					var hs=me.hotspot.url;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._card_price.ggUpdatePosition) {
				skin._card_price.ggUpdatePosition();
			}
			skin._card_price.ggTextDiv.scrollTop = 0;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_disponible.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_disponible.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_disponible']=true;
			me._text_1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_disponible.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_disponible']=false;
			me._text_1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_disponible.ontouchend=function (e) {
			me.elementMouseOver['ht_disponible']=false;
			me._text_1.logicBlock_visible();
		}
		me._ht_disponible.ggUpdatePosition=function (useTransition) {
		}
		el=me._circle5=document.createElement('div');
		els=me._circle5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="circle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 23px;';
		hs+='height: 23px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 2px 2px 2px;';
		hs+='overflow: hidden;';
		hs+="border-radius:50%; line-height:20px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._circle5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['circle5'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._circle5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._circle5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._circle5.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._circle5.ggCurrentLogicStateScaling == 0) {
					me._circle5.ggParameter.sx = 1.1;
					me._circle5.ggParameter.sy = 1.1;
					me._circle5.style[domTransform]=parameterToTransform(me._circle5.ggParameter);
				}
				else {
					me._circle5.ggParameter.sx = 1;
					me._circle5.ggParameter.sy = 1;
					me._circle5.style[domTransform]=parameterToTransform(me._circle5.ggParameter);
				}
			}
		}
		me._circle5.onmouseover=function (e) {
			me.elementMouseOver['circle5']=true;
			me._circle5.logicBlock_scaling();
		}
		me._circle5.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._circle5__text)
					return;
				}
			}
			me.elementMouseOver['circle5']=false;
			me._circle5.logicBlock_scaling();
		}
		me._circle5.ontouchend=function (e) {
			me.elementMouseOver['circle5']=false;
			me._circle5.logicBlock_scaling();
		}
		me._circle5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_disponible.appendChild(me._circle5);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='bottom : -32px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 79px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Lote "+me.hotspot.title+" - Ver detalles<br\/>";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_disponible'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1.style[domTransition]='';
				if (me._text_1.ggCurrentLogicStateVisible == 0) {
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
				else {
					me._text_1.style.visibility="hidden";
					me._text_1.ggVisible=false;
				}
			}
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((77-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_disponible.appendChild(me._text_1);
		me.__div = me._ht_disponible;
	};
	function SkinHotspotClass_ht_tag_georeferencia_smallrightyellow(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_smallrightyellow=document.createElement('div');
		el.ggId="ht_tag_georeferencia_smallRightYellow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 461px;';
		hs+='position : absolute;';
		hs+='top : 263px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_smallrightyellow.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_smallrightyellow.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			skin._external_1.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallrightyellow.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallrightyellow.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallrightyellow.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallrightyellow.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag3=document.createElement('div');
		els=me._subtag3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #eaff04;';
		hs+='background: rgba(234,255,4,0.941176);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallrightyellow.appendChild(me._subtag3);
		el=me._titletag3=document.createElement('div');
		els=me._titletag3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -49px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #eaff04;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallrightyellow.appendChild(me._titletag3);
		el=me._circle4=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle4.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallrightyellow.appendChild(me._circle4);
		el=me._linev3=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_smallrightyellow.appendChild(me._linev3);
		me.__div = me._ht_tag_georeferencia_smallrightyellow;
	};
	function SkinHotspotClass_ht_tag_georeferencia_mediumright_blue(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_mediumright_blue=document.createElement('div');
		el.ggId="ht_tag_georeferencia_mediumRight_Blue";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 127px;';
		hs+='position : absolute;';
		hs+='top : 285px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_mediumright_blue.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_mediumright_blue.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			skin._external_1.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumright_blue.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumright_blue.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumright_blue.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumright_blue.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag2=document.createElement('div');
		els=me._subtag2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -61px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #3a85e1;';
		hs+='background: rgba(58,133,225,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumright_blue.appendChild(me._subtag2);
		el=me._titletag2=document.createElement('div');
		els=me._titletag2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -79px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #3a85e1;';
		hs+='background: rgba(58,133,225,0.882353);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumright_blue.appendChild(me._titletag2);
		el=me._circle3=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumright_blue.appendChild(me._circle3);
		el=me._linev2=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 63px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_mediumright_blue.appendChild(me._linev2);
		me.__div = me._ht_tag_georeferencia_mediumright_blue;
	};
	function SkinHotspotClass_ht_bosque(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_bosque=document.createElement('div');
		el.ggId="ht_bosque";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 198px;';
		hs+='position : absolute;';
		hs+='top : 155px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_bosque.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_bosque.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bosque.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bosque.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_bosque']=true;
			me._text_51.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bosque.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_bosque']=false;
			me._text_51.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bosque.ontouchend=function (e) {
			me.elementMouseOver['ht_bosque']=false;
			me._text_51.logicBlock_visible();
		}
		me._ht_bosque.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAgMTA7IiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwID'+
			'EwIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTUsMC42MUMyLjU4LDAuNjEsMC42MSwyLjU4LDAuNjEsNWMwLDEuMTQsMC40MywyLjE4LDEuMTUsMi45NmMwLjA5LDAuMSwwLjE4LDAuMTksMC4yOCwwLjI4JiN4ZDsmI3hhOyYjeDk7QzIuODIsOC45NiwzLjg1LDkuMzksNSw5LjM5czIuMTgtMC40MywyLjk2LTEuMTVjMC4xLTAuMDksMC4xOS0wLjE4LDAuMjgtMC4yOEM4Ljk2LDcuMTgsOS4zOSw2LjE0LDkuMzksNSYjeGQ7JiN4YTsmI3g5O0M5LjM5LDIuNTgsNy40MiwwLjYxLDUs'+
			'MC42MXogTTUsOC45NkM0LjAxLDguOTYsMy4xMSw4LjU5LDIuNDIsOEMyLjYsNy45MiwyLjc4LDcuODYsMi45Nyw3LjgxYzAuNzktMC4yMiwxLjYtMC4yOCwyLjQxLTAuMjQmI3hkOyYjeGE7JiN4OTtjMC42MSwwLjAzLDEuMjEsMC4xLDEuNzksMC4yOEM3LjMxLDcuODksNy40NSw3Ljk0LDcuNTgsOEM2Ljg5LDguNTksNS45OSw4Ljk2LDUsOC45NnogTTIuNzEsNC42MWMtMC4xLTAuMzMsMC4wOS0wLjY5LDAuNC0wLjc5JiN4ZDsmI3hhOyYjeDk7YzAuMDEsMCwwLjAyLDAsMC4wMy0wLjAxYy0wLjAxLDAuMTMtMC4wMiwwLjI0LDAsMC4zNkMzLjIsNC42NywzLjQxLDUuMDYsMy44OCw1LjI5QzMuOS'+
			'w1LjMsMy45Miw1LjMsMy45Miw1LjMyJiN4ZDsmI3hhOyYjeDk7QzQsNS41OSw0LjE2LDUuOCw0LjM5LDUuOTVjMCwwLjAxLDAuMDEsMC4wMSwwLjAxLDAuMDJDNC4xOCw2LjIxLDMuNzUsNi4yMiwzLjUsNS45N2MtMC4wNC0wLjA0LTAuMDktMC4wOS0wLjE1LTAuMSYjeGQ7JiN4YTsmI3g5O0MzLjI2LDUuODYsMy4yLDUuOSwzLjE1LDUuOTVDMi45Myw2LjE3LDIuNjIsNi4yMSwyLjM3LDYuMDdDMi4xNSw1Ljk0LDIuMDIsNS42OSwyLjA2LDUuNDVDMi4xLDUuMTYsMi4yOCw0Ljk3LDIuNTUsNC45JiN4ZDsmI3hhOyYjeDk7YzAuMS0wLjAyLDAuMTYtMC4wNywwLjE3LTAuMTZDMi43NCw0LjY5LDIu'+
			'NzIsNC42NCwyLjcxLDQuNjF6IE01Ljg2LDMuMDZjMC4zNSwwLjEsMC41MiwwLjM1LDAuNiwwLjY5JiN4ZDsmI3hhOyYjeDk7QzYuNTQsNC4xLDYuNDgsNC40NCw2LjI0LDQuNzJDNi4xNSw0Ljg0LDYuMDMsNC45MSw1Ljg5LDQuOTVjLTAuMSwwLjAzLTAuMTYsMC4wOS0wLjE3LDAuMTlDNS42Niw1LjQzLDUuNDksNS42MSw1LjIsNS43VjMuNTImI3hkOyYjeGE7JiN4OTtjMC0wLjE2LTAuMTMtMC4yNS0wLjI3LTAuMmMtMC4wOCwwLjAzLTAuMTIsMC4xLTAuMTIsMC4xOXYyLjEzYzAsMC4wNywwLDAuMDctMC4wNywwLjA0QzQuNDksNS41OCw0LjMzLDUuNCw0LjI3LDUuMTMmI3hkOyYjeGE7JiN4OT'+
			'tDNC4yNSw1LjA0LDQuMjIsNC45OCw0LjEzLDQuOTZDMy44Niw0Ljg5LDMuNjksNC43LDMuNTksNC40NGMtMC4xNC0wLjQxLTAuMS0wLjc5LDAuMTYtMS4xNEMzLjg1LDMuMiwzLjk2LDMuMTIsNC4xLDMuMDcmI3hkOyYjeGE7JiN4OTtjMC4xMy0wLjAzLDAuMTctMC4xLDAuMTYtMC4yM0M0LjI1LDIuNDMsNC41MywyLjA4LDQuOTMsMi4wNWMwLjQtMC4wMywwLjc1LDAuMjUsMC44LDAuNjVjMC4wMSwwLjA2LDAsMC4xMSwwLDAuMTcmI3hkOyYjeGE7JiN4OTtDNS43NCwyLjk2LDUuNzgsMy4wNCw1Ljg2LDMuMDZ6IE02Ljg3LDMuODFDNy4xOSwzLjg5LDcuNCw0LjI1LDcuMzEsNC41OEM3LjI5LDQu'+
			'NjIsNy4yNyw0LjY2LDcuMjcsNC43JiN4ZDsmI3hhOyYjeDk7QzcuMjgsNC44LDcuMzQsNC44Nyw3LjQ2LDQuOWMwLjMsMC4wNywwLjUsMC4zMywwLjQ5LDAuNjJjMCwwLjI2LTAuMTYsMC40OS0wLjQsMC41OWMtMC4yMywwLjEtMC41LDAuMDQtMC42OS0wLjE0JiN4ZDsmI3hhOyYjeDk7Yy0wLjA0LTAuMDQtMC4wOS0wLjA5LTAuMTUtMC4xQzYuNjMsNS44Nyw2LjU4LDUuOSw2LjUyLDUuOTVDNi4yOCw2LjIsNS45Miw2LjIyLDUuNjYsNi4wMmMtMC4wNy0wLjA2LTAuMDctMC4wNiwwLTAuMSYjeGQ7JiN4YTsmI3g5O2MwLjE5LTAuMTUsMC4zMy0wLjMzLDAuNDEtMC41NkM2LjA4LDUuMzIsNi4wOC'+
			'w1LjMsNi4xMiw1LjI5QzYuNTEsNS4xMSw2LjczLDQuOCw2LjgzLDQuMzlDNi44Niw0LjMsNi44Nyw0LjIsNi44Nyw0LjExJiN4ZDsmI3hhOyYjeDk7QzYuODgsNC4wMSw2Ljg3LDMuOTIsNi44NywzLjgxeiBNNi40OCw2LjQ3djAuMTljMCwwLjE5LTAuMDEsMC4zOCwwLDAuNTdjMCwwLjAzLTAuMDEsMC4wNS0wLjA2LDAuMDRjLTAuMzgtMC4wNi0wLjc4LTAuMS0xLjE3LTAuMSYjeGQ7JiN4YTsmI3g5O2MtMC4wMywwLTAuMDUsMC4wMS0wLjA1LTAuMDRWNi4xMmMwLDAsMCwwLDAuMDEtMC4wMkM1LjU1LDYuNTMsNS45Nyw2LjY0LDYuNDgsNi40N3ogTTQuODEsNi4xNXYwLjk3YzAsMC4wMy0wLjAx'+
			'LDAuMDUtMC4wNSwwLjA1JiN4ZDsmI3hhOyYjeDk7QzQuMzUsNy4xOCwzLjk1LDcuMjEsMy41NSw3LjI4QzMuNTIsNy4yOCwzLjUsNy4zLDMuNSw3LjI2di0wLjhjMC41MiwwLjE5LDAuOTUsMC4wOCwxLjI5LTAuMzVDNC44MSw2LjEyLDQuODEsNi4xNCw0LjgxLDYuMTV6JiN4ZDsmI3hhOyYjeDk7IE03Ljg3LDcuNzFDNy43OSw3LjY2LDcuNyw3LjYyLDcuNjEsNy41OUM3LjM5LDcuNSw3LjE2LDcuNDMsNi45NCw3LjM4QzYuODgsNy4zNyw2Ljg3LDcuMzUsNi44Nyw3LjNWNi40NiYjeGQ7JiN4YTsmI3g5O0M2Ljk0LDYuNDgsNyw2LjUsNy4wNiw2LjUyQzcuNTcsNi42NSw4LjEsNi4zNyw4LjI4LD'+
			'UuODhjMC4xOC0wLjQ5LTAuMDMtMS4wNC0wLjUtMS4yOEM3LjcyLDQuNTcsNy43MSw0LjU1LDcuNzIsNC41JiN4ZDsmI3hhOyYjeDk7QzcuNzYsMy45Niw3LjM3LDMuNDgsNi44NCwzLjRjLTAuMDYtMC4wMS0wLjEtMC4wMy0wLjEyLTAuMDlDNi42LDMuMDcsNi40MSwyLjg3LDYuMTYsMi43NUM2LjE0LDIuNzQsNi4xMywyLjc0LDYuMTMsMi43JiN4ZDsmI3hhOyYjeDk7Yy0wLjA1LTAuNTctMC41LTAuOTgtMC45OC0xLjAzYy0wLjAxLDAtMC4wMi0wLjAxLTAuMDMtMC4wMUg0Ljg3Yy0wLjEsMC4wMy0wLjIzLDAuMDQtMC4zMywwLjFDNC4xNiwxLjk0LDMuOTMsMi4yNCwzLjg4LDIuNjcmI3hkOyYj'+
			'eGE7JiN4OTtDMy44NywyLjcyLDMuODUsMi43NSwzLjgsMi43OEMzLjU3LDIuOSwzLjQsMy4wOCwzLjI5LDMuMzJDMy4yNiwzLjM4LDMuMjMsMy4zOSwzLjE3LDMuNGMtMC41MiwwLjA4LTAuOSwwLjUzLTAuODgsMS4wNSYjeGQ7JiN4YTsmI3g5O2MwLDAuMS0wLjAzLDAuMTMtMC4xLDAuMTZjLTAuMywwLjE2LTAuNDgsMC40My0wLjUyLDAuNzZDMS42Nyw1LjM5LDEuNjcsNS40MSwxLjY2LDUuNDJ2MC4yMWMwLjAxLDAuMDUsMC4wMywwLjEsMC4wMywwLjE1JiN4ZDsmI3hhOyYjeDk7YzAuMTYsMC41OSwwLjc4LDAuOTIsMS4zNSwwLjcxYzAuMDItMC4wMSwwLjAzLTAuMDIsMC4wNi0wLjAydjAuOD'+
			'VDMy4xMiw3LjM2LDMuMSw3LjM3LDMuMDYsNy4zOEMyLjc3LDcuNDUsMi40OSw3LjUzLDIuMjIsNy42NiYjeGQ7JiN4YTsmI3g5O0MyLjIsNy42OCwyLjE2LDcuNjksMi4xNCw3LjcyQzEuNDYsNywxLjA0LDYuMDUsMS4wNCw1YzAtMi4xOCwxLjc4LTMuOTYsMy45Ni0zLjk2YzIuMTksMCwzLjk2LDEuNzgsMy45NiwzLjk2JiN4ZDsmI3hhOyYjeDk7QzguOTYsNi4wNCw4LjU1LDcsNy44Nyw3LjcxeiIvPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_bosque.appendChild(me._svg_2);
		el=me._text_51=document.createElement('div');
		els=me._text_51__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggDx=0;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 102px;';
		hs+='height: 22px;';
		hs+='background: #e7e7e7;';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_51.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_bosque'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_51.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_51.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_51.style[domTransition]='';
				if (me._text_51.ggCurrentLogicStateVisible == 0) {
					me._text_51.style.visibility=(Number(me._text_51.style.opacity)>0||!me._text_51.style.opacity)?'inherit':'hidden';
					me._text_51.ggVisible=true;
				}
				else {
					me._text_51.style.visibility="hidden";
					me._text_51.ggVisible=false;
				}
			}
		}
		me._text_51.onmouseover=function (e) {
			me.elementMouseOver['text_51']=true;
		}
		me._text_51.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_51__text)
					return;
				}
			}
			me.elementMouseOver['text_51']=false;
		}
		me._text_51.ontouchend=function (e) {
			me.elementMouseOver['text_51']=false;
		}
		me._text_51.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_bosque.appendChild(me._text_51);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['text_51']) {
					me._text_51.style[domTransition]='none';
					me._text_51.style.visibility=(Number(me._text_51.style.opacity)>0||!me._text_51.style.opacity)?'inherit':'hidden';
					me._text_51.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._ht_bosque;
	};
	function SkinHotspotClass_ht_playa(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_playa=document.createElement('div');
		el.ggId="ht_playa";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 248px;';
		hs+='position : absolute;';
		hs+='top : 260px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_playa.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_playa.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_playa.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_playa.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_playa']=true;
			me._text_50.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_playa.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_playa']=false;
			me._text_50.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_playa.ontouchend=function (e) {
			me.elementMouseOver['ht_playa']=false;
			me._text_50.logicBlock_visible();
		}
		me._ht_playa.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_51=document.createElement('div');
		els=me._svg_51__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAgMTA7IiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwID'+
			'EwIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTUsMC4xQzIuMywwLjEsMC4xLDIuMywwLjEsNWMwLDEuMSwwLjQsMi4xLDEsMi45bDAuMywwLjRsMCwwaDBjMC45LDEsMi4yLDEuNiwzLjYsMS42YzIuNywwLDQuOS0yLjIsNC45LTQuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7UzcuNywwLjEsNSwwLjF6IE01LDkuNGMtMSwwLTEuOS0wLjMtMi42LTAuOWMwLjQsMCwwLjcsMCwxLjEtMC4xYzAuNS0wLjEsMC45LTAuMiwxLjQtMC4zQzUuNCw4LDUuOSw3LjgsNi41LDcuOCYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7YzAuNSwwLDEsMC4xLDEuNSwwLjRjMCwwLDAsMCwwLDBDNy4yLDguOSw2LjIsOS40LDUsOS40eiBNOC4zLDcuOUM4LjMsNy45LDguMyw3LjksOC4zLDcuOUM3LjksNy42LDcuNSw3LjQsNyw3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC41LDAtMC45LDAtMS4zLDAuMUM1LjIsNy42LDQuNyw3LjcsNC4zLDcuOGMtMC4xLDAtMC4xLDAtMC4xLDBDNCw3LjIsMy45LDYuNiwzLjcsNmMwLTAuMi0wLjEtMC40LTAuMS0wLjZjMC4xLDAsMC4yLDAsMC4zLDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzQsNS42LDQuMSw1LjYsNC4yLDUuNWMwLjEtMC4xLDAuMi0wLjIsMC4zLTAuM2'+
			'MwLjItMC4xLDAuNS0wLjEsMC43LDBjMC4xLDAsMC4yLDAsMC4zLDBDNS42LDUuMSw1LjYsNSw1LjYsNC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMi0wLjYtMC41LTEtMS0xLjNDNC4xLDMuMywzLjYsMy4yLDMsMy4zYy0wLjEsMC0wLjEsMC0wLjEtMC4xYzAtMC4xLDAtMC4yLTAuMS0wLjNjMC0wLjEtMC4xLTAuMi0wLjMtMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMi41LDIuOCwyLjQsMi45LDIuNCwzYzAsMC4xLDAsMC4yLDAuMSwwLjNjMCwwLDAsMC4xLDAsMC4xQzEuNCwzLjksMC44LDUsMS4xLDYuMWMwLDAuMSwwLjEsMC4yLDAuMiwwLjJjMC4xLDAsMC4yLDAsMC4yLTAuMSYjeGQ7JiN4'+
			'YTsmI3g5OyYjeDk7YzAuMi0wLjMsMC42LTAuNSwxLTAuM0MyLjcsNiwyLjgsNiwyLjksNS44QzIuOSw1LjcsMyw1LjYsMy4xLDUuNmMwLjIsMC44LDAuNCwxLjUsMC42LDIuM2MwLDAsMCwwLDAsMC4xQzMuNiw4LDMuNCw4LDMuMiw4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLjEtMSwwLjEtMS40LDBDMS4xLDcuMiwwLjYsNi4yLDAuNiw1YzAtMi40LDItNC40LDQuNC00LjRjMi40LDAsNC40LDIsNC40LDQuNEM5LjQsNi4xLDksNy4xLDguMyw3Ljl6IE0zLjcsNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIsMC0wLjQsMC0wLjUsMGMtMC4yLDAtMC4zLDAuMS0wLjUsMC4yYy0wLjEtMC41LT'+
			'AuMS0xLDAuMS0xLjVDMy4zLDQuMSwzLjYsNC41LDMuNyw1eiBNMy40LDMuN0M0LDMuNyw0LjcsNCw1LDQuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMC4xLDAtMC4zLDAuMS0wLjQsMC4yYzAsMCwwLDAtMC4xLDBDNCw0LjQsMy43LDQsMy40LDMuN0MzLjQsMy43LDMuNCwzLjcsMy40LDMuN3ogTTIuMyw1LjMmI3hkOyYjeGE7JiN4OTsmI3g5O0MyLjMsNS40LDIuMyw1LjQsMi4zLDUuM0MyLDUuNCwxLjgsNS40LDEuNiw1LjZjMCwwLDAsMC0wLjEsMEMxLjMsNS4yLDEuOCw0LjIsMi40LDMuOWMwLDAuMS0wLjEsMC4zLTAuMSwwLjQmI3hkOyYjeGE7JiN4OTsmI3g5'+
			'O0MyLjIsNC43LDIuMyw1LDIuMyw1LjN6Ii8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTYuNiwxLjljMC4xLDAsMC4yLTAuMSwwLjItMC4yYzAtMC4xLDAtMC4xLDAtMC4yYzAtMC4xLDAtMC4yLTAuMi0wLjNjMCwwLTAuMSwwLTAuMSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwwLTAuMSwwLjEtMC4yLDAuMmMwLDAuMSwwLDAuMiwwLDAuM0M2LjQsMS44LDYuNSwxLjksNi42LDEuOXoiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOC4xLDIuN2MtMC4xLDAtMC4xLDAtMC4yLDBDNy44LDIuNyw3LjcsMi44LDcuNywzYzAsMC4xLDAuMSwwLjIsMC4yLDAuMmMwLjEsMCwwLjEsMCwwLjIsMC'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLDAuMiwwLDAuMy0wLjJjMCwwLDAtMC4xLDAtMC4xQzguMywyLjgsOC4yLDIuNyw4LjEsMi43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LjYsMi4yQzYuMiwyLjIsNS45LDIuNiw1LjksM2MwLDAuNCwwLjMsMC43LDAuNywwLjdDNywzLjcsNy4zLDMuNCw3LjMsM0M3LjMsMi42LDcsMi4yLDYuNiwyLjJ6IE02LjYsMy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM2MwLTAuMiwwLjEtMC4zLDAuMy0wLjNjMC4yLDAsMC4zLDAuMSwwLjMsMC4zQzYuOSwzLjEsNi44LDMuMiw2LjYsMy4yeiIvPgogIDxwYXRoIGNs'+
			'YXNzPSJzdDAiIGQ9Ik03LjUsMi4zYzAsMCwwLjEsMCwwLjEsMEM3LjcsMi4yLDcuOCwyLjEsNy45LDJjMC4xLTAuMSwwLTAuMiwwLTAuM2MtMC4xLTAuMS0wLjItMC4xLTAuMywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDNy41LDEuOCw3LjQsMS44LDcuNCwxLjlDNy4zLDIsNy4zLDIuMSw3LjMsMi4xQzcuNCwyLjIsNy40LDIuMyw3LjUsMi4zeiIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01LjgsMy43Yy0wLjEsMC0wLjIsMC0wLjIsMEM1LjUsMy44LDUuNCwzLjgsNS40LDMuOUM1LjMsNCw1LjMsNCw1LjQsNC4xYzAsMC4xLDAuMSwwLjEsMC4yLDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMS'+
			'wwLDAuNC0wLjIsMC40LTAuNEM1LjksMy44LDUuOSwzLjcsNS44LDMuN3oiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNS42LDIuMmMwLjEsMC4xLDAuMSwwLjEsMC4yLDBjMC4xLDAsMC4xLTAuMSwwLjEtMC4yYzAsMCwwLTAuMSwwLTAuMUM1LjgsMS44LDUuOCwxLjgsNS43LDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjEtMC4xLTAuMi0wLjEtMC4zLDBDNS4zLDEuOCw1LjMsMS45LDUuNCwyQzUuNCwyLjEsNS41LDIuMiw1LjYsMi4yeiIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03LjUsMy43Yy0wLjEsMC0wLjEsMC0wLjIsMC4xYzAsMC4xLDAsMC4xLDAsMC4yYzAuMSwwLjEsMC4x'+
			'LDAuMiwwLjIsMC4yYzAuMSwwLjEsMC4xLDAsMC4yLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEsMCwwLjEtMC4xLDAuMS0wLjJDNy45LDMuOSw3LjcsMy43LDcuNSwzLjd6Ii8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTUuNiwzYzAtMC4xLTAuMS0wLjItMC4yLTAuMmMtMC4xLDAtMC4yLDAtMC4yLDBDNSwyLjcsNC45LDIuOCw0LjksM2MwLDAuMSwwLjEsMC4yLDAuMiwwLjJjMCwwLDAuMSwwLDAuMSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLDAuMSwwLDAuMSwwQzUuNSwzLjIsNS42LDMuMSw1LjYsM3oiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNi42LDRDNi41LDQsNi40LDQuMS'+
			'w2LjQsNC4yYzAsMCwwLDAuMSwwLDAuMWMwLDAsMCwwLjEsMCwwLjFjMCwwLjEsMC4xLDAuMiwwLjIsMC4yYzAuMSwwLDAuMi0wLjEsMC4yLTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC4xLDAtMC4yLDAtMC4yQzYuOCw0LjEsNi43LDQsNi42LDR6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_51__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_51.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_playa.appendChild(me._svg_51);
		el=me._text_50=document.createElement('div');
		els=me._text_50__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggDx=0;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 102px;';
		hs+='height: 22px;';
		hs+='background: #e7e7e7;';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_50.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_playa'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_50.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_50.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_50.style[domTransition]='';
				if (me._text_50.ggCurrentLogicStateVisible == 0) {
					me._text_50.style.visibility=(Number(me._text_50.style.opacity)>0||!me._text_50.style.opacity)?'inherit':'hidden';
					me._text_50.ggVisible=true;
				}
				else {
					me._text_50.style.visibility="hidden";
					me._text_50.ggVisible=false;
				}
			}
		}
		me._text_50.onmouseover=function (e) {
			me.elementMouseOver['text_50']=true;
		}
		me._text_50.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_50__text)
					return;
				}
			}
			me.elementMouseOver['text_50']=false;
		}
		me._text_50.ontouchend=function (e) {
			me.elementMouseOver['text_50']=false;
		}
		me._text_50.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_playa.appendChild(me._text_50);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['text_50']) {
					me._text_50.style[domTransition]='none';
					me._text_50.style.visibility=(Number(me._text_50.style.opacity)>0||!me._text_50.style.opacity)?'inherit':'hidden';
					me._text_50.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._ht_playa;
	};
	function SkinHotspotClass_ht_parche1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_parche1=document.createElement('div');
		el.ggId="ht_parche1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_parche1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_parche1.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_parche1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_parche1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_parche1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_parche1.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._external_2.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('MostrarParche') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._external_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._external_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._external_2.style[domTransition]='';
				if (me._external_2.ggCurrentLogicStateVisible == 0) {
					me._external_2.style.visibility="hidden";
					me._external_2__img.src = '';
					me._external_2.ggVisible=false;
				}
				else {
					me._external_2.style.visibility=(Number(me._external_2.style.opacity)>0||!me._external_2.style.opacity)?'inherit':'hidden';
					me._external_2.ggSubElement.src=me._external_2.ggText;
					me._external_2.ggVisible=true;
				}
			}
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_parche1.appendChild(me._external_2);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_parche1;
	};
	function SkinHotspotClass_activar_parche0(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._activar_parche0=document.createElement('div');
		el.ggId="activar_parche";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._activar_parche0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._activar_parche0.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._activar_parche0.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._activar_parche0.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._activar_parche0.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._activar_parche0.ggUpdatePosition=function (useTransition) {
		}
		el=me._ver_mejoras=document.createElement('div');
		els=me._ver_mejoras__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ver mejoras";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="ver mejoras";
		el.appendChild(els);
		me._ver_mejoras.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ver_mejoras.onclick=function (e) {
			player.setVariableValue('MostrarParche', !player.getVariableValue('MostrarParche'));
		}
		me._ver_mejoras.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._activar_parche0.appendChild(me._ver_mejoras);
		el=me._text_40=document.createElement('div');
		els=me._text_40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -57px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 155px;';
		hs+='pointer-events:auto;';
		hs+='border-top-right-radius: 15px; border-bottom-right-radius: 15px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 155px;';
		hs+='height: 33px;';
		hs+='background: #3a68ff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 5px 7px 5px;';
		hs+='overflow: hidden;';
		hs+="border-top-right-radius: 15px; border-bottom-right-radius: 15px;";
		els.setAttribute('style',hs);
		els.innerHTML="   "+me.hotspot.title;
		el.appendChild(els);
		me._text_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_40.onclick=function (e) {
			player.setVariableValue('MostrarParche', !player.getVariableValue('MostrarParche'));
		}
		me._text_40.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._activar_parche0.appendChild(me._text_40);
		el=me._circulo0=document.createElement('div');
		el.ggId="circulo";
		el.ggDx=-57;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 19px;';
		hs+='border-radius : 19px;';
		hs+='background : #3a68ff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circulo0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circulo0.onclick=function (e) {
			player.setVariableValue('MostrarParche', !player.getVariableValue('MostrarParche'));
		}
		me._circulo0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._svg_50=document.createElement('div');
		els=me._svg_50__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAgMTA7IiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwID'+
			'EwIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTUsMC4yQzIuNCwwLjIsMC4yLDIuNCwwLjIsNVMyLjQsOS44LDUsOS44UzkuOCw3LjYsOS44LDVTNy42LDAuMiw1LDAuMnogTTQuNCwyLjVjMC4zLDAsMC41LTAuMSwwLjgtMC4yJiN4ZDsmI3hhOyYjeDk7QzUuNywyLDUuOSwxLjUsNiwwLjljMC0wLjEsMC0wLjIsMC4xLTAuMmMwLjEsMCwwLjIsMC4xLDAuMiwwLjJjMCwwLjMsMC4xLDAuNSwwLjIsMC44YzAuMywwLjUsMC44LDAuOCwxLjQsMC44JiN4ZDsmI3hhOyYjeDk7YzAuMSww'+
			'LDAuMSwwLDAuMiwwLjFDOCwyLjYsOCwyLjgsNy44LDIuOGMtMC4yLDAtMC40LDAtMC42LDAuMWMtMC42LDAuMi0xLDAuOC0xLDEuNHYwLjFjMCwwLjEtMC4xLDAuMS0wLjIsMC4xQzYsNC41LDYsNC40LDYsNC4zJiN4ZDsmI3hhOyYjeDk7YzAtMC4xLDAtMC4zLTAuMS0wLjRDNS43LDMuMiw1LjEsMi44LDQuNCwyLjhjMCwwLTAuMSwwLTAuMSwwYzAsMC0wLjEtMC4xLDAtMC4xQzQuMywyLjUsNC4zLDIuNSw0LjQsMi41eiBNNC42LDYuMSYjeGQ7JiN4YTsmI3g5O2MtMC43LDAuNS0xLjEsMS4xLTEuMSwydjBjMCwwLjEtMC4xLDAuMi0wLjIsMC4yYy0wLjEsMC0wLjEtMC4xLTAuMS0wLjJjMC0wLj'+
			'YtMC4yLTEuMS0wLjUtMS41QzIuMiw2LjEsMS42LDUuOCwwLjgsNS43JiN4ZDsmI3hhOyYjeDk7Yy0wLjEsMC0wLjIsMC0wLjItMC4xVjUuNWMwLTAuMSwwLjEtMC4xLDAuMi0wLjFjMS4yLDAsMi4zLTEsMi40LTIuMmMwLTAuMSwwLTAuMiwwLTAuMmMwLTAuMSwwLTAuMiwwLjEtMC4yYzAuMSwwLDAuMSwwLjEsMC4yLDAuMiYjeGQ7JiN4YTsmI3g5O2MwLDAuNSwwLjEsMC45LDAuNCwxLjNjMC41LDAuNywxLjIsMS4xLDIsMS4xYzAuMSwwLDAuMiwwLjEsMC4yLDAuMWMwLDAuMS0wLjEsMC4xLTAuMiwwLjFDNS41LDUuNyw1LDUuOSw0LjYsNi4xeiBNOC42LDcuMSYjeGQ7JiN4YTsmI3g5O2MtMC43'+
			'LDAtMS4yLDAuNi0xLjIsMS4zYzAsMC4xLTAuMSwwLjItMC4yLDAuMmMtMC4xLDAtMC4xLTAuMS0wLjEtMC4yQzcuMSw4LDcsNy44LDYuOCw3LjZjLTAuMy0wLjMtMC42LTAuNS0xLTAuNSYjeGQ7JiN4YTsmI3g5O2MtMC4xLDAtMC4xLDAtMC4yLTAuMWMwLTAuMSwwLTAuMiwwLjItMC4yYzAuMywwLDAuNi0wLjEsMC44LTAuM2MwLjMtMC4zLDAuNS0wLjYsMC41LTFjMC0wLjEsMC0wLjEsMC4xLTAuMmMwLjEsMCwwLjIsMCwwLjIsMC4yJiN4ZDsmI3hhOyYjeDk7YzAsMC4yLDAsMC40LDAuMiwwLjZjMC4yLDAuNCwwLjYsMC43LDEuMSwwLjdjMC4xLDAsMC4yLDAsMC4yLDAuMUM4LjgsNyw4LjcsNy'+
			'4xLDguNiw3LjF6Ii8+Cjwvc3ZnPgo=';
		me._svg_50__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 145px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_50.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._circulo0.appendChild(me._svg_50);
		me._activar_parche0.appendChild(me._circulo0);
		me.__div = me._activar_parche0;
	};
	function SkinHotspotClass_activar_parche(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._activar_parche=document.createElement('div');
		el.ggId="activar_parche";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._activar_parche.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._activar_parche.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._activar_parche.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._activar_parche.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._activar_parche.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._activar_parche.ggUpdatePosition=function (useTransition) {
		}
		me.__div = me._activar_parche;
	};
	function SkinHotspotClass_ht_tagb(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tagb=document.createElement('div');
		el.ggId="ht_tagB";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 31px;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tagb.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tagb.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('tagsOn') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tagb.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tagb.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tagb.style[domTransition]='';
				if (me._ht_tagb.ggCurrentLogicStateVisible == 0) {
					me._ht_tagb.style.visibility="hidden";
					me._ht_tagb.ggVisible=false;
				}
				else {
					me._ht_tagb.style.visibility=(Number(me._ht_tagb.style.opacity)>0||!me._ht_tagb.style.opacity)?'inherit':'hidden';
					me._ht_tagb.ggVisible=true;
				}
			}
		}
		me._ht_tagb.onclick=function (e) {
			skin._text_infotagsgeo.ggText=" "+me.hotspot.title+" "+me.hotspot.description;
			skin._text_infotagsgeo.ggTextDiv.innerHTML=skin._text_infotagsgeo.ggText;
			if (skin._text_infotagsgeo.ggUpdateText) {
				skin._text_infotagsgeo.ggUpdateText=function() {
					var hs=" "+me.hotspot.title+" "+me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._text_infotagsgeo.ggUpdatePosition) {
				skin._text_infotagsgeo.ggUpdatePosition();
			}
			skin._text_infotagsgeo.ggTextDiv.scrollTop = 0;
			skin._external_1.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tagb.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tagb.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tagb.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tagb.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_30=document.createElement('div');
		els=me._text_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -38px;';
		hs+='visibility : inherit;';
		hs+='width : 61px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #1a1a1a;';
		hs+='background: rgba(26,26,26,0.823529);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 6px 3px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_30.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((59-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_tagb.appendChild(me._text_30);
		el=me._circletag2=document.createElement('div');
		el.ggId="circletag";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:50%;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circletag2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circletag2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('taganimation') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._circletag2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._circletag2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._circletag2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._circletag2.ggCurrentLogicStateScaling == 0) {
					me._circletag2.ggParameter.sx = 1.4;
					me._circletag2.ggParameter.sy = 1.4;
					me._circletag2.style[domTransform]=parameterToTransform(me._circletag2.ggParameter);
				}
				else {
					me._circletag2.ggParameter.sx = 1;
					me._circletag2.ggParameter.sy = 1;
					me._circletag2.style[domTransform]=parameterToTransform(me._circletag2.ggParameter);
				}
			}
		}
		me._circletag2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('taganimation') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._circletag2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._circletag2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._circletag2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._circletag2.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._circletag2.style.opacity == 0.0) { me._circletag2.style.visibility="hidden"; } }, 1005);
					me._circletag2.style.opacity=0;
				}
				else {
					me._circletag2.style.visibility=me._circletag2.ggVisible?'inherit':'hidden';
					me._circletag2.style.opacity=1;
				}
			}
		}
		me._circletag2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tagb.appendChild(me._circletag2);
		el=me._circletag1=document.createElement('div');
		el.ggId="circletag";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:50%;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circletag1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circletag1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tagb.appendChild(me._circletag1);
		me.__div = me._ht_tagb;
	};
	function SkinHotspotClass_ht_tagbunder(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tagbunder=document.createElement('div');
		el.ggId="ht_tagBunder";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 31px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tagbunder.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tagbunder.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('tagsOn') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tagbunder.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tagbunder.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tagbunder.style[domTransition]='';
				if (me._ht_tagbunder.ggCurrentLogicStateVisible == 0) {
					me._ht_tagbunder.style.visibility="hidden";
					me._ht_tagbunder.ggVisible=false;
				}
				else {
					me._ht_tagbunder.style.visibility=(Number(me._ht_tagbunder.style.opacity)>0||!me._ht_tagbunder.style.opacity)?'inherit':'hidden';
					me._ht_tagbunder.ggVisible=true;
				}
			}
		}
		me._ht_tagbunder.onclick=function (e) {
			skin._text_infotagsgeo.ggText=" "+me.hotspot.title+" "+me.hotspot.description;
			skin._text_infotagsgeo.ggTextDiv.innerHTML=skin._text_infotagsgeo.ggText;
			if (skin._text_infotagsgeo.ggUpdateText) {
				skin._text_infotagsgeo.ggUpdateText=function() {
					var hs=" "+me.hotspot.title+" "+me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._text_infotagsgeo.ggUpdatePosition) {
				skin._text_infotagsgeo.ggUpdatePosition();
			}
			skin._text_infotagsgeo.ggTextDiv.scrollTop = 0;
			skin._external_1.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tagbunder.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tagbunder.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tagbunder.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tagbunder.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -39px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 61px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #1a1a1a;';
		hs+='background: rgba(26,26,26,0.823529);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 6px 3px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((59-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_tagbunder.appendChild(me._text_3);
		el=me._circletag0=document.createElement('div');
		el.ggId="circletag";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:50%;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circletag0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circletag0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('taganimation') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._circletag0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._circletag0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._circletag0.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._circletag0.ggCurrentLogicStateScaling == 0) {
					me._circletag0.ggParameter.sx = 1.4;
					me._circletag0.ggParameter.sy = 1.4;
					me._circletag0.style[domTransform]=parameterToTransform(me._circletag0.ggParameter);
				}
				else {
					me._circletag0.ggParameter.sx = 1;
					me._circletag0.ggParameter.sy = 1;
					me._circletag0.style[domTransform]=parameterToTransform(me._circletag0.ggParameter);
				}
			}
		}
		me._circletag0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('taganimation') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._circletag0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._circletag0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._circletag0.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._circletag0.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._circletag0.style.opacity == 0.0) { me._circletag0.style.visibility="hidden"; } }, 1005);
					me._circletag0.style.opacity=0;
				}
				else {
					me._circletag0.style.visibility=me._circletag0.ggVisible?'inherit':'hidden';
					me._circletag0.style.opacity=1;
				}
			}
		}
		me._circletag0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tagbunder.appendChild(me._circletag0);
		el=me._circletag=document.createElement('div');
		el.ggId="circletag";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:50%;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circletag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circletag.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tagbunder.appendChild(me._circletag);
		me.__div = me._ht_tagbunder;
	};
	function SkinHotspotClass_ht_tag_geogris(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_geogris=document.createElement('div');
		el.ggId="ht_tag_geogris";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 117px;';
		hs+='position : absolute;';
		hs+='top : 271px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_geogris.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_geogris.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('tagsOn') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tag_geogris.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tag_geogris.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tag_geogris.style[domTransition]='';
				if (me._ht_tag_geogris.ggCurrentLogicStateVisible == 0) {
					me._ht_tag_geogris.style.visibility="hidden";
					me._ht_tag_geogris.ggVisible=false;
				}
				else {
					me._ht_tag_geogris.style.visibility=(Number(me._ht_tag_geogris.style.opacity)>0||!me._ht_tag_geogris.style.opacity)?'inherit':'hidden';
					me._ht_tag_geogris.ggVisible=true;
				}
			}
		}
		me._ht_tag_geogris.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geogris.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geogris.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geogris.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_geogris.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_geotag=document.createElement('div');
		els=me._text_geotag__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_geotag";
		el.ggDy=-34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		hs+='font-weight:600;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #1a1a1a;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 11px 2px 11px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_geotag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_geotag.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tag_geogris.appendChild(me._text_geotag);
		el=me._rectangle_large=document.createElement('div');
		el.ggId="Rectangle_large";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -1px;';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_large.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_large.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_geogris.appendChild(me._rectangle_large);
		el=me._circle2=document.createElement('div');
		el.ggId="circle";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 9px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:50%;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tag_geogris.appendChild(me._circle2);
		me.__div = me._ht_tag_geogris;
	};
	function SkinHotspotClass_ht_pozodeagua(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_pozodeagua=document.createElement('div');
		el.ggId="ht_Pozodeagua";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 370px;';
		hs+='position : absolute;';
		hs+='top : 256px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_pozodeagua.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_pozodeagua.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pozodeagua.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pozodeagua.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_pozodeagua']=true;
			me._text_5.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pozodeagua.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_pozodeagua']=false;
			me._text_5.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pozodeagua.ontouchend=function (e) {
			me.elementMouseOver['ht_pozodeagua']=false;
			me._text_5.logicBlock_visible();
		}
		me._ht_pozodeagua.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIGlkPSJDYXBhXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMT'+
			'AwIDEwMCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9JiN4ZDsKCS5zdDJ7ZmlsbDp1cmwoI1NWR0lEXzAwMDAwMTY2NjY1MTMxNDMxNDAzMDA3OTUwMDAwMDE2MTYwOTg5NzI2MzM0OTAwNjQyXyk7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjYuNSw0NC42Yy0wLjYsMC40LTEuNCwwLjMtMi0wLjFjLTAuNi0wLjQtMC45LTEuMi0wLjYtMS45YzAuNC0xLDAuOS0xLjksMS42LTIuOWMwLjcsMC45LDEuMywxLjksMS43LDMmI3hkOyYjeGE7JiN4OTtDMjcuNCw0My40'+
			'LDI3LjEsNDQuMiwyNi41LDQ0LjZ6Ii8+CiA8Zz4KICA8bGluZWFyR3JhZGllbnQgeTE9IjYwLjIzNzEiIHgxPSI0OS43OTc2IiBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4Mj0iNTAuMTg4OSIgeTI9IjI5LjcxNTQiPgogICA8c3RvcCBvZmZzZXQ9IjkuMzE3OTk1ZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRiIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMTU3IiBzdHlsZT0ic3RvcC1jb2xvcjojRjlGREZGIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4yNDUyIiBzdHlsZT0ic3RvcC1jb2xvcjojRTdGOEZGIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4zNDc2Ii'+
			'BzdHlsZT0ic3RvcC1jb2xvcjojQ0FGMEZGIi8+CiAgIDxzdG9wIG9mZnNldD0iMC40NjA2IiBzdHlsZT0ic3RvcC1jb2xvcjojQTFFNEZGIi8+CiAgIDxzdG9wIG9mZnNldD0iMC41ODI1IiBzdHlsZT0ic3RvcC1jb2xvcjojNkNENkZGIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43MDk4IiBzdHlsZT0ic3RvcC1jb2xvcjojMkRDNEZGIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NTU1IiBzdHlsZT0ic3RvcC1jb2xvcjojMTVCREZGIi8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwNkZGRiIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0i'+
			'TTQwLDUyLjVsLTAuMS0wLjFjLTMuOS00LjktMy41LTEyLjYsMC45LTE3LjFsNy44LTcuOGMwLjctMC43LDItMC43LDIuNywwbDcuOCw3LjhjNSw1LDUsMTMuMiwwLDE4LjNsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDNTMuNSw1OS4yLDQ0LjksNTguNyw0MCw1Mi41eiIvPgogIDxsaW5lYXJHcmFkaWVudCB5MT0iOTUuNzczOSIgeDE9IjQ5LjMyOTciIGlkPSJTVkdJRF8wMDAwMDA2NDM0ODI2MTA2MzM2NzkyMzkwMDAwMDAwNjEzNjg0NzA2NTE3ODYwMTY2M18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4Mj0iNTAuMzQ2NiIgeTI9IjE2LjQ1MjQiPgogICA8c3RvcCBvZmZzZXQ9Ij'+
			'kuMzE3OTk1ZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRiIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMTU3IiBzdHlsZT0ic3RvcC1jb2xvcjojRjlGREZGIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4yNDUyIiBzdHlsZT0ic3RvcC1jb2xvcjojRTdGOEZGIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4zNDc2IiBzdHlsZT0ic3RvcC1jb2xvcjojQ0FGMEZGIi8+CiAgIDxzdG9wIG9mZnNldD0iMC40NjA2IiBzdHlsZT0ic3RvcC1jb2xvcjojQTFFNEZGIi8+CiAgIDxzdG9wIG9mZnNldD0iMC41ODI1IiBzdHlsZT0ic3RvcC1jb2xvcjojNkNENkZGIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43MDk4IiBz'+
			'dHlsZT0ic3RvcC1jb2xvcjojMkRDNEZGIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NTU1IiBzdHlsZT0ic3RvcC1jb2xvcjojMTVCREZGIi8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwNkZGRiIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8wMDAwMDA2NDM0ODI2MTA2MzM2NzkyMzkwMDAwMDAwNjEzNjg0NzA2NTE3ODYwMTY2M18pOyIgZD0iTTc0LjEsMTkuNEw3NC4xLDE5LjQmI3hkOyYjeGE7JiN4OTsmI3g5O0M2MC44LDYsMzkuMiw2LDI1LjksMTkuNGwwLDBjLTEzLjMsMTMuMy0xMy4zLDM0LjksMCw0OC4ybD'+
			'E4LjgsMTguOGMyLjksMi45LDcuNywyLjksMTAuNiwwbDE4LjgtMTguOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qzg3LjQsNTQuMyw4Ny40LDMyLjcsNzQuMSwxOS40eiBNNTAsNjguNmMtMTMuOSwwLTI1LjEtMTEuMi0yNS4xLTI1LjFjMC0xMy45LDExLjItMjUuMSwyNS4xLTI1LjFjMTMuOSwwLDI1LjEsMTEuMiwyNS4xLDI1LjEmI3hkOyYjeGE7JiN4OTsmI3g5O0M3NS4xLDU3LjQsNjMuOSw2OC42LDUwLDY4LjZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_pozodeagua.appendChild(me._svg_6);
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggDx=0;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 102px;';
		hs+='height: 22px;';
		hs+='background: #e7e7e7;';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_pozodeagua'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_5.style[domTransition]='';
				if (me._text_5.ggCurrentLogicStateVisible == 0) {
					me._text_5.style.visibility=(Number(me._text_5.style.opacity)>0||!me._text_5.style.opacity)?'inherit':'hidden';
					me._text_5.ggVisible=true;
				}
				else {
					me._text_5.style.visibility="hidden";
					me._text_5.ggVisible=false;
				}
			}
		}
		me._text_5.onmouseover=function (e) {
			me.elementMouseOver['text_5']=true;
		}
		me._text_5.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_5__text)
					return;
				}
			}
			me.elementMouseOver['text_5']=false;
		}
		me._text_5.ontouchend=function (e) {
			me.elementMouseOver['text_5']=false;
		}
		me._text_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_pozodeagua.appendChild(me._text_5);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['text_5']) {
					me._text_5.style[domTransition]='none';
					me._text_5.style.visibility=(Number(me._text_5.style.opacity)>0||!me._text_5.style.opacity)?'inherit':'hidden';
					me._text_5.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._ht_pozodeagua;
	};
	function SkinHotspotClass_ht_tag_georeferencia_smallx(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_smallx=document.createElement('div');
		el.ggId="ht_tag_georeferencia_smallx";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 461px;';
		hs+='position : absolute;';
		hs+='top : 263px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_smallx.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_smallx.onclick=function (e) {
			player.setVariableValue('vis_info_popup', !player.getVariableValue('vis_info_popup'));
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			skin._external_1.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallx.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallx.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallx.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_smallx.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag1=document.createElement('div');
		els=me._subtag1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallx.appendChild(me._subtag1);
		el=me._titletag1=document.createElement('div');
		els=me._titletag1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -187px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_smallx.appendChild(me._titletag1);
		el=me._circle1=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_smallx.appendChild(me._circle1);
		el=me._linev1=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_smallx.appendChild(me._linev1);
		me.__div = me._ht_tag_georeferencia_smallx;
	};
	function SkinHotspotClass_ht_tag_georeferencia_mediumleftespecial(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_mediumleftespecial=document.createElement('div');
		el.ggId="ht_tag_georeferencia_mediumLeftEspecial";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 127px;';
		hs+='position : absolute;';
		hs+='top : 285px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_mediumleftespecial.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_mediumleftespecial.onclick=function (e) {
			player.setVariableValue('vis_info_popup', !player.getVariableValue('vis_info_popup'));
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			skin._external_1.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumleftespecial.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumleftespecial.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumleftespecial.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_mediumleftespecial.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag0=document.createElement('div');
		els=me._subtag0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : -61px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumleftespecial.appendChild(me._subtag0);
		el=me._titletag0=document.createElement('div');
		els=me._titletag0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : -79px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #001ddf;';
		hs+='background: rgba(0,29,223,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumleftespecial.appendChild(me._titletag0);
		el=me._circle0=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_mediumleftespecial.appendChild(me._circle0);
		el=me._linev0=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 63px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_mediumleftespecial.appendChild(me._linev0);
		me.__div = me._ht_tag_georeferencia_mediumleftespecial;
	};
	function SkinHotspotClass_ht_tag_georeferencia_largeleftespecial(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tag_georeferencia_largeleftespecial=document.createElement('div');
		el.ggId="ht_tag_georeferencia_largeLeftEspecial";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 262px;';
		hs+='position : absolute;';
		hs+='top : 288px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tag_georeferencia_largeleftespecial.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tag_georeferencia_largeleftespecial.onclick=function (e) {
			player.setVariableValue('vis_info_popup', !player.getVariableValue('vis_info_popup'));
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			skin._external_1.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeleftespecial.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeleftespecial.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeleftespecial.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tag_georeferencia_largeleftespecial.ggUpdatePosition=function (useTransition) {
		}
		el=me._subtag=document.createElement('div');
		els=me._subtag__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="subTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : -100px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._subtag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._subtag.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeleftespecial.appendChild(me._subtag);
		el=me._titletag=document.createElement('div');
		els=me._titletag__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="titleTag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : -118px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 0px 10px rgba(0,0,0,0.5); font-weight:400;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #001ddf;';
		hs+='background: rgba(0,29,223,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		hs+="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color:white;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._titletag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._titletag.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeleftespecial.appendChild(me._titletag);
		el=me._circle=document.createElement('div');
		el.ggId="circle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle.ggUpdatePosition=function (useTransition) {
		}
		me._ht_tag_georeferencia_largeleftespecial.appendChild(me._circle);
		el=me._linev=document.createElement('div');
		el.ggId="linev";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 102px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 0px 4px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linev.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._linev.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tag_georeferencia_largeleftespecial.appendChild(me._linev);
		me.__div = me._ht_tag_georeferencia_largeleftespecial;
	};
	function SkinHotspotClass_ht_vercompleto(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_vercompleto=document.createElement('div');
		el.ggId="ht_vercompleto";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 192px;';
		hs+='position : absolute;';
		hs+='top : 73px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_vercompleto.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_vercompleto.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_vercompleto.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_vercompleto.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_vercompleto.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_vercompleto.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_8__img.setAttribute('src',basePath + 'images/svg_8.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 120px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_vercompleto.appendChild(me._svg_8);
		me.__div = me._ht_vercompleto;
	};
	function SkinHotspotClass_ht_aguas(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_aguas=document.createElement('div');
		el.ggId="ht_aguas";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_aguas.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_aguas.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_aguas.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_aguas.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_aguas.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_aguas.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_9=document.createElement('div');
		els=me._svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwIDIwMDsiIGlkPSJDYXBhXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMj'+
			'AwIDIwMCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDAuNywxNy41QzU2LjIsMTcuNSwyMCw1My42LDIwLDk4LjFjMCw0NC41LDM2LjIsODAuNiw4MC42LDgwLjZzODAuNi0zNi4yLDgwLjYtODAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE4MS4zLDUzLjYsMTQ1LjEsMTcuNSwxMDAuNywxNy41eiBNMTAwLjcsMjkuMWMyMi42LDAsNDIuNywxMC45LDU1LjMsMjcuN2MtMS4zLDIuNy0zLjgsNi43LTguMyw4LjljLTMuNCwxLjctNi43LDEuOC0xMC4yLDEuOCYjeGQ7JiN4'+
			'YTsmI3g5OyYjeDk7Yy00LjIsMC4xLTYuNC0wLjUtMTAuNC0xLjVjLTIuMi0wLjYtNS0xLjMtOC43LTJjLTEwLjktMi4xLTE4LjctMy43LTI4LjEtMS4xYy03LjcsMi4xLTEyLjksNi4xLTE1LjQsOEM2OSw3NS40LDY2LjYsNzkuMyw2NC4zLDgzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuOSwzLjEtMy42LDUuOS03LjcsOS43Yy0zLjMsMy03LjgsNy4xLTE0LjYsOC42Yy0zLjMsMC43LTYuNywwLjgtMTAuMSwwLjJjLTAuMS0xLjEtMC4xLTIuMy0wLjEtMy40JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMzEuNyw2MCw2Mi42LDI5LjEsMTAwLjcsMjkuMXogTTMzLjQsMTEzLjRjMSwwLjEsMiwwLjEsMywwLj'+
			'FjMi43LDAsNS4zLTAuMyw3LjktMC45YzkuOS0yLjIsMTYuMi04LDIwLTExLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjMtNC45LDcuNy04LjgsOS44LTEyLjJjMi0zLjMsMy42LTUuOCw3LjctOWMyLTEuNiw1LjgtNC41LDExLjMtNmM2LjgtMS44LDEyLjUtMC43LDIyLjksMS4zYzMuNCwwLjcsNS45LDEuMyw4LjEsMS45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNC4zLDEuMSw3LjYsMiwxMy41LDEuOWM0LjItMC4xLDkuNS0wLjEsMTUuMy0zYzMuOC0xLjksNy4xLTQuNyw5LjgtOC4yYzIuOSw2LDUsMTIuNSw2LjEsMTkuM2MtMS41LDItMy4zLDMuOC01LjQsNS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtj'+
			'LTQuOSwzLjUtOS44LDQuMy0xMy4xLDQuOWMtNS4xLDAuOC0xMC40LDAuNy0xNS42LTAuNmMtMS45LTAuNC0zLjgsMC43LTQuMiwyLjZjLTAuNCwxLjksMC43LDMuOCwyLjYsNC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMy42LDAuOCw3LjIsMS4zLDEwLjksMS4zYzIuNSwwLDUtMC4yLDcuNS0wLjZjMy43LTAuNiw5LjgtMS42LDE2LTYuMWMwLjctMC41LDEuNC0xLjEsMi4xLTEuN2MwLDAuNiwwLDEuMSwwLDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMy43LTAuMyw3LjQtMC45LDEwLjljLTEuMSwxLjEtMi4zLDItMy42LDIuN2MtMy4zLDEuNy02LjcsMS43LTEwLjIsMS44Yy0xLjYsMC0yLjksMC'+
			'00LjItMC4yYy01LjQtMC43LTkuMS0xLjctMTIuNC0yLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuMi0xLjQtMC40LTIuMS0wLjZjLTQuMi0xLjEtMTUuNS00LjItMjctMC4zYy02LjUsMi4yLTEwLjcsNS44LTEzLjgsOC40Yy01LjQsNC42LTcuNCw4LjItOS4zLDExLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS40LDIuNC0yLjUsNC41LTUuMyw3LjJjLTcuOSw3LjgtMTcuNCwxMC0yMS4xLDEwLjVjLTIuNCwwLjQtNC44LDAuNS03LjIsMC40QzQzLjMsMTM4LjUsMzYuNCwxMjYuNywzMy40LDExMy40eiBNMTAwLjcsMTY3LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMTIuNiwwLTI0LjQtMy40'+
			'LTM0LjUtOS4zYzYtMS41LDE1LjEtNSwyMy0xMi44YzMuOS0zLjksNS43LTcsNy4yLTkuN2MxLjYtMi44LDIuOS01LjEsNi43LTguM2MyLjctMi4zLDUuNS00LjcsOS45LTYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzguMi0yLjgsMTYuNy0wLjUsMjAuMywwLjVjMC42LDAuMiwxLjIsMC4zLDEuOSwwLjVjMy4zLDAuOSw3LjksMi4yLDE0LjIsM2MxLjgsMC4yLDMuNywwLjMsNS45LDAuM2MyLjYsMCw1LjgtMC4xLDkuMi0wLjkmI3hkOyYjeGE7JiN4OTsmI3g5O0MxNTQuMiwxNDkuMywxMjkuNSwxNjcuMSwxMDAuNywxNjcuMXoiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzMuNSw1MS40YzMuNy'+
			'wwLDMuNy01LjgsMC01LjhDNjkuOCw0NS42LDY5LjgsNTEuNCw3My41LDUxLjR6Ii8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyMi40LDUxLjRjMy43LDAsMy43LTUuOCwwLTUuOEMxMTguNiw0NS42LDExOC42LDUxLjQsMTIyLjQsNTEuNHoiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDQuNCw4MS4xYzMuNywwLDMuNy01LjgsMC01LjhDNDAuNiw3NS4zLDQwLjYsODEuMSw0NC40LDgxLjF6Ii8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTk1LjEsMTUzLjljLTMuNywwLTMuNyw1LjgsMCw1LjhDOTguOCwxNTkuNyw5OC44LDE1My45LDk1LjEsMTUzLjl6Ii8+CiAgPHBhdGggY2xhc3M9'+
			'InN0MCIgZD0iTTEyNS43LDE0OC43Yy0zLjcsMC0zLjcsNS44LDAsNS44QzEyOS41LDE1NC42LDEyOS41LDE0OC43LDEyNS43LDE0OC43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMTYuMywxMjkuM2MtMy43LDAtMy43LDUuOCwwLDUuOEMxMjAsMTM1LjEsMTIwLjEsMTI5LjMsMTE2LjMsMTI5LjN6Ii8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0MS41LDEzMC41Yy0zLjcsMC0zLjcsNS44LDAsNS44QzE0NS4yLDEzNi40LDE0NS4yLDEzMC41LDE0MS41LDEzMC41eiIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02Mi4zLDEzOGM1LjEtMi4yLDguMi01LjcsMTAtOC4yYzEuMS0xLj'+
			'YsMC43LTMuOC0wLjktNC45Yy0xLjYtMS4xLTMuOC0wLjctNC45LDAuOWMtMS4yLDEuOC0zLjUsNC4yLTcsNS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTMuNSwxLjUtNi43LDEuNS04LjgsMS4zYy0xLjktMC4yLTMuNywxLjEtMy45LDNjLTAuMiwxLjksMS4xLDMuNywzLDMuOWMwLjksMC4xLDEuOSwwLjIsMywwLjJDNTUuNSwxNDAsNTguOCwxMzkuNSw2Mi4zLDEzOHoiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjYuOCwxMjAuMmMwLjQsMCwwLjgtMC4xLDEuMy0wLjJjNS41LTIuMSwxMC4yLTUuMiwxNC05LjFjMy40LTMuNSw1LTYuNiw2LjQtOS4zYzEuNi0zLDIuNy01LjEsNS43LTcuMSYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjYsNS41LTMuNCwxMS4yLTMuMWMyLDAuMSwzLjIsMC41LDUsMS4yYzEuNCwwLjUsMy4yLDEuMiw1LjcsMS43YzQuOCwxLjEsOS45LDEuMywxNS4yLDAuN2MxLjktMC4yLDMuMy0yLDMtMy45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMi0xLjktMi0zLjMtMy45LTNjLTQuNCwwLjYtOC43LDAuNC0xMi43LTAuNWMtMi4xLTAuNS0zLjUtMS00LjgtMS41Yy0yLTAuNy0zLjktMS41LTctMS42Yy03LjctMC40LTEzLjgsMy4xLTE1LjUsNC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuNSwzLTYuMyw2LjQtOC4xLDkuN2MtMS4zLDIuNC0yLjYsNS01LjMsNy43Yy'+
			'0zLjEsMy4yLTYuOSw1LjctMTEuNSw3LjRjLTEuOCwwLjctMi43LDIuNy0yLDQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzY0LjEsMTE5LjQsNjUuNCwxMjAuMiw2Ni44LDEyMC4yeiIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_9__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_aguas.appendChild(me._svg_9);
		el=me._text_8=document.createElement('div');
		els=me._text_8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8";
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 23px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #208ff7;';
		hs+='background: rgba(32,143,247,0.392157);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 9px;';
		hs+=cssPrefix + 'border-radius: 9px;';
		hs+='color: rgba(236,236,236,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_aguas.appendChild(me._text_8);
		me.__div = me._ht_aguas;
	};
	function SkinHotspotClass_ht_arrow_d(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_arrow_d=document.createElement('div');
		el.ggId="ht_arrow_d";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 131px;';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_arrow_d.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_arrow_d.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_arrow_d.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_arrow_d.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_arrow_d.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_arrow_d.ggUpdatePosition=function (useTransition) {
		}
		el=me._arrow=document.createElement('div');
		els=me._arrow__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="arrow";
		el.ggDx=-11;
		el.ggDy=41;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 245px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 239px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 239px;';
		hs+='height: 245px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="transform: rotate(180deg);";
		els.setAttribute('style',hs);
		els.innerHTML="    <div class=\"arrow\"><br\/>        <span><\/span><br\/>        <span><\/span><br\/>        <span><\/span><br\/>    <\/div>";
		el.appendChild(els);
		me._arrow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._arrow.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_arrow_d.appendChild(me._arrow);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -107px;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Arrastrar";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_arrow_d.appendChild(me._text_2);
		me.ggUse3d=true;
		me.gg3dDistance=500;
		me.__div = me._ht_arrow_d;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_noDisponible') {
			hotspot.skinid = 'ht_noDisponible';
			hsinst = new SkinHotspotClass_ht_nodisponible(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_nodisponible_mouseover();;
		} else
		if (hotspot.skinid=='ht_reservado') {
			hotspot.skinid = 'ht_reservado';
			hsinst = new SkinHotspotClass_ht_reservado(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_reservado_mouseover();;
			me.callChildLogicBlocksHotspot_ht_reservado_mouseover();;
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_largeRight') {
			hotspot.skinid = 'ht_tag_georeferencia_largeRight';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_largeright(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_largeLeft') {
			hotspot.skinid = 'ht_tag_georeferencia_largeLeft';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_largeleft(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_mediumRight') {
			hotspot.skinid = 'ht_tag_georeferencia_mediumRight';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_mediumright(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_arrow_d') {
			hotspot.skinid = 'ht_arrow_d';
			hsinst = new SkinHotspotClass_ht_arrow_d0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_mediumLeft') {
			hotspot.skinid = 'ht_tag_georeferencia_mediumLeft';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_mediumleft(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_smallLeft') {
			hotspot.skinid = 'ht_tag_georeferencia_smallLeft';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_smallleft(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_smallRight') {
			hotspot.skinid = 'ht_tag_georeferencia_smallRight';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_smallright(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_tag_geoinfo') {
			hotspot.skinid = 'ht_tag_geoinfo';
			hsinst = new SkinHotspotClass_ht_tag_geoinfo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_tag_geoinfo_changenode();;
			me.callChildLogicBlocksHotspot_ht_tag_geoinfo_mouseover();;
			me.callChildLogicBlocksHotspot_ht_tag_geoinfo_varchanged_tagsOn();;
		} else
		if (hotspot.skinid=='ht_tag_geo') {
			hotspot.skinid = 'ht_tag_geo';
			hsinst = new SkinHotspotClass_ht_tag_geo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_tag_geo_changenode();;
			me.callChildLogicBlocksHotspot_ht_tag_geo_varchanged_tagsOn();;
		} else
		if (hotspot.skinid=='ht_tag_background') {
			hotspot.skinid = 'ht_tag_background';
			hsinst = new SkinHotspotClass_ht_tag_background(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_promocion') {
			hotspot.skinid = 'ht_promocion';
			hsinst = new SkinHotspotClass_ht_promocion(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_promocion_mouseover();;
			me.callChildLogicBlocksHotspot_ht_promocion_mouseover();;
		} else
		if (hotspot.skinid=='ht_nodo_rounded') {
			hotspot.skinid = 'ht_nodo_rounded';
			hsinst = new SkinHotspotClass_ht_nodo_rounded(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_nodo_rounded_changenode();;
			me.callChildLogicBlocksHotspot_ht_nodo_rounded_mouseover();;
		} else
		if (hotspot.skinid=='ht_tag_acceso') {
			hotspot.skinid = 'ht_tag_acceso';
			hsinst = new SkinHotspotClass_ht_tag_acceso(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_tag_acceso_changenode();;
			me.callChildLogicBlocksHotspot_ht_tag_acceso_varchanged_tagsOn();;
		} else
		if (hotspot.skinid=='ht_nodo_roundedB') {
			hotspot.skinid = 'ht_nodo_roundedB';
			hsinst = new SkinHotspotClass_ht_nodo_roundedb(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_nodo_roundedb_mouseover();;
		} else
		if (hotspot.skinid=='ht_disponible') {
			hotspot.skinid = 'ht_disponible';
			hsinst = new SkinHotspotClass_ht_disponible(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_disponible_mouseover();;
			me.callChildLogicBlocksHotspot_ht_disponible_mouseover();;
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_smallRightYellow') {
			hotspot.skinid = 'ht_tag_georeferencia_smallRightYellow';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_smallrightyellow(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_mediumRight_Blue') {
			hotspot.skinid = 'ht_tag_georeferencia_mediumRight_Blue';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_mediumright_blue(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_bosque') {
			hotspot.skinid = 'ht_bosque';
			hsinst = new SkinHotspotClass_ht_bosque(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_bosque_mouseover();;
		} else
		if (hotspot.skinid=='ht_playa') {
			hotspot.skinid = 'ht_playa';
			hsinst = new SkinHotspotClass_ht_playa(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_playa_mouseover();;
		} else
		if (hotspot.skinid=='ht_parche1') {
			hotspot.skinid = 'ht_parche1';
			hsinst = new SkinHotspotClass_ht_parche1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_parche1_changenode();;
			me.callChildLogicBlocksHotspot_ht_parche1_varchanged_MostrarParche();;
		} else
		if (hotspot.skinid=='activar_parche') {
			hotspot.skinid = 'activar_parche';
			hsinst = new SkinHotspotClass_activar_parche0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='activar_parche') {
			hotspot.skinid = 'activar_parche';
			hsinst = new SkinHotspotClass_activar_parche(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_tagB') {
			hotspot.skinid = 'ht_tagB';
			hsinst = new SkinHotspotClass_ht_tagb(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_tagb_changenode();;
			me.callChildLogicBlocksHotspot_ht_tagb_varchanged_tagsOn();;
			me.callChildLogicBlocksHotspot_ht_tagb_varchanged_taganimation();;
		} else
		if (hotspot.skinid=='ht_tagBunder') {
			hotspot.skinid = 'ht_tagBunder';
			hsinst = new SkinHotspotClass_ht_tagbunder(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_tagbunder_changenode();;
			me.callChildLogicBlocksHotspot_ht_tagbunder_varchanged_tagsOn();;
			me.callChildLogicBlocksHotspot_ht_tagbunder_varchanged_taganimation();;
		} else
		if (hotspot.skinid=='ht_tag_geogris') {
			hotspot.skinid = 'ht_tag_geogris';
			hsinst = new SkinHotspotClass_ht_tag_geogris(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_tag_geogris_changenode();;
			me.callChildLogicBlocksHotspot_ht_tag_geogris_varchanged_tagsOn();;
		} else
		if (hotspot.skinid=='ht_Pozodeagua') {
			hotspot.skinid = 'ht_Pozodeagua';
			hsinst = new SkinHotspotClass_ht_pozodeagua(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_pozodeagua_mouseover();;
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_smallx') {
			hotspot.skinid = 'ht_tag_georeferencia_smallx';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_smallx(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_mediumLeftEspecial') {
			hotspot.skinid = 'ht_tag_georeferencia_mediumLeftEspecial';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_mediumleftespecial(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_tag_georeferencia_largeLeftEspecial') {
			hotspot.skinid = 'ht_tag_georeferencia_largeLeftEspecial';
			hsinst = new SkinHotspotClass_ht_tag_georeferencia_largeleftespecial(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_vercompleto') {
			hotspot.skinid = 'ht_vercompleto';
			hsinst = new SkinHotspotClass_ht_vercompleto(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_aguas') {
			hotspot.skinid = 'ht_aguas';
			hsinst = new SkinHotspotClass_ht_aguas(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
			hotspot.skinid = 'ht_arrow_d';
			hsinst = new SkinHotspotClass_ht_arrow_d(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_noDisponible']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_noDisponible'].length; i++) {
				hotspotTemplates['ht_noDisponible'][i] = null;
			}
		}
		if(hotspotTemplates['ht_reservado']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_reservado'].length; i++) {
				hotspotTemplates['ht_reservado'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_largeRight']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_largeRight'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_largeRight'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_largeLeft']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_largeLeft'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_largeLeft'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_mediumRight']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_mediumRight'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_mediumRight'][i] = null;
			}
		}
		if(hotspotTemplates['ht_arrow_d']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_arrow_d'].length; i++) {
				hotspotTemplates['ht_arrow_d'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_mediumLeft']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_mediumLeft'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_mediumLeft'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_smallLeft']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_smallLeft'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_smallLeft'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_smallRight']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_smallRight'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_smallRight'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_geoinfo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geoinfo'].length; i++) {
				hotspotTemplates['ht_tag_geoinfo'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_geo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geo'].length; i++) {
				hotspotTemplates['ht_tag_geo'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_background']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_background'].length; i++) {
				hotspotTemplates['ht_tag_background'][i] = null;
			}
		}
		if(hotspotTemplates['ht_promocion']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_promocion'].length; i++) {
				hotspotTemplates['ht_promocion'][i] = null;
			}
		}
		if(hotspotTemplates['ht_nodo_rounded']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodo_rounded'].length; i++) {
				hotspotTemplates['ht_nodo_rounded'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_acceso']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_acceso'].length; i++) {
				hotspotTemplates['ht_tag_acceso'][i] = null;
			}
		}
		if(hotspotTemplates['ht_nodo_roundedB']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodo_roundedB'].length; i++) {
				hotspotTemplates['ht_nodo_roundedB'][i] = null;
			}
		}
		if(hotspotTemplates['ht_disponible']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_disponible'].length; i++) {
				hotspotTemplates['ht_disponible'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_smallRightYellow']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_smallRightYellow'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_smallRightYellow'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_mediumRight_Blue']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_mediumRight_Blue'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_mediumRight_Blue'][i] = null;
			}
		}
		if(hotspotTemplates['ht_bosque']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_bosque'].length; i++) {
				hotspotTemplates['ht_bosque'][i] = null;
			}
		}
		if(hotspotTemplates['ht_playa']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_playa'].length; i++) {
				hotspotTemplates['ht_playa'][i] = null;
			}
		}
		if(hotspotTemplates['ht_parche1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_parche1'].length; i++) {
				hotspotTemplates['ht_parche1'][i] = null;
			}
		}
		if(hotspotTemplates['activar_parche']) {
			var i;
			for(i = 0; i < hotspotTemplates['activar_parche'].length; i++) {
				hotspotTemplates['activar_parche'][i] = null;
			}
		}
		if(hotspotTemplates['activar_parche']) {
			var i;
			for(i = 0; i < hotspotTemplates['activar_parche'].length; i++) {
				hotspotTemplates['activar_parche'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tagB']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tagB'].length; i++) {
				hotspotTemplates['ht_tagB'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tagBunder']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tagBunder'].length; i++) {
				hotspotTemplates['ht_tagBunder'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_geogris']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_geogris'].length; i++) {
				hotspotTemplates['ht_tag_geogris'][i] = null;
			}
		}
		if(hotspotTemplates['ht_Pozodeagua']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Pozodeagua'].length; i++) {
				hotspotTemplates['ht_Pozodeagua'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_smallx']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_smallx'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_smallx'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_mediumLeftEspecial']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_mediumLeftEspecial'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_mediumLeftEspecial'][i] = null;
			}
		}
		if(hotspotTemplates['ht_tag_georeferencia_largeLeftEspecial']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_tag_georeferencia_largeLeftEspecial'].length; i++) {
				hotspotTemplates['ht_tag_georeferencia_largeLeftEspecial'][i] = null;
			}
		}
		if(hotspotTemplates['ht_vercompleto']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_vercompleto'].length; i++) {
				hotspotTemplates['ht_vercompleto'][i] = null;
			}
		}
		if(hotspotTemplates['ht_aguas']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_aguas'].length; i++) {
				hotspotTemplates['ht_aguas'][i] = null;
			}
		}
		if(hotspotTemplates['ht_arrow_d']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_arrow_d'].length; i++) {
				hotspotTemplates['ht_arrow_d'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 110px; height: 106px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 95px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._description=document.createElement('div');
		els=me._description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text cardDescription";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 85px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.information;
		el.appendChild(els);
		me._description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._description.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._description);
		el=me._title=document.createElement('div');
		els=me._title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text cardTitle";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : inherit;';
		hs+='width : 78px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 78px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._title);
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDI1LjIgMjgzLjU7IiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMC'+
			'AwIDQyNS4yIDI4My41Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojQjNCNUMxO30mI3hkOwoJLnN0MXtmaWxsOiMxOTE4MTc7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzY3LjEsMjgzLjVoLTMwOWMtMzEuNSwwLTU2LjktMjUuNS01Ni45LTU2LjlWNTYuOUMxLjEsMjUuNSwyNi42LDAsNTguMSwwaDMwOS4xYzMxLjUsMCw1Ni45LDI1LjUsNTYuOSw1Ni45JiN4ZDsmI3hhOyYjeDk7djE2OS42QzQyNC4xLDI1OCwzOTguNiwyODMuNSwzNjcuMSwyODMuNXoiLz4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNDkuNiwxOTcuOGMt'+
			'MjIuNSwyMy42LTM5LjMsMzUuNC01MC40LDM1LjRjLTYuMSwwLTExLjMtMy4xLTE1LjYtOS40Yy00LjItNi4zLTYuMy0xNC4yLTYuMy0yMy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yMC41LDYuOS00OC44LDIwLjctODVsMzYuNi03LjZoMS43TDIyMiwxNTIuNmMtNiwxOC42LTguOSwzMS45LTguOSwzOS45YzAsMy4yLDAuNyw1LjcsMi4xLDcuN2MxLjQsMiwzLjEsMyw1LjMsMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzMuNywwLDcuNS0xLjQsMTEuMy00LjFjMy44LTIuNyw5LjgtOC43LDE3LjktMTcuOFYxOTcuOHogTTI0Ni43LDUxLjJjMCwyMy4xLTguNSwzNC42LTI1LjUsMzQuNmMtOC4zLDAtMT'+
			'UuMy0yLjUtMjEuMi03LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjYtOC41LDkuOS0xOCwxMy0yOC41YzcuNiw0LjcsMTMuNyw3LjEsMTguMyw3LjFDMjM2LjUsNTYuOCwyNDEuNiw1NC45LDI0Ni43LDUxLjJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_11__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['svg_11'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_11.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._svg_11.ggCurrentLogicStateScaling == 0) {
					me._svg_11.ggParameter.sx = 1.1;
					me._svg_11.ggParameter.sy = 1.1;
					me._svg_11.style[domTransform]=parameterToTransform(me._svg_11.ggParameter);
				}
				else {
					me._svg_11.ggParameter.sx = 1;
					me._svg_11.ggParameter.sy = 1;
					me._svg_11.style[domTransform]=parameterToTransform(me._svg_11.ggParameter);
				}
			}
		}
		me._svg_11.onclick=function (e) {
			skin._card_title.ggText=me.ggUserdata.title;
			skin._card_title.ggTextDiv.innerHTML=skin._card_title.ggText;
			if (skin._card_title.ggUpdateText) {
				skin._card_title.ggUpdateText=function() {
					var hs=me.ggUserdata.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._card_title.ggUpdatePosition) {
				skin._card_title.ggUpdatePosition();
			}
			skin._card_title.ggTextDiv.scrollTop = 0;
			skin._card_body.ggText=me.ggUserdata.description;
			skin._card_body.ggTextDiv.innerHTML=skin._card_body.ggText;
			if (skin._card_body.ggUpdateText) {
				skin._card_body.ggUpdateText=function() {
					var hs=me.ggUserdata.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._card_body.ggUpdatePosition) {
				skin._card_body.ggUpdatePosition();
			}
			skin._card_body.ggTextDiv.scrollTop = 0;
			skin._card_price.ggText=me.ggUserdata.information;
			skin._card_price.ggTextDiv.innerHTML=skin._card_price.ggText;
			if (skin._card_price.ggUpdateText) {
				skin._card_price.ggUpdateText=function() {
					var hs=me.ggUserdata.information;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._card_price.ggUpdatePosition) {
				skin._card_price.ggUpdatePosition();
			}
			skin._card_price.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_card', true);
			player.setVariableValue('enlaceTemporal', "{"+me.ggNodeId+"}");
		}
		me._svg_11.onmouseover=function (e) {
			me.elementMouseOver['svg_11']=true;
			me._svg_11.logicBlock_scaling();
		}
		me._svg_11.onmouseout=function (e) {
			me.elementMouseOver['svg_11']=false;
			me._svg_11.logicBlock_scaling();
		}
		me._svg_11.ontouchend=function (e) {
			me.elementMouseOver['svg_11']=false;
			me._svg_11.logicBlock_scaling();
		}
		me._svg_11.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._svg_11);
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius:10px;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['thumbnail_nodeimage'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._thumbnail_nodeimage.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._thumbnail_nodeimage.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._thumbnail_nodeimage.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._thumbnail_nodeimage.ggCurrentLogicStateScaling == 0) {
					me._thumbnail_nodeimage.ggParameter.sx = 1.1;
					me._thumbnail_nodeimage.ggParameter.sy = 1.1;
					me._thumbnail_nodeimage.style[domTransform]=parameterToTransform(me._thumbnail_nodeimage.ggParameter);
				}
				else {
					me._thumbnail_nodeimage.ggParameter.sx = 1;
					me._thumbnail_nodeimage.ggParameter.sy = 1;
					me._thumbnail_nodeimage.style[domTransform]=parameterToTransform(me._thumbnail_nodeimage.ggParameter);
				}
			}
		}
		me._thumbnail_nodeimage.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_card', false);
			skin._main_title.ggText=me.ggUserdata.title;
			skin._main_title.ggTextDiv.innerHTML=skin._main_title.ggText;
			if (skin._main_title.ggUpdateText) {
				skin._main_title.ggUpdateText=function() {
					var hs=me.ggUserdata.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._main_title.ggUpdatePosition) {
				skin._main_title.ggUpdatePosition();
			}
			skin._main_title.ggTextDiv.scrollTop = 0;
			player.setVariableValue('enlaceTemporal', "{"+me.ggNodeId+"}");
		}
		me._thumbnail_nodeimage.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=true;
			me._thumbnail_nodeimage.logicBlock_scaling();
		}
		me._thumbnail_nodeimage.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
			me._thumbnail_nodeimage.logicBlock_scaling();
		}
		me._thumbnail_nodeimage.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
			me._thumbnail_nodeimage.logicBlock_scaling();
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._thumbnail_nodeimage);
		me.__div.appendChild(me._container_1);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle coverNoDisponible";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 7px;';
		hs+='border-radius : 7px;';
		hs+='background : rgba(6,21,29,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 98px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("nodisponible") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_1.style[domTransition]='';
				if (me._rectangle_1.ggCurrentLogicStateVisible == 0) {
					me._rectangle_1.style.visibility=(Number(me._rectangle_1.style.opacity)>0||!me._rectangle_1.style.opacity)?'inherit':'hidden';
					me._rectangle_1.ggVisible=true;
				}
				else {
					me._rectangle_1.style.visibility="hidden";
					me._rectangle_1.ggVisible=false;
				}
			}
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.__div.appendChild(me._rectangle_1);
		el=me._text_14=document.createElement('div');
		els=me._text_14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=1;
		el.ggDy=-9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text cardTitle";
		el.ggType='text';
		hs ='';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 90px;';
		hs+='height: 41px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="NO <br\/>DISPONIBLE";
		el.appendChild(els);
		me._text_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("nodisponible") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_14.style[domTransition]='';
				if (me._text_14.ggCurrentLogicStateVisible == 0) {
					me._text_14.style.visibility=(Number(me._text_14.style.opacity)>0||!me._text_14.style.opacity)?'inherit':'hidden';
					me._text_14.ggVisible=true;
				}
				else {
					me._text_14.style.visibility="hidden";
					me._text_14.ggVisible=false;
				}
			}
		}
		me._text_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__div.appendChild(me._text_14);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: "Roboto Condensed", sans-serif; font-size: 14px;} .cardTitle { font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 16px;} .cardDescription{ font-family: "Roboto Condensed", sans-serif; font-size: 12px} .cardPrice{font-family: "Roboto Condensed", sans-serif; font-weight: 700; font-size: 14px;} .mainTitle{font-weight: 700; font-size: 16px;} .arrow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); transform: rotate(180deg); } .arrow span { display: block; width: 1.5vw; height: 1.5vw; border-bottom: 5px solid white; border-right: 5px solid white; transform: rotate(45deg); margin: -10px; animation: animate 2s infinite; } .arrow span:nth-child(2) { animation-delay: -0.2s; } .arrow span:nth-child(3) { animation-delay: -0.4s; } @keyframes animate { 0% { opacity: 0; transform: rotate(45deg) translate(-20px, -20px); } 50% { opacity: 1; } 100% { opacity: 0; transform: rotate(45deg) translate(20px, 20px); } }'));
	document.head.appendChild(style);
	me._information.logicBlock_scaling();
	me._compasspointer1.logicBlock_visible();
	me._beamdot.logicBlock_visible();
	me._thumbnail_menu.logicBlock_alpha();
	me._thumbnail_hide_button.logicBlock_alpha();
	me._thumbnail_show_button.logicBlock_alpha();
	me._main_title.logicBlock_text();
	me._menu_inferior.logicBlock_visible();
	me._svg_4.logicBlock_visible();
	me._buttonmasterplan.logicBlock_visible();
	me._text_infotagsgeo.logicBlock_visible();
	me._stop_rotate_image.logicBlock_visible();
	me._start_rotate_image.logicBlock_visible();
	me._information.logicBlock_visible();
	me._text_4.logicBlock_visible();
	me._circulo.logicBlock_visible();
	me._card.logicBlock_visible();
	me._compass.logicBlock_position();
	me._compass.logicBlock_alpha();
	me._tt_pano_prev.logicBlock_position();
	me._tt_pano_next.logicBlock_position();
	me._textoguia.logicBlock_alpha();
	me._buttonmasterplan.logicBlock_alpha();
	player.addListener('sizechanged', function(args) { me._information.logicBlock_scaling(); });
	player.addListener('changenode', function(args) { me._compasspointer1.logicBlock_visible();me._beamdot.logicBlock_visible();me._thumbnail_menu.logicBlock_alpha();me._thumbnail_hide_button.logicBlock_alpha();me._thumbnail_show_button.logicBlock_alpha();me._main_title.logicBlock_text();me._menu_inferior.logicBlock_visible();me._svg_4.logicBlock_visible();me._buttonmasterplan.logicBlock_visible();me._text_infotagsgeo.logicBlock_visible();me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible();me._information.logicBlock_visible();me._text_4.logicBlock_visible();me._circulo.logicBlock_visible();me._card.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._compass.logicBlock_position();me._compass.logicBlock_alpha();me._tt_pano_prev.logicBlock_position();me._tt_pano_next.logicBlock_position(); });
	player.addListener('positionchanged', function(args) { me._textoguia.logicBlock_alpha();me._buttonmasterplan.logicBlock_alpha(); });
	player.addListener('autorotatechanged', function(args) { me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._tt_pano_prev.logicBlock_position();me._tt_pano_next.logicBlock_position(); });
	player.addListener('varchanged_vis_thumbnail_menu', function(args) { me._thumbnail_menu.logicBlock_alpha();me._thumbnail_hide_button.logicBlock_alpha();me._thumbnail_show_button.logicBlock_alpha(); });
	player.addListener('varchanged_popup_geoInfo', function(args) { me._text_infotagsgeo.logicBlock_visible(); });
	player.addListener('varchanged_tagsOn', function(args) { me._information.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._information.logicBlock_visible(); });
	player.addListener('varchanged_vis_card', function(args) { me._card.logicBlock_visible(); });
	player.addListener('varchanged_var_compass', function(args) { me._compasspointer1.logicBlock_visible();me._beamdot.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_tag_geoinfo_changenode();me.callChildLogicBlocksHotspot_ht_tag_geo_changenode();me.callChildLogicBlocksHotspot_ht_nodo_rounded_changenode();me.callChildLogicBlocksHotspot_ht_tag_acceso_changenode();me.callChildLogicBlocksHotspot_ht_parche1_changenode();me.callChildLogicBlocksHotspot_ht_tagb_changenode();me.callChildLogicBlocksHotspot_ht_tagbunder_changenode();me.callChildLogicBlocksHotspot_ht_tag_geogris_changenode(); });
	player.addListener('positionchanged', function(args) { me.callChildLogicBlocksHotspot_ht_arrow_d0_positionchanged(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_reservado_mouseover();me.callChildLogicBlocksHotspot_ht_promocion_mouseover();me.callChildLogicBlocksHotspot_ht_disponible_mouseover(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_nodisponible_mouseover();me.callChildLogicBlocksHotspot_ht_reservado_mouseover();me.callChildLogicBlocksHotspot_ht_tag_geoinfo_mouseover();me.callChildLogicBlocksHotspot_ht_promocion_mouseover();me.callChildLogicBlocksHotspot_ht_nodo_rounded_mouseover();me.callChildLogicBlocksHotspot_ht_nodo_roundedb_mouseover();me.callChildLogicBlocksHotspot_ht_disponible_mouseover();me.callChildLogicBlocksHotspot_ht_bosque_mouseover();me.callChildLogicBlocksHotspot_ht_playa_mouseover();me.callChildLogicBlocksHotspot_ht_pozodeagua_mouseover(); });
	player.addListener('varchanged_tagsOn', function(args) { me.callChildLogicBlocksHotspot_ht_tag_geoinfo_varchanged_tagsOn();me.callChildLogicBlocksHotspot_ht_tag_geo_varchanged_tagsOn();me.callChildLogicBlocksHotspot_ht_tag_acceso_varchanged_tagsOn();me.callChildLogicBlocksHotspot_ht_tagb_varchanged_tagsOn();me.callChildLogicBlocksHotspot_ht_tagbunder_varchanged_tagsOn();me.callChildLogicBlocksHotspot_ht_tag_geogris_varchanged_tagsOn(); });
	player.addListener('varchanged_MostrarParche', function(args) { me.callChildLogicBlocksHotspot_ht_parche1_varchanged_MostrarParche(); });
	player.addListener('varchanged_taganimation', function(args) { me.callChildLogicBlocksHotspot_ht_tagb_varchanged_taganimation();me.callChildLogicBlocksHotspot_ht_tagbunder_varchanged_taganimation(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};