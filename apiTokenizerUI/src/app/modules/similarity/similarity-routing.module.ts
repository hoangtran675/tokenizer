import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSimiliratyComponent } from './home-similiraty/home-similiraty.component';
import { SentenceSimilarityComponent } from './sentence-similarity/sentence-similarity.component';
import { TrainSearchComponent } from './train-search/train-search.component';

const routes: Routes = [
  {
    path : '',
    component : HomeSimiliratyComponent
  },
  {
    path : 'test',
    component : TrainSearchComponent
  },
  {
    path : 'test2',
    component : SentenceSimilarityComponent
  },{
    path: '**', 
    component: HomeSimiliratyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimilarityRoutingModule { }
