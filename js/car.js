require(['config'],function(){
    require(['jquery'],function(){
       jQuery(function($){
    //读取相应购物车数据库生成购物车商品列表
        $.ajax({
            url:'../php/shopping.php',
            success:function(data){
                var res=window.eval('('+data+')');
                generateCar(res);
                get();
            }
        })
        function generateCar(res){
            $('ul.shopList').html();
            let _res =$.map(res,function(item){
                var money=item.price*item.qty
                return `<li data=${item.id} class="shopCar">
                <div class="main"><img src=${item.img}><p>${item.title}</p></div>
                <div class="price">${item.price}</div>
                <div class="total"><span class="add">+</span><span class="qty">${item.qty}</span><span class="substr">-</span></div>    
                <div class="res"><span class="money">${money}</span></div>
                <div class="operate"><a href="javascript:">删除</a></div>
                </li>`
            })
            $('ul.shopList').html(_res);
        }
    //购物车页面商品数量操作
            $('ul.shopList').click(function(e){
                var target = e.target
                if(e.target.className=='add'){
                    var count = $(e.target).next().html();
                    count++;
                    $(e.target).next().html(count);
                    var price =  $(e.target).parent().prev().html();
                    var total = count*price;
                    $(e.target).parent().next().children('span').html(total)
                    get()
                }
                else if(e.target.className=='substr'){
                    var count = $(e.target).prev().html();
                    console.log(count)
                    count--;
                    $(e.target).prev().html(count);
                    if(count<=0){
                        count=0;
                        $(e.target).prev().html(0);
                    }
                    var price =  $(e.target).parent().prev().html();
                    var total = count*price;
                    $(e.target).parent().next().children('span').html(total);
                    get();
                }
                else if(e.target.tagName='A'){
                    $(e.target).parent().parent().remove();
                }
            })
            function get(){
                var money =0;
                for(var i=0;i<$('span.money').length;i++){
                money +=$('span.money').eq(i).text()*1;
                }
                $('span.total').text(money)
            }
        }) 
    })
})






