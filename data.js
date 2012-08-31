	var data = 
{
	'engine' :
	{
		'app'		: 'app1',
		
		'pluginfiles'	: ['skjapp-framework/js/ui/layers/uiLayerImage.js', 'skjapp-framework/js/ui/layers/uiLayerShape.js', 'skjapp-framework/js/ui/layers/uiLayerText.js']
	},
	
	'app' :
	{
		'type'		: 'app',
		
		'name'		: 'Fun2Hit',
		
		// App Dimensions
		'x'			: 0,
		'y'			: 0,
		'width'		: 240,
		'height'	: 320,
		
		'maxFrameRate'	: 60,
		
		'pages'			: ['loading_page','EnableSound','Splash','Menu','Help1','Help2','AboutUs','Exit','Stage1','Stage2','Stage3','Stage4','Stage5'],
		'currentPage'	: 'Stage1',
		
		//'images'	: []
		//'audios'	: []
		//'videos'	: [] 
	},
	
	'loading_page' :
	{
		'type'		: 'ui.page',
		
		'layers'	: ['BlackBackground','Logo','LoadingBarOutline','LoadingBarFilling'] 
	},

	'EnableSound'	:
	{
		'type'		: 'ui.page',
		
		'layers'	: ['BackgroundMenu','EnableSoundText','Yes','No']
	},

	'Splash'	:
	{
		'type'		: 'ui.page',
		'layers'	: ['SplashScreen']
	},

	'Menu'	:
	{
		'type'		: 'ui.page',
		'layers'	: ['BackgroundMenu','MenuWhiteText','SelectionMenuOption','MenuOptionNewGame','MenuOptionAboutUs','MenuOptionHelpText','MenuOptionExitText'],
		
		'defaultState'	:'NewGame',
		'state'			:'NewGame'
	},

	'Help1'		:
	{
		'type'		: 'ui.page',
		'layers'	: ['BackgroundMenu','Back','Next','HelpWhiteText','Help1Text']
	},

	'Help2'		:
	{
		'type'		: 'ui.page',
		'layers'	: ['BackgroundMenu','Back','MenuBlueText','HelpWhiteText','Help2Text']
	},

	'AboutUs'		:
	{
		'type'		: 'ui.page',
		'layers'	: ['BackgroundMenu','Back','AboutUsWhiteText','AboutUsText']
	},

	'Exit'		:
	{
		'type'		: 'ui.page',
		'layers'	: ['BackgroundMenu','Yes','No','ExitWhiteText','ExitTextQuestion']
	},
	
	'Stage1'	:
	{
		'type'		: 'ui.page',
		'layers'	: ['Home','BackgroundSky','Road','Scoreboard','ScoreText','ScoreTextValue','BalloonText','BalloonTextValue','LifeText','LifeTextValue','Player','Railing1','Railing2','Shutter1','Shutter2','Girl1-Left','Businessman-Right','Skateboy-Right','Girl2-Right','Girl1-Right','Girl2-Left','WindowBoy','Bird-Right','Bird-Left','Businessman-Left','Businessman-Right','Skateboy-Left','Skateboy-Right','Ambulance-Left','Balloon0','Balloon1','Balloon2','Balloon3','Balloon4','Balloon5','Balloon6','Balloon7','Balloon8','Balloon9','Water0','Water1','Water2','Water3','Water4','Water5','Water6','Water7','Water8','Water9','Points-100','Points20','Points40','Points60','Points80','Points100','Points120','Points140','Points160','Points180','Points200','ChanceOver','ChanceOverText','ChanceOverScoreText','ChanceOverScoreTextValue','ChanceOverLifeText','ChanceOverLifeTextValue','ChanceOverPlayer']//,'OptionText','ResumeOptionText','MenuOptionText'
	},
	
	'Stage2'	:
	{
		'type'		: 'ui.page',		
		'layers'	: ['Home','BackgroundSky','Road','Scoreboard','Player','Railing1','Railing2','Shutter1','Shutter2','SadhuBaba-Left']//,'Girl1-Left','Businessman-Right','Skateboy-Right','Girl2-Right','Girl1-Right','Girl2-Left','WindowBoy','Bird-Right','Bird-Left','Businessman-Left','Businessman-Right','Skateboy-Left','Skateboy-Right','Ambulance-Left','Balloon0','Balloon1','Balloon2','Balloon3','Balloon4','Balloon5','Balloon6','Balloon7','Balloon8','Balloon9','Water0','Water1','Water2','Water3','Water4','Water5','Water6','Water7','Water8','Water9','Points-100','Points20','Points40','Points60','Points80','Points100','Points120','Points140','Points160','Points180','Points200'],
		
		//'layers'	: [,'Girl1-Right','Businessman-Right','Bird-Right']
						//'Player','WindowBoy','Water','Bird-Left','Gubbarre','Skateboy-Left']//,'PublicCar-Right','PublicCar-Left','Waiter-Left','Waiter-Right','SadhuSmoke','SadhuBaba-Right']
						//,'DhotiUncle-Left','DhotiUncle-Right','Girl1-Left','Girl2-Right','Girl2-Left','Bird-Left','BalloonBoy-Left','BalloonBoy-Right','Businessman-Left','Ambulance-Right','Ambulance-Left','Businessman-Right'],		
	},
	
	'Stage3'	:
	{
		'type'		: 'ui.page',		
		'layers'	: ['Home','BackgroundSky','Road','Scoreboard','Railing1','Railing2','Shutter1','Shutter2','Girl1-Left']//'Player','WindowBoy','Water','Bird-Left','Gubbarre','Skateboy-Left','Skateboy-Right']//,'PublicCar-Right','PublicCar-Left','Waiter-Left','Waiter-Right','SadhuSmoke','SadhuBaba-Left','SadhuBaba-Right']//,'DhotiUncle-Left','DhotiUncle-Right','Girl1-Right','Girl1-Left','Girl2-Right','Girl2-Left','Bird-Left','Bird-Right','BalloonBoy-Left','BalloonBoy-Right','Businessman-Left','Ambulance-Right','Ambulance-Left','Businessman-Right'],		
	},
	
	'Stage4'	:
	{
		'type'		: 'ui.page',		
		'layers'	: ['Home','BackgroundSky','Road','Scoreboard','Railing1','Railing2','Shutter1','Shutter2','Girl1-Left']//'Player','WindowBoy','Water','Bird-Left','Gubbarre','Skateboy-Left','Skateboy-Right']//,'PublicCar-Right','PublicCar-Left','Waiter-Left','Waiter-Right','SadhuSmoke','SadhuBaba-Left','SadhuBaba-Right']//,'DhotiUncle-Left','DhotiUncle-Right','Girl1-Right','Girl1-Left','Girl2-Right','Girl2-Left','Bird-Left','Bird-Right','BalloonBoy-Left','BalloonBoy-Right','Businessman-Left','Ambulance-Right','Ambulance-Left','Businessman-Right'],		
	},
	
	'Stage5'	:
	{
		'type'		: 'ui.page',		
		'layers'	: ['Home','BackgroundSky','Road','Scoreboard','Railing1','Railing2','Shutter1','Shutter2']//'Player','WindowBoy','Water','Bird-Left','Gubbarre','Skateboy-Left','Skateboy-Right']//,'PublicCar-Right','PublicCar-Left','Waiter-Left','Waiter-Right','SadhuSmoke','SadhuBaba-Left','SadhuBaba-Right']//,'DhotiUncle-Left','DhotiUncle-Right','Girl1-Right','Girl1-Left','Girl2-Right','Girl2-Left','Bird-Left','Bird-Right','BalloonBoy-Left','BalloonBoy-Right','Businessman-Left','Ambulance-Right','Ambulance-Left','Businessman-Right'],		
	},
	
	

/////////////////////
////// Layers ///////
/////////////////////

	'ScoreText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': true,
		
		'x'		: 6,
		'y'		: 19,
		'width'	: 6,
		'height': 6,
		
		'text'	: 'Score',
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},

	'ScoreTextValue'	:
	{
		'type'	: 'ui.layer.text',
		'visible': true,
		
		'x'		: 50,
		'y'		: 19,
		'width'	: 6,
		'height': 6,
		
		'text'	: 0,
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},

	'LifeText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': true,
		
		'x'		: 6,
		'y'		: 30,
		'width'	: 6,
		'height': 6,
		
		'text'	: 'Life',
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},

	'LifeTextValue'	:
	{
		'type'	: 'ui.layer.text',
		'visible': true,
		
		'x'		: 50,
		'y'		: 30,
		'width'	: 6,
		'height': 6,
		
		'text'	: '0',
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},

	'BalloonText'	:
	{
		'type'	: 'ui.layer.image',
		'visible': true,
		
		'src'	: 'images/Balloons.png',
		
		'x'		: 6,
		'y'		: 34,
		
		'currentFrame' : 0,
		
		'frames':
		[
			{'xOffset' :  0, 'yOffset' : 0, 'width' : 8, 'height' : 10}
		],
	},

	'BalloonTextValue'	:
	{
		'type'	: 'ui.layer.text',
		'visible': true,
		
		'x'		: 50,
		'y'		: 42,
		'width'	: 6,
		'height': 6,
		
		'text'	: '0',
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},

	'Points-100'		:
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Points.png',
		'visible': false,
		
		'x'		: 50,
		'y'		: 114,
		
		'state'	: undefined,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 24, 'height' : 29},
					{'xOffset' : 24, 'yOffset' : 0, 'width' : 24, 'height' : 29},
					{'xOffset' : 48, 'yOffset' : 0, 'width' : 24, 'height' : 29}
		 		 ],
		 		 
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': -1,'time':50},
				{'frame': 1,'dx': 0,'dy': -1,'time':50},
				{'frame': 2,'dx': 0,'dy': -1,'time':50}
			]
		}
	},

	'ChanceOverText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 90.5,
		'y'		: 132.5,
		'width'	: 6,
		'height': 6,
		
		'text'	: 'CHANCE OVER',
		'rgb'	: [255,255,255],
		'font'	: '10pt Verdana'
	},

	'OptionText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': true,
		
		'x'		: 105,
		'y'		: 132,
		'width'	: 6,
		'height': 6,
		
		'text'	: 'OPTION',
		'rgb'	: [255,255,255],
		'font'	: '10pt Verdana'
	},

	'ResumeOptionText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': true,
		
		'x'		: 105,
		'y'		: 162,
		'width'	: 6,
		'height': 6,
		
		'text'	: 'RESUME',
		'rgb'	: [255,255,255],
		'font'	: '10pt Verdana'
	},

	'MenuOptionText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': true,
		
		'x'		: 105,
		'y'		: 192,
		'width'	: 6,
		'height': 6,
		
		'text'	: 'MENU',
		'rgb'	: [255,255,255],
		'font'	: '10pt Verdana'
	},


	'ChanceOverScoreText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 75,
		'y'		: 162,
		
		'text'	: 'Score :',
		'rgb'	: [255,255,255],
		'font'	: '200 12px Verdana'
	},

	'ChanceOverScoreTextValue'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 130,
		'y'		: 162,
		'width'	: 6,
		'height': 6,
		
		'text'	: '20',
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},

	'ChanceOverLifeText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 75,
		'y'		: 185,
		'width'	: 6,
		'height': 6,
		
		'text'	: 'Life :',
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},

	'ChanceOverLifeTextValue'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 130,
		'y'		: 185,
		'width'	: 6,
		'height': 6,
		
		'text'	: '0',
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},

	'ChanceOverPlayer' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Player.png',
		'visible': false,

		'x'		: '100',
		'y'		: '150',
		
		'state'	: 'stand',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :189, 'yOffset' : 0, 'width' : 48, 'height' : 61},
					{'xOffset' :238, 'yOffset' : 0, 'width' : 49, 'height' : 61}
				],
				
		'animation' :
		{
			'cry': [
						{'frame': 0,'dx': 0,'dy': 0,'time':200},
						{'frame': 1,'dx': 0,'dy': 0,'time':200}
					]
		},
	},

	'Points20'		:
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Points.png',
		'visible': false,
		
		'x'		: 150,
		'y'		: 114,
		
		'state'	: undefined,
		
		'frames':[
					{'xOffset' :  72, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' :  87, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' : 102, 'yOffset' : 0, 'width' : 15, 'height' : 29}
		 		 ],
		 		 
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': -1,'time':50},
				{'frame': 1,'dx': 0,'dy': -1,'time':50},
				{'frame': 2,'dx': 0,'dy': -1,'time':50}
			]
		}
	},


	'Points40'		:
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Points.png',
		'visible': false,
		
		'x'		: 200,
		'y'		: 114,
		
		'state'	: undefined,
		
		'frames':[
					{'xOffset' : 117, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' : 132, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' : 147, 'yOffset' : 0, 'width' : 15, 'height' : 29}
		 		 ],
		 		 
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': -1,'time':50},
				{'frame': 1,'dx': 0,'dy': -1,'time':50},
				{'frame': 2,'dx': 0,'dy': -1,'time':50}
			]
		}
	},

	'Points60'		:
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Points.png',
		'visible': false,
		
		'x'		: 100,
		'y'		: 150,
		
		'state'	: undefined,
		
		'frames':[
					{'xOffset' : 162, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' : 177, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' : 192, 'yOffset' : 0, 'width' : 15, 'height' : 29}
		 		 ],
		 		 
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': -1,'time':50},
				{'frame': 1,'dx': 0,'dy': -1,'time':50},
				{'frame': 2,'dx': 0,'dy': -1,'time':50}
			]
		}
	},

	'Points80'		:
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Points.png',
		'visible': false,
		
		'x'		: 100,
		'y'		: 50,
		
		'state'	: undefined,
		
		'frames':[
					{'xOffset' : 207, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' : 222, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' : 237, 'yOffset' : 0, 'width' : 15, 'height' : 29}
		 		 ],
		 		 
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': -1,'time':50},
				{'frame': 1,'dx': 0,'dy': -1,'time':50},
				{'frame': 2,'dx': 0,'dy': -1,'time':50}
			]
		}
	},

	'Points100'		:
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Points.png',
		'visible': false,
		
		'x'		: 100,
		'y'		: 200,
		
		'state'	: undefined,
		
		'frames':[
					{'xOffset' : 252, 'yOffset' : 0, 'width' : 20, 'height' : 29},
					{'xOffset' : 272, 'yOffset' : 0, 'width' : 20, 'height' : 29},
					{'xOffset' : 292, 'yOffset' : 0, 'width' : 20, 'height' : 29}
		 		 ],
		 		 
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': -1,'time':50},
				{'frame': 1,'dx': 0,'dy': -1,'time':50},
				{'frame': 2,'dx': 0,'dy': -1,'time':50}
			]
		}
	},

	'Points120'		:
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Points.png',
		'visible': false,
		
		'x'		: 100,
		'y'		: 280,
		
		'state'	: undefined,
		
		'frames':[
					{'xOffset' : 312, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 331, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 350, 'yOffset' : 0, 'width' : 19, 'height' : 29}
		 		 ],
		 		 
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': -1,'time':50},
				{'frame': 1,'dx': 0,'dy': -1,'time':50},
				{'frame': 2,'dx': 0,'dy': -1,'time':50}
			]
		}
	},

	'Points140'		:
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Points.png',
		'visible': false,
		
		'x'		: 60,
		'y'		: 230,
		
		'state'	: undefined,
		
		'frames':[
					{'xOffset' : 369, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 388, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 407, 'yOffset' : 0, 'width' : 19, 'height' : 29}
		 		 ],
		 		 
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': -1,'time':50},
				{'frame': 1,'dx': 0,'dy': -1,'time':50},
				{'frame': 2,'dx': 0,'dy': -1,'time':50}
			]
		}
	},

	'Points160'		:
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Points.png',
		'visible': false,
		
		'x'		: 30,
		'y'		: 230,
		
		'state'	: undefined,
		
		'frames':[
					{'xOffset' : 426, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 502, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 521, 'yOffset' : 0, 'width' : 19, 'height' : 29}
		 		 ],
		 		 
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': -1,'time':50},
				{'frame': 1,'dx': 0,'dy': -1,'time':50},
				{'frame': 2,'dx': 0,'dy': -1,'time':50}
			]
		}
	},

	'Points180'		:
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Points.png',
		'visible': false,
		
		'x'		: 90,
		'y'		: 230,
		
		'state'	: undefined,
		
		'frames':[
					{'xOffset' : 483, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 502, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 521, 'yOffset' : 0, 'width' : 19, 'height' : 29}
		 		 ],
		 		 
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': -1,'time':50},
				{'frame': 1,'dx': 0,'dy': -1,'time':50},
				{'frame': 2,'dx': 0,'dy': -1,'time':50}
			]
		}
	},

	'Points200'		:
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Points.png',
		'visible': false,
		
		'x'		: 140,
		'y'		: 230,
		
		'state'	: undefined,
		
		'frames':[
					{'xOffset' : 540, 'yOffset' : 0, 'width' : 23, 'height' : 29},
					{'xOffset' : 563, 'yOffset' : 0, 'width' : 23, 'height' : 29},
					{'xOffset' : 586, 'yOffset' : 0, 'width' : 23, 'height' : 29}
		 		 ],
		 		 
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': -1,'time':50},
				{'frame': 1,'dx': 0,'dy': -1,'time':50},
				{'frame': 2,'dx': 0,'dy': -1,'time':50}
			]
		}
	},

	'SelectionMenuOption'		:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/Design.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 114,
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 240, 'yOffset' : 125, 'width' : 240, 'height' : 40},
		 		 ]
	},
	
	'EnableSoundText'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/text.png',
		'visible': true,
		
		'x'		: 11,
		'y'		: 151,
		
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 0, 'yOffset' : 0, 'width' : 218, 'height' : 18},
		 		 ]
	},
	
	'MenuOptionNewGame'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/Text.png',
		'visible': true,
		
		'x'		: 45,
		'y'		: 125,
		
		
		'currentFrame' : 1,
		
		'frames':[
					{'xOffset' : 369, 'yOffset' : 0, 'width' : 151, 'height' : 18},
					{'xOffset' : 218, 'yOffset' : 0, 'width' : 151, 'height' : 18}
		 		 ]
	},

	
	'MenuOptionAboutUs'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/Text.png',
		'visible': true,
		
		'x'		: 54,
		'y'		: 165,
		
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 652, 'yOffset' : 0, 'width' : 132, 'height' : 18},
					{'xOffset' : 520, 'yOffset' : 0, 'width' : 132, 'height' : 18},
		 		 ]
	},

	'AboutUsWhiteText'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/Text.png',
		'visible': true,
		
		'x'		: 42,
		'y'		: 65,
		
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 652, 'yOffset' : 0, 'width' : 132, 'height' : 18},
		 		 ]
	},

	'MenuOptionHelpText'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/text.png',
		'visible': true,
		
		'x'		: 90,
		'y'		: 205,
		
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 845, 'yOffset' : 0, 'width' : 61, 'height' : 18},
					{'xOffset' : 784, 'yOffset' : 0, 'width' : 61, 'height' : 18}
		 		 ]
	},

	'MenuOptionExitText'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/text.png',
		'visible': true,
		
		'x'		: 91,
		'y'		: 245,
		
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 964, 'yOffset' : 0, 'width' : 57, 'height' : 18},
					{'xOffset' : 906, 'yOffset' : 0, 'width' : 58, 'height' : 18}		
		 		 ]
	},


	'HelpWhiteText'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/text.png',
		'visible': true,
		
		'x'		: 90,
		'y'		: 65,
		
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 845, 'yOffset' : 0, 'width' : 61, 'height' : 18},
		 		 ]
	},

	'ExitWhiteText'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/text.png',
		'visible': true,
		
		'x'		: 91,
		'y'		: 65,
		
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 964, 'yOffset' : 0, 'width' : 57, 'height' : 18},
	
		 		 ]
	},


	'MenuWhiteText'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/text.png',
		'visible': true,
		
		'x'		: 82,
		'y'		: 62,
		
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :1021, 'yOffset' : 0, 'width' : 76, 'height' : 18},
		 		 ]
	},	
	
	'AboutUsText'	:
	{
		'type'	: 'ui.layer.text.html',
		'visible': false,
		
		'x'		: 20,
		'y'		: 105,
		'width'	: 200,
		'height': 200,
		
		'text'	: 'Application Name: Fun2Hit</br></br>Developed by SKJ TECHNOLOGIES PRIVATE LTD</br><a href = "http://www.skjapp.com">www.skjapp.com</a></br></br>TEAM : Saurabh Jain, Kamal Sharma, Gyanender Sharma, Ankit Jain',
		'color'	: 'white',
		'font'	: '10pt Verdana'
	},

	'Help1Text'	:
	{
		'type'	: 'ui.layer.text.html',
		'visible': false,
		
		'x'		: 20,
		'y'		: 105,
		'width' : 200,
		'height': 200,
		'text'	: 'CONTROLS :</br></br> KEY LEFT / 4 : walk LEFT  </br>KEY RIGHT / 6 : walk RIGHT  </br>KEY FIRE / 5: THROW BALLOONS   </br></br></br>DO NOT HIT BALLONS ON THE FOLLOWING : </br>AMBULANCE (-100 POINTS)  </br>SADHU BABA (CHANCE OVER)  </br>TOUCHING BIRDS (CHANCE OVER)  </br>',
						
		'color' : 'white',
		'font'	: '7pt Verdana'
	},

	'Help2Text'	:
	{
		'type'	: 'ui.layer.text.html',
		'visible': false,
		
		'x'		: 20,
		'y'		: 105,
		'width' : 200,
		'height': 200,
				
		'text'	: 'U HAVE TO SCORE HIT % IN THE FOLLOWING LEVELS TO WIN :  </br></br>LEVEL 1 - 40 %  </br>LEVEL 2 - 50%  </br>LEVEL 3 - 60%  </br>LEVEL 4 - 70%  </br>LEVEL 5 - 80%',

		'color' : 'white',
		'font'	: '8pt Verdana'
	},

	'BalloonBoy-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/BalloonBoy.png',

		'visible': true,

		'x'		: 0,
		'y'		: 230,
		'width'	: 41,
		'height': 78,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 41, 'height' : 78},
					{'xOffset' : 41, 'yOffset' : 0, 'width' : 32, 'height' : 78},
					{'xOffset' : 73, 'yOffset' : 0, 'width' : 32, 'height' : 78},
					
					{'xOffset' :105, 'yOffset' : 0, 'width' : 33, 'height' : 78},
					{'xOffset' :138, 'yOffset' : 0, 'width' : 31, 'height' : 78},
					{'xOffset' :169, 'yOffset' : 0, 'width' : 33, 'height' : 78},
										
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						{'frame': 4,'dx': 2,'dy': 0,'time':50},
						{'frame': 4,'dx': 2,'dy': 0,'time':50},
						{'frame': 4,'dx': 2,'dy': 0,'time':50},
						{'frame': 5,'dx': 2,'dy': 0,'time':50},
						{'frame': 5,'dx': 2,'dy': 0,'time':50},
						{'frame': 5,'dx': 2,'dy': 0,'time':50}
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},
	
	'BalloonBoy-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/BalloonBoy.png',
		
		'visible': true,

		'x'		: 240,
		'y'		: 230,

		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :407, 'yOffset' : 0, 'width' : 41, 'height' : 78},				
					{'xOffset' :366, 'yOffset' : 0, 'width' : 41, 'height' : 78},
					{'xOffset' :325, 'yOffset' : 0, 'width' : 41, 'height' : 78},
					
					{'xOffset' :284, 'yOffset' : 0, 'width' : 41, 'height' : 78},
					{'xOffset' :243, 'yOffset' : 0, 'width' : 41, 'height' : 78},
					{'xOffset' :202, 'yOffset' : 0, 'width' : 41, 'height' : 78}
					
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						{'frame': 4,'dx': -2,'dy': 0,'time':50},
						{'frame': 4,'dx': -2,'dy': 0,'time':50},
						{'frame': 5,'dx': -2,'dy': 0,'time':50},
						{'frame': 5,'dx': -2,'dy': 0,'time':50},

					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},
	
	'OutlineRectangle' :
	{
		'type'	: 'ui.layer.shape.rectangle',

		'visible': true,
		
		'x'		: 0,
		'y'		: 0,
		'width'	: 240,
		'height': 320
	},
	
	'Home' :
	{
		'type'	: 'ui.layer.image',
		
		'visible': true,
		
		'src'	: 'images/Home.png',
				
		'x'		: 0,
		'y'		: 59
	},
	
	'BackgroundSky' :
	{
		'type'	: 'ui.layer.image',
		'src' 	: 'images/BackgroundSky.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 0,
		'width' : 240,
		'height': 59
	},
	
	'Road'	:
	{
		'type'	: 'ui.layer.image',
		'src'	: 'images/Road.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 271,
		'width' : 240,
		'height': 49
	},
				
	'Railing1'	:
	{
		'type'	: 'ui.layer.image',
		'src'	: 'images/Railing.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 48,
		'width' : 240,
		'height': 11
	},

	'Railing2'	:
	{
		'type'	: 'ui.layer.image',
		'src'	: 'images/Railing.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 181,
		'width' : 240,
		'height': 11
	},

	'Shutter1'	:
	{
		'type'	: 'ui.layer.image',
		'src'	: 'images/Shutter1.png',
		'visible': true,
		
		'x'		: 175,
		'y'		: 222,
		'width' : 77,
		'height': 72
	},
	
	'Shutter2'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/Shutter2.png',
		'visible': true,
		
		'x'		: 97,
		'y'		: 205,
		'width' : 103,
		'height': 16,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 52, 'height' : 16},
					{'xOffset' : 52, 'yOffset' : 0, 'width' : 51, 'height' : 16},
				]
	},
	
	'Scoreboard'	:
	{
		'type'	: 'ui.layer.image',
		'src'	: 'images/Scoreboard.png',
		'visible': true,
		
		'x'		: 2,
		'y'		: 6,
		'width' : 80,
		'height': 54
	},

	'Player' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Player.png',
		'visible': true,
		
		'state'	: 'stand',
		
		'currentFrame' : 0,
		
		'frames':[
					// Left Frames
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 35, 'height' : 61},
					{'xOffset' : 35, 'yOffset' : 0, 'width' : 37, 'height' : 61},
					
					// Stand Frame
					{'xOffset' : 72, 'yOffset' : 0, 'width' : 23, 'height' : 61},
					
					// Throw Frame
					{'xOffset' : 95, 'yOffset' : 0, 'width' : 23, 'height' : 61},
					
					// Right Frames
					{'xOffset' :118, 'yOffset' : 0, 'width' : 35, 'height' : 61},
					{'xOffset' :153, 'yOffset' : 0, 'width' : 36, 'height' : 61},
					
					// Cry Frames
					{'xOffset' :189, 'yOffset' : 0, 'width' : 48, 'height' : 61},
					{'xOffset' :238, 'yOffset' : 0, 'width' : 49, 'height' : 61}
				],
				
		'animation' :
		{
			'walk-left': [
						{'frame': 0,'dx': -10,'dy': 0,'time':50},
						{'frame': 1,'dx': -10,'dy': 0,'time':50}
					],
					
			'stand': [
						{'frame': 2,'dx': 0,'dy': 0,'time':50}
					],
					
			'throw': [
						{'frame': 3,'dx': 0,'dy': 0,'time':50}
					],
					
			'walk-right': [
						{'frame': 4,'dx': 10,'dy': 0,'time':50},
						{'frame': 5,'dx': 10,'dy': 0,'time':50}
					],
			
			'cry': [
						{'frame': 6,'dx': 0,'dy': 0,'time':200},
						{'frame': 7,'dx': 0,'dy': 0,'time':200}
					]
		},
		
		'Balloons' : ['Balloon0','Balloon1','Balloon2','Balloon3','Balloon4','Balloon5','Balloon6','Balloon7','Balloon8','Balloon9'],
		'cBalloon' : 0
	},
	
	'Ambulance-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Ambulance.png',
		'visible': true,
		
//		'x'		: 240,
//		'y'		: 230,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 161, 'height' : 88},
					{'xOffset' : 161, 'yOffset' : 0, 'width' : 161, 'height' : 88},
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 0,'dx': -1,'dy': 0,'time':50},
	
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -1,'dy': 0,'time':50},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Ambulance-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Ambulance.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 230,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 483, 'yOffset' : 0, 'width' : 161, 'height' : 88},
					{'xOffset' : 322, 'yOffset' : 0, 'width' : 161, 'height' : 88},
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 2,'dy': 0,'time':50},

						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Bird-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Bird.png',
		'visible': true,
		
	//	'x'		: 0,
	//	'y'		: 100,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 64, 'height' : 48},
					{'xOffset' :  64, 'yOffset' : 0, 'width' : 66, 'height' : 48},
				//	{'xOffset' : 130, 'yOffset' : 0, 'width' : 23, 'height' : 48},
				//	{'xOffset' : 153, 'yOffset' : 0, 'width' : 23, 'height' : 48}
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 1,'dy': 0,'time':50},

						{'frame': 1,'dx': 0,'dy': -3,'time':50},
						{'frame': 1,'dx': 0,'dy': -3,'time':50},
						
/*						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
*/						
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Bird-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Bird.png',
		'visible': true,
		
