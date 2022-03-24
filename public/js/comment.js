const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#commentContent').value;
    const post_id = document.querySelector('.comment').id;
  
  
    if (comment) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                comment,
                post_id
            }),
            headers: { 'content-type': 'application/json'},
        });
        
        if (response.ok) {
            document.location.reload()
        }
    }
    
}

document
    .querySelector('#commentForm')
    .addEventListener('submit', commentFormHandler);