import Instrumento from "../model/Instrumento";


export async function getInstrumentosJSONFetch() {
  let urlServer = "http://localhost:8080/instrumentos";
  let response = await fetch(urlServer, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
  });
  console.log(response);
  return await response.json();
}

export async function getInstrumentosPorBusqueda(termino:String){
	let urlServer = 'http://localhost:8080/instrumentos/busqueda/'+termino;
	let response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	console.log(response);
	return await response.json();
}


export async function getInstrumentoXIdFectch(id:number){
    let urlServer = 'http://localhost:8080/instrumentoxid/'+id;
    let response = await fetch(urlServer, {
        method:'GET',
        headers:{
            'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
        },
        mode:'cors'
    });
    return await response.json() as Instrumento;
}


export async function deleteInstrumentoPorId(id:number){
	console.log("Eliminar Instrumento ID " + id);
	let urlServer = 'http://localhost:8080/eliminarxid/'+id;
	await fetch(urlServer, {
		method: 'DELETE',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
}

export async function saveInstrumento(instrumento?: Instrumento) {
	let urlServer = 'http://localhost:8080/guardarInstrumento';
	let method:string = "POST";
	if(instrumento && instrumento.id > 0){
		urlServer = 'http://localhost:8080/actualizarInstrumento/'+instrumento?.id;
		method = "PUT";
	}
	await fetch(urlServer, {
	  "method": method,
	  "body": JSON.stringify(instrumento),
	  "headers": {
		"Content-Type": 'application/json'
	  }
	});
}