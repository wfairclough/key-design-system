import { newSpecPage } from '@stencil/core/testing';
import { KeyInput } from './key-input';

describe('key-input', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyInput],
      html: '<key-input></key-input>',
    });
    expect(root).toEqualHtml(`
      <key-input>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-input>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyInput],
      html: `<key-input first="Stencil" last="'Don't call me a framework' JS"></key-input>`,
    });
    expect(root).toEqualHtml(`
      <key-input first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-input>
    `);
  });
});
