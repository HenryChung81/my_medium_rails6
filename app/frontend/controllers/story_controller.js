import { Controller } from 'stimulus'
import axios from 'axios'

export default class extends Controller {
  static targets = ['clapCount']

  addClap(event) {
    event.preventDefault()
    let slug = event.currentTarget.dataset.slug

    axios
      .post(`/stories/${slug}/clap`)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    // this.clapCountTarget.innerHTML = 'Henry'
  }
}
