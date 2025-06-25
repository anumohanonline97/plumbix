/**
 * 2007-2022 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2022 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
*/

function horizontalmenuToggle() {
	if($( window ).width() <= 991) {	
		$('#base-menu-horizontal .menu-dropdown').addClass('collapse');	
		
		$('.title-horizontalmenu-mobile').on('click', function () {
			$('#base-menu-horizontal .horizontalmain-menu').addClass('slide');
			$('body').addClass('active');
			$('.overlay').addClass('overlay_active');
		});
			
		$(document).on('click','.menu-close, .overlay',function(){
			$("#base-menu-horizontal .horizontalmain-menu").removeClass("slide");
			$('body').removeClass('active');
			$('.overlay').removeClass('overlay_active');
		});
	}
	if($( window ).width() > 991) {
		$('#base-menu-horizontal .menu-dropdown').removeClass('collapse');
	}
}
$(document).ready(function() {horizontalmenuToggle();});
$(window).resize(function(){horizontalmenuToggle();});



$(document).ready(function() {
	
	/** Horizontal Menu Items **/
	var base_elem = 4;	
	if($(window).width() <=1459){ base_elem = 4;}
	if($(window).width() <=1199){ base_elem = 3;}
	if($(window).width() <=991){ base_elem = 100;}

	var items = $('#base-menu-horizontal ul.horizontalmenu-content > li');	
	var surplus = items.slice(base_elem, items.length);
	var menu_more_title = $("#moremenu_text").text();

	surplus.wrapAll('<li class="category basemore_menu level-1" id="basemore_menu"><div id="top_moremenu" class="popover sub-menu js-sub-menu collapse"><ul class="top-menu more_sub_menu">');
	$('#base-menu-horizontal ul.horizontalmenu-content #basemore_menu').prepend('<a href="#" class="dropdown-item" data-depth="0"><span class="pull-xs-right hidden-md-up"><span data-target="#top_moremenu" data-toggle="collapse" class="navbar-toggler collapse-icons"><i class="material-icons add">&#xE313;</i><i class="material-icons remove">&#xE316;</i></span></span>' + menu_more_title +'</a>');
	$('#base-menu-horizontal ul.horizontalmenu-content #basemore_menu').mouseover(function(){
		$(this).children('div').css('display', 'block');
	})
	.mouseout(function(){
		$(this).children('div').css('display', 'none');
	});	

	/** Menu Product Carousel **/
	var czmenucarousel = $("#base-menu-horizontal .product-main-slider .owl-carousel");
	czmenucarousel.owlCarousel({
		navigation : true,
		pagination: false,
		items : 5, //10 items above 1000px browser width 
		itemsDesktop : [1649,5], 
		itemsDesktopSmall : [1399,4], 
		itemsTablet: [991,2],
		itemsMobile : [300,1],
	});
	// Custom Navigation Events
	$(".menuarrow_next").click(function(){
		czmenucarousel.trigger('owl.next');
	})
	$(".menuarrow_prev").click(function(){
		czmenucarousel.trigger('owl.prev');
	});
});