import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  // có thể apply nhiều kiểu layout : layout có navibar ngang, layout có navibar dọc,...
  constructor() { }

  ngOnInit(): void {
  }

}
