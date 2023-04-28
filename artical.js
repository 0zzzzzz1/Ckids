// 會員登入

// hide all
$('.signin').hide();
$('.register').hide();

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
})


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

// 4
$('.articalDiv').eq(3).on({
    mouseenter:()=>{
        $('.articalLineFour, .artilineFour').css({'width':'100%'});
        $('.articalDiv button').eq(3).css({'color':'white','backgroundColor':'rgb(30, 30, 30)'});
    },
    mouseleave:()=>{
        $('.articalLine').css({'width':'0%'});
        $('.articalDiv button').eq(3).css({'color':'rgb(30, 30, 30)','backgroundColor':'white'});
    }
});
    
// 5
$('.articalDiv').eq(4).on({
    mouseenter:()=>{
        $('.articalLineFive, .artilineFive').css({'width':'100%'});
        $('.articalDiv button').eq(4).css({'color':'white','backgroundColor':'rgb(30, 30, 30)'});
    },
    mouseleave:()=>{
        $('.articalLine').css({'width':'0%'});
        $('.articalDiv button').eq(4).css({'color':'rgb(30, 30, 30)','backgroundColor':'white'});
    }
});
    
// 6
$('.articalDiv').eq(5).on({
    mouseenter:()=>{
        $('.articalLineSix, .artilineSix').css({'width':'100%'});
        $('.articalDiv button').eq(5).css({'color':'white','backgroundColor':'rgb(30, 30, 30)'});
    },
    mouseleave:()=>{
        $('.articalLine').css({'width':'0%'});
        $('.articalDiv button').eq(5).css({'color':'rgb(30, 30, 30)','backgroundColor':'white'});
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
$('.saveFour').click(()=>{
    $('.saveFour').toggleClass('articalSaveClick')
});
$('.saveFive').click(()=>{
    $('.saveFive').toggleClass('articalSaveClick')
});
$('.saveSix').click(()=>{
    $('.saveSix').toggleClass('articalSaveClick')
});
