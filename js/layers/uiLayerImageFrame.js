var createuilayerimageframe = function createUILayerImageFrame(layer)
{
	src = data[layer]['src'] ;
		
	var img = new Image() ;
	img.src = src ;
		
	data[layer]['image'] = img ;
	data[app]['images'].push(img) ;
} ;

var getuilayerimageframe = function getUILayerImageFrame()
{
	alert('getUILayerImageFrame') ;
}

var updateuilayerimageframe = function updateUILayerImageFrame()
{
	alert('updateUILayerImageFrame') ;
}

var drawuilayerimageframe = function drawUILayerImageFrame(layer)
{
	image		= data[layer]['image'] ;
		
	framesArray = data[layer]['frames'];
	currentFrame= data[layer]['currentFrame'];

	xOffset = framesArray[currentFrame]['xOffset'];
	yOffset = framesArray[currentFrame]['yOffset'];
	w = framesArray[currentFrame]['width'];
	h = framesArray[currentFrame]['height'];

	if (image != undefined)
	{
		ctx.drawImage(image, xOffset, yOffset, w, h, x, y, w, h);
	}

}

var deleteuilayerimageframe = function deleteUILayerImageFrame()
{
	alert('deleteUILayerImageFrame') ;
}


data['engine']['ui.layer.image.frame'] = 
{
	'createLayer'	: createuilayerimageframe 	,
	'getLayer'		: getuilayerimageframe		,
	'updateLayer'	: updateuilayerimageframe	,
	'drawLayer'		: drawuilayerimageframe		,
	'deleteLayer'	: deleteuilayerimageframe
} ;