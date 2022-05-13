import { newE2EPage } from '@stencil/core/testing';

describe('key-visually-hidden', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<key-visually-hidden></key-visually-hidden>');
    const element = await page.find('key-visually-hidden');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<key-visually-hidden></key-visually-hidden>');
    const component = await page.find('key-visually-hidden');
    const element = await page.find('key-visually-hidden >>> div');
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
