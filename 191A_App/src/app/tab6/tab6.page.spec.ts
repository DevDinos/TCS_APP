import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { tab6Page } from './tab6.page';

describe('tab6Page', () => {
  let component: tab6Page;
  let fixture: ComponentFixture<tab6Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [tab6Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(tab6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});