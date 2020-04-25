var $ = function (elem) {
  return document.querySelector(elem);
};
var $$ = function (elem) {
  return document.querySelectorAll(elem);
};

$("html").classList.remove("no-js"); // Remove no-js class
$("#toggle-switch").checked = false; //Keep toggle switch unchecked

/**
 * NAV ===================================================
 * Animate to section when nav is clicked
 */
$$('#menu a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    $(this.getAttribute("href")).scrollIntoView({behavior: 'smooth'});
    if ($("header").classList.contains("active")) {
      $$("header, body").forEach((e) => e.classList.remove("active"));
    }
  });
});

// Scroll to top
$("#to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll to first element
$("#lead-down span").addEventListener("click", function () {
  window.scrollTo({
    top: $("#about").getBoundingClientRect().top,
    behavior: "smooth",
  });
});

// Open mobile menu
$("#mobile-menu-open").addEventListener("click", function (e) {
  $$("header, body").forEach((e) => e.classList.add("active"));
});

// Remove mobile menu
$("#mobile-menu-close").addEventListener("click", function (e) {
  $$("header, body").forEach((e) => e.classList.remove("active"));
});

/**
 * Copyright year ================================================
 */
$("#CR-year").innerHTML = new Date().getFullYear();

/**
 * Dark mode fevicon ==============================================
 * replace fevicon with dark/light themes as appropriate
 */
var darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
darkModeMediaQuery.addListener(handleDarkmodeFav);
handleDarkmodeFav(darkModeMediaQuery);

function handleDarkmodeFav(e) {
  let darkModeOn = e.matches; // true if dark mode is enabled
  let favicon = $('link[rel="icon"]');
  favicon.href = darkModeOn
    ? "../../assets/images/AD_logo_white.png"
    : "../../assets/images/AD_logo_dark1.png";
}

/**
 * Dark mode CSS =================================================
 * dark mode switch
 */
$("#toggle-switch").addEventListener("click", toggleDarkMode);

function toggleDarkMode(e) {
  if (e.target.checked) {
    $("body").classList.add("dark-mode");
    $("link[href='build/css/style-light.css']").href =
      "build/css/style-dark.css";
  } else {
    $("body").classList.remove("dark-mode");
    $("link[href='build/css/style-dark.css']").href =
      "build/css/style-light.css";
  }
}

/**
 * Lazy load Images ==============================================
 */
window.addEventListener("load", lazyloading, false);

function lazyloading() {
  var lazyloadImages;
  if ("IntersectionObserver" in window) {
    lazyloadImages = $$(".lazy");
    var imageObserver = new IntersectionObserver(function (entries) {
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

    const lazyload = function () {
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
    };

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
}

/**
 * Service Worker - Offline support ==========================================
 * This is the "Offline copy of pages" service worker
 */
if (navigator.serviceWorker.controller) {
  console.log("[PWA Builder] active service worker found, no need to register");
} else {
  //Register the ServiceWorker
  navigator.serviceWorker
    .register("sw.js", {
      scope: "./",
    })
    .then(function (reg) {
      console.log("Service worker has been registered for scope:" + reg.scope);
    });
}
