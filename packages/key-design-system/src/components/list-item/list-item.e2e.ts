import { newE2EPage } from '@stencil/core/testing';

describe('key-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<key-list-item></key-list-item>');
    const element = await page.find('key-list-item');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<key-list-item></key-list-item>');
    const component = await page.find('key-list-item');
    const element = await page.find('key-list-item >>> div');
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
