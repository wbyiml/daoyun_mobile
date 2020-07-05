import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyclassRegisterPage } from './myclass-register.page';

describe('MyclassRegisterPage', () => {
  let component: MyclassRegisterPage;
  let fixture: ComponentFixture<MyclassRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyclassRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyclassRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
