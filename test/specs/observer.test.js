/* eslint-disable import/no-unresolved */
import { createObserver, onIntersectionChange } from 'src/js/observer';

describe('createObserver', () => {
  it('should create a new instance of IntersectionObserver', () => {
    const observer = createObserver();

    expect(observer instanceof window.IntersectionObserver).toBeTruthy();
  });

  it('should override default options when custom options are provided', () => {
    const callback = jest.fn();
    const observer = createObserver(callback, {
      rootMargin: '5px 5px 5px 5px',
      threshold: 0.5,
    });

    expect(observer.rootMargin).toBe('5px 5px 5px 5px');
    expect(observer.thresholds).toContain(0.5);
    expect(observer.thresholds.length).toEqual(1);
  });
});

describe('onIntersectionChange', () => {
  it('should set background-image when target is intersecting', () => {
    const target = {
      style: {},
      getAttribute() {
        return 'https://fake.url.com';
      },
    };

    const entry = {
      isIntersecting: true,
      target,
    };

    const observer = {
      unobserve: jest.fn(),
    };

    onIntersectionChange([entry], observer);

    expect(target).toMatchObject({
      style: {
        backgroundImage: "url('https://fake.url.com')",
      },
    });

    expect(observer.unobserve).toHaveBeenCalledWith(target);
  });

  it('should not change image attribute when element is not intersecting', () => {
    const entry = {
      isIntersecting: false,
    };

    const observer = {
      unobserve: jest.fn(),
    };

    onIntersectionChange([entry], observer);

    expect(observer.unobserve).not.toHaveBeenCalled();
  });
});
