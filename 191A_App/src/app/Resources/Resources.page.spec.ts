import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ResourcesPage } from './Resources.page';

describe('ResourcesPage', () => {
  let component: ResourcesPage;
  let fixture: ComponentFixture<ResourcesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourcesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ResourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});