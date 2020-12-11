const inputTitulo = document.getElementById("titulo-post")

const inputAutor = document.getElementById("autor-post")

const textAreaConteudo = document.getElementById("conteudo-post")

const inputImagem = document.getElementById("imagem-post")


// const containerPosts = document.getElementById("container-de-posts")


let arrayBlog = []
let contador = 0

const salvarValores = () => {
    const objetoBlog = {
        titulo: inputTitulo.value,
        autor: inputAutor.value,
        conteudo: textAreaConteudo.value,
        imagem: inputImagem.value
    }

    arrayBlog.push(objetoBlog)

    limparCampos( inputTitulo , inputAutor , inputImagem, textAreaConteudo );
    
    window.location.href = "posts.html"

    inserirPost(arrayBlog, contador)
    contador++
    
}


const limparCampos = (titulo, autor, imagem, conteudo) => {
    titulo.value = ""
    autor.value = ""
    imagem.value = ""
    conteudo.value = ""
}



const inserirPost = ( array, index ) => {
    
    
    const containerPosts = document.getElementById("container-de-posts")

    containerPosts.innerHTML += `<div class="item-post"></div>`
    const divPost = document.getElementsByClassName("item-post")

    divPost[index].innerHTML += `<h3>${array[index].titulo}</h3>`
    divPost[index].innerHTML += `<h5>${array[index].autor}</h5>`
    divPost[index].innerHTML += `<img src="${array[index].imagem}"></img>`
    divPost[index].innerHTML += `<p>${array[index].conteudo}</p>`

}