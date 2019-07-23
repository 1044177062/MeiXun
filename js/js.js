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
	if(sessionStorage.getItem("username")!=null){
		var zhi=sessionStorage.getItem("username");
		var html="<a href='index.html'>美逊首页</a>&nbsp;"+
				"<a href='index.html'>您好，欢迎来到美逊</a>&nbsp;"+
				"<a href='gerenxingxi.html'>"+zhi+"</a>&nbsp;"+
				"<a id='tuichu' href='javascript:;'>退出</a>";
		$(".hed_l_x").html(html);
	}
	
	$(".gwc").click(function(){
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
