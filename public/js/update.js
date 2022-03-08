const postId = document.querySelector('#postId').value;

const postFormHandler = async (event) =>{
    event.preventDefault();
    
    const title = document.querySelector("#postTitle").value;
    const content = document.querySelector("#postContent").value;
    console.log(title, content, postId);
    if (title && content) {
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({title, content}),
            headers: { 'content-type': 'application/json'},
        });
        
        if (response.ok) {
            document.location.replace(`/post/${postId}`)
        }
    }
}

document
    .querySelector('.edit-post-form')
    .addEventListener('submit', postFormHandler);