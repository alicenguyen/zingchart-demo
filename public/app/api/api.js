'use strict'
var categories = [
{	
	id: "graph-objects",
	name: "Graph Objects", 
	objects: [
	{
		name: "3d-aspect",
		description: "Set various 3D properties for 3D chart types, including viewing angle, chart depth, zoom level, and 3D render type.",
		attributes: [
		{ name:"angle", type:"Numeric", info:"Sets the view angle when using the isometric 3D engine. Value can be between 0 and 90, with the default viewing angle being 45°.", example:'5 | 10 | ...'},
		{ name:"depth", type:"Numeric", info:"Sets the Z depth for a 3D chart type displayed in either isometric or true 3D.", example:'5 | 10 | ...'},
		{ name:"true3d", type:"Boolean", info:"Sets whether the chart uses a true 3D engine or an isometric view. Disabling true3d forces an isometric view.", example:'true | false | 1 | 0'},
		{ name:"x-angle", type:"Numeric", info:"Sets the X rotation viewing angle for the true 3D view. Viewing angle may vary depending on the chart type.", example:'5 | 10 | ...'},
		{ name:"y-angle", type:"Numeric", info:"Sets the Y rotation viewing angle for the true 3D view. Viewing angle may vary depending on the chart type.", example:'5 | 10 | ...'},
		{ name:"z-angle", type:"Numeric", info:"Sets the Z rotation viewing angle for the true 3D view. Viewing angle may vary depending on the chart type.", example:'5 | 10 | ...'},
		{ name:"zoom", type:"Numeric", info:"Sets the perspective zoom for the true 3D view. The default zoom level is 1.0. Note that a leading 0 is required before the decimal for values less than 1.0.", example:'1 | 1.5 | 0.8 | ...'}
		]
	},
	{ 
		name:"arrows",
		description:"The arrows array can hold any number of individual arrow objects.",
		attributes: [
		{ name:"font-angle fontAngle " , type:"Number", info:"Sets the text's font angle", example:"-45 | 115 | ..."},
		{ name:"font-color contColor " , type:"String", info:"Sets the text's color. Similar to color.", example:'"none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...'},
		{ name:"font-family fontFamily " , type:"String", info:"Sets the text's font family", example:'"Arial" | "Tahoma,Verdana" | ...'},
		{ name:"font-size fontSize  " , type:"Mixed", info:"Sets the arrow's label font size.", example:'4 | "6px" | ...'},
		{ name:"from " , type:"Object", info:"Specifies the point at which the arrow will begin. To be used with to.", example: '"hook":"node:plot=0,index=6"'},
		{ name:"text " , type:"String", info:"Text displayed in a label over the arrow.", example:'"Upturn" | "10% decrease" | ...'},
		{ name:"to " , type:"Object", info:"Specifies the point at which the arrow will end. To be used with from.", example:'See to'},
		{ name:"alpha " , type:"Number", info:"Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal.", example: '0.3 | 0.9 | ...'},
		{ name:"angle " , type:"Number", info:"Sets the rotation angle of the object/shape.", example:'-45 | 115 | ...'}, 
		{ name:"background-color backgroundColor " , type:"String", info:'Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)").\n\n One color will set a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-colors and gradient-stops.', example:'"none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...'},
		{ name:"background-color-1 backgroundColor1 ", type:"String" , info:"Sets the first color of a 2 color background gradient of the object. To be used with background-color-2.", example:'"none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...'},
		{ name:"background-color-2 backgroundColor2 " , type:"String", info:"Sets the second color of a 2 color background gradient of the object. To be used with background-color-1.", example:'"none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...'},
		{ name:"background-fit backgroundFit " , type:"String", info:'Sets the direction/s on which the background image is being "stretched".', example:'"x" | "y" | "xy"'},
		{ name:"background-image backgroundImage " , type:"String", info:"Sets a background image for the object. Value can be a local file or a web image's location.", example:'"image.png" | ...'},
		{ name:"background-position backgroundPosition " , type:"String", info:"Sets the position of the background when the background-repeat value is no-repeat.", example:'"0 0" | "50 100" | "80% 60%" | ...'}
		]
	}
	]
}
,{	
	id: "legend-objects",
	name: "Legend Objects", 
	objects: [
	{
		name: "foo",
		description:"Here's Johnny!",
		attributes: [
		{ name:"angle", type:"Numeric", info:"Sets the view angle when using the isometric 3D engine. Value can be between 0 and 90, with the default viewing angle being 45°.", example:'5 | 10 | ...'},
		{ name:"depth", type:"Numeric", info:"Sets the Z depth for a 3D chart type displayed in either isometric or true 3D.", example:'5 | 10 | ...'},
		{ name:"true3d", type:"Boolean", info:"Sets whether the chart uses a true 3D engine or an isometric view. Disabling true3d forces an isometric view.", example:'true | false | 1 | 0'},
		{ name:"x-angle", type:"Numeric", info:"Sets the X rotation viewing angle for the true 3D view. Viewing angle may vary depending on the chart type.", example:'5 | 10 | ...'},
		{ name:"y-angle", type:"Numeric", info:"Sets the Y rotation viewing angle for the true 3D view. Viewing angle may vary depending on the chart type.", example:'5 | 10 | ...'},
		{ name:"z-angle", type:"Numeric", info:"Sets the Z rotation viewing angle for the true 3D view. Viewing angle may vary depending on the chart type.", example:'5 | 10 | ...'},
		{ name:"zoom", type:"Numeric", info:"Sets the perspective zoom for the true 3D view. The default zoom level is 1.0. Note that a leading 0 is required before the decimal for values less than 1.0.", example:'1 | 1.5 | 0.8 | ...'}
		]
	},
	{ 
		name:"bar",
		description:"Ponyo!",
		attributes: [
		{ name:"font-angle fontAngle " , type:"Number", info:"Sets the text's font angle", example:"-45 | 115 | ..."},
		{ name:"font-color contColor " , type:"String", info:"Sets the text's color. Similar to color.", example:'"none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...'},
		{ name:"font-family fontFamily " , type:"String", info:"Sets the text's font family", example:'"Arial" | "Tahoma,Verdana" | ...'},
		{ name:"font-size fontSize  " , type:"Mixed", info:"Sets the arrow's label font size.", example:'4 | "6px" | ...'},
		{ name:"from " , type:"Object", info:"Specifies the point at which the arrow will begin. To be used with to.", example: '"hook":"node:plot=0,index=6"'},
		{ name:"text " , type:"String", info:"Text displayed in a label over the arrow.", example:'"Upturn" | "10% decrease" | ...'},
		{ name:"to " , type:"Object", info:"Specifies the point at which the arrow will end. To be used with from.", example:'See to'},
		{ name:"alpha " , type:"Number", info:"Sets the transparency of the object. Values must range between 0.0 and 1.0, with 0.0 being completely invisible and 1.0 being completely opaque. Please note that values also require the leading 0 before the decimal.", example: '0.3 | 0.9 | ...'},
		{ name:"angle " , type:"Number", info:"Sets the rotation angle of the object/shape.", example:'-45 | 115 | ...'}, 
		{ name:"background-color backgroundColor " , type:"String", info:'Sets the background color of the object. Colors can be entered by name (e.g. "red", "blue", "yellow"), in hexadecimal notation (e.g. "#FF0000", "#0000FF", "#FFFF00"), or in RGB notation (e.g. "rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)").\n\n One color will set a solid background color, two colors will, by default, create a horizontal gradient. For more complex gradients, use gradient-colors and gradient-stops.', example:'"none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...'},
		{ name:"background-color-1 backgroundColor1 ", type:"String" , info:"Sets the first color of a 2 color background gradient of the object. To be used with background-color-2.", example:'"none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...'},
		{ name:"background-color-2 backgroundColor2 " , type:"String", info:"Sets the second color of a 2 color background gradient of the object. To be used with background-color-1.", example:'"none" | "transparent" | "#f00" | "#f00 #00f" | "red yellow" | "rgb(100, 15, 15)" | ...'},
		{ name:"background-fit backgroundFit " , type:"String", info:'Sets the direction/s on which the background image is being "stretched".', example:'"x" | "y" | "xy"'},
		{ name:"background-image backgroundImage " , type:"String", info:"Sets a background image for the object. Value can be a local file or a web image's location.", example:'"image.png" | ...'},
		{ name:"background-position backgroundPosition " , type:"String", info:"Sets the position of the background when the background-repeat value is no-repeat.", example:'"0 0" | "50 100" | "80% 60%" | ...'}
		]
	}
	]
}

	,{	
		id: "scale-objects",
		name: "Scale Objects", 
		objects: [ ]
	},
	{	
		id: "plot-series-item-objects",
		name: "Plot/Series Item Objects", 
		objects: [ ]
	},
	{	
		id: "context-menu-objects",
		name: "Context Menu Objects", 
		objects: [ ]
	},
	{	
		id: "crosshair-objects",
		name: "Crosshair Objects", 
		objects: [ ]
	},
	{	
		id: "gui-objects",
		name: "GUI Objects", 
		objects: [ ]
	},
	{	
		id: "loader-objects",
		name: "Loader Objects", 
		objects: [ ]
	}


];

 angular.module('zingClient', ['ngResource'])

