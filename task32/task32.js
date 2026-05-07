// ------------------------------
// PROMISE WITH ASYNC/AWAIT
// ------------------------------
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;

      if (success) {
        resolve({ name: "Prithiv", role: "Student" });
      } else {
        reject("Failed to fetch user");
      }
    }, 2000);
  });
}

// ------------------------------
// MAIN FUNCTION
// ------------------------------
async function app() {
  try {
    // Fetch data using async/await
    const user = await fetchUser();
    console.log("Fetched User:", user);

    // ------------------------------
    // LOCAL STORAGE
    // ------------------------------
    localStorage.setItem("username", user.name);
    console.log("Saved to localStorage:", localStorage.getItem("username"));

    // Remove from localStorage
    localStorage.removeItem("username");
    console.log("Removed from localStorage");

    // ------------------------------
    // SESSION STORAGE
    // ------------------------------
    sessionStorage.setItem("sessionUser", user.name);
    console.log("Saved to sessionStorage:", sessionStorage.getItem("sessionUser"));

    // Remove from sessionStorage
    sessionStorage.removeItem("sessionUser");
    console.log("Removed from sessionStorage");

  } catch (error) {
    console.log("Error:", error);
  }
}

// Run the app
app();