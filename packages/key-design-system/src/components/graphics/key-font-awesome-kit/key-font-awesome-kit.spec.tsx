import { newSpecPage } from '@stencil/core/testing';
import { KeyFontAwesomeKit } from './key-font-awesome-kit';

describe('key-font-awesome-kit', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyFontAwesomeKit],
      html: '<key-font-awesome-kit></key-font-awesome-kit>',
    });
    expect(root).toEqualHtml(`
      <key-font-awesome-kit>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-font-awesome-kit>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyFontAwesomeKit],
      html: `<key-font-awesome-kit first="Stencil" last="'Don't call me a framework' JS"></key-font-awesome-kit>`,
    });
    expect(root).toEqualHtml(`
      <key-font-awesome-kit first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-font-awesome-kit>
    `);
  });
});
