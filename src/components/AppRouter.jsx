import React from 'react'
import Error from '../pages/Error'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '../router'

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route path={route.path} element={route.component} exact={route.exact} key={route.path} />
            )}

            <Route path="/" element={<Navigate to={'/posts'} />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default AppRouter;
