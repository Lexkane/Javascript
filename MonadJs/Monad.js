function MONDA(){
	return function unit(value){
		var monda=Object.create(null);
		monda.bind=function(func){
			return func(value);
		};
		return monad;
	};
}

var identity=MONAD();
var monad=identity("Hello world.");
monad.bind(alert);