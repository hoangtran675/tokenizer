import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenizerContainerComponent } from './tokenizer-container.component';

describe('TokenizerContainerComponent', () => {
  let component: TokenizerContainerComponent;
  let fixture: ComponentFixture<TokenizerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenizerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenizerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
