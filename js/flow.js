/*
 * @Author: your name
 * @Date: 2020-09-16 17:29:20
 * @LastEditTime: 2021-01-23 16:16:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \极果02\js\flow.js
 */
function flowchange_(){
    $.ajax({
        url:'./json/useing_one.json',
        success:function(msg){
            // console.log(msg);
            var innerT = doT.template($('#free_list_3').text());
            $('#flow_1').html(innerT(msg.splice(0,4)));
       }
    });
    }
    flowchange_();

    
    //倒计时移入动画
    $('.main_first_2').animate({
        right: 0,
        top: 0,
        
    },1000);