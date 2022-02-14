import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPicturesComponent } from './topic-pictures.component';

describe('TopicPicturesComponent', () => {
  let component: TopicPicturesComponent;
  let fixture: ComponentFixture<TopicPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicPicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
