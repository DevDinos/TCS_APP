import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckIn2Page } from './check-in2.page';

describe('CheckIn2Page', () => {
  let component: CheckIn2Page;
  let fixture: ComponentFixture<CheckIn2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CheckIn2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
