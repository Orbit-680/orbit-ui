import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService } from './shared/auth/auth-guard.service';
import { AuthGuardService as AuthGuard } from './shared/auth/auth-guard.service';
import { ErrorComponent } from './shared/error/error.component';

// Route Configuration
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'tickets', component: TicketsComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'error' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
