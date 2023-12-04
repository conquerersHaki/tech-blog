// login handler
const loginFormHandler = async function (event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#username-input-login");
    const passwordEl = document.querySelector("#password-input-login");
  
    try {
      // post request for login
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({
          username: usernameEl.value,
          password: passwordEl.value
        }),
        headers: { "Content-Type": "application/json" }
      });
  
      if (response.ok) {
        // back to the dashboard
        document.location.replace("/dashboard");
      } else {
        console.error(`Failed to log in. Status: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  document.querySelector("#login-form").addEventListener("submit", loginFormHandler);