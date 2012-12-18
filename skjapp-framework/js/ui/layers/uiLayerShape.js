/////////////////////////
///// SHAPE : LINE	/////
/////////////////////////

var effects = {} ;

effects["fadeIn"] 	= {} ;
effects["fadeOut"] 	= {} ;
effects["slideIn"] 	= {} ;
effects["slideOut"] = {} ;
effects["switchOff"]= {} ;
effects["grow"] 	= {} ;
effects["squish"] 	= {} ;
effects["shake"] 	= {} ;
effects["fold"] 	= {} ;
effects["pulsate"] 	= {} ;
effects["dropOut"] 	= {} ;

var create_ui_layer_shape_line = function createUILayerShapeLine(layer)
{
	
}

var create_ui_layer_shape_line = function createUILayerShapeLine(layer)
{
	
}

var get_ui_layer_shape_line = function getUILayerShapeLine()
{
	
}

var update_ui_layer_shape_line = function updateUILayerShapeLine()
{
	
}

var draw_ui_layer_shape_line = function drawUILayerShapeLine(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	endX	= data[layer]['endX'] ;
	endY	= data[layer]['endY'] ;
			
	// Drawing a simple line
	ctx.beginPath() ;			
	ctx.moveTo(x + 0.5,y + 0.5) ; 
	ctx.lineTo(endX + 0.5,endY + 0.5) ;
	ctx.closePath() ;
	ctx.strokeStyle = data[layer]['color'] ;
	ctx.stroke() ;
}

var delete_ui_layer_shape_line = function deleteUILayerShapeLine()
{
	
}


data['engine']['ui.layer.shape.line'] = 
{
	'createLayer'	: create_ui_layer_shape_line 	,
	'getLayer'		: get_ui_layer_shape_line		,
	'updateLayer'	: update_ui_layer_shape_line	,
	'drawLayer'		: draw_ui_layer_shape_line		,
	'deleteLayer'	: delete_ui_layer_shape_line
} ;


/////////////////////////
///SHAPE : RECTANGLE/////
/////////////////////////

var create_ui_layer_shape_rectangle = function createUILayerShapeRectangle(layer)
{
	createEffects(layer) ;
}

var get_ui_layer_shape_rectangle = function getUILayerShapeRectangle()
{
	
}

var update_ui_layer_shape_rectangle = function updateUILayerShapeRectangle()
{
	
}

