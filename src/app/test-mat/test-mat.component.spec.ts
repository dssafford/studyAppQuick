import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatComponent } from './test-mat.component';
import {MatCard, MatCardModule, MatIcon, MatIconModule, MatIconRegistry, MatTableDataSource, MatTableModule} from '@angular/material';

describe('TestMatComponent', () => {
  let component: TestMatComponent;
  let fixture: ComponentFixture<TestMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatComponent],
      imports: [MatCardModule, MatIconModule, MatTableModule],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
