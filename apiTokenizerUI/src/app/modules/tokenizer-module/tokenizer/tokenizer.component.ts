import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-tokenizer',
  templateUrl: './tokenizer.component.html',
  styleUrls: ['./tokenizer.component.scss']
})
export class TokenizerComponent implements OnInit {
  
  textInput = '';
  result: any = [];
  postag : any = [];

  constructor(private service : TestService) { }

  ngOnInit(): void {
  }

  getWord(){
    let textArr = this.textInput.split(/\n/);
    this.service.getWordList(textArr).subscribe((res : any) => {
      console.log(res);
      this.result = res.result;
    });
  }

  getPostag(){
    let textArr = this.textInput.split(/\n/);
    this.service.getPosTag(textArr).subscribe( (res) => {
      this.postag = res.result;
    })
  }

}
