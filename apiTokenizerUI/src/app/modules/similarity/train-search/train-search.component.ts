import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { Model } from './Model';
import { tokenizerService } from './service';


@Component({
  selector: 'app-train-search',
  templateUrl: './train-search.component.html',
  styleUrls: ['./train-search.component.scss']
})
export class TrainSearchComponent implements OnInit {

  constructor(private service: tokenizerService,
    private config: NgSelectConfig,
    private toast: ToastrService) {
      this.config.notFoundText = 'Custom not found';
      this.config.appendTo = 'body';
      this.config.bindValue = 'value';
     }
     arrText = [] as string[];

     question = '';
     selectModel = 'phobert';
     models: Model[] = [];

     uuid = '';

     // option=['option1', 'option2 ', 'option3'];
     // selectedOption = 'option1';
     formModel: any = {};
     paraphrases = {
       "paraphrases": this.arrText
     };
     data = {
       "bot_id": this.uuid,
       "model": this.selectModel,
       "doc": this.question
     };


     model = ['phobert', 'vispacy', 'fasttext'];

     myTextarea = '';
  ngOnInit(): void {
  }

  train() {
    const arr = this.myTextarea.split(/\n/);
    console.log('myTextarea : ', this.myTextarea);
    console.log('++++++++++++++++++++++++++++++++++++++++++++++');
    console.log('arrText : ', this.arrText);
    this.service.train({bot_name: "Chế độ chính sách",paraphrases: arr}).subscribe({
      next: (resp) => {

        console.log('Body : ', resp.body);
        this.uuid = resp.body.uuid;
        this.toast.success('success');

      }, error: (error) => {
        this.toast.error('error');
      }
    });

  }

  search() {
    console.log('uuid : ', this.uuid);
    this.data.bot_id = this.uuid;
    console.log('data.uuid : ', this.data.bot_id);
    console.log('selectModel : ', this.selectModel);
    console.log('doc : ', this.question);

    this.service.search({
      bot_name: "thong_tin_cong_ty",
      model: this.selectModel,
      doc: this.question
    }).subscribe({
    next:(resp) => {
      this.models = resp.body;
      console.log('Body : ', this.models);
      console.log('length : ', resp.body.length);
      this.toast.success('success');
    },error:(error )=>{
      this.toast.error('error');
    }
    }
    );
  }


  onChange(event: string) {

    console.log('event : ', event);
    this.selectModel = event;

    console.log('Selected model : ', this.selectModel);
  }


  test() {
    this.toast.success("Hello, I'm the toastr message.")

  }

  onTest() {
    this.toast.success("Hello, I'm the toastr message.")
  }
}

