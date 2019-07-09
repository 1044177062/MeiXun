$(function(){
	$(".hed_r_bg").mouseover(function(){
		$(this).children(".hed_r_1").show();
	}).mouseout(function(){
		$(this).children(".hed_r_1").hide();
	})
	
	$(".hed_2_3_l").mouseover(function(){
		$(this).children(".wdsc").show();
	}).mouseout(function(){
		$(this).children(".wdsc").hide();
	})
	
	$(".hed_2_3_r").mouseover(function(){
		$(this).children(".wdgwc").show();
	}).mouseout(function(){
		$(this).children(".wdgwc").hide();
	})
})
