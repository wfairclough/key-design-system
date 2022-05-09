import { newE2EPage } from '@stencil/core/testing';

describe('key-app-frame', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<key-app-frame></key-app-frame>');
    const element = await page.find('key-app-frame');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<key-app-frame></key-app-frame>');
    const component = await page.find('key-app-frame');
    const element = await page.find('key-app-frame >>> div');
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
