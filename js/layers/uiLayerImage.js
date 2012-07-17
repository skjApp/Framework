var create_ui_layer_image = function createUILayerImage(layer)
{
	src = data[layer]['src'] ;
		
	var img = new Image() ;
	img.src = src ;
		
	data[layer]['image'] = img ;
	data[app]['images'].push(img) ;
} ;

var get_ui_layer_image = function getUILayerImage()
{
	alert('getUILayerImageFrame') ;
}

var update_ui_layer_image = function updateUILayerImage()
{
	alert('updateUILayerImageFrame') ;
}

var draw_ui_layer_image = function drawUILayerImage(layer)
{
	image = data[layer]['image'] ;
		
	if(image != undefined)
	{
		ctx.drawImage(image,x,y) ;
	}
}

var delete_ui_layer_image = function deleteUILayerImage()
{
	alert('deleteUILayerImageFrame') ;
}


data['engine']['ui.layer.image'] = 
{
	'createLayer'	: create_ui_layer_image 	,
	'getLayer'		: get_ui_layer_image		,
	'updateLayer'	: update_ui_layer_image	,
	'drawLayer'		: draw_ui_layer_image		,
	'deleteLayer'	: delete_ui_layer_image
} ;