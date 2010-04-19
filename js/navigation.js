var oldpos = 1;
var maxpos = 5;
var shownum = 3;

//Dom Ready
$(function(){
	twitterImg= new Image(); 
	twitterImg.src="/images/common/twitter.gif"; 
	fbImg= new Image(); 
	fbImg.src="/images/common/facebook.gif"; 		
	navMenTabImg= new Image(); 
	navMenTabImg.src="/images/nav/men_over.gif"; 	
	navWomenTabImg= new Image(); 
	navWomenTabImg.src="/images/nav/women_over.gif"; 	
	navAboutTabImg= new Image(); 
	navAboutTabImg.src="/images/nav/about_over.gif"; 	
	navColTabImg= new Image(); 
	navColTabImg.src="/images/nav/collective_over.gif"; 
	navBlogTabImg= new Image(); 
	navBlogTabImg.src="/images/nav/blog_over.gif"; 
	navPartTabImg= new Image(); 
	navPartTabImg.src="/images/nav/partners_over.gif"; 
	navStoresTabImg= new Image(); 
	navStoresTabImg.src="/images/nav/stores_over.gif"; 
	
	
	$('.ajaxbox').click(function(){
		ajaxLightBox(this);
		return false;
	});
	
	$('.subnavmore').hover(
		function(){
			subSubNav(this,1);
		},
		function(){
			subSubNav(this,0);
		}
	);
});


var subSubNav = function(e,state) { 
	if(state == 1) {
		$(e).children('ul').css('display','block');
		$(e).addClass('active');
	}
	else { 
		$(e).children('ul').css('display','none');
		$(e).removeClass('active');
		
	}
}

