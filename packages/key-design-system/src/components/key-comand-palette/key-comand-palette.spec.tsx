import { newSpecPage } from '@stencil/core/testing';
import { KeyComandPalette } from './key-comand-palette';

describe('key-comand-palette', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyComandPalette],
      html: '<key-comand-palette></key-comand-palette>',
    });
    expect(root).toEqualHtml(`
      <key-comand-palette>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-comand-palette>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyComandPalette],
      html: `<key-comand-palette first="Stencil" last="'Don't call me a framework' JS"></key-comand-palette>`,
    });
    expect(root).toEqualHtml(`
      <key-comand-palette first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-comand-palette>
    `);
  });
});
