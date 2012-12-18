/////////////////////////
/// IMAGE : DEFAULT	/////
/////////////////////////

var create_ui_layer_image = function createUILayerImage(layer)
{
	totalRes++ ;
	
	var src = data[layer]['src'] ;
		
	var img = new Image() ;
	img.src = src ;
	img.onload = resourceLoaded ;
		
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
	
	// Code for xShift and yShift
	var xShift = data[layer]['xShift'] ;
	var yShift = data[layer]['yShift'] ;
	
	var rotate  = data[layer]['rotate'] ;
	
	var rotateX	= data[layer]['rotateX'] ;
	var rotateY	= data[layer]['rotateY'] ;
		
	ctx.save();
	
	if(rotate != undefined)
	{
		ctx.translate(x + rotateX, y + rotateY) ;
		ctx.rotate(rotate * Math.PI / 180) ;
	}
	
	if(xShift == undefined)
	{
		xShift = 0 ;
	}
	
	if(yShift == undefined)
	{
		yShift = 0 ;
	}
		
	if(image != undefined)
	{
		if(rotate != undefined)
		{
			ctx.drawImage(image,x + xShift -rotateX,y + yShift -rotateY) ;
		}
		else
		{
			ctx.drawImage(image,x + xShift,y + yShift) ;
		}
	}
	
	ctx.restore() ;
}

var delete_ui_layer_image = function deleteUILayerImage()
{
	alert('deleteUILayerImageFrame') ;
}


