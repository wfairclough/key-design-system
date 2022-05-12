import { newSpecPage } from '@stencil/core/testing';
import { KeyFlex } from './key-flex';

describe('key-flex', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyFlex],
      html: '<key-flex></key-flex>',
    });
    expect(root).toEqualHtml(`
      <key-flex>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-flex>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyFlex],
      html: `<key-flex first="Stencil" last="'Don't call me a framework' JS"></key-flex>`,
    });
    expect(root).toEqualHtml(`
      <key-flex first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-flex>
    `);
  });
});
