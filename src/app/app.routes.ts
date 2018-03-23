import { AdminRoleGuardService } from './shared/guards/admin-role-guard.service';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService } from './shared/auth/auth-guard.service';
import { AuthGuardService as AuthGuard } from './shared/auth/auth-guard.service';
import { AdminRoleGuardService as AdminRoleGuard } from './shared/guards/admin-role-guard.service';

// Route Configuration
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'tickets', component: TicketsComponent, canActivate: [AuthGuard, AdminRoleGuard] },
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
