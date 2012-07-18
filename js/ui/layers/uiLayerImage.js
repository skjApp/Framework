/////////////////////////
/// IMAGE : DEFAULT	/////
/////////////////////////

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


/////////////////////////
/// IMAGE : FRAME	/////
/////////////////////////

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


/////////////////////////
///IMAGE : ANIMATION/////
/////////////////////////

var create_ui_layer_image_animation = function createUILayerImageAnimation(layer)
{
	src = data[layer]['src'] ;
		
	var img = new Image() ;
	img.src = src ;
		
	data[layer]['image'] = img ;
	data[app]['images'].push(img) ;
		
	data[layer]['animationIndex'] = 0 ;
} ;

var get_ui_layer_image_animation = function getUILayerImageAnimation()
{
	alert('getUILayerImageAnimation') ;
}

var update_ui_layer_image_animation = function updateUILayerImageAnimation()
{
	alert('updateUILayerImageAnimation') ;
}

var draw_ui_layer_image_animation = function drawUILayerImageAnimation(layer)
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

var delete_ui_layer_image_animation = function deleteUILayerImageAnimation()
{
	alert('deleteUILayerImageAnimation') ;
}


data['engine']['ui.layer.image.animation'] = 
{
	'createLayer'	: create_ui_layer_image_animation 	,
	'getLayer'		: get_ui_layer_image_animation		,
	'updateLayer'	: update_ui_layer_image_animation	,
	'drawLayer'		: draw_ui_layer_image_animation		,
	'deleteLayer'	: delete_ui_layer_image_animation
} ;
