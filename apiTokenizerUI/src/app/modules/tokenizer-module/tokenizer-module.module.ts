import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokenizerModuleRoutingModule } from './tokenizer-module-routing.module';
import { TokenizerComponent } from './tokenizer/tokenizer.component';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TokenizerContainerComponent } from './tokenizer-container/tokenizer-container.component';
// import { NzTableModule } from 'ng-zorro-antd/table';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';

@NgModule({
  declarations: [
    TokenizerComponent,
    TokenizerContainerComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    // NzTableModule,
    DemoNgZorroAntdModule
  ],
  providers: [],
})
export class TokenizerModuleModule { }
