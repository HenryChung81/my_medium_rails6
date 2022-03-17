import { Controller } from 'stimulus'
import axios from 'axios'

export default class extends Controller {
  static targets = ['followButton', 'bookmark']

  follow(event) {
    event.preventDefault()

    let user = this.followButtonTarget.dataset.user
    let button = this.followButtonTarget

    axios
      .post(`/api/users/${user}:id/follow`)
      .then(function (response) {
        let status = response.data.status
        switch (status) {
          case 'sign_in_first':
            alert('須先登入')
            break
          default:
            button.innerHTML = status
        }
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  bookmark(event) {
    event.preventDefault()

    let slug = event.currentTarget.dataset.slug
    let icon = this.bookmarkTarget

    axios
      .post(`/api/stories/${slug}/bookmark`)
      .then(function (response) {
        switch (response.data.status) {
          case 'Bookmarked':
            icon.classList.add('fa-solid')
            icon.classList.remove('fa-regular')
            break
          case 'Unbookmarked':
            icon.classList.add('fa-regular')
            icon.classList.remove('fa-solid')
            break
        }
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
