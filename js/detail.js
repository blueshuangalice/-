window.addEventListener('load',function(){
	// tab_list和tab_con切换功能
	var detail_tab_list = document.querySelector('.detail_tab_list');
	var detail_tab_con = document.querySelector('.detail_tab_con');
	var ul = detail_tab_list.querySelector('ul');
	var items = detail_tab_con.querySelectorAll('.item');
	for (var i = 0; i < ul.children.length; i++) {
		ul.children[i].setAttribute('data-index', i);
		ul.children[i].addEventListener('click', function() {
			var index = this.getAttribute('data-index');
			for (var i = 0; i < ul.children.length; i++) {
				ul.children[i].className = '';
			}
			this.className = 'current';
			for (var j = 0; j < items.length; j++) {
				items[j].style.display = 'none';
			}
			items[index].style.display = 'block';
		})
	}
	
	//preview的放大功能
	var preview_img = document.querySelector('.preview_img');
	var mask = preview_img.querySelector('.mask');
	var big = preview_img.querySelector('.big');
	preview_img.addEventListener('mouseover', function(){
		mask.style.display = 'block';
		big.style.display = 'block';
		
	})
	preview_img.addEventListener('mouseout', function(){
		mask.style.display = 'none';
		big.style.display = 'none';
	})
	preview_img.addEventListener('mousemove', function(e){
		var x = e.pageX - preview_img.offsetLeft;
		var y = e.pageY - preview_img.offsetTop;
		console.log(x,y);
		var maskX = x - mask.offsetWidth / 2;
		var maskY = y - mask.offsetHeight / 2;
		console.log(maskX,maskY);
		var maskMax = preview_img.offsetWidth - mask.offsetWidth;
		if(maskX <= 0){
			maskX = 0;
		}
		else if(maskX >= maskMax){
			maskX = maskMax;
		}
		if(maskY <= 0){
			maskY = 0;
		}else if(maskY >= maskMax){
			maskY = maskMax;
		}
		mask.style.left = maskX + 'px';
		mask.style.top = maskY + 'px';
		
		//大图片的移动距离 = 遮罩层移动距离 * 大图片最大移动距离 / 遮罩层最大移动距离
		var bigImg = document.querySelector('.bigImg');
		var bigMax = big.offsetWidth - bigImg.offsetWidth ;
		var bigX = maskX * bigMax / maskMax;
		var bigY = maskY * bigMax / maskMax;
		bigImg.style.left = bigX + 'px';
		bigImg.style.top = bigY + 'px';
	})
	
})