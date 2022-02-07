import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTokenizerComponent } from './page-tokenizer.component';

describe('PageTokenizerComponent', () => {
  let component: PageTokenizerComponent;
  let fixture: ComponentFixture<PageTokenizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTokenizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTokenizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
