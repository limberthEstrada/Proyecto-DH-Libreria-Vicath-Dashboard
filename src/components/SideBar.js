import React from 'react';
import image from '../assets/images/logo-DH.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import SearchMovies from './SearchMovies'
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import Chart from './Chart';
import DetailProductInDb from './DetailProductInDb';

function SideBar(){
    return(
        <React.Fragment>
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-30" src={image} alt="Digital House"/>
                    </div>
                </a>

                <hr className="sidebar-divider my-0"/>

                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Vicath - Grupo7</span></Link>
                </li>

                <hr className="sidebar-divider"/>

                <div className="sidebar-heading">Actions</div>

                <li className="nav-item">
                <Link className="nav-link" to="/totales">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Totales</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/ultimoproducto">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto</span></Link>
                </li>

                <li className="nav-item nav-link">
                <Link className="nav-link" to="/tables">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tablas</span></Link>
                </li>

                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/searchProduct">
                        <i className="fas fa-search"></i>
                        <span>Buscar un producto</span>
                    </Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>

            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/totales">
                    <GenresInDb />
                </Route>
                <Route path="/ultimoproducto">
                    <LastMovieInDb />
                </Route>
                <Route path="/tables">
                    <Chart />
                </Route>
                <Route path="/searchProduct">
                    <SearchMovies />
                </Route>
                <Route path="/verdetalle/:producto">
                    <DetailProductInDb />
                </Route>
                <Route component={NotFound} />
            </Switch>

        </React.Fragment>
    )
}
export default SideBar;