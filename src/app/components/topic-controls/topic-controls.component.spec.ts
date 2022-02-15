import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicControlsComponent } from './topic-controls.component';

describe('TopicControlsComponent', () => {
  let component: TopicControlsComponent;
  let fixture: ComponentFixture<TopicControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
