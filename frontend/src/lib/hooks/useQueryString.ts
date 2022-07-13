export const useQueryString = (id: string) => {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get(id);
};
