import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTextComponent } from './poke-text.component';

describe('PokeTextComponent', () => {
  let component: PokeTextComponent;
  let fixture: ComponentFixture<PokeTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
