/////////////////////////
/////TEXT : DEFAULT	/////
/////////////////////////

var create_ui_layer_text = function createUILayerText(layer)
{
	
}

var get_ui_layer_text = function getUILayerText()
{
	
}

var update_ui_layer_text = function updateUILayerText()
{
	
}

var draw_ui_layer_text = function drawUILayerText(layer)
{
	var text	= data[layer]['text'] ;
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	
	var rgb		= data[layer]['rgb'] ;
	
	// alert(rgb) ;
	
	if(rgb != undefined)
	{
		ctx.strokeStyle = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')' ;
	}
	
	var font	= data[layer]['font'] ;
	if(font != undefined)
	{
		ctx.font = font ;
	}
	
	ctx.textBaseline = 'top' ;
	
	if(ctx.measureText(text).width != undefined)
	{
		data[layer]['width'] = ctx.measureText(text).width ;
	}
	
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
	
	ctx.strokeText(text,x + xShift,y + yShift) ;
	ctx.strokeStyle = 'rgb(0,0,0)' ;
}

var delete_ui_layer_text = function deleteUILayerText()
{
	
}


data['engine']['ui.layer.text'] = 
{
	'createLayer'	: create_ui_layer_text 	,
	'getLayer'		: get_ui_layer_text		,
	'updateLayer'	: update_ui_layer_text	,
	'drawLayer'		: draw_ui_layer_text	,
	'deleteLayer'	: delete_ui_layer_text
} ;


/////////////////////////
///   TEXT : CSS	/////
/////////////////////////

var create_ui_layer_text_css = function createUILayerTextCSS(layer)
{
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	var width	= data[layer]['width'] ;
	var height	= data[layer]['height'] ;
	
	var text	= data[layer]['text'] ;
	var color	= data[layer]['color'] ;
	var font	= data[layer]['font'] ;
	
	var div1				= document.createElement('div') ;
	div1.style.position		= 'absolute' ;
	
	div1.innerHTML			= text ;
	div1.style.left			= x + 'px' ;
	div1.style.top			= y + 'px';
	div1.style.width		= width + 'px' ;
	div1.style.height		= height + 'px' ;
	div1.style.color		= color ;
	div1.style.font			= font ;
	
	// div1.style.backgroundColor = 'red' ;
	
	var visible	= data[layer]['visible'] ;
	
	if(visible == true)
	{
		document.body.appendChild(div1) ;
	}
	
	data[layer]['div']		= div1 ;
}

var get_ui_layer_text_css = function getUILayerTextCSS()
{
	
}

var update_ui_layer_text_css = function updateUILayerTextCSS(layer)
{
	var visible = data[layer]['visible'] ;
	
	var div1 = data[layer]['div'] ;
	
	if(visible == true)
	{
		document.body.appendChild(div1) ;
	}
	else
	{
		document.body.removeChild(div1) ;
	}
}

var draw_ui_layer_text_css = function drawUILayerTextCSS(layer)
{	
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	var width	= data[layer]['width'] ;
	var height	= data[layer]['height'] ;
	
	var text	= data[layer]['text'] ;
	var color	= data[layer]['color'] ;
	var font	= data[layer]['font'] ;
	
	var div1				= data[layer]['div'] ;
	
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
	
	div1.innerHTML			= text ;
	div1.style.left			= (x + xShift) + 'px';
	div1.style.top			= (y + yShift) + 'px';
	div1.style.width		= width + 'px' ;
	div1.style.height		= height + 'px' ;
	div1.style.color		= color ;
	div1.style.font			= font ;
}

var delete_ui_layer_text_css = function deleteUILayerTextCSS()
{
	
}


data['engine']['ui.layer.text.html'] = 
{
	'createLayer'	: create_ui_layer_text_css 	,
	'getLayer'	 	: get_ui_layer_text_css		,
	'updateLayer'	: update_ui_layer_text_css	,
	'drawLayer'	 	: draw_ui_layer_text_css	,
	'deleteLayer'	: delete_ui_layer_text_css
} ;