import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetialPageComponent } from './listing-detial-page.component';

describe('ListingDetialPageComponent', () => {
  let component: ListingDetialPageComponent;
  let fixture: ComponentFixture<ListingDetialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingDetialPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingDetialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
