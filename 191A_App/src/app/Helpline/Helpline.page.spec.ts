import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HelplinePage } from './Helpline.page';

describe('HelplinePage', () => {
  let component: HelplinePage;
  let fixture: ComponentFixture<HelplinePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelplinePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HelplinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});