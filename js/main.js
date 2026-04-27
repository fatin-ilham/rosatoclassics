/* ============================================
   ROSATO CLASSICS - Main JavaScript
   ============================================ */

// Rotating quotes for legitimate businessman vibe
const quotes = [
  {
    text: "Quality is remembered long after price is forgotten.",
    author: "Anthony Rosato"
  },
  {
    text: "I don't measure success in volume. I measure it in relationships.",
    author: "Anthony Rosato"
  },
  {
    text: "In this business, your word is everything. I've built mine over decades.",
    author: "Anthony Rosato"
  },
  {
    text: "We treat every customer like family. That's the Rosato way.",
    author: "Anthony Rosato"
  },
  {
    text: "Good shoes take you to good places. I make sure we have both.",
    author: "Anthony Rosato"
  },
  {
    text: "I believe in fair prices, honest deals, and treating people right.",
    author: "Anthony Rosato"
  },
  {
    text: "You don't need to shout about quality. It speaks for itself.",
    author: "Anthony Rosato"
  },
  {
    text: "One happy customer at a time. That's how we've grown.",
    author: "Anthony Rosato"
  },
  {
    text: "Style isn't about the price tag. It's about how you carry yourself.",
    author: "Anthony Rosato"
  },
  {
    text: "I've been in this community a long time. People know what to expect from me.",
    author: "Anthony Rosato"
  }
];

function rotateQuotes() {
  const quoteElements = document.querySelectorAll('.quote-text, .quote-author');
  if (quoteElements.length === 0) return;
  
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  
  if (!quoteText || !quoteAuthor) return;
  
  // Fade out
  quoteText.style.opacity = '0';
  quoteAuthor.style.opacity = '0';
  quoteText.style.transition = 'opacity 0.5s ease';
  quoteAuthor.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    // Get random quote (different from current)
    let randomIndex;
    const currentIndex = quotes.findIndex(q => q.text === quoteText.textContent.replace(/"/g, ''));
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === currentIndex && quotes.length > 1);
    
    const quote = quotes[randomIndex];
    
    // Update content
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `— ${quote.author}`;
    
    // Fade in
    quoteText.style.opacity = '1';
    quoteAuthor.style.opacity = '1';
  }, 500);
}

// Initialize quote rotation every 8 seconds
function initQuoteRotation() {
  const quoteSection = document.querySelector('.quote');
  if (quoteSection) {
    setInterval(rotateQuotes, 8000);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize quote rotation
  initQuoteRotation();
  
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      // Animate hamburger to X
      const spans = menuToggle.querySelectorAll('span');
      if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks) {
        navLinks.classList.remove('active');
        const spans = menuToggle?.querySelectorAll('span');
        if (spans) {
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('.header');
  let lastScroll = 0;

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
      } else {
        header.style.background = 'rgba(10, 10, 10, 0.9)';
      }
      
      lastScroll = currentScroll;
    });
  }

  // Product card hover effect enhancement
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply animation to elements
  document.querySelectorAll('.product-card, .section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

});

// Dynamic year in footer
function updateFooterYear() {
  const yearEl = document.querySelector('.footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

updateFooterYear();