var draw_ui_layer_shape_rectangle = function drawUILayerShapeRectangle(layer)
{	
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	var width	= data[layer]['width'] ;
	var height	= data[layer]['height'] ;
		
	var fill	= data[layer]['fill'] ;
	var rotate  = data[layer]['rotate'] ;
	
	var rotateX	= data[layer]['rotateX'] ;
	var rotateY	= data[layer]['rotateY'] ;
	
	var effect	= data[layer]['effect'] ;
	
	ctx.save() ;
	
	if(effect != undefined)
	{
		if(effect == "fadeIn")
		{
			if(effects["fadeIn"][layer] == undefined)
			{
				effects["fadeIn"][layer] 	= {"alpha" : 0} ;
			}
			
			var alpha = effects["fadeIn"][layer]['alpha'] ;
			
			ctx.globalAlpha = alpha ;
		
			if(alpha <= 1.0)
			{
				effects["fadeIn"][layer]['alpha'] += 0.025 ;
			}
			else
			{
				data[layer]["effectComplete"] = true ;
			}
		}
		else if(effect == "fadeOut")
		{
			if(effects["fadeOut"][layer] == undefined)
			{
				effects["fadeOut"][layer] 	= {"alpha" : 1.0} ;
			}
			
			var alpha = effects["fadeOut"][layer]['alpha'] ;
			
			ctx.globalAlpha = alpha ;
			
			if(alpha >= 0.1)
			{
				effects["fadeOut"][layer]['alpha'] -= 0.025 ;
			}
			else
			{
				data[layer]["effectComplete"] = true ;
			}
		}
		else if(effect == "slideIn")
		{
			if(effects["slideIn"][layer] == undefined)
			{
				effects["slideIn"][layer] 	= {"height" : height, "to" : 1} ;
			}
			
			data[layer]['height'] = effects["slideIn"][layer]['to'] ;
			
			if(effects["slideIn"][layer]["height"] >= effects["slideIn"][layer]['to'])
			{
				effects["slideIn"][layer]['to'] += 10 ;
			}
			else
			{
				data[layer]['height'] = effects["slideIn"][layer]['height'] ;
				data[layer]["effectComplete"] = true ;
			}
		}
		else if(effect == "slideOut")
		{
			if(effects["slideOut"][layer] == undefined)
			{
				effects["slideOut"][layer] 	= {"height" : height, "from" : height} ;
			}
			
			data[layer]['height'] = effects["slideOut"][layer]['from'] ;
			
			if(effects["slideOut"][layer]["height"] >= effects["slideOut"][layer]['from'] && effects["slideOut"][layer]['from'] > 0)
			{
				effects["slideOut"][layer]['from'] -= 10 ;
			}
			else
			{
				data[layer]['height'] = 0 ;
				data[layer]["effectComplete"] = true ;
			}
		}
		else if(effect == "switchOff")
		{
			if(effects["switchOff"][layer] == undefined)
			{
				effects["switchOff"][layer] = {"height" : height, "from" : height, "alpha" : 1} ;
			}
			
			data[layer]['height'] = effects["switchOff"][layer]['from'] ;
			
			var alpha = effects["switchOff"][layer]['alpha'] ;
			
			ctx.globalAlpha = alpha ;
		
			if(alpha >= 0.2)
			{
				effects["switchOff"][layer]['alpha'] -= 0.025 ;
			}
			else
			{
				effects["switchOff"][layer]['alphaEffect'] = true ;
			}
			
			if(effects["switchOff"][layer]['alphaEffect'] == true)
			{
				if(effects["switchOff"][layer]["height"] >= effects["switchOff"][layer]['from'] && effects["switchOff"][layer]['from'] > 0)
				{
					effects["switchOff"][layer]['from'] -= 10 ;
					data[layer]['y'] += 5 ;
				}
				else
				{
					data[layer]['height'] = 0 ;
					data[layer]["effectComplete"] = true ;
				}
				
				ctx.globalAlpha = 1.0 ;
			}
		}
		else if(effect == "grow")
		{
			if(effects["grow"][layer] == undefined)
			{
				var growX = x + 40 ;
				var growY = y + 40 ;
				
				effects["grow"][layer] = 
				{
					"x" : x, 
					"y" : y, 
					"width" : width, 
					"height" : height, 
					"grow-width" : 20, 
					"grow-height" : 20,
					"grow-x" : growX,
					"grow-y" : growY
				} ;
			}
			
			data[layer]['x'] = effects["grow"][layer]['grow-x'] ;
			data[layer]['y'] = effects["grow"][layer]['grow-y'] ;
			
			data[layer]['height']= effects["grow"][layer]['grow-height'] ;
			data[layer]['width'] = effects["grow"][layer]['grow-height'] ;
			
			//alert(effects["grow"][layer]['grow-height'])
			
			if(effects["grow"][layer]["height"] >= effects["grow"][layer]['grow-height'])
			{
				effects["grow"][layer]['grow-x'] -= 2 ;
				effects["grow"][layer]['grow-y'] -= 2 ;
				
				effects["grow"][layer]['grow-height'] += 4 ;
				effects["grow"][layer]['grow-width'] += 4 ;
			}
			else
			{
				data[layer]['width'] = effects["grow"][layer]['width'] ;
				data[layer]['height']= effects["grow"][layer]['height'] ;
				
				data[layer]["effectComplete"] = true ;
			}
		}
		else if(effect == "squish")
		{
			if(effects["squish"][layer] == undefined)
			{
				effects["squish"][layer] = {"width" : width, "height" : height} ;		
			}
			
			if(effects["squish"][layer]["height"] >= data[layer]['height'] && data[layer]['height'] > 0)
			{
				data[layer]['width']  -= 2 ;
				data[layer]['height'] -= 2 ;
			}
			else
			{
				data[layer]['width'] = 0 ;
				data[layer]['height']= 0 ;
				data[layer]["effectComplete"] = true ;
			}
		}
		else if(effect == "shake")
		{
			if(effects["shake"][layer] == undefined)
			{
				effects["shake"][layer] = {"x" : x, "shake" : 0} ;
			}
			
			if(effects["shake"][layer]["shake"] <= 26)
			{
				if(effects["shake"][layer]["shake"] >= 1 || effects["shake"][layer]["shake"] <= 6 && effects["shake"][layer]["shake"] >= 13 || effects["shake"][layer]["shake"] <= 18)
				{
					if(effects["shake"][layer]["shake"] == 1)
					{
						data[layer]['x'] -= 2 ;
					}
					else if(effects["shake"][layer]["shake"] == 2)
					{
						data[layer]['x'] -= 4 ;
					}
					else if(effects["shake"][layer]["shake"] == 3)
					{
						data[layer]['x'] -= 6 ;
					}
					else if(effects["shake"][layer]["shake"] == 4)
					{
						data[layer]['x'] -= 8 ;
					}
					else if(effects["shake"][layer]["shake"] == 5)
					{
						data[layer]['x'] -= 12 ;
					}
					else if(effects["shake"][layer]["shake"] == 6)
					{
						data[layer]['x'] = effects["shake"][layer]["x"] ;
					}
				}
				if(effects["shake"][layer]["shake"] >= 7 || effects["shake"][layer]["shake"] <= 12)
				{
					
					if(effects["shake"][layer]["shake"] == 7)
					{
						data[layer]['x'] += 2 ;
					}
					else if(effects["shake"][layer]["shake"] == 8)
					{
						data[layer]['x'] += 4 ;
					}
					else if(effects["shake"][layer]["shake"] == 9)
					{
						data[layer]['x'] += 6 ;
					}
					else if(effects["shake"][layer]["shake"] == 10)
					{
						data[layer]['x'] += 8 ;
					}
					else if(effects["shake"][layer]["shake"] == 11)
					{
						data[layer]['x'] += 12 ;
					}
					else if(effects["shake"][layer]["shake"] == 12)
					{
						data[layer]['x'] = effects["shake"][layer]["x"] ;
					}
				}
				
				effects["shake"][layer]["shake"] += 1 ;
			}
		}
		else if(effect == "fold")
		{
			if(effects["fold"][layer] == undefined)
			{
				effects["fold"][layer] = {"width" : width, "height" : height} ;
			}
			
			if(effects["fold"][layer]["height"] >= data[layer]['height'])
			{
				if(data[layer]['height'] > 5)
				{
					data[layer]['height'] -= 2 ;	
				}
				else if(data[layer]['width'] > 0)
				{
					data[layer]['width'] -= 2 ;
				}
				else
				{
					data[layer]['width'] = 0 ;
					data[layer]['height']= 0 ;
					data[layer]["effectComplete"] = true ;
				}
			}
		}
		else if(effect == "pulsate")
		{
			if(effects["pulsate"][layer] == undefined)
			{
				effects["pulsate"][layer] = {"alpha" : 1.0, "times" : 0} ;
			}
			
			var alpha = effects["pulsate"][layer]['alpha'] ;
			
			ctx.globalAlpha = alpha ;
			
			if(effects["pulsate"][layer]['times'] < 99)
			{
				if(alpha >= 0)
				{
					effects["pulsate"][layer]['alpha'] -= 0.05 ;
				}
				else
				{
					effects["pulsate"][layer]['alpha'] = 1.0 ;
				}
				
				effects["pulsate"][layer]['times']++ ;
			}
			else
			{
				effects["pulsate"][layer]['alpha'] = 1.0 ;
				data[layer]["effectComplete"] = true ;
			}
		}
		else if(effect == "dropOut")
		{
			if(effects["dropOut"][layer] == undefined)
			{
				effects["dropOut"][layer] 	= {"alpha" : 1.0} ;
			}
			
			var alpha = effects["dropOut"][layer]['alpha'] ;
			
			ctx.globalAlpha = alpha ;
			
			if(alpha >= 0.1)
			{
				effects["dropOut"][layer]['alpha'] -= 0.05 ;
				data[layer]["y"] += 5 ;
			}
			else
			{
				ctx.globalAlpha = 0 ;
				data[layer]["effectComplete"] = true ;
			}
		}
	}
	
	if(rotate != undefined)
	{
		ctx.translate(x + rotateX, y + rotateY) ;
		ctx.rotate(rotate * Math.PI / 180) ;
	}
	
  	if(fill == true)
	{
		ctx.fillStyle =  data[layer]['color'] ;
		
		if(rotate != undefined)
		{
			ctx.fillRect(-rotateX, -rotateY, width, height) ;
		}
		else
		{
			ctx.fillRect(x, y, width, height) ;
		}
	}
	else
	{
		ctx.strokeStyle = data[layer]['color'] ;
		
		if(rotate != undefined)
		{
			ctx.strokeRect(-rotateX, -rotateY, width, height) ;
		}
		else
		{
			ctx.strokeRect(x + 0.5, y + 0.5, width, height) ;
		}
	}
	
  	ctx.restore() ;
}

