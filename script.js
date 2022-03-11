const loadPosts = async () => {
    let data = await fetch('./data/posts.json')
    let post = await data.json();
    showPost(post);
    
}

const showPost = posts => {
    console.log(posts);
    const section = document.getElementById('sec')
    posts.forEach(post => {
        const div = document.createElement('div')
        div.innerHTML = `
        <h1>${post.name}</h1>
        <h2>${post.work}</h2>
      
        `
        section.appendChild(div)
    });
}


loadPosts()


