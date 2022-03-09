//Percorrendo tadas as tag "a" da página
document.querySelectorAll('[wm-nav]').forEach(link => {
    const conteudo = document.getElementById('conteudo')
    link.onclick = (e) => {
        e.preventDefault()
        //Pegando o conteúdo html da página que fiz a requisição
        fetch(link.getAttribute('wm-nav'))
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
    }
})