//		'x'		: 240,
//		'y'		: 100,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 287, 'yOffset' : 0, 'width' : 66, 'height' : 48},
					{'xOffset' : 222, 'yOffset' : 0, 'width' : 65, 'height' : 48},
			
			//		{'xOffset' : 199, 'yOffset' : 0, 'width' : 23, 'height' : 48},
			//		{'xOffset' : 176, 'yOffset' : 0, 'width' : 23, 'height' : 48}
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 1,'dy': 0,'time':50},

						{'frame': 1,'dx': 0,'dy': 3,'time':50},
						{'frame': 1,'dx': 0,'dy': 3,'time':50},
						
/*						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
*/					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Businessman-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Businessman.png',
		'visible': false,
		
		'x'		: 0,
		'y'		: 255,
		
		'state'	: 'walk',
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 51, 'height' : 63},
					{'xOffset' :  51, 'yOffset' : 0, 'width' : 51, 'height' : 63},
					{'xOffset' : 102, 'yOffset' : 0, 'width' : 51, 'height' : 63}
					
					// {'xOffset' : 153, 'yOffset' : 0, 'width' : 51, 'height' : 63},
					// {'xOffset' : 204, 'yOffset' : 0, 'width' : 51, 'height' : 63}
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 1,'dy': 0,'time':50},

						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 1,'dy': 0,'time':50},
						
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						{'frame': 2,'dx': 1,'dy': 0,'time':50},
						
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 1,'dy': 0,'time':50},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Businessman-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Businessman.png',
		'visible': false,
		
