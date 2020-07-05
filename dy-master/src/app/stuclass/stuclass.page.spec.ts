import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StuclassPage } from './stuclass.page';

describe('StuclassPage', () => {
  let component: StuclassPage;
  let fixture: ComponentFixture<StuclassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuclassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StuclassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
