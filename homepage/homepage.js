const createBtn = document.getElementById('create-btn')
const productDesc = document.getElementById('get-description')
const productImage = document.getElementById('get-file')
createBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const post = document.createElement('div')
    const userName = document.createElement('h3')
    const desc = document.createElement('p')
    const prodImg = document.createElement('div')
    post.className = 'post-container'
    userName.className = 'username'
    prodImg.className = 'product-img'
    desc.className = 'product-desc'
    userName.textContent = prompt('Enter you name')
    userName.style.position = 'relative'
    userName.style.left = '-90px'
    desc.style.position = 'relative'
    desc.style.left = '-80px'
    desc.textContent = productDesc.value
    prodImg.style.position = 'relative'
    prodImg.style.left = '24px'
    prodImg.style.backgroundImage = "url('" + productImage.value.replace('\\', '/') + "')"
    post.appendChild(userName)
    post.appendChild(desc)
    post.appendChild(prodImg)
    document.getElementById('feeds').append(post)
})