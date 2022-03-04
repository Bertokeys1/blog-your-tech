const update = async (event) =>{
    event.preventDefault();

    const title = document.querySelector("#postTitle").value;
    const content = document.querySelector("#postContent").value;
console.log(title)
    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: { 'content-type': 'application/json'},
        });
        
        if (response.ok) {
            document.location.replace('/post/:id')
        }
    }
}

document
    .querySelector('.edit-post-form---------')
    .addEventListener('submit', postFormHandler);