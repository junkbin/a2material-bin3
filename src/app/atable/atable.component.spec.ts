
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtableComponent } from './atable.component';

describe('AtableComponent', () => {
  let component: AtableComponent;
  let fixture: ComponentFixture<AtableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
