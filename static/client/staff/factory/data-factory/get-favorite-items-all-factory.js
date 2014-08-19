Sales.factory( "getFavorites", 
	[
		"$http",
		function factory( $http ){
			var url = "http://demo1290827.mockable.io/sales/get/favorite/items/all";
			
			return function getFavorites( callback ){
				$http.get( url )
					.success( function onSuccess( result ){
						callback( null, result.data );
					} )
					.error( function onError( error ){
						callback( error );
					} )
			};
		}
	] );