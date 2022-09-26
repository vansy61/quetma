!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return g({type:O.error,iconClass:m().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=m()),v=e("#"+t.containerId),v.length?v:(n&&(v=d(t)),v)}function o(e,t,n){return g({type:O.info,iconClass:m().iconClasses.info,message:e,optionsOverride:n,title:t})}function s(e){C=e}function i(e,t,n){return g({type:O.success,iconClass:m().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return g({type:O.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e,t){var o=m();v||n(o),u(e,o,t)||l(o)}function c(t){var o=m();return v||n(o),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function l(t){for(var n=v.children(),o=n.length-1;o>=0;o--)u(e(n[o]),t)}function u(t,n,o){var s=!(!o||!o.force)&&o.force;return!(!t||!s&&0!==e(":focus",t).length)&&(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0)}function d(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function f(e){C&&C(e)}function g(t){function o(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(){c(),u(),d(),p(),g(),C(),l(),i()}function i(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}I.attr("aria-live",e)}function a(){E.closeOnHover&&I.hover(H,D),!E.onclick&&E.tapToDismiss&&I.click(b),E.closeButton&&j&&j.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),E.onCloseClick&&E.onCloseClick(e),b(!0)}),E.onclick&&I.click(function(e){E.onclick(e),b()})}function r(){I.hide(),I[E.showMethod]({duration:E.showDuration,easing:E.showEasing,complete:E.onShown}),E.timeOut>0&&(k=setTimeout(b,E.timeOut),F.maxHideTime=parseFloat(E.timeOut),F.hideEta=(new Date).getTime()+F.maxHideTime,E.progressBar&&(F.intervalId=setInterval(x,10)))}function c(){t.iconClass&&I.addClass(E.toastClass).addClass(y)}function l(){E.newestOnTop?v.prepend(I):v.append(I)}function u(){if(t.title){var e=t.title;E.escapeHtml&&(e=o(t.title)),M.append(e).addClass(E.titleClass),I.append(M)}}function d(){if(t.message){var e=t.message;E.escapeHtml&&(e=o(t.message)),B.append(e).addClass(E.messageClass),I.append(B)}}function p(){E.closeButton&&(j.addClass(E.closeClass).attr("role","button"),I.prepend(j))}function g(){E.progressBar&&(q.addClass(E.progressClass),I.prepend(q))}function C(){E.rtl&&I.addClass("rtl")}function O(e,t){if(e.preventDuplicates){if(t.message===w)return!0;w=t.message}return!1}function b(t){var n=t&&E.closeMethod!==!1?E.closeMethod:E.hideMethod,o=t&&E.closeDuration!==!1?E.closeDuration:E.hideDuration,s=t&&E.closeEasing!==!1?E.closeEasing:E.hideEasing;if(!e(":focus",I).length||t)return clearTimeout(F.intervalId),I[n]({duration:o,easing:s,complete:function(){h(I),clearTimeout(k),E.onHidden&&"hidden"!==P.state&&E.onHidden(),P.state="hidden",P.endTime=new Date,f(P)}})}function D(){(E.timeOut>0||E.extendedTimeOut>0)&&(k=setTimeout(b,E.extendedTimeOut),F.maxHideTime=parseFloat(E.extendedTimeOut),F.hideEta=(new Date).getTime()+F.maxHideTime)}function H(){clearTimeout(k),F.hideEta=0,I.stop(!0,!0)[E.showMethod]({duration:E.showDuration,easing:E.showEasing})}function x(){var e=(F.hideEta-(new Date).getTime())/F.maxHideTime*100;q.width(e+"%")}var E=m(),y=t.iconClass||E.iconClass;if("undefined"!=typeof t.optionsOverride&&(E=e.extend(E,t.optionsOverride),y=t.optionsOverride.iconClass||y),!O(E,t)){T++,v=n(E,!0);var k=null,I=e("<div/>"),M=e("<div/>"),B=e("<div/>"),q=e("<div/>"),j=e(E.closeHtml),F={intervalId:null,hideEta:null,maxHideTime:null},P={toastId:T,state:"visible",startTime:new Date,options:E,map:t};return s(),r(),a(),f(P),E.debug&&console&&console.log(P),I}}function m(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),w=void 0))}var v,C,w,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:c,error:t,getContainer:n,info:o,options:{},subscribe:s,success:i,version:"2.1.3",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});

var currentZoomImg;
// review image zoom
$(document).on('click','.review-information-image.allow-preview-image img', function(){
	if($(this).next().length || $(this).prev().length){
		$('.control-zoom').removeClass('d-none')
	}else{
		$('.control-zoom').addClass('d-none')
	}
	currentZoomImg = this
	var dataUrl = $(this).attr('src')
	$('#modalViewImageReview .zoom-review-image img').attr('src', dataUrl.replace('/product/', '/original/')).addClass('img-fluid')
	$('#modalViewImageReview').modal('show')
})

