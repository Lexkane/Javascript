f()
	.when(function (f_value){
		return g(f_value);
	})
	.when(function(g_value){

	})

f()
	.when(function(f_value){
		return g(f_value)
				.when(function(g_value){
					...
				});
	})	


var VOW =(function(){
	//function enqueue here..
	//function enlighten

			return {
				make: function make(){
					var breakers=[],fate,
						keepers=[],status='pending';
				//function herald here

				return {
					break: function (reason){
						herald('broken',reason,breakers);
					},
					keep:function(value){
						herald('kept',value,keepers);
					}
					promise:{

							}
					};
			}

		}
	};
}());	





function herald(state,value,queue){
		if (status !='pending'){
		throw "overpromise";
		}

		fate=value;
		status=state;
		enlighten(queue,fate);
		keepers.length=0;
		breakers.length=0;
}

promise:{
	is_promise:true,
	when: function(kept,broken){
		var vow=make();
		switch(status){
			case 'pending':
				enqueue(keepers,kept,vow.keep,vow.break);
				enqueue(breakers,broken,vow.break,vow.break);
				break;
			case 'kept':
				enqueue(keepers,kept,vow.keep,vow.break);
				enlighten(keepers,fate);
				break;
			case 'broken':
				enqueue(breakers,broken,vow.break,vow.break);
				enlighten(breakers,fate);
				break;
			}	
			return vow.promise;
	}	

}


function enqueue (queue,func,resolver,breaker){
	queue[queue.length]=typeof func !== 'function'
	? resolver
	:function(value){
		try{
			var result=func(value);
			if (result && result.is_promise===true){
				result.when(resolver,breaker);
			} else{
				resolver(result);
			}
			}catch(e){
				break(e);
			}
	};
}

function enlighten(queue,fate){
	queue.forEach(function (func){
		setImmediate(func,fate);
	});
}	














