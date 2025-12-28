import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { LandingPage } from './pages/landing-page/landing-page';
import { ProjectDetails } from './pages/project-details/project-details';

export const routes: Routes = [
    {path: "", component: Home, children: [
        {path: "", component: LandingPage },
        {path: "projects/details/:slug", component: ProjectDetails},
        { path: '**', redirectTo: '' } // fallback
    ]}
];
