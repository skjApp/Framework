// App's Code

var code =
{
	'loading_page'	:
	{
		'update' : function()
		{
			if(data['LoadingBarFilling']['width'] == 191)
			{
				getPage('EnableSound') ;
			}
			else if(data['LoadingBarFilling']['width'] < 190)
			{
				data['LoadingBarFilling']['width']++ ;
			}
			else if(engine['resourcesLoaded'] == true)
			{
				data['LoadingBarFilling']['width']++ ;
			}
		}
	},
	
	'EnableSound'	:
	{
		'update' : function()
		{
			if(engine['touchLayer'] == 'Yes')
			{
				getPage('Splash') ;
				data['app']['settings-sound'] = true ;
			}
			else if(engine['touchLayer'] == 'No')
			{
				getPage('Splash') ;
			}
		}
	},
	
	'Splash'	:
	{
		'update' : function()
		{
			//consoleDiv.innerHTML = data['Splash']['time'] ;
			
			if(data['Splash']['time'] > 1000)
			{
				getPage('Menu','NewGame') ;
			}
		}
	},
	
	'Menu'	:
	{
		'update' : function()
		{	
			// Touch Event Code
			if(engine['touchLayer'] == 'MenuOptionNewGame')
			{
				getPage('Stage1') ;
			}			
			else if(engine['touchLayer'] == 'MenuOptionAboutUs')
			{
				getPage('AboutUs') ;
			}
			else if(engine['touchLayer'] == 'MenuOptionHelpText')
			{
				getPage('Help1') ;
			}
			else if(engine['touchLayer'] == 'MenuOptionExitText')
			{
				getPage('Exit') ;
			}
			
			// Key Event Code
			if(data['Menu']['state'] == 'NewGame')
			{
				data['SelectionMenuOption']['y'] = 114 ;
				data['MenuOptionNewGame']['currentFrame'] = 1 ;
				data['MenuOptionAboutUs']['currentFrame'] = 0 ;
				data['MenuOptionHelpText']['currentFrame'] = 0 ;
				data['MenuOptionExitText']['currentFrame'] = 0 ;
				
				if(engine['keyDown']['key'] == KEY_ENTER)
				{
					data['Player']['score'] = 0 ;
					data['Player']['life']  = 3 ;
					data['Player']['balloons']  = 99 ;
					getPage('Stage1','active') ;
				}
				else if(engine['keyDown']['key'] == KEY_DOWN && engine['keyDown']['active'] == true)
				{
					data['Menu']['state'] = 'AboutUs' ;
				}	
			}
			else if(data['Menu']['state'] == 'AboutUs')
			{
				data['SelectionMenuOption']['y'] = 154 ;
				data['MenuOptionNewGame']['currentFrame'] = 0 ;
				data['MenuOptionAboutUs']['currentFrame'] = 1 ;
				data['MenuOptionHelpText']['currentFrame'] = 0 ;
				data['MenuOptionExitText']['currentFrame'] = 0 ;
				
				if(engine['keyDown']['key'] == KEY_UP && engine['keyDown']['active'] == true)
				{
					data['Menu']['state'] = 'NewGame' ;
				}
				else if(engine['keyDown']['key'] == KEY_ENTER)
				{
					getPage('AboutUs') ;
				}
				else if(engine['keyDown']['key'] == KEY_DOWN && engine['keyDown']['active'] == true)
				{
					data['Menu']['state'] = 'Help' ;
				}				
			}
			else if(data['Menu']['state'] == 'Help')
			{
				data['SelectionMenuOption']['y'] = 194 ;
				data['MenuOptionNewGame']['currentFrame'] = 0 ;
				data['MenuOptionAboutUs']['currentFrame'] = 0 ;
				data['MenuOptionHelpText']['currentFrame'] = 1 ;
				data['MenuOptionExitText']['currentFrame'] = 0 ;
				
				if(engine['keyDown']['key'] == KEY_UP && engine['keyDown']['active'] == true)
				{
					data['Menu']['state'] = 'AboutUs' ;
				}
				else if(engine['keyDown']['key'] == KEY_ENTER)
				{
					getPage('Help1') ;
				}
				else if(engine['keyDown']['key'] == KEY_DOWN && engine['keyDown']['active'] == true)
				{
					data['Menu']['state'] = 'Exit' ;
				}		
			}
			else if(data['Menu']['state'] == 'Exit')
			{
				data['SelectionMenuOption']['y'] = 234 ;
				data['MenuOptionNewGame']['currentFrame'] = 0 ;
				data['MenuOptionAboutUs']['currentFrame'] = 0 ;
				data['MenuOptionHelpText']['currentFrame'] = 0 ;
				data['MenuOptionExitText']['currentFrame'] = 1 ;
				
				if(engine['keyDown']['key'] == KEY_UP && engine['keyDown']['active'] == true)
				{
					data['Menu']['state'] = 'Help' ;
				}
				else if(engine['keyDown']['key'] == KEY_ENTER)
				{
					getPage('Exit') ;
				}				
			}
		}
	},
	
	'AboutUs'	:
	{
		'update' : function()
		{
			data['AboutUsText']['visible'] = true ;
			
			if(engine['touchLayer'] == 'Back')
			{
				data['AboutUsText']['visible'] = false ;
				getPage('Menu') ;
			}
		}
	},
	
	'Help1'	:
	{
		'update' : function()
		{
			data['Help1Text']['visible'] = true ;
			
			if(engine['touchLayer'] == 'Next')
			{
				data['Help1Text']['visible'] = false ;
				getPage('Help2') ;
			}
			else if(engine['touchLayer'] == 'Back')
			{
				data['Help1Text']['visible'] = false ;
				getPage('Menu') ;
			}
		}
	},
	
	'Help2'	:
	{
		'update' : function()
		{	
			data['Help2Text']['visible'] = true ;
			
			if(engine['touchLayer'] == 'MenuBlueText')
			{
				data['Help2Text']['visible'] = false ;
				getPage('Menu') ;
			}
			else if(engine['touchLayer'] == 'Back')
			{
				data['Help2Text']['visible'] = false ;
				getPage('Help1') ;
			}
		}
	},
	
	'Exit'	:
	{
		'update' : function()
		{	
			if(engine['touchLayer'] == 'Yes')
			{
				closeApp() ;
			}
			else if(engine['touchLayer'] == 'No')
			{
				getPage('Menu') ;
			}
		}
	},
	
	'Stage1'	:
	{
		'update' : function()
		{	
			if(data['Stage1']['state'] == 'chanceOver')	// Chance Over
			{
				data['PopupScoreTextValue']['text']			= data['Player']['score'] ;
				data['ChanceOverLifeTextValue']	['text']	= data['Player']['life'] ;
			}

			else if(data['Stage1']['state'] == 'stageOver')
			{
				data['PopupScoreTextValue']['text']			= data['Player']['score'] ;
				data['ChanceOverLifeTextValue']	['text']	= data['Player']['life'] ;
			}
			
			// Game Over
			else if(data['Stage1']['state'] == 'gameOver')
			{
				data['PopupScoreTextValue']['text']	= data['Player']['score'] ;
				
				data['GameOverPopup']['visible']			= true ;
				
				data['Player']['state'] = 'cry' ;	
			}

			// active
			else if(data['Stage1']['state'] == 'active')
			{				
				if(data['Stage1']['updateCounter'] == 4200)
				{
					getPage('Stage1','stageOver') ;
				}
			}
		}
	},

	'Stage2'	:
	{
		'update' : function()
		{
			if(data['Stage2']['state'] == 'chanceOver')	// Chance Over
			{
				data['PopupScoreTextValue']['text']	= data['Player']['score'] ;
				data['ChanceOverLifeTextValue']	['text']	= data['Player']['life'] ;
			}
			
			else if(data['Stage2']['state'] == 'stageOver')
			{
				data['PopupScoreTextValue']['text']			= data['Player']['score'] ;
				data['ChanceOverLifeTextValue']	['text']	= data['Player']['life'] ;
			}

			// Game Over
			else if(data['Stage2']['state'] == 'gameOver')
			{
				data['PopupScoreTextValue']['text']	= data['Player']['score'] ;
				
				data['GameOverPopup']['visible']			= true ;
				
				data['Player']['state'] = 'cry' ;	
			}
			
			else if(data['Stage2']['state'] == 'active')
			{
				if(data['Stage2']['updateCounter'] == 4200)
				{
					getPage('Stage2','stageOver') ;
				}
			}
		}		
	},
	
	'Stage3'	:
	{
		'update' : function()
		{
			if(data['Stage3']['state'] == 'chanceOver')	// Chance Over
			{
				data['PopupScoreTextValue']['text']	= data['Player']['score'] ;
				data['ChanceOverLifeTextValue']	['text']	= data['Player']['life'] ;
			}
			
			else if(data['Stage3']['state'] == 'stageOver')
			{
				data['PopupScoreTextValue']['text']			= data['Player']['score'] ;
				data['ChanceOverLifeTextValue']	['text']	= data['Player']['life'] ;
			}

			// Game Over
			else if(data['Stage3']['state'] == 'gameOver')
			{
				data['PopupScoreTextValue']['text']	= data['Player']['score'] ;
				
				data['GameOverPopup']['visible']			= true ;
				
				data['Player']['state'] = 'cry' ;	
			}
			else if(data['Stage3']['state'] == 'gameWin')
			{
				data['PopupScoreTextValue']['text']	= data['Player']['score'] ;	
			}
			else if(data['Stage3']['state'] == 'active')
			{
				if(data['Stage3']['updateCounter'] == 4200)
				{
					getPage('Stage3','gameWin') ;
				}
			}
		}
	},

	'Player'	:
	{
		'update' : function()
		{
			// Input Events - Key and Mouse/Single Touch
			
			if(data['Player']['state'] == 'stand')
			{
				if(engine['keyDown']['key'] == KEY_LEFT)
				{
					data['Player']['state'] 	= 'walk-left' ;
				}
				else if(engine['keyDown']['key'] == KEY_RIGHT)
				{
					data['Player']['state'] 	= 'walk-right' ;
				}
				else if(engine['keyDown']['key'] == KEY_ENTER)
				{
					if(data['Player']['balloons'] > 0)
					{
						data['Player']['balloons']-- ;
						
						data['Player']['state'] 	= 'throw' ;
						
						var index = data['Player']['cBalloon'] ;
						
						data['Balloons']['state'] 	[index]= 'active' + getRandomInteger(0, 3) ;
						
						data['Balloons']['visible']	[index]= true ;
						data['Balloons']['x'] 		[index]= data['Player']['x'] + 10 ;
						data['Balloons']['y'] 		[index]= data['Player']['y'] + 32 ;
						
						if(index < data['Balloons']['size'] - 1)
						{
							data['Player']['cBalloon']++ ;
						}
						else
						{
							data['Player']['cBalloon'] = 0 ;
						}
					}
				}
				else if(engine['keyDown']['active'] == false && engine['mouseDown']['active'] == true)
				{
					if(engine['mouseDown']['clientY'] < 67)
					{
						if(engine['touchLayer'] == 'Player')
						{
							if(data['Player']['balloons'] > 0)
							{
								data['Player']['balloons']-- ;
							
								data['Player']['state'] 	= 'throw' ;
					
								var index = data['Player']['cBalloon'] ;
							
								data['Balloons']['state'] 	[index]= 'active' + getRandomInteger(0, 3) ;
								data['Balloons']['visible']	[index]= true ;
								data['Balloons']['x'] 		[index]= data['Player']['x'] + 10 ;
								data['Balloons']['y'] 		[index]= data['Player']['y'] + 32 ;
								
								if(index < data['Balloons']['size'] - 1)
								{
									data['Player']['cBalloon']++ ;
								}
								else
								{
									data['Player']['cBalloon'] = 0 ;
								}
							}
						}
						else
						{
							var targetX = engine['mouseDown']['clientX'] ;
							
							// Move Left
							if(targetX < data['Player']['x'])
							{
								data['Player']['state'] 	= 'walk-left' ;
							}
							
							// Move Right
							else if(targetX > data['Player']['x'])
							{
								data['Player']['state'] 	= 'walk-right' ;
							}
						}
					}
				}
			}
			else if(data['Player']['state'] == 'walk-left')
			{
				if(engine['keyDown']['active'] == false && engine['mouseDown']['active'] == false)
				{
					data['Player']['state'] = 'stand' ;
					engine['mouseDown']['active'] = false ;
				}
				else if(engine['keyDown']['active'] == false && engine['mouseDown']['active'] == true)
				{
					var targetX = engine['mouseDown']['clientX'] ;
					
					if(targetX > data['Player']['x'] + 5)
					{
						data['Player']['state'] = 'stand' ;
						engine['mouseDown']['active'] = false ;
					}
				}
			}
			else if(data['Player']['state'] == 'walk-right')
			{
				if(engine['keyDown']['active'] == false && engine['mouseDown']['active'] == false)
				{
					data['Player']['state'] = 'stand' ;
					engine['mouseDown']['active'] = false ;
				}
				else if(engine['keyDown']['active'] == false && engine['mouseDown']['active'] == true)
				{
					var targetX = engine['mouseDown']['clientX'] ;
					
					if(targetX < data['Player']['x'] + 18)
					{
						data['Player']['state'] = 'stand' ;
						engine['mouseDown']['active'] = false ;
					}
				}
			}
			else if(data['Player']['state'] == 'throw')
			{
				if(engine['keyDown']['active'] == false && engine['mouseDown']['active'] == false)
				{
					data['Player']['state'] = 'stand' ;
				}
			}
			
			// Bounding Player Within Screen
			if(data['Player']['x'] < -18)
			{
				data['Player']['x'] = -8 ;
				data['Player']['state'] = 'stand' ;
			}
			else if(data['Player']['x'] > 240 - 18)
			{
				data['Player']['x'] = 240 - 18 ;
				data['Player']['state'] = 'stand' ;
			}
		}
	},
	
	'Businessman-Right' :
	{
		'update' : function()
		{	
			if(data['Businessman-Right']['state'] == 'hit')
			{
				if(data['Businessman-Right']['animationIndex'] == 11)
				{
					data['Businessman-Right']['state']	= 'run' ;
				}
			}
		}
	},

	'Businessman-Left' :
	{
		'update' : function()
		{	
			if(data['Businessman-Left']['state'] == 'hit')
			{
				if(data['Businessman-Left']['animationIndex'] == 11)
				{
					data['Businessman-Left']['state']	= 'run' ;
				}
			}
		}
	},

	'Girl1-Left' :
	{
		'update' : function()
		{	
			if(data['Girl1-Left']['state'] == 'hit')
			{
				if(data['Girl1-Left']['animationIndex'] == 15)
				{
					data['Girl1-Left']['state']	= 'run' ;
				}
			}
		}
	},

	'Girl1-Right' :
	{
		'update' : function()
		{	
			if(data['Girl1-Right']['state'] == 'hit')
			{
				if(data['Girl1-Right']['animationIndex'] == 15)
				{
					data['Girl1-Right']['state']	= 'run' ;
				}
			}
		}
	},

	'Skateboy-Right' :
	{
		'update' : function()
		{	
			if(data['Skateboy-Right']['state'] == 'hit')
			{
				//consoleDiv.innerHTML = 'bbc' + data['Skateboy-Right']['animationIndex'] ;
				if(data['Skateboy-Right']['animationIndex'] == 1)
				{
					data['Skateboy-Right']['state']	= 'run' ;
				}
			}
		}
	},

	'Skateboy-Left' :
	{
		'update' : function()
		{	
			if(data['Skateboy-Left']['state'] == 'hit')
			{
				if(data['Skateboy-Left']['animationIndex'] == 1)
				{
					data['Skateboy-Left']['state']	= 'run' ;
				}
			}
		}
	},

	'Girl2-Right' :
	{
		'update' : function()
		{	
			if(data['Girl2-Right']['state'] == 'hit')
			{
				if(data['Girl2-Right']['animationIndex'] == 17)
				{
					data['Girl2-Right']['state']	= 'run' ;
				}
			}
		}
	},

	'Girl2-Left' :
	{
		'update' : function()
		{	
			if(data['Girl2-Left']['state'] == 'hit')
			{
				if(data['Girl2-Left']['animationIndex'] == 17)
				{
					data['Girl2-Left']['state']	= 'run' ;
				}
			}
		}
	},

	'WindowBoy' :
	{
		'update' : function()
		{
			if(data['WindowBoy']['state'] == 'walk')
			{
				if(data['WindowBoy']['animationIndex'] == 3 && data['WindowBoy']['frameTime'] >= 250 )
				{
					data['WindowBoy']['state']	= undefined ;
					data['WindowBoy']['visible']= false ;
				}
			}
			else if(data['WindowBoy']['state'] == 'hit')
			{
				if(data['WindowBoy']['animationIndex'] == 2)
				{
					data['WindowBoy']['state']	= undefined ;
					data['WindowBoy']['visible']= false ;
				}
			}
		}
	},

	'Bird-Left' :
	{
		'update' : function()
		{	
			if(data['Bird-Left']['state'] == 'walk')
			{	
				if(checkLayerCollision('Bird-Left', 'Player') == true)
				{
					var stage = data['app']['currentPage'] ;
					
					data['Bird-Left']['state']	= 'walk' ;
					data['Bird-Left']['visible']= false ;
					
					data['Player']['life']-- ;
					
					// Impacting Player's Life
					if(data['Player']['life'] == -1)
					{
						getPage(stage,'gameOver') ;
					}
					else
					{
						getPage(stage,'chanceOver') ;
					}
				}
			}
			else if(data['Bird-Left']['state'] == 'hit')
			{
				if(data['Bird-Left']['y']  > 320)
				{
					data['Bird-Left']['state']		= 'walk' ;
					data['Bird-Left']['visible']	= false ;
				}
			}
		}
	},

	'Bird-Right' :
	{
		'update' : function()
		{
			if(data['Bird-Right']['state'] == 'walk')
			{				
				if(checkLayerCollision('Bird-Right', 'Player') == true)
				{
					var stage = data['app']['currentPage'] ;
					data['Bird-Right']['state']		= 'walk' ;
					data['Bird-Right']['visible']	= false ;
					
					data['Player']['life']-- ;
					
					if(data['Player']['life'] == -1)
					{
						getPage(stage,'gameOver') ;
					}
					else
					{
						getPage(stage,'chanceOver') ;
					}
				}
			}
			else if(data['Bird-Right']['state'] == 'hit')
			{
				if(data['Bird-Right']['y']  > 320)
				{
					data['Bird-Right']['state']		= 'walk' ;
					data['Bird-Right']['visible']	= false ;
				}
			}
		}
	},

	'Balloons'	:
	{
		'update' : function()
		{
			// Balloon Character Hit and Road Hit
			for(var i = 0; i < data['Balloons']['size']; i++)
			{
				if(data['Balloons']['state'][i] == 'active0' || data['Balloons']['state'][i] == 'active1' || data['Balloons']['state'][i] == 'active2' || data['Balloons']['state'][i] == 'active3')
				{
					// Balloon Character Hit
					var layersCollided = checkLayerCollisions('Balloons',data['Balloons']['collisionTargets']) ;
					//consoleDiv.innerHTML = JSON.stringify(layersCollided,undefined,3) ;
					
					if(layersCollided != undefined)
					{
						var index = layersCollided['layer1Index'] ;
						
						// Impact on Balloon
						data['Balloons']['state'][index] 		= undefined ;
						data['Balloons']['visible'][index]		= false ;
						
						// Impact on character
						var character = layersCollided['layer2'] ;
						
						if(data[character]['state'] == 'walk')
						{
							data[character]['state'] = 'hit' ;
						}
						else if(data[character]['state'] == 'hit')
						{
							if(data[character]['animation']['run'] != undefined)
							{
								data[character]['state'] = 'run' ;
							}
						}
						
						data[character]['animationIndex']	= 0 ;
						
						// Playing sounds for character hit
						if(character == 'Businessman-Right' || character == 'Businessman-Left')
						{
							data['audioBusinessman']['state'] = 'play' ;
						}
						else if(character == 'Bird-Right' || character == 'Bird-Left')
						{
							data['audioBird']['state'] = 'play' ;
						}
						else if(character == 'Girl1-Right' || character == 'Girl1-Left')
						{
							data['audioGirl1']['state'] = 'play' ;
						}
						else if(character == 'Girl2-Right' || character == 'Girl2-Left')
						{
							data['audioGirl2']['state'] = 'play' ;
						}
						else if(character == 'Skateboy-Right' || character == 'Skateboy-Left')
						{
							data['audioSkateboy']['state'] = 'play' ;
						}
						else
						{
							data['audioGubbarra']['state'] = 'play' ;
						}
						
						// Impact on Player's score
						data['Player']['score'] 	+= data[character]['points'] ;
						
						// Impact on Points
						data['Points']['state'][index]	= (data[character]['points']).toString() ;
						
						if(data[character]['points'] >= 0 && data[character]['points'] <= 180)
						{
							data[character]['points'] += 20 ;
						}
						
						data['Points']['x'][index]		= data['Balloons']['x'][index] ;
						data['Points']['y'][index]		= data['Balloons']['y'][index] - 18 ;
						
						data['Points']['visible'][index] = true ;
					}
					
					// Balloon Road Hit
					if(data['Balloons']['y'][i] > 300)
					{
						data['Balloons']['state']	[i] = undefined ;
						data['Balloons']['visible']	[i]	= false ;
						
						data['Water']['state'] 	[i]= 'active' ;
						data['Water']['visible'][i]= true ;
						data['Water']['x'] 		[i]= data['Balloons']['x'][i] ;
						data['Water']['y'] 		[i]= data['Balloons']['y'][i] ;
						
						data['audioGubbarra']['state'] = 'play' ;
						//consoleDiv.innerHTML = 'C ' + i + ' ' + data['Water']['animationIndex'][i] ;
					}
				}
			}
		}
	},
	
	'Water'		:
	{
		'update' : function()
		{
			for(var i = 0; i < data['Water']['size']; i++)
			{
				if(data['Water']['state'][i] == 'active')
				{
					if(data['Water']['animationIndex'][i] == 2)
					{
						data['Water']['state'][i]	= undefined ;
						data['Water']['visible'][i]	= false ;
					}
				}
			}
		}
	},
	
	'Points'		:
	{
		'update' : function()
		{
			for(var i = 0; i < data['Points']['size']; i++)
			{
				if(data['Points']['visible'][i] == true)
				{
					if(data['Points']['animationIndex'][i] == 2)
					{
						data['Points']['state'][i]	= undefined ;
						data['Points']['visible'][i]= false ;
					}
				}
			}
		}
	},
	
	'ScoreTextValue'		:
	{
		'update' : function()
		{
			data['ScoreTextValue']['text'] = data['Player']['score'] ;
		}
	},

	'LifeTextValue'		:
	{
		'update' : function()
		{
			if(data['Player']['life'] > -1)
			{
				data['LifeTextValue']['text'] = data['Player']['life'] ;
			}
			else
			{
				data['LifeTextValue']['text'] = 0 ;
			}
		}
	},

	'BalloonTextValue'		:
	{
		'update' : function()
		{
			data['BalloonTextValue']['text'] = data['Player']['balloons'] ;
		}
	},
	
	'PauseButton'	:
	{
		'update' : function()
		{
			if(engine['touchLayer'] == 'PauseButton')
			{	
				data['PauseButton']['visible'] = false ;
				
				var stage = data['app']['currentPage'] ;
				getPage(stage,'paused') ;
			}
		}
	},
	
	'ResumeOptionText'	:
	{
		'update' : function()
		{
			if(engine['touchLayerPart'] == 'ResumeOptionText')
			{	
				//data['PausedPopup']['visible'] 	= false ;
				
				data['PauseButton']['visible'] = true ;
					
				var stage = data['app']['currentPage'] ;
				getPage(stage,'active') ;
			}
			
		}
	},
	
	'MenuOptionText'	:
	{
		'update' : function()
		{
			if(engine['touchLayerPart'] == 'MenuOptionText')
			{
				getPage('Menu','NewGame') ;
			}
			
		}
	},
	
	'ChanceOverPopup'	:
	{
		'update' : function()
		{
			if(engine['touchLayer'] == 'ChanceOverPopup')
			{
				var stage = data['app']['currentPage'] ;
				
				getPage(stage, 'active') ;
			}
		}
	},
	
	'GameOverPopup'	:
	{
		'update' : function()
		{
			if(engine['touchLayer'] == 'GameOverPopup')
			{
				var stage = data['app']['currentPage'] ;
				
				getPage('Menu', 'NewGame') ;
			}
		}
	},
	
	'StageOverPopup'	:
	{
		'update' : function()
		{
			if(engine['touchLayer'] == 'StageOverPopup')
			{
				var stage = data['app']['currentPage'] ;
				
				if(stage == 'Stage1')
				{
					getPage('Stage2', 'active') ;
				}
				else if(stage == 'Stage2')
				{
					getPage('Stage3', 'active') ;
				}
			}
		}
	},
	
	'GameWinPopup'	:
	{
		'update' : function()
		{
			if(engine['touchLayer'] == 'GameWinPopup')
			{
				var stage = data['app']['currentPage'] ;
				
				getPage('Menu', 'NewGame') ;
			}
		}
	}
}