var delete_ui_layer_shape_rectangle = function deleteUILayerShapeRectangle()
{
	
}

data['engine']['ui.layer.shape.rectangle'] = 
{
	'createLayer'	: create_ui_layer_shape_rectangle 	,
	'getLayer'		: get_ui_layer_shape_rectangle		,
	'updateLayer'	: update_ui_layer_shape_rectangle	,
	'drawLayer'		: draw_ui_layer_shape_rectangle		,
	'deleteLayer'	: delete_ui_layer_shape_rectangle
} ;

///////////////////////////////
///      SHAPE : SQUARE     ///
///////////////////////////////

var create_ui_layer_shape_square = function createUILayerShapeSquare(layer)
{
	
}

var get_ui_layer_shape_square = function getUILayerShapeSquare()
{
	
}

var update_ui_layer_shape_square = function updateUILayerShapeSquare()
{
	
}

var draw_ui_layer_shape_square = function drawUILayerShapeSquare(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	width	= data[layer]['width'] ;
				
	// Drawing a simple Square			
	ctx.rect(x,y,width,width) ;
	ctx.stroke() ;				// Drawing the above coded path
	
}

var delete_ui_layer_shape_square = function deleteUILayerShapeSquare()
{
	
}

data['engine']['ui.layer.shape.square'] = 
{
	'createLayer'	: create_ui_layer_shape_square 	,
	'getLayer'		: get_ui_layer_shape_square		,
	'updateLayer'	: update_ui_layer_shape_square	,
	'drawLayer'		: draw_ui_layer_shape_square	,	
	'deleteLayer'	: delete_ui_layer_shape_square
} ;


