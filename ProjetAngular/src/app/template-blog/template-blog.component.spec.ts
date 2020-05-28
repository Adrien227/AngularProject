import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBlogComponent } from './template-blog.component';

describe('TemplateBlogComponent', () => {
  let component: TemplateBlogComponent;
  let fixture: ComponentFixture<TemplateBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
