import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StuAddclassPage } from './stu-addclass.page';

describe('StuAddclassPage', () => {
  let component: StuAddclassPage;
  let fixture: ComponentFixture<StuAddclassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuAddclassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StuAddclassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
