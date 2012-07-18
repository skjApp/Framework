/////////////////////////
///// SHAPE : LINE	/////
/////////////////////////

var create_cloud_ajax = function createCloudAjax(cloud)
{
				
	// code for IE7+, Firefox, Chrome, Opera, Safari
	if (window.XMLHttpRequest)
	{
		cloud = new XMLHttpRequest();
					
		cloud.open("GET","abc.txt",true);
		cloud.send();
					
		cloud.onreadystatechange = function()
		{
			if (cloud.readyState == 4 && cloud.status == 200)
			{
				cloud.responseText;				   		
			}
		}
	}
} ;

var get_cloud_ajax = function getCloudAjax()
{
	
}

var update_cloud_ajax = function updateCloudAjax()
{
	
}

var delete_cloud_ajax = function deleteCloudAjax()
{
	
}


data['engine']['cloud.ajax'] = 
{
	'createLayer'	: create_cloud_ajax 	,
	'getLayer'		: get_cloud_ajax		,
	'updateLayer'	: update_cloud_ajax		,
	'drawLayer'		: draw_cloud_ajax		,
	'deleteLayer'	: delete_cloud_ajax
} ;