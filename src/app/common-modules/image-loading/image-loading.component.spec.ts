import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLoadingComponent } from './image-loading.component';

describe('ImageLoadingComponent', () => {
  let component: ImageLoadingComponent;
  let fixture: ComponentFixture<ImageLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImageLoadingComponent]
    });
    fixture = TestBed.createComponent(ImageLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
