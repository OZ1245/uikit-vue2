export default {
  // inserted: (el, binding, vnode) => {
  inserted: (el) => {
    console.log('el:', el)
    // console.log('binding:', binding)
    // console.log('vnode:', vnode)

    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    wrapper.style.position = 'relative'
    wrapper.style.width = `${el.offsetWidth}px`
    wrapper.style.height = `100%`

    el.parentNode.insertBefore(wrapper, el)
    wrapper.appendChild(el)

    document.addEventListener('scroll', (event) => {
      const scrollTop = event.target.scrollingElement.scrollTop
      
      console.log('el.offsetTop:', el.offsetTop)
      console.log('scrollTop:', scrollTop)
      
      if (el.offsetTop <= scrollTop) {
        el.style.position = 'fixed'
        el.style.top = '0px'
      }

      if (el.offsetTop === scrollTop) {
        el.style.position = 'inherit'
      }

    })
  }
}