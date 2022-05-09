import { newSpecPage } from '@stencil/core/testing';
import { KeyAppPage } from './key-app-page';

describe('key-app-page', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyAppPage],
      html: '<key-app-page></key-app-page>',
    });
    expect(root).toEqualHtml(`
      <key-app-page>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-app-page>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyAppPage],
      html: `<key-app-page first="Stencil" last="'Don't call me a framework' JS"></key-app-page>`,
    });
    expect(root).toEqualHtml(`
      <key-app-page first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-app-page>
    `);
  });
});
