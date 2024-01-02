import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BobPage } from './Bob.page';

describe('BobPage', () => {
  let component: BobPage;
  let fixture: ComponentFixture<BobPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BobPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});