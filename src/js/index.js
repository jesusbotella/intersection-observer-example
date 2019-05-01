import { createObserver, onIntersectionChange } from './observer.js';
import getElementsWithDOMAttribute from './dom.js';

const imageObserver = createObserver(onIntersectionChange);

const imageElements = getElementsWithDOMAttribute('data-background-src');
imageElements.forEach(element => imageObserver.observe(element));
