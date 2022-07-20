const useDebounce = (func) => {
  const delay = 300;
  clearTimeout(null);
  setTimeout(() => {
    func.apply(this);
  }, delay);
};

export default useDebounce;
