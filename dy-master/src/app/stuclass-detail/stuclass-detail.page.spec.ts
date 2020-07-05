import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StuclassDetailPage } from './stuclass-detail.page';

describe('StuclassDetailPage', () => {
  let component: StuclassDetailPage;
  let fixture: ComponentFixture<StuclassDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuclassDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StuclassDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
