import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {GlobalConfig, ToastrModule} from "ngx-toastr";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TokenizerModuleModule } from './modules/tokenizer-module/tokenizer-module.module';
import { LayoutComponent } from './modules/default-layout/layout/layout.component';
import { OtherLayoutComponent } from './modules/default-layout/other-layout/other-layout.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
// import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OtherLayoutComponent,
    DefaultLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // TokenizerModuleModule,
    ToastrModule.forRoot(
      {
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      newestOnTop: true,
      maxOpened: 1
    } as Partial<GlobalConfig>
    ),
    DemoNgZorroAntdModule,
    // NzTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
