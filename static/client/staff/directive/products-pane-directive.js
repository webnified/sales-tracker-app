Sales.directive( "productsPane", 
	[
		function directive(){
			return{
				"scope": "",
				"restrict": "A",
				"controller": "productsPaneController",
				"template": 
					"<div ng-repeat='product in products'>" +
						"<div class='product col-xs-4 col-sm-4 col-md-4 wow fadeInUp'>" +
						  	"<p class='product-code wow fadeInDown'><strong>{{product.name}}</strong></p>" +
						  	"<a href='#''><img ng-src='{{product.image}}' alt='Product'></a>" +
						"</div>" +
					"</div>",
				"link": function link( scope, element, attribute ){
					console.log( scope );
				}
			}
		}
	] );