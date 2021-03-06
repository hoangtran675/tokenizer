import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
// import { LayoutComponent } from './modules/default-layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'tokenizer',
        loadChildren: () => import('./modules/tokenizer-module/tokenizer-module-routing.module').then(m => m.TokenizerModuleRoutingModule)
      },
      {
        path: 'similar',
        loadChildren: () => import('./modules/similarity/similarity.module').then(m => m.SimilarityModule)
      },
      {
        path: '', 
        redirectTo: 'tokenizer',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
