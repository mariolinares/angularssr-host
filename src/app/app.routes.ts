import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'remote',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'angularnossr',
        exposedModule: './Component',
        fallback: DummyComponent,
      }).then((m) => m.AddressFormComponent),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./pages/address-form/address-form.component').then(
        (m) => m.AddressFormComponent
      ),
  },
];
