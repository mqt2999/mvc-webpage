const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-name').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    
  
    if (title && content) {
      const response = await fetch(`/api/blog-post/add-post`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/user-dash');
      } else {
        alert('Failed to create project');
      }
    }
  };

  document
  .querySelector('#create-form')
  .addEventListener('click', newFormHandler);