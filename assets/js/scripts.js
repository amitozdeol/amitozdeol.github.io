var $ = function (elem) {
  return document.querySelector(elem);
};
var $$ = function (elem) {
  return document.querySelectorAll(elem);
};

//This is the "Offline copy of pages" service worker
if (navigator.serviceWorker.controller) {
  console.log("[PWA Builder] active service worker found, no need to register");
} else {
  //Register the ServiceWorker
  navigator.serviceWorker
    .register("sw.js", {
      scope: "."
    })
    .then(function (reg) {
      console.log("Service worker has been registered for scope:" + reg.scope);
    });
}

window.addEventListener("load", lazyloading, false);

function lazyloading() {
  var lazyloadImages;
  if ("IntersectionObserver" in window) {
    lazyloadImages = $$(".lazy");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = $$(".lazy");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
}

// Remove no-js class
$("html").classList.remove("no-js");

// Animate to section when nav is clicked
$$('#menu a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: $(this.getAttribute("href")).getBoundingClientRect().top,
      behavior: "smooth"
    });
    if ($("header").classList.contains("active")) {
      $$("header, body").forEach(e => e.classList.remove("active"));
    }
  });
});

// Scroll to top
$("#to-top").addEventListener("click", function (e) {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Scroll to first element
$("#lead-down span").addEventListener("click", function (e) {
  window.scrollTo({
    top: $("#about").getBoundingClientRect().top,
    behavior: "smooth"
  });
});

// Open mobile menu
$("#mobile-menu-open").addEventListener("click", function (e) {
  $$("header, body").forEach(e => e.classList.add("active"));
});

//Copyright year
$("#CR-year").innerHTML = new Date().getFullYear();

//Dark mode fevicon
var darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

handleDarkmode(darkModeMediaQuery);
function handleDarkmode(e) {
  let darkModeOn = e.matches; // true if dark mode is enabled
  let favicon = $('link[rel="icon"]'); // get favicon.ico element
  // replace icons with dark/light themes as appropriate
  favicon.href = darkModeOn ? 'assets/images/AD_logo_white.png' : 'assets/images/AD_logo_dark1.png';
}
darkModeMediaQuery.addListener(handleDarkmode);