.factory("api", function($resource){
	return {
		getCategories : function() {
			return categories;
		},
	getCategoryById : function (id) {
		for(var i in categories) {
			if(categories[i].id == id) {
				return categories[i];
			}
		}
	},
	getObjects: function() {
		var list = [];
		for(var i in categories) {
			for(var j in categories[i].objects)
	list.push(categories[i].objects[j]);	
		}
		return list;
	},
	getObjectById : function (catId, objId) {
		for(var i in categories) {
			if(categories[i].id == catId) {
				for(var j in categories[i].objects ) {
					if(categories[i].objects[j].name == objId) {
						return categories[i].objects[j];
					}
				}
			}
		}
	},
	getAttributesByIds : function(objName, attrName){
		var objectList = this.getObjects();
		console.log(JSON.stringify(objectList));
		for (var i in objectList) {
			if(objectList[i].name == objName) {
				console.lg("api object " + objectList[i].name);
				for(var j in objectList[i]) {
					if(objectList[i].attributes[j].name == attrName) {
						return objectList[i].attributes[j];
					}
				}

			}

		}
	},
	wordBank:{ 
		getCompletions:function(editor, session, pos, prefix, callback) {
			if(prefi.length==0) {callback(null, []); return}
			return [
			{name: "George", value: "george harrison", meta: "the beatles"},
			{name: "Paul", value: "paul macartney", meta: "the beatles"},
			{name: "John", value: "john lennon", meta: "the beatles"},
			{name: "Ringo", value: "ringo star", meta: "the beatles"},
			{name: "Thurston", value: "thurston moore", meta: "sonic youth"},
			{name: "Kim", value: "kim gordon", meta: "sonic youth"},
			{name: "steve", value: "steve shelley", meta: "sonic youth"}];
		}}

	};
}); 



