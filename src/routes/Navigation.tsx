import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';
import logo from '../logo.svg'
import { Suspense } from 'react';

export const Navigation = () => {
    return (
      <Suspense fallback={<span>Cargando...</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                      {routes.map(elemento=> (<li key={elemento.to}>
                            <NavLink to={elemento.to} className={ ({ isActive }) => isActive ? 'nav-active' : '' }>{elemento.name}</NavLink>
                        </li>)  )
                      }
                    </ul>
                   {/* <ul>
                        <li>
                            <NavLink to="/lazy1" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>LazyPage 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>LazyPage 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>LazyPage 3</NavLink>
                        </li>
                    </ul> 
                    */}
                </nav>


                <Routes>

                   {
                    routes.map( r=>(
                      <Route path={r.path} element={ <r.Component /> } />
                    ))
                   } 

                  {/*
                    <Route path="lazy1" element={ <LazyPages1 /> } />
                    <Route path="lazy2" element={ <LazyPages2 />  } />
                    <Route path="lazy3" element={ <LazyPages3 /> } />
                  */}
                    
                    <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
        </Suspense>
    )
}
