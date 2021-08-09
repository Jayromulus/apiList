const mainUrl = 'https://api.publicapis.org/entries'
const target = document.getElementById('target')

fetch(mainUrl)
  .then(res => res.json())
  .then(json => display(json))
  .catch(err => console.dir(err))

function display(json) {
  const verified = json.entries.filter(value => value.Auth == "" && value.Cors == 'yes' && value.HTTPS == true);
  console.log(verified)
  verified.sort((a, b) => {
    if(a.Category[0] < b.Category[0]) {
      return -1
    } else if(a.Category[0] > b.Category[0]) {
      return 1
    } else {
      return 0
    }
  })

  // const list = document.createElement('ul')

  /*
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
      </div>
      <div class="flip-card-back">
        <h1>John Doe</h1>
        <p>Architect & Engineer</p>
        <p>We love that guy</p>
      </div>
    </div>
  </div>
  */
  verified.map((api, index) => {
    const card = document.createElement('div')
    const inner = document.createElement('div')
    const front = document.createElement('div')
    const back = document.createElement('div')
    const link = document.createElement('a')
    const frontWords = document.createElement('p')
    const backWords = document.createElement('p')

    frontWords.innerText = api.API
    frontWords.style.fontSize = '1.5em'
    frontWords.style.padding = '0px 5%'
    backWords.innerText = api.Description
    backWords.style.fontSize = '1.75em'
    backWords.style.padding = '0px 5%'

    link.href = api.Link
    link.target = '_blank'
    

    card.classList.add('flip-card')
    inner.classList.add('flip-card-inner')
    front.classList.add('flip-card-front')
    back.classList.add('flip-card-back')

    link.appendChild(card)
    front.appendChild(frontWords)
    back.appendChild(backWords)
    inner.appendChild(front)
    inner.appendChild(back)
    card.appendChild(inner)
    target.appendChild(link)
  })
  // document.body.appendChild(list)
}

