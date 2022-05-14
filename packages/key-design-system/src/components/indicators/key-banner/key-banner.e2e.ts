import { newE2EPage } from '@stencil/core/testing';

describe('key-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<key-banner></key-banner>');
    const element = await page.find('key-banner');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<key-banner></key-banner>');
    const component = await page.find('key-banner');
    const element = await page.find('key-banner >>> div');
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
