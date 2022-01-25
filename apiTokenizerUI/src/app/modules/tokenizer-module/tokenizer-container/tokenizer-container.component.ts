import { Component, OnInit } from '@angular/core';
import { TokenizerServiceService } from '../tokenizer-service/tokenizer-service.service';

@Component({
  selector: 'app-tokenizer-container',
  templateUrl: './tokenizer-container.component.html',
  styleUrls: ['./tokenizer-container.component.scss']
})
export class TokenizerContainerComponent implements OnInit {
  list_word: any = [];
  postag : any = [];
  constructor(private service : TokenizerServiceService) { }

  ngOnInit(): void {
  }
  getWord(textArr : any){
      this.service.getWordList(textArr).subscribe((res : any) => {
      console.log(res);
      this.list_word = res.result;
    });
  }
  getPostag(textArr : any){
      this.service.getPosTag(textArr).subscribe( (res : any) => {
      this.postag = res.result;
    })
  }
}
