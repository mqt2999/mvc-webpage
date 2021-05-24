const editblog = async (event) => {
    event.preventDefault();
    const id = location.toString().split('/')[
        location.toString().split('/').length - 1
      ];
    const title = document.querySelector('#title-edit').value;
  const content = document.querySelector('#content-edit').value;

  try {
    await fetch(`/api/blog-post/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    document.location.replace('/user-dash');
  } catch (err) {
    console.error(err)
  }

}
document
  .querySelector('#save-btn')
  .addEventListener('click', editblog);