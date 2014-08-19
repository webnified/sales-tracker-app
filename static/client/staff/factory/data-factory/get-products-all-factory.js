Sales.factory( "getProducts", 
	[
		"$http",
		function factory( $http ){
			var url = "http://demo1290827.mockable.io/sales/get/products/all";
			
			return function getProducts( callback ){
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