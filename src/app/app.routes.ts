import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'angularremote',
        exposedModule: './Component',
        fallback: DummyComponent,
      }).then((m) => m.AppComponent),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./pages/address-form/address-form.component').then(
        (m) => m.AddressFormComponent
      ),
  },
];
