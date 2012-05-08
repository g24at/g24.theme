function MM_preloadImages() { //3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function preLoad()
{
	MM_preloadImages(
	'http://dev.g24.at/themes/g24/images/subnav-bg-start.gif',
	'http://dev.g24.at/themes/g24/images/subnav-bg.gif',
	'http://dev.g24.at/themes/g24/images/subnav-bg-ende.gif',
	'http://dev.g24.at/themes/g24/images/icon_community_hover.gif',
	'http://dev.g24.at/themes/g24/images/icon_news_hover.gif',
	'http://dev.g24.at/themes/g24/images/icon_events_hover.gif',
	'http://dev.g24.at/themes/g24/images/icon_politik_hover.gif',
	'http://dev.g24.at/themes/g24/images/icon_musik_hover.gif',
	'http://dev.g24.at/themes/g24/images/icon_kultur_hover.gif',
	'http://dev.g24.at/themes/g24/images/icon_hilfe_hover.gif');
}

// adapted JavaScript Browser Sniffer
// see http://www.webreference.com/ for more information
	var agt=navigator.userAgent.toLowerCase();
	var appVer = navigator.appVersion.toLowerCase();

	var is_opera = (agt.indexOf("opera") != -1);

	var is_konq = agt.indexOf('konqueror');
    var is_safari = agt.indexOf('safari');
    var is_khtml  = (is_safari || is_konq);

    var is_gecko = ((!is_khtml)&&(navigator.product)&&(navigator.product.toLowerCase()=="gecko"))?true:false;
    var is_moz   = ((agt.indexOf('mozilla/5')!=-1) && (agt.indexOf('spoofer')==-1) &&
                    (agt.indexOf('compatible')==-1) && (agt.indexOf('opera')==-1)  &&
                    (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)     &&
                    (is_gecko));

    var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
                && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
                && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)
                && (!is_khtml) && (!(is_moz)));

	var is_ie   = ((appVer.indexOf('msie')!=-1) && (!is_opera) && (!is_khtml));
// END BROWSER SNIFFER


