require.config({
    paths: {
        'jquery': 'jquery-3.3.1'
    }
})
define(['jquery'], function($){
    return function(){
            var index=0;
            $('li.circle')[0].style.backgroundColor='red';
            var timer=setInterval(move,2000)
            function move(){
                index++;
                if(index>=3){
                    index=0; 
                }
                $('ul.banner_tab')[0].style.transform=`translateX(${900*index*-1}px)`;
                 for(var i=0;i<3;i++){
                   $('li.circle')[i].style.backgroundColor='#fff';  
                }
                $('li.circle')[index].style.backgroundColor='red';
            }
            for(let i=0;i<3;i++){
                $('li.circle')[i].index=i;
                $('li.circle')[i].onclick=function(){
                    var x= this.index;
                    index = x;
                    for(var j=0;j<3;j++){
                        $('li.circle')[j].style.backgroundColor='#fff';  
                    }
                    $('li.circle')[x].style.backgroundColor='red';
                    $('ul.banner_tab')[0].style.transform=`translateX(${900*x*-1}px)`;  
                }
                move();
            } 
            $('div.banner_wrap').mouseover(function(){
                clearInterval(timer)
            })
            $('div.banner_wrap').mouseout(function(){
                timer=setInterval(move,2000)
            })
            $($('.slide li').clone(true)).appendTo('ul.slide')
            var z=0;
            $('.leftBtn').click(function(){
                z--;
                if(z<0){
                    z=4;
                $('.slide')[0].style.transform =`translateX(${300*z*-1}px)`;
                
                }
                    $('.slide')[0].style.transform =`translateX(${300*z*-1}px)`;
            })
            $('.rightBtn').click(function(){
               slide()
            })
            var timer2 = setInterval(slide,1500)
            $('div.groupBuy').mouseover(function(){
                clearInterval(timer2)
            })
            $('div.groupBuy').mouseout(function(){
                timer2=setInterval(slide,1500)
            })
            function slide(){
                z++;
                $('.slide')[0].style.transform =`translateX(${300*z*(-1)}px)`;
                if(z>=5){
                    z=0
                    $('.slide')[0].style.transform = '0px';  
                }
            }
        }
    
})