////////////////////////////////////
///      SHAPE : RoundedRect     ///
////////////////////////////////////

var create_ui_layer_shape_roundedRect = function createUILayerShapeRoundedRect(layer)
{
	
}

var get_ui_layer_shape_roundedRect = function getUILayerShapeRoundedRect()
{
	
}

var update_ui_layer_shape_roundedRect = function updateUILayerShapeRoundedRect()
{
	
}

var draw_ui_layer_shape_roundedRect = function drawUILayerShapeRoundedRect(layer)
{
	x				= data[layer]['x'] ;
	y				= data[layer]['y'] ;
	width			= data[layer]['width'] ;
	height			= data[layer]['height'] ;
	roundingRadius	= data[layer]['roundingRadius'] ;
	
	/*
	ctx.moveTo(x, y) ;
	ctx.lineTo(x + width, y + height, roundingRadius) ;
	ctx.lineTo(x, y, w, h) ;
	ctx.lineTo(x, y, w, h) ;
	*/
	
	// Drawing a simple Rounded Rect
	/*ctx.beginPath() ;
	ctx.moveTo(x + roundingRadius,y) ;
	ctx.lineTo(width - (roundingRadius * 2),y) ;
	ctx.lineTo(x + width,y + height) ;
	ctx.lineTo(x,y + height) ;
	ctx.lineTo(x,y) ;
	*/
	 
	ctx.closePath() ;
	ctx.stroke() ;				// Drawing the above coded path
	
}

