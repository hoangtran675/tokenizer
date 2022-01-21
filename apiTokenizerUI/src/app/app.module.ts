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

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OtherLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TokenizerModuleModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      newestOnTop: true,
      maxOpened: 1
    } as Partial<GlobalConfig>)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
