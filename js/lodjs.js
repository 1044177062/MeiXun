$(function(){
	$("#yhm").blur(xzuser);
	$("#mm").blur(xzpwd);
	
	$("#myform").submit(function(){
		var flag=true;
		if(!xzuser()) flag=false;
		if(!xzpwd()) flag=false;
		var yhm=$("#yhm").val();
		var mm=$("#mm").val();
		if(sessionStorage.getItem(yhm)==null||sessionStorage.getItem(yhm)!=mm){
			alert("未找到此用户或密码错误");
			flag=false;
		}else{
			sessionStorage.setItem("username",yhm);
			alert("登入成功");
			flag=true;
		}
		return flag;
	})
})

function xzuser(){
	var yhm=$("#yhm").val();
	if(yhm==""){
		$(".yhmid").html("输入不能为空");
		return false
	}
	$(".yhmid").html(".");
	return true
}

function xzpwd(){
	var mm=$("#mm").val();
	if(mm==""){
		$(".mmid").html("输入不能为空");
		return false
	}
	$(".mmid").html(".");
	return true
}

