import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SimilarityRoutingModule } from './similarity-routing.module';
import { SentenceSimilarityComponent } from './sentence-similarity/sentence-similarity.component';
import { TrainSearchComponent } from './train-search/train-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import {GlobalConfig, ToastrModule} from "ngx-toastr";
import { HomeSimiliratyComponent } from './home-similiraty/home-similiraty.component';


@NgModule({
  declarations: [
    SentenceSimilarityComponent,
    TrainSearchComponent,
    HomeSimiliratyComponent,
  ],
  imports: [
    CommonModule,
    SimilarityRoutingModule,
    CommonModule,
    FormsModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      newestOnTop: true,
      maxOpened: 1
    } as Partial<GlobalConfig>)
  ]
})
export class SimilarityModule { }
