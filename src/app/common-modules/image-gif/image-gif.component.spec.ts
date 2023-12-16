import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGifComponent } from './image-gif.component';

describe('ImageGifComponent', () => {
  let component: ImageGifComponent;
  let fixture: ComponentFixture<ImageGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ImageGifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
