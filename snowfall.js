const NUM_SNOWFLAKES = 50; // Number of snowflakes

function createSnowflakes() {
  const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the header

  for (let i = 0; i < NUM_SNOWFLAKES; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.innerHTML = "&#10052;"; // Snowflake character
    snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    snowflake.style.animationDuration = `${1 + Math.random() * 3}s`; // Random animation duration
    snowflake.style.animationDelay = `${-Math.random() * 5}s`; // Random animation delay
    snowflake.style.top = `-${Math.random() * headerHeight}px`; // Start snowflakes above the header
    document.body.appendChild(snowflake);
  }
}

window.onload = createSnowflakes;


