import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { tab7Page } from './tab7.page';

describe('tab7Page', () => {
  let component: tab7Page;
  let fixture: ComponentFixture<tab7Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [tab7Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(tab7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});