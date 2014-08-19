Sales.directive( "thirdDirective", 
	[
		function directive(){
			return{
				"restrict": "A",
				"template": 
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
				"link": function link(){

				}
			}
		}
	] );