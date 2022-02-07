import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenizerModuleRoutingModule } from './tokenizer-module-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TokenizerContainerComponent } from './tokenizer-container/tokenizer-container.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { TokenizerInputComponent } from './components/tokenizer-input/tokenizer-input.component';
import { TokenizerOutputComponent } from './components/tokenizer-output/tokenizer-output.component';
import { PageTokenizerComponent } from './pages/page-tokenizer/page-tokenizer.component';

@NgModule({
  declarations: [
    TokenizerContainerComponent,
    TokenizerInputComponent,
    TokenizerOutputComponent,
    PageTokenizerComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    DemoNgZorroAntdModule
  ],
  providers: [],
})
export class TokenizerModuleModule { }
