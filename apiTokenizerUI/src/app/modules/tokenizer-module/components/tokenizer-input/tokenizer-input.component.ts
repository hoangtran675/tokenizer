import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tokenizer-input',
  templateUrl: './tokenizer-input.component.html',
  styleUrls: ['./tokenizer-input.component.scss']
})
export class TokenizerInputComponent implements OnInit {
  @Output() getWordOuput: EventEmitter<any> = new EventEmitter<any>();
  @Output() getPostagOutput: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  textInput = '';
 
  ngOnInit(): void {
  }

  getWord() {
    this.getWordOuput.emit(this.textInput.split(/\n/));
  }

  getPostag() {
    this.getPostagOutput.emit(this.textInput.split(/\n/));
  }

}
