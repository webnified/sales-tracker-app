Sales.controller( "productsPaneController", 
	[
	 	"$scope",
	 	"getProducts",
	 	function productsPaneController( scope, getProducts ){
	 		getProducts( function onData( error, data ){
	 			if( error ){
					console.log( error );
				}else{
					scope.products = data;
				}
	 		} );
	 	}
	] );