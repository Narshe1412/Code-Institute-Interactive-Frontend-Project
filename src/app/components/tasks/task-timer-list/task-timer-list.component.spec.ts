import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { TaskTimerListComponent } from './task-timer-list.component';
import { TimePipe } from 'src/app/pipes/time.pipe';

describe('TaskTimerListComponent', () => {
  let component: TaskTimerListComponent;
  let fixture: ComponentFixture<TaskTimerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskTimerListComponent, TimePipe],
      imports: [NoopAnimationsModule, MatPaginatorModule, MatSortModule, MatTableModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTimerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
