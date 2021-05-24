const newFormHandler = async (event) => {
    event.preventDefault();
  
    const contents = document.querySelector('#comment-con').value.trim();
  
    const group_id = location.toString().split('/')[
      location.toString().split('/').length - 1
    ];
  
    if (contents) {
      console.log("start of contents")
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ contents, group_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .querySelector('#submit')
    .addEventListener('click', newFormHandler);