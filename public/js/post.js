const postFormHandler = async (event) => {
    event.preventDefautlt();
}

document
    .querySelector('.new-post-form')
    .addEventListener('submit', postFormHandler);