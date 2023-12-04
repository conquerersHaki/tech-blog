// logout fn
const logout = async function () {
    try {
      // post req for logging out
      const response = await fetch("/api/user/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
  
      if (response.ok) {
        // back to homepage
        document.location.replace("/");
      } else {
        console.error(`Failed to log out. Status: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
    }
  };
  

  document.querySelector("#logout-link").addEventListener("click", logout);