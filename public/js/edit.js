// edit handler
const editFormHandler = async function (event) {
    event.preventDefault();
  
    const titleEl = document.getElementById('post-title');
    const bodyEl = document.getElementById('post-body');
    const postId = document.getElementById('post-id');
  
    try {
      // put request
      const response = await fetch(`/api/post/${postId.value}`, {
        method: "PUT",
        body: JSON.stringify({
          title: titleEl.value,
          body: bodyEl.value
        }),
        headers: { "Content-Type": "application/json" }
      });
  
      if (response.ok) {
        // redirecting to the dashboard
        document.location.replace("/dashboard");
      } else {
        console.error(`Failed to update post. Status: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);