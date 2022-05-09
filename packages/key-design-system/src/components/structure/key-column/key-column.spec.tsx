import { newSpecPage } from '@stencil/core/testing';
import { KeyColumn } from './key-column';

describe('key-column', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyColumn],
      html: '<key-column></key-column>',
    });
    expect(root).toEqualHtml(`
      <key-column>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-column>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyColumn],
      html: `<key-column first="Stencil" last="'Don't call me a framework' JS"></key-column>`,
    });
    expect(root).toEqualHtml(`
      <key-column first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-column>
    `);
  });
});
