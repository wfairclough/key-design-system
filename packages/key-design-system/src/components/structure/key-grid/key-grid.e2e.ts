import { newE2EPage } from '@stencil/core/testing';

describe('key-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<key-grid></key-grid>');
    const element = await page.find('key-grid');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<key-grid></key-grid>');
    const component = await page.find('key-grid');
    const element = await page.find('key-grid >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
