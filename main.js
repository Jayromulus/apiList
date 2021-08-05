const mainUrl = 'https://api.publicapis.org/entries';

fetch(mainUrl)
  .then(res => res.json())
  .then(json => display(json))
  .catch(err => console.dir(err))

function display(json) {
  const verified = json.entries.filter(value => value.Auth == "" && value.Cors == 'yes' && value.HTTPS == true);
  console.log(verified)

  const list = document.createElement('ul')
  verified.map((api, index) => {
    const item = document.createElement('li')
    const link = document.createElement('a')
    link.innerText = api.API
    link.href = api.Link

    item.appendChild(link)
    list.appendChild(item)
  })
  document.body.appendChild(list)
}
