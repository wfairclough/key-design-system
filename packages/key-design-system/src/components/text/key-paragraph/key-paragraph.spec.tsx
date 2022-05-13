import { newSpecPage } from '@stencil/core/testing';
import { KeyParagraph } from './key-paragraph';

describe('key-paragraph', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyParagraph],
      html: '<key-paragraph></key-paragraph>',
    });
    expect(root).toEqualHtml(`
      <key-paragraph>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-paragraph>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyParagraph],
      html: `<key-paragraph first="Stencil" last="'Don't call me a framework' JS"></key-paragraph>`,
    });
    expect(root).toEqualHtml(`
      <key-paragraph first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-paragraph>
    `);
  });
});
