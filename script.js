document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.querySelector('.loading-screen');
  const loadingText = document.querySelector('.loading-text');
  const text = "<script>alert('Portfolio Loading...')</script>";
  let charIndex = 0;

  const typingElement1 = document.querySelector('.typing-1');
  const typingElement2 = document.querySelector('.typing-2');

  function typeText() {
      if (charIndex < text.length) {
          let char = text.charAt(charIndex);
          if (char === '<') char = '&lt;';
          if (char === '>') char = '&gt;';
          
          loadingText.innerHTML += char;
          charIndex++;
          setTimeout(typeText, 50);
      } else {
          setTimeout(hideLoadingScreen, 1000);
      }
  }

  function hideLoadingScreen() {
      loadingScreen.classList.add('hide-loading-screen');
      setTimeout(() => {
          loadingScreen.style.display = 'none';
          // Start the typing animations after loading screen is gone
          startTypingAnimations();
      }, 500);
  }

  function startTypingAnimations() {
      // Add the start-typing class to trigger animations
      typingElement1.classList.add('start-typing');
      // Second element will start automatically due to animation-delay
      typingElement2.classList.add('start-typing');
  }

  typeText();

  // Scroll behavior for nav
  let prevScrollPos = window.scrollY;
  let topNav = document.querySelector('.topnav');
  let navHeight = topNav.offsetHeight;
  let isNavVisible = true;
  let scrollThreshold = 10;

  window.onscroll = function() {
      let currentScrollPos = window.scrollY;
      let scrollDifference = Math.abs(prevScrollPos - currentScrollPos);

      if (scrollDifference > scrollThreshold) {
          if (prevScrollPos > currentScrollPos) {
              if (!isNavVisible) {
                  topNav.style.top = "0";
                  isNavVisible = true;
              }
          } else {
              if (isNavVisible && currentScrollPos > navHeight) {
                  topNav.style.top = `-${navHeight}px`;
                  isNavVisible = false;
              }
          }
      }

      prevScrollPos = currentScrollPos;
  }
});