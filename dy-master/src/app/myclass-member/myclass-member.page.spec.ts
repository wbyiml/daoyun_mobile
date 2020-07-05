import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyclassMemberPage } from './myclass-member.page';

describe('MyclassMemberPage', () => {
  let component: MyclassMemberPage;
  let fixture: ComponentFixture<MyclassMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyclassMemberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyclassMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
