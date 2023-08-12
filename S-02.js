// Function to check login credentials
function login(username, password) {
    if (username === "admin" && password === "12345") {
      console.log("Login successful");
    } else {
      console.log("Invalid credentials");
    }
  }
  
  // Test cases
  login("admin", "12345");   // Should print "Login successful"
  login("aadmin", "456613"); // Should print "Invalid credentials"
  login("hdwderh", "78946"); // Should print "Invalid credentials"