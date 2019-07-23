
$(function(){
	xiaoji();
	zongjia();
	function xiaoji(){
		$(".qxbk ul").each(function(){
			var danjia=$(this).children(".danjia").html();
			var shuliang=$(this).children(".shuliang").children(".geshu").val();
			var xiaoji=parseFloat(danjia).toFixed(1)*parseFloat(shuliang);
			xiaoji=xiaoji.toFixed(1);
			$(this).children(".xiaoji").html(xiaoji);
		})
	}
	
	
	function zongjia(){
		var zongjia=0;
		$(".xiaoji").each(function(){
			var dan=$(this).html();
			zongjia=parseFloat(zongjia)+parseFloat(dan);
			zongjia=zongjia.toFixed(1);
		})
		$(".zongjia_1 span").html(zongjia);
	}
	
	
	$("[name='del']").click(function(){
		var shu=$(this).next().val();
		if(shu-1==0){
			alert("不能再减了")
		}else{
			var shu=parseInt(shu)-1;
			$(this).next().val(shu);
			xiaoji();
			zongjia();
		}
	})
	
	$("[name='add']").click(function(){
		var shu=$(this).prev().val();
		var shu=parseInt(shu)+1;
		$(this).prev().val(shu);
		xiaoji();
		zongjia();
	})
	
	
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