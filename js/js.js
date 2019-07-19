var i=0;
var sl=0;
function lunbo(){
	i=i+1;
	if(i>=5){i=1}
	$(".lunboul li").hide();
	$(".lunbo_"+i).show();
	$(".lunbotext li").attr("class","xz_no");
	$(".lunbotext li:nth-child("+i+")").attr("class","xz_yes");
}

setInterval("lunbo()",2000);

$(function(){
	$(".lunbotext li").each(function(s){
		s=s+1;
		$(this).click(function(){
			i=s;
			$(".lunboul li").hide();
			$(".lunbo_"+i).show();
			$(".lunbotext li").attr("class","xz_no");
			$(".lunbotext li:nth-child("+i+")").attr("class","xz_yes");
		})
	})
	
	
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
	
	$(".left").each(function(i){
		i=i+1;
		$(this).mouseover(function(){
			$(".dwzs").hide();
			$(".zs"+i).show();
		}).mouseout(function(){
			$(".dwzs").hide();
		})
	})
	
	$(".syspbut").click(function(){
		$(".body_left").toggle();
	})
})
