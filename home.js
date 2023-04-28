// 更新頁面回到頂部
// window.onload=function(){
//     if(document.body.scrollTop>0){
//         console.log(1);
//         window.scrollTo(0,-1);
//         document.body.scrollTop=0;
//     }
//     window.scrollTo(0,-1);
//     document.body.scrollTop=0;
// }

// 會員登入

// 預設 登入-------------------------
$('.navbarImg').click(()=>{
    $('.signin').show();
})
$('.signinClose').click(()=>{
    $('.signin').hide();
})
$('.signinText:nth-child(2)').click(()=>{
    $('.signin').hide();
    $('.register').show();
})
$('.signinInput:nth-child(3)').click(()=>{
    $('.signin').hide();
})
// save
$('.navbarSave').click(()=>{
    $('.signin').show();
})

// 註冊------------------------------
$('.registerClose').click(()=>{
    $('.register').hide();
})
$('.registerText:nth-child(1)').click(()=>{
    $('.register').hide();
    $('.signin').show();
})
$('.registerInput:nth-child(5)').click(()=>{
    $('.register').hide();
    $('.signin').show();
})

// 驗證
// $('input').addEventListener('invalid',(e)=>{
//     alert('尚未填寫完成');
// })


// 導覽列   -----------------------------------------------------------------------------------------------------

// 收縮高度
addEventListener('scroll', () => {
    if(window.scrollY>300){
        $('.navbar').css({
            'height':' 80px'
        });
    }else{
        $('.navbar').css({
            'height':' 120px'
        });
    }
});




// 中間 ---------------------------------------------------------------------------------------------------------------

// 1. 關於
$('.aboutText, .aboutEnter button').on({
    mouseenter:()=>{
        $('.aboutEnter button').css({'color':'white','backgroundColor':'rgb(30, 30, 30)'});
    },
    mouseleave:()=>{
        $('.aboutEnter button').css({'color':'rgb(30, 30, 30)','backgroundColor':'white'});
    }
});

// 2. 輪播 -----------------------------------

// right btn
$('.rightControl').on('click',()=>{
    plusSlides(1);
});
// left btn
$('.leftControl').on('click',()=>{
    plusSlides(-1);
});

// 預設第一張
let slideIndex = 1;
showSlides(slideIndex);
console.log(slideIndex);

// 增減
function plusSlides(n) {
    showSlides(slideIndex += n);
}; 
// 幻燈片
function showSlides(n) {
    let slidesImg = $('.carouselImg');
    let slidesText = $('.imgText');
    let slidesImgNum = $('.imgNum');

    if (n > slidesImg.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slidesImg.length}

    slidesImg.css({'visibility':'hidden'});
    slidesText.css({'visibility':'hidden'});
    slidesImgNum.css({'visibility':'hidden'});

    slidesImg[slideIndex-1].style.visibility = "visible";
    slidesText[slideIndex-1].style.visibility = "visible";
    slidesImgNum[slideIndex-1].style.visibility = "visible";
};


//3. 公告 ------------------------------------------------------

let textWidth = $('.announcementText').width();
let windowWidth = $(window).width();
let leftX = windowWidth /2 + textWidth /2;
let leftXpx = leftX+ 'px';

// 起始 藏右側
$('.announcementText').css({
    'left':leftXpx
});

// 滾動
$(function(){
    let p=0,t=0;
    $(window).scroll(function(){
    p=$(this).scrollTop();
    if(window.scrollY>400 ){
        
        if(t<p){//下滚
            leftX -= 20;  
            leftXpx =leftX+'px'; 
            $('.announcementText').css({
                'left':leftXpx
        });
        }else{//上滚            
            leftX += 20;  
            leftXpx =leftX+'px'; 
            $('.announcementText').css({
                'left':leftXpx
            });
        }
    };
    setTimeout(function(){t=p;},0)
    });
})


// 4. 活動 activity ---------------------------------------

// 東湖相簿
$('.aOne').on({
    mouseenter:()=>{
        $('#albumOne').addClass('albumInside');
        $('.lineOne').css({'width':'100%'});
        $('.activitybtnOne').css({'color':'white','backgroundColor':'rgb(30, 30, 30)'});
    },
    mouseleave:()=>{
        $('#albumOne').removeClass('albumInside');
        $('.lineOne').css({'width':'0%'});
        $('.activitybtnOne').css({'color':'rgb(30, 30, 30)','backgroundColor':'white'});
    }
})

// 永和相簿
$('.aTwo').on({
    mouseenter:()=>{
        $('#albumTwo').addClass('albumInside');
        $('.lineTwo').css({'width':'100%'});
        $('.activitybtnTwo').css({'color':'white','backgroundColor':'rgb(30, 30, 30)'});
    },
    mouseleave:()=>{
        $('#albumTwo').removeClass('albumInside');
        $('.lineTwo').css({'width':'0%'});
        $('.activitybtnTwo').css({'color':'rgb(30, 30, 30)','backgroundColor':'white'});
    }
})

