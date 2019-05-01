function MONAD(){
	var prototype=Object.create(null);
	function unit(value){
		var monad=Object.create(prototype);
		monad.bind=function(func,args){
			return func.apply(undefined,
				[value].concat(Array.prototype
					.slice.apply(args || [])));
			};
			return monad;
		}

	return unit;
}

