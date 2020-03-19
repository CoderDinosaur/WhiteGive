//菜单栏鼠标事件
$(".top_tab li").on("mouseover",function(){
  	$(this).addClass("active_h");
  	$(this).siblings().removeClass("active_h");
            
});
$(".top_tab li").on("mouseout",function(){
	$(this).removeClass("active_h");
});

//疑问
$("#myProblem").on("mouseover",function(){
  	$(this).addClass("active_right");
});
$("#myProblem").on("mouseout",function(){
	$(this).removeClass("active_right");
});


//被理解
$("#myRealize").on("mouseover",function(){
  	$(this).addClass("active_right");
});
$("#myRealize").on("mouseout",function(){
	$(this).removeClass("active_right");
});


//笔记
$("#myNote").on("mouseover",function(){
  	$(this).addClass("active_right");
});
$("#myNote").on("mouseout",function(){
	$(this).removeClass("active_right");
});


//好问课堂
$("#myClass").on("mouseover",function(){
  	$(this).addClass("active_right");
});
$("#myClass").on("mouseout",function(){
	$(this).removeClass("active_right");
});

//专栏
$("#myColumn").on("mouseover",function(){
  	$(this).addClass("active_right");
});
$("#myColumn").on("mouseout",function(){
	$(this).removeClass("active_right");
});

//友谊树
$("#myTree").on("mouseover",function(){
  	$(this).addClass("active_right");
});
$("#myTree").on("mouseout",function(){
	$(this).removeClass("active_right");
});

