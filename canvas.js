window.requestAnimationFrame() = function(){

	var x_start = 50; //繪圖 x 座標起始點
	var y_start = 580; //繪圖 y 座標起始點
	var c_width = 800; //圖形區域寬
	var c_height = 600; //圖形區域高
	var data_count = 12; //顯示的資料數量

	data_y = [400, 300, 200, 350, 277, 423, 333, 410, 500, 500, 150, 300];//顯示的資料
	data_color = ['#000000', '#000033', '#000066', '#000099', '#0000CC', '#0000FF', '#000033', '#000066'];//顯示的資料顏色
	var canvas = document.getElementById('pcanvas');
	
	var context = canvas.getContext('2d');
	context.moveTo(x_start, c_height - y_start);
	context.lineTo(x_start, y_start);
	context.lineTo(c_width + x_start, y_start);
	context.stroke();
	var x_left = (c_width / (data_count + 1));

	for (i = 0; i < data_count; i++) {
	    context.beginPath();
	    context.lineWidth = '30';//長條寬度
	    context.strokeStyle = data_color[i%8] ;
	    x = x_start + (x_left * (i + 1));
	    y = y_start;
	    context.moveTo(x, y);
	    context.lineTo(x, y_start - data_y[i]);
	    context.stroke();
	}
}
