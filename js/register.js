require(['config'],function(){
    require(['jquery'],function(){
        jQuery(function($){
            //失去焦点时输入框边框颜色改变和验证输入的格式是否正确
            $('input[name="tel"]').blur(function(){
                $('input[name = "tel"]').css('border-color','#ccc');
                let telVal = $('input[name="tel"]').val();  
                if(telVal == ''){
                    $('#tips_tel').html($('#tips_tel').html()+"手机号不能为空");
                } 
                else if(!(/^1[34578]\d{9}$/.test(telVal))){
                    $('#tips_tel').html($('#tips_tel').html()+"手机号码不符合规范");
                }
                return false;
            })
            //获得焦点时判断信息清空，聚焦输入框
            $('input[name="tel"]').focus(function(){
                $('input[name="tel"]').css('border-color','red');
                $('#tips_tel').empty();
            })
            //密码的格式判断
            $('input[name="pwd"]').blur(function(){
                $('input[name="pwd"]').css('border-color','#ccc');
                let pwdVal = $('input[name="pwd"]').val();
                if(pwdVal == ''){
                    $('#tips_pwd').html($('#tips_pwd').html()+'密码不能为空') 
                }
                else if(!(/^[\da-zA-Z]{6,16}$/).test(pwdVal)){
                    $('#tips_pwd').html($('#tips_pwd').html()+'密码应为6-16位字母数字组合')
                }
                return false;
            })
            $('input[name="pwd"]').focus(function(){
                $('input[name="pwd"]').css('border-color','red'); 
                $('#tips_pwd').empty();
            })
            $('input[name="pwd_confirm"]').blur(function(){
                $('input[name="pwd_confirm"]').css('border-color','#ccc')
                var cfmVal =  $('input[name="pwd_confirm"]').val();
                if(cfmVal != $('input[name="pwd"]').val()){
                    $('#tip_Confirm').html($('#tip_Confirm').html()+'前后输入密码不一致')
                }
                return false;
            })
            $('input[name="pwd_confirm"]').focus(function(){
                $('input[name="pwd_confirm"]').css('border-color','red');
                $('#tip_Confirm').empty(); 
            })
            //随机验证码生成
            var res = '';
            var str = '0123456789abcdefghijklmnopqrstuvwxyz';
            $('#getRandomNum').click(function(){
                res =""
                getcode();
            })
            function getcode(){
                for(var i =0;i<6;i++){
                    res += str[parseInt(Math.random()*str.length)];
                }
                $('#getRandomNum')[0].innerText = res;
            }
                getcode();
            $('input[name="confirm"]').blur(function(){
                $('input[name="confirm"]').css('border-color','#ccc')
                if($('input[name="confirm"]').val().trim() != $('#getRandomNum')[0].innerText.trim()){
                    $('#confirmTip').html($('#confirmTip')[0].innerText+'验证码输入错误')
                }
                return false;
            })
            $('input[name="confirm"]').focus(function(){
                $('input[name="confirm"]').css('border-color','red')
                $('#confirmTip').empty();
            })
            //接收短信60s倒计时
            $('#getNoteNum').click(function(){
                $('#getNoteNum').attr('disabled','true');
                $('#getNoteNum').text('还剩60s');
                var count = 60;
                var timer = setInterval(function(){
                count--;
                $('#getNoteNum')[0].innerText=`还剩${count}s`;
                    if(count<0){
                        $('#getNoteNum')[0].innerText =`获取短信验证码`;  
                        $('#getNoteNum').removeAttr('disabled');  
                    } 
                },1000)
            })
             //点击注册按钮发送ajax请求验证用户名和注册
            $('input.resign_btn').click(function(){
                $.ajax({
                    url:'../php/reg.php',
                    data:{
                        phone:$('input[name="tel"]').val().trim(),
                        password:$('input[name="pwd"]').val().trim(),
                    },
                    success:function(data){
                        console.log(data)
                        if(data == 'success'){
                            alert('注册成功');
                            window.location.href='login.html';
                        }
                        if(data == 'exist'){
                            alert('用户名重复');
                        }
                    }
                })
            })
        })
    })
})



