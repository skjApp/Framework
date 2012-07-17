var createuilayerimageanimation = function createUILayerImageAnimation(layer)
{
	src = data[layer]['src'] ;
		
	var img = new Image() ;
	img.src = src ;
		
	data[layer]['image'] = img ;
	data[app]['images'].push(img) ;
		
	data[layer]['animationIndex'] = 0 ;
} ;

var getuilayerimageanimation = function getUILayerImageAnimation()
{
	alert('getUILayerImageAnimation') ;
}

var updateuilayerimageanimation = function updateUILayerImageAnimation()
{
	alert('updateUILayerImageAnimation') ;
}

var drawuilayerimageanimation = function drawUILayerImageAnimation(layer)
{
	
	animation = data[layer]['animation'];
	sequence = animation[state];
	animationIndex = data[layer]['animationIndex'];

	image = data[layer]['image'];
	framesArray = data[layer]['frames'];
	currentFrame = sequence[animationIndex]['frame'];

	dx = sequence[animationIndex]['dx'];
	dy = sequence[animationIndex]['dy'];

	xOffset = framesArray[currentFrame]['xOffset'];
	yOffset = framesArray[currentFrame]['yOffset'];
	w = framesArray[currentFrame]['width'];
	h = framesArray[currentFrame]['height'];

	if (image != undefined)
	{
		ctx.drawImage(image, xOffset, yOffset, w, h, x, y, w, h);
	}

	data[layer]['x'] += dx;
	data[layer]['y'] += dy;

	if (animationIndex < ((sequence.length) - 1))
	{
		data[layer]['animationIndex']++;
	}
	else
	{
		data[layer]['animationIndex'] = 0;
	}

}

var deleteuilayerimageanimation = function deleteUILayerImageAnimation()
{
	alert('deleteUILayerImageAnimation') ;
}


data['engine']['ui.layer.image.animation'] = 
{
	'createLayer'	: createuilayerimageanimation 	,
	'getLayer'		: getuilayerimageanimation		,
	'updateLayer'	: updateuilayerimageanimation	,
	'drawLayer'		: drawuilayerimageanimation		,
	'deleteLayer'	: deleteuilayerimageanimation
} ;