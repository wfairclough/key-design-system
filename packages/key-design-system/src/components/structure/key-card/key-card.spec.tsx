import { newSpecPage } from '@stencil/core/testing';
import { KeyCard } from './key-card';

describe('key-card', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyCard],
      html: '<key-card></key-card>',
    });
    expect(root).toEqualHtml(`
      <key-card>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-card>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyCard],
      html: `<key-card first="Stencil" last="'Don't call me a framework' JS"></key-card>`,
    });
    expect(root).toEqualHtml(`
      <key-card first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-card>
    `);
  });
});
