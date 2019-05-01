const defaultOptions = {
  rootMargin: '0px',
  threshold: 1,
};

export function createObserver(callback = () => {}, overrideOptions) {
  const observerOptions = {
    ...defaultOptions,
    ...overrideOptions,
  };

  return new window.IntersectionObserver(callback, observerOptions);
}

export function onIntersectionChange(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const domElement = entry.target;
      domElement.style.backgroundImage = `url('${domElement.getAttribute('data-background-src')}')`;

      observer.unobserve(domElement);
    }
  });
}