//		'x'		: 240,
//		'y'		: 255,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					
					{'xOffset' : 255, 'yOffset' : 0, 'width' : 51, 'height' : 63},
					{'xOffset' : 306, 'yOffset' : 0, 'width' : 51, 'height' : 63},
					{'xOffset' : 357, 'yOffset' : 0, 'width' : 51, 'height' : 63},
			
			//		{'xOffset' : 408, 'yOffset' : 0, 'width' : 51, 'height' : 63},
			//		{'xOffset' : 459, 'yOffset' : 0, 'width' : 51, 'height' : 63}
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 0,'dx': -1,'dy': 0,'time':50},

						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -1,'dy': 0,'time':50},
						
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						{'frame': 2,'dx': -1,'dy': 0,'time':50},
						
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -1,'dy': 0,'time':50},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'DhotiUncle-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/DhotiUncle.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 230,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 47, 'height' : 89},
					{'xOffset' :  47, 'yOffset' : 0, 'width' : 47, 'height' : 89},
					{'xOffset' :  94, 'yOffset' : 0, 'width' : 47, 'height' : 89},
					{'xOffset' : 141, 'yOffset' : 0, 'width' : 47, 'height' : 89},
					{'xOffset' : 188, 'yOffset' : 0, 'width' : 47, 'height' : 89}
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 2,'dy': 0,'time':50},

						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 2,'dy': 0,'time':50},
						{'frame': 4,'dx': 2,'dy': 0,'time':50},
						{'frame': 4,'dx': 2,'dy': 0,'time':50}
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},
	
	'DhotiUncle-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/DhotiUncle.png',
		'visible': true,
		
		'x'		: 240,
		'y'		: 230,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 423, 'yOffset' : 0, 'width' : 47, 'height' : 89},
					{'xOffset' : 376, 'yOffset' : 0, 'width' : 47, 'height' : 89},
					{'xOffset' : 329, 'yOffset' : 0, 'width' : 47, 'height' : 89},
					{'xOffset' : 282, 'yOffset' : 0, 'width' : 47, 'height' : 89},
					{'xOffset' : 235, 'yOffset' : 0, 'width' : 47, 'height' : 89}
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 0,'dx': -2,'dy': 0,'time':50},

						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 4,'dx': -2,'dy': 0,'time':50},
						{'frame': 4,'dx': -2,'dy': 0,'time':50},
						{'frame': 4,'dx': -2,'dy': 0,'time':50}
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Girl1-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Girl1.png',
		'visible': true,
		
