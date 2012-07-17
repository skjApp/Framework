var create_ui_layer_image_frame = function createUILayerImageFrame(layer)
{
	src = data[layer]['src'] ;
		
	var img = new Image() ;
	img.src = src ;
		
	data[layer]['image'] = img ;
	data[app]['images'].push(img) ;
} ;

var get_ui_layer_image_frame = function getUILayerImageFrame()
{
	alert('getUILayerImageFrame') ;
}

var update_ui_layer_image_frame = function updateUILayerImageFrame()
{
	alert('updateUILayerImageFrame') ;
}

var draw_ui_layer_image_frame = function drawUILayerImageFrame(layer)
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

var delete_ui_layer_image_frame = function deleteUILayerImageFrame()
{
	alert('deleteUILayerImageFrame') ;
}


data['engine']['ui.layer.image.frame'] = 
{
	'createLayer'	: create_ui_layer_image_frame 	,
	'getLayer'		: get_ui_layer_image_frame		,
	'updateLayer'	: update_ui_layer_image_frame	,
	'drawLayer'		: draw_ui_layer_image_frame		,
	'deleteLayer'	: delete_ui_layer_image_frame
} ;