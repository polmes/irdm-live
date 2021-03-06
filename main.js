// Bing Maps key
Cesium.BingMapsApi.defaultKey = 'ApKfIOfep6WHK-SDGcIoh6dMje5KZUpEJD0QG63cc16_XsJXO6nhDx-FNZwqp8ab';

// Home: Catalunya
var extent = Cesium.Rectangle.fromDegrees( -0.1, 40.8, 4.5, 42.5 );
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

// Label Offset
var offset = new Cesium.Cartesian3( 25, 25, 0 );

// Widget config
var viewer = new Cesium.Viewer( 'cesiumContainer', {
	animation                              : false,
	timeline                               : false,
	infoBox                                : false,
	navigationInstructionsInitiallyVisible : false,
	geocoder                               : false
} );

// Finally
var entities = viewer.entities;

// Prediction data
var czml = [ {
	"id"      : "document",
	"name"    : "CZML Prediction Polyline",
	"version" : "1.0"
}, {
	"id"       : "prediction",
	"polyline" : {
		"positions" : {
			"cartographicDegrees" : [
				0.4121,41.4693,103,
				0.412648,41.4696,303,
				0.413708,41.4698,503,
				0.415373,41.4699,703,
				0.416858,41.4697,903,
				0.417623,41.4693,1103,
				0.4178,41.469,1303,
				0.41765,41.4689,1503,
				0.417238,41.4688,1703,
				0.416529,41.4688,1903,
				0.415567,41.4687,2103,
				0.414452,41.4688,2303,
				0.413295,41.4689,2503,
				0.412175,41.4692,2703,
				0.411118,41.4695,2903,
				0.41011,41.4699,3103,
				0.409119,41.4702,3303,
				0.408083,41.4706,3503,
				0.406887,41.4709,3703,
				0.405452,41.4712,3903,
				0.403697,41.4714,4103,
				0.401575,41.4716,4303,
				0.399054,41.4718,4503,
				0.396102,41.472,4703,
				0.392711,41.4721,4903,
				0.388875,41.4723,5103,
				0.384617,41.4724,5303,
				0.379945,41.4726,5503,
				0.374877,41.4727,5703,
				0.369424,41.4729,5903,
				0.363612,41.4731,6103,
				0.357451,41.4732,6303,
				0.350953,41.4733,6503,
				0.344135,41.4734,6703,
				0.337017,41.4734,6903,
				0.329638,41.4734,7103,
				0.32205,41.4734,7303,
				0.314276,41.4733,7503,
				0.306364,41.4731,7703,
				0.298312,41.473,7903,
				0.290112,41.4729,8103,
				0.281762,41.4727,8303,
				0.273231,41.4726,8503,
				0.264503,41.4725,8703,
				0.255538,41.4724,8903,
				0.246235,41.4724,9103,
				0.236589,41.4724,9303,
				0.226518,41.4725,9503,
				0.215978,41.4727,9703,
				0.20499,41.473,9903,
				0.193713,41.4734,10103,
				0.182204,41.4738,10303,
				0.170493,41.4742,10503,
				0.158935,41.4747,10703,
				0.147659,41.475,10903,
				0.136664,41.4753,11103,
				0.126151,41.4754,11303,
				0.116315,41.4753,11503,
				0.107153,41.4749,11703,
				0.0986716,41.4743,11903,
				0.0909784,41.4735,12103,
				0.0841045,41.4723,12303,
				0.0780496,41.4709,12503,
				0.0728062,41.4691,12703,
				0.0681585,41.4671,12903,
				0.0640069,41.465,13103,
				0.0603527,41.4626,13303,
				0.0571974,41.4601,13503,
				0.0545138,41.4575,13703,
				0.0520434,41.4547,13903,
				0.0497243,41.4518,14103,
				0.0475571,41.4488,14303,
				0.0455423,41.4457,14503,
				0.0436806,41.4425,14703,
				0.0419603,41.4392,14903,
				0.0403473,41.4359,15103,
				0.0388394,41.4325,15303,
				0.0374364,41.4291,15503,
				0.0361381,41.4257,15703,
				0.0349442,41.4222,15903,
				0.0338545,41.4187,16103,
				0.0329326,41.4152,16303,
				0.0322958,41.4117,16503,
				0.0319462,41.4082,16703,
				0.031883,41.4047,16903,
				0.0321056,41.4012,17103,
				0.0326135,41.3978,17303,
				0.033406,41.3943,17503,
				0.0344825,41.3908,17703,
				0.0358425,41.3874,17903,
				0.0374854,41.3839,18103,
				0.0394107,41.3805,18303,
				0.041615,41.3771,18503,
				0.0440959,41.3736,18703,
				0.0468535,41.3702,18903,
				0.0498877,41.3668,19103,
				0.0531988,41.3634,19303,
				0.0567867,41.36,19503,
				0.0606516,41.3566,19703,
				0.0647936,41.3533,19903,
				0.0692127,41.3499,20103,
				0.0739091,41.3466,20303,
				0.0789217,41.3432,20503,
				0.0843131,41.34,20703,
				0.0900844,41.3369,20903,
				0.0962358,41.3338,21103,
				0.102768,41.3308,21303,
				0.10968,41.3279,21503,
				0.116974,41.3251,21703,
				0.12465,41.3223,21903,
				0.132707,41.3196,22103,
				0.141146,41.3171,22303,
				0.149968,41.3145,22503,
				0.159174,41.3121,22703,
				0.168762,41.3098,22903,
				0.178734,41.3075,23103,
				0.189091,41.3053,23303,
				0.199823,41.3032,23503,
				0.210893,41.3011,23703,
				0.222299,41.299,23903,
				0.23404,41.297,24103,
				0.246116,41.2951,24303,
				0.258526,41.2932,24503,
				0.271272,41.2913,24703,
				0.284351,41.2894,24903,
				0.297286,41.2876,24037,
				0.307594,41.2854,22369.5,
				0.314947,41.2826,20895.4,
				0.319762,41.2794,19574.5,
				0.322781,41.276,18377.8,
				0.324223,41.2726,17284.1,
				0.324224,41.2693,16277,
				0.323218,41.266,15343.7,
				0.321772,41.263,14474.3,
				0.319725,41.2604,13660.4,
				0.3164,41.2583,12895.4,
				0.310849,41.2571,12173.8,
				0.302436,41.2569,11491,
				0.291701,41.2577,10842.6,
				0.279608,41.259,10221.3,
				0.267394,41.2604,9623.21,
				0.255862,41.2617,9046.22,
				0.245208,41.2629,8488.62,
				0.235291,41.264,7948.86,
				0.226017,41.265,7425.6,
				0.217418,41.266,6917.66,
				0.209671,41.267,6423.96,
				0.202985,41.2679,5943.55,
				0.197478,41.2686,5475.6,
				0.193108,41.2692,5019.32,
				0.189727,41.2699,4574.04,
				0.187187,41.2707,4139.1,
				0.1853,41.2715,3713.94,
				0.183842,41.2722,3298.04,
				0.182574,41.273,2890.91,
				0.181449,41.2738,2492.1,
				0.180812,41.2743,2101.22,
				0.181206,41.2746,1717.87,
				0.182626,41.2747,1341.72,
				0.184829,41.2744,972.435,
				0.187495,41.2737,609.717,
				0.189475,41.2732,253.284,
				0.190667,41.2729,-6.5855
			]
		},
        "material" : {
            "polylineOutline" : {
                "color" : {
                    "rgba" : [171, 171, 1, 171]
                },
                "outlineColor" : {
                    "rgba" : [0, 0, 0, 255]
                },
                "outlineWidth" : 2
            }
        },
        "width" : 7
	}
} ];

