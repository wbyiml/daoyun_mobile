import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersondetailPage } from './persondetail.page';

describe('PersondetailPage', () => {
  let component: PersondetailPage;
  let fixture: ComponentFixture<PersondetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersondetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersondetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
