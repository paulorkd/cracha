const Social = {
  github: 'paulorkd',
  youtube: 'UCMKD3zWCOxZiy2M04Fw9cvw',
  instagram: '____pauloricardo',
  facebook: 'paulo.rkd',
  twitter: 'PauloRicaardo__'
}

function MudarNomeLink() {
  for (let li of linksocial.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${Social[social]}`

    //alert(li.children[0].href)
  }
}

MudarNomeLink()

function PegarDadosGitHub() {
  const url = `https://api.github.com/users/${Social.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      nomedousuario.textContent = data.name
      biodousuario.textContent = data.bio
      linkdogit.href = data.html_url
      fotodousuario.src = data.avatar_url
      logindousuario.textContent = data.login
    })
}

PegarDadosGitHub()
