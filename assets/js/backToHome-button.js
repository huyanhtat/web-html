const backToTop = document.querySelector('.back-to-top');

      window.addEventListener('scroll' , () => {
        if (window.pageYOffset > 500) {
           backToTop.classList.add("open");
        } else {
          backToTop.classList.remove("open");
        }
      })