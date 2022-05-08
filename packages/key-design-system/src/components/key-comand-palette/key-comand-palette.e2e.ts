import { newE2EPage } from '@stencil/core/testing';

describe('key-comand-palette', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<key-comand-palette></key-comand-palette>');
    const element = await page.find('key-comand-palette');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<key-comand-palette></key-comand-palette>');
    const component = await page.find('key-comand-palette');
    const element = await page.find('key-comand-palette >>> div');
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
