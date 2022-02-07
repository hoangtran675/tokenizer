import { Component, OnInit, Input } from '@angular/core';
import { tranfer_data } from '../../models/tokenizer';

@Component({
  selector: 'app-tokenizer-output',
  templateUrl: './tokenizer-output.component.html',
  styleUrls: ['./tokenizer-output.component.scss']
})
export class TokenizerOutputComponent implements OnInit {
  @Input()  list_word : any = [];
  @Input()  postag : any = [];
  @Input()  loading_get_word : boolean;
  @Input()  loading_postag : boolean;
  @Input()  list_word_data : tranfer_data;
  @Input()  postag_data : tranfer_data;
  constructor() { }

  ngOnInit(): void {
  }

}
