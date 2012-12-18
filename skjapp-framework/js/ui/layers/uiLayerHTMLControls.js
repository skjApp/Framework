// HTML Controls

// DIV
var create_ui_layer_html_div = function createUILayerHTMLDIV(layer)
{
	var div = document.createElement('div') ;
	div.setAttribute('id',data[layer]['id']) ;
	div.setAttribute('style','position : absolute; left: ' + data[layer]['x'] + 'px;top:' + data[layer]['y'] + 'px;') ;
	div.setAttribute('class',data[layer]['class']) ;
	div.innerHTML = data[layer]['text'] ;
	
	document.body.appendChild(div) ;
}

var get_ui_layer_html_div = function getUILayerHTMLDIV()
{
	
}

var update_ui_layer_html_div = function updateUILayerHTMLDIV(layer)
{
	
}

var draw_ui_layer_html_div = function drawUILayerHTMLDIV(layer)
{
	
}

data['engine']['ui.layer.html.div'] = 
{
	'createLayer' : create_ui_layer_html_div ,
	'getLayer'	  : get_ui_layer_html_div	 ,
	'updateLayer' : update_ui_layer_html_div ,
	'drawLayer'	  : draw_ui_layer_html_div
} ;

// Button
var create_ui_layer_html_button = function createUILayerHTMLButton(layer)
{
	var button = document.createElement('input') ;
	button.setAttribute('type','button') ;
	button.setAttribute('id',data[layer]['id']) ;
	button.setAttribute('style','position : absolute; left: ' + data[layer]['x'] + 'px;top:' + data[layer]['y'] + 'px;') ;
	button.setAttribute('class',data[layer]['class']) ;
	button.setAttribute('value',data[layer]['text']) ;
	
	document.body.appendChild(button) ;
}

var get_ui_layer_html_button = function getUILayerHTMLButton()
{
	
}

var update_ui_layer_html_button = function updateUILayerHTMLButton(layer)
{
	
}

var draw_ui_layer_html_button = function drawUILayerHTMLButton(layer)
{
	
}

data['engine']['ui.layer.html.button'] = 
{
	'createLayer' : create_ui_layer_html_button ,
	'getLayer'	  : get_ui_layer_html_button	,
	'updateLayer' : update_ui_layer_html_button ,
	'drawLayer'	  : draw_ui_layer_html_button
} ;

// TextBox
var create_ui_layer_html_textbox = function createUILayerHTMLTextBox(layer)
{
	var textbox = document.createElement('input') ;
	textbox.setAttribute('type','textbox') ;
	textbox.setAttribute('id',data[layer]['id']) ;
	textbox.setAttribute('style','position : absolute; left: ' + data[layer]['x'] + 'px;top:' + data[layer]['y'] + 'px;') ;
	textbox.setAttribute('class',data[layer]['class']) ;
	textbox.setAttribute('value',data[layer]['text']) ;
	
	document.body.appendChild(textbox) ;
}

var get_ui_layer_html_textbox = function getUILayerHTMLTextBox()
{
	
}

var update_ui_layer_html_textbox = function updateUILayerHTMLTextBox(layer)
{
	
}

var draw_ui_layer_html_textbox = function drawUILayerHTMLTextBox(layer)
{
	
}

data['engine']['ui.layer.html.textbox'] = 
{
	'createLayer' : create_ui_layer_html_textbox ,
	'getLayer'	  : get_ui_layer_html_textbox	,
	'updateLayer' : update_ui_layer_html_textbox ,
	'drawLayer'	  : draw_ui_layer_html_textbox
} ;

// Checkbox

