Sales.controller( "favoritesPaneController", 
	[
		"$scope",
		"getFavorites",
		function favoritesPaneController( scope, getFavorites ){
			getFavorites( function onData( error, data ){
				if( error ){
					console.log( error );
				}else{
					scope.favorites = data;
				}
			} );
		}
	] );