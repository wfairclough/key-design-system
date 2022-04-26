import { newSpecPage } from '@stencil/core/testing';
import { KeyNavbar } from './key-navbar';

describe('key-navbar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KeyNavbar],
      html: '<key-navbar></key-navbar>',
    });
    expect(root).toEqualHtml(`
      <key-navbar>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-navbar>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KeyNavbar],
      html: `<key-navbar first="Stencil" last="'Don't call me a framework' JS"></key-navbar>`,
    });
    expect(root).toEqualHtml(`
      <key-navbar first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-navbar>
    `);
  });
});
