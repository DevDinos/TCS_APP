import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { InitialSetupPage } from './InitialSetup.page';

describe('InitialSetupPage', () => {
  let component: InitialSetupPage;
  let fixture: ComponentFixture<InitialSetupPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitialSetupPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InitialSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});