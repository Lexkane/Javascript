function MONAD(){
	var prototype=Object.create(null);
	function unit(value){
		var monad=Object.create(prototype);
		monad.bind=function(func){
			return func(value);
			};
			return monad;
		}

	return unit;
}