// 內湖相簿
$('.aThree').on({
    mouseenter:()=>{
        $('#albumThree').addClass('albumInside');
        $('.lineThree').css({'width':'100%'});
        $('.activitybtnThree').css({'color':'white','backgroundColor':'rgb(30, 30, 30)'});
    },
    mouseleave:()=>{
        $('#albumThree').removeClass('albumInside');
        $('.lineThree').css({'width':'0%'});
        $('.activitybtnThree').css({'color':'rgb(30, 30, 30)','backgroundColor':'white'});
    }
})

// 5. 文章 -----------------------------------------------

// 1
$('.articalDiv').eq(0).on({
    mouseenter:()=>{
        $('.articalLineOne, .artilineOne').css({'width':'100%'});
        $('.articalDiv a').eq(0).css({'color':'white','backgroundColor':'rgb(30, 30, 30)'});
    },
    mouseleave:()=>{
        
        $('.articalLine').css({'width':'0%'});
        $('.articalDiv a').eq(0).css({'color':'rgb(30, 30, 30)','backgroundColor':'white'});
    }
});

// 2
$('.articalDiv').eq(1).on({
    mouseenter:()=>{
        $('.articalLineTwo, .artilineTwo').css({'width':'100%'});
        $('.articalDiv a').eq(1).css({'color':'white','backgroundColor':'rgb(30, 30, 30)'});
    },
    mouseleave:()=>{
        $('.articalLine').css({'width':'0%'});
        $('.articalDiv a').eq(1).css({'color':'rgb(30, 30, 30)','backgroundColor':'white'});
    }
});

// 3
$('.articalDiv').eq(2).on({
    mouseenter:()=>{
        $('.articalLineThree, .artilineThree').css({'width':'100%'});
        $('.articalDiv a').eq(2).css({'color':'white','backgroundColor':'rgb(30, 30, 30)'});
    },
    mouseleave:()=>{
        $('.articalLine').css({'width':'0%'});
        $('.articalDiv a').eq(2).css({'color':'rgb(30, 30, 30)','backgroundColor':'white'});
    }
});

// save
$('.saveOne').click(()=>{
    $('.saveOne').toggleClass('articalSaveClick')
});
$('.saveTwo').click(()=>{
    $('.saveTwo').toggleClass('articalSaveClick')
});
$('.saveThree').click(()=>{
    $('.saveThree').toggleClass('articalSaveClick')
});

    



// 6. 聯絡 contact ----------------------------------------

// 隱藏永和、內湖
$('#textY, #textN').hide();

// 東湖
$('#btnD').on({
    click:()=>{
        $('#mapD, #textD' ).show();
        $('#mapY, #textY').hide();
        $('#mapN, #textN').hide();
    },
    mouseenter:()=>{
        $('#btnD').css({
            'height': '100px',
            'backgroundColor':'rgb(30, 30, 30)',
            'color':'white'
        })
    },
    mouseleave:()=>{
        $('#btnD').css({
            'height': '100px',
            'backgroundColor':'white',
            'color':'rgb(30, 30, 30)'
        })
    }
});

// 永和
$('#btnY').on({
    click:()=>{
        $('#mapY, #textY').show();
        $('#mapD, #textD').hide();
        $('#mapN, #textN').hide();
    },
    mouseenter:()=>{
        $('#btnD').css({
            'height': '30px',
            'backgroundColor':'white',
            'color':'white'
        });
        $('#btnY').css({
            'height': '100px',
            'backgroundColor':'rgb(30, 30, 30)',
            'color':'white'
        });
    },
    mouseleave:()=>{
        $('#btnD').css({
            'height': '100px',
            'backgroundColor':'white',
            'color':'rgb(30, 30, 30)'
        });
        $('#btnY').css({
            'height': '30px',
            'backgroundColor':'white',
            'color':'white'
        });
    }
});

// 內湖
$('#btnN').on({
    click:()=>{
        $('#mapN, #textN').show();
        $('#mapD, #textD').hide();
        $('#mapY, #textY').hide();
    },
    mouseenter:()=>{
        $('#btnD').css({
            'height': '30px',
            'backgroundColor':'white',
            'color':'white'
        });
        $('#btnN').css({
            'height': '100px',
            'backgroundColor':'rgb(30, 30, 30)',
            'color':'white'
        });
    },
    mouseleave:()=>{
        $('#btnD').css({
            'height': '100px',
            'backgroundColor':'white',
            'color':'rgb(30, 30, 30)'
        });
        $('#btnN').css({
            'height': '30px',
            'backgroundColor':'white',
            'color':'white'
        });
    }
});


// footer






