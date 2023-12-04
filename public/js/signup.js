// sign up fn
const signupFormHandler = async function (event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#username-input-signup");
    const passwordEl = document.querySelector("#password-input-signup");
  
    try {
      // post req for new user
      await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({
          username: usernameEl.value,
          password: passwordEl.value
        }),
        headers: { "Content-Type": "application/json" }
      });
  
      // back to dashboard
      document.location.replace("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };
  
  document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);