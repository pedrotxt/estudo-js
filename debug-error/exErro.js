function validaArray(arr, num){
    try{
        //se os parametros forem false envie
        if (!arr && !num) {
            throw new ReferenceError('Envie os parametros!')
        }
        //se o typeof do array não for object
        if (typeof arr !== 'object') {
            throw new TypeError('Envie um elemento do tipo Array!') 
        }

        if (typeof num !== 'number') {  
            throw new TypeError('Envie um elemento do tipo Number!')  
        }

        if (arr.length !== num) {   
            throw new RangeError('Tamanho do array inválido!')
        }
        return arr;
    //Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
    }catch (e) {
		if (e instanceof RangeError) {
			console.log('Este é um RangeError!');
            console.log(e.name);
            console.log(e.message);
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('Este é um ReferenceError!');
            console.log(e.name);
            console.log(e.message);
			console.log(e.stack);
		} else if (e instanceof TypeError){
			console.log('Este é um TypeError!');
			console.log(e.stack);
		} else {
            console.log('Tipo de erro não esperado: ' + e);
        }
    }
}

console.log(validaArray([1, 2, 3], 5));