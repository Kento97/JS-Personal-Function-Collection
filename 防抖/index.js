function debounce(func, delay) {
  return function () {
    setTimeout(() => {
      func.apply(this, arguments)
    }, delay)
  }
}

