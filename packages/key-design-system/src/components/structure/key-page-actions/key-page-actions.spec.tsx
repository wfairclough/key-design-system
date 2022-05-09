import { newSpecPage } from '@stencil/core/testing';
import { KeyPageActions } from './key-page-actions';

describe('key-page-actions', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyPageActions],
      html: '<key-page-actions></key-page-actions>',
    });
    expect(root).toEqualHtml(`
      <key-page-actions>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-page-actions>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyPageActions],
      html: `<key-page-actions first="Stencil" last="'Don't call me a framework' JS"></key-page-actions>`,
    });
    expect(root).toEqualHtml(`
      <key-page-actions first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-page-actions>
    `);
  });
});
