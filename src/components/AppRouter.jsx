import React, { useContext } from 'react';
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from '../pages/PostIdPage';
import Error from "../pages/Error";
import {Route, Routes} from "react-router-dom"
import { publicRoutes, privateRoutes } from '../router/routes';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
  console.log(isAuth);

  if(isLoading) {
    return <Loader/>
  }

    return (
          isAuth
          ?
          <Routes>
              {privateRoutes.map(route =>
                <Route 
                  exact={route.exact} 
                  path={route.path} 
                  element={route.element} 
                  key={route.path}
                />
              )}
          </Routes>
          :
          <Routes>
            {publicRoutes.map(route =>
              <Route 
                exact={route.exact} 
                path={route.path} 
                element={route.element}
                key={route.path}
              />
            )}
          </Routes>
    );
};

export default AppRouter;