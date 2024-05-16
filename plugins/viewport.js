export default ({ app }, inject) => {
  function setViewportHeight() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  // Initial calculation
  setViewportHeight()

  // Recalculate on resize
  window.addEventListener('resize', setViewportHeight)
}
