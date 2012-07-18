/////////////////////////
////GLOBAL VARIABLES/////
/////////////////////////

// Engine
var canvas ;
var ctx ;

// App
var app ;
var appX, appY, appWidth, appHeight ;
var appMaxFrameRate ;
var appTickTime ;
var appTicks	= 0 ;
var appTime		= 0 ; // App Time in Milliseconds
var appStartTime= 0 ;
var appCurrentPage ;

// Pages
var pages ;

/////////////////////////
/////  ENGINE CODE	/////
/////////////////////////	

function createEngine(lApp)
{	
	// alert('createEngine') ;
	app = lApp ;
	
	var scriptFiles = data['engine']['pluginfiles'] ;
	var scripts = scriptFiles.length ;
	
	for(var i = 0; i < scripts; i++)
	{
		var script	= document.createElement('script') ;
		script.setAttribute('type','text/javascript') ;
		script.setAttribute('src' ,scriptFiles[i]) ;
	
		document.getElementsByTagName("head")[0].appendChild(script) ;
	}
	
	
	script.onload = createApp ;
}

function scriptLoadCounter()
{
	
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
	
	// Setting Default Stroke Style and Fill Style as Black Color
	ctx.strokeStyle = '#000000' ;
	ctx.fillStyle	= '#000000' ;
	
	
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
	
	date 	= new Date();
	appStartTime= date.getTime();
}

function getApp()
{
	
}

function updateApp()
{
	
}

function drawApp()
{
	date 	= new Date();
	appTime= date.getTime() - appStartTime;
	
	
	ctx.clearRect(appX, appY, appWidth, appHeight) ;
	drawPage(appCurrentPage) ;
	appTicks++ ;
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
	type = data[layer]['type'] ;
	
	// Calling createLayer function in specific layer plugin
	data['engine'][type]['createLayer'](layer) ;
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
	type	= data[layer]['type'] ;
	x		= data[layer]['x'] ;
	y		= data[layer]['y'] ;
	w		= data[layer]['width'] ;
	h		= data[layer]['height'] ;
	
	state	= data[layer]['state'] ;
	
	// Calling drawLayer function in specific layer plugin
	data['engine'][type]['drawLayer'](layer) ;
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
// VIDEOS CODE
// MESSAGES CODE
// NOTES CODE
// CONTENT CODE
// TIMELINE CODE

/////////////////////////
/////	DEVICE CODE	/////
/////////////////////////

// DEVICE SETTINGS CODE

/////////////////////////
/////	DB CODE		/////
/////////////////////////

 