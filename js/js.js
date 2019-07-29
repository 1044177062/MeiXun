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
	
	$(".gouwuche").click(function(){
		var jg=$(this).parent().children(".dj").children("span").html();
		var img=$(this).parent().parent().children(".tu").children("a").children("img").attr("src");
		var name=$(this).parent().parent().children(".xxx").children("a").html();
		var pd=0;
		
		var wdsc= $("#wdsc_id .sp").attr("class");
		if(wdsc="sp"){
			$("#wdsc_id .gwc_2").remove();
			$(".jieshuan").hide();
		}
		
		
		$(".wdsc_2_1 .sp .sp_m").each(function(i){
			
			if($(this).html()==name){
				var gs=$(this).next().children(".sp_r_1").children("span:nth-child(2)").html();
				gs=parseInt(gs)+1;
				$(this).next().children(".sp_r_1").children("span:nth-child(2)").html(gs);
				pd=1;
				alert("加入购物车成功");
			}
		})
		if(pd==0){
			var html="<div class='sp'>"+
						"<div class='sp_l'>"+
							"<img src='"+img+"' width='50' height='50' alt=''>"+
						"</div>"+
						"<div class='sp_m'>"+name+"</div>"+
						"<div class='sp_r'>"+
							"<div class='sp_r_1'>￥<span>"+jg+"</span>X<span>1</div>"+
							"<div class='sp_r_2'><a href='javascript:;'>删除</a></div>"+
						"</div>"+
					"</div>";
			alert("加入购物车成功");
			$(".wdsc_2_1").append(html);	
		}
	})
	
	$(document).on("click",".sp_r_2 a",function(){
		$(this).parent().parent().parent().remove();
		var wdsc= $("#wdsc_id .sp").attr("class");
		if(wdsc==undefined){
			$("#wdsc_id").html("<div class='gwc_2'>你的购物车没有商品</div>");
		}
	})
	
	$(document).on("mouseover",".sp",function(){
		$(this).css("background-color","#E7E7E7");
	})
	
	$(document).on("mouseout",".sp",function(){
		$(this).css("background-color","#FFFFFF");
	})

	
	if(sessionStorage.getItem("username")!=null){
		var zhi=sessionStorage.getItem("username");
		var html="<a href='index.html'>美逊首页</a>&nbsp;"+
				"<a href='index.html'>您好，欢迎来到美逊</a>&nbsp;"+
				"<a href='gerenxingxi.html'>"+zhi+"</a>&nbsp;"+
				"<a id='tuichu' href='index.html'>退出</a>";
		$(".hed_l_x").html(html);
	}
	
	$(".gwc").click(function(){
		if(sessionStorage.getItem("username")==null){
			alert("请登入");
		}else{		
			window.location.href="gouwuche.html";
		}
	})
	
	$(".wdsc_3_img a").click(function(){
		if(sessionStorage.getItem("username")==null){
			alert("请登入");
		}else{		
			window.location.href="gouwuche.html";
		}
	})
	
	$("#tuichu").click(function(){
		sessionStorage.removeItem("username");
		if(sessionStorage.getItem("username")==null){
			alert("退出成功");
			var html="<a href='index.html'>美逊首页</a>&nbsp;"+
					"<a href='index.html'>您好，欢迎来到美逊</a>&nbsp;"+
					"<a href='lod.html'>请登录</a>&nbsp;	"+
					"<a href='zc.html'>免费注册</a>";
			$(".hed_l_x").html(html);
		}
	})
	
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
