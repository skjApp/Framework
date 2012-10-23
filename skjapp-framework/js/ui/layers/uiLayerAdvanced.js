/////////////////////////
//// LAYER : CUSTOM	/////
/////////////////////////

var create_ui_layer_advanced_custom = function createUILayerAdvancedCustom(layer)
{
	
} ;

var get_ui_layer_advanced_custom = function getUILayerAdvancedCustom(layer)
{
	
} ;

var update_ui_layer_advanced_custom = function updateUILayerAdvancedCustom(layer)
{
	
} ;

var draw_ui_layer_advanced_custom = function drawUILayerAdvancedCustom(layer)
{
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
} ;

var delete_ui_layer_advanced_custom = function deleteUILayerAdvancedCustom(layer)
{
	
} ;


data['engine']['ui.layer.advanced.custom'] = 
{
	'createLayer'	: create_ui_layer_advanced_custom 	,
	'getLayer'		: get_ui_layer_advanced_custom		,
	'updateLayer'	: update_ui_layer_advanced_custom	,
	'drawLayer'		: draw_ui_layer_advanced_custom		,
	'deleteLayer'	: delete_ui_layer_advanced_custom
} ;

/////////////////////////
///  LAYER : GROUP	/////
/////////////////////////

var create_ui_layer_advanced_group = function createUILayerAdvancedGroup(layer)
{	
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	
	var layers = data[layer]['layers'] ;
	
	for(var i = 0; i < layers.length;i++)
	{	
		createLayer(layers[i]) ;
	}
} ;

var get_ui_layer_advanced_group = function getUILayerAdvancedGroup(layer)
{
	
} ;

var update_ui_layer_advanced_group = function updateUILayerAdvancedGroup(layer)
{	
	//consoleDiv.innerHTML = layer ;
	var layers = data[layer]['layers'] ;
	
	for(var i = 0; i < layers.length;i++)
	{
		updateLayer(layers[i]) ;
	}
} ;

var draw_ui_layer_advanced_group = function drawUILayerAdvancedGroup(layer)
{
	var visible = data[layer]['visible'] ;
		
	var layers = data[layer]['layers'] ;
	
	for(var i = 0; i < layers.length;i++)
	{
		data[layers[i]]['visible'] = visible ;
		
		data[layers[i]]['xShift'] = data[layer]['x'] ;
		data[layers[i]]['yShift'] = data[layer]['y'] ;
		
		drawLayer(layers[i]) ;
		
		//consoleDiv.innerHTML = layer + ' ' + layers[i] ;
	}
} ;

var delete_ui_layer_advanced_group = function deleteUILayerAdvancedGroup(layer)
{
	
} ;

data['engine']['ui.layer.advanced.group'] = 
{
	'createLayer'	: create_ui_layer_advanced_group 	,
	'getLayer'		: get_ui_layer_advanced_group		,
	'updateLayer'	: update_ui_layer_advanced_group	,
	'drawLayer'		: draw_ui_layer_advanced_group		,
	'deleteLayer'	: delete_ui_layer_advanced_group
} ;