/////////////////////////
///// SHAPE : LINE	/////
/////////////////////////

var create_ui_layer_shape_line = function createUILayerShapeLine(layer)
{
	
} ;

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
	ctx.moveTo(x,y) ;			// Starting point of line 
	ctx.lineTo(endX,endY) ;		// Ending point of line
	ctx.closePath() ;
	ctx.stroke() ;				// Drawing the above coded path
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
	
} ;

var get_ui_layer_shape_rectangle = function getUILayerShapeRectangle()
{
	
}

var update_ui_layer_shape_rectangle = function updateUILayerShapeRectangle()
{
	
}

var draw_ui_layer_shape_rectangle = function drawUILayerShapeRectangle(layer)
{
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	width	= data[layer]['width'] ;
	height	= data[layer]['height'] ;
			
	// Drawing a simple line			
	ctx.rect(x,y,width,height) ; 
	ctx.stroke() ;				// Drawing the above coded path
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