$(document).on('click', '.control-zoom .prev-image', function(){
	if($(currentZoomImg).prev().length){
		var dataUrl = $(currentZoomImg).prev().attr('src')
		currentZoomImg = $(currentZoomImg).prev().get(0)
	}else{
		var dataUrl = $(currentZoomImg).parent().find('img:last-child').attr('src')
		currentZoomImg = $(currentZoomImg).parent().find('img:last-child').get(0)

	}
	$('#modalViewImageReview .zoom-review-image img').attr('src', dataUrl.replace('/product/', '/original/')).addClass('img-fluid')

})
$(document).on('click', '.control-zoom .next-image', function(){
	if($(currentZoomImg).next().length){
		var dataUrl = $(currentZoomImg).next().attr('src')
		currentZoomImg = $(currentZoomImg).next().get(0)
	}else{
		var dataUrl = $(currentZoomImg).parent().find('img:first-child').attr('src')
		currentZoomImg = $(currentZoomImg).parent().find('img:first-child').get(0)
	}
	$('#modalViewImageReview .zoom-review-image img').attr('src', dataUrl.replace('/product/', '/original/')).addClass('img-fluid')

})
// add to cart
$(document).on('click', '.webmely-add-product, .webmely-buy-product', function(e){
	
	e.preventDefault()
	$this = $(this)
	$this.addClass('loadding-add-cart')
	$('body').css('pointer-events', 'none')
	var variant_id = $this.closest('.card').find('.webmely-link-product').attr('data-variant-add-cart-id')
	$.ajax({
        type: "POST",
        url: '/orders/populate',
        dataType: "json",
        data: {
			variant_id: variant_id,
			quantity: 1
		},
        success: function success(data) {
			if($this.is('.webmely-buy-product')){
				window.location.href = "/checkout/address"
				return false
			}
            if(data && $('.cart-wrap'.length)){
                reloadCartNow(true)
            }
			$('body').css('pointer-events', 'all')
		},
		error: function () {
			toastr.clear()
			toastr.error('Có lỗi xảy ra vui lòng thử lại sau!', ':(', {
				timeOut: 5000,
				progressBar: true
			})
			$('.loadding-add-cart').removeClass('loadding-add-cart')
		}
  
	})
	return false
})


$(document).on('click', '.load-more-product-ls',function(){
	$(this).prop('disabled', true).find('.real-text-button').text('Loading...')
	loadProduct($(this).closest('.block-filter'), true, $(this).attr('data-next'))
	return false
})
$(document).on('click', '.pagi-more-product-ls li:not(.pre-page, .next-page)', function(){
	loadProduct($(this).closest('.block-filter'), false, $(this).attr('data-page'))
	return false
})

$(document).on('click', '.pagi-more-product-ls .pre-page', function(e){
	var prePage = parseInt($(this).closest('.pagi-more-product-ls').find('.page-item.active').attr('data-page')) - 1 
	loadProduct($(this).closest('.block-filter'), false, prePage)
	return false
})

$(document).on('click', '.pagi-more-product-ls .next-page', function(e){
	var nextPage = parseInt($(this).closest('.pagi-more-product-ls').find('.page-item.active').attr('data-page')) + 1 
	loadProduct($(this).closest('.block-filter'), false, nextPage)
	return false
})

$(document).on('click', '.pagi-more-blog-ls li:not(.pre-page, .next-page)', function(){
	processBlog($(this).closest('.blog-block--flex'), $(this).attr('data-page'), true)
	return false
})

$(document).on('click', '.pagi-more-blog-ls .pre-page', function(e){
	var prePage = parseInt($(this).closest('.pagi-more-blog-ls').find('.page-item.active').attr('data-page')) - 1 
	processBlog($(this).closest('.blog-block--flex'), prePage, true)
	return false
})

$(document).on('click', '.pagi-more-blog-ls .next-page', function(e){
	var nextPage = parseInt($(this).closest('.pagi-more-blog-ls').find('.page-item.active').attr('data-page')) + 1 
	processBlog($(this).closest('.blog-block--flex'), nextPage, true)
	return false
})

$(document).on('click', '.load-more-blog-ls', function(){
	processBlog($(this).closest('.blog-block--flex'), $(this).attr('data-next'), false)
	return false
})
// review
$(document).on('click', '.wsp-load-more-review', function(){
	$(this).addClass('loadding-add-cart')
    processReview($(this).attr('data-next'), false)
})
$(document).on('click', 'body', function(e){
	if($(e.target).closest('.cart-warp, .w-menu-on-mobile').length == 0){
		$('.cart-wrap .cart-list').removeClass('active')
		$('.w-menu-on-mobile').removeClass('show')
		$('body').removeClass('w-show-menu-mobile')
	}
})
// show hide menu on mobile
$(document).on('click','.show-hide-menu', function(){
	$(this).closest('header').find('.w-menu-on-mobile').addClass('show')
	$('body').addClass('w-show-menu-mobile')
	return false
})

$(document).on('click', '.w-close-menu', function(){
	$(this).parent().removeClass('show')
	$('body').removeClass('w-show-menu-mobile')

})

$(document).on('click', '.nav-depart .depart-btn p', function(){
	if($('body').hasClass('w-show-menu-mobile')){
		$('.nav-depart .depart-btn .depart-hover').slideToggle()
	}else if($(this).hasClass('allow-colapse-menu')){
		$('.nav-depart .depart-btn .depart-hover').slideToggle(300, function(){
			var height = $('.nav-depart-show .depart-btn .depart-hover').height() + 29
			$('.category-nav-taxon .home-wrap').toggleClass('no-menu-over').css('min-height', height + 'px')
		})
		

	}
})


$(document).on('click', '.w-is-dropdown >a', function(){
	if($('body').hasClass('w-show-menu-mobile')){
		if($(this).next().is('ul.sub-menu')){
			$(this).next().slideToggle()
			return false
		}
		
	}
})

