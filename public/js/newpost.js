// new post fn
const newFormHandler = async function (event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
  
    // getting token from local
    const token = localStorage.getItem("token");
  
    try {
      // post req for new post
      await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify({
          title,
          body
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
  
      // back to dsahboard
      document.location.replace("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };
  
  document.querySelector("#new-post-form").addEventListener("submit", newFormHandler);