/////////////////////////
///// AUDIO : BASIC	/////
/////////////////////////

var create_ui_layer_audio = function createUILayerAudio(layer)
{
	var audio	= document.createElement('audio') ;
	
	var sourceSize = data[layer]['src'].length ;
	
	for(var i = 0; i < sourceSize; i++)
	{
		var source		= document.createElement('source') ;
	
		var sourceSrc	= data[layer]['src'][i] ;
		source.setAttribute('src' ,sourceSrc) ;
		
		var sourceType	= data[layer]['srcType'][i] ;
		source.setAttribute('type' ,sourceType) ;
		
		audio.appendChild(source) ;
	}
	
	audio.setAttribute('preload' ,"auto") ;
	document.body.appendChild(audio) ;
	
	data[layer]['audio'] = audio ;
} ;

var get_ui_layer_audio = function getUILayerAudio(layer)
{
	
} ;

var update_ui_layer_audio = function updateUILayerAudio(layer)
{
	var audio = data[layer]['audio'] ;
	
	var state = data[layer]['state'] ;
	
	if(state == 'play' && audio != undefined)
	{
		audio.volume = data[layer]['volume'] ;
		audio.play() ;
		data[layer]['state'] = undefined ;
	}
} ;

var draw_ui_layer_audio = function drawUILayerAudio(layer)
{
	
} ;

var delete_ui_layer_audio = function deleteUILayerAudio(layer)
{
	
} ;

data['engine']['ui.layer.audio'] = 
{
	'createLayer'	: create_ui_layer_audio 	,
	'getLayer'		: get_ui_layer_audio		,
	'updateLayer'	: update_ui_layer_audio		,
	'drawLayer'		: draw_ui_layer_audio		,
	'deleteLayer'	: delete_ui_layer_audio
} ;
