window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame || 
          window.oRequestAnimationFrame || 
          window.msRequestAnimationFrame || 
          function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element){
            window.setTimeout(callback, 1000 / 60);
          };
})();


var x_start = 50; //繪圖 x 座標起始點
var y_start = 580; //繪圖 y 座標起始點
var c_width = 800; //圖形區域寬
var c_height = 600; //圖形區域高
var data_count = 12; //顯示的資料數量

data_y = [400, 300, 200, 350, 277, 423, 333, 410, 500, 500, 150, 300];//顯示的資料
data_color = ["","","","","","","","","","","","","","","","","","","",""];//顯示的資料顏色
for(i=0;i<20;i++){
	var maxNum = 16777215;  
	var minNum = 0;
	var rand_color = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
	rand_color = rand_color.toString(16);
	data_color[i]= "#" + rand_color;
}
for(i=0;i<data_count;i++){
	var maxNum = 560;  
	var minNum = 50;
	data_y[i] = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

}
data_name = ["股票名稱","a","a","a","a","a","a","a","a","a","a","a"];
var times = 0;
var x_left = (c_width / (data_count + 1));

function graphing(){
	//clearRect();
	var canvas = document.getElementById('pcanvas');
	var context = canvas.getContext('2d');
	context.lineWidth = '1';
	context.strokeStyle = '#008899';
	context.moveTo(x_start, c_height - y_start);
	context.lineTo(x_start, y_start);
	context.lineTo(c_width + x_start, y_start);
	context.stroke();
	

	for (i = 0; i < data_count; i++) {
		context.beginPath();
		context.lineWidth = '30';//長條寬度
		context.strokeStyle = data_color[i] ;
		x = x_start + (x_left * (i + 1));
		y = y_start;
		context.moveTo(x, y);
		context.lineTo(x, y_start - data_y[i]*times/100);
		context.stroke();
		
		context.font = "12pt 新細明體";
		context.textAlign = "center";
		context.fillText(data_name[i],x,y+50);
		
	}
	context.fillText("健康程度",x_start+50,y+100);

}





function Line_graphing(){
	//clearRect();
	var canvas = document.getElementById('lcanvas');
	var context = canvas.getContext('2d');
	context.lineWidth = '1';
	context.strokeStyle = '#008899';
	context.moveTo(x_start, c_height - y_start);
	context.lineTo(x_start, y_start);
	context.lineTo(c_width + x_start, y_start);
	context.stroke();
	

	for (i = 0; i < data_count; i++) {
		
		
	}
}
window.onload = function(){
	(function animloop(){
      	graphing();
	Line_graphing();
	  if(times<100){
		times++;
		requestAnimFrame(animloop);
	  }
    })();
};
