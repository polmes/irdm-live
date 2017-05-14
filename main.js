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
				-1.362,41.0375,0,
				-1.36057,41.0376,206,
				-1.35916,41.0376,412,
				-1.35773,41.0376,618,
				-1.35625,41.0377,824,
				-1.35466,41.0375,1030,
				-1.35259,41.037,1236,
				-1.3498,41.0358,1442,
				-1.34747,41.0343,1648,
				-1.34592,41.0331,1854,
				-1.34499,41.0321,2060,
				-1.3444,41.0313,2266,
				-1.34389,41.0307,2472,
				-1.34326,41.0303,2678,
				-1.34236,41.03,2884,
				-1.34109,41.0298,3090,
				-1.33943,41.0297,3296,
				-1.33736,41.0297,3502,
				-1.33487,41.0297,3708,
				-1.33194,41.0298,3914,
				-1.32853,41.0299,4120,
				-1.32458,41.0299,4326,
				-1.32008,41.0298,4532,
				-1.31502,41.0297,4738,
				-1.30948,41.0294,4944,
				-1.30349,41.0291,5150,
				-1.29718,41.0287,5356,
				-1.2906,41.0282,5562,
				-1.28383,41.0277,5768,
				-1.27685,41.0271,5974,
				-1.26967,41.0264,6180,
				-1.26227,41.0257,6386,
				-1.25462,41.0249,6592,
				-1.24671,41.0241,6798,
				-1.23852,41.0232,7004,
				-1.23003,41.0221,7210,
				-1.22124,41.021,7416,
				-1.21215,41.0197,7622,
				-1.20278,41.0182,7828,
				-1.19312,41.0166,8034,
				-1.18316,41.0148,8240,
				-1.1729,41.0129,8446,
				-1.16233,41.0109,8652,
				-1.15146,41.0088,8858,
				-1.14028,41.0066,9064,
				-1.12882,41.0044,9270,
				-1.11706,41.0023,9476,
				-1.10503,41.0003,9682,
				-1.09274,40.9984,9888,
				-1.08023,40.9967,10094,
				-1.06756,40.9954,10300,
				-1.05474,40.9943,10506,
				-1.04182,40.9935,10712,
				-1.02885,40.9931,10918,
				-1.01584,40.993,11124,
				-1.00281,40.9933,11330,
				-0.98978,40.9937,11536,
				-0.976757,40.9944,11742,
				-0.963739,40.9953,11948,
				-0.950871,40.9962,12154,
				-0.938265,40.997,12360,
				-0.925924,40.9978,12566,
				-0.913849,40.9985,12772,
				-0.902084,40.9992,12978,
				-0.89068,41.0001,13184,
				-0.879637,41.0011,13390,
				-0.868954,41.0023,13596,
				-0.858625,41.0036,13802,
				-0.848499,41.005,14008,
				-0.838503,41.0066,14214,
				-0.828638,41.0084,14420,
				-0.818904,41.0103,14626,
				-0.809303,41.0123,14832,
				-0.799855,41.0144,15038,
				-0.790649,41.0167,15244,
				-0.781694,41.019,15450,
				-0.772985,41.0215,15656,
				-0.76452,41.024,15862,
				-0.756297,41.0266,16068,
				-0.748312,41.0294,16274,
				-0.74058,41.0321,16480,
				-0.733157,41.0348,16686,
				-0.72605,41.0374,16892,
				-0.71926,41.0398,17098,
				-0.71279,41.0422,17304,
				-0.70664,41.0444,17510,
				-0.700813,41.0465,17716,
				-0.69531,41.0485,17922,
				-0.690132,41.0504,18128,
				-0.685282,41.0522,18334,
				-0.680759,41.0539,18540,
				-0.676553,41.0555,18746,
				-0.672634,41.057,18952,
				-0.669,41.0584,19158,
				-0.665651,41.0597,19364,
				-0.662588,41.0608,19570,
				-0.659809,41.0619,19776,
				-0.657315,41.0629,19982,
				-0.655106,41.0637,20188,
				-0.653181,41.0645,20394,
				-0.651541,41.0651,20600,
				-0.650174,41.0657,20806,
				-0.648987,41.0662,21012,
				-0.647963,41.0666,21218,
				-0.6471,41.067,21424,
				-0.646399,41.0674,21630,
				-0.64586,41.0677,21836,
				-0.645484,41.0679,22042,
				-0.64527,41.0681,22248,
				-0.645219,41.0683,22454,
				-0.64533,41.0684,22660,
				-0.645605,41.0685,22866,
				-0.646043,41.0685,23072,
				-0.646644,41.0685,23278,
				-0.647409,41.0684,23484,
				-0.648337,41.0683,23690,
				-0.64943,41.0681,23896,
				-0.650657,41.0679,24102,
				-0.651844,41.0676,24308,
				-0.652965,41.0673,24514,
				-0.65402,41.0668,24720,
				-0.655009,41.0664,24926,
				-0.655932,41.0658,25132,
				-0.65679,41.0652,25338,
				-0.657582,41.0645,25544,
				-0.658308,41.0637,25750,
				-0.65897,41.0629,25956,
				-0.659566,41.062,26162,
				-0.660097,41.061,26368,
				-0.660564,41.06,26574,
				-0.660953,41.0589,26780,
				-0.661224,41.0579,26986,
				-0.661374,41.0569,27192,
				-0.661401,41.056,27398,
				-0.661305,41.0551,27604,
				-0.661085,41.0542,27810,
				-0.66074,41.0535,28016,
				-0.660269,41.0527,28222,
				-0.659671,41.052,28428,
				-0.658946,41.0514,28634,
				-0.658092,41.0508,28840,
				-0.657109,41.0503,29046,
				-0.655996,41.0498,29252,
				-0.654752,41.0494,29458,
				-0.653377,41.049,29664,
				-0.651869,41.0486,29870,
				-0.650228,41.0483,30076,
				-0.648453,41.0481,30282,
				-0.646543,41.0479,30488,
				-0.644498,41.0478,30694,
				-0.642317,41.0477,30900,
				-0.639998,41.0476,31106,
				-0.63755,41.0476,31312,
				-0.635085,41.0477,31518,
				-0.632643,41.0478,31724,
				-0.630223,41.0479,31930,
				-0.627826,41.048,32136,
				-0.625452,41.0482,32342,
				-0.623101,41.0484,32548,
				-0.620773,41.0486,32754,
				-0.618467,41.0489,32960,
				-0.616185,41.0492,33166,
				-0.613926,41.0495,33372,
				-0.61169,41.0499,33578,
				-0.609485,41.0503,33784,
				-0.607361,41.0508,33990,
				-0.60533,41.0513,34196,
				-0.603389,41.0519,34402,
				-0.60136,41.0524,32983.9,
				-0.598967,41.0526,30578.9,
				-0.597608,41.0522,28560.3,
				-0.597532,41.0515,26827.5,
				-0.598366,41.0506,25313.8,
				-0.599698,41.0502,23977,
				-0.600721,41.0501,22769.9,
				-0.600813,41.0501,21667.4,
				-0.600047,41.0504,20652.9,
				-0.598185,41.051,19713.3,
				-0.595091,41.0521,18838.3,
				-0.590759,41.0538,18019.6,
				-0.585025,41.0558,17250.4,
				-0.577953,41.0583,16525,
				-0.569808,41.0609,15838.7,
				-0.561128,41.0634,15187.6,
				-0.552016,41.0656,14568.1,
				-0.542696,41.0673,13977.3,
				-0.533045,41.0684,13412.8,
				-0.522567,41.0688,12872.2,
				-0.511308,41.0689,12353.7,
				-0.499391,41.0691,11855.4,
				-0.487276,41.069,11375.9,
				-0.475189,41.0684,10913.8,
				-0.463194,41.0671,10465.6,
				-0.451311,41.0652,10029.7,
				-0.439603,41.0627,9605.25,
				-0.428213,41.0598,9191.55,
				-0.41727,41.0569,8787.96,
				-0.406811,41.0541,8393.87,
				-0.39685,41.0514,8008.75,
				-0.38743,41.0491,7632.13,
				-0.378621,41.0471,7263.54,
				-0.370471,41.0454,6902.57,
				-0.362971,41.0439,6548.86,
				-0.356026,41.0425,6202.05,
				-0.349504,41.0414,5861.81,
				-0.343338,41.0404,5527.85,
				-0.337507,41.0398,5199.89,
				-0.332039,41.0393,4877.67,
				-0.327021,41.0392,4560.94,
				-0.322545,41.0393,4249.49,
				-0.318666,41.0397,3943.09,
				-0.315385,41.0403,3641.56,
				-0.312675,41.0412,3344.7,
				-0.310461,41.0422,3052.34,
				-0.308659,41.0432,2764.32,
				-0.307209,41.0439,2480.47,
				-0.305977,41.0442,2200.66,
				-0.30476,41.0439,1924.75,
				-0.303369,41.0431,1652.59,
				-0.30174,41.0419,1384.08,
				-0.299969,41.0405,1119.09,
				-0.298187,41.039,857.504,
				-0.29654,41.0376,599.223,
				-0.295033,41.0362,344.144,
				-0.293565,41.0349,92.1703,
				-0.293037,41.0344,-2.78476
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
