Sales.directive( "favoritesPane", 
	[
		function directive(){
			return{
				"restrict": "A",
				"controller": "favoritesPaneController",
				"template": 
					"<div ng-repeat='favorite in favorites'>" +
						"<div class='product col-xs-4 col-sm-4 col-md-4 wow fadeInUp'>" +
						  "<p class='product-code wow favorites-pane fadeInDown'><strong>{{favorite.name}}</strong></p>" +
						  "<a href='#''><img ng-src='{{favorite.image}}' alt='Product'></a>" +
						"</div>" +
					"</div>",					
				"link": function link( scope, element, attribute ){
				}
			}
		}
	] );

/**********************

					"<div class='product col-xs-4 col-sm-4 col-md-4 wow fadeInUp'>" +
					  "<p class='product-code wow fadeInDown'><strong>PC01</strong></p>" +
					  "<a href='#''><img src='http://placehold.it/250x250' alt='Product'></a>" +
					"</div>" +

					"<div class='product col-xs-4 col-sm-4 col-md-4 wow fadeInUp'>" +
					  "<p class='product-code wow fadeInDown'><strong>PC02</strong></p>" +
					  "<a href='#'><img src='http://placehold.it/250x250' alt='Product'></a>" +
					"</div>" +

					"<div class='product col-xs-4 col-sm-4 col-md-4 wow fadeInUp'>" +
					  "<p class='product-code wow fadeInDown'><strong>PC03</strong></p>" +
					  "<a href='#''><img src='http://placehold.it/250x250' alt='Product'></a>" +
					"</div>",


***********************/