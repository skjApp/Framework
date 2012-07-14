/////////////////////////
////GLOBAL VARIABLES/////
/////////////////////////

var app ;
var appX, appY, appWidth, appHeight ;
var appMaxFrameRate ;
var appTickTime ;
var appTicks	= 0 ;
var appTime		= 0 ; // App Time in Milliseconds
var appCurrentPage ;

var pages ;

var canvas ;
var ctx ;

/////////////////////////
/////  ENGINE CODE	/////
/////////////////////////	

function createEngine(lApp)
{	
	// alert('createEngine') ;
	app = lApp ;
	createApp() ;
}

function updateEngine()
{
	
}

function deleteEngine()
{
	
}

/////////////////////////
/////	APP CODE	/////
/////////////////////////


function createApp()
{
	// Filling global variables
	
	if(data[app]['x'] != undefined)
	{
		appX		= data[app]['x'] ;
	}
	else
	{
		appX		= 0 ;
	}
	
	if(data[app]['y'] != undefined)
	{
		appY		= data[app]['y'] ;
	}
	else
	{
		appY		= 0 ;
	}
	
	if(data[app]['width'] != undefined)
	{
		appWidth		= data[app]['width'] ;
	}
	else
	{
		appWidth		= 0 ;
	}
	
	if(data[app]['height'] != undefined)
	{
		appHeight	= data[app]['height'] ;
	}
	else
	{
		appHeight	= 0 ;
	}
	
	if(data[app]['maxFrameRate'] != undefined)
	{
		appMaxFrameRate		= data[app]['maxFrameRate'] ;
	}
	else
	{
		appMaxFrameRate		= 0 ;
	}
	
	
	
	// Creating default Canvas
	canvas		= document.createElement('canvas') ;
	canvas.id		= 'canvas1' ;
	canvas.width	= appWidth ;
	canvas.height	= appHeight ;
	document.body.appendChild(canvas) ;
	
	ctx			= canvas.getContext('2d') ;
	
	
	pages = data[app]['pages'] ;
	appCurrentPage = data[app]['currentPage'] ;
	
	// Creating Resource Arrays
	var images = new Array() ;
	data[app]['images'] = images ;
	
	var audios = new Array() ;
	data[app]['audios'] = audios ;
	
	var videos = new Array() ;
	data[app]['videos'] = videos ;
	
	// Initializing Pages
	
	for(var i = 0; i < pages.length;i++)
	{
		createPage(pages[i]) ;
	}
	
	// Starting Timer
	appTickTime = 1000 / appMaxFrameRate ;
	setInterval(drawApp,appTickTime) ;
}

function getApp()
{
	
}

function updateApp()
{
	
}

function drawApp()
{
	drawPage(appCurrentPage) ;	
}

function deleteApp()
{
	
}


/////////////////////////
/////	UI CODE		/////
/////////////////////////

// PAGE CODE
function createPage(page)
{
	// Initializing Layers
	layers = data[page]['layers'] ;
	
	for(var i = 0; i < layers.length;i++)
	{
		createLayer(layers[i]) ;
	}
}

function getPage()
{
	
}

function updatePage()
{
	
}

function drawPage(page)
{
	// Initializing Layers
	layers = data[page]['layers'] ;
	
	for(var i = 0; i < layers.length;i++)
	{
		drawLayer(layers[i]) ;
	}
}

function deletePage()
{
	
}

// LAYER CODE
function createLayer(layer)
{	
	// alert(type) ;
	type = data[layer]['type'] ;
	
	if(type == 'ui.layer.image')
	{
		src = data[layer]['src'] ;
		
		var img = new Image() ;
		img.src = src ;
		
		data[layer]['image'] = img ;
		data[app]['images'].push(img) ;
	}
}

function getLayer()
{
	
}

function updateLayer()
{
	
}

function drawLayer(layer)
{
	// alert(type) ;
	type = data[layer]['type'] ;
	
	if(type == 'ui.layer.image')
	{
		image = data[layer]['image'] ;
		
		if(image != undefined)
		{
			ctx.drawImage(image,0,0) ;
		}
	}
}

function deleteLayer()
{
	
}

// LAYER PART CODE
function createLayerPart()
{
	
}

function updateLayerPart()
{
	
}

function deleteLayerPart()
{
	
}

/////////////////////////
/////	CLOUD CODE	/////
/////////////////////////

// CLOUD CODE


// TRANSACTION CODE


// MESSAGE CODE


/////////////////////////
/////	USER CODE	/////
/////////////////////////

// PROFILE CODE
// CONTACTS CODE
// LANDMARKS CODE
// REMINDERS CODE
// CALENDAR CODE
// ALARMS CODE
// MAIL CODE
// PHOTOS CODE
// DEVICE SETTINGS CODE
// VIDEOS CODE
// MESSAGES CODE
// NOTES CODE
// CONTENT CODE
// TIMELINE CODE

/////////////////////////
/////	DEVICE CODE	/////
/////////////////////////


/////////////////////////
/////	DB CODE		/////
/////////////////////////

 