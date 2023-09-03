export function setCardFromLocalStorage(name: string, data: unknown) {
  localStorage.setItem(name, JSON.stringify(data))
}
