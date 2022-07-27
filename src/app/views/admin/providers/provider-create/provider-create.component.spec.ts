import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderCreateComponent } from './provider-create.component';

describe('ProviderCreateComponent', () => {
  let component: ProviderCreateComponent;
  let fixture: ComponentFixture<ProviderCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
