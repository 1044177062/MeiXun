$(function(){
	$("#yhm").blur(xzuser);
	$("#mm").blur(xzpwd);
	
	$("#myform").submit(function(){
		var flag=true;
		if(!xzuser()) flag=false;
		if(!xzpwd()) flag=false;
		return flag;
	})
})

function xzuser(){
	var yhm=$("#yhm").val();
	if(yhm==""){
		$(".yhmid").html("输入不能为空");
		return false
	}
	sessionStorage.setItem("username",yhm);
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

