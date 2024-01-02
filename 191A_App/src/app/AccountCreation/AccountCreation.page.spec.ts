import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AccountCreationPage } from './AccountCreation.page';

describe('AccountCreationPage', () => {
  let component: AccountCreationPage;
  let fixture: ComponentFixture<AccountCreationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountCreationPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});