var delete_ui_layer_shape_roundedRect = function deleteUILayerShapeRoundedRect()
{
	
}

data['engine']['ui.layer.shape.roundedRect'] = 
{
	'createLayer'	: create_ui_layer_shape_roundedRect ,
	'getLayer'		: get_ui_layer_shape_roundedRect	,
	'updateLayer'	: update_ui_layer_shape_roundedRect	,
	'drawLayer'		: draw_ui_layer_shape_roundedRect	,	
	'deleteLayer'	: delete_ui_layer_shape_roundedRect
} ;



//////////////////////////////////
///      SHAPE : Triangle     ///
/////////////////////////////////

var create_ui_layer_shape_triangle = function createUILayerShapeTriangle(layer)
{
	
}

var get_ui_layer_shape_triangle = function getUILayerShapeTriangle()
{
	
}

var update_ui_layer_shape_triangle = function updateUILayerShapeTriangle()
{
	
}

var draw_ui_layer_shape_triangle = function drawUILayerShapeTriangle(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	x1		= data[layer]['x1'] ;
	y1		= data[layer]['y1'] ;
	x2		= data[layer]['x2'] ;
	y2		= data[layer]['y2'] ;				
	
	// Drawing a simple triangle			

	ctx.beginPath() ;			
	ctx.moveTo(x,y) ;			// Starting point of line 
	ctx.lineTo(x1,y1) ;			// 
	ctx.lineTo(x2,y2) ;			//  
	ctx.lineTo(x,y) ;			// 
	ctx.closePath() ;

	ctx.stroke() ;				// Drawing the above coded path
	
}

var delete_ui_layer_shape_triangle = function deleteUILayerShapeTriangle()
{
	
}

data['engine']['ui.layer.shape.triangle'] = 
{
	'createLayer'	: create_ui_layer_shape_triangle 	,
	'getLayer'		: get_ui_layer_shape_triangle		,
	'updateLayer'	: update_ui_layer_shape_triangle	,
	'drawLayer'		: draw_ui_layer_shape_triangle		,	
	'deleteLayer'	: delete_ui_layer_shape_triangle
} ;

/////////////////////////////////
///      SHAPE : Polygon     ///
////////////////////////////////

var create_ui_layer_shape_polygon = function createUILayerShapePolygon(layer)
{
	// Compare xPoints length with yPoints length
}

var get_ui_layer_shape_polygon = function getUILayerShapePolygon()
{
	
}

var update_ui_layer_shape_polygon = function updateUILayerShapePolygon()
{
	
}

var draw_ui_layer_shape_polygon = function drawUILayerShapePolygon(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	xPoints	= data[layer]['xPoints'] ;
	yPoints	= data[layer]['yPoints'] ;
					
	// Drawing a simple polygon			
	
	//To be done by Sir
	ctx.beginPath() ;
	ctx.moveTo(x,y) ;

	for(var i = 0; i < xPoints.length;i++)
	{
		ctx.lineTo(xPoints[i],yPoints[i]) ;
	}
 
	ctx.stroke() ;				// Drawing the above coded path
	
}

