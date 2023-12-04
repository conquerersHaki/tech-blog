// delete post handler
const deletePostHandler = async function (event) {
    console.log("clicked", event);
    event.preventDefault();
  
    // getting the post id 
    const postId = document.getElementById('post-id').value;
  
    try {
      // send a delete request to the server
      const response = await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        // Redirect to the dashboard
        document.location.replace("/dashboard");
      } else {
        // log error if unsuccessful
        console.error(`Failed to delete post. Status: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  document.querySelector("#delete-btn").addEventListener("click", deletePostHandler);