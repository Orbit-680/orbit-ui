import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Configuration
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bugs', component: BugsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
