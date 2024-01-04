// Example array of blog posts (for demonstration)
const posts = [
    { title: "First Blog Post", content: "This is the content of the first blog post." },
    { title: "Second Blog Post", content: "This is the content of the second blog post." }
    // Add more blog posts here if needed
  ];
  
  // Function to display blog posts
  function displayBlogPosts() {
    const blogPostsContainer = document.getElementById("blogPosts");
  
    // Clear previous content
    blogPostsContainer.innerHTML = "";
  
    // Display each blog post
    posts.forEach(post => {
      const postElement = document.createElement("article");
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  }
  
  // Call the function to display blog posts when the page loads
  window.addEventListener("load", displayBlogPosts);