
// BlackBerry 10
var create_device_blackberry10 = function createDeviceBlackBerry10(layer)
{
	
} ;

var get_device_blackberry10 = function getDeviceBlackBerry10(layer)
{
	
} ;

var update_device_blackberry10 = function updateDeviceBlackBerry10(layer)
{
	var scrolling = data[layer]['scrolling'] ;
	
	if(scrolling != true)
	{
		document.ontouchmove = function(event)
		{
			event.preventDefault() ;
		}
	}
} ;

var draw_device_blackberry10 = function drawDeviceBlackBerry10(layer)
{
	
} ;

var delete_device_blackberry10 = function deleteDeviceBlackBerry10(layer)
{
	
} ;

data['engine']['device.blackberry10'] = 
{
	'createLayer'	: create_device_blackberry10 	,
	'getLayer'		: get_device_blackberry10		,
	'updateLayer'	: update_device_blackberry10	,
	'deleteLayer'	: delete_device_blackberry10
} ;