function returnObjById(id) {
  if (document.getElementById) {
    var returnVar = document.getElementById(id);
  } 
  else {
    if (document.all) {
      var returnVar = document.all[id];
    } 
    else {
      if (document.layers) {
        var returnVar = document.layers[id];
      }
    }
  }
  return returnVar;
}
function navhot(myobj) {
  if (myobj) {
    myobj.style.backgroundColor = "#ebe9e3";
    myobj.style.fontWeight = "bold";
    myobj.style.color = "#5d6465";
  }
}
function navcold(myobj) {
  if (myobj) {
    myobj.style.backgroundColor = "#e2e0e7";
    myobj.style.fontWeight = "normal";
    myobj.style.color = "#8b8980";
  }
}
function buttonhot(objid,ext) {
  var myobj = document.getElementById(objid);
  if (myobj) {
    if (ext)  {
      myobj.src = nauImageURL + "/buttons/" + objid + "_over." + ext;
    }
    else {
      myobj.src = nauImageURL + "/buttons/" + objid + "_over.jpg";
    }
  }
}
function buttoncold(objid,ext) {
  var myobj = document.getElementById(objid);
  if (myobj){
    if (ext) {
      myobj.src = nauImageURL + "/buttons/" + objid + "." + ext;
    }
    else {
      myobj.src = nauImageURL + "/buttons/" + objid + ".jpg";
    }
  }
}
function carthot(objid)  {
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.src = nauImageURL + "/icons/arrow_ltgrey.gif";
  }
}
function cartcold(objid) {
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.src = nauImageURL + "/icons/arrow_white.gif";
  }
}
function tiphot(objid) {
  var myobj = document.getElementById(objid);
  if (myobj){
    myobj.src = nauImageURL + "/icons/arrow_red.gif";
  }
}
function tipcold(objid) {
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.src = nauImageURL + "/icons/arrow_white.gif";
  }
}
function morehot(objid) {
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.src = nauImageURL + "/icons/arrow_red.gif";
  }
}
function morecold(objid) {
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.src = nauImageURL + "/icons/arrow_grey.gif";
  }
}
function lesshot(objid) {
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.src = nauImageURL + "/icons/arrow_red_left.gif";
  }
}
function lesscold(objid) {
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.src = nauImageURL + "/icons/arrow_grey_left.gif";
  }
}
function showhide(showid, hideid) {
  var objshow = document.getElementById(showid);
  var objhide = document.getElementById(hideid);
  if (objshow && objhide) {
    objshow.style.display = "block";
    objhide.style.display = "none";
  }
}
var oldtabid = "tab1";
function showtab(objid) {
  if (oldtabid != objid) {
    var myobj = document.getElementById(objid);
    var imgobj = document.getElementById(objid + "img");
    var oldobj = document.getElementById(oldtabid);
    var oldimgobj = document.getElementById(oldtabid + "img");
    if (myobj && imgobj && oldobj && oldimgobj) {
      myobj.style.display = "inline";
      oldobj.style.display = "none";
      imgobj.src = nauImageURL + "/tabs/" + objid + "_on.jpg";
      oldimgobj.src = nauImageURL + "/tabs/" + oldtabid + "_off.jpg";
      oldtabid = objid;
    }
  }
}
function back() {
  if (oldpos > 1) {
    oldpos--;
    displaypromos();
  }
}
function forward() {
  if (oldpos < maxpos) {
    oldpos++;
    displaypromos();
  }
}
function displaypromos() {
  var objback = document.getElementById("divback");
  var objmore = document.getElementById("divmore");
  if (oldpos == 1) {
    objback.style.display = "none";
  }
  else {
    objback.style.display = "inline";
  }
  if (oldpos > maxpos - shownum) {
    objmore.style.display = "none";
  }
  else  {
    objmore.style.display = "inline";
  }
  for (var i=1; i < oldpos; i++) {
    var objhide = document.getElementById("promo" + i);
    objhide.style.display = "none";
  }
  for (var i=oldpos; i < oldpos + 3; i++) {
    var objshow = document.getElementById("promo" + i);
    objshow.style.display = "inline";
  }
  for (var i=oldpos+3; i < maxpos + 1; i++) {
    var objshow = document.getElementById("promo" + i);
    objshow.style.display = "none";
  }
}
function gethot(objid) {
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.style.backgroundColor = "#e2e0d7";
  }
}
function gocold(objid) {
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.style.backgroundColor = "#F5F3EB";
  }
}
function gethotmodule(objid) { 
	  var myobj = document.getElementById(objid);
	  if (myobj) {
	      myobj.style.backgroundColor = "#b7bebf";
	  }
	}
	function gocoldmodule(objid) {
	  var myobj = document.getElementById(objid);
	  if (myobj) {
		  myobj.style.backgroundColor = "#e9ebec";
	  }
	}
function gocoldclr(objid,clr) {
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.style.backgroundColor = clr;
  }
}
function aboutlinkhot(objid) {
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.style.color = "#501300";
  }
}
function aboutlinkcold(objid) {
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.style.color = "#373b3c";
  }
}
function showmenu(objid) {
  var imgobj = document.getElementById("img" + objid);
  if (imgobj) {
    if (imgobj.src.indexOf("_on.gif") < 1) {
      imgobj.src = nauImageURL + "/nav/" + objid + "_over.gif";
    }
  }
  var myobj = document.getElementById(objid);
  var tdobj = document.getElementById("td" + objid);
  if (tdobj && myobj) {
    //alert(tdobj.offsetLeft + " " + tdobj.offsetTop);
    myobj.style.display = "block";
    //myobj.style.left = tdobj.offsetLeft + 20;
  }
}
function hidemenu(objid) {
  var imgobj = document.getElementById("img" + objid);
  if (imgobj) {
    if (imgobj.src.indexOf("_on.gif") < 1) {
      imgobj.src = nauImageURL + "/nav/" + objid + "_off.gif";
    }
  }
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.style.display = "none";
  }
}

