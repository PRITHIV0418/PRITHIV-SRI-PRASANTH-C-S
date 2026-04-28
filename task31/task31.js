// Function that accepts a callback
function asyncOperation(callback) {
  // Create a promise
  const promise = new Promise((resolve, reject) => {
    let success = true; // change to false to test rejection

    setTimeout(() => {
      if (success) {
        resolve("Operation successful!");
      } else {
        reject("Operation failed!");
      }
    }, 1000);
  });

  // Handle promise using then and catch
  promise
    .then((result) => {
      callback(null, result); // no error, return result
    })
    .catch((error) => {
      callback(error, null); // return error
    });
}

// Example callback function
function myCallback(err, data) {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Success:", data);
  }
}

// Call the function
asyncOperation(myCallback);