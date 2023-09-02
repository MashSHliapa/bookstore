export function getCartFromLocalStorage(name: string) {
  const localStorageCart = JSON.parse(localStorage.getItem(name) as string)
  if (!localStorageCart) return []
  return localStorageCart
}