function hotsubnav(objid) {
  var myobj = document.getElementById(objid);
  var aobj = document.getElementById(objid + "a");
  if (myobj && aobj) {
    myobj.style.backgroundColor = "#B7BEBF";
    aobj.style.color = "#373b3c";
    myobj.style.cursor = "pointer";
  }
}
function coldsubnav(objid) {
  var myobj = document.getElementById(objid);
  var aobj = document.getElementById(objid + "a");
  if (myobj && aobj) {
    myobj.style.backgroundColor = "#566063";
    aobj.style.color = "#d7dadb";
    myobj.style.cursor = "default";
  }
}
var oldcolorid = null;
var pname = "";
var posnum = 1;
function changecolor(imgobj) {
  //alert(imgobj.src + " " + oldcolorid);
  var myobj = document.getElementById("color");
  if (myobj) {
    myobj.innerHTML = imgobj.id;
    if (imgobj.src.indexOf("_hot") < 1) {
      imgobj.src = nauImageURL + "/colors/" + imgobj.id + "_hot.gif";
      if (oldcolorid) {
        var oldobj = document.getElementById(oldcolorid);
        oldobj.src = nauImageURL + "/colors/" + oldcolorid + ".gif";
      }
      oldcolorid = imgobj.id;
      var bgobj = document.getElementById("detailbg");
      bgobj.style.backgroundImage = "url("+nauImageURL+"/categories/jackets/" + pname + "_" + imgobj.id + posnum + ".jpg)";
    } 
    else  {
    }
  }
}
function changeview(num) {
  var bgobj = document.getElementById("detailbg");
  bgobj.style.backgroundImage = "url("+nauImageURL+"/categories/jackets/" + pname + "_" + oldcolorid + num + ".jpg)";
  //alert(bgobj.style.backgroundImage);
  posnum = num;
}
var olddetailid = "detail1";
function showdetail(objid) {
  if (olddetailid != objid)     {
    var myobj = document.getElementById(objid);
    var tabobj = document.getElementById(objid + "tab");
    var oldobj = document.getElementById(olddetailid);
    var oldtabobj = document.getElementById(olddetailid + "tab");
    if (myobj && tabobj && oldobj && oldtabobj)  {
      myobj.style.display = "inline";
      oldobj.style.display = "none";
      tabobj.src = nauImageURL + "/pdp/tabs/" + objid + "_on.jpg";
      oldtabobj.src = nauImageURL + "/pdp/tabs/" + olddetailid + "_off.jpg";
      olddetailid = objid;
    }
  }
}
function tabover(objid) {
  if (olddetailid != objid)  {
    var myobj = document.getElementById(objid + "tab");
    if (myobj)  {
      myobj.src= nauImageURL + "/pdp/tabs/" + objid + "_over.jpg"
    }
  }
}
function tabout(objid) {
  if (olddetailid != objid)  {
    var myobj = document.getElementById(objid + "tab");
    if (myobj)  {
      myobj.src= nauImageURL + "/pdp/tabs/" + objid + "_off.jpg"
    }
  }
}

function showpartners(productRefId) {
  var myobj = document.getElementById("divpartners-"+productRefId);
  if (myobj) {
    myobj.style.display = "block";
  }
}
function hidepartners(productRefId) {
  var myobj = document.getElementById("divpartners-"+productRefId);
  if (myobj) {
    myobj.style.display = "none";
    var oldobj = document.getElementById(olddetailid);
  }
}
var showing = 0;

