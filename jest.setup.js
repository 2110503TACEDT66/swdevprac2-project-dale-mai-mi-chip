import '@testing-library/jest-dom/extend-expect'

// Define a mock for IntersectionObserver
class IntersectionObserver {
    constructor(callback, options) {}
    observe(target) {}
    unobserve(target) {}
    disconnect() {}
  }
  
  // Assign the mock to the global object
  global.IntersectionObserver = IntersectionObserver;