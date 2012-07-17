var createuilayerimage = function createUILayerImage(layer)
{
	src = data[layer]['src'] ;
		
	var img = new Image() ;
	img.src = src ;
		
	data[layer]['image'] = img ;
	data[app]['images'].push(img) ;
} ;

var getuilayerimage = function getUILayerImage()
{
	alert('getUILayerImageFrame') ;
}

var updateuilayerimage = function updateUILayerImage()
{
	alert('updateUILayerImageFrame') ;
}

var drawuilayerimage = function drawUILayerImage(layer)
{
	image = data[layer]['image'] ;
		
	if(image != undefined)
	{
		ctx.drawImage(image,x,y) ;
	}
}

var deleteuilayerimage = function deleteUILayerImage()
{
	alert('deleteUILayerImageFrame') ;
}


data['engine']['ui.layer.image'] = 
{
	'createLayer'	: createuilayerimage 	,
	'getLayer'		: getuilayerimage		,
	'updateLayer'	: updateuilayerimage	,
	'drawLayer'		: drawuilayerimage		,
	'deleteLayer'	: deleteuilayerimage
} ;