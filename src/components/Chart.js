import React, {useState, useEffect, useRef} from 'react';
import ChartRow from './ChartRow';

function Chart (){
    let [productsList, setProductsList] = useState([])
    let [usersList, setUsersList] = useState([])
    let [pageCurrentProduct, setPageCurrentProduct] = useState(1)
    let [pagePrevProduct, setPagePrevProduct] = useState(null)
    let [pageNextProduct, setPageNextProduct] = useState(null)

    let [pageCurrentUser, setPageCurrentUser] = useState(1)
    let [pagePrevUser, setPagePrevUser] = useState(null)
    let [pageNextUser, setPageNextUser] = useState(null)

    useEffect(()=>{
		fetch(`https://vicath-libreria.herokuapp.com/api/products?page=${pageCurrentProduct}`)
		.then(response => {
			return response.json()
		})
		.then(data => {
			setProductsList(data.products)
            setPagePrevProduct(data.previous)
            setPageNextProduct(data.next)

            fetch(`https://vicath-libreria.herokuapp.com/api/users?page=${pageCurrentUser}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsersList(data.users)
                setPagePrevUser(data.previous)
                setPageNextUser(data.next)
            })
		})
	}, [pageCurrentProduct, pageCurrentUser])


    return (
        <React.Fragment>
        {/* <!-- DataTales PRODUCTS --> */}
        <div>
        <div className="card shadow tabla">
            <div className="card-body">
                <div className="table-responsive">
                    <p>Tabla de productos</p>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Descripción</th>
                                <th>Detalle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            productsList.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>

                    <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        {
                        pagePrevProduct === null ? 
                            <li className="page-item disabled" style={{ backgroundColor: 'gray', color: 'white'}} >
                            <span className="page-link">Previous</span>
                            </li> 
                        :
                            <li className="page-item">
                            <span onClick={()=>{setPageCurrentProduct(pageCurrentProduct-1)}} className="page-link cursor-pointer" key={'prevPage'}>Previous</span>
                            </li>
                        }
                        {
                        pageNextProduct === null ?
                        <li className="page-item disabled" style={{ backgroundColor: 'gray', color: 'white'}}>
                            <span className="page-link">Next</span>
                        </li>
                        :
                        <li className="page-item">
                            <span onClick={()=>{setPageCurrentProduct(pageCurrentProduct+1)}} className="page-link cursor-pointer" key={'nextPage'}>Next</span>
                        </li>
                        }
                        
                    </ul>
                    </nav>
                </div>
            </div>
        </div>

        {/* <!-- DataTales USER --> */}
        <div className="card shadow tabla">
            <div className="card-body">
                <div className="table-responsive">
                    <p>Tabla de usuarios</p>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Detalle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            usersList.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>

                    <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        {
                        pagePrevUser === null ? 
                            <li className="page-item disabled" style={{ backgroundColor: 'gray', color: 'white'}} >
                            <span className="page-link">Previous</span>
                            </li> 
                        :
                            <li className="page-item">
                            <span onClick={()=>{setPageCurrentUser(pageCurrentUser-1)}} className="page-link cursor-pointer" key={'prevPage'}>Previous</span>
                            </li>
                        }
                        {
                        pageNextUser === null ?
                        <li className="page-item disabled" style={{ backgroundColor: 'gray', color: 'white'}}>
                            <span className="page-link">Next</span>
                        </li>
                        :
                        <li className="page-item">
                            <span onClick={()=>{setPageCurrentUser(pageCurrentUser+1)}} className="page-link cursor-pointer" key={'nextPage'}>Next</span>
                        </li>
                        }
                        
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
        </div>

        </React.Fragment>
    )
}

export default Chart;