// Browser flags
var tt_n = navigator.userAgent.toLowerCase();
var tt_op = !!(window.opera && document.getElementById);
var tt_ie = tt_n.indexOf("msie") != -1 && document.all && !tt_op;
function cartover(myobj){ 
  if (showing == 0)  {
    myobj.className = "carticonover";
  }
}
function cartoff(myobj) {
  if (showing == 0) {
    myobj.className = "carticon";
  }
}
function docart() {
  if (showing == 0) {
    //showcart();
  }
  else {
    //hidecart();
  }
}
function showcart() {
  var iconobj = document.getElementById("carticon");
  if (iconobj) {
    iconobj.className = "carticonon";
  }
  var leftpos = findPos(iconobj);
  var ckee = getCookie("cart");
  if (ckee) {
    var myobj = document.getElementById("divcart2");
    if (myobj) {
      myobj.style.display = "block";
      if (!tt_ie) {
        myobj.style.left = leftpos + "px";
      }
      else {
        myobj.style.left = leftpos;
      }
      showing = 1;
    }
  }
  else {
    var myobj = document.getElementById("divcart");
    if (myobj) {
      myobj.style.display = "block";
      if (!tt_ie) {
        myobj.style.left = leftpos + "px";
      }
      else {
        myobj.style.left = leftpos;
      }
      showing = 1;
    }
  }
}
function hidecart() {
  var myobj = document.getElementById("divcart");
  var myobj2 = document.getElementById("divcart2");
  var iconobj = document.getElementById("carticon");
  if (myobj) {
    myobj.style.display = "none";
    showing = 0;
  }
  if (myobj2) {
    myobj2.style.display = "none";
    showing = 0;
  }
  if (iconobj) {
    iconobj.className = "carticon";
  }
}
function findPos(obj) {
  var curleft = curtop = 0;
  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
  }
  return curleft;
}
function showfma(objname) {
  var obj1 = document.getElementById(objname + "1");
  var obj2 = document.getElementById(objname + "2");
  if (obj1 && obj2) {
    obj1.style.display = "none";
    obj2.style.display = "inline";
  }
}
function hidefma(objname) {
  var obj1 = document.getElementById(objname + "1");
  var obj2 = document.getElementById(objname + "2");
  if (obj1 && obj2) {
    obj1.style.display = "inline";
    obj2.style.display = "none";
  }
}
function showtip(objname) {
  var myobj = document.getElementById(objname);
  if (myobj) {
    myobj.style.display = "block";
  }
}
function hidetip(objname) {
  var myobj = document.getElementById(objname);
  if (myobj){ 
    myobj.style.display = "none";
  }
}
function donothing() {
}
// Cookie functions
function setCookie(name, value, expires, path, domain, secure) {
  var curCookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
  document.cookie = curCookie;
}
function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else
    begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1)
    end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
}
function eraseCookie(name) {
  var date = new Date();
  date.setTime(date.getTime()-(24*60*60*1000));
  setCookie(name, "", date, null, null, null);
}
/* Not used */
function hotnav(objid) {
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.style.backgroundColor = "#cccccc";
    myobj.style.fontWeight = "bold";
    myobj.style.cursor = "pointer";
    var arrowobj = document.getElementById("arrow" + objid);
    if (arrowobj) {
      arrowobj.style.display = "inline";
    }
  }
}
function coldnav(objid) {
  var myobj = document.getElementById(objid);
  if (myobj) {
    myobj.style.backgroundColor = "#dddddd";
    myobj.style.fontWeight = "normal";
    myobj.style.cursor = "default";
    var arrowobj = document.getElementById("arrow" + objid);
    if (arrowobj) {
      arrowobj.style.display = "none";
    }
  }
}

var showMeActive;

function showMe(id) { 
	if (showMeActive == id) { 
		$('#'+id).hide();
		showMeActive = '';
	} else if (showMeActive != '') { 
		$('#'+showMeActive).hide();
		$('#'+id).show();
		showMeActive = id;
	} else { 
		$('#'+id).show(); 
		showMeActive = id;
	}
}


function sendToGA(path) {
  if(window.pageTracker != undefined) {
    try {
      /* alert("send to Urchin: " + path); */
      pageTracker._trackPageview(path);
    }
    catch (error) {
      //do nothing really
    }
  }
}

/**********************************
*			Lightbox functions					*
**********************************/
var maskHTML = '<div id="mask" onclick="removeLightBox();" title="Click to Close"></div><img src="/images/common/lightbox-load.gif" alt="loading" title="loading" id="lightboxload" />';
var ajaxBoxHTML = '<div id="lightbox"></div>';
var lbActive = false;

