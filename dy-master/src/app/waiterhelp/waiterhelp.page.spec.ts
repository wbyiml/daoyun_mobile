import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaiterhelpPage } from './waiterhelp.page';

describe('WaiterhelpPage', () => {
  let component: WaiterhelpPage;
  let fixture: ComponentFixture<WaiterhelpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterhelpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaiterhelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
