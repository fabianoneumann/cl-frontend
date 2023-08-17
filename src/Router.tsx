import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { VotesToStudy } from './pages/VotesToStudy';
import { DefaultLayout } from './layouts/DefaultLayout';
import { PageNotFound } from './pages/PageNotFound';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/cl-frontend/" element={<LandingPage />} />
                <Route path="/votos-da-semana" element={<VotesToStudy />} />

                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    );
}