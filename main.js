var 
	element = document.getElementById('square'),
	wrapper = document.getElementById('wrapper'),
	wrapperEdges = getEdges(wrapper),
	elementEdges = getEdges(element),
	elemWidth = element.naturalWidth,
	elemHeight = element.naturalHeight,
	rightEdge = wrapper.clientWidth - elemWidth,
	bottomEdge = wrapper.clientHeight - elemHeight,
	wrapperRigt;

element.onmousedown = function(e) {
	var 
		clickPosX = e.pageX,
		clickPosY = e.pageY;

	document.onmousemove = function(e) {
		var 
			shiftX = -(clickPosX - e.pageX),
			shiftY = -(clickPosY - e.pageY);
			
		shiftX = checkPosImg(shiftX, {first: 0, second: rightEdge});
		shiftY = checkPosImg(shiftY, {first: 0, second: bottomEdge});

		element.style.left = shiftX + 'px';
		element.style.top = shiftY + 'px';
	}

	document.onmouseup = function() {
		document.onmousemove = null;
		element.onmouseup = null;
	}
}

element.ondragstart = function() {
  return false;
};

function checkPosImg(currentPos, edges) {
	if (currentPos > edges.first) {
		return edges.first;
	} else if (currentPos < edges.second) {
		return edges.second;
	}
	return currentPos;
}

function getEdges(elem) {
	var box = elem.getBoundingClientRect();
	return {
		left: box.left,
		right: box.right
	};
}