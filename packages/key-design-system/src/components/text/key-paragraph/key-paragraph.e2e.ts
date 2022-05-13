import { newE2EPage } from '@stencil/core/testing';

describe('key-paragraph', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<key-paragraph></key-paragraph>');
    const element = await page.find('key-paragraph');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<key-paragraph></key-paragraph>');
    const component = await page.find('key-paragraph');
    const element = await page.find('key-paragraph >>> div');
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
