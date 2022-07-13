export function useGetExtensionFile(item){
  return item.src.slice(item.src.lastIndexOf("."))
}