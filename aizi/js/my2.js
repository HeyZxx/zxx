$(function(){
    var s_height=$(window).height();
    $("body").css("height",s_height);
    if ((/Android/gi).test(navigator.userAgent)) {
        window.addEventListener('resize', function () {
            if (document.activeElement.tagName == 'INPUT' || 
                document.activeElement.tagName == 'TEXTAREA') {
                window.setTimeout(function () {
                    document.activeElement.scrollIntoViewIfNeeded();
                }, 0);
            }
        });
    }
	$(".btn").click(function(){
        var numError = $('form .onError').length;
        if(numError<1){
            /*var names=$(".name").val();
			var grade=$(".grade").val();
			var mobile=$(".tell").val();
			var qq=$(".qq").val();
            var zuopin=$(".zuopin").val();
			$.ajax({
				type:"post",
				url:"http://yuxiedu.org.cn/addbm.php",
				data:{"name":names,"class":grade,"moblie":mobile,"qq":qq,"zuopin":zuopin},
				dataType:"json",
				success:function(msg){
					if(msg==2){
                        alert("报名成功！\n请将您的作品发送至\n473267699@QQ.com");
                    }else{
                        alert("请勿重复报名！");
                    }
				}
			})*/
            $('.form :input').blur(function(){
        var $parent = $(this).parent();
        $parent.find(".formtips").remove();
        //验证用户名
        if($(this).hasClass('name')){
            if( this.value=="" || !/^[\u4e00-\u9fa5 ]{2,20}$/.test(this.value)){
                var errorMsg = '请输入正确姓名!';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }/*else{
                var okMsg = '输入正确!';
                $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }*/
        }
        // 验证手机号
        if($(this).hasClass('mobile')){
           if( this.value.length==11){
                
            }else{
                var errorMsg = '手机号格式错误!';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }
        }
        // banji
        if($(this).hasClass('grade')){
           if( this.value==""){
                var errorMsg = '班级信息不能为空!';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                
            }
        }
         // 作品
        if($(this).hasClass('zuopin')){
           if( this.value==""){
                var errorMsg = '作品名称不能为空!';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                
            }
        }
        // 验证qq
        if($(this).hasClass('qq')){
            var qq=this.value;
           if(isNaN(qq)){
                var errorMsg = '请输入正确QQ号码!';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                if(this.value=="" && this.value.length<6){
                    var errorMsg = 'QQ号码不正确!';
                    $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }/*else{
                    var errorMsg = '输入正确!';
                    $parent.append('<span class="formtips onSuccess">'+errorMsg+'</span>');
                }*/
            }
        }
         //验证邮件
         /*if( $(this).is('#email') ){
            if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
                  var errorMsg = '请输入正确的E-Mail地址.';
                  $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                  var okMsg = '输入正确.';
                  $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
         }*/
    });
                var names=$('.name').val();
                var zuopin=$('.zuopin').val();
                var grade=$('.grade').val();                          
                var qq=$('.qq').val();                          
                var moblie=$('.mobile').val();    
                if (names == "" || zuopin == "" || grade=="" ||qq=="" ||moblie=="" ) {
                    alert("请填写信息！");
                    return false;
                }
                $.ajax({
                    type: "post",
                    url: "http://yuxiedu.org.cn/addbm.php",
                    dataType: "json",
                    data:{"name":names,"qq":qq,"zuopin":zuopin,"class":grade,"moblie":moblie},
                    success: function(msg){
                        //alert(msg);
                        if(msg == 2){
                            alert("报名成功！\n请将您的作品发送至\n473267699@QQ.com");
                            
                        }else{
                            alert("请勿重复报名！");
                        };
                    },
                    
                });

        }else{
        	alert("填写信息有错误！");
        }
	
	$('.form :input').blur(function(){
        var $parent = $(this).parent();
        $parent.find(".formtips").remove();
        //验证用户名
        if($(this).hasClass('name')){
            if( this.value=="" || !/^[\u4e00-\u9fa5 ]{2,20}$/.test(this.value)){
                var errorMsg = '请输入正确姓名!';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }/*else{
                var okMsg = '输入正确!';
                $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }*/
        }
        // 验证手机号
        if($(this).hasClass('mobile')){
           if( this.value.length==11){
                
            }else{
                var errorMsg = '手机号格式错误!';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }
        }
        // banji
        if($(this).hasClass('grade')){
           if( this.value==""){
                var errorMsg = '班级信息不能为空!';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                
            }
        }
         // 作品
        if($(this).hasClass('zuopin')){
           if( this.value==""){
                var errorMsg = '作品名称不能为空!';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                
            }
        }
        // 验证qq
        if($(this).hasClass('qq')){
        	var qq=this.value;
           if(isNaN(qq)){
                var errorMsg = '请输入正确QQ号码!';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
            	if(this.value=="" && this.value.length<6){
            		var errorMsg = 'QQ号码不正确!';
                	$parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            	}/*else{
            		var errorMsg = '输入正确!';
                	$parent.append('<span class="formtips onSuccess">'+errorMsg+'</span>');
            	}*/
            }
        }
         //验证邮件
         /*if( $(this).is('#email') ){
            if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
                  var errorMsg = '请输入正确的E-Mail地址.';
                  $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                  var okMsg = '输入正确.';
                  $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
         }*/
    });/*.keyup(function(){
       $(this).triggerHandler("blur");
    }).focus(function(){
         $(this).triggerHandler("blur");
    });//end blur*/

    
    //提交，最终验证。
    
    //重置
    /*$('#res').click(function(){
        $(".formtips").remove(); 
    });*/
});})
