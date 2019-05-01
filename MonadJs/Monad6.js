function MONAD(){
	var prototype=Object.create(null);
	function unit(value){
		var monad=Object.create(prototype);
		monad.bind=function(func,args){
			return func(value, ...args);
		};
		if (type modifier==='function'){
			modifier(monad,value)
		}
		return monad;
}
return unit;
}

var maybe=MONAD (function (monad,value){
	if (value===null || value ===undefined){
		monad.is_null=true;
		monad.bind=function(){
			return monad;
		};
	}
});

var monad=maybe(null);
monad.bind(alert);
