import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { TokenVN, tranfer_data } from '../models/tokenizer';
import { TokenizerServiceService } from '../tokenizer-service/tokenizer-service.service';

@Component({
  selector: 'app-tokenizer-container',
  templateUrl: './tokenizer-container.component.html',
  styleUrls: ['./tokenizer-container.component.scss']
})
export class TokenizerContainerComponent implements OnInit {
  list_word: TokenVN[] = [];
  postag : TokenVN[] = [];
  loading_get_word : boolean = false;
  loading_postag : boolean = false;
  default_tranfer_data : tranfer_data = {
    data : [],
    loading : false
  }
  list_word_data : tranfer_data = this.default_tranfer_data;
  postag_data : tranfer_data = this.default_tranfer_data;

  constructor(private service : TokenizerServiceService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  getWord(textArr : string[]){
      this.loading_get_word = true;
      this.list_word_data.loading = true;
      this.service.getWordList(textArr)
      .pipe(
        finalize(() => {
          this.loading_get_word = false;
          this.list_word_data.loading = true;
        } ))
      .subscribe({
        next : (res : any) => {
          this.list_word = res.result;
          this.list_word_data.data = res.result;
        },
        error : (err) => {
          this.toastr.error('Fail to load data !');
        }
      })
  }
  // subscribe của observable này khác của Bính nên không bị deprecate, so sánh với của Bính
  getPostag(textArr : any){
    this.loading_postag = true;
    this.postag_data.loading = true;
    this.service.getPosTag(textArr)
    .pipe(
        finalize( () => this.loading_postag = false))
    .subscribe({
      next : (res: any) => {
        this.postag = res.result;
        this.postag_data.data = res.result;
      },
      error : (err) => {
        this.toastr.error('Fail to load data !');
      }
    })
  }
}
