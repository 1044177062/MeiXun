$(function(){
	
	//ajax循环得到城市
	$.ajax({
		"url":"json/cs.html",
		"type":"get",
		"data":"#",
		"dataType":"json",
		"success":function(data){
			$.each(data,function(i){
				$(".myselelct").append("<option>"+data[i].tag_name+"</option>");
			})
		}
	})	
	
	$(".name").blur(xzname);
	$(".password").blur(xzpassword);
	$(".repassword").blur(xzrepassword);
	$("#yam").blur(xzyzm);
	
	$("#myform").submit(function(){
		var flag=true;
		if(xzname()==false){
			flag=false;
		}
		if(xzpassword()==false){
			flag=false;
		}
		if(xzrepassword()==false){
			flag=false;
		}
		if(xzyzm()==false){
			flag=false;
		}
		if(flag==true){
			alert("注册成功");
			var name=$(".name").val();
			var password=$(".password").val();
			sessionStorage.setItem(name,password);
		}
		return flag;
	})
})

function xzyzm(){
	var yzm=$("#yzm").val();
	if(yzm!="BATB"){
		return false;
	}
	return true;
}


function xzrepassword(){
	var password=$(".password").val();
	var repassword=$(".repassword").val();
	if(repassword==""){
		$(".repasswordtishi").html("不能为空");
		return false;
	}else if(repassword!=password){
		$(".repasswordtishi").html("两次密码不一致");
		return false;
	}
	$(".repasswordtishi").html("");
	return true;
	
}

function xzname(){
	var name=$(".name").val();
	var bds=/^[A-Za-z0-9]{5,10}$/;
	if(name==""){
		$(".nametishi").html("不能为空");
		return false
	}else if(bds.test(name)==false){
		$(".nametishi").html("数字英文组成2到16位字符");
		return false
	}
	$(".nametishi").html("");
	return true;
	
}

function xzpassword(){
	var password=$(".password").val();
	var bds=/^[A-Za-z0-9]{5,19}$/;
	if(password==""){
		$(".passwordtishi").html("不能为空");
		return false
	}else if(bds.test(password)==false){
		$(".passwordtishi").html("6到20位字符组成");
		return false
	}
	$(".passwordtishi").html("");
	return true;
}
