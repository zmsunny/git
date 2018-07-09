require(['config'],function(){
    require(['jquery','xZoom'],function(){
        jQuery(function($){
            //加载头部尾部
            $('#zol-head').load('../html/head.html');
            $('#zol-foot').load('../html/footer.html');
            var pamars = location.search.slice(1);
            pamars = pamars.split('=');
            //ajax发送请求生成详情页信息
            $.ajax({
                url:"../php/detail.php",
                data:{id:pamars[1]},
                success:function(res){     
                    var data=window.eval('('+res+')');
                    $('p.title').html(data.describle);
                    $('p.title2').html(data.goodsName);
                    $('span.price').html(data.price);
                    $('img.bigpic').prop('src',data.img);
                    $('img.smallpic').prop('src',data.img);
                    $('span.oldPrice').html(data.oldprice);
                    //放大镜插件的调用
                    $('div.xzoom-t').xZoom({
                        width:400,
                        height:400 
                    })
                }
            })
            //商品数量的选择
            $('span.add').click(function(){
                var count = $('span.count').text();
                count++;
                $('span.count').text(count)
            })
            $('span.substr').click(function(){
                var count = $('span.count').text();
                count--;
                if(count <=0){
                    count = 0;
                }
                $('span.count').text(count)
            })
            //点击飞入购物车效果
            $('div.buySet').click(function(e){
                if($(e.target).prop('className')=='addCar'){
                    var cloneImg=$('img.bigpic').clone(true);
                    var top =$('img.bigpic').offset().top;
                    var left =$('img.bigpic').offset().left;
                    $(cloneImg).css('position','absolute');
                    $(cloneImg).css('transform','scale(0.3)');
                    $(cloneImg).css('left',`${left}px`);
                    $(cloneImg).css('top',`${top}px`);
                    $(cloneImg).appendTo('div.wrap')
                    var endTop =$('span.car').offset().top;
                    var endLeft =$('span.car').offset().left;
                    console.log(endTop,endLeft);
                    $(cloneImg).animate(
                        {left:`${endLeft-150}px`,top:`${endTop-150}px`},
                        {complete:function(){
                            $(cloneImg).remove();
                        }},
                        'slow'
                    );
                    var count = $('span.count').text();
                    var currentPrice = $('span.price').text();
                    var currentImg = $('img.bigpic')[0].src;
                    var currentGoods = $('p.title2').text();
                    $.ajax({
                        url:'../php/car.php',
                        data:{
                            img:currentImg,
                            price:currentPrice,
                            id:pamars[1],
                            title:currentGoods,
                            qty:count
                        }
                    })
                }
            })
            //点击立即购买获取当前页面的信息并且发送ajax到购物车
            $('span.buyNow').click(function(){
                var count = $('span.count').text();
                var currentPrice = $('span.price').text();
                var currentImg = $('img.bigpic')[0].src;
                var currentGoods = $('p.title2').text();
                $.ajax({
                    url:'../php/car.php',
                    data:{
                        img:currentImg,
                        price:currentPrice,
                        id:pamars[1],
                        title:currentGoods,
                        qty:count
                    },
                    success:function(){
                        window.location.href ='car.html'
                    }
                })
            })
        })  
    })
})
