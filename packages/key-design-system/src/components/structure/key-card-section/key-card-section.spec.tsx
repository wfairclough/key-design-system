import { newSpecPage } from '@stencil/core/testing';
import { KeyCardSection } from './key-card-section';

describe('key-card-section', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyCardSection],
      html: '<key-card-section></key-card-section>',
    });
    expect(root).toEqualHtml(`
      <key-card-section>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-card-section>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyCardSection],
      html: `<key-card-section first="Stencil" last="'Don't call me a framework' JS"></key-card-section>`,
    });
    expect(root).toEqualHtml(`
      <key-card-section first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-card-section>
    `);
  });
});
