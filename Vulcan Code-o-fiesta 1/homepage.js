const createBtn = document.getElementById('create-btn')
const productDesc = document.getElementById('get-description')
const productImage = document.getElementById('get-file')
createBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const name = prompt('enter ur name')
    let feeds = document.createElement('section')
    let postContainer = document.createElement('div')
    let userName = document.createElement('h3')
    let prodDesc = document.createElement('p')
    let prodImage = document.createElement('div')
    postContainer.id = 'post-container'
    feeds.id = 'feeds'
    userName.id = 'username'
    prodDesc.id = 'product-desc'
    prodImage.className = 'product-img'
    userName.textContent = name
    prodDesc.textContent = productDesc.value
    prodImage.style.backgroundImage = "url('/tree-736885__480.jpg')"
    postContainer.appendChild(userName)
    postContainer.appendChild(prodDesc)
    postContainer.appendChild(prodImage)    
    document.getElementById('feeds').appendChild(postContainer)
})