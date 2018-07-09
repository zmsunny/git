require(['config'],function(){
    require(['jquery','banner','lazy'],function($,banner,lazy){
        banner();
        //请求数据生成团购界面
        $.ajax({
            url:'../php/list2.php',
            data:{type:0},
            success:function(data){
                var res =window.eval('('+data+')')
                get(res);
            },
            //懒加载插件调用
            complete:function(){
                $("img.lazy").lazyload({
                    effect : "slideDown",
                    failure_limit : 20,
                    threshold : 200
                })
            }
        })
        function get(data){
            $('ul.groupDetail').html('');
            let res = $.map(data,function(item){
                return `<li  class="list" data-id=${item.id}>
                <a href="#">
                    <div class="photo"><img class="lazy" width="270" height="300" data-original=${item.img}></div>
                    <div class="price"><h4>价格:￥${item.price}</h4></div>
                    <div class="title"><p>${item.describle}</p></div>
                </a>
                    <div class="pla">${item.goodsName}</div>
                    <button class="btnAdd">马上抢</button>
                </li>`
            })
        $('ul.groupDetail').html(res);
        }
        $('ul.groupDetail').click(function(e){
            var target = e.target;
            if(target.tagName=='BUTTON'){
                var id=$(e.target).parent().attr('data-id');
                console.log(id)
                window.location.href='detail.html'+'?'+'index='+id;
            }
        })
        //首页商品价格排序
        var idx = true;
        $('span.sortPrice').click(function(){
            if(idx){
                $('span.sortPrice').text('价格↓')
                $.ajax({
                    url:'../php/list2.php',
                    data:{type:0},
                    success:function(data){
                        var res =window.eval('('+data+')')
                        res = res.sort(function(a,b){return a.price-b.price});
                        get(res);
                    },
                    complete:function(){
                        $("img.lazy").lazyload({
                            effect : "slideDown",
                            failure_limit : 20,
                            threshold : 200
                        })
                    }
                }) 
                idx=false;
            }else{
                $('span.sortPrice').text('价格↑')
                $.ajax({
                    url:'../php/list2.php',
                    data:{type:0},
                    success:function(data){
                        var res =window.eval('('+data+')');
                        res=res.sort(function(a,b){return b.price-a.price});
                        console.log(res)
                        get(res);
                    },
                    complete:function(){
                        $("img.lazy").lazyload({
                            effect : "slideDown",
                            failure_limit : 20,
                            threshold : 200
                        })
                    }
                }) 
            idx=true;  
            } 
        })
        //吸顶效果
        $(window).scroll(function(){
            if($(document).scrollTop()>300){
                $('div.index_explore').css({
                    'position':'fixed',
                    'top':0,
                    'z-index':500,
                    'width':'100%',
                    'background':' #fff'
                })
                $('div.index_explore').fadeIn(2000);
            }else{
                $('div.index_explore').css({
                    'position':'static'
                })
            }
            if($(document).scrollTop()>600){
                $('div.backTop').css('display','block')
            }else{
                $('div.backTop').css('display','none')
            }
        })
        //回到顶部
        $('div.backTop').click(function(){
            $('html , body').animate({scrollTop: 0},'slow');
        })
    })
})
