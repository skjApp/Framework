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
		
		'maxFrameRate'	: 20,
		
		
		'pages'			: ['page1'],
		'currentPage'	: 'page1'
		
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
		'type'	: 'ui.layer.image.animation',
		'src'	: 'file:///C:/Users/Saurabh/Documents/GitHub/Framework-HTML5/images/BalloonBoy.png',
		
		'x'		: 0,
		'y'		: 0,
		'width'	: 41,
		'height': 78,
		
		'state'	: 'move',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 41, 'height' : 78},
					{'xOffset' : 41, 'yOffset' : 0, 'width' : 32, 'height' : 78},
					{'xOffset' : 73, 'yOffset' : 0, 'width' : 32, 'height' : 78},
					
					{'xOffset' :105, 'yOffset' : 0, 'width' : 33, 'height' : 78},
					{'xOffset' :138, 'yOffset' : 0, 'width' : 31, 'height' : 78},
					{'xOffset' :169, 'yOffset' : 0, 'width' : 33, 'height' : 78},
					
					{'xOffset' :202, 'yOffset' : 0, 'width' : 41, 'height' : 78},
					{'xOffset' :243, 'yOffset' : 0, 'width' : 41, 'height' : 78},
					{'xOffset' :284, 'yOffset' : 0, 'width' : 41, 'height' : 78},
					
					{'xOffset' :325, 'yOffset' : 0, 'width' : 41, 'height' : 78},
					{'xOffset' :366, 'yOffset' : 0, 'width' : 41, 'height' : 78},
					{'xOffset' :407, 'yOffset' : 0, 'width' : 41, 'height' : 78}
				],
				
		'animation' :
		{
			'move': [
						{'frame': 0,'dx': 1,'dy': 0},
						{'frame': 0,'dx': 1,'dy': 0},
						{'frame': 1,'dx': 1,'dy': 0},
						{'frame': 1,'dx': 1,'dy': 0},
						{'frame': 2,'dx': 1,'dy': 0},
						{'frame': 2,'dx': 1,'dy': 0},
						{'frame': 1,'dx': 1,'dy': 0},
						{'frame': 1,'dx': 1,'dy': 0}
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	}
}
