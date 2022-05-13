import { newSpecPage } from '@stencil/core/testing';
import { KeySpacer } from './key-spacer';

describe('key-spacer', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeySpacer],
      html: '<key-spacer></key-spacer>',
    });
    expect(root).toEqualHtml(`
      <key-spacer>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-spacer>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeySpacer],
      html: `<key-spacer first="Stencil" last="'Don't call me a framework' JS"></key-spacer>`,
    });
    expect(root).toEqualHtml(`
      <key-spacer first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-spacer>
    `);
  });
});
