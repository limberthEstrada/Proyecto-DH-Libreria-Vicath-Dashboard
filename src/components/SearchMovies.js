import React, {useState, useEffect, useRef} from 'react';

function SearchMovies(){

	//const [movies, setMovies] = useState([]); //Primer estado
	//const [keyword, setKeyword] = useState('hojas'); //Segundo estado
	const [products, setProducts] = useState([]); //Primer estado
	const [wordSearch, setWordSearch] = useState('hojas'); //Segundo estado

	const inputTag = useRef();

	// Credenciales de API
	
	const apiKey = '4faf66b1';
	
	
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		//const endpoint = `https://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`;
		const endpoint = `https://vicath-libreria.herokuapp.com/api/searchproducts?word=${wordSearch}`;
		
			fetch(endpoint)
				.then(response => response.json())
				.then(data => {
					console.log(data)
						setProducts(data.products);
				})
				.catch(error => console.log(error)) //Por errores de sv
		
	}, [wordSearch])

	const searchProductF = async e => { //busqueda dinamica API
		e.preventDefault()
		const inputValue = inputTag.current.value;
		await setWordSearch(inputValue); //la keyword la utilizamos para realizar el pedido externo a la API
		inputTag.current.value = '';
	}

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" >
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input  type="text" ref={inputTag} className="form-control" />
								</div>
								<button onClick={searchProductF} className="btn btn-info" >Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {wordSearch}</h2>
						</div>
						{/* Listado de películas */}
						{
							products.length > 0 && products.map((product, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={'https://vicath-libreria.herokuapp.com'+product.imagenPrincipal}
														alt={product.name} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
													
												</div>
												<p>{product.description}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ products.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
