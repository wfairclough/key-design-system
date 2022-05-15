import { newSpecPage } from '@stencil/core/testing';
import { KeyCheckbox } from './key-checkbox';

describe('key-checkbox', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyCheckbox],
      html: '<key-checkbox></key-checkbox>',
    });
    expect(root).toEqualHtml(`
      <key-checkbox>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-checkbox>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyCheckbox],
      html: `<key-checkbox first="Stencil" last="'Don't call me a framework' JS"></key-checkbox>`,
    });
    expect(root).toEqualHtml(`
      <key-checkbox first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-checkbox>
    `);
  });
});
