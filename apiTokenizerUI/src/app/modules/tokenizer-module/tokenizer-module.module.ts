import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokenizerModuleRoutingModule } from './tokenizer-module-routing.module';
import { TokenizerComponent } from './tokenizer/tokenizer.component';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TokenizerComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
})
export class TokenizerModuleModule { }
