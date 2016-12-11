const userContainer = document.getElementById('user-data')
const btn = document.getElementById('btn')

btn.addEventListener('click', function () {
  Pace.restart()
  const oReq = new XMLHttpRequest()
  oReq.open('GET', 'http://jsonplaceholder.typicode.com/photos')
  oReq.onload = function () {
    if (oReq.status >= 200 && oReq.status < 400) {
      const ourData = JSON.parse(this.responseText)
      renderHTML(ourData)
    } else {
      console.log('successfully connected to server error, but failed response')
    }
  }
  oReq.onerror = function () {
    console.log('connection error')
  }
  oReq.send()
})

function renderHTML (user) {
  let usersList = ''
  for (let i = 0; i < user.length; i++) {
    usersList += '<li class="users-list"><img src=' + user[i].thumbnailUrl + ' width="50" />' + user[i].id + '<span class="truncate">' + user[i].title + '</span>' + '</li>'
  }
  userContainer.insertAdjacentHTML('beforeEnd', usersList)
}