var initLightBox = function() { 
	if (jQuery.browser.msie) {
    if (parseInt(jQuery.browser.version) < 7) {
      $('select').hide();
    }
  }
	docHeight = $(document).height();
  winHeight = $(window).height();
  winHeightFrag = Math.round(winHeight*1)/10;
  winWidth = $(window).width();
  scrollTop = $(window).scrollTop();
  lbTopPos = scrollTop + winHeightFrag;
	lbLoadTopPos = (((Math.round(winHeight)/2)+scrollTop)-16);
	lbLoadLeftPos = ((Math.round(winWidth)/2)-16);
	$("#mask").css("height",docHeight);
  $('#mask').show();
}

//function to set up the backound and preloader
var showLightBox = function(opener) { 
  //Set up all the positioning variables
  if (jQuery.browser.msie) {
    if (parseInt(jQuery.browser.version) < 7) {
      $('select').hide();
    }
  }
  initLightBox();
  lbxOffsetLeft = ( winWidth - 475 ) / 2;
	$('#lightbox').css('left',lbxOffsetLeft+"px"); 
  $('#lightbox').slideDown('3000'); 
}

var hideLightBox = function() {
  $('#mask').fadeOut('100');
  $('#lightbox').fadeOut('100');
  if (jQuery.browser.msie) {
    if (parseInt(jQuery.browser.version) < 7) {
      $('select').show();
    }
  }
}


//Loads article content to a lightbox with AJAX.
var ajaxLightBox = function(e) { 
	if(lbActive == false) { 
		lbActive = true;
		ajaxLink = e.href;
		lbparm = ajaxLink.split("/");
		lbparm = lbparm.reverse();
		$("body").prepend(maskHTML);
		initLightBox();
		
		$("#lightboxload").css("top",lbLoadTopPos);
		$("#lightboxload").css("left",lbLoadLeftPos);
		$("#lightboxload").after(ajaxBoxHTML);
		lbxOffsetLeft = ( winWidth - 475 ) / 2;
		$('#lightbox').css('left',lbxOffsetLeft+"px"); 
		maxWinHeight = winHeight * .7;
		$('#lightbox').css('top',lbTopPos+"px"); 
		$('#lightbox').css('padding',"10px"); 
		$('#lightboxcontent').css('height',maxWinHeight+'px');
		$("#lightbox").load("/za/NAU?PAGE=ajax-box", {refid: lbparm[1]}, function(){
			$("#lightboxload").remove();
			
			//set the mask height again just to make sure we don't have the white space in the footer
			docHeight = $(document).height();
			$("#mask").css("height",docHeight);
			//set a max height
			
			//show the content
			$("#lightbox").fadeIn('normal', function(){
				maxWinHeight = winHeight * .7;
				//alert(maxWinHeight);
				totalCopyHeight = $('#ajaxcontent').height() + $('#ajaxsummary').height();
				if($('#ajaxboxcopy').height() > totalCopyHeight) { 
					$('#ajaxboxcopy').css('height','auto');
					$('#lightbox').css('height','auto');
				}
				lbActive = false;
			});
			
		});
	}
}
var removeLightBox = function() { 
  $('#lightbox').fadeOut('100',function(){
		lbActive = false;
		$('#mask').remove();
		$('#lightbox').remove();
		if (jQuery.browser.msie) {
			if (parseInt(jQuery.browser.version) < 7) {
				$('select').show();
			}
		}
	});
	
	
	
	
	
}





var swapImg = function(lmnt,img,state) { 
	if(state == 1){
		srcImg = $(lmnt).attr("src");
		$(lmnt).attr("src",img);
	} 
	else {
		$(lmnt).attr("src",srcImg);
	}
}

var clearEmail = function(lmnt) { 
	if(lmnt.value == 'ENTER EMAIL ADDRESS'){
		lmnt.value = '';
		lmnt.style.color = '#5d6465';
	}
}