var delete_ui_layer_shape_polygon = function deleteUILayerShapePolygon()
{
	
}

data['engine']['ui.layer.shape.polygon'] = 
{
	'createLayer'	: create_ui_layer_shape_polygon	,
	'getLayer'		: get_ui_layer_shape_polygon	,
	'updateLayer'	: update_ui_layer_shape_polygon	,
	'drawLayer'		: draw_ui_layer_shape_polygon	,	
	'deleteLayer'	: delete_ui_layer_shape_polygon
} ;


/////////////////////////////
///      SHAPE : Arc     ///
////////////////////////////

var create_ui_layer_shape_arc = function createUILayerShapeArc(layer)
{
	
}

var get_ui_layer_shape_arc = function getUILayerShapeArc()
{
	
}

var update_ui_layer_shape_arc = function updateUILayerShapeArc()
{
	
}

var draw_ui_layer_shape_arc = function drawUILayerShapeArc(layer)
{
	x				= data[layer]['x'] ;
	y				= data[layer]['y'] ;
	radius			= data[layer]['radius'] ;
	startAngle		= data[layer]['startAngle'] ;
	endAngle		= data[layer]['endAngle'] ;
	anticlockwise	= data[layer]['anticlockwise'] ;

	var startAngleinRadians = (Math.PI/180) * startAngle ;
	var endAngleinRadians	= (Math.PI/180) * endAngle ;				

	ctx.beginPath() ;
		
	ctx.arc(x, y, radius, startAngleinRadians, endAngleinRadians, anticlockwise) ; // Drawing a simple arc 
	
	ctx.stroke() ;				// Drawing the above coded path
}

var delete_ui_layer_shape_arc = function deleteUILayerShapeArc()
{
	
}

data['engine']['ui.layer.shape.arc'] = 
{
	'createLayer'	: create_ui_layer_shape_arc	,
	'getLayer'		: get_ui_layer_shape_arc	,
	'updateLayer'	: update_ui_layer_shape_arc	,
	'drawLayer'		: draw_ui_layer_shape_arc	,	
	'deleteLayer'	: delete_ui_layer_shape_arc
} ;


/////////////////////////////////////
///      SHAPE : EllipticalArc    ///
////////////////////////////////////

var create_ui_layer_shape_ellipticalArc = function createUILayerShapeEllipticalArc(layer)
{
	
}

var get_ui_layer_shape_ellipticalArc = function getUILayerShapeEllipticalArc()
{
	
}

var update_ui_layer_shape_ellipticalArc = function updateUILayerShapeEllipticalArc()
{
	
}

var draw_ui_layer_shape_ellipticalArc = function drawUILayerShapeEllipticalArc(layer)
{
	x				= data[layer]['x'] ;
	y				= data[layer]['y'] ;
	radiusX			= data[layer]['radiusX'] ;
	radiusY			= data[layer]['radiusY'] ;
	rotation		= data[layer]['rotation'] ;
	startAngle		= data[layer]['startAngle'] ;
	endAngle		= data[layer]['endAngle'] ;
	anticlockwise	= data[layer]['anticlockwise'] ;

	var startAngleinRadians = (Math.PI/180) * startAngle ;
	var endAngleinRadians	= (Math.PI/180) * endAngle ;				

	ctx.beginPath() ;
		
	ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngleinRadians, endAngleinRadians, anticlockwise) ; // Drawing a EllipticalArc 
	ctx.stroke() ;				// Drawing the above coded path
}

var delete_ui_layer_shape_ellipticalArc = function deleteUILayerShapeArc()
{
	
}