data['engine']['ui.layer.image'] = 
{
	'createLayer'	: create_ui_layer_image 	,
	'getLayer'		: get_ui_layer_image		,
	'updateLayer'	: update_ui_layer_image		,
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
	
	// Code for xShift and yShift
	var xShift = data[layer]['xShift'] ;
	var yShift = data[layer]['yShift'] ;
	
	if(xShift == undefined)
	{
		xShift = 0 ;
	}
	
	if(yShift == undefined)
	{
		yShift = 0 ;
	}

	if (image != undefined)
	{
		ctx.drawImage(image, xOffset, yOffset, w, h, x + xShift, y + yShift, w, h);
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
} ;

var get_ui_layer_image_animation = function getUILayerImageAnimation()
{
	
} ;

var update_ui_layer_image_animation = function updateUILayerImageAnimation(layer)
{	
	if(data[layer]['state'] != data[layer]['oldState'])
	{
		data[layer]['animationIndex']	= 0;
		data[layer]['startTime']		= undefined ;
		data[layer]['frameStartTime']	= undefined ;
		
		data[layer]['oldState'] = data[layer]['state'] ;
	}
	
	if(data[layer]['startTime'] == undefined)
	{
		data[layer]['startTime'] = date.getTime() ;
		
		data[layer]['frameStartTime'] = date.getTime() ;
		data[layer]['frameTime'] = 0 ;
	}
	
	var state		= data[layer]['state'];
	var animation	= data[layer]['animation'];
	var sequence	= animation[state];
	
	var animationIndex = data[layer]['animationIndex'] ;
	var frameInterval = sequence[animationIndex]['time'];
	var dx = sequence[animationIndex]['dx'];
	var dy = sequence[animationIndex]['dy'];
	
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
	
	//consoleDiv.innerHTML = layer + ' 2';
} ;
 
var draw_ui_layer_image_animation = function drawUILayerImageAnimation(layer)
{	
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

	// Code for xShift and yShift
	var xShift = data[layer]['xShift'] ;
	var yShift = data[layer]['yShift'] ;
	
	if(xShift == undefined)
	{
		xShift = 0 ;
	}
	
	if(yShift == undefined)
	{
		yShift = 0 ;
	}

	if (image != undefined)
	{
		ctx.drawImage(image, xOffset, yOffset, w, h, x + xShift, y + yShift, w, h);
	}

	data[layer]['frameTime'] = date.getTime() - data[layer]['frameStartTime'] ;
} ;

var delete_ui_layer_image_animation = function deleteUILayerImageAnimation()
{
	alert('deleteUILayerImageAnimation') ;
} ;


data['engine']['ui.layer.image.animation'] = 
{
	'createLayer'	: create_ui_layer_image_animation 	,
	'getLayer'		: get_ui_layer_image_animation		,
	'updateLayer'	: update_ui_layer_image_animation	,
	'drawLayer'		: draw_ui_layer_image_animation		,
	'deleteLayer'	: delete_ui_layer_image_animation
} ;

////////////////////////////////
/// IMAGE : ANIMATION ARRAY  ///
////////////////////////////////

var create_ui_layer_image_animation_array = function createUILayerImageAnimationArray(layer)
{
	src = data[layer]['src'] ;
		
	var img = new Image() ;
	img.src = src ;
		
	data[layer]['image'] = img ;
	data[app]['images'].push(img) ;
		
	var size = data[layer]['size'] ;
		
	data[layer]['animationIndex']	= new Array() ;
	data[layer]['time']				= new Array() ;
	data[layer]['frameTime']		= new Array() ;
	data[layer]['startTime']		= new Array() ;
	data[layer]['frameStartTime']	= new Array() ;
	data[layer]['state']			= new Array() ;
	data[layer]['oldState']			= new Array() ;
	data[layer]['visible']			= new Array() ;
	
	data[layer]['x']				= new Array() ;
	data[layer]['y']				= new Array() ;
	data[layer]['width']			= new Array() ;
	data[layer]['height']			= new Array() ;
		
	for(var i = 0; i < size; i++)
	{	
		data[layer]['animationIndex'][i]= 0 ;
		data[layer]['startTime'][i]		= undefined ;
		data[layer]['state'][i]			= undefined ;
		data[layer]['oldState'][i]		= '' ;
		
		// Setting all parts of array to default visible value of false
		data[layer]['visible'][i]		= false ;
		
		data[layer]['x']		[i]		= 200 ;
		data[layer]['y']		[i]		= 20 ;
		data[layer]['width']	[i]		= 0 ;
		data[layer]['height']	[i]		= 0 ;
	}
}

var get_ui_layer_image_animation_array = function getUILayerImageAnimationArray()
{
	
}

var update_ui_layer_image_animation_array = function updateUILayerImageAnimationArray(layer)
{
	var size = data[layer]['size'] ;
	
	for(var i = 0; i < size; i++)
	{
		// In case of change of state for animated layer
		if(data[layer]['state'][i] != data[layer]['oldState'][i])
		{
			data[layer]['animationIndex']	[i]	= 0;
			data[layer]['startTime']		[i]	= undefined ;
			data[layer]['frameStartTime']	[i]	= undefined ;
				
			data[layer]['oldState']			[i] = data[layer]['state'][i] ;
		}
		
		var visible = data[layer]['visible'][i] ;

		if(visible == true)
		{	
			// Resetting variables during the start of a sequence animation 
			if(data[layer]['startTime'][i] == undefined)
			{
				data[layer]['startTime']		[i] = date.getTime() ;
				
				data[layer]['frameStartTime']	[i] = date.getTime() ;
				data[layer]['frameTime']		[i] = 0 ;
			}
			
			var state		= data[layer]['state'][i]	;
			
			if(state == undefined)
			{
				continue ;
			}
			
			var animation	= data[layer]['animation'] 	;
			var sequence	= animation[state]			;
			
			var animationIndex	= data[layer]['animationIndex'][i] ;
			var frameInterval	= sequence[animationIndex]['time'] ;
			var dx 				= sequence[animationIndex]['dx'];
			var dy				= sequence[animationIndex]['dy'];
			
			// alert(data[layer]['frameTime'][i] + ' ' + frameInterval) ;
			
			if(data[layer]['frameTime'][i] >= frameInterval)
			{
				if (animationIndex < ((sequence.length) - 1))
				{
					data[layer]['animationIndex'][i]++;
					
					data[layer]['frameStartTime']	[i] = date.getTime() ;
					data[layer]['frameTime']		[i] = 0 ;
				}
				else
				{
					data[layer]['animationIndex']	[i] = 0;
					data[layer]['startTime']		[i] = undefined ;
				}
				
				data[layer]['x'][i] += dx;
				data[layer]['y'][i] += dy;
			}
		}
	}
	
	//alert(layer + ' update 2') ;
}

var draw_ui_layer_image_animation_array = function drawUILayerImageAnimationArray(layer)
{	
	//alert(layer + ' draw 1') ;
	var size = data[layer]['size'] ;
	
	for(var i = 0; i < size; i++)
	{
		var visible = data[layer]['visible'][i] ;
		
		if(visible == true)
		{
			data[layer]['time'][i] = date.getTime() - data[layer]['startTime'][i] ;
		
			var state		= data[layer]['state']		[i];
			
			if(state == undefined)
			{
				continue ;
			}
			
			var animation	= data[layer]['animation'] ;
			var sequence	= animation[state]	;
			var animationIndex = data[layer]['animationIndex'][i] ;//alert(layer + ' draw 3') ;
		
			var image		= data[layer]['image'];
			var framesArray = data[layer]['frames'];
			var currentFrame= sequence[animationIndex]['frame'];
			var frameInterval = sequence[animationIndex]['time'];//alert(layer + ' draw 4') ;
		
			var x		= data[layer]['x'][i] ;
			var y		= data[layer]['y'][i] ;
			var dx = sequence[animationIndex]['dx'];
			var dy = sequence[animationIndex]['dy'];//alert(layer + ' draw 5') ;
		
			var xOffset = framesArray[currentFrame]['xOffset'];
			var yOffset = framesArray[currentFrame]['yOffset'];
			var w 		= framesArray[currentFrame]['width'];
			var h 		= framesArray[currentFrame]['height'];//alert(layer + ' draw 6') ;
			
			data[layer]['width']	[i]	= w ;
			data[layer]['height']	[i]	= h ;
		
			if (image != undefined)
			{
				//consoleDiv.innerHTML = i + ' x ' + x + ' y ' + y + ' w ' + w + ' h ' + h + ' xOffset ' + xOffset + ' yOffset ' + yOffset ;
				//alert(i) ;
				ctx.drawImage(image, xOffset, yOffset, w, h, x, y, w, h);
			}
		
			data[layer]['frameTime'][i] = date.getTime() - data[layer]['frameStartTime'][i] ;
		}
	}
	//alert(layer + ' draw 2') ;
}

var delete_ui_layer_image_animation_array = function deleteUILayerImageAnimationArray()
{
	alert('deleteUILayerImageAnimation') ;
}

data['engine']['ui.layer.image.animation.array'] = 
{
	'createLayer'	: create_ui_layer_image_animation_array 	,
	'getLayer'		: get_ui_layer_image_animation_array		,
	'updateLayer'	: update_ui_layer_image_animation_array	,
	'drawLayer'		: draw_ui_layer_image_animation_array		,
	'deleteLayer'	: delete_ui_layer_image_animation_array
} ;

