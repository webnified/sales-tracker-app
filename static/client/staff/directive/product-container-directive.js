Sales.directive( "productContainer", 
	[
		function directive(){
			return{
				"scope": "",
				"restrict": "A",
				"controller": "",
				"template": 
						"<div favorites-pane class='row favorites-pane wow fadeInDown'></div>" +
						"<div products-pane class='row products-pane wow fadeInDown'></div>",
				"link": function link( scope, element, attribute ){

				}
			}
		}
	] );