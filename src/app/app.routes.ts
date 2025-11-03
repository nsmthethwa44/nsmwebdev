import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { HeroComponent } from './pages/hero-component/hero-component';
import { ProjectDetailsComponent } from './pages/project-details-component/project-details-component';
import { ProjectsComponent } from './pages/projects-component/projects-component';
import { AboutComponent } from './pages/about-component/about-component';

export const routes: Routes = [
    {path:"", component: HomeComponent, 
        children:[
            {path: "", component: HeroComponent},
            {path: "projects/details/:id", component: ProjectDetailsComponent},
            {path: "projects", component: ProjectsComponent},
            {path: "about", component: AboutComponent},
            { path: '**', redirectTo: '' } // fallback
        ] },
];