data['engine']['ui.layer.shape.ellipticalArc'] = 
{
	'createLayer'	: create_ui_layer_shape_ellipticalArc	,
	'getLayer'		: get_ui_layer_shape_ellipticalArc		,
	'updateLayer'	: update_ui_layer_shape_ellipticalArc	,
	'drawLayer'		: draw_ui_layer_shape_ellipticalArc		,	
	'deleteLayer'	: delete_ui_layer_shape_ellipticalArc
} ;


///////////////////////////////
///      SHAPE : Circle    ///
//////////////////////////////

var create_ui_layer_shape_circle = function createUILayerShapeCircle(layer)
{
	
}

var get_ui_layer_shape_circle = function getUILayerShapeCircle()
{
	
}

var update_ui_layer_shape_circle = function updateUILayerShapeCircle()
{
	
}

var draw_ui_layer_shape_circle = function drawUILayerShapeCircle(layer)
{
	x				= data[layer]['x'] ;
	y				= data[layer]['y'] ;
	radius			= data[layer]['radius'] ;

	var startAngleinRadians = (Math.PI/180) * 0 ;
	var endAngleinRadians	= (Math.PI/180) * 360 ;				

	ctx.beginPath() ;
	ctx.arc(x, y, radius, startAngleinRadians, endAngleinRadians, false) ; // Drawing a simple circle 
	ctx.stroke() ;	// Drawing the above coded path
}

var delete_ui_layer_shape_circle = function deleteUILayerShapeCircle()
{
	
}

data['engine']['ui.layer.shape.circle'] = 
{
	'createLayer'	: create_ui_layer_shape_circle 	,
	'getLayer'		: get_ui_layer_shape_circle 		,
	'updateLayer'	: update_ui_layer_shape_circle 	,
	'drawLayer'		: draw_ui_layer_shape_circle 		,	
	'deleteLayer'	: delete_ui_layer_shape_circle 
} ;


///////////////////////////////
///      SHAPE : ellipse    ///
//////////////////////////////

var create_ui_layer_shape_ellipse = function createUILayerShapeEllipse(layer)
{
	
}

var get_ui_layer_shape_ellipse = function getUILayerShapeEllipse()
{
	
}

var update_ui_layer_shape_ellipse = function updateUILayerShapeEllipse()
{
	
}

var draw_ui_layer_shape_ellipse = function drawUILayerShapeEllipse(layer)
{
	x				= data[layer]['x'] ;
	y				= data[layer]['y'] ;
	radiusX			= data[layer]['radiusX'] ;
	radiusY			= data[layer]['radiusY'] ;
	rotation		= data[layer]['rotation'] ;
	startAngle		= 0 ;
	endAngle		= 360 ;
	anticlockwise	= false ;

	var startAngleinRadians = (Math.PI/180) * startAngle ;
	var endAngleinRadians	= (Math.PI/180) * endAngle ;				


	ctx.beginPath() ;
	// Drawing a Ellipse	
	ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngleinRadians, endAngleinRadians, anticlockwise) ; 
	ctx.stroke() ;				// Drawing the above coded path
}

var delete_ui_layer_shape_ellipse = function deleteUILayerShapeEllipse()
{
	
}

data['engine']['ui.layer.shape.ellipse '] = 
{
	'createLayer'	: create_ui_layer_shape_ellipse 	,
	'getLayer'		: get_ui_layer_shape_ellipse 		,
	'updateLayer'	: update_ui_layer_shape_ellipse 	,
	'drawLayer'		: draw_ui_layer_shape_ellipse 		,	
	'deleteLayer'	: delete_ui_layer_shape_ellipse 
} ;


/////////////////////////////////////
///      SHAPE : quadraticCurve   ///
/////////////////////////////////////

var create_ui_layer_shape_quadraticCurve = function createUILayerShapeEllipse(layer)
{
	
}

var get_ui_layer_shape_quadraticCurve = function getUILayerShapeEllipse()
{
	
}

var update_ui_layer_shape_quadraticCurve = function updateUILayerShapeEllipse()
{
	
}

