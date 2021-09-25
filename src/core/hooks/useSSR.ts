export const useSSR = () => {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
};
