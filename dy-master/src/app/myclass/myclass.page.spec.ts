import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyclassPage } from './myclass.page';

describe('MyclassPage', () => {
  let component: MyclassPage;
  let fixture: ComponentFixture<MyclassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyclassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyclassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
