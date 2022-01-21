import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSimiliratyComponent } from './home-similiraty.component';

describe('HomeSimiliratyComponent', () => {
  let component: HomeSimiliratyComponent;
  let fixture: ComponentFixture<HomeSimiliratyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSimiliratyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSimiliratyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
