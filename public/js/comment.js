const commentFormHandler = async (event) => {
    event.preventDefautlt();

    const commentContent = document.querySelector();

    if (commentContent) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({commentContent}),
            headers: { 'content-type': 'application/json'},
        });
        
        if (response.ok) {
            
        }
    }
}

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', postFormHandler);