const LocalStorageKey = "assignmentFormUser";

export function setLocalStorageItem(data) {
  localStorage.setItem(LocalStorageKey, JSON.stringify(data));
}

export function getLocalStorageItem() {
  const data = localStorage.getItem(LocalStorageKey)
  if (!data) {
    return;
  }
  return JSON.parse(data)
}