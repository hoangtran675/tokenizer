import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenizerInputComponent } from './tokenizer-input.component';

describe('TokenizerInputComponent', () => {
  let component: TokenizerInputComponent;
  let fixture: ComponentFixture<TokenizerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenizerInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenizerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
