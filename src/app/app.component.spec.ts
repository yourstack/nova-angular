import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // 启动测试：组件实例可以正常创建，且无编译错误
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // 属性测试：组件中title属性值，应当等于nova-angular
  it(`should have as title 'nova-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nova-angular');
  });

  // 页面测试：组件渲染后，应当包含以下页面内容
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // 编译渲染后模板页面，类选择器匹配router-outlet，必须存在
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
