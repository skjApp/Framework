// App's Data

var data = 
{
	'engine' :
	{
		'app'		: 'app',
		
		'pluginfiles'	: ['skjapp-framework/js/ui/layers/uiLayerImage.js', 'skjapp-framework/js/ui/layers/uiLayerShape.js', 'skjapp-framework/js/ui/layers/uiLayerText.js', 'skjapp-framework/js/ui/layers/uiLayerAdvanced.js','skjapp-framework/js/ui/pages/uiPage.js', 'skjapp-framework/js/ui/layers/uiLayerAudio.js']
	},
	
	'app':
	{
		'type'		: 'app',
		
		'name'		: 'Fun2Hit',
		
		// App Dimensions
		'x'			: 0,
		'y'			: 0,
		'width'		: 240,
		'height'	: 320,
		
		'maxFrameRate'	: 60,
		
		'pages'			: ['loading_page','EnableSound','Splash','Menu','Help1','Help2','AboutUs','Exit','Stage1','Stage2','Stage3'],
		'currentPage'	: 'loading_page'
				
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
		'type'		: 'ui.page.advanced',
	
		'states'	:['active','paused','chanceOver','stageOver','gameOver'],
	
		'layers':
		{
			'active' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','Girl1-Left','Businessman-Right','Skateboy-Right','Girl2-Right','Girl1-Right','Girl2-Left','WindowBoy','Bird-Right','Bird-Left','Businessman-Left','Businessman-Right','Skateboy-Left','Skateboy-Right','Ambulance-Left','Balloons','Water','Points','PauseButton','audioBalloonBoy','audioBird','audioBusinessman','audioDhotiUncle','audioGirl1','audioGirl2','audioGubbarra','audioSadhuBaba','audioSadhuSmoke','audioSkateboy','audioWindowOpen'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','Girl1-Left','Businessman-Right','Skateboy-Right','Girl2-Right','Girl1-Right','Girl2-Left','WindowBoy','Bird-Right','Bird-Left','Businessman-Left','Businessman-Right','Skateboy-Left','Skateboy-Right','Ambulance-Left','Balloons','Water','Points','PauseButton','audioBalloonBoy','audioBird','audioBusinessman','audioDhotiUncle','audioGirl1','audioGirl2','audioGubbarra','audioSadhuBaba','audioSadhuSmoke','audioSkateboy','audioWindowOpen']
			},
			
			'paused' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','PausedPopup'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','PausedPopup']
			},
			
			'chanceOver' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','ChanceOverPopup'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','ChanceOverPopup']
			},
			
			'stageOver' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','StageOverPopup'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','StageOverPopup']
			},
			
			'gameOver' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','GameOverPopup'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','GameOverPopup']
			}
		},
		
		'defaultState': 'active',
		
		// frameline || timeline
		'frameline' :
		{
			'active' :
			{
				// 'ALL','EVEN','ODD',specific number
				'0' :
				[
					['Player','state' 	, 'stand' ],
					['Player','x' 		, 108 ],
					['Player','y' 		, 6 ],
					
					// Updating the scoreboard
					['Player','balloons', 99 ],
					
					// Updating the Pause Button
					['PauseButton','visible' 	, true ],
					
					// Updating Layers for New Game
					['Businessman-Right','visible', false ],
					['Businessman-Right','state', 'walk' ],
	
					['Girl1-Left','visible'		, false ],
					['Girl1-Left','state'			, 'walk' ],
	
					['Skateboy-Right','visible'	, false ],
					['Skateboy-Right','state' 	, 'walk' ],
	
					['Girl2-Right','visible'		, false ],
					['Girl2-Right','state' 		, 'walk' ],
	
					['Ambulance-Left','visible'	, false ],
					['Ambulance-Left','state' 	, 'walk' ],
	
					['Bird-Right','visible'		, false ],
					['Bird-Right','state' 		, 'walk' ],
	
					['Girl1-Right','visible'	, false ],
					['Girl1-Right','state' 		, 'walk' ],
	
					['Skateboy-Left','visible'	, false ],				
					['Skateboy-Left','state' 		, 'walk' ],
	
					['Bird-Left','visible'		, false ],
					['Bird-Left','state' 		, 'walk' ],
	
					['Businessman-Left','visible', false ],				
					['Businessman-Left','state' , 'walk' ],
	
					['WindowBoy','visible'		, false ],				
					['WindowBoy','state' 		, 'walk' ],
	
					['Girl2-Left','visible'		, false ],				
					['Girl2-Left','state' 		, 'walk' ],
	
					['Girl1-Left','visible'		, false ],				
					['Girl1-Left','state' 		, 'walk' ],
	
					['Skateboy-Right','visible'	, false ],				
					['Skateboy-Right','state' 	, 'walk' ],
	
					['Ambulance-Left','visible'	, false ],				
					['Ambulance-Left','state' 	, 'walk' ],
	
					['Bird-Left','visible'		, false ],
					['Bird-Left','state' 		, 'walk' ]
				],
				
				'200':
				[
					['Businessman-Right','visible'	,true	], 
					['Businessman-Right','state'	,'walk'	],
					['Businessman-Right','x'		,-51	],
					['Businessman-Right','y'		,250	],
					['Businessman-Right','points'	,20]
				],
				
				'400' :
				[
					['Girl1-Left','visible'	,true	],
					['Girl1-Left','state'	,'walk'	],
					['Girl1-Left','x'		,240	],
					['Girl1-Left','y'		,234	]
				],
				
				'600' :
				[
					['Girl2-Right',	'visible'	,true] ,
					['Girl2-Right',	'state'		,'walk'] ,
					['Girl2-Right',	'x'			,-26] ,
					['Girl2-Right',	'y'			,233] 
				],
				
				'800':
				[
					['Ambulance-Left','visible'	,true],
					['Ambulance-Left','state'	,'walk'],
					['Ambulance-Left','x'		,240],
					['Ambulance-Left','y'		,228] 
				],
				
				'1000' :
				[
					['Businessman-Right','visible'	, true],
					['Businessman-Right','state'	, 'walk'],
					['Businessman-Right','x'		, -51],
					['Businessman-Right','y'		, 235],
					['Businessman-Right','points'	,20]				
				],
				
				'1200' :
				[
					['Skateboy-Right','visible'	,true	],
					['Skateboy-Right','state'	,'walk'	],
					['Skateboy-Right','x'		, -47	],
					['Skateboy-Right','y'		,244	]
				],
				
				'1400' :
				[
					['Bird-Left','visible'	, true],
					['Bird-Left','state'	, 'walk'],
					['Bird-Left','x'		, 240],
					['Bird-Left','y'		, 160]
				],
				
				'1600' :
				[
					['Girl1-Right','visible', true],
					['Girl1-Right','state'	,'walk'],
					['Girl1-Right','x'		,-34],
					['Girl1-Right','y'		, 234]
			
				],
				
				'1800' :
				[
					['Skateboy-Left','visible', true],				
					['Skateboy-Left','state', 'walk'],
					['Skateboy-Left','x', 240],
					['Skateboy-Left','y', 244]
				],
				
				'2000' :
				[
					['Bird-Left','visible'	, true],
					['Bird-Left','state'	, 'walk'],
					['Bird-Left','x'		, 240],
					['Bird-Left','y'		, 160]
				],
				
				'2200' :
				[
					['Businessman-Left','visible', true],				
					['Businessman-Left','state'	, 'walk'],
					['Businessman-Left','x'		, 240],
					['Businessman-Left','y'		, 250]
				],
				
				'2400' :
				[
					['WindowBoy','visible'	, true],				
					['WindowBoy','state'	, 'walk'],
					['WindowBoy','x'		, 10],
					['WindowBoy','y'		, 87],
					['audioSkateboy','state','play']
				],

				'2600' :
				[
					['Girl2-Left','visible'	, true],				
					['Girl2-Left','state'	, 'walk'],
					['Girl2-Left','x'		, 240],
					['Girl2-Left','y'		, 233]
				],

				'2800' :
				[
					['Girl1-Left','visible'	, true],				
					['Girl1-Left','state'	, 'walk'],
					['Girl1-Left','x'		, 240],
					['Girl1-Left','y'		, 234]
				],

				'3000' :
				[
					['Skateboy-Right','visible'	, true],				
					['Skateboy-Right','state'	, 'walk'],
					['Skateboy-Right','x'		, -47],
					['Skateboy-Right','y'		, 244]
				],

				'3200' :
				[
					['Girl2-Left','visible'	, true],				
					['Girl2-Left','state'	, 'walk'],
					['Girl2-Left','x'		, 240],
					['Girl2-Left','y'		, 231]
				],

				'3400' :
				[
					['Bird-Left','visible'	, true],				
					['Bird-Left','state'	, 'walk'],
					['Bird-Left','x'		, 240],
					['Bird-Left','y'		, 200]
				],

				'3600' :
				[
					['Businessman-Right','visible'	, true],
					['Businessman-Right','state'	, 'walk'],
					['Businessman-Right','x'		, -51],
					['Businessman-Right','y'		, 250]
				],

				'3800' :
				[
					['Ambulance-Left','visible'	, true],				
					['Ambulance-Left','state'	, 'walk'],
					['Ambulance-Left','x'		, 240],
					['Ambulance-Left','y'		, 228]
				]

			},
			
			'chanceOver'	:
			{
				'0' :
				[			
					['PopupDialog','x'	, 0],
					['PopupDialog','y'	, 0],
					
					['ChanceOverPopup','visible',true],
					['Player','state','cry']
				]
			},
			
			'gameOver'	:
			{
				'0'	:
				[			
					['PopupDialog','x'	, 0],
					['PopupDialog','y'	, 0]
				]				
			},
			
			'stageOver' :
			{
				'0' :
				[
					['PopupDialog','x'	, 0],
					['PopupDialog','y'	, 0],
					
					['StageCompleteText','text','Stage 1 Complete'],
					['StageStartText'	,'text','Stage 2 Starts']	
				]
			},
			
			'paused' :
			{
				'0' :
				[
					['PopupDialog','x'	, 0],
					['PopupDialog','y'	, 0]	
				]
			}
		}
	},
		
	'Stage2'	:
	{
		'type'		: 'ui.page.advanced',
	
		'states'	:['active','paused','chanceOver','stageOver','gameOver'],
	
		'layers':
		{
			'active' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','Girl1-Left','Businessman-Right','Skateboy-Right','Girl2-Right','Girl1-Right','Girl2-Left','WindowBoy','Bird-Right','Bird-Left','Businessman-Left','Businessman-Right','Skateboy-Left','Skateboy-Right','Ambulance-Left','Balloons','Water','Points','PauseButton','audioBalloonBoy','audioBird','audioBusinessman','audioDhotiUncle','audioGirl1','audioGirl2','audioGubbarra','audioSadhuBaba','audioSadhuSmoke','audioSkateboy','audioWindowOpen'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','Girl1-Left','Businessman-Right','Skateboy-Right','Girl2-Right','Girl1-Right','Girl2-Left','WindowBoy','Bird-Right','Bird-Left','Businessman-Left','Businessman-Right','Skateboy-Left','Skateboy-Right','Ambulance-Left','Balloons','Water','Points','PauseButton','audioBalloonBoy','audioBird','audioBusinessman','audioDhotiUncle','audioGirl1','audioGirl2','audioGubbarra','audioSadhuBaba','audioSadhuSmoke','audioSkateboy','audioWindowOpen']
			},
			
			'paused' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','PausedPopup'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','PausedPopup']
			},
			
			'chanceOver' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','ChanceOverPopup'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','ChanceOverPopup']
			},
			
			'stageOver' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','StageOverPopup'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','StageOverPopup']
			},
			
			'gameOver' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','GameOverPopup'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','GameOverPopup']
			}
		},
		
		'defaultState': 'active',
		
		// frameline || timeline
		'frameline' :
		{
			'active' :
			{
				// 'ALL','EVEN','ODD',specific number
				'0' :
				[
					['Player','state' 	, 'stand' ],
					['Player','x' 		, 108 ],
					['Player','y' 		, 6 ],
					
					// Updating the scoreboard
					['Player','balloons' , 99 ],
					
					// Updating the Pause Button
					['PauseButton','visible' 	, true ],
					
					// Updating Layers for New Game
					['Businessman-Right','visible', false ],
					['Businessman-Right','state', 'walk' ],
	
					['Girl1-Left','visible'		, false ],
					['Girl1-Left','state'			, 'walk' ],
	
					['Skateboy-Right','visible'	, false ],
					['Skateboy-Right','state' 	, 'walk' ],
	
					['Girl2-Right','visible'		, false ],
					['Girl2-Right','state' 		, 'walk' ],
	
					['Ambulance-Left','visible'	, false ],
					['Ambulance-Left','state' 	, 'walk' ],
	
					['Bird-Right','visible'		, false ],
					['Bird-Right','state' 		, 'walk' ],
	
					['Girl1-Right','visible'	, false ],
					['Girl1-Right','state' 		, 'walk' ],
	
					['Skateboy-Left','visible'	, false ],				
					['Skateboy-Left','state' 		, 'walk' ],
	
					['Bird-Left','visible'		, false ],
					['Bird-Left','state' 		, 'walk' ],
	
					['Businessman-Left','visible', false ],				
					['Businessman-Left','state' , 'walk' ],
	
					['WindowBoy','visible'		, false ],				
					['WindowBoy','state' 		, 'walk' ],
	
					['Girl2-Left','visible'		, false ],				
					['Girl2-Left','state' 		, 'walk' ],
	
					['Girl1-Left','visible'		, false ],				
					['Girl1-Left','state' 		, 'walk' ],
	
					['Skateboy-Right','visible'	, false ],				
					['Skateboy-Right','state' 	, 'walk' ],
	
					['Ambulance-Left','visible'	, false ],				
					['Ambulance-Left','state' 	, 'walk' ],
	
					['Bird-Left','visible'		, false ],
					['Bird-Left','state' 		, 'walk' ]
				],
				
				'200':
				[
					['Skateboy-Left','visible', true],				
					['Skateboy-Left','state', 'walk'],
					['Skateboy-Left','x', 240],
					['Skateboy-Left','y', 244]
				],
				
				'400':
				[
					['Girl1-Left','visible'	,true	],
					['Girl1-Left','state'	,'walk'	],
					['Girl1-Left','x'		,240	],
					['Girl1-Left','y'		,234	]
				],
				
				'600' :
				[
					['Skateboy-Right','visible'	,true	],
					['Skateboy-Right','state'	,'walk'	],
					['Skateboy-Right','x'		, -47	],
					['Skateboy-Right','y'		,244	]
				],
				
				'800' :
				[
					['Girl2-Right',	'visible'	,true] ,
					['Girl2-Right',	'state'		,'walk'] ,
					['Girl2-Right',	'x'			,-26] ,
					['Girl2-Right',	'y'			,233] 
				],
				
				'1000' :
				[
					['Ambulance-Left','visible'	,true],
					['Ambulance-Left','state'	,'walk'],
					['Ambulance-Left','x'		,240],
					['Ambulance-Left','y'		,228] 
				],
				
				'1200' :
				[
					['Businessman-Right','visible'	, true],
					['Businessman-Right','state'	, 'walk'],
					['Businessman-Right','x'		, -51],
					['Businessman-Right','y'		, 235],
					['Businessman-Right','points'	,20]				
				],
				
				'1400' :
				[
					['Bird-Right','visible'	, true],
					['Bird-Right','state'	, 'walk'],
					['Bird-Right','x'		, -66],
					['Bird-Right','y'		, 180] 						
				],
				
				'1600' :
				[
					['Girl1-Right','visible', true],
					['Girl1-Right','state'	,'walk'],
					['Girl1-Right','x'		,-34],
					['Girl1-Right','y'		, 234]
			
				],
				
				'1800' :
				[
					['Skateboy-Left','visible', true],				
					['Skateboy-Left','state', 'walk'],
					['Skateboy-Left','x', 240],
					['Skateboy-Left','y', 244]
				],
				
				'2000' :
				[
					['Bird-Left','visible'	, true],
					['Bird-Left','state'	, 'walk'],
					['Bird-Left','x'		, 240],
					['Bird-Left','y'		, 160]
				],
				
				'2200' :
				[
					['Businessman-Left','visible', true],				
					['Businessman-Left','state'	, 'walk'],
					['Businessman-Left','x'		, 240],
					['Businessman-Left','y'		, 250]
				],
				
				'2400' :
				[
					['WindowBoy','visible'	, true],				
					['WindowBoy','state'	, 'walk'],
					['WindowBoy','x'		, 10],
					['WindowBoy','y'		, 87],
					['audioSkateboy','state','play']
				],

				'2600' :
				[
					['Girl2-Left','visible'	, true],				
					['Girl2-Left','state'	, 'walk'],
					['Girl2-Left','x'		, 240],
					['Girl2-Left','y'		, 233]
				],

				'2800' :
				[
					['Girl1-Left','visible'	, true],				
					['Girl1-Left','state'	, 'walk'],
					['Girl1-Left','x'		, 240],
					['Girl1-Left','y'		, 234]
				],

				'3000' :
				[
					['Skateboy-Right','visible'	, true],				
					['Skateboy-Right','state'	, 'walk'],
					['Skateboy-Right','x'		, -47],
					['Skateboy-Right','y'		, 244]
				],

				'3200' :
				[
					['Ambulance-Left','visible'	, true],				
					['Ambulance-Left','state'	, 'walk'],
					['Ambulance-Left','x'		, 240],
					['Ambulance-Left','y'		, 228]
				],

				'3400' :
				[
					['Bird-Left','visible'	, true],				
					['Bird-Left','state'	, 'walk'],
					['Bird-Left','x'		, 240],
					['Bird-Left','y'		, 200]
				],

				'3600' :
				[
					['Businessman-Right','visible'	, true],
					['Businessman-Right','state'	, 'walk'],
					['Businessman-Right','x'		, -51],
					['Businessman-Right','y'		, 250]
				],

				'3800' :
				[
					['Girl2-Left','visible'	, true],				
					['Girl2-Left','state'	, 'walk'],
					['Girl2-Left','x'		, 240],
					['Girl2-Left','y'		, 231]
				]
			},
			
			'chanceOver'	:
			{
				'0' :
				[			
					['PopupDialog','x'	, 0],
					['PopupDialog','y'	, 0],
					
					['ChanceOverPopup','visible',true],
					['Player','state','cry']
				]
			},
			
			'gameOver'	:
			{
				'0'	:
				[			
					['PopupDialog','x'	, 0],
					['PopupDialog','y'	, 0]
				]				
			},
			
			'stageOver' :
			{
				'0' :
				[
					['PopupDialog','x'	, 0],
					['PopupDialog','y'	, 0],
					
					['StageCompleteText','text','Stage 2 Complete'],
					['StageStartText'	,'text','Stage 3 Starts']
				]
			}
		}
	},
	
	'Stage3'	:
	{
		'type'		: 'ui.page.advanced',
	
		'states'	:['active','paused','chanceOver','gameWin','gameOver'],
	
		'layers':
		{
			'active' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','Girl1-Left','Businessman-Right','Skateboy-Right','Girl2-Right','Girl1-Right','Girl2-Left','WindowBoy','Bird-Right','Bird-Left','Businessman-Left','Businessman-Right','Skateboy-Left','Skateboy-Right','Ambulance-Left','Balloons','Water','Points','PauseButton','audioBalloonBoy','audioBird','audioBusinessman','audioDhotiUncle','audioGirl1','audioGirl2','audioGubbarra','audioSadhuBaba','audioSadhuSmoke','audioSkateboy','audioWindowOpen'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','Girl1-Left','Businessman-Right','Skateboy-Right','Girl2-Right','Girl1-Right','Girl2-Left','WindowBoy','Bird-Right','Bird-Left','Businessman-Left','Businessman-Right','Skateboy-Left','Skateboy-Right','Ambulance-Left','Balloons','Water','Points','PauseButton','audioBalloonBoy','audioBird','audioBusinessman','audioDhotiUncle','audioGirl1','audioGirl2','audioGubbarra','audioSadhuBaba','audioSadhuSmoke','audioSkateboy','audioWindowOpen']
			},
			
			'paused' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','PausedPopup'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','PausedPopup']
			},
			
			'chanceOver' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','ChanceOverPopup'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','ChanceOverPopup']
			},
			
			'gameOver' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','GameOverPopup'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','GameOverPopup']
			},
			
			'gameWin' 	: 
			{
				'update':['StageBackground','ScoreBoard','Player','Railing1','GameOverPopup','GameWinPopup'],
				'draw'	:['StageBackground','ScoreBoard','Player','Railing1','GameOverPopup','GameWinPopup']
			}
		},
		
		'defaultState': 'active',
		
		// frameline || timeline
		'frameline' :
		{
			'active' :
			{
				// 'ALL','EVEN','ODD',specific number
				'0' :
				[
					['Player','state' 	, 'stand' ],
					['Player','x' 		, 108 ],
					['Player','y' 		, 6 ],
					
					// Updating the scoreboard
					['Player','balloons' , 99 ],
					
					// Updating the Pause Button
					['PauseButton','visible' 	, true ],
					
					// Updating Layers for New Game
					['Businessman-Right','visible', false ],
					['Businessman-Right','state', 'walk' ],
	
					['Girl1-Left','visible'		, false ],
					['Girl1-Left','state'			, 'walk' ],
	
					['Skateboy-Right','visible'	, false ],
					['Skateboy-Right','state' 	, 'walk' ],
	
					['Girl2-Right','visible'		, false ],
					['Girl2-Right','state' 		, 'walk' ],
	
					['Ambulance-Left','visible'	, false ],
					['Ambulance-Left','state' 	, 'walk' ],
	
					['Bird-Right','visible'		, false ],
					['Bird-Right','state' 		, 'walk' ],
	
					['Girl1-Right','visible'	, false ],
					['Girl1-Right','state' 		, 'walk' ],
	
					['Skateboy-Left','visible'	, false ],				
					['Skateboy-Left','state' 		, 'walk' ],
	
					['Bird-Left','visible'		, false ],
					['Bird-Left','state' 		, 'walk' ],
	
					['Businessman-Left','visible', false ],				
					['Businessman-Left','state' , 'walk' ],
	
					['WindowBoy','visible'		, false ],				
					['WindowBoy','state' 		, 'walk' ],
	
					['Girl2-Left','visible'		, false ],				
					['Girl2-Left','state' 		, 'walk' ],
	
					['Girl1-Left','visible'		, false ],				
					['Girl1-Left','state' 		, 'walk' ],
	
					['Skateboy-Right','visible'	, false ],				
					['Skateboy-Right','state' 	, 'walk' ],
	
					['Ambulance-Left','visible'	, false ],				
					['Ambulance-Left','state' 	, 'walk' ],
	
					['Bird-Left','visible'		, false ],
					['Bird-Left','state' 		, 'walk' ]
				],
				
				'200':
				[
					['Ambulance-Left','visible'	,true],
					['Ambulance-Left','state'	,'walk'],
					['Ambulance-Left','x'		,240],
					['Ambulance-Left','y'		,228]
				],
				
				'400':
				[
					['Girl2-Right',	'visible'	,true] ,
					['Girl2-Right',	'state'		,'walk'] ,
					['Girl2-Right',	'x'			,-26] ,
					['Girl2-Right',	'y'			,233] 
				],
				
				'600' :
				[
					['WindowBoy','visible'	, true],				
					['WindowBoy','state'	, 'walk'],
					['WindowBoy','x'		, 10],
					['WindowBoy','y'		, 87],
					['audioSkateboy','state','play']
				],

				
				'800' :
				[
					['Girl1-Left','visible'	,true	],
					['Girl1-Left','state'	,'walk'	],
					['Girl1-Left','x'		,240	],
					['Girl1-Left','y'		,234	]
				],
				
				'1000' :
				[
					['Skateboy-Right','visible'	,true	],
					['Skateboy-Right','state'	,'walk'	],
					['Skateboy-Right','x'		, -47	],
					['Skateboy-Right','y'		,244	]
				],
				
				'1200' :
				[
					['Ambulance-Left','visible'	,true],
					['Ambulance-Left','state'	,'walk'],
					['Ambulance-Left','x'		,240],
					['Ambulance-Left','y'		,228] 
				],
				
				'1400' :
				[
					['Bird-Right','visible'	, true],
					['Bird-Right','state'	, 'walk'],
					['Bird-Right','x'		, -66],
					['Bird-Right','y'		, 180] 						
				],
				
				'1600' :
				[
					['Businessman-Left','visible', true],				
					['Businessman-Left','state'	, 'walk'],
					['Businessman-Left','x'		, 240],
					['Businessman-Left','y'		, 250]
				],
				
				'1800' :
				[
					['Girl1-Right','visible', true],
					['Girl1-Right','state'	,'walk'],
					['Girl1-Right','x'		,-34],
					['Girl1-Right','y'		, 234]
			
				],
				
				'2000' :
				[
					['Skateboy-Left','visible', true],				
					['Skateboy-Left','state', 'walk'],
					['Skateboy-Left','x', 240],
					['Skateboy-Left','y', 244]
				],
				
				'2200' :
				[
					['Businessman-Right','visible'	, true],
					['Businessman-Right','state'	, 'walk'],
					['Businessman-Right','x'		, -51],
					['Businessman-Right','y'		, 235],
					['Businessman-Right','points'	, 20]				
				],
				

				'2400' :
				[
					['Bird-Left','visible'	, true],
					['Bird-Left','state'	, 'walk'],
					['Bird-Left','x'		, 240],
					['Bird-Left','y'		, 160]
				],
				
				'2600' :
				[
					['WindowBoy','visible'	, true],				
					['WindowBoy','state'	, 'walk'],
					['WindowBoy','x'		, 10],
					['WindowBoy','y'		, 87],
					['audioSkateboy','state','play']
				],

				'2800' :
				[
					['Girl2-Left','visible'	, true],				
					['Girl2-Left','state'	, 'walk'],
					['Girl2-Left','x'		, 240],
					['Girl2-Left','y'		, 233]
				],

				'3000' :
				[
					['Girl1-Left','visible'	, true],				
					['Girl1-Left','state'	, 'walk'],
					['Girl1-Left','x'		, 240],
					['Girl1-Left','y'		, 234]
				],

				'3200' :
				[
					['Ambulance-Left','visible'	, true],				
					['Ambulance-Left','state'	, 'walk'],
					['Ambulance-Left','x'		, 240],
					['Ambulance-Left','y'		, 228]
				],

				'3400' :
				[
					['Bird-Left','visible'	, true],				
					['Bird-Left','state'	, 'walk'],
					['Bird-Left','x'		, 240],
					['Bird-Left','y'		, 200]
				],

				'3600' :
				[
					['Skateboy-Right','visible'	, true],				
					['Skateboy-Right','state'	, 'walk'],
					['Skateboy-Right','x'		, -47],
					['Skateboy-Right','y'		, 244]
				],

				'3800' :
				[
					['Businessman-Right','visible'	, true],
					['Businessman-Right','state'	, 'walk'],
					['Businessman-Right','x'		, -51],
					['Businessman-Right','y'		, 250]
				],

				'4000' :
				[
					['Girl2-Left','visible'	, true],				
					['Girl2-Left','state'	, 'walk'],
					['Girl2-Left','x'		, 240],
					['Girl2-Left','y'		, 231]
				],
				
				'4200' :
				[
					['Girl1-Right','visible', true],
					['Girl1-Right','state'	,'walk'],
					['Girl1-Right','x'		,-34],
					['Girl1-Right','y'		, 234]
			
				],
				
				'4400' :
				[
					['Ambulance-Left','visible'	, true],				
					['Ambulance-Left','state'	, 'walk'],
					['Ambulance-Left','x'		, 240],
					['Ambulance-Left','y'		, 228]
				],

				'4600' :
				[
					['Bird-Right','visible'	, true],				
					['Bird-Right','state'	, 'walk'],
					['Bird-Right','x'		, 240],
					['Bird-Right','y'		, 200]
				],

				'4800' :
				[
					['Skateboy-Left','visible'	, true],				
					['Skateboy-Left','state'	, 'walk'],
					['Skateboy-Left','x'		, -47],
					['Skateboy-Left','y'		, 244]
				],
			},
			
			'chanceOver'	:
			{
				'0' :
				[			
					['PopupDialog','x'	, 0],
					['PopupDialog','y'	, 0],
					
					['ChanceOverPopup','visible',true],
					['Player','state','cry']
				]
			},
			
			'gameOver'	:
			{
				'0'	:
				[			
					['PopupDialog','x'	, 0],
					['PopupDialog','y'	, 0]
				]				
			},
			
			'gameWin' :
			{
				'0' :
				[
					['PopupDialog','x'	, 0],
					['PopupDialog','y'	, 0]
				]
			},
			
			'paused':
			{
				'0':
				[
					//['PausedPopup','visible',true]
				]
			}
		}
	},
	
	'audioBalloonBoy':
	{
		'type'		: 'ui.layer.audio',
		
		'src'		: ['sounds/ogg/BalloonBoy.ogg'	,'sounds/mp3/BalloonBoy.mp3'],
		'srcType'	: ['audio/ogg'					,'audio/mp3'],
		
		'volume': 1,
		
		'visible':true,
		
		'state' : undefined
	},
	
	'audioBird':
	{
		'type'	: 'ui.layer.audio',
		
		'src'		: ['sounds/ogg/Bird.ogg','sounds/mp3/Bird.mp3'],
		'srcType'	: ['audio/ogg'			,'audio/mp3'],
		
		'volume': 1,
		
		'visible':true,
		
		'state' : undefined
	},
	
	'audioBusinessman':
	{
		'type'	: 'ui.layer.audio',
		
		'src'		: ['sounds/ogg/Businessman.ogg'	,'sounds/mp3/Businessman.mp3'],
		'srcType'	: ['audio/ogg'					,'audio/mp3'],
		
		'volume': 1,
		
		'visible':true,
		
		'state' : undefined
	},
	
	'audioDhotiUncle':
	{
		'type'	: 'ui.layer.audio',
		
		'src'		: ['sounds/ogg/DhotiUncle.ogg'	,'sounds/mp3/DhotiUncle.mp3'],
		'srcType'	: ['audio/ogg'					,'audio/mp3'],
		
		'volume': 1,
		
		'visible':true,
		
		'state' : undefined
	},
	
	'audioGirl1':
	{
		'type'	: 'ui.layer.audio',
		
		'src'		: ['sounds/ogg/Girl1.ogg'	,'sounds/mp3/Girl1.mp3'],
		'srcType'	: ['audio/ogg'					,'audio/mp3'],
		
		'volume': 1,
		
		'visible':true,
		
		'state' : undefined
	},
	
	'audioGirl2':
	{
		'type'	: 'ui.layer.audio',
		
		'src'		: ['sounds/ogg/Girl2.ogg'	,'sounds/mp3/Girl2.mp3'],
		'srcType'	: ['audio/ogg'					,'audio/mp3'],
		
		'volume': 1,
		
		'visible':true,
		
		'state' : undefined
	},
	
	'audioGubbarra':
	{
		'type'	: 'ui.layer.audio',
		
		'src'		: ['sounds/ogg/Gubbarra.ogg'	,'sounds/mp3/Gubbarra.mp3'],
		'srcType'	: ['audio/ogg'					,'audio/mp3'],
		
		'volume': 1,
		
		'visible':true,
		
		'state' : undefined
	},
	
	'audioSadhuBaba':
	{
		'type'	: 'ui.layer.audio',
		
		'src'		: ['sounds/ogg/SadhuBaba.ogg'	,'sounds/mp3/SadhuBaba.mp3'],
		'srcType'	: ['audio/ogg'					,'audio/mp3'],
		
		'volume': 1,
		
		'visible':true,
		
		'state' : undefined
	},
	
	'audioSadhuSmoke':
	{
		'type'	: 'ui.layer.audio',
		
		'src'		: ['sounds/ogg/SadhuSmoke.ogg'	,'sounds/mp3/SadhuSmoke.mp3'],
		'srcType'	: ['audio/ogg'					,'audio/mp3'],
		
		'volume': 1,
		
		'visible':true,
		
		'state' : undefined
	},
	
	'audioSkateboy':
	{
		'type'	: 'ui.layer.audio',
		
		'src'		: ['sounds/ogg/Skateboy.ogg'	,'sounds/mp3/Skateboy.mp3'],
		'srcType'	: ['audio/ogg'					,'audio/mp3'],
		
		'volume': 1,
		
		'visible':true,
		
		'state' : undefined
	},
	
	'audioWindowOpen':
	{
		'type'	: 'ui.layer.audio',
		
		'src'		: ['sounds/ogg/WindowOpen.ogg'	,'sounds/mp3/WindowOpen.mp3'],
		'srcType'	: ['audio/ogg'					,'audio/mp3'],
		
		'volume': 1,
		
		'visible':true,
		
		'state' : undefined
	},
	
	
/////////////////////
////// Layers ///////
/////////////////////

	'PopupDialog' :
	{
		'type'	: 'ui.layer.image',
		'src'	: 'images/PopupDialog.png',
		'visible': false,
		
		'x'		: 0,
		'y'		: 0,
		'width'	: 152,
		'height': 89
	},

	///ChanceOverPopup Layers/////
	
	'ChanceOverPopup'	:
	{
		'type'	: 'ui.layer.advanced.group',
		'visible': true,
		
		'x'		: 56,
		'y'		: 116,
		'width'	: 152,
		'height': 89,
		
		'layers':['PopupDialog','ChanceOverText','PopupScoreText','PopupScoreTextValue','ChanceOverLifeText','ChanceOverLifeTextValue','ClickHere']
	},
	
	'ChanceOverText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 34,
		'y'		: 3,
		'width'	: 6,
		'height': 6,
		
		'text'	: 'CHANCE OVER',
		'rgb'	: [255,255,255],
		'font'	: '10pt Verdana'
	},
	
	'PopupScoreText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 19,
		'y'		: 39,
		
		'text'	: 'Score :',
		'rgb'	: [255,255,255],
		'font'	: '200 12px Verdana'
	},

	'PopupScoreTextValue'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 74,
		'y'		: 39,
		'width'	: 6,
		'height': 6,
		
		'text'	: 0,
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},

	'ChanceOverLifeText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 19,
		'y'		: 57,
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
		
		'x'		: 74,
		'y'		: 57,
		'width'	: 6,
		'height': 6,
		
		'text'	: '0',
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},
	
	///StageOverPopup Layers/////
	
	///GameOverPopup Layers/////
	
	'GameOverPopup'	:
	{
		'type'	: 'ui.layer.advanced.group',
		'visible': true,
		
		'x'		: 1,
		'y'		: 1,
		'width' : 80,
		'height': 54,
		
		'layers':['PopupDialog','ChanceOverText','PopupScoreText','PopupScoreTextValue','ChanceOverLifeText','ChanceOverLifeTextValue','ClickHere']
	},
	
	'PauseButton' :
	{
		'type'	: 'ui.layer.image',
		'src'	: 'images/Pause.png',
		'visible': false,
		
		'x'		: 220,
		'y'		: 300,
		'width'	: 16,
		'height': 16
		
	},

	'GameOverText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 90,
		'y'		: 119,
		'width'	: 6,
		'height': 6,
		
		'text'	: 'GAME OVER',
		'rgb'	: [255,255,255],
		'font'	: '10pt Verdana'
	},


	'OptionText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 105,
		'y'		: 120,
		'width'	: 6,
		'height': 6,
		
		'text'	: 'OPTIONS',
		'rgb'	: [255,255,255],
		'font'	: '10pt Verdana'
	},

	'ResumeOptionText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 105,
		'y'		: 150,
		'width'	: 55,
		'height': 14,
		
		'text'	: 'RESUME',
		'rgb'	: [255,255,255],
		'font'	: '10pt Verdana'
	},

	'MenuOptionText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 105,
		'y'		: 180,
		'width'	: 42,
		'height': 14,
		
		'text'	: 'MENU',
		'rgb'	: [255,255,255],
		'font'	: '10pt Verdana'
	},
	
	'StageBackground' :
	{
		'type'	: 'ui.layer.image',
		
		'visible': true,
		
		'src'	: 'images/StageBackground.png',
				
		'x'		: 0,
		'y'		: 0
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
	
/////////////////////////
///ScoreBoard Layers/////
/////////////////////////
	
	'ScoreBoard'	:
	{
		'type'	: 'ui.layer.advanced.group',
		'visible': true,
		
		'x'		: 2,
		'y'		: 3,
		'width' : 80,
		'height': 54,
		
		'layers':['Board','ScoreText','ScoreTextValue','LifeText','LifeTextValue','BalloonText','BalloonTextValue']
	},
	
	'Board'	:
	{
		'type'	: 'ui.layer.image',
		'src'	: 'images/Scoreboard.png',
		'visible': true,
		
		'x'		: 0,
		'y'		: 0,
		'width' : 80,
		'height': 54
	},
	
	'ScoreText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': true,
		
		'x'		: 4,
		'y'		: 2,
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
		
		'x'		: 42,
		'y'		: 2,
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
		
		'x'		: 4,
		'y'		: 14,
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
		
		'x'		: 42,
		'y'		: 14,
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
		
		'x'		: 4,
		'y'		: 28,
		
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
		
		'x'		: 42,
		'y'		: 26,
		'width'	: 6,
		'height': 6,
		
		'text'	: '0',
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},

	'Player' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Player.png',
		'visible': true,
		
		'state'	: 'stand',
		
		'frames':[
					// Left Frames
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 35, 'height' : 53},
					{'xOffset' : 35, 'yOffset' : 0, 'width' : 37, 'height' : 53},
					
					// Stand Frame
					{'xOffset' : 72, 'yOffset' : 0, 'width' : 23, 'height' : 53},
					
					// Throw Frame
					{'xOffset' : 95, 'yOffset' : 0, 'width' : 23, 'height' : 53},
					
					// Right Frames
					{'xOffset' :118, 'yOffset' : 0, 'width' : 35, 'height' : 53},
					{'xOffset' :153, 'yOffset' : 0, 'width' : 37, 'height' : 53},
					
					// Cry Frames
					{'xOffset' :190, 'yOffset' : 0, 'width' : 48, 'height' : 61},
					{'xOffset' :238, 'yOffset' : 0, 'width' : 48, 'height' : 61}
				],
				
		'animation' :
		{
			'walk-left': [
						{'frame': 0,'dx': -10,'dy': 0,'time':50},
						{'frame': 1,'dx': -10,'dy': 0,'time':50}
					],
					
			'stand': [
						{'frame': 2,'dx': 0,'dy': 0,'time':200}
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
		
		'cBalloon' : 0,
		
		'score'		: 0,
		'life'		: 3,
		'balloons'	: 99
	},
	
	'Balloons' :
	{	
		'type'	: 'ui.layer.image.animation.array',
		
		'src'	: 'images/Balloons.png',
		
		'size': 15,
		
		'frames':
		[
			{'xOffset' :  0, 'yOffset' : 0, 'width' : 8, 'height' : 10},
			{'xOffset' :  8, 'yOffset' : 0, 'width' : 8, 'height' : 10},
			{'xOffset' : 16, 'yOffset' : 0, 'width' : 8, 'height' : 10},
			{'xOffset' : 24, 'yOffset' : 0, 'width' : 8, 'height' : 10}			
		],
				
		'animation' :
		{
			'active0':
			[
				{'frame': 0,'dx': 0,'dy': 5,'time':16}
			],
			
			'active1':
			[
				{'frame': 1,'dx': 0,'dy': 5,'time':16}
			],
			
			'active2':
			[
				{'frame': 2,'dx': 0,'dy': 5,'time':16}
			],
			
			'active3':
			[
				{'frame': 3,'dx': 0,'dy': 5,'time':16}
			]
		},
		
		'collisionTargets' :
		[
			'Girl1-Left'		,'Businessman-Right','Skateboy-Right'	,'Girl2-Right'		,'Girl1-Right',
			'Girl2-Left'		,'WindowBoy'		,'Bird-Right'		,'Bird-Left'		,'Businessman-Left',
			'Skateboy-Left'		,'Skateboy-Right'	,'Ambulance-Left'	,'Ambulance-Right']
	},
	
	'Water' :
	{
		'type'	: 'ui.layer.image.animation.array',
		
		'src'	: 'images/Water.png',
		
		'size': 15,
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 22, 'yOffset' : 0, 'width' : 22, 'height' : 11},
					{'xOffset' : 44, 'yOffset' : 0, 'width' : 22, 'height' : 11}
				],
				
		'animation' :
		{
			'active': [
						
						{'frame': 0,'dx': 0,'dy': 0,'time':250},
						{'frame': 1,'dx': 0,'dy': 0,'time':250},
						{'frame': 2,'dx': 0,'dy': 0,'time':250}
					]
		}
	},
	
	'Points'		:
	{
		'type'	: 'ui.layer.image.animation.array',
		'src'	: 'images/Points.png',
		
		'size'	: 15,
		
		'frames':[
					//-100
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 24, 'height' : 29},
					{'xOffset' : 24, 'yOffset' : 0, 'width' : 24, 'height' : 29},
					{'xOffset' : 48, 'yOffset' : 0, 'width' : 24, 'height' : 29},
					
					// 20
					{'xOffset' :  72, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' :  87, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' : 102, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					
					// 40
					{'xOffset' : 117, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' : 132, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' : 147, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					
					// 60
					{'xOffset' : 162, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' : 177, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' : 192, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					
					// 80
					{'xOffset' : 207, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' : 222, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					{'xOffset' : 237, 'yOffset' : 0, 'width' : 15, 'height' : 29},
					
					//100
					{'xOffset' : 252, 'yOffset' : 0, 'width' : 20, 'height' : 29},
					{'xOffset' : 272, 'yOffset' : 0, 'width' : 20, 'height' : 29},
					{'xOffset' : 292, 'yOffset' : 0, 'width' : 20, 'height' : 29},
					
					//120
					{'xOffset' : 312, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 331, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 350, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					
					//140
					{'xOffset' : 369, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 388, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 407, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					
					
					//160
					{'xOffset' : 426, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 502, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 521, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					
					//180
					{'xOffset' : 483, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 502, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					{'xOffset' : 521, 'yOffset' : 0, 'width' : 19, 'height' : 29},
					
					// 200
					{'xOffset' : 540, 'yOffset' : 0, 'width' : 23, 'height' : 29},
					{'xOffset' : 563, 'yOffset' : 0, 'width' : 23, 'height' : 29},
					{'xOffset' : 586, 'yOffset' : 0, 'width' : 23, 'height' : 29}
		 		 ],
		 		 
		'animation' :
		{
			//-100
			'-100':
			[
				{'frame': 0,'dx': 0,'dy': -1,'time':50},
				{'frame': 1,'dx': 0,'dy': -1,'time':50},
				{'frame': 2,'dx': 0,'dy': -1,'time':50}
			],
			
			// 20
			'20':
			[
				{'frame': 3,'dx': 0,'dy': -1,'time':150},
				{'frame': 4,'dx': 0,'dy': -1,'time':150},
				{'frame': 5,'dx': 0,'dy': -1,'time':150}
			],
			
			// 40
			'40':
			[
				{'frame': 6,'dx': 0,'dy': -1,'time':50},
				{'frame': 7,'dx': 0,'dy': -1,'time':50},
				{'frame': 8,'dx': 0,'dy': -1,'time':50}
			],
			
			// 60
			'60':
			[
				{'frame': 9,'dx': 0,'dy': -1,'time':50},
				{'frame': 10,'dx': 0,'dy': -1,'time':50},
				{'frame': 11,'dx': 0,'dy': -1,'time':50}
			],
			
			// 80
			'80':
			[
				{'frame': 12,'dx': 0,'dy': -1,'time':50},
				{'frame': 13,'dx': 0,'dy': -1,'time':50},
				{'frame': 14,'dx': 0,'dy': -1,'time':50}
			],
			
			//100
			'100':
			[
				{'frame': 15,'dx': 0,'dy': -1,'time':50},
				{'frame': 16,'dx': 0,'dy': -1,'time':50},
				{'frame': 17,'dx': 0,'dy': -1,'time':50}
			],
			
			//120
			'120':
			[
				{'frame': 18,'dx': 0,'dy': -1,'time':50},
				{'frame': 19,'dx': 0,'dy': -1,'time':50},
				{'frame': 20,'dx': 0,'dy': -1,'time':50}
			],
			
			//140
			'140':
			[
				{'frame': 21,'dx': 0,'dy': -1,'time':50},
				{'frame': 22,'dx': 0,'dy': -1,'time':50},
				{'frame': 23,'dx': 0,'dy': -1,'time':50}
			],
			
			
			//160
			'160':
			[
				{'frame': 24,'dx': 0,'dy': -1,'time':50},
				{'frame': 25,'dx': 0,'dy': -1,'time':50},
				{'frame': 26,'dx': 0,'dy': -1,'time':50}
			],
			
			//180
			'180':
			[
				{'frame': 27,'dx': 0,'dy': -1,'time':50},
				{'frame': 28,'dx': 0,'dy': -1,'time':50},
				{'frame': 29,'dx': 0,'dy': -1,'time':50}
			],
			
			// 200
			'200':
			[
				{'frame': 30,'dx': 0,'dy': -1,'time':50},
				{'frame': 31,'dx': 0,'dy': -1,'time':50},
				{'frame': 32,'dx': 0,'dy': -1,'time':50}
			]
		}
	},
		
	'Ambulance-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Ambulance.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 161, 'height' : 88},
					{'xOffset' : 161, 'yOffset' : 0, 'width' : 161, 'height' : 88}
				],
				
		'animation' :
		{
			'walk': 
				[
					{'frame': 0,'dx': -2,'dy': 0,'time':50},
					{'frame': 0,'dx': -1,'dy': 0,'time':50},
	
					{'frame': 1,'dx': -2,'dy': 0,'time':50},
					{'frame': 1,'dx': -1,'dy': 0,'time':50}
				],
				
			'hit': 
				[
					{'frame': 0,'dx': -6,'dy': 0,'time':50},
					{'frame': 1,'dx': -6,'dy': 0,'time':50}					
				],
				
			'run': 
				[
					{'frame': 0,'dx': -3,'dy': 0,'time':50},
					{'frame': 0,'dx': -2,'dy': 0,'time':50},
	
					{'frame': 1,'dx': -3,'dy': 0,'time':50},
					{'frame': 1,'dx': -2,'dy': 0,'time':50}
				],			
		},
		
		'points' : -100
	},

	'Ambulance-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Ambulance.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'frames':[
					{'xOffset' : 322, 'yOffset' : 0, 'width' : 161, 'height' : 88},
					{'xOffset' : 483, 'yOffset' : 0, 'width' : 161, 'height' : 88}
				],
				
		'animation' :
		{
			'walk': 
				[
					{'frame': 0,'dx': 2,'dy': 0,'time':50},
					{'frame': 0,'dx': 1,'dy': 0,'time':50},
						
					{'frame': 1,'dx': 2,'dy': 0,'time':50},
					{'frame': 1,'dx': 1,'dy': 0,'time':50}
				],

			'hit': 
				[
					{'frame': 0,'dx': 6,'dy': 0,'time':50},
					{'frame': 1,'dx': 6,'dy': 0,'time':50}					
				],
				
			'run': 
				[
					{'frame': 0,'dx': 3,'dy': 0,'time':50},
					{'frame': 0,'dx': 2,'dy': 0,'time':50},
						
					{'frame': 1,'dx': 3,'dy': 0,'time':50},
					{'frame': 1,'dx': 2,'dy': 0,'time':50}
				]
		},
		
		'points' : -100
	},

	'Bird-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Bird.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 7, 'width' : 64, 'height' : 41},
					{'xOffset' :  64, 'yOffset' : 14,'width' : 66, 'height' : 34},
					{'xOffset' : 130, 'yOffset' : 0, 'width' : 23, 'height' : 48},
					{'xOffset' : 153, 'yOffset' : 0, 'width' : 23, 'height' : 48}
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 3,'dy': -2,'time':60},
						{'frame': 0,'dx': 1,'dy': -1,'time':20},

						{'frame': 1,'dx': 3,'dy': -2,'time':60},
						{'frame': 1,'dx': 1,'dy': -1,'time':20}
					],
			'hit': 
					[
						{'frame': 2,'dx': 0,'dy': 10,'time':30},
						{'frame': 3,'dx': 0,'dy': 10,'time':30}
					],
			
			'run': 
					[
						{'frame': 2,'dx': 0,'dy': 10,'time':30},
						{'frame': 3,'dx': 0,'dy': 10,'time':30}
					]
		},
		
		'points' : 100		
	},

	'Bird-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Bird.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'frames':[
					{'xOffset' : 287, 'yOffset' : 0, 'width' : 66, 'height' : 48},
					{'xOffset' : 222, 'yOffset' : 0, 'width' : 65, 'height' : 48},
					{'xOffset' : 199, 'yOffset' : 0, 'width' : 23, 'height' : 48},
					{'xOffset' : 176, 'yOffset' : 0, 'width' : 23, 'height' : 48}
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': -2,'dy': -1,'time':50},
						{'frame': 0,'dx': -1,'dy': -1,'time':50},

						{'frame': 1,'dx': -2,'dy': -3,'time':50},
						{'frame': 1,'dx': -1,'dy': -3,'time':50}
						
					],
			'hit': 
					[
						{'frame': 2,'dx': 0,'dy': 10,'time':50},
						{'frame': 3,'dx': 0,'dy': 10,'time':50}
					],
					
			'run': 
					[
						{'frame': 2,'dx': 0,'dy': 10,'time':30},
						{'frame': 3,'dx': 0,'dy': 10,'time':30}
					]
		},
		
		'points' : 100
	},

	'Businessman-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Businessman.png',
		'visible': false,

		'state'	: 'walk',
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 51, 'height' : 63},
					{'xOffset' :  51, 'yOffset' : 0, 'width' : 51, 'height' : 63},
					{'xOffset' : 102, 'yOffset' : 0, 'width' : 51, 'height' : 63},
										
					{'xOffset' : 153, 'yOffset' : 0, 'width' : 51, 'height' : 63},
					{'xOffset' : 204, 'yOffset' : 0, 'width' : 51, 'height' : 63}
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
					],

			'hit': [
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						{'frame': 4,'dx': 0,'dy': 0,'time':50}
				   ],

			'run': [
						{'frame': 0,'dx': 3,'dy': 0,'time':30},
						{'frame': 0,'dx': 2,'dy': 0,'time':30},

						{'frame': 1,'dx': 3,'dy': 0,'time':30},
						{'frame': 1,'dx': 2,'dy': 0,'time':30},
					
						{'frame': 2,'dx': 3,'dy': 0,'time':30},
						{'frame': 2,'dx': 2,'dy': 0,'time':30},
						
						{'frame': 1,'dx': 3,'dy': 0,'time':30},
						{'frame': 1,'dx': 2,'dy': 0,'time':30},
				   ]
		},
		
		'points' : 20
	},

	'Businessman-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Businessman.png',
		'visible': false,
	
		'state'	: 'walk',
		
		'frames':[
					
					{'xOffset' : 255, 'yOffset' : 0, 'width' : 51, 'height' : 63},
					{'xOffset' : 306, 'yOffset' : 0, 'width' : 51, 'height' : 63},
					{'xOffset' : 357, 'yOffset' : 0, 'width' : 51, 'height' : 63},
			
					{'xOffset' : 408, 'yOffset' : 0, 'width' : 51, 'height' : 63},
					{'xOffset' : 459, 'yOffset' : 0, 'width' : 51, 'height' : 63}
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
					],
					
			'hit': [
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
				   ],

			'run': [
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -2,'dy': 0,'time':50},

						{'frame': 1,'dx': -3,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 1,'dx': -3,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
				   ],		
		},
		
		'points' : 20
	},

	'Girl1-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Girl1.png',
		'visible': false,
		
		'state'	: 'hit',
		
		'currentFrame' : 0,
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 34, 'height' : 64},
					{'xOffset' :  34, 'yOffset' : 0, 'width' : 34, 'height' : 64},
					{'xOffset' :  68, 'yOffset' : 0, 'width' : 34, 'height' : 64},
					{'xOffset' : 102, 'yOffset' : 0, 'width' : 34, 'height' : 64},
					{'xOffset' : 136, 'yOffset' : 0, 'width' : 34, 'height' : 64},
					
					{'xOffset' : 170, 'yOffset' : 0, 'width' : 52, 'height' : 64},
					{'xOffset' : 222, 'yOffset' : 0, 'width' : 52, 'height' : 64}
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
					],

			'hit': [
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 6,'dx': 0,'dy': 0,'time':50},
						{'frame': 6,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 6,'dx': 0,'dy': 0,'time':50},
						{'frame': 6,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 6,'dx': 0,'dy': 0,'time':50},
						{'frame': 6,'dx': 0,'dy': 0,'time':50},

						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 6,'dx': 0,'dy': 0,'time':50},
						{'frame': 6,'dx': 0,'dy': 0,'time':50},

				   ],

			'run': [
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
						{'frame': 0,'dx': 2,'dy': 0,'time':50},

						{'frame': 1,'dx': 3,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},

						{'frame': 2,'dx': 3,'dy': 0,'time':50},
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 3,'dx': 3,'dy': 0,'time':50},
						{'frame': 3,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 3,'dy': 0,'time':50},
						{'frame': 4,'dx': 2,'dy': 0,'time':50},

						{'frame': 3,'dx': 3,'dy': 0,'time':50},
						{'frame': 3,'dx': 2,'dy': 0,'time':50},

						{'frame': 2,'dx': 3,'dy': 0,'time':50},
						{'frame': 2,'dx': 2,'dy': 0,'time':50},

						{'frame': 1,'dx': 3,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 1,'dx': 3,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
				   ],		
					
		},
		'points' : 20
		
	},


	'Girl1-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Girl1.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'frames':[
					{'xOffset' : 274, 'yOffset' : 0, 'width' : 52, 'height' : 64},
					{'xOffset' : 326, 'yOffset' : 0, 'width' : 52, 'height' : 64},
					{'xOffset' : 378, 'yOffset' : 0, 'width' : 52, 'height' : 64},
					{'xOffset' : 430, 'yOffset' : 0, 'width' : 52, 'height' : 64},
					{'xOffset' : 482, 'yOffset' : 0, 'width' : 52, 'height' : 64},
					
					{'xOffset' : 586, 'yOffset' : 0, 'width' : 52, 'height' : 64},
					{'xOffset' : 534, 'yOffset' : 0, 'width' : 52, 'height' : 64},
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
						{'frame': 0,'dx': -1,'dy': 0,'time':50}

					],
					
			'hit': [
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 6,'dx': 0,'dy': 0,'time':50},
						{'frame': 6,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 6,'dx': 0,'dy': 0,'time':50},
						{'frame': 6,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 6,'dx': 0,'dy': 0,'time':50},
						{'frame': 6,'dx': 0,'dy': 0,'time':50},

						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 6,'dx': 0,'dy': 0,'time':50},
						{'frame': 6,'dx': 0,'dy': 0,'time':50}

				   ],
			'run': [

						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -2,'dy': 0,'time':50},

						{'frame': 1,'dx': -3,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},

						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 3,'dx': -3,'dy': 0,'time':50},
						{'frame': 3,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 4,'dx': -3,'dy': 0,'time':50},
						{'frame': 4,'dx': -2,'dy': 0,'time':50},

						{'frame': 3,'dx': -3,'dy': 0,'time':50},
						{'frame': 3,'dx': -2,'dy': 0,'time':50},

						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -2,'dy': 0,'time':50},

						{'frame': 1,'dx': -3,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -2,'dy': 0,'time':50}
					],
		},
		
		'points' : 20
	},
	
	'Girl2-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Girl2.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'frames':[
					{'xOffset' :   0, 'yOffset' : 0, 'width' : 26, 'height' : 78},
					{'xOffset' :  26, 'yOffset' : 0, 'width' : 21, 'height' : 78},
					{'xOffset' :  47, 'yOffset' : 0, 'width' : 20, 'height' : 78},
				
					{'xOffset' :  67, 'yOffset' : 0, 'width' : 24, 'height' : 78},				
					{'xOffset' :  91, 'yOffset' : 0, 'width' : 28, 'height' : 78},
					{'xOffset' : 119, 'yOffset' : 0, 'width' : 27, 'height' : 78}

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
					],
					
			'hit': [
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						{'frame': 5,'dx': 0,'dy': 0,'time':50},

						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
				   ],

			'run': [
						{'frame': 0,'dx': 3,'dy': 0,'time':50},
						{'frame': 0,'dx': 2,'dy': 0,'time':50},

						{'frame': 1,'dx': 3,'dy': 0,'time':50},
						{'frame': 1,'dx': 2,'dy': 0,'time':50},
						
						{'frame': 2,'dx': 3,'dy': 0,'time':50},
						{'frame': 2,'dx': 2,'dy': 0,'time':50},
				   ],		
					
		},
		
		'points' : 20
	},

	
	'Girl2-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Girl2.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'currentFrame' : 0,
		
		'frames':[

					{'xOffset' : 146, 'yOffset' : 0, 'width' : 26, 'height' : 78},
					{'xOffset' : 172, 'yOffset' : 0, 'width' : 22, 'height' : 78},
					{'xOffset' : 194, 'yOffset' : 0, 'width' : 20, 'height' : 78},
					
					{'xOffset' : 214, 'yOffset' : 0, 'width' : 25, 'height' : 78},
					{'xOffset' : 239, 'yOffset' : 0, 'width' : 26, 'height' : 78},
					{'xOffset' : 265, 'yOffset' : 0, 'width' : 27, 'height' : 78}
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
					
					],
										
			'hit': [
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						{'frame': 5,'dx': 0,'dy': 0,'time':50},

						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						{'frame': 3,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						{'frame': 4,'dx': 0,'dy': 0,'time':50},
						
						{'frame': 5,'dx': 0,'dy': 0,'time':50},
						{'frame': 5,'dx': 0,'dy': 0,'time':50}
				   ],

			'run': [
						{'frame': 0,'dx': -3,'dy': 0,'time':50},
						{'frame': 0,'dx': -2,'dy': 0,'time':50},

						{'frame': 1,'dx': -3,'dy': 0,'time':50},
						{'frame': 1,'dx': -2,'dy': 0,'time':50},
						
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -2,'dy': 0,'time':50},
				   ],		
					

		},
		
		'points' : 20		
	},
	
	'WindowBoy' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/WindowBoy.png',
		'visible': false,

		'state'	: 'walk',
		
		'frames':[
					{'xOffset' :  0, 'yOffset' : 0, 'width' : 51, 'height' : 29},
					{'xOffset' : 51, 'yOffset' : 0, 'width' : 51, 'height' : 29}
				],
				
		'animation' :
		{
			'walk': [
						{'frame': 0,'dx': 0,'dy': 0,'time':1000},
						{'frame': 1,'dx': 0,'dy': 0,'time':1050},
						{'frame': 0,'dx': 0,'dy': 0,'time':250},
						{'frame': 1,'dx': 0,'dy': 0,'time':250}
					],
			
			'hit' :[
						{'frame': 0,'dx': 0,'dy': 0,'time':250},
						{'frame': 1,'dx': 0,'dy': 0,'time':200},
						{'frame': 1,'dx': 0,'dy': 0,'time':50}
				   ]
					
		},
		
		'points' : 20
		
	},
	
	'Skateboy-Right' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Skateboy.png',
		'visible': false,
		
		'state'	: 'walk',
		
		'frames':[
					{'xOffset' : 149, 'yOffset' : 0, 'width' : 47, 'height' : 75},
					{'xOffset' : 196, 'yOffset' : 0, 'width' : 56, 'height' : 75},
					{'xOffset' : 252, 'yOffset' : 0, 'width' : 46, 'height' : 75}
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
			],
					
			'hit' : [
						{'frame': 0,'dx': 3,'dy': 0,'time':40},
						{'frame': 0,'dx': 3,'dy': 0,'time':40}
					],
					
			'run': [						
						{'frame': 0,'dx': 3,'dy': 0,'time':30},
						{'frame': 0,'dx': 3,'dy': 0,'time':30},
						{'frame': 0,'dx': 3,'dy': 0,'time':30},
						{'frame': 0,'dx': 3,'dy': 0,'time':30},
						{'frame': 0,'dx': 3,'dy': 0,'time':30},
						{'frame': 0,'dx': 3,'dy': 0,'time':30},
						{'frame': 0,'dx': 3,'dy': 0,'time':30},
						
						{'frame': 1,'dx': 3,'dy': 0,'time':30},
						{'frame': 1,'dx': 3,'dy': 0,'time':30},
						{'frame': 1,'dx': 3,'dy': 0,'time':30},
						{'frame': 1,'dx': 3,'dy': 0,'time':30},
						{'frame': 1,'dx': 3,'dy': 0,'time':30},
						{'frame': 1,'dx': 3,'dy': 0,'time':30},
						{'frame': 1,'dx': 3,'dy': 0,'time':30},
						
						{'frame': 2,'dx': 3,'dy': 0,'time':30},
						{'frame': 2,'dx': 3,'dy': 0,'time':30},
						{'frame': 2,'dx': 3,'dy': 0,'time':30},
						{'frame': 2,'dx': 3,'dy': 0,'time':30},
						{'frame': 2,'dx': 3,'dy': 0,'time':30},
						{'frame': 2,'dx': 3,'dy': 0,'time':30},
						{'frame': 2,'dx': 3,'dy': 0,'time':30}
					]
		},
		
		'points' : 40
		
	},

	'Skateboy-Left' :
	{
		'type'	: 'ui.layer.image.animation',
		'src'	: 'images/Skateboy.png',
		'visible': false,
		
		'state'	: 'walk',
		
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
						
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						
					],
					
			'hit' : [
						{'frame': 0,'dx': -3,'dy': 0,'time':40},
						{'frame': 0,'dx': -3,'dy': 0,'time':40},
					],					
			'run': [						
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
						
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						{'frame': 2,'dx': -3,'dy': 0,'time':50},
						
					],
		},
		
		'points' : 40
	},
	
	'StageOverPopup'	:
	{
		'type'	: 'ui.layer.advanced.group',
		'visible': true,
		
		'x'		: 56,
		'y'		: 116,
		'width'	: 152,
		'height': 89,
		
		'layers':['PopupDialog','PopupScoreText','PopupScoreTextValue','ChanceOverLifeText','ChanceOverLifeTextValue','ClickHere','StageCompleteText','StageStartText']
	},
	
	'ClickHere'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 14,
		'y'		: 72,
		'width'	: 100,
		'height': 11,
		
		'text'	: 'Click Here To Continue',
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},

	'StageStartText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 34,
		'y'		: 24,
		'width'	: 6,
		'height': 6,
		
		'text'	: '',
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},

	'StageCompleteText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 34,
		'y'		: 4,
		'width'	: 6,
		'height': 6,
		
		'text'	: 'Stage Clear',
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},

	'GameOverPopup'	:
	{
		'type'	: 'ui.layer.advanced.group',
		'visible': true,
		
		'x'		: 56,
		'y'		: 116,
		'width'	: 152,
		'height': 89,
		
		'layers':['PopupDialog','GameOverText','PopupScoreText','PopupScoreTextValue','ChanceOverLifeText','ChanceOverLifeTextValue']
	},
	
	'GameOverText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 34,
		'y'		: 3,
		'width'	: 6,
		'height': 6,
		
		'text'	: 'GAME OVER',
		'rgb'	: [255,255,255],
		'font'	: '10pt Verdana'
	},
	
	'GameWinPopup'	:
	{
		'type'	: 'ui.layer.advanced.group',
		'visible': true,
		
		'x'		: 56,
		'y'		: 116,
		'width'	: 152,
		'height': 89,
		
		'layers':['PopupDialog','GameWinText','PopupScoreText','PopupScoreTextValue']
	},	

	'GameWinText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 54,
		'y'		: 4,
		'width'	: 6,
		'height': 6,
		
		'text'	: 'You Won',
		'rgb'	: [255,255,255],
		'font'	: '8pt Verdana'
	},

	'PausedPopup'	:
	{
		'type'	: 'ui.layer.advanced.group',
		'visible': true,
		
		'x'		: 56,
		'y'		: 116,
		'width'	: 152,
		'height': 89,
		
		'layers':['PopupDialog','PausedText','ResumeOptionText','MenuOptionText']
	},
	
	'PausedText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 29,
		'y'		: 4,
		'width'	: 55,
		'height': 14,
		
		'text'	: 'GAME PAUSED',
		'rgb'	: [255,255,255],
		'font'	: '10pt Verdana'
	},

	'ResumeOptionText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 49,
		'y'		: 34,
		'width'	: 55,
		'height': 14,
		
		'text'	: 'RESTART',
		'rgb'	: [255,255,255],
		'font'	: '10pt Verdana'
	},
	
	'MenuOptionText'	:
	{
		'type'	: 'ui.layer.text',
		'visible': false,
		
		'x'		: 49,
		'y'		: 64,
		'width'	: 42,
		'height': 14,
		
		'text'	: 'MENU',
		'rgb'	: [255,255,255],
		'font'	: '10pt Verdana'
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
		'height': 180,
		
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
		'height': 180,
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
		'height': 180,
				
		'text'	: 'U HAVE TO SCORE HIT % IN THE FOLLOWING LEVELS TO WIN :  </br></br>LEVEL 1 - 40 %  </br>LEVEL 2 - 50%  </br>LEVEL 3 - 60%  </br>LEVEL 4 - 70%  </br>LEVEL 5 - 80%',

		'color' : 'white',
		'font'	: '8pt Verdana'
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
	
	'PopupDialog' :
	{
		'type'	: 'ui.layer.image',
		'src'	: 'images/PopupDialog.png',
		'visible': false,
		
		'x'		: 0,
		'y'		: 0,
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
	}
}
