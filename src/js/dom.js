export default function getElementsWithDOMAttribute(attributeName) {
  return document.querySelectorAll(`[${attributeName}]`);
}
