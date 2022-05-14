import { newSpecPage } from '@stencil/core/testing';
import { KeyHeading } from './key-heading';

describe('key-heading', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyHeading],
      html: '<key-heading></key-heading>',
    });
    expect(root).toEqualHtml(`
      <key-heading>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-heading>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyHeading],
      html: `<key-heading first="Stencil" last="'Don't call me a framework' JS"></key-heading>`,
    });
    expect(root).toEqualHtml(`
      <key-heading first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-heading>
    `);
  });
});
