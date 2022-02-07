import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenizerOutputComponent } from './tokenizer-output.component';

describe('TokenizerOutputComponent', () => {
  let component: TokenizerOutputComponent;
  let fixture: ComponentFixture<TokenizerOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenizerOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenizerOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
