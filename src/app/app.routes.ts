import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Configuration
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'tickets', component: TicketsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