function MM_findObj(n, d) { //4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}

ie4 = (document.all) ? true:false
dom = (document.getElementById) ? true:false

function hideLayers() {
var a = new Array('ly_community','ly_news','ly_events','ly_politik','ly_musik','ly_kultur','ly_hilfe')
for (var i=0; i < a.length; ++i)
	if (dom) document.getElementById(a[i]).style.visibility = "hidden";
	else if (ie4) a[i].style.visibility = "hidden";
}

var b = new Array(1);
var L1;
function showLayers(L1) {
hideLayers();
b[0] = L1;
for (var i=0; i < b.length; ++i)
	if (dom) document.getElementById(b[i]).style.visibility = "visible";
	else if (ie4) document.all[b[i]].style.visibility = "visible";
}


// thanks, tom b.
function getElementPosX( elementID )
{
	var element;
	var xPos;

	if (! is_nav)
	{
		element = document.getElementById( elementID );
		xPos = element.offsetLeft;
		while( element = element.offsetParent )
		{
			xPos += element.offsetLeft;
		}		
	} else {

		if( element = document.layers[elementID] )
			xPos = element.pageX;
		else if( element = document.anchors[elementID] )
			xPos = element.x;
		else if( element = document.images[elementID] )
			xPos = element.x;
	}
	return xPos;
}

function getElementPosY( elementID )
{

	var element;
	var yPos;

	if (! is_nav)
	{
		element = document.getElementById( elementID );
		yPos = element.offsetTop;
		while( element = element.offsetParent )
		{
			yPos += element.offsetTop;
		}
	} else {

		if( element = document.layers[elementID] )
			yPos = element.pageY;
		else if( element = document.anchors[elementID] )
			yPos = element.y;
		else if( element = document.images[elementID] )
			yPos = element.y;
	}
	return yPos;
}

function getLayerWidth( layerID )
{
	if (! is_nav)
	{
		return document.getElementById( layerID ).offsetWidth;
	} else {
		return document.layers[layerID].clip.width;
	}
}

function setLayerPos( layerID, xPos, yPos )
{
	if (! is_nav)
	{
		with( document.getElementById( layerID ).style )
		{
			left = xPos;
			top = yPos;
		}
	}
	else { 
		document.layers[layerID].moveToAbsolute( xPos, yPos );
	}
}

function calcSubMenuX( menuStart, menuEnd, menuItemPosX, menuItemWidth, subMenuWidth )
{
	var menuItemPosX = menuItemPosX + menuItemWidth/2;
	var subMenuPosX = menuItemPosX - subMenuWidth/2;
	if (subMenuPosX < menuStart)
	{
		subMenuPosX = menuStart;
	} else if (subMenuPosX > (menuEnd - subMenuWidth))
	{
		subMenuPosX = menuEnd - subMenuWidth;
	}
	return parseInt(subMenuPosX);
}

function init()
{
	var menuStart = getElementPosX( 'mainMenu' );
	var menuBarWidth = getLayerWidth( 'mainMenu' );
	var menuEnd = menuStart + menuBarWidth;
	
	var subMenuY = 17;

/*
alert(
'\n'+'menuStart:'+menuStart
+'\n'+'menuEnd:'+menuEnd
+'\n'+'menuBarWidth:'+menuBarWidth

+'\n\n'+'c'
+'\n'+'subMenuPosX:'+(calcSubMenuX( menuStart, menuEnd, getElementPosX( 'iconc' ),13, getLayerWidth( 'ly_community' ) ) - menuStart)
+'\n'+'menuItemPosX: '+	getElementPosX( 'iconc' )
+'\n'+'subMenuWidth: '+	getLayerWidth( 'ly_community' )

+'\n\n'+'n'
+'\n'+'subMenuPosX:'+(calcSubMenuX( menuStart, menuEnd, getElementPosX( 'iconn' ),13, getLayerWidth( 'ly_news' ) ) - menuStart)
+'\n'+'menuItemPosX: '+	getElementPosX( 'iconn' )
+'\n'+'subMenuWidth: '+	getLayerWidth( 'ly_news' )

+'\n\n'+'e'
+'\n'+'subMenuPosX:'+(calcSubMenuX( menuStart, menuEnd, getElementPosX( 'icone' ),13, getLayerWidth( 'ly_events' ) ) - menuStart)
+'\n'+'menuItemPosX: '+	getElementPosX( 'icone' )
+'\n'+'subMenuWidth: '+	getLayerWidth( 'ly_events' )

+'\n\n'+'p'
+'\n'+'subMenuPosX:'+(calcSubMenuX( menuStart, menuEnd, getElementPosX( 'iconp' ),13, getLayerWidth( 'ly_politik' ) ) - menuStart)
+'\n'+'menuItemPosX: '+	getElementPosX( 'iconp' )
+'\n'+'subMenuWidth: '+	getLayerWidth( 'ly_politik' )

+'\n\n'+'m'
+'\n'+'subMenuPosX:'+(calcSubMenuX( menuStart, menuEnd, getElementPosX( 'iconm' ),13, getLayerWidth( 'ly_musik' ) ) - menuStart)
+'\n'+'menuItemPosX: '+	getElementPosX( 'iconm' )
+'\n'+'subMenuWidth: '+	getLayerWidth( 'ly_musik' )

+'\n\n'+'k'
+'\n'+'subMenuPosX:'+(calcSubMenuX( menuStart, menuEnd, getElementPosX( 'iconk' ),13, getLayerWidth( 'ly_kultur' ) ) - menuStart)
+'\n'+'menuItemPosX: '+	getElementPosX( 'iconk' )
+'\n'+'subMenuWidth: '+	getLayerWidth( 'ly_kultur' )

+'\n\n'+'h'
+'\n'+'subMenuPosX:'+(calcSubMenuX( menuStart, menuEnd, getElementPosX( 'iconh' ),13, getLayerWidth( 'ly_hilfe' ) ) - menuStart)
+'\n'+'menuItemPosX: '+	getElementPosX( 'iconh' )
+'\n'+'subMenuWidth: '+	getLayerWidth( 'ly_hilfe' )

);
*/

//+'\n'+
	setLayerPos( 'ly_community', calcSubMenuX( menuStart, menuEnd, getElementPosX( 'iconc' ),86, getLayerWidth( 'ly_community' ) ) - menuStart, subMenuY );
	setLayerPos( 'ly_news', calcSubMenuX( menuStart, menuEnd, getElementPosX( 'iconn' ),50, getLayerWidth( 'ly_news' ) ) - menuStart, subMenuY );
	setLayerPos( 'ly_events', calcSubMenuX( menuStart, menuEnd, getElementPosX( 'icone' ),60, getLayerWidth( 'ly_events' ) ) - menuStart, subMenuY );
	setLayerPos( 'ly_politik', calcSubMenuX( menuStart, menuEnd, getElementPosX( 'iconp' ),56, getLayerWidth( 'ly_politik' ) ) - menuStart, subMenuY );
	setLayerPos( 'ly_musik', calcSubMenuX( menuStart, menuEnd, getElementPosX( 'iconm' ),54, getLayerWidth( 'ly_musik' ) ) - menuStart, subMenuY );
	setLayerPos( 'ly_kultur', calcSubMenuX( menuStart, menuEnd, getElementPosX( 'iconk' ),54, getLayerWidth( 'ly_kultur' ) ) - menuStart, subMenuY );
	setLayerPos( 'ly_hilfe', calcSubMenuX( menuStart, menuEnd, getElementPosX( 'iconh' ),44, getLayerWidth( 'ly_hilfe' ) ) - menuStart, subMenuY );
//	showDefMenue();
}
