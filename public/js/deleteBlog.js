const delButtonHandler = async (event) => {
    
    event.preventDefault();
    const id = event.target.getAttribute('data-id');
    try{
    const response = await fetch(`/api/blog-post/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({ group_id: `${id}` }),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log('hello')
    if(response.ok){
        document.location.replace('/user-dash');
    } else {
      alert('Failed to delete group');
    } 
    
}
catch(err){
    console.error(err)
}

};

document
    .querySelector('#deleteButton')
    .addEventListener('click', delButtonHandler);