//		'x'		: 0,
//		'y'		: 230,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 34, 'height' : 64},
					{'xOffset' :  34, 'yOffset' : 0, 'width' : 34, 'height' : 64},
					{'xOffset' :  68, 'yOffset' : 0, 'width' : 34, 'height' : 64},
					{'xOffset' : 102, 'yOffset' : 0, 'width' : 34, 'height' : 64},
					{'xOffset' : 136, 'yOffset' : 0, 'width' : 34, 'height' : 64}
					
					//{'xOffset' : 170, 'yOffset' : 0, 'width' : 52, 'height' : 64},
					//{'xOffset' : 222, 'yOffset' : 0, 'width' : 52, 'height' : 64}
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 1,'dy': 0,'time':50},

						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 1,'dy': 0,'time':50},

						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						{'frame': 2,'dx': 1,'dy': 0,'time':50},
						
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						{'frame': 3,'dx': 1,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 2,'dy': 0,'time':50},
						{'frame': 4,'dx': 1,'dy': 0,'time':50},

						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						{'frame': 3,'dx': 1,'dy': 0,'time':50},

						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						{'frame': 2,'dx': 1,'dy': 0,'time':50},

						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 1,'dy': 0,'time':50},
						

					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},


	'Girl1-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Girl1.png',
		'visible': true,
		
//		'x'		: 240,
//		'y'		: 234,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 274, 'yOffset' : 0, 'width' : 52, 'height' : 64},
					{'xOffset' : 326, 'yOffset' : 0, 'width' : 52, 'height' : 64},
					{'xOffset' : 378, 'yOffset' : 0, 'width' : 52, 'height' : 64},
					{'xOffset' : 430, 'yOffset' : 0, 'width' : 52, 'height' : 64},
					{'xOffset' : 482, 'yOffset' : 0, 'width' : 52, 'height' : 64},
					
					//{'xOffset' : 586, 'yOffset' : 0, 'width' : 52, 'height' : 64},
					//{'xOffset' : 534, 'yOffset' : 0, 'width' : 52, 'height' : 64},
				],
				
		'animation' :
		{
			'walk': [

						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 0,'dx': -1,'dy': 0,'time':50},

						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -1,'dy': 0,'time':50},

						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						{'frame': 2,'dx': -1,'dy': 0,'time':50},
						
						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						{'frame': 3,'dx': -1,'dy': 0,'time':50},
						
						{'frame': 4,'dx': -2,'dy': 0,'time':50},
						{'frame': 4,'dx': -1,'dy': 0,'time':50},

						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						{'frame': 3,'dx': -1,'dy': 0,'time':50},

						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						{'frame': 2,'dx': -1,'dy': 0,'time':50},

						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -1,'dy': 0,'time':50},
						
						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 0,'dx': -1,'dy': 0,'time':50},

					]
		}
		
		//'image'			: undefined
		//'animationIndex'  : undefined
	},
	
	'Girl2-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Girl2.png',
		'visible': true,
		
