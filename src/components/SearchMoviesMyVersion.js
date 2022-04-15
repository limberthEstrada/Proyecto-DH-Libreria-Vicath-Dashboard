import React, {useState, useEffect, useRef} from 'react';


function SearchMoviesMyVersion(){
	//Generamos el estado y la funcion para modificar el mismo
	let [movies, setMovies] = useState([])
	let [keyword, setKeyword] = useState("action")

	let campoInput = useRef()

	// Credenciales de API
	const apiKey = '4faf66b1'; // Intenta poner cualquier cosa antes para probar

	//Hacemos el pedido asincronico
	useEffect(()=>{
		fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
		.then(response => {
			return response.json()
		})
		.then(data => {
			console.log(data)
			if(!data.Error)
			{
				setMovies(data.Search)
			}
			else
			{
				setMovies([])
			}
			
		})
	}, [keyword])

	//Método del evento

	const busquedaDinamica = async e =>{
		e.preventDefault()
		let textoBuscado = campoInput.current.value
		await setKeyword(textoBuscado)
		campoInput.current.value = ""
	}

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={busquedaDinamica}>
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input ref={campoInput} type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							movies.length > 0 && movies.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={movie.Poster}
														alt={movie.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMoviesMyVersion;
