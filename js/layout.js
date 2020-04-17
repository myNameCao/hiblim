// +----------------------------------------------------------------------
// | desc: layout js
// +----------------------------------------------------------------------
// | Author:张亮
// +----------------------------------------------------------------------

/**
 *desc:初始化加载
 *@param void;
 *@return void;
 */
$(function(){
  func.dot();
  func.wow();
});


/**
 *desc:构造函数 
 *@param void;
 *@return void;
 */
function Func(){};


/**
*desc:多行超过隐藏
*@param void;
*@return void;
*/
Func.prototype.dot = function () {
    if (typeof(jQuery.fn.dotdotdot) != "function") {
        return;
    };
    $(".dot").dotdotdot({
        wrap: 'letter',
        after: 'a'
    });
};


/**
*desc:多行超过隐藏
*@param void;
*@return void;
*/
Func.prototype.totop = function() {
  $('html,body').animate(
    {
      scrollTop: 0
    },
    800
  )
}



Func.prototype.closemenu= function() {
  $('.sidebarmenu ').removeClass('open');
}


Func.prototype.openmenu= function() {
  $('.sidebarmenu ').addClass('open');
}




// +----------------------------------------------------------------------
// | Desc:滚动定位
// +----------------------------------------------------------------------
Func.prototype.srollSelect = function() {
  if($('.item').eq(0).length>0){
    var item1 = $('.item').eq(0).offset().top - 80
  };
  if($('.item').eq(1).length>0){
    var item2 = $('.item').eq(1).offset().top - 80
  };
  if($('.item').eq(2).length>0){
    var item3 = $('.item').eq(2).offset().top - 80
  };
  if($('.item').eq(3).length>0){
    var item4 = $('.item').eq(3).offset().top - 80
  };
  if($('.item').eq(4).length>0){
    var item5 = $('.item').eq(4).offset().top - 80
  };
  if($('.item').eq(5).length>0){
    var item6 = $('.item').eq(5).offset().top - 80
  };
  if($('.item').eq(6).length>0){
    var item7 = $('.item').eq(6).offset().top - 80
  };
  var rollTop = $(document).scrollTop()
  if (420 > rollTop) {
    $('.sonnav').removeClass("fixed")
  } else {
    $('.sonnav').addClass("fixed")
  }
  if (item1 < rollTop) {
    $('.sonnav').find('li').removeClass('on')
    $('.sonnav').find('li').eq(0).addClass('on')
  };
  if (item2 < rollTop) {
    $('.sonnav').find('li').removeClass('on')
    $('.sonnav').find('li').eq(1).addClass('on')
  };
  if (item3 < rollTop) {
    $('.sonnav').find('li').removeClass('on')
    $('.sonnav').find('li').eq(2).addClass('on')
  };
  if (item4 < rollTop) {
    $('.sonnav').find('li').removeClass('on')
    $('.sonnav').find('li').eq(3).addClass('on')
  };
  if (item5 < rollTop) {
    $('.sonnav').find('li').removeClass('on')
    $('.sonnav').find('li').eq(4).addClass('on')
  };
  if (item6 < rollTop) {
    $('.sonnav').find('li').removeClass('on')
    $('.sonnav').find('li').eq(5).addClass('on')
  };
  if (item7 < rollTop) {
    $('.sonnav').find('li').removeClass('on')
    $('.sonnav').find('li').eq(6).addClass('on')
  };
}

// +----------------------------------------------------------------------
// | Desc:点击滚动
// +----------------------------------------------------------------------
Func.prototype.clickScroll = function(eq) {
  var contentH = $('.item').eq(eq).offset().top-79;
  $('html,body').animate({
      scrollTop: contentH
    },800)
}



/**
 *desc:浏览器版本
 *@param void;
 *@return ie 6 7 8 9 杩斿洖false;鍏朵粬杩斿洖true;
 */
Func.prototype.browser = function () {
    var browser = navigator.appName;
    var b_version = navigator.appVersion;
    var version = b_version.split(";");

    if (version[1] == undefined || version[1] == "undefined") {
        return true;
    }

    var trim_Version = version[1].replace(/[ ]/g, "");

    if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
        return false;
    } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
        return false;
    } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
        return false;
    } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
        return false;
    } else {
        return true;
    }
};


/**
 *desc:初始化动效js
 *@param void;
 *@return void;
 */
Func.prototype.wow = function () {
    if (func.browser()) {
        var wow = new WOW({
            offset: 20
        });
        wow.init();
    }
};



/**
 *desc:构造函数实例化
 */
var func = new Func();







