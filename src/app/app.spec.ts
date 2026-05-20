import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App Component - Online Store', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  // Test 1: App should be created successfully
  it('should create the Online Store application', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  // Test 2: App title property should be correct
  it('should have the correct title', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    expect(app.title).toBe('online-store');
  });

  // Test 3: Main heading should render correctly
  it('should render the main heading', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h1');

    expect(heading).toBeTruthy();
    expect(heading?.textContent).toContain('Welcome to Online Store');
  });

  // Test 4: Header component should be present
  it('should display the header component', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-header')).toBeTruthy();
  });

  // Test 5: Product list component should be present
  it('should display the product list component', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-product-list')).toBeTruthy();
  });

  // Test 6: Footer component should be present
  it('should display the footer component', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });

  // Test 7: Hero section buttons should be visible
  it('should render Shop Now button', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');

    expect(buttons.length).toBeGreaterThan(0);
  });

  // Test 8: Newsletter input should be visible
  it('should render newsletter email input', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const emailInput = compiled.querySelector('input[type="email"]');

    expect(emailInput).toBeTruthy();
  });
});