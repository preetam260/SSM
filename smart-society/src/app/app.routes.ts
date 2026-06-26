import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  // Public routes
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },

  // Protected routes
  {
  path: 'dashboard',
  canActivate: [authGuard],
  loadComponent: () =>
    import('./features/dashboard/dashboard').then(m => m.DashboardComponent)
    },
  {
    path: 'apartments',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/apartments/apartments.routes').then(m => m.APARTMENT_ROUTES)
  },
  {
    path: 'residents',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/residents/residents.routes').then(m => m.RESIDENT_ROUTES)
  },
  {
    path: 'bills',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/bills/bills.routes').then(m => m.BILL_ROUTES)
  },
  {
    path: 'bookings',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/bookings/bookings.routes').then(m => m.BOOKING_ROUTES)
  },
  {
    path: 'complaints',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/complaints/complaints.routes').then(m => m.COMPLAINT_ROUTES)
  },
  {
    path: 'announcements',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/announcements/announcements.routes').then(m => m.ANNOUNCEMENT_ROUTES)
  },
  {
    path: 'visitors',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/visitors/visitors.routes').then(m => m.VISITOR_ROUTES)
  },
  {
    path: 'facilities',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/facilities/facilities.routes').then(m => m.FACILITY_ROUTES)
  },
  {
    path: 'users',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/users/users.routes').then(m => m.USER_ROUTES)
  },

  // Fallback
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];