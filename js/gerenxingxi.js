$(function(){
	$(".div_body_text_1").html(sessionStorage.getItem("username"));
	
	
	if(sessionStorage.getItem("username")!=null){
		var zhi=sessionStorage.getItem("username");
		var html="<a href='index.html'>美逊首页</a>&nbsp;"+
				"<a href='index.html'>您好，欢迎来到美逊</a>&nbsp;"+
				"<a href='gerenxingxi.html'>"+zhi+"</a>&nbsp;"+
				"<a id='tuichu' href='javascript:;'>退出</a>";
		$(".hed_l_x").html(html);
	}
	
	$("#tuichu").click(function(){
		sessionStorage.removeItem("username");
		if(sessionStorage.getItem("username")==null){
			alert("退出成功");
			window.location.href="index.html";
			var html="<a href='index.html'>美逊首页</a>&nbsp;"+
					"<a href='index.html'>您好，欢迎来到美逊</a>&nbsp;"+
					"<a href='lod.html'>请登录</a>&nbsp;	"+
					"<a href='zc.html'>免费注册</a>";
			$(".hed_l_x").html(html);
		}
	})
})