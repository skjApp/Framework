/////////////////////////
////GLOBAL CONSTANTS/////
/////////////////////////

var KEY_ENTER	= 13 ;
var KEY_UP		= 38 ;
var KEY_DOWN	= 40 ;
var KEY_LEFT	= 37 ;
var KEY_RIGHT	= 39 ;


/////////////////////////
////GLOBAL VARIABLES/////
/////////////////////////

// Engine
var engine = 
{
	'mouseClick'	: [] ,
	'mouseDblClick'	: [] ,
	'mouseDown'		: [] ,
	'mouseUp'		: [] ,
	'mouseMove'		: [] ,
	'mouseOver'		: [] ,
	'mouseOut'		: [] ,
	
	'keyDown'		: [],
	'keyPress'		: [],
	'keyUp'			: [],
	
	'touchLayer'	: undefined
} ;

var consoleDiv ;
var canvas ;
var ctx ;

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ;

// App
var app ;
var appX, appY, appWidth, appHeight ;
var appMaxFrameRate ;
var appTickTime ;
var appTicks	= 0 ;
var appTime		= 0 ; // App Time in Milliseconds
var appStartTime= 0 ;
var appCurrentPage ;
var appCurrentPageLayers ;

// Pages
var pages ;

/////////////////////////
/////  ENGINE CODE	/////
/////////////////////////	

function createEngine()
{	
	// alert('createEngine') ;
	app = 'app' ;
	
	var title	= document.createElement('title') ;
	title.innerHTML = data['app']['name'] ;
	document.getElementsByTagName("head")[0].appendChild(title) ;
	
	var defaultCSS	= document.createElement('style') ;
	defaultCSS.innerHTML = 'canvas { margin-left : -8px ; margin-top : -8px ;}' ;
	
	//document.getElementsByTagName("head")[0].appendChild(defaultCSS) ;
	document.head.appendChild(defaultCSS) ;
	
	var scriptFiles = data['engine']['pluginfiles'] ;
	var scripts = scriptFiles.length ;
	
	for(var i = 0; i < scripts; i++)
	{
		var script	= document.createElement('script') ;
		script.setAttribute('type','text/javascript') ;
		script.setAttribute('src' ,scriptFiles[i]) ;
	
		//document.getElementsByTagName("head")[0].appendChild(script) ;
		document.head.appendChild(script) ;
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

// Engine Console Code
function showConsole()
{
	document.body.appendChild(consoleDiv) ;
}

function hideConsole()
{
	document.body.removeChild(consoleDiv) ;
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
	canvas.id	= 'canvas1' ;
	canvas.width	= appWidth ;
	canvas.height	= appHeight ;
	document.body.appendChild(canvas) ;
	
	ctx	= canvas.getContext('2d') ;
	
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
	setInterval(updateApp,appTickTime) ;
	
	date 	= new Date();
	appStartTime= date.getTime();
	
	getPage(appCurrentPage) ;
	
	consoleDiv = document.createElement('div') ;
	consoleDiv.innerHTML = 'hello console user!' ;
	
	showConsole() ;
	
	updateApp() ;
	drawApp() ;
}

function getApp()
{
	
}

function updateApp()
{
	updatePage(appCurrentPage) ;
	
	if(requestAnimationFrame == undefined)
	{
		drawApp() ;
	}
	
	engine['keyPress']['key']	= undefined ;
	engine['keyPress']['active']= false ;
	
	engine['keyUp']['key']		= undefined ;
	engine['keyUp']['active']	= false ;
}

function drawApp()
{
	date 	= new Date();
	appTime= date.getTime() - appStartTime;
	
	ctx.clearRect(appX, appY, appWidth, appHeight) ;
	drawPage(appCurrentPage) ;
	appTicks++ ;
	
	if(requestAnimationFrame != undefined)
	{
		requestAnimationFrame(drawApp) ;
	}
}

function closeApp()
{
	window.close() ;
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

// Sets the page given in the parameter as the current page in the app 
function getPage(page)
{
	data[app]['currentPage']= page ;
	appCurrentPage			= page ;
	appCurrentPageLayers	= data[page]['layers'] ;
	
	data[page]['state'] 	= data[page]['defaultState'] ;
	
	data[page]['startTime']	= date.getTime() ;
	data[page]['updateCounter']	= 0 ;
}

function updatePage(page)
{
	code[page]['update']() ;
	
	// Getting Layers and drawing them
	var layers = data[page]['layers'] ;
	
	for(var i = 0; i < layers.length;i++)
	{
		updateLayer(layers[i]) ;
	}
	
	data[page]['time']		= date.getTime() - data[page]['startTime'];
	data[page]['updateCounter']	= data[page]['updateCounter'] + 1 ;
}

function drawPage(page)
{
	// Getting Layers and drawing them
	var layers = data[page]['layers'] ;
	
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

function updateLayer(layer)
{
	if(code[layer] != undefined)
	{
		if(code[layer]['update'] != undefined)
		{
			code[layer]['update']() ;
		}
	}
	
	var type	= data[layer]['type'] ;
	
	if(type == 'ui.layer.text.html')
	{
		data['engine'][type]['updateLayer'](layer) ;
	}
	else if(type == 'ui.layer.image.animation')
	{
		data['engine'][type]['updateLayer'](layer) ;
	}
}

function drawLayer(layer)
{
	var type	= data[layer]['type'] ;
	var visible	= data[layer]['visible'] ;

	// Calling drawLayer function in specific layer plugin
	if(visible == true)
	{	
		data['engine'][type]['drawLayer'](layer) ;
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


// Choosing the touch layer
function getTouchLayer(xx, yy)
{
	var layersSize = appCurrentPageLayers.length ;
	
	for(var i = layersSize - 1; i >= 0; i--)
	{	
		var x		= data[appCurrentPageLayers[i]]['x'] ;
		var y		= data[appCurrentPageLayers[i]]['y'] ;
		var width	= data[appCurrentPageLayers[i]]['width'] ;
		var height	= data[appCurrentPageLayers[i]]['height'] ;
		
		// alert(appCurrentPageLayers[i] + ' xx ' + xx + ' yy ' + yy + ' x ' + x + ' y ' + y + ' width ' + width + ' height ' + height) ;
		
		if(x < xx && x + width > xx && y < yy && y + height > yy)
		{
			engine['touchLayer'] = appCurrentPageLayers[i] ;
			// alert(engine['touchLayer']) ;
			return ;
		}
	}
}

// MOUSE INPUT CODE
function mouseClick(e)
{
	engine['mouseClick']['active']	= true ;
	
	engine['mouseClick']['screenX']	= e.screenX ;
	engine['mouseClick']['screenX']	= e.screenY ;
	
	engine['mouseClick']['clientX']	= e.clientX ;
	engine['mouseClick']['clientY']	= e.clientY ;
	
	engine['mouseClick']['ctrlKey']	= e.ctrlKey ;
	engine['mouseClick']['shiftKey']	= e.shiftKey ;
	engine['mouseClick']['altKey']	= e.altKey ;
	
	// button value 0 means LEFT MOUSE BUTTON
	// button value 1 means MOUSE WHEEL BUTTON
	// button value 2 means RIGHT MOUSE BUTTON
	engine['mouseClick']['button']	= e.button ;
	
}

function mouseDblClick(e)
{
	engine['mouseDblClick']['active']	= true ;
	
	engine['mouseDblClick']['screenX']	= e.screenX ;
	engine['mouseDblClick']['screenX']	= e.screenY ;
	
	engine['mouseDblClick']['clientX']	= e.clientX ;
	engine['mouseDblClick']['clientY']	= e.clientY ;
	
	engine['mouseDblClick']['ctrlKey']	= e.ctrlKey ;
	engine['mouseDblClick']['shiftKey']	= e.shiftKey ;
	engine['mouseDblClick']['altKey']	= e.altKey ;
	
	// button value 0 means LEFT MOUSE BUTTON
	// button value 1 means MOUSE WHEEL BUTTON
	// button value 2 means RIGHT MOUSE BUTTON
	engine['mouseDblClick']['button']	= e.button ;
	
}

function mouseDown(e)
{
	engine['mouseDown']['active']	= true ;
	
	engine['mouseDown']['screenX']	= e.screenX ;
	engine['mouseDown']['screenX']	= e.screenY ;
	
	engine['mouseDown']['clientX']	= e.clientX ;
	engine['mouseDown']['clientY']	= e.clientY ;
	
	engine['mouseDown']['ctrlKey']	= e.ctrlKey ;
	engine['mouseDown']['shiftKey']	= e.shiftKey ;
	engine['mouseDown']['altKey']	= e.altKey ;
	
	// button value 0 means LEFT MOUSE BUTTON
	// button value 1 means MOUSE WHEEL BUTTON
	// button value 2 means RIGHT MOUSE BUTTON
	engine['mouseDown']['button']	= e.button ;
	
	getTouchLayer(engine['mouseDown']['clientX'], engine['mouseDown']['clientY']) ;
}

function mouseUp(e)
{
	engine['mouseUp']['active']	= true ;
	
	engine['mouseUp']['screenX']	= e.screenX ;
	engine['mouseUp']['screenX']	= e.screenY ;
	
	engine['mouseUp']['clientX']	= e.clientX ;
	engine['mouseUp']['clientY']	= e.clientY ;
	
	engine['mouseUp']['ctrlKey']	= e.ctrlKey ;
	engine['mouseUp']['shiftKey']	= e.shiftKey ;
	engine['mouseUp']['altKey']	= e.altKey ;
	
	// button value 0 means LEFT MOUSE BUTTON
	// button value 1 means MOUSE WHEEL BUTTON
	// button value 2 means RIGHT MOUSE BUTTON
	engine['mouseUp']['button']	= e.button ;	
}

function mouseMove(e)
{
	engine['mouseMove']['active']	= true ;
	
	engine['mouseMove']['screenX']	= e.screenX ;
	engine['mouseMove']['screenX']	= e.screenY ;
	
	engine['mouseMove']['clientX']	= e.clientX ;
	engine['mouseMove']['clientY']	= e.clientY ;
	
	engine['mouseMove']['ctrlKey']	= e.ctrlKey ;
	engine['mouseMove']['shiftKey']	= e.shiftKey ;
	engine['mouseMove']['altKey']	= e.altKey ;
	
	// button value 0 means LEFT MOUSE BUTTON
	// button value 1 means MOUSE WHEEL BUTTON
	// button value 2 means RIGHT MOUSE BUTTON
	
}

function mouseOver(e)
{
	engine['mouseOver']['active']	= true ;
	
	engine['mouseOver']['screenX']	= e.screenX ;
	engine['mouseOver']['screenX']	= e.screenY ;
	
	engine['mouseOver']['clientX']	= e.clientX ;
	engine['mouseOver']['clientY']	= e.clientY ;
	
	engine['mouseOver']['ctrlKey']	= e.ctrlKey ;
	engine['mouseOver']['shiftKey']	= e.shiftKey ;
	engine['mouseOver']['altKey']	= e.altKey ;
	
	// button value 0 means LEFT MOUSE BUTTON
	// button value 1 means MOUSE WHEEL BUTTON
	// button value 2 means RIGHT MOUSE BUTTON
	engine['mouseOver']['button']	= e.button ;
	
}

function mouseOut(e)
{
	engine['mouseOut']['active']	= true ;
	
	engine['mouseOut']['screenX']	= e.screenX ;
	engine['mouseOut']['screenX']	= e.screenY ;
	
	engine['mouseOut']['clientX']	= e.clientX ;
	engine['mouseOut']['clientY']	= e.clientY ;
	
	engine['mouseOut']['ctrlKey']	= e.ctrlKey ;
	engine['mouseOut']['shiftKey']	= e.shiftKey ;
	engine['mouseOut']['altKey']	= e.altKey ;
	
	// button value 0 means LEFT MOUSE BUTTON
	// button value 1 means MOUSE WHEEL BUTTON
	// button value 2 means RIGHT MOUSE BUTTON
	engine['mouseOut']['button']	= e.button ;
}

window.onclick		= mouseClick ;
window.ondblclick	= mouseDblClick ;
window.onmousedown	= mouseDown ;
window.onmouseup	= mouseUp ;
window.onmousemove	= mouseMove ;
window.onmouseover	= mouseOver ;
window.onmouseout	= mouseOut ;

// KEY INPUT CODE
function keyDown(e)
{	
	engine['keyDown']['active']	= true ;
	
	var key = e.key ;
	
	if(key == undefined)
	{
		key = e.keyCode ;
	}
	
	engine['keyDown']['key']	= key ;
}

function keyPress(e)
{
	engine['keyPress']['active']	= true ;
	
	var key = e.key ;
	
	if(key == undefined)
	{
		key = e.keyCode ;
	}
	
	engine['keyPress']['key']	= key ;
}

function keyUp(e)
{
	engine['keyUp']['active']	= true ;
	
	var key = e.key ;
	
	if(key == undefined)
	{
		key = e.keyCode ;
	}
	
	engine['keyUp']['key']	= key ;
	
	engine['keyDown']['key']	= undefined ;
	engine['keyDown']['active']	= false ;
}

window.onkeydown	= keyDown ;
//window.onkeypress	= keyPress ;
window.onkeyup		= keyUp ;

// TOUCH INPUT CODE
function touchStart()
{
	
}

function touchMove()
{
	
}

function touchEnd()
{
	
}

function touchEnter()
{
	
}

function touchLeave()
{
	
}

function touchCancel()
{
	
}

// GESTURE INPUT CODE
function gestureTap()
{
	
}

function gestureDrag()
{
	
}

function gestureFlick()
{
	
}

function gestureSwipe()
{
	
}

function gestureDoubleTap()
{
	
}

function gesturePinchOpen()
{
	
}

function gesturePinchClose()
{
	
}

function gestureTouchAndHold()
{
	
}

function gestureShake()
{
	
}

// OTHER INPUT CODE
//window.onload ;
//window.onresize ;	The event occurs when a document view is resized
//window.onscroll ;	The event occurs when a document view is scrolled

// GAMING RELATED CODE
function collision(layer1, layer2)
{
	if(data[layer1]['visible'] == false)
	{
		return ;
	}
	
	var x1 = data[layer1]['x'] ;
	var y1 = data[layer1]['y'] ;
	var w1 = data[layer1]['width'] ;
	var h1 = data[layer1]['height'] ;
	
	var x2 = data[layer2]['x'] ;
	var y2 = data[layer2]['y'] ;
	var w2 = data[layer2]['width'] ;
	var h2 = data[layer2]['height'] ;
	
	// alert(layer1 + ' ' + x1 + ' ' +  y1 + ' ' + w1 + ' ' + h1 + ' ' + layer2 + ' ' + x2 + ' ' +  y2 + ' ' + w2 + ' ' + h2) ;
	
	
	if(x2 > x1 && x2 < x1 + w1 && y2 > y1 && y2 < y1 + h1)
	{
		return true ;
	}
	else if(x2 + w2 > x1 && x2 + w2 < x1 + w1 && y2 > y1 && y2 < y1 + h1)
	{
		return true ;
	}
	else if(x2 > x1 && x2 < x1 + w1 && y2 + h2> y1 && y2  + h2< y1 + h1)
	{
		return true ;
	}
	else if(x2 + w2 > x1 && x2 + w2 < x1 + w1 && y2 + h2 > y1 && y2 + h2 < y1 + h1)
	{
		return true ;
	}
	else
	{
		return false ;
	}
}

function checkCollision(layer1, layer2)
{
	if(collision(layer1, layer2) == true)
	{
		return true ;
	}
	else if(collision(layer2,layer1) == true)
	{
		return true ;
	}
}

function checkBulkCollisions(layer,layers)
{
	// consoleDiv.innerHTML = layer + layers ;
	
	for(var i = 0; i < layers.length;i++)
	{	
		if(checkCollision(layer, layers[i]) == true)
		{
			return layers[i] ;
		}
	}
	
	return false ;
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

 