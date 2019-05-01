function MONAD(){
	var prototype=Object.create(null);
	function unit(value){
		var monad=Object.create(prototype);
		monad.bind=function(func,args){
			return func(value, ...args);
		};
		return monad;
		}

	unit.method=function(name,func){
		prototype[name]=func;
		return unit;
	};	
	return unit;
}

