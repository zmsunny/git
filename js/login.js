require(['config'],function(){
    require(['jquery'],function(){
        jQuery(function($){
            //点击用户登入显示用户登入表单
            $('h3.vipLogin').click(function(){
                $('h3.buyerLogin').css('border-bottom','0 none') 
                $('h3.vipLogin').css('border-bottom','2px solid #F81015')        
                $('div.login_buyer').css('display','block')
                $('div.login_seller').css('display','none')
            })
            //点击商家登入显示商家登入表单
            $('h3.buyerLogin').click(function(){
                $('h3.vipLogin').css('border-bottom','0 none')
                $('h3.buyerLogin').css('border-bottom','2px solid #F81015') 
                $('div.login_buyer').css('display','none')
                $('div.login_seller').css('display','block')
            })
            //点击登入后发送请求验证密码和用户名是否正确
            $('.login_buyer input[name="btn"]').click(function(){
                $.ajax({
                url:'../php/login.php',
                data:{
                    userNum:$('input[name="username"]').val().trim(),
                    password:$('input[name="pwd"]').val().trim()
                    },
                    beforeSend:function(){
                      $('input[name="btn"]').val('正在登入中...')  
                    },
                    success:function(res){
                        console.log(res)
                        if(res == 'success'){
                            window.location.href='index.html';
                        }
                        if(res =='fail'){
                            alert('用户名或者密码错误')
                        }
                    },
                    complete:function(){$('input[name="btn"]').val('登入')}
                })
            })
        }) 
    })
})