// 		'x'		: -26,
//		'y'		: 233,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 26, 'height' : 78},
					{'xOffset' :  26, 'yOffset' : 0, 'width' : 21, 'height' : 78},
					{'xOffset' :  47, 'yOffset' : 0, 'width' : 20, 'height' : 78},
				
				//	{'xOffset' :  67, 'yOffset' : 0, 'width' : 24, 'height' : 78},	//Hit frame			
				//	{'xOffset' :  91, 'yOffset' : 0, 'width' : 28, 'height' : 78},
				//	{'xOffset' : 119, 'yOffset' : 0, 'width' : 27, 'height' : 78}

				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 1,'dy': 0,'time':50},
						
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 1,'dy': 0,'time':50},
						
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						{'frame': 2,'dx': 1,'dy': 0,'time':50},
/*						
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						{'frame': 3,'dx': 1,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 2,'dy': 0,'time':50},
						{'frame': 4,'dx': 1,'dy': 0,'time':50},
						
						{'frame': 5,'dx': 2,'dy': 0,'time':50},
						{'frame': 5,'dx': 2,'dy': 0,'time':50},
*/						
						
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	
	'Girl2-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Girl2.png',
		'visible': true,
		
	//	'x'		: 240,
	//	'y'		: 230,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[

					{'xOffset' : 146, 'yOffset' : 0, 'width' : 26, 'height' : 78},
					{'xOffset' : 172, 'yOffset' : 0, 'width' : 22, 'height' : 78},
					{'xOffset' : 194, 'yOffset' : 0, 'width' : 20, 'height' : 78},
					
/*					{'xOffset' : 214, 'yOffset' : 0, 'width' : 25, 'height' : 78},
					{'xOffset' : 239, 'yOffset' : 0, 'width' : 26, 'height' : 78},
					{'xOffset' : 265, 'yOffset' : 0, 'width' : 27, 'height' : 78}
*/				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 0,'dx': -1,'dy': 0,'time':50},
						
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -1,'dy': 0,'time':50},
						
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						{'frame': 2,'dx': -1,'dy': 0,'time':50},
/*						
						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						{'frame': 3,'dx': -1,'dy': 0,'time':50},
						
						{'frame': 4,'dx': -2,'dy': 0,'time':50},
						{'frame': 4,'dx': -1,'dy': 0,'time':50},
						
						{'frame': 5,'dx': -2,'dy': 0,'time':50},
						{'frame': 5,'dx': -2,'dy': 0,'time':50},
*/						
					
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Balloon0' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Balloons.png',
		'visible': false,
		
		'state'	: undefined,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 8, 'height' : 10}			
				],
				
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': 5,'time':16}
			]
		}
	},
	
	'Balloon1' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Balloons.png',
		'visible': false,
		
		'state'	: undefined,
		
		'currentFrame' : 0,
		
		'frames':
		[
			{'xOffset' :  8, 'yOffset' : 0, 'width' : 8, 'height' : 10}			
		],
				
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': 5,'time':16}
			]
		}
	},
	
	'Balloon2' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Balloons.png',
		'visible': false,
		
		'state'	: undefined,
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  16, 'yOffset' : 0, 'width' : 8, 'height' : 10}				
				],
				
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': 5,'time':16}
			]
		}
	},
	
	'Balloon3' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Balloons.png',
		'visible': false,
		
		'state'	: undefined,
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  24, 'yOffset' : 0, 'width' : 8, 'height' : 10},					
				],
				
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': 5,'time':16}
			]
		}
	},
	
	'Balloon4' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Balloons.png',
		'visible': false,
		
		'state'	: undefined,
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 8, 'height' : 10},					
				],
				
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': 5,'time':16}
			]
		}
	},
	
	'Balloon5' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Balloons.png',
		'visible': false,
		
		'state'	: undefined,
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  8, 'yOffset' : 0, 'width' : 8, 'height' : 10},					
				],
				
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': 5,'time':16}
			]
		}
	},
	
	'Balloon6' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Balloons.png',
		'visible': false,
		
		'state'	: undefined,
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  16, 'yOffset' : 0, 'width' : 8, 'height' : 10},					
				],
				
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': 5,'time':16}
			]
		}
	},
	
	'Balloon7' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Balloons.png',
		'visible': false,
		
		'state'	: undefined,
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  24, 'yOffset' : 0, 'width' : 8, 'height' : 10},					
				],
				
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': 5,'time':16}
			]
		}
	},
	
	'Balloon8' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Balloons.png',
		'visible': false,
		
		'state'	: undefined,
		
		'currentFrame' : 0,
		
		'frames':
		[
			{'xOffset' :  0, 'yOffset' : 0, 'width' : 8, 'height' : 10},					
		],
				
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': 5,'time':16}
			]
		}
	},
	
	'Balloon9' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Balloons.png',
		'visible': false,
		
		'state'	: undefined,
		
		'currentFrame' : 0,
		
		'frames':
		[
			{'xOffset' :  8, 'yOffset' : 0, 'width' : 8, 'height' : 10},					
		],
				
		'animation' :
		{
			'active':
			[
				{'frame': 0,'dx': 0,'dy': 5,'time':16}
			]
		}
	},
	
	'PublicCar-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/PublicCar.png',
		'visible': true,
		
		'x'		: 240,
		'y'		: 230,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 166, 'height' : 48},
					{'xOffset' : 166, 'yOffset' : 0, 'width' : 166, 'height' : 48},
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 0,'dx': -2,'dy': 0,'time':50},

						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'PublicCar-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/PublicCar.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 230,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 498, 'yOffset' : 0, 'width' : 166, 'height' : 48},
					{'xOffset' : 332, 'yOffset' : 0, 'width' : 166, 'height' : 48},
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 2,'dy': 0,'time':50},

						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'WindowBoy' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/WindowBoy.png',
		'visible': false,
		
