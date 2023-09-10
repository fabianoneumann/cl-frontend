import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { VotesToStudy } from './pages/VotesToStudy';
import { DefaultLayout } from './layouts/DefaultLayout';
import { PageNotFound } from './pages/PageNotFound';
// import { useContext } from 'react';


// TODO: Create a PrivateRoute component when needed
//      ref: https://github.com/maateusilva/youtube-context-api/blob/master/final/src/routes.js
// function PrivateRoute({ /*isPrivate,*/ ...rest}) {
//     const { /*loading,*/ authenticated } = useContext(AuthContext);

//    // if (loading) {
//    //     return <h2>Loading...</h2>
//    // }

//     if (/*isPrivate &&*/ !authenticated) {
//         return redirect('/cl-frontend');
//     }

//     return <Route {...rest} />
// }

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route path="/cl-frontend/" element={<LandingPage />} />
                <Route path="/votos-da-semana" element={<VotesToStudy />} />

                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    );
}