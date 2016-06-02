var 
	element = document.getElementById('square'),
	wrapper = document.getElementById('wrapper'),
	elementWidth = element.offsetWidth,
	wrapperWidth = wrapper.offsetWidth,
	maxOffsetX = elementWidth / 2,
	minOffsetX = wrapperWidth - elementWidth,

	elementHeight = element.offsetHeight,
	wrapperHeight = wrapper.offsetHeight,
	maxOffsetY = elementHeight / 2,
	minOffsetY = wrapperHeight - elementHeight,

	wrapperEdges = getEdges(wrapper);

element.onmousedown = function(e) {
	
	document.onmousemove = function(e) {
		var 
			shiftX = e.pageX - wrapperEdges.left,
			shiftY = e.pageY;
	
		if (shiftX > maxOffsetX) {
			shiftX = maxOffsetX;
		} else if (shiftX < minOffsetX){
			shiftX = minOffsetX;
		}

		if (shiftY > maxOffsetY) {
			shiftY = maxOffsetY;
		} else if (shiftY < minOffsetY){
			shiftY = minOffsetY;
		}

		element.style.left = shiftX - elementWidth/2 + "px";
		element.style.top = shiftY - wrapperHeight/2 + "px";

		console.log(shiftX);
	}

	document.onmouseup = function() {
		document.onmousemove = null;
		element.onmouseup = null;
	}
}

element.ondragstart = function() {
  return false;
};

function getEdges(elem) {
	var box = elem.getBoundingClientRect();
	return {
		left: box.left,
		right: box.right
	};
}