//		'x'		: 140,
//		'y'		: 100,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 51, 'height' : 29},
					{'xOffset' : 51, 'yOffset' : 0, 'width' : 51, 'height' : 29},
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 0,'dy': 0,'time':1000},
						{'frame': 1,'dx': 0,'dy': 0,'time':1050},
						{'frame': 0,'dx': 0,'dy': 0,'time':250},
						{'frame': 1,'dx': 0,'dy': 0,'time':250},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},
	
	'SadhuBaba-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/SadhuBaba.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 255,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 46, 'height' : 70},
					{'xOffset' :  46, 'yOffset' : 0, 'width' : 46, 'height' : 70},
					{'xOffset' :  92, 'yOffset' : 0, 'width' : 46, 'height' : 70},
					{'xOffset' : 138, 'yOffset' : 0, 'width' : 46, 'height' : 70},
					{'xOffset' : 184, 'yOffset' : 0, 'width' : 46, 'height' : 70}
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 2,'dy': 0,'time':50},

						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 2,'dy': 0,'time':50},
						{'frame': 4,'dx': 2,'dy': 0,'time':50},
						{'frame': 4,'dx': 2,'dy': 0,'time':50}
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'SadhuBaba-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/SadhuBaba.png',
		'visible': true,
		
		'x'		: 240,
		'y'		: 228,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 414, 'yOffset' : 0, 'width' : 46, 'height' : 70},
					{'xOffset' : 368, 'yOffset' : 0, 'width' : 46, 'height' : 70},
					{'xOffset' : 322, 'yOffset' : 0, 'width' : 46, 'height' : 70},
					
				//	{'xOffset' : 276, 'yOffset' : 0, 'width' : 46, 'height' : 70},
				//	{'xOffset' : 230, 'yOffset' : 0, 'width' : 46, 'height' : 70}
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 0,'dx': -2,'dy': 0,'time':50},

						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 4,'dx': -2,'dy': 0,'time':50},
						{'frame': 4,'dx': -2,'dy': 0,'time':50},
						{'frame': 4,'dx': -2,'dy': 0,'time':50}
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'SadhuSmoke' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/SadhuSmoke.png',
		'visible': true,
		
		'x'		: 100,
		'y'		: 240,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 48, 'height' : 10},
					{'xOffset' :  48, 'yOffset' : 0, 'width' : 48, 'height' : 10},
					{'xOffset' :  96, 'yOffset' : 0, 'width' : 48, 'height' : 10},
					{'xOffset' : 144, 'yOffset' : 0, 'width' : 48, 'height' : 10}
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 0,'dy': -2},
						{'frame': 0,'dx': 0,'dy': -2},
						{'frame': 0,'dx': 0,'dy': -2},
						{'frame': 0,'dx': 0,'dy': -2},
						{'frame': 0,'dx': 0,'dy': -2},
						{'frame': 0,'dx': 0,'dy': -2},
						{'frame': 0,'dx': 0,'dy': -2},

						{'frame': 1,'dx': 0,'dy': -2},
						{'frame': 1,'dx': 0,'dy': -2},
						{'frame': 1,'dx': 0,'dy': -2},
						{'frame': 1,'dx': 0,'dy': -2},
						{'frame': 1,'dx': 0,'dy': -2},
						{'frame': 1,'dx': 0,'dy': -2},
						
						{'frame': 2,'dx': 0,'dy': -2},
						{'frame': 2,'dx': 0,'dy': -2},
						{'frame': 2,'dx': 0,'dy': -2},
						{'frame': 2,'dx': 0,'dy': -2},
						{'frame': 2,'dx': 0,'dy': -2},
						{'frame': 2,'dx': 0,'dy': -2},
						
						{'frame': 3,'dx': 0,'dy': -2},
						{'frame': 3,'dx': 0,'dy': -2},
						{'frame': 3,'dx': 0,'dy': -2},
						{'frame': 3,'dx': 0,'dy': -2},
						{'frame': 3,'dx': 0,'dy': -2},
						{'frame': 3,'dx': 0,'dy': -2},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},
	
	'Waiter-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Waiter.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 230,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 66, 'height' : 79},
					{'xOffset' :  66, 'yOffset' : 0, 'width' : 66, 'height' : 79},
					{'xOffset' : 132, 'yOffset' : 0, 'width' : 66, 'height' : 79},
					{'xOffset' : 198, 'yOffset' : 0, 'width' : 66, 'height' : 79},
					{'xOffset' : 264, 'yOffset' : 0, 'width' : 66, 'height' : 79},
					{'xOffset' : 330, 'yOffset' : 0, 'width' : 66, 'height' : 79},
					{'xOffset' : 396, 'yOffset' : 0, 'width' : 66, 'height' : 79}
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 2,'dy': 0,'time':50},
						{'frame': 0,'dx': 2,'dy': 0,'time':50},

						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 2,'dy': 0,'time':50},
						{'frame': 4,'dx': 2,'dy': 0,'time':50},
						{'frame': 4,'dx': 2,'dy': 0,'time':50},

						{'frame': 5,'dx': 2,'dy': 0,'time':50},
						{'frame': 5,'dx': 2,'dy': 0,'time':50},
						{'frame': 5,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 6,'dx': 2,'dy': 0,'time':50},
						{'frame': 6,'dx': 2,'dy': 0,'time':50},
						{'frame': 6,'dx': 2,'dy': 0,'time':50},

					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},


	'Waiter-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Waiter.png',
		'visible': true,
		
		'x'		: 240,
		'y'		: 230,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 858, 'yOffset' : 0, 'width' : 66, 'height' : 79},
					{'xOffset' : 792, 'yOffset' : 0, 'width' : 66, 'height' : 79},
					{'xOffset' : 726, 'yOffset' : 0, 'width' : 66, 'height' : 79},
					{'xOffset' : 660, 'yOffset' : 0, 'width' : 66, 'height' : 79},
					{'xOffset' : 594, 'yOffset' : 0, 'width' : 66, 'height' : 79},
					{'xOffset' : 528, 'yOffset' : 0, 'width' : 66, 'height' : 79},
					{'xOffset' : 462, 'yOffset' : 0, 'width' : 66, 'height' : 79},
					
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 0,'dx': -2,'dy': 0,'time':50},
						{'frame': 0,'dx': -2,'dy': 0,'time':50},

						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 4,'dx': -2,'dy': 0,'time':50},
						{'frame': 4,'dx': -2,'dy': 0,'time':50},
						{'frame': 4,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 5,'dx': -2,'dy': 0,'time':50},
						{'frame': 5,'dx': -2,'dy': 0,'time':50},
						{'frame': 5,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 6,'dx': -2,'dy': 0,'time':50},
						{'frame': 6,'dx': -2,'dy': 0,'time':50},
						{'frame': 6,'dx': -2,'dy': 0,'time':50}
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Skateboy-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Skateboy.png',
		'visible': true,
		
//		'x'		: 240,
//		'y'		: 255,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 149, 'yOffset' : 0, 'width' : 47, 'height' : 75},
					{'xOffset' : 196, 'yOffset' : 0, 'width' : 56, 'height' : 75},
					{'xOffset' : 252, 'yOffset' : 0, 'width' : 46, 'height' : 75},
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
						{'frame': 0,'dx': 3,'dy': 0,'time':50},

						{'frame': 1,'dx': 3,'dy': 0,'time':50},
						{'frame': 1,'dx': 3,'dy': 0,'time':50},
						{'frame': 1,'dx': 3,'dy': 0,'time':50},
						{'frame': 1,'dx': 3,'dy': 0,'time':50},
						{'frame': 1,'dx': 3,'dy': 0,'time':50},
						{'frame': 1,'dx': 3,'dy': 0,'time':50},
						{'frame': 1,'dx': 3,'dy': 0,'time':50},
						
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
/*						
						{'frame': 2,'dx': 3,'dy': 0,'time':50},
						{'frame': 2,'dx': 3,'dy': 0,'time':50},
						{'frame': 2,'dx': 3,'dy': 0,'time':50},
						{'frame': 2,'dx': 3,'dy': 0,'time':50},
						{'frame': 2,'dx': 3,'dy': 0,'time':50},					
*/					]
									
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Skateboy-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Skateboy.png',
		'visible': true,
		
//		'x'		: 0,
//		'y'		: 255,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 47, 'height' : 75},
					{'xOffset' :  47, 'yOffset' : 0, 'width' : 56, 'height' : 75},
					{'xOffset' : 103, 'yOffset' : 0, 'width' : 46, 'height' : 75},
				],
				
		'animation' :
		{
			'walk': [						
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
												
						{'frame': 1,'dx': -3,'dy': 0,'time':50},
						{'frame': 1,'dx': -3,'dy': 0,'time':50},
						{'frame': 1,'dx': -3,'dy': 0,'time':50},
						{'frame': 1,'dx': -3,'dy': 0,'time':50},
						{'frame': 1,'dx': -3,'dy': 0,'time':50},
						{'frame': 1,'dx': -3,'dy': 0,'time':50},
						{'frame': 1,'dx': -3,'dy': 0,'time':50},					

						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -3,'dy': 0,'time':50},

/*
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},						
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},						
						{'frame': 2,'dx': -3,'dy': 0,'time':50},						
						{'frame': 2,'dx': -3,'dy': 0,'time':50}
*/					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Water0' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Water.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 22, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 44, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					
				],
				
		'animation' :
		{
			'walk': [
						
						{'frame': 0,'dx': 0,'dy': 0,'time':250},
						{'frame': 1,'dx': 0,'dy': 0,'time':250},
						{'frame': 2,'dx': 0,'dy': 0,'time':250},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},


	'Water1' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Water.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 22, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 44, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					
				],
				
		'animation' :
		{
			'walk': [
						
						{'frame': 0,'dx': 0,'dy': 0,'time':250},
						{'frame': 1,'dx': 0,'dy': 0,'time':250},
						{'frame': 2,'dx': 0,'dy': 0,'time':250},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Water2' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Water.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 22, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 44, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					
				],
				
		'animation' :
		{
			'walk': [
						
						{'frame': 0,'dx': 0,'dy': 0,'time':250},
						{'frame': 1,'dx': 0,'dy': 0,'time':250},
						{'frame': 2,'dx': 0,'dy': 0,'time':250},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Water3' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Water.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 22, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 44, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					
				],
				
		'animation' :
		{
			'walk': [
						
						{'frame': 0,'dx': 0,'dy': 0,'time':250},
						{'frame': 1,'dx': 0,'dy': 0,'time':250},
						{'frame': 2,'dx': 0,'dy': 0,'time':250},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Water4' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Water.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 22, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 44, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					
				],
				
		'animation' :
		{
			'walk': [
						
						{'frame': 0,'dx': 0,'dy': 0,'time':250},
						{'frame': 1,'dx': 0,'dy': 0,'time':250},
						{'frame': 2,'dx': 0,'dy': 0,'time':250},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Water5' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Water.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 22, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 44, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					
				],
				
		'animation' :
		{
			'walk': [
						
						{'frame': 0,'dx': 0,'dy': 0,'time':250},
						{'frame': 1,'dx': 0,'dy': 0,'time':250},
						{'frame': 2,'dx': 0,'dy': 0,'time':250},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Water6' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Water.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 22, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 44, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					
				],
				
		'animation' :
		{
			'walk': [
						
						{'frame': 0,'dx': 0,'dy': 0,'time':250},
						{'frame': 1,'dx': 0,'dy': 0,'time':250},
						{'frame': 2,'dx': 0,'dy': 0,'time':250},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Water7' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Water.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 22, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 44, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					
				],
				
		'animation' :
		{
			'walk': [
						
						{'frame': 0,'dx': 0,'dy': 0,'time':250},
						{'frame': 1,'dx': 0,'dy': 0,'time':250},
						{'frame': 2,'dx': 0,'dy': 0,'time':250},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Water8' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Water.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 22, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 44, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					
				],
				
		'animation' :
		{
			'walk': [
						
						{'frame': 0,'dx': 0,'dy': 0,'time':250},
						{'frame': 1,'dx': 0,'dy': 0,'time':250},
						{'frame': 2,'dx': 0,'dy': 0,'time':250},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},

	'Water9' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Water.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 22, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 44, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					
				],
				
		'animation' :
		{
			'walk': [
						
						{'frame': 0,'dx': 0,'dy': 0,'time':250},
						{'frame': 1,'dx': 0,'dy': 0,'time':250},
						{'frame': 2,'dx': 0,'dy': 0,'time':250},
					]
		}
		
		//'image'			: undefined
		//'animationIndex' : undefined
	},


	'BackgroundMenu' :
	{
		'type'	: 'ui.layer.image',
		'src'	: 'images/BackgroundMenu.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 0,
		'width'	: 240,
		'height': 320
		
	},
	
	'ChanceOver' :
	{
		'type'	: 'ui.layer.image',
		'src'	: 'images/ChanceOver.png',
		'visible': false,
		
		'x'		: 56,
		'y'		: 116,
		'width'	: 152,
		'height': 89
		
	},

	'SplashScreen' :
	{
		'type'	: 'ui.layer.image',
		'src'	: 'images/SplashScreen.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 0,
		'width'	: 240,
		'height': 320
		
	},

	'ExitTextQuestion' :
	{
		'type'	: 'ui.layer.image',
		'src'	: 'images/Text2.png',
		'visible': true,
		
		'x'		: 21,
		'y'		: 155,
		'width'	: 198,
		'height': 42
		
	},
	
	'F2H' :
	{
		'type'	: 'ui.layer.image',
		'src'	: 'images/F2H.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 59,
		'width'	: 90,
		'height': 80
		
	},

	'Yes'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/YesNo.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 288,
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 82, 'height' : 32}
				 ]
	},
	
	'No'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/YesNo.png',
		'visible': true,
		
		'x'		: 158,
		'y'		: 288,
		
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 82, 'yOffset' : 0, 'width' : 82, 'height' : 32}
		 		 ]
	},

	'Back'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/YesNo.png',
		'visible': true,
		
		'x'		: 158,
		'y'		: 288,
		
		
		'currentFrame' : 0,
	
		'frames':[
					{'xOffset' :164, 'yOffset' : 0, 'width' : 82, 'height' : 32},
		 		 ]
	},

	'Next'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/YesNo.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 288,
		
		
		'currentFrame' : 0,
		
		'frames':[
 					{'xOffset' :246, 'yOffset' : 0, 'width' : 82, 'height' : 32},
		 		 ]
	},

	'MenuBlueText'	:
	{
		'type'	: 'ui.layer.image.frame',
		'src'	: 'images/YesNo.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 288,
		
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' : 328, 'yOffset' : 0, 'width' : 82, 'height' : 32},
		 		 ]
	},

	'BlackBackground'	:
	{
		'type'	: 'ui.layer.shape.rectangle',
		
		'visible': true,
		
		'x'		: 0,
		'y'		: 0,
		'width'	: 240,
		'height': 320,
		
		'fill'	: true,
		'rgb'	: [0,0,0]
	},
	

	'Logo'	:
	{
		'type'	: 'ui.layer.image',
		
		'visible': true,
		
		'src'	: 'images/SKJ.png',
		
		'x'		: 50,
		'y'		: 70
	},

	'LoadingBarOutline'	:
	{
		'type'	: 'ui.layer.shape.rectangle',
		
		'visible': true,
		
		'x'		: 24,
		'y'		: 187,
		'width'	: 193,
		'height': 9,
		
		'rgb'	: [100,210,255]
	},
	
	'LoadingBarFilling'	:
	{
		'type'	: 'ui.layer.shape.rectangle',
		
		'visible': true,
		
		'x'		: 25,
		'y'		: 188,
		'width'	: 0,
		'height': 7,
		
		'fill'	: true,
		'rgb'	: [100,210,255]
	},
}
