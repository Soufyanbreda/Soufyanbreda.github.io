export function toggleClassOfElements(elements, predicate, className) {
  elements.forEach(element => {
    if (predicate(element)) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  });
}

export function toggleClassIf(element, condition, className) {
  if (condition) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}
