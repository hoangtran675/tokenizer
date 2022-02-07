import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTokenizerComponent } from './pages/page-tokenizer/page-tokenizer.component';
import { TokenizerContainerComponent } from './tokenizer-container/tokenizer-container.component';
// import { TokenizerComponent } from './tokenizer/tokenizer.component';

const routes: Routes = [
  {
    path : '',
    component : PageTokenizerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokenizerModuleRoutingModule { }
