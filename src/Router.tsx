import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { VotesToStudy } from './pages/VotesToStudy';
import { DefaultLayout } from './layouts/DefaultLayout';
import { PageNotFound } from './pages/PageNotFound';
import { AccountActivation } from './pages/AccountActivation';
import { ActivateYourAccount } from './pages/ActivateYourAccount';
// import { useContext } from 'react';


// TODO: Create a PrivateRoute component when needed
//      ref: https://github.com/maateusilva/youtube-context-api/blob/master/final/src/routes.js
// function PrivateRoute({ /*isPrivate,*/ ...rest}) {
//     const { /*loading,*/ authenticated } = useContext(AuthContext);

//    // if (loading) {
//    //     return <h2>Loading...</h2>
//    // }

//     if (/*isPrivate &&*/ !authenticated) {
//         return redirect('/');
//     }

//     return <Route {...rest} />
// }

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route path="/" element={<LandingPage />} />
                <Route path="/votes-of-the-week" element={<VotesToStudy />} />

                <Route path="/users/activate-your-account" element={<ActivateYourAccount />} />
                <Route path="/users/activate" element={<AccountActivation />} />
                {/* <Route path="/users/reset-password/:token" element={<ResetPassword />} /> */}

                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    );
}