var code =
{
	'loading_page'	:
	{
		'update' : function()
		{
			if(data['LoadingBarFilling']['width'] < 191)
			{
				data['LoadingBarFilling']['width']++ ;
			}
			else
			{
				getPage('EnableSound') ;
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
			if(data['Splash']['time'] > 1000)
			{
				getPage('Menu') ;
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
					getPage('Stage1') ;
				}
				else if(engine['keyDown']['key'] == KEY_DOWN)
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
				
				if(engine['keyDown']['key'] == KEY_UP)
				{
					data['Menu']['state'] = 'NewGame' ;
				}
				else if(engine['keyDown']['key'] == KEY_ENTER)
				{
					getPage('AboutUs') ;
				}
				else if(engine['keyDown']['key'] == KEY_DOWN)
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
				
				if(engine['keyDown']['key'] == KEY_UP)
				{
					data['Menu']['state'] = 'AboutUs' ;
				}
				else if(engine['keyDown']['key'] == KEY_ENTER)
				{
					getPage('Help1') ;
				}
				else if(engine['keyDown']['key'] == KEY_DOWN)
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
				
				if(engine['keyDown']['key'] == KEY_UP)
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
			updateLayer('AboutUsText') ;
			
			if(engine['touchLayer'] == 'Back')
			{
				data['AboutUsText']['visible'] = false ;
				updateLayer('AboutUsText') ;
				getPage('Menu') ;
			}
		}
	},

	
	'Help1'	:
	{
		'update' : function()
		{
			data['Help1Text']['visible'] = true ;
			updateLayer('Help1Text') ;
			
			if(engine['touchLayer'] == 'Next')
			{
				data['Help1Text']['visible'] = false ;
				updateLayer('Help1Text') ;
				getPage('Help2') ;
			}
			else if(engine['touchLayer'] == 'Back')
			{
				data['Help1Text']['visible'] = false ;
				updateLayer('Help1Text') ;
				getPage('Menu') ;
			}
		}
	},
	
	'Help2'	:
	{
		'update' : function()
		{	
			data['Help2Text']['visible'] = true ;
			updateLayer('Help2Text') ;
			
			if(engine['touchLayer'] == 'MenuBlueText')
			{
				getPage('Menu') ;
			}
			else if(engine['touchLayer'] == 'Back')
			{
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
			// consoleDiv.innerHTML = consoleDiv.innerHTML + ' : ' + data['Stage1']['updateCounter'] + ' ' + data['Stage1']['time']  ;
			
			if(data['Stage1']['updateCounter'] == 0)
			{	
				data['BackgroundSky']['x'] = 0 ;
				data['BackgroundSky']['y'] = 0 ;
				
				data['Player']['x'] = 108 ;
				data['Player']['y'] = 6 ;
			}

			else if(data['Stage1']['updateCounter'] == 150)
			{
				data['Businessman-Right']['visible']= true ;
				data['Businessman-Right']['state']	= 'walk' ;
				data['Businessman-Right']['x']		= -51 ;
				data['Businessman-Right']['y']		= 250 ;
			}
			
			else if(data['Stage1']['updateCounter'] == 300)
			{
				data['Girl1-Left']['visible']	= true ;
				data['Girl1-Left']['state']		= 'walk' ;
				data['Girl1-Left']['x']			= 240 ;
				data['Girl1-Left']['y']			= 234 ;
				
				// data['Points20']['visible']		= true ;
				// data['Points20']['state']		= 'active' ;
				// updateLayer('Points20') ;
			}
			
			else if(data['Stage1']['updateCounter'] == 450)
			{
				data['Skateboy-Right']['visible']	= true ;
				data['Skateboy-Right']['state'] = 'walk' ;
				data['Skateboy-Right']['x']		= -47 ;
				data['Skateboy-Right']['y']		= 244 ;
			}
			
			else if(data['Stage1']['updateCounter'] == 600)
			{
				data['Girl2-Right']['visible']		= true ;
				data['Girl2-Right']['state'] 		= 'walk' ;
				data['Girl2-Right']['x']			= -26 ;
				data['Girl2-Right']['y']			= 233 ;
			}

			else if(data['Stage1']['updateCounter'] == 750)
			{
				data['Ambulance-Left']['visible']	= true ;
				data['Ambulance-Left']['state'] 	= 'walk' ;
				data['Ambulance-Left']['x']			= 240 ;
				data['Ambulance-Left']['y']			= 228 ;
			}

			else if(data['Stage1']['updateCounter'] == 900)
			{
				data['Businessman-Right']['visible']= true ;
				data['Businessman-Right']['state']	= 'walk' ;
				data['Businessman-Right']['x']		= -51 ;
				data['Businessman-Right']['y']		= 235 ;
			}
			
			else if(data['Stage1']['updateCounter'] == 1050)
			{
				data['Bird-Right']['visible']	= true ;
				data['Bird-Right']['state'] 	= 'walk' ;
				data['Bird-Right']['x']			= -66;
				data['Bird-Right']['y']			= 180 ;
			}

			else if(data['Stage1']['updateCounter'] == 1200)
			{
				data['Girl1-Right']['visible']		= true ;
				data['Girl1-Right']['state'] 		= 'walk' ;
				data['Girl1-Right']['x']			= -34 ;
				data['Girl1-Right']['y']			= 234 ;
			}
			else if(data['Stage1']['updateCounter'] == 1350)
			{				
				data['Skateboy-Left']['visible']	= true ;				
				data['Skateboy-Left']['state'] 		= 'walk' ;
				data['Skateboy-Left']['x']			= 240 ;
				data['Skateboy-Left']['y']			= 244 ;
			}
			else if(data['Stage1']['updateCounter'] == 1500)
			{				
				data['Bird-Right']['visible']	= true ;				
				data['Bird-Right']['state'] 	= 'walk' ;
				data['Bird-Right']['x']			= -66 ;
				data['Bird-Right']['y']			= 150 ;
			}

			else if(data['Stage1']['updateCounter'] == 1650)
			{				
				data['Businessman-Left']['visible']		= true ;				
				data['Businessman-Left']['state'] 		= 'walk' ;
				data['Businessman-Left']['x']			= 240 ;
				data['Businessman-Left']['y']			= 250 ;
			}
			else if(data['Stage1']['updateCounter'] == 650)
			{				
				data['WindowBoy']['visible']	= true ;				
				data['WindowBoy']['state'] 		= 'walk' ;
				data['WindowBoy']['x']			= 10 ;
				data['WindowBoy']['y']			= 87 ;
			}
			else if(data['Stage1']['updateCounter'] == 1950)
			{				
				data['Girl2-Left']['visible']	= true ;				
				data['Girl2-Left']['state'] 	= 'walk' ;
				data['Girl2-Left']['x']			= 240 ;
				data['Girl2-Left']['y']			= 233 ;
			}
			else if(data['Stage1']['updateCounter'] == 2100)
			{				
				data['Girl1-Left']['visible']	= true ;				
				data['Girl1-Left']['state'] 	= 'walk' ;
				data['Girl1-Left']['x']			= 240 ;
				data['Girl1-Left']['y']			= 234 ;
			}
			else if(data['Stage1']['updateCounter'] == 2250)
			{				
				data['Skateboy-Right']['visible']	= true ;				
				data['Skateboy-Right']['state'] 	= 'walk' ;
				data['Skateboy-Right']['x']			= -47 ;
				data['Skateboy-Right']['y']			= 244 ;
			}
			else if(data['Stage1']['updateCounter'] == 2400)
			{				
				data['Ambulance-Left']['visible']	= true ;				
				data['Ambulance-Left']['state'] 	= 'walk' ;
				data['Ambulance-Left']['x']			= 240 ;
				data['Ambulance-Left']['y']			= 228 ;
			}

			else if(data['Stage1']['updateCounter'] == 2550)
			{				
				data['Bird-Left']['visible']	= true ;				
				data['Bird-Left']['state'] 		= 'walk' ;
				data['Bird-Left']['x']			= 240 ;
				data['Bird-Left']['y']			= 200 ;
			}
			else if(data['Stage1']['updateCounter'] == 2700)
			{				
				data['Businessman-Right']['visible']= true ;
				data['Businessman-Right']['state']	= 'walk' ;
				data['Businessman-Right']['x']		= -51 ;
				data['Businessman-Right']['y']		= 250 ;
			}
			else if(data['Stage1']['updateCounter'] == 2850)
			{				
				data['Girl2-Left']['visible']	= true ;				
				data['Girl2-Left']['state'] 	= 'walk' ;
				data['Girl2-Left']['x']			= 240 ;
				data['Girl2-Left']['y']			= 231 ;
			}
		}
	},

	'Stage2'	:
	{
		'update' : function()
		{
			if(data['Stage2']['updateCounter'] == 0)
			{	
				data['BackgroundSky']['x'] = 0 ;
				data['BackgroundSky']['y'] = 0 ;

				data['Player']['x'] = 108 ;
				data['Player']['y'] = 6 ;

			}

			else if(data['Stage2']['updateCounter'] == 150)
			{
				data['Girl1-Right']['visible']		= true ;
				data['Girl1-Right']['state'] 		= 'walk' ;
				data['Girl1-Right']['x']			= -34 ;
				data['Girl1-Right']['y']			= 234 ;
			}

			else if(data['Stage2']['updateCounter'] == 300)
			{
				data['Businessman-Right']['visible']= true ;
				data['Businessman-Right']['state']	= 'walk' ;
				data['Businessman-Right']['x']		= -51 ;
				data['Businessman-Right']['y']		= 250 ;
			}
		
			else if(data['Stage2']['updateCounter'] == 450)
			{
				data['Bird-Right']['visible']	= true ;
				data['Bird-Right']['state'] 	= 'walk' ;
				data['Bird-Right']['x']			= -66;
				data['Bird-Right']['y']			= 180 ;
			}

			else if(data['Stage1']['updateCounter'] == 105)
			{
				data['SadhuBaba-Left']['visible']	= true ;
				data['SadhuBaba-Left']['state'] 	= 'walk' ;
				data['SadhuBaba-Left']['x']			= 240;
				data['SadhuBaba-Left']['y']			= 228 ;
			}

			
			// Player Key Events
			if(engine['keyDown']['key'] == KEY_LEFT && data['Player']['state'] != 'walk-left')
			{
				// consoleDiv.innerHTML = 'KEY_LEFT' ;
				data['Player']['state'] 	= 'walk-left' ;
			}
			else if(engine['keyDown']['key'] == KEY_RIGHT && data['Player']['state'] != 'walk-right')
			{
				// consoleDiv.innerHTML = 'KEY_RIGHT' ;
				data['Player']['state'] 	= 'walk-right' ;
			}
			else if(engine['keyDown']['key'] == KEY_ENTER && data['Player']['state'] != 'throw')
			{
				data['Player']['state'] 	= 'throw' ;
			}
			else if(engine['keyDown']['active'] == false)
			{
				// consoleDiv.innerHTML = '' ;
				data['Player']['state'] 	= 'stand' ;
			}
		}		
	},
	
	'Player'	:
	{
		'update' : function()
		{
			// Player Key Events
			if(engine['keyDown']['key'] == KEY_LEFT && data['Player']['state'] != 'walk-left')
			{
				data['Player']['state'] 	= 'walk-left' ;
			}
			else if(engine['keyDown']['key'] == KEY_RIGHT && data['Player']['state'] != 'walk-right')
			{
				// consoleDiv.innerHTML = 'KEY_RIGHT' ;
				data['Player']['state'] 	= 'walk-right' ;
			}
			else if(engine['keyDown']['key'] == KEY_ENTER && data['Player']['state'] != 'throw')
			{
				data['Player']['state'] 	= 'throw' ;
				
				// Throwing Balloons
				var balloons = data['Player']['Balloons'] ;
				var cballoon = data['Player']['cBalloon'] ;
				var cballoonName = balloons[cballoon] ;
				
				data[cballoonName]['state'] 	= 'active' ;
				data[cballoonName]['visible']	= true ;
				data[cballoonName]['x'] 		= data['Player']['x'] + 11 ;
				data[cballoonName]['y'] 		= data['Player']['y'] + 32 ;
				
				if(cballoon < balloons.length - 1)
				{
					data['Player']['cBalloon']++ ;
				}
				else
				{
					data['Player']['cBalloon'] = 0 ;
				}
				
			}
			else if(engine['keyDown']['active'] == false)
			{
				// consoleDiv.innerHTML = '' ;
				data['Player']['state'] 	= 'stand' ;
			}
			
			if(data['Player']['x'] < -18)
			{
				data['Player']['x'] = -18 ;
			}
			else if(data['Player']['x'] > 240 - 18)
			{
				data['Player']['x'] = 240 - 18 ;
			}
		}
	},
	
	'Balloon0'	:
	{
		'update' : function()
		{
			if(data['Balloon0']['state'] == 'active')
			{
				var layerCollided = checkBulkCollisions('Balloon0',['Businessman-Right','Girl1-Left']) ;
				
				if(layerCollided != false)
				{
					consoleDiv.innerHTML = layerCollided ;
					
					data['ScoreTextValue']['text'] += 20 ;
					data['Balloon0']['state'] 	= undefined ;
					data['Balloon0']['visible']	= false ;
				}
				
				if(data['Balloon0']['y'] > 300)
				{
					data['Balloon0']['state'] 	= undefined ;
					data['Balloon0']['visible']	= false ;
				}
			}
		}
	},
	
	'Balloon1'	:
	{
		'update' : function()
		{
			if(data['Balloon1']['state'] == 'active')
			{
				var layerCollided = checkBulkCollisions('Balloon1',['Businessman-Right','Girl1-Left']) ;
				
				if(layerCollided != false)
				{
					consoleDiv.innerHTML = layerCollided ;
					
					data['ScoreTextValue']['text'] += 20 ;
					data['Balloon1']['state'] 	= undefined ;
					data['Balloon1']['visible']	= false ;
				}
				
				if(data['Balloon1']['y'] > 300)
				{
					data['Balloon1']['state'] 	= undefined ;
					data['Balloon1']['visible']	= false ;
				}
			}
		}
	},
	
	'Balloon2'	:
	{
		'update' : function()
		{
			if(data['Balloon2']['state'] == 'active' && data['Balloon2']['y'] > 300)
			{
				var layerCollided = checkBulkCollisions('Balloon2',['Businessman-Right','Girl1-Left']) ;
				
				if(layerCollided != false)
				{
					consoleDiv.innerHTML = layerCollided ;
				}
				
				data['Balloon2']['state'] 	= undefined ;
				data['Balloon2']['visible']	= false ;
			}
		}
	},
	
	'Balloon3'	:
	{
		'update' : function()
		{
			if(data['Balloon3']['state'] == 'active' && data['Balloon3']['y'] > 300)
			{
				var layerCollided = checkBulkCollisions('Balloon3',['Businessman-Right','Girl1-Left']) ;
				
				if(layerCollided != false)
				{
					consoleDiv.innerHTML = layerCollided ;
				}
				
				data['Balloon3']['state'] 	= undefined ;
				data['Balloon3']['visible']	= false ;
			}
		}
	},
	
	'Balloon4'	:
	{
		'update' : function()
		{
			if(data['Balloon4']['state'] == 'active' && data['Balloon4']['y'] > 300)
			{
				var layerCollided = checkBulkCollisions('Balloon4',['Businessman-Right','Girl1-Left']) ;
				
				if(layerCollided != false)
				{
					consoleDiv.innerHTML = layerCollided ;
				}
				
				data['Balloon4']['state'] 	= undefined ;
				data['Balloon4']['visible']	= false ;
			}
		}
	},
	
	'Balloon5'	:
	{
		'update' : function()
		{
			if(data['Balloon5']['state'] == 'active' && data['Balloon5']['y'] > 300)
			{
				var layerCollided = checkBulkCollisions('Balloon5',['Businessman-Right','Girl1-Left']) ;
				
				if(layerCollided != false)
				{
					consoleDiv.innerHTML = layerCollided ;
				}
				
				data['Balloon5']['state'] 	= undefined ;
				data['Balloon5']['visible']	= false ;
			}
		}
	},
	
	'Balloon6'	:
	{
		'update' : function()
		{
			if(data['Balloon6']['state'] == 'active' && data['Balloon6']['y'] > 300)
			{
				var layerCollided = checkBulkCollisions('Balloon6',['Businessman-Right','Girl1-Left']) ;
				
				if(layerCollided != false)
				{
					consoleDiv.innerHTML = layerCollided ;
				}
				
				data['Balloon6']['state'] 	= undefined ;
				data['Balloon6']['visible']	= false ;
			}
		}
	},
	
	'Balloon7'	:
	{
		'update' : function()
		{
			if(data['Balloon7']['state'] == 'active' && data['Balloon7']['y'] > 300)
			{
				var layerCollided = checkBulkCollisions('Balloon7',['Businessman-Right','Girl1-Left']) ;
				
				if(layerCollided != false)
				{
					consoleDiv.innerHTML = layerCollided ;
				}
				
				data['Balloon7']['state'] 	= undefined ;
				data['Balloon7']['visible']	= false ;
			}
		}
	},
	
	'Balloon8'	:
	{
		'update' : function()
		{
			if(data['Balloon8']['state'] == 'active' && data['Balloon8']['y'] > 300)
			{
				var layerCollided = checkBulkCollisions('Balloon8',['Businessman-Right','Girl1-Left']) ;
				
				if(layerCollided != false)
				{
					consoleDiv.innerHTML = layerCollided ;
				}
				
				data['Balloon8']['state'] 	= undefined ;
				data['Balloon8']['visible']	= false ;
			}
		}
	},
	
	'Balloon9'	:
	{
		'update' : function()
		{
			if(data['Balloon9']['state'] == 'active' && data['Balloon9']['y'] > 300)
			{
				var layerCollided = checkBulkCollisions('Balloon9',['Businessman-Right','Girl1-Left']) ;
				
				if(layerCollided != false)
				{
					consoleDiv.innerHTML = layerCollided ;
				}
				
				data['Balloon9']['state'] 	= undefined ;
				data['Balloon9']['visible']	= false ;
			}
		}
	}
}