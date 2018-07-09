require(['config'],function(){
    require(['jquery'],function(){
        jQuery(function($){
            //ajax请求数据生成列表页
            var qty = 12;
            
            $.ajax({
                url:'../php/list.php',
                data:{type:0},
                success:function(data){
                    var res =window.eval('('+data+')');
                    console.log(res);
                    creatIndex(res,qty);
                }
            })
            $.ajax({
                url:'../php/list2.php',
                data:{type:0},
                success:function(data){
                    var res =window.eval('('+data+')')
                    get(res)
                }
                
            })
            //生成页码标签
            function creatIndex(res,data){
                var num = Math.ceil(res.length/qty)
                for(var i=0;i<num;i++){
                    var span =document.createElement('span');
                    span.className="pageNum"
                    span.innerText = i+1;
                    $(span).appendTo('div.page');
                }  
                $('span.pageNum')[0].style.backgroundColor='orange';
                
            }
            //动态生成商品列表页
            function get(data){
                $('ul.groupDetail').html('');
                let res = $.map(data,function(item){
                    return `<li class="list" data-id=${item.id}>
                    <a  class="xq" href="javascript:">
                        <div class="photo"><img class="lazy" width="270" height="300" src=${item.img}></div>
                        <div class="price"><h4>价格:￥${item.price}</h4></div>
                        <div class="title"><p>${item.describle}</p></div>
                    </a>
                        <div class="pla">${item.goodsName}</div>
                        <button class="btnAdd">马上抢</button>
                    </li>`
                })
            $('ul.groupDetail').html(res);
            }
            //点击商品跳转到详情页
            $('ul.groupDetail').click(function(e){
                var target = e.target;
                if(target.tagName=='BUTTON'){
                    var id=$(e.target).parent().attr('data-id');
                    console.log(id)
                    window.location.href='detail.html'+'?'+'index='+id;
                }
                if(target.tagName=='IMG'){
                    var id=$(e.target).parent().parent().parent().attr('data-id');
                    console.log(id)
                    window.location.href='detail.html'+'?'+'index='+id;  
                }
            })
            //点击页码跳转到相应的页码商品信息
            $('div.page').click(function(e){
                if(e.target.className=="pageNum"){
                    $('span.pageNum')[0].style.backgroundColor='#fff';
                    $('span.pageNum')[1].style.backgroundColor='#fff';
                    $('span.pageNum')[2].style.backgroundColor='#fff';
                    e.target.style.backgroundColor='orange';                   
                var pageNum = $(e.target).text();
                    $.ajax({
                        url:'../php/list2.php',
                        data:{qty:12,page:pageNum},
                        success:function(data){
                            var res =window.eval('('+data+')')
                            console.log(res);
                            get(res)
                        }
                    })
                }
            })
        })
    })
})
