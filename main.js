function createNav () {
  let previous = ''
  let current = window.location.hash.substr(1) || 'HOME'
  changePage()
  changeNavItem()

  document.querySelectorAll('.navbar__item').forEach(element => {
    element.onclick = event => {
      event.preventDefault()
      document.querySelector('#menu').checked = false

      let to = event.target.getAttribute('href')
      push(to)
      window.history.pushState(null, null, `#${current}`)
    }
  })

  document.querySelectorAll('.product').forEach(element => {
    element.onclick = event => {
      event.preventDefault()

      let to = `PLANT${element.id}`
      push(to)
      window.history.pushState(null, null, `#${current}`)
    }
  })

  function push (to) {
    previous = current
    current = to

    changePage()
    changeNavItem()
  }

  function changePage () {
    let className = 'page--active'
    if (previous) {
      let previousPage = document.querySelector('#' + previous)
      previousPage.classList.remove(className)
      document.querySelector('.main').classList.remove('main--' + previous)
    }
    document.querySelector('.main').classList.add('main--' + current)

    let page = document.querySelector('#' + current)
    page.classList.add(className)
  }

  function changeNavItem () {
    let className = 'navbar__item--active'

    if (previous) {
      let previousNavItem = document.querySelector('[href="' + previous + '"]')
      previousNavItem.classList.remove(className)
    }

    let navItem = document.querySelector('[href="' + current + '"]')
    navItem.classList.add(className)
  }
}

function productFilter () {
  let previous = ''
  let current = 'product'

  changeProduct()
  changeFilter()
  document.querySelectorAll('.filter').forEach(element => {
    element.onclick = event => {
      event.preventDefault()

      let to = event.target.getAttribute('href')
      push(to)
    }
  })

  function push (to) {
    previous = current
    current = to

    changeProduct()
    changeFilter()
  }

  function changeProduct () {
    let className = 'product--active'

    if (previous) {
      document.querySelectorAll('.' + previous).forEach(element => {
        element.classList.remove(className)
      })
    }

    document.querySelectorAll('.' + current).forEach(element => {
      element.classList.add(className)
    })
  }

  function changeFilter () {
    let className = 'filter--active'

    if (previous) {
      let previousNavItem = document.querySelector(`[href="${previous}"]`)
      previousNavItem.classList.remove(className)
    }

    let navItem = document.querySelector(`[href="${current}"]`)
    navItem.classList.add(className)
  }
}

function countProduct () {
  document.querySelectorAll('.filter').forEach(element => {
    let productType = element.href.split('/').pop()
    let count = document.querySelectorAll(`.${productType}`).length
    document.querySelector(`[href="${productType}"]`).innerHTML += `(${count})`
  })
}

function closeHamburgerMenu () {
  document.querySelector('.pages').onclick = event => {
    event.preventDefault()
    document.querySelector('#menu').checked = false
  }

}

function main () {
  createNav()
  productFilter()
  countProduct()
  closeHamburgerMenu()
}

main()
