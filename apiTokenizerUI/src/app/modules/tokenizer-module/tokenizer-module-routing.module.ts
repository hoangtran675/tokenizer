import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenizerComponent } from './tokenizer/tokenizer.component';

const routes: Routes = [
  {
    path : '',
    component : TokenizerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokenizerModuleRoutingModule { }
