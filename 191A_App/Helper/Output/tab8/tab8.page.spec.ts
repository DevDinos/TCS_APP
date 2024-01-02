import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { tab8Page } from './tab8.page';

describe('tab8Page', () => {
  let component: tab8Page;
  let fixture: ComponentFixture<tab8Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [tab8Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(tab8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});