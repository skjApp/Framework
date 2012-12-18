// Framework's Data and Code
// 
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
	
	'gesture'  		: {} ,				// Gesture
	
	'keyDown'		: [] ,
	'keyPress'		: [] ,
	'keyUp'			: [] , 
	
	'touchLayer'	: undefined,
	'touchLayerPart': undefined,
	
	'resourcesLoaded' : false
} ;

var consoleDiv ;
var canvasDiv ;
var canvas ;
var ctx ;

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ;

// Script Variables
var totalScripts= 0 ;
var scriptLoaded= 0 ;

// Resource Variables
var totalRes	= 0 ;
var resLoaded	= 0 ;
var resLoadingComplete = false ;

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

var touchData = new Array() ;

// Pages
var pages ;

/////////////////////////
/////  ENGINE CODE	/////
/////////////////////////	

function createEngine()
{	
	app = 'app' ;
	
	/*var title	= document.createElement('title') ;
	title.innerHTML = data['app']['name'] ;
	document.head.appendChild(title) ;*/
	
	var viewport = document.createElement('meta') ;
	viewport.setAttribute("name","viewport") ;
	viewport.setAttribute("id","viewport") ;
	viewport.setAttribute("content","width=" + data[app]["viewportWidth"] + ", height=" + data[app]["viewportHeight"] + ", user-scalable=" + data[app]["viewportResize"] + "") ;
	document.getElementsByTagName('head')[0].appendChild(viewport);
	
	// NO NEED - Kamal
	/*var defaultCSS	= document.createElement('style') ;
	defaultCSS.innerHTML = 'canvas { margin-left : -8px ; margin-top : -8px ;}' ;
	
	document.head.appendChild(defaultCSS) ;*/

	var scriptFiles = data['engine']['pluginfiles'] ;
	totalScripts = scriptFiles.length ;
	
	for(var i = 0; i < totalScripts; i++)
	{
		var script	= document.createElement('script') ;
		script.setAttribute('type','text/javascript') ;
		script.setAttribute('src' ,scriptFiles[i]) ;
		
		script.onload = scriptLoadCounter ;
		document.getElementsByTagName('head')[0].appendChild(script) ;
	}
	
	engine['keyDown']	['active']	= false ;
	engine['mouseDown']	['active']	= false ;
}

function scriptLoadCounter()
{
	scriptLoaded++ ;
	
	if(scriptLoaded == totalScripts)
	{
		createApp() ;
	}
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
	// document.body.appendChild(consoleDiv) ;
}

function hideConsole()
{
	// document.body.removeChild(consoleDiv) ;
}

/////////////////////////
/////	APP CODE	/////
/////////////////////////


function createApp()
{	
	consoleDiv = document.createElement('div') ;
	consoleDiv.innerHTML = 'hello console user!' ;
	
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
	//alert("create app2") ;
	canvas.setAttribute("id", "canvas1") ;
	canvas.setAttribute("width", appWidth) ;
	canvas.setAttribute("height", appHeight) ;
	
	canvasDiv = document.createElement('div') ;
	canvasDiv.setAttribute("id", "canvasDiv") ;
	
	var pos = "position: absolute;left:0px; top:0px; width :" + appWidth + "px; height :" + appHeight + "px;" ;
	canvasDiv.setAttribute("style", pos) ;
	
	canvasDiv.appendChild(canvas) ;
	
    document.body.appendChild(canvasDiv) ;
	
	ctx			= document.getElementById("canvas1").getContext('2d') ;
	ctxEvent	= document.getElementById("canvas1") ;
	
	// GESTURE EVENTS
	ctxEvent.ontouchstart 	= touchStart ;			// touchstart
	ctxEvent.ontouchmove 	= touchMove ;			// touchmove
	ctxEvent.ontouchend 	= touchEnd ;			// touchend
	ctxEvent.ontouchenter 	= touchEnter ;			// touchenter
	ctxEvent.ontouchleave 	= touchLeave ;			// touchleave
	ctxEvent.ontouchcancel 	= touchCancel ;			// touchcancel
    
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
	
	// Initializing Pages and Layers
	
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
	
	//showConsole() ;
	
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
	
	if(engine['keyDown']['active'] == true)
	{
		engine['keyDown']['active']	= 'repeated' ;
	}
	
	engine['keyPress']['key']	= undefined ;
	engine['keyPress']['active']= false ;
	
	engine['keyUp']['key']		= undefined ;
	engine['keyUp']['active']	= false ;
	
	engine['touchLayer'] = undefined ;
	engine['touchLayerPart'] = undefined ;
	
	//consoleDiv.innerHTML = totalRes + ' ' + resLoaded ;
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

function createEffects(layer)
{
	var x		= data[layer]['x'] ;
	var y		= data[layer]['y'] ;
	var width	= data[layer]['width'] ;
	var height	= data[layer]['height'] ;
	var effect	= data[layer]['effect'] ;
	
	// Initiate the Properties
	if(effect == "fadeIn")
	{
		data[layer]["effectComplete"] = undefined ;
		effects["fadeIn"][layer] 	= {"alpha" : 0} ;
	}
	else if(effect == "fadeOut")
	{
		data[layer]["effectComplete"] = undefined ;
		effects["fadeOut"][layer] 	= {"alpha" : 1.0} ;
	}
	else if(effect == "slideIn")
	{
		data[layer]["effectComplete"] = undefined ;
		effects["slideIn"][layer] 	= {"height" : height, "to" : 1} ;
	}
	else if(effect == "slideOut")
	{
		data[layer]["effectComplete"] = undefined ;
		effects["slideOut"][layer] 	= {"height" : height, "from" : height} ;
	}
	else if(effect == "switchOff")
	{
		data[layer]["effectComplete"] = undefined ;
		effects["switchOff"][layer] = {"height" : height, "from" : height, "alpha" : 1} ;
	}
	else if(effect == "grow")
	{
		var growX = x + 40 ;
		var growY = y + 40 ;
		
		data[layer]["effectComplete"] = undefined ;
		
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
	else if(effect == "squish")
	{
		data[layer]["effectComplete"] = undefined ;
		effects["squish"][layer] = {"width" : width, "height" : height} ;
	}
	else if(effect == "shake")
	{
		data[layer]["effectComplete"] = undefined ;
		effects["shake"][layer] = {"x" : x, "shake" : 0} ;
	}
	else if(effect == "fold")
	{
		data[layer]["effectComplete"] = undefined ;
		effects["fold"][layer] = {"width" : width, "height" : height} ;
	}
	else if(effect == "pulsate")
	{
		data[layer]["effectComplete"] = undefined ;
		effects["pulsate"][layer] 	= {"alpha" : 1.0, "times" : 0} ;
	}
	else if(effect == "dropOut")
	{
		data[layer]["effectComplete"] = undefined ;
		effects["dropOut"][layer] 	= {"alpha" : 1.0} ;
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
	var type = data[page]['type'] ;
	engine[type]['createPage'](page) ;
}

// Sets the page given in the parameter as the current page in the app 
function getPage(page, state)
{
	var type = data[page]['type'] ;
	
	data[page]['state'] = state ;

	engine[type]['getPage'](page) ;
}

function updatePage(page)
{	
	var type = data[page]['type'] ;

	engine[type]['updatePage'](page) ;
}

function drawPage(page)
{
	var type = data[page]['type'] ;
	
	engine[type]['drawPage'](page) ;
}

function deletePage()
{
	var type = data[page]['type'] ;

	engine[type]['deletePage'](page) ;
}

// LAYER CODE
function createLayer(layer)
{	
	if(data[layer]['created'] != true)
	{	
		var type = data[layer]['type'] ;
	
		// Calling createLayer function in specific layer plugin
		data['engine'][type]['createLayer'](layer) ;
	
		data[layer]['created'] = true ;
	}
}

function getLayer(layer)
{
	var type = data[layer]['type'] ;
	
	// Calling getLayer function in specific layer plugin
	data['engine'][type]['getLayer'](layer) ;
}

function updateLayer(layer)
{
	var type	= data[layer]['type'] ;
	var visible	= data[layer]['visible'] ;
	
	if(visible == true)
	{
		if(code[layer] != undefined)
		{
			if(code[layer]['update'] != undefined)
			{
				code[layer]['update']() ;
			}
		}
		
		if(type == 'ui.layer.image.animation')
		{
			data['engine'][type]['updateLayer'](layer) ;
		}
		else if(type == 'ui.layer.advanced.group')
		{
			data['engine'][type]['updateLayer'](layer) ;
		}
	}
		
	if(type == 'ui.layer.text.html')
	{
		data['engine'][type]['updateLayer'](layer) ;
	}
	else if(type == 'ui.layer.image.animation.array')
	{
		if(code[layer] != undefined)
		{
			if(code[layer]['update'] != undefined)
			{
				code[layer]['update']() ;
			}
		}
		
		data['engine'][type]['updateLayer'](layer) ;
	}
	else if(type == 'ui.layer.audio')
	{
		data['engine'][type]['updateLayer'](layer) ;
	}
	else if(type == 'ui.layer.html.div')
	{
		data['engine'][type]['updateLayer'](layer) ;
	}
	else if(type == 'ui.layer.html.button')
	{
		data['engine'][type]['updateLayer'](layer) ;
	}
	else if(type == 'ui.layer.html.textbox')
	{
		data['engine'][type]['updateLayer'](layer) ;
	}
	
	// Blackberry
	else if(type == 'device.blackberry10')
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
	
	if(type == 'ui.layer.image.animation.array')
	{
		data['engine'][type]['drawLayer'](layer) ;
	}
}

function deleteLayer(layer)
{
	var type = data[layer]['type'] ;
	
	// Calling deleteLayer function in specific layer plugin
	data['engine'][type]['deleteLayer'](layer) ;
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
		//consoleDiv.innerHTML = consoleDiv.innerHTML + '</br>' + appCurrentPageLayers[i] ;
		//alert('a ' + appCurrentPageLayers[i]) ;
		
		var visible	= data[appCurrentPageLayers[i]]['visible'] ;
		
		var x		= data[appCurrentPageLayers[i]]['x'] ;
		var y		= data[appCurrentPageLayers[i]]['y'] ;
		var width	= data[appCurrentPageLayers[i]]['width'] ;
		var height	= data[appCurrentPageLayers[i]]['height'] ;
		
		if(visible == true && x < xx && x + width > xx && y < yy && y + height > yy)
		{
			engine['touchLayer'] = appCurrentPageLayers[i] ;
			
			var layerType = data[engine['touchLayer']]['type'] ;
			//alert('touchLayer ' + engine['touchLayer']) ;
			
			if(layerType == 'ui.layer.advanced.group')
			{
				var layers = data[engine['touchLayer']]['layers'] ;
				
				for(var j = layers.length - 1; j >= 0; j--)
				{
					var visible	= data[layers[j]]['visible'] ;
		
					var x		= data[layers[j]]['x'] + data[layers[j]]['xShift'] ;
					var y		= data[layers[j]]['y'] + data[layers[j]]['yShift'] ;
					var width	= data[layers[j]]['width'] ;
					var height	= data[layers[j]]['height'] ;
					
					if(visible == true && x < xx && x + width > xx && y < yy && y + height > yy)
					{
						engine['touchLayerPart'] = layers[j] ;
						//alert() ;
						return ;
					}
				}
			}
			//consoleDiv.innerHTML = consoleDiv.innerHTML + ' ' + engine['touchLayer'] ; 
			
			return ;
		}
	}
}

// GESTURE


// MOUSE INPUT CODE
function mouseClick(e)
{
	engine['mouseClick']['active']	= true ;
	
	engine['mouseClick']['screenX']	= e.screenX ;
	engine['mouseClick']['screenX']	= e.screenY ;
	
	engine['mouseClick']['clientX']	= e.pageX ;
	engine['mouseClick']['clientY']	= e.pageY ;
	
	engine['mouseClick']['ctrlKey']	= e.ctrlKey ;
	engine['mouseClick']['shiftKey']= e.shiftKey ;
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
	
	engine['mouseDblClick']['clientX']	= e.pageX ;
	engine['mouseDblClick']['clientY']	= e.pageY ;
	
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
	
	engine['mouseDown']['clientX']	= e.pageX ;
	engine['mouseDown']['clientY']	= e.pageY ;
	
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
	// Clearing mouseDown values
	engine['mouseDown']['active']	= false ;
	
	engine['mouseDown']['screenX']	= undefined ;
	engine['mouseDown']['screenX']	= undefined ;
	
	engine['mouseDown']['clientX']	= undefined ;
	engine['mouseDown']['clientY']	= undefined ;
	
	engine['mouseDown']['ctrlKey']	= undefined ;
	engine['mouseDown']['shiftKey']	= undefined ;
	engine['mouseDown']['altKey']	= undefined ;
	
	engine['mouseDown']['button']	= undefined ;
	
	// mouseUp Values
	engine['mouseUp']['screenX']	= e.screenX ;
	engine['mouseUp']['screenX']	= e.screenY ;
	
	engine['mouseUp']['clientX']	= e.pageX ;
	engine['mouseUp']['clientY']	= e.pageY ;
	
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
	
	engine['mouseMove']['clientX']	= e.pageX ;
	engine['mouseMove']['clientY']	= e.pageY ;
	
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
	
	engine['mouseOver']['clientX']	= e.pageX ;
	engine['mouseOver']['clientY']	= e.pageY ;
	
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
	
	engine['mouseOut']['clientX']	= e.pageX ;
	engine['mouseOut']['clientY']	= e.pageY ;
	
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
	// consoleDiv.innerHTML = 'keyPress ' + e ;
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
window.onkeypress	= keyPress ;
window.onkeyup		= keyUp ;

// TOUCH INPUT CODE
function touchStart(event)
{
	var touch = event.touches[0] ;
	
	var coordinates = {"x" : touch.pageX, "y" : touch.pageY} ;
	
	// Remove the all previous & Add the New data.
	touchData.length = 0 ;
	touchData.push(coordinates) ;
	
	var data = {"fingers" : 1, "data" : touchData} ;
	
	engine["gesture"]["tap"] = data ;
	
	
}

function touchEnd(e)
{
	//alert(JSON.stringify(engine["gesture"], undefined, 3)) ;
}

function touchMove(e)
{
	//alert(JSON.stringify(engine["gesture"]["tap"], undefined, 3)) ;
}

function touchEnter(e)
{
	//alert("Touch Enter")
}

function touchLeave(e)
{
	//alert("touchLeave")
}

function touchCancel(e)
{
}

// GESTURE INPUT CODE
function gestureTap(event)
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
function boundingBoxCollision(x1, y1, w1, h1, x2, y2, w2, h2)
{		
	//alert('A ' + x1 + ' ' + y1 + ' ' + w1 + ' ' + h1 + ' ' + x2 + ' ' + y2 + ' ' + w2 + ' ' + h2) ;
	//alert('B ' + x1 + ' ' + y1 + ' ' + w1 + ' ' + h1 + ' ' + x2 + ' ' + y2 + ' ' + w2 + ' ' + h2) ;
	//alert('C ' + x1 + ' ' + y1 + ' ' + w1 + ' ' + h1 + ' ' + x2 + ' ' + y2 + ' ' + w2 + ' ' + h2) ;
	//alert('D ' + x1 + ' ' + y1 + ' ' + w1 + ' ' + h1 + ' ' + x2 + ' ' + y2 + ' ' + w2 + ' ' + h2) ;
	
	if(x2 		> x1 && x2		< x1 + w1 && y2 	> y1 && y2		< y1 + h1)
	{
		
		return true ;
	}
	else if(x2 + w2 > x1 && x2 + w2 < x1 + w1 && y2 	> y1 && y2		< y1 + h1)
	{
		
		return true ;
	}
	else if(x2 		> x1 && x2 		< x1 + w1 && y2 + h2> y1 && y2 + h2	< y1 + h1)
	{
		
		return true ;
	}
	else if(x2 + w2 > x1 && x2 + w2 < x1 + w1 && y2 + h2> y1 && y2 + h2 < y1 + h1)
	{
		
		return true ;
	}
	else
	{
		//alert('E ' + x1 + ' ' + y1 + ' ' + w1 + ' ' + h1 + ' ' + x2 + ' ' + y2 + ' ' + w2 + ' ' + h2) ;
		return false ;
	}
}

function check2DCollision(visible1, visible2, x1, y1, w1, h1, x2, y2, w2, h2)
{
	if(visible1 == false || visible2 == false)
	{
		return ;
	}
	
	//alert(visible1 + ' '+ visible2 + ' ' + x1 + ' ' + y1 + ' ' + w1 + ' ' + h1 + ' ' + x2 + ' ' + y2 + ' ' + w2 + ' ' + h2) ;
	
	if(boundingBoxCollision(x1, y1, w1, h1, x2, y2, w2, h2) == true)
	{
		return true ;
	}
	else if(boundingBoxCollision(x2, y2, w2, h2, x1, y1, w1, h1) == true)
	{
		return true ;
	}
	
	return false ;
}

function checkLayerCollision(layer1, layer2)
{			
	var v1 = data[layer1]['visible']	;
	var x1 = data[layer1]['x']		;
	var y1 = data[layer1]['y']		;
	var w1 = data[layer1]['width']	;
	var h1 = data[layer1]['height']	;
			
	var v2 = data[layer2]['visible']	;
	var x2 = data[layer2]['x']		;
	var y2 = data[layer2]['y']		;
	var w2 = data[layer2]['width']	;
	var h2 = data[layer2]['height']	;
	
	return check2DCollision(v1, v2, x1, y1, w1, h1, x2, y2, w2, h2) ;
}

// layer can be of type ui.layer.image.animation.array or some other type
// layers can not contain any layer which is of type ui.layer.image.animation.array
function checkLayerCollisions(layer,layers)
{
	if(data[layer]['type'] == 'ui.layer.image.animation.array')
	{
		var size = data[layer]['size'] ;
		
		for(var i = 0; i < size; i++)
		{
			var v1,x1,y1,w1,h1 ;
			
			v1 = data[layer]['visible'][i] ;
			x1 = data[layer]['x'][i] ;
			y1 = data[layer]['y'][i] ;
			w1 = data[layer]['width'][i] ;
			h1 = data[layer]['height'][i] ;
			
			for(var j = 0; j < layers.length;j++)
			{
				var v2,x2,y2,w2,h2 ;
				
				v2 = data[layers[j]]['visible'] ;
				x2 = data[layers[j]]['x'] ;
				y2 = data[layers[j]]['y'] ;
				w2 = data[layers[j]]['width'] ;
				h2 = data[layers[j]]['height'] ;
				
				if(check2DCollision(v1, v2, x1, y1, w1, h1, x2, y2, w2, h2) == true)
				{
					return {'layer1':layer, 'layer1Index' : i ,'layer2':layers[j]} ;
				}
			}
		}
	}
	else
	{
		var v1,x1,y1,w1,h1 ;
		
		v1 = data[layer]['visible'] ;
		x1 = data[layer]['x'] ;
		y1 = data[layer]['y'] ;
		w1 = data[layer]['width'] ;
		h1 = data[layer]['height'] ;
		
		for(var j = 0; j < layers.length;j++)
		{
			var v2,x2,y2,w2,h2 ;
			
			v2 = data[layers[j]]['visible'] ;
			x2 = data[layers[j]]['x'] ;
			y2 = data[layers[j]]['y'] ;
			w2 = data[layers[j]]['width'] ;
			h2 = data[layers[j]]['height'] ;
			
			if(check2DCollision(v1, v2, x1, y1, w1, h1, x2, y2, w2, h2) == true)
			{
				return {'layer1':layer, 'layer2':layers[j]} ;
			}
		}
	}
	
	return undefined ;
}

// Resource Loading
function resourceLoaded()
{
	resLoaded++ ;
	
	if(resLoaded == totalRes)
	{
		engine['resourcesLoaded'] = true ;
	}
}

function getRandomInteger(from, to)
{
	return Math.floor((Math.random() * to) + from);
}

// HTML CONTROLS

/*
function createDiv(id, x, y, text, style)
{
	var div = document.createElement("div") ;
	div.setAttribute("id", id) ;
	div.setAttribute("style", "position: absolute; left:" + x + "px;top" + y + "px" + ") ;
	div.setAttribute("class", style) ;
	div.innerHTML = text ;
	
	document.body.appendChild(div) ;
}

function removeDiv(id)
{
	document.body.removeChild(document.getElementById(id)) ;
}
// =============================================================================== //

// =============================================================================== //
// Button
function createInputButton(id, x, y, text, style)
{
	var inputButton = document.createElementById("input") ;
	inputButton.setAttribute("id", "") ;
	inputButton.setAttribute("style", "position: absolute; left:" + x + "px;top" + y + "px" + ") ;
}

function deleteInputButton(id)
{
	
}
// =============================================================================== //

// =============================================================================== //
// TextBox
function createHTMLTextBox(id, x, y, text, style)
{
	var textbox = document.createElementById("input") ;
	textbox.setAttribute("type", "text") ;
	textbox.setAttribute("id", id) ;
	textbox.setAttribute("value", text) ;
	textbox.setAttribute("class", style) ;
	
	document.body.appendChild(textbox) ;
}

function deleteHTMLTextBox(id)
{
	document.body.removeChild(document.getElementById(id)) ;
}
// =============================================================================== //

// =============================================================================== //
// CheckBox
function createCheckBox(id, x, y, text, state, style)
{
	var checkbox = document.createElement("input") ;
	checkbox.setAttribute("type", "checkbox") ;
	checkbox.setAttribute("id", id) ;
	
	if(state == "checked")
	{
		checkbox.setAttribute("checked", "checked") ;
	}
	
	var label = document.createElement("label") ;
	label.setAttribute("for", id) ;
	label.innerHTML = text ;
	
	document.body.appendChild(checkbox) ;
	document.body.appendChild(label) ;
}

function deleteCheckBox(id)
{
	document.body.removeChild(document.getElementById(id)) ;
}
// =============================================================================== //

// =============================================================================== //
// Radio
function createRadioButton(id, x, y, state, style)
{
	
}

function deleteRadioButton()
{
	
}
*/
// =============================================================================== //

/////////////////////////
/////	CLOUD CODE	/////
/////////////////////////

// CLOUD CODE

function cloudInbox()
{
	
}

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

 