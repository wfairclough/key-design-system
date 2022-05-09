import { newSpecPage } from '@stencil/core/testing';
import { KeyAppFrame } from './key-app-frame';

describe('key-app-frame', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyAppFrame],
      html: '<key-app-frame></key-app-frame>',
    });
    expect(root).toEqualHtml(`
      <key-app-frame>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-app-frame>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyAppFrame],
      html: `<key-app-frame first="Stencil" last="'Don't call me a framework' JS"></key-app-frame>`,
    });
    expect(root).toEqualHtml(`
      <key-app-frame first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-app-frame>
    `);
  });
});
