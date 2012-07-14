var data = 
{
	'app1' :
	{
		'type'		: 'app',
		
		// App Dimensions
		'x'			: 0,
		'y'			: 0,
		'width'		: 500,
		'height'	: 500,
		
		'maxFrameRate'	: 2,
		
		
		'pages'		: ['page1']
		
		//'images'	: []
		//'audios'	: []
		//'videos'	: [] 
	},
	
	'page1' :
	{
		'type'		: 'ui.page',
		
		'layers'	: ['layer1']
	},
	
	'layer1' :
	{
		'type'	: 'ui.layer.image',
		
		'src'	: 'https://github.com/skjApp/OpenGraphics/raw/master/BalloonBoy1(416x78).png'
		
		//'image'	: 
	}
}
