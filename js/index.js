//加清除浮动
$('.content').children('div').addClass('clear');
//点赞
$('.xin').click(function () {
	var num=parseInt($(this).next('p').html());
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		num--;
		$(this).next().html(num);
	}else{
		$(this).addClass('active');
		num++;
		$(this).next().html(num);
	}
	
});
//点击查看评论
//默认显示3条评论
for(var i=3;i<$('.third').length;i++){
	$('.third').eq(i).hide();//默认只显示3条评论
}
$('.showMore').click(function(){
	if($(this).siblings('.third').eq(3).css('display')=='none'){
		$('.third').show();
		$(this).children('span').html('收起评论');
	}else{
		for(var i=3;i<$('.third').length;i++){
			$('.third').eq(i).hide();//默认只显示3条评论
		}
		$(this).children('span').html('查看全部评论');
	}
});
//判断图片个数决定尺寸
$('ul').each(function(){
	var imgLength=$(this).find('.userImg').length;
	if(imgLength==1){
		$(this).find('.userImg').css({'width':'1.72rem','height':'1.72rem'});
	}else if(imgLength==2){
		$(this).find('.userImg').css({'width':'1.34rem','height':'1.34rem'});
	}else if(imgLength==3){
		$(this).find('.userImg').css({'width':'0.88rem','height':'0.88rem'});
	}else if(imgLength==4){
		$(this).find('.userImg').css({'width':'1.34rem','height':'1.34rem'});
	}else if(imgLength>=5){
		$(this).find('.userImg').css({'width':'0.88rem','height':'0.88rem'});
	}
});