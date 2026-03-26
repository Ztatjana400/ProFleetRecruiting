// Check device sizes
      const isSmallPhone = window.innerWidth <= 360;
      const isUltraSmallPhone = window.innerWidth <= 280;

      // Header scroll effect
      window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        // Disable parallax on mobile - only desktop
        if (window.innerWidth > 968) {
          const video = document.querySelector('.hero-media');
          if (video) {
            video.style.transform = `translateY(${window.scrollY * 0.3}px)`;
          }
        }
      });

      // Mobile menu toggle
      const menuToggle = document.getElementById('menuToggle');
      const nav = document.getElementById('nav');

      if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
          nav.classList.toggle('active');
          
          // Animate hamburger to X
          const spans = menuToggle.querySelectorAll('span');
          if (nav.classList.contains('active')) {
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

      // Close mobile menu when clicking a link
      document.querySelectorAll('.nav_btn').forEach(link => {
        link.addEventListener('click', () => {
          if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
          }
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (nav && menuToggle && !nav.contains(e.target) && !menuToggle.contains(e.target) && nav.classList.contains('active')) {
          nav.classList.remove('active');
          const spans = menuToggle.querySelectorAll('span');
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      });

      // Intersection Observer for fade-in animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
      });

      // Video loaded class
      const video = document.querySelector('.hero-media');
      if (video) {
        video.addEventListener('canplaythrough', () => {
          video.classList.add('loaded');
        });
      }

      // Smooth scroll for anchor links (with header offset)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            const headerOffset = window.innerWidth <= 360 ? 60 : 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        });
      });

      // Handle resize for small screen detection
      let resizeTimer;
      let wasSmallPhone = window.innerWidth <= 360;
      let wasUltraSmallPhone = window.innerWidth <= 280;

      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          const isSmallPhoneNow = window.innerWidth <= 360;
          const isUltraSmallPhoneNow = window.innerWidth <= 280;
          
          // Reload only if crossing breakpoints
          if (isSmallPhoneNow !== wasSmallPhone || isUltraSmallPhoneNow !== wasUltraSmallPhone) {
            location.reload();
          }
        }, 250);
      });