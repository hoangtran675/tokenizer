import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-tokenizer',
  templateUrl: './tokenizer.component.html',
  styleUrls: ['./tokenizer.component.scss']
})
export class TokenizerComponent implements OnInit {
  @Output() getWordOuput : EventEmitter<any> = new EventEmitter<any>();
  @Output() getPostagOutput : EventEmitter<any> = new EventEmitter<any>();
  @Input()  list_word : any = [];
  @Input()  postag : any = [];
  textInput = '';
  constructor() { }

  ngOnInit(): void {
  }

  getWord(){
    this.getWordOuput.emit(this.textInput.split(/\n/));
  }

  getPostag(){
    this.getPostagOutput.emit(this.textInput.split(/\n/));
  }

}
