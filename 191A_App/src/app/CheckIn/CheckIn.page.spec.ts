import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CheckInPage } from './CheckIn.page';

describe('CheckInPage', () => {
  let component: CheckInPage;
  let fixture: ComponentFixture<CheckInPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckInPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});