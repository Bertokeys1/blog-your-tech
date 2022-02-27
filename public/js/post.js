const postFormHandler = async (event) => {
    event.preventDefautlt();

    const postTitle = document.querySelector();
    const postContent = document.querySelector();

    if (postTitle && postContent) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({postTitle, postContent}),
            headers: { 'content-type': 'application/json'},
        });
        
        if (response.ok) {
            
        }
    }
}

document
    .querySelector('.new-post-form')
    .addEventListener('submit', postFormHandler);