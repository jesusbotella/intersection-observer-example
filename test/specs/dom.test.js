import getElementsWithDOMAttribute from 'src/js/dom';

describe('getElementsWithDOMAttribute', () => {
  beforeEach(() => {
    document.body.insertAdjacentHTML('afterend', `
      <aside data-background-src="http://lorempixel.com/120/120/?cachebuster=1">
      </aside>
    `);
  });

  it('should return DOM elements matching provided selector', () => {
    const element = getElementsWithDOMAttribute('data-background-src')[0];
    expect(element.getAttribute('data-background-src')).toEqual('http://lorempixel.com/120/120/?cachebuster=1');
  });
});
