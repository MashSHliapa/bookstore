export function setCartFromLocalStorage(name: string, data: unknown) {
  localStorage.setItem(name, JSON.stringify(data))
}
