import { newSpecPage } from '@stencil/core/testing';
import { KeySpinner } from './key-spinner';

describe('key-spinner', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeySpinner],
      html: '<key-spinner></key-spinner>',
    });
    expect(root).toEqualHtml(`
      <key-spinner>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-spinner>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeySpinner],
      html: `<key-spinner first="Stencil" last="'Don't call me a framework' JS"></key-spinner>`,
    });
    expect(root).toEqualHtml(`
      <key-spinner first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-spinner>
    `);
  });
});
