/////////////////////////
/// IMAGE : DEFAULT	/////
/////////////////////////

var create_ui_page = function createUIPage(page)
{
	var layers = data[page]['layers'] ;
	
	for(var i = 0; i < layers.length;i++)
	{
		createLayer(layers[i]) ;
	}
} ;

var get_ui_page = function getUIPage(page)
{
	data['app']['currentPage']= page ;
	appCurrentPage			= page ;
	
	var state = data[page]['state'] ;
	
	if(state != undefined)
	{
		data[page]['state'] = state ;
	}
	else
	{
		data[page]['state'] 	= data[page]['defaultState'] ;
	}
	
	appCurrentPageLayers	= data[page]['layers'] ;
	
	data[page]['startTime']	= date.getTime() ;
	data[page]['updateCounter']	= -1 ;
} ;

var update_ui_page = function updateUIPage(page)
{
	code[page]['update']() ;
	
	// Getting Layers and drawing them
	var layers = data[page]['layers'] ;

	for(var i = 0; i < layers.length;i++)
	{	
		updateLayer(layers[i]) ;
	}

	data[page]['updateCounter']	= data[page]['updateCounter'] + 1 ;
	data[page]['time']		= date.getTime() - data[page]['startTime'];
} ;

var draw_ui_page = function drawUIPage(page)
{
	var layers = data[page]['layers'] ;

	for(var i = 0; i < layers.length;i++)
	{	
		drawLayer(layers[i]) ;
	}
} ;

var delete_ui_page = function deleteUIPage(page)
{
	alert('deleteUIPage') ;
} ;

engine['ui.page'] = 
{
	'createPage'	: create_ui_page 	,
	'getPage'		: get_ui_page		,
	'updatePage'	: update_ui_page	,
	'drawPage'		: draw_ui_page		,
	'deletePage'	: delete_ui_page 
} ;

//////////////////////////////
// PAGE : COMPLEX STATES /////
//////////////////////////////

var create_ui_page_advanced = function createUIPageAdvanced(page)
{
	// Initializing Layers
	var states = data[page]['states'] ;
	
	for(var i = 0; i < states.length; i++)
	{
		// Creating update layers
		var layers = data[page]['layers'][states[i]]['update'] ;
	
		if(layers != undefined)
		{
			for(var j = 0; j < layers.length;j++)
			{
				createLayer(layers[j]) ;
			}
		}
		
		// Creating draw layers
		var layers = data[page]['layers'][states[i]]['draw'] ;
	
		if(layers != undefined)
		{
			for(var j = 0; j < layers.length;j++)
			{
				createLayer(layers[j]) ;
			}
		}
	}
} ;

var get_ui_page_advanced = function getUIPageAdvanced(page)
{
	data['app']['currentPage']	= page ;
	appCurrentPage				= page ;
	
	var state = data[page]['state'] ;
	
	if(state == undefined)
	{
		data[page]['state'] = data[page]['defaultState'] ;
		state = data[page]['defaultState'] ;
	}
	
	appCurrentPageLayers	= data[page]['layers'][state]['draw'] ;
	
	data[page]['startTime']	= date.getTime() ;
	data[page]['updateCounter']	= -1 ;
} ;

var update_ui_page_advanced = function updateUIPageAdvanced(page)
{			
	code[page]['update']() ;
	
	var state = data[page]['state'] ;
	
	// Executing frameline
	var frameline = data[page]['frameline'] ;
	
	if(frameline != undefined)
	{
		var cFrameline= frameline[state] ;
		
		if(cFrameline != undefined)
		{
			var activeFrame = data[page]['updateCounter'] ;
			//consoleDiv.innerHTML = consoleDiv.innerHTML + ' ' + activeFrame ; 
			var sActiveFrame= activeFrame.toString() ; 
			
			var updateData	= cFrameline[sActiveFrame] ;
			
			if(updateData != undefined)
			{
				for(var i = 0; i < updateData.length; i++)
				{
					var codeData = updateData[i] ;
					
					data[codeData[0]][codeData[1]]= codeData[2] ;
				}
			}
		}
	}
	
	// Updating layers
	var layers = data[page]['layers'][state]['update'] ;
	
	if(layers != undefined)
	{
		for(var i = 0; i < layers.length;i++)
		{	
			updateLayer(layers[i]) ;
		}
	}

	data[page]['updateCounter']	= data[page]['updateCounter'] + 1 ;
	data[page]['time']		= date.getTime() - data[page]['startTime'];
} ;

var draw_ui_page_advanced = function drawUIPageAdvanced(page)
{
	// Getting Layers and drawing them
	var state = data[page]['state'] ;
	var layers = data[page]['layers'][state]['draw'] ;
	
	if(layers != undefined)
	{
		//alert('drawPage1.2') ;
		for(var i = 0; i < layers.length;i++)
		{
			drawLayer(layers[i]) ;
		}
		//alert('drawPage1.3') ;
	}
} ;

var delete_ui_page_advanced = function deleteUIPageAdvanced(page)
{
	alert('deleteUIPageAdvanced') ;
} ;

engine['ui.page.advanced'] = 
{
	'createPage'	: create_ui_page_advanced 	,
	'getPage'		: get_ui_page_advanced		,
	'updatePage'	: update_ui_page_advanced	,
	'drawPage'		: draw_ui_page_advanced		,
	'deletePage'	: delete_ui_page_advanced 
} ;
