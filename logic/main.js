document.addEventListener("DOMContentLoaded", function () {
  const adviceTitle = document.querySelector(".advice-title");
  const adviceText = document.querySelector(".advice-text");
  const icon = document.querySelector(".icon");
  let isFetching = false;

  async function fetchAdvice() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const adviceNumber = data.slip.id;
      const advice = data.slip.advice;
      adviceTitle.textContent = `ADVICE # ${adviceNumber}`;
      adviceText.textContent = `"${advice}"`;
    } catch (error) {
      console.error(error);
      adviceText.textContent = "Failed to load advice. Please try again.";
    } finally {
      isFetching = false;
    }
  }

  icon.addEventListener("click", function () {
    if (!isFetching) {
      isFetching = true;
      fetchAdvice();
    }
  });
});
