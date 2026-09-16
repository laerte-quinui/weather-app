/**
 * Delays the execution of a function.
 * @param callback - The function to be executed after the delay.
 * @param delay - The delay in milliseconds.
 * @returns A debounced version of the callback function with a cancel method.
 */
export const debounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number,
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: T) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      callback(...args);
    }, delay);
  };

  // A cancel method to clear the timeout if needed
  debounced.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return debounced;
};