var draw_ui_layer_shape_quadraticCurve = function drawUILayerShapeEllipse(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	cpx		= data[layer]['cpx'] ;
	cpy		= data[layer]['cpy'] ;
	endX	= data[layer]['endX'] ;
	endY	= data[layer]['endY'] ;
				
	// Drawing a simple Quadratic Curve			
	ctx.beginPath() ;
	ctx.moveTo(x,y) ;
	ctx.quadraticCurveTo(cpx,cpy,endX,endY) ;
	ctx.stroke() ;				// Drawing the above coded path
	
}

var delete_ui_layer_shape_quadraticCurve = function deleteUILayerShapeEllipse()
{
	
}

data['engine']['ui.layer.shape.quadraticCurve'] = 
{
	'createLayer'	: create_ui_layer_shape_quadraticCurve	,
	'getLayer'		: get_ui_layer_shape_quadraticCurve		,
	'updateLayer'	: update_ui_layer_shape_quadraticCurve	,
	'drawLayer'		: draw_ui_layer_shape_quadraticCurve	,	
	'deleteLayer'	: delete_ui_layer_shape_quadraticCurve
} ;



///////////////////////////////////
///      SHAPE : bezierCurve   ///
//////////////////////////////////

var create_ui_layer_shape_bezierCurve = function createUILayerShapeBezierCurve(layer)
{
	
}

var get_ui_layer_shape_bezierCurve = function getUILayerShapeBezierCurve()
{
	
}

var update_ui_layer_shape_bezierCurve = function updateUILayerShapeBezierCurve()
{
	
}

var draw_ui_layer_shape_bezierCurve = function drawUILayerShapeBezierCurve(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	cp1x	= data[layer]['cp1x'] ;
	cp1y	= data[layer]['cp1y'] ;
	cp2x	= data[layer]['cp2x'] ;
	cp2y	= data[layer]['cp2y'] ;
	endX	= data[layer]['endX'] ;
	endY	= data[layer]['endY'] ;
				
	// Drawing a simple Bezier Curve			
	ctx.beginPath() ;
		
	ctx.moveTo(x,y) ;
	ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,endX,endY) ;
	
	ctx.stroke() ;				// Drawing the above coded path
}

var delete_ui_layer_shape_bezierCurve = function deleteUILayerShapeBezierCurve()
{
	
}

data['engine']['ui.layer.shape.bezierCurve'] = 
{
	'createLayer'	: create_ui_layer_shape_bezierCurve	,
	'getLayer'		: get_ui_layer_shape_bezierCurve		,
	'updateLayer'	: update_ui_layer_shape_bezierCurve	,
	'drawLayer'		: draw_ui_layer_shape_bezierCurve	,	
	'deleteLayer'	: delete_ui_layer_shape_bezierCurve
} ;


//////////////////////////////
///      SHAPE : path     ///
/////////////////////////////

var create_ui_layer_shape_path = function createUILayerShapePath(layer)
{
	
}

var get_ui_layer_shape_path = function getUILayerShapePath()
{
	
}

var update_ui_layer_shape_path = function updateUILayerShapePath()
{
	
}

var draw_ui_layer_shape_path = function drawUILayerShapePath(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	width	= data[layer]['width'] ;
				
	// Drawing a simple path			
	ctx.rect(x,y,width,width) ;
	ctx.stroke() ;				// Drawing the above coded path
	
}

var delete_ui_layer_shape_path = function deleteUILayerShapePath()
{
	
}

data['engine']['ui.layer.shape.path'] = 
{
	'createLayer'	: create_ui_layer_shape_path	,
	'getLayer'		: get_ui_layer_shape_path		,
	'updateLayer'	: update_ui_layer_shape_path	,
	'drawLayer'		: draw_ui_layer_shape_path		,	
	'deleteLayer'	: delete_ui_layer_shape_path
} ;
