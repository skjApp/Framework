/////////////////////////
/// IMAGE : DEFAULT	/////
/////////////////////////

var create_ui_layer_image = function createUILayerImage(layer)
{
	var src = data[layer]['src'] ;
		
	var img = new Image() ;
	img.src = src ;
		
	data[layer]['image'] = img ;
	data[app]['images'].push(img) ;
}

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
	var image	= data[layer]['image'] ;
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	
	data[layer]['width']	= image.width ;
	data[layer]['height']	= image.height ;
		
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
	var image		= data[layer]['image'] ;
		
	var framesArray = data[layer]['frames'];
	var currentFrame= data[layer]['currentFrame'];

	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	var xOffset = framesArray[currentFrame]['xOffset'];
	var yOffset = framesArray[currentFrame]['yOffset'];
	var w = framesArray[currentFrame]['width'];
	var h = framesArray[currentFrame]['height'];
	
	data[layer]['width']	= w ;
	data[layer]['height']	= h ;

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
	data[layer]['startTime']	= undefined ;
	
	data[layer]['oldState']		= undefined ;
}

var get_ui_layer_image_animation = function getUILayerImageAnimation()
{
	
}

var update_ui_layer_image_animation = function updateUILayerImageAnimation(layer)
{
	if(data[layer]['state'] != data[layer]['oldState'])
	{
		data[layer]['animationIndex']	= 0;
		data[layer]['startTime']		= undefined ;
		data[layer]['frameStartTime']	= undefined ;
		
		data[layer]['oldState'] = data[layer]['state'] ;
	}
}

var draw_ui_layer_image_animation = function drawUILayerImageAnimation(layer)
{
	if(data[layer]['startTime'] == undefined)
	{
		data[layer]['startTime'] = date.getTime() ;
		
		data[layer]['frameStartTime'] = date.getTime() ;
		data[layer]['frameTime'] = 0 ;
	}
	
	data[layer]['time'] = date.getTime() - data[layer]['startTime'] ;
		
	var state		= data[layer]['state'];
	var animation	= data[layer]['animation'];
	var sequence	= animation[state];
	var animationIndex = data[layer]['animationIndex'] ;

	var image = data[layer]['image'];
	var framesArray = data[layer]['frames'];
	var currentFrame = sequence[animationIndex]['frame'];
	var frameInterval = sequence[animationIndex]['time'];

	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	var dx = sequence[animationIndex]['dx'];
	var dy = sequence[animationIndex]['dy'];

	var xOffset = framesArray[currentFrame]['xOffset'];
	var yOffset = framesArray[currentFrame]['yOffset'];
	var w = framesArray[currentFrame]['width'];
	var h = framesArray[currentFrame]['height'];
	
	data[layer]['width']	= w ;
	data[layer]['height']	= h ;

	if (image != undefined)
	{
		ctx.drawImage(image, xOffset, yOffset, w, h, x, y, w, h);
	}

	if(data[layer]['frameTime'] >= frameInterval)
	{
		if (animationIndex < ((sequence.length) - 1))
		{
			data[layer]['animationIndex']++;
			
			data[layer]['frameStartTime'] = date.getTime() ;
			data[layer]['frameTime'] = 0 ;
		}
		else
		{
			data[layer]['animationIndex'] = 0;
			data[layer]['startTime'] = undefined ;
		}
		
		data[layer]['x'] += dx;
		data[layer]['y'] += dy;
	}
	else
	{
		data[layer]['frameTime'] = date.getTime() - data[layer]['frameStartTime'] ;
	}
	
	// consoleDiv.innerHTML = layer + ' ' + data[layer]['y'];
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
