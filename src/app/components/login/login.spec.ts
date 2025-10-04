import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login'; // 👈 asegúrate de que la ruta es correcta

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]  // 👈 standalone usa imports, no declarations
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
