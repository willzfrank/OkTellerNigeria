var swiper = new Swiper('.myHeaderSwiper', {
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

document.getElementById('current-year').textContent = new Date().getFullYear();

// Get the parent container for the accordion items
const faqContainer = document.querySelector('.faq-content');

// Add event listener to the parent container using event delegation
faqContainer.addEventListener('click', function (event) {
  const clickedItem = event.target.closest('.faq-item');
  if (clickedItem) {
    toggleAccordion(clickedItem);
  }
});

// Function to toggle the accordion
function toggleAccordion(item) {
  const isActive = item.classList.contains('active');
  closeAllItems();

  if (!isActive) {
    item.classList.add('active');
    const question = item.querySelector('.faq-question');
    question.classList.add('active-question'); // Add the 'active-question' class
    const icon = question.querySelector('i');
    icon.classList.replace('uil-plus', 'uil-minus'); // Replace the 'uil-plus' class with 'uil-minus'
    const answer = item.querySelector('.faq-answer');
    answer.classList.add('show');
  }
}

// Function to close all FAQ items
function closeAllItems() {
  const activeItems = faqContainer.querySelectorAll('.faq-item.active');
  activeItems.forEach((item) => {
    item.classList.remove('active');
    const question = item.querySelector('.faq-question');
    question.classList.remove('active-question'); // Remove the 'active-question' class
    const icon = question.querySelector('i');
    icon.classList.replace('uil-minus', 'uil-plus'); // Replace the 'uil-minus' class with 'uil-plus'
    const answer = item.querySelector('.faq-answer');
    answer.classList.remove('show');
  });
}

// PARTNERS SWIPER

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});

// TYPEWRITER
const typewriterElements = document.querySelectorAll('.typewriter');

typewriterElements.forEach((element) => {
  const text = element.innerHTML;
  element.innerHTML = ''; // Clear the text initially

  let i = 0;
  const typeText = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeText, 100); // Adjust the typing speed (in milliseconds)
    }
  };

  typeText();
});

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.mobile-nav-menu a');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('showNav');
  navToggle.classList.toggle('uil-bars');
  navToggle.classList.toggle('uil-times');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('showNav');
    navToggle.classList.remove('uil-times');
    navToggle.classList.add('uil-bars');
  });
});

// Get the elements by their IDs
var usersCountElement = document.getElementById('usersCount');
var clientsCountElement = document.getElementById('clientsCount');
var loggedInCountElement = document.getElementById('loggedInCount');
var experienceCountElement = document.getElementById('experienceCount');

// Define the target numbers
var usersCount = 4560;
var clientsCount = 4032;
var loggedInCount = 3238;
var experienceCount = 4;

// Define the duration for the animation (in milliseconds)
var duration = 2000;

// Define the interval between each count update (in milliseconds)
var interval = 50;

// Calculate the increment for each step
var usersIncrement = Math.ceil(usersCount / (duration / interval));
var clientsIncrement = Math.ceil(clientsCount / (duration / interval));
var loggedInIncrement = Math.ceil(loggedInCount / (duration / interval));
var experienceIncrement = Math.ceil(experienceCount / (duration / interval));

// Function to update the count for each element
function updateCount(element, target, increment) {
  var currentCount = 0;
  var intervalId = setInterval(function () {
    currentCount += increment;
    element.textContent = currentCount + '+';
    if (currentCount >= target) {
      element.textContent = target + '+';
      clearInterval(intervalId);
    }
  }, interval);
}

// Function to check if the section is in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  if (isElementInViewport(usersCountElement)) {
    updateCount(usersCountElement, usersCount, usersIncrement);
    window.removeEventListener('scroll', handleScroll);
  }
  if (isElementInViewport(clientsCountElement)) {
    updateCount(clientsCountElement, clientsCount, clientsIncrement);
    window.removeEventListener('scroll', handleScroll);
  }
  if (isElementInViewport(loggedInCountElement)) {
    updateCount(loggedInCountElement, loggedInCount, loggedInIncrement);
    window.removeEventListener('scroll', handleScroll);
  }
  if (isElementInViewport(experienceCountElement)) {
    updateCount(experienceCountElement, experienceCount, experienceIncrement);
    window.removeEventListener('scroll', handleScroll);
  }
}

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);

// ACTIVE LINKS
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav .menu ul li a');

  // Add click event listener to each nav link
  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Remove the 'active' class from all nav links
      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });

      // Add the 'active' class to the clicked nav link
      this.classList.add('active');

      // Scroll to the corresponding section
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    });
  });
});

// scrolling nav active

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav .menu ul li a');

  // Add click event listener to each nav link
  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Remove the 'active' class from all nav links
      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });

      // Add the 'active' class to the clicked nav link
      this.classList.add('active');

      // Scroll to the corresponding section
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    });
  });

  // Function to update the active link based on the scroll position
  function updateActiveLink() {
    const scrollPosition = window.scrollY;

    // Remove the 'active' class from all nav links
    navLinks.forEach(function (link) {
      link.classList.remove('active');
    });

    // Find the section currently in view
    const sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop - 100 &&
        scrollPosition < sectionTop + sectionHeight - 100
      ) {
        // Get the corresponding nav link for the section
        const targetLink = document.querySelector(
          '.nav .menu ul li a[href="#' + section.id + '"]'
        );
        if (targetLink) {
          // Add the 'active' class to the nav link
          targetLink.classList.add('active');
        }
      }
    });
  }

  // Call the updateActiveLink function when the page loads and on scroll
  window.addEventListener('load', updateActiveLink);
  window.addEventListener('scroll', updateActiveLink);
});
