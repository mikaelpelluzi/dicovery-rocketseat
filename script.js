function toogleModel() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se estiver no light model, usar avatar-light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se estiver no dark model, usar avatar
    img.setAttribute("src", "./assets/avatar.png")
  }
}
