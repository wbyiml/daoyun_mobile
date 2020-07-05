import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddclassPage } from './addclass.page';

describe('AddclassPage', () => {
  let component: AddclassPage;
  let fixture: ComponentFixture<AddclassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddclassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