// Load prediction
var dataSource = Cesium.CzmlDataSource.load( czml );
viewer.dataSources.add( dataSource );
viewer.zoomTo( dataSource );
var box = document.getElementById('controlPanel');
var iridiumTLM;
var pointID = 0;
var points = [];
if ( typeof EventSource !== 'undefined' ) {
	// Connect to the stream. This will fail if no data has been pushed to the DB. Reload the page!
	var stream = new EventSource( 'stream.php' );
	console.log('stream',stream)
	stream.onopen = function( e ) {
		// Remove previous data points (if any)
		entities.removeAll();

		console.log( "ONOPEN" );
		console.log( e );
	};

	stream.addEventListener( 'start', function( e ) {
		// Add all previous data points
		console.log( "START" );
		var data = JSON.parse( e.data );
		console.log( data );

		var position = Cesium.Cartesian3.fromDegrees( data.longitude, data.latitude, data.altitude );
		points.push(position);
		pointID++;
		entities.add( {
			id       : data.id,
			position : position,
			label    : {
				text      : 'ID: ' + pointID,
				eyeOffset : offset,
				font      : '15px sans-serif'
			},
			point    : {
				pixelSize    : 5,
				color        : Cesium.Color.TRANSPARENT,
				outlineColor : Cesium.Color.YELLOW,
				outlineWidth : 2.5
			}
		} );
		// entities.add({
		//     name : 'Balloons path',
		//     polyline : {
  //       		positions : points,
		//         width : 3,
  //               material : new Cesium.PolylineOutlineMaterialProperty({
		//             color : Cesium.Color.BLUE,
		//             outlineWidth : 1,
		//             outlineColor : Cesium.Color.BLACK
		//         })
		//     }
		// });
		var node1 = document.createTextNode (' ID: '+pointID);
		var node2 = document.createTextNode (', TIME: '+data.time);
		var node3 = document.createTextNode (', LAT: '+data.latitude);
		var node4 = document.createTextNode (', LON: '+data.longitude);
		var node5 = document.createTextNode (', ALT: '+data.altitude);
		iridiumTLM = [node1, node2, node3, node4, node5];
		iridiumTLM.forEach(function(entry) {
    		box.appendChild(entry);
    		// box.insertAdjacentHTML('beforeend', '<br>');
		});
		box.insertAdjacentHTML('beforeend', '<br> <br>');
		box.scrollTop = box.scrollHeight;
	} );

	stream.addEventListener( 'update', function( e ) {
		// We will update position only when we receive an "update" event
		console.log( "UPDATE" );
		var data = JSON.parse( e.data );
		var position = Cesium.Cartesian3.fromDegrees( data.longitude, data.latitude, data.altitude );
		points.push(position);
		pointID++;
		var entity = entities.add( {
			position : position,
			model    : { uri : './assets/balloon.glb' },
			label    : {
				text      : 'ID: ' + pointID,
				eyeOffset : offset,
				font      : '15px sans-serif'
			},
			point    : {
				pixelSize    : 5,
				color        : Cesium.Color.RED,
				outlineColor : Cesium.Color.YELLOW,
				outlineWidth : 2.5
			}
		} );
                var node1 = document.createTextNode (' ID: '+pointID);
                var node2 = document.createTextNode (', TIME: '+data.time);
                var node3 = document.createTextNode (', LAT: '+data.latitude);
                var node4 = document.createTextNode (', LON: '+data.longitude);
                var node5 = document.createTextNode (', ALT: '+data.altitude);
                iridiumTLM = [node1, node2, node3, node4, node5];
                
		iridiumTLM.forEach(function(entry) {
    		box.appendChild(entry);
    		// box.insertAdjacentHTML('beforeend', '<br>');
		});
		box.insertAdjacentHTML('beforeend', '<br>');
		box.scrollTop = box.scrollHeight;
		//console.log(points)
		viewer.flyTo( entity );
		// adds a polyline between points
		// entities.add({
		//     name : 'Balloons path',
		//     polyline : {
  //       		positions : points,
		//         width : 3,
  //               material : new Cesium.PolylineOutlineMaterialProperty({
		//             color : Cesium.Color.BLUE,
		//             outlineWidth : 1,
		//             outlineColor : Cesium.Color.BLACK
		//         })
		//     }
		// });
		if ( entities.values.length > 1 ) {
			var prevEntity = entities.values[ entities.values.length - 2 ];
			// console.log( prevEntity );
			if ( typeof prevEntity.model !== 'undefined' ) {
				prevEntity.model.show = false;
				prevEntity.point.color = Cesium.Color.TRANSPARENT;
			}
		}
	} );

	stream.onmessage = function( e ) {
		// "message" is a generic event, only to be used for testing purposes
		console.log( "ONMESSAGE" );
		var data = JSON.parse( e.data );
		console.log( data );
	};

	stream.onerror = function( e ) {
		console.log( "ONERROR" );
		console.log( e );
	};
} else {
	console.log( "I'm sorry. Your browser sucks." );
}

// User position
if ( 'geolocation' in navigator ) {
	navigator.geolocation.watchPosition( function( pos ) {
		console.log( "NEW USER GEOLOCATION" );
		console.log( pos );
		var position = Cesium.Cartesian3.fromDegrees( pos.coords.longitude, pos.coords.latitude, 0 );

		var user = entities.getById( 'user' );
		if ( typeof user !== 'undefined' ) {
			user.position = position;
		} else {
			entities.add( {
				id       : 'user',
				position : position,
				point    : {
					pixelSize    : 5,
					color        : Cesium.Color.BLUE,
					outlineColor : Cesium.Color.WHITE,
					outlineWidth : 2.5
				}
			});
		}
	} );
} else {
	console.log( "I'm sorry. No geolocation for you." );
}
