export const useFormatDate = (currentDate) =>
  currentDate.toLocaleString().split('T')[0]
