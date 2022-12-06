import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // 启动测试：组件实例可以正常创建，且无编译错误
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 页面测试：组件渲染后，应当包含以下页面内容
  it('should render .vlist', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // 编译渲染后模板页面，类选择器匹配.vlist列表区域至少有2个以上视频子节点
    expect(compiled.querySelector('.vlist')?.childNodes.length).toBeGreaterThanOrEqual(2);
  });
});
