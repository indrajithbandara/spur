var UserAgentParser = UAParser
var languageMessages = {
  "br": {
    "outOfDate": "O seu navegador est&aacute; desatualizado!",
    "update": {
      "web": "Atualize o seu navegador para ter uma melhor experi&ecirc;ncia e visualiza&ccedil;&atilde;o deste site. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/br",
    "callToAction": "Atualize o seu navegador agora",
    "close": "Fechar"
  },
  "cn": {
    "outOfDate": "您的浏览器已过时",
    "update": {
      "web": "要正常浏览本网站请升级您的浏览器。",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/cn",
    "callToAction": "现在升级",
    "close": "关闭"
  },
  "cz": {
    "outOfDate": "Váš prohlížeč je zastaralý!",
    "update": {
      "web": "Pro správné zobrazení těchto stránek aktualizujte svůj prohlížeč. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/cz",
    "callToAction": "Aktualizovat nyní svůj prohlížeč",
    "close": "Zavřít"
  },
  "de": {
    "outOfDate": "Ihr Browser ist veraltet!",
    "update": {
      "web": "Bitte aktualisieren Sie Ihren Browser, um diese Website korrekt darzustellen. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/de",
    "callToAction": "Den Browser jetzt aktualisieren ",
    "close": "Schließen"
  },
  "ee": {
    "outOfDate": "Sinu veebilehitseja on vananenud!",
    "update": {
      "web": "Palun uuenda oma veebilehitsejat, et näha lehekülge korrektselt. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/ee",
    "callToAction": "Uuenda oma veebilehitsejat kohe",
    "close": "Sulge"
  },
  "en": {
    "outOfDate": "Your browser is out-of-date!",
    "update": {
      "web": "Update your browser to view this website correctly. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/",
    "callToAction": "Update my browser now",
    "close": "Close"
  },
  "es": {
    "outOfDate": "¡Tu navegador está anticuado!",
    "update": {
      "web": "Actualiza tu navegador para ver esta página correctamente. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/es",
    "callToAction": "Actualizar mi navegador ahora",
    "close": "Cerrar"
  },
  "fa": {
    "rightToLeft": true,
    "outOfDate": "مرورگر شما منسوخ شده است!",
    "update": {
      "web": "جهت مشاهده صحیح این وبسایت، مرورگرتان را بروز رسانی نمایید. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/",
    "callToAction": "همین حالا مرورگرم را بروز کن",
    "close": "Close"
  },
  "fi": {
    "outOfDate": "Selaimesi on vanhentunut!",
    "update": {
      "web": "Lataa ajantasainen selain n&auml;hd&auml;ksesi t&auml;m&auml;n sivun oikein. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/",
    "callToAction": "P&auml;ivit&auml; selaimeni nyt ",
    "close": "Sulje"
  },
  "fr": {
    "outOfDate": "Votre navigateur est désuet!",
    "update": {
      "web": "Mettez à jour votre navigateur pour afficher correctement ce site Web. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/fr",
    "callToAction": "Mettre à jour maintenant ",
    "close": "Fermer"
  },
  "hu": {
    "outOfDate": "A böngészője elavult!",
    "update": {
      "web": "Firssítse vagy cserélje le a böngészőjét. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/hu",
    "callToAction": "A böngészőm frissítése ",
    "close": "Close"
  },
  "id":{
    "outOfDate": "Browser yang Anda gunakan sudah ketinggalan zaman!",
    "update": {
      "web": "Perbaharuilah browser Anda agar bisa menjelajahi website ini dengan nyaman. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/",
    "callToAction": "Perbaharui browser sekarang ",
    "close": "Close"
  },
  "it": {
    "outOfDate": "Il tuo browser non &egrave; aggiornato!",
    "update": {
      "web": "Aggiornalo per vedere questo sito correttamente. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/it",
    "callToAction": "Aggiorna ora",
    "close": "Chiudi"
  },
  "lt":{
    "outOfDate": "Jūsų naršyklės versija yra pasenusi!",
    "update": {
      "web": "Atnaujinkite savo naršyklę, kad galėtumėte peržiūrėti šią svetainę tinkamai. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/",
    "callToAction": "Atnaujinti naršyklę ",
    "close": "Close"
  },
  "nl": {
    "outOfDate": "Je gebruikt een oude browser!",
    "update": {
      "web": "Update je browser om deze website correct te bekijken. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/nl",
    "callToAction": "Update mijn browser nu ",
    "close": "Sluiten"
  },
  "pl": {
    "outOfDate": "Twoja przeglądarka jest przestarzała!",
    "update": {
      "web": "Zaktualizuj swoją przeglądarkę, aby poprawnie wyświetlić tę stronę. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/pl",
    "callToAction": "Zaktualizuj przeglądarkę już teraz",
    "close": "Close"
  },
  "pt": {
    "outOfDate": "O seu browser est&aacute; desatualizado!",
    "update": {
      "web": "Atualize o seu browser para ter uma melhor experi&ecirc;ncia e visualiza&ccedil;&atilde;o deste site. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/pt",
    "callToAction": "Atualize o seu browser agora",
    "close": "Fechar"
  },
  "ro": {
    "outOfDate": "Browserul este învechit!",
    "update": {
      "web": "Actualizați browserul pentru a vizualiza corect acest site. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/",
    "callToAction": "Actualizați browserul acum!",
    "close": "Close"
  },
  "ru": {
    "outOfDate": "Ваш браузер устарел!",
    "update": {
      "web": "Обновите ваш браузер для правильного отображения этого сайта. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/ru",
    "callToAction": "Обновить мой браузер ",
    "close": "Закрыть"
  },
  "si": {
    "outOfDate": "Vaš brskalnik je zastarel!",
    "update": {
      "web": "Za pravilen prikaz spletne strani posodobite vaš brskalnik. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/si",
    "callToAction": "Posodobi brskalnik ",
    "close": "Zapri"
  },
  "sv": {
    "outOfDate": "Din webbläsare stödjs ej längre!",
    "update": {
      "web": "Uppdatera din webbläsare för att webbplatsen ska visas korrekt. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/",
    "callToAction": "Uppdatera min webbläsare nu",
    "close": "Stäng"
  },
  "ua": {
    "outOfDate": "Ваш браузер застарів!",
    "update": {
      "web": "Оновіть ваш браузер для правильного відображення цього сайта. ",
      "googlePlay": "Please install Chrome from Google Play",
      "appStore": "Please update iOS from the Settings App"
    },
    "url": "http://outdatedbrowser.com/ua",
    "callToAction": "Оновити мій браузер ",
    "close": "Закрити"
  }
}

window.outdatedBrowser = function (options) {

  var main = function () {

    // Despite the docs, UA needs to be provided to constructor explicitly:
    // https://github.com/faisalman/ua-parser-js/issues/90
    var parsedUserAgent = new UserAgentParser(window.navigator.userAgent).getResult();

    // Variable definition (before ajax)
    var outdatedUI = document.getElementById('outdated');

    options = options || {};

    var browserLocale = window.navigator.language || window.navigator.userLanguage; // Everyone else, IE

        // Set default options
    var browserSupport = options.browserSupport || {
      'Chrome': 37,
      'IE': 10,
      'Safari': 7,
      'Mobile Safari': 7,
      'Firefox': 32
    };
    // CSS property to check for. You may also like 'borderSpacing', 'boxShadow', 'transform', 'borderImage';
    var requiredCssProperty = options.requiredCssProperty || false;
    var backgroundColor = options.backgroundColor || '#f25648'; // Salmon
    var textColor = options.textColor || 'white';
    var language = options.language || browserLocale.slice(0, 2); // Language code

    var updateSource = 'web'; // Other possible values are 'googlePlay' or 'appStore'. Determines where we tell users to go for upgrades.

        // Chrome mobile is still Chrome (unlike Safari which is 'Mobile Safari')
    var isAndroid = parsedUserAgent.os.name === 'Android';
    if (isAndroid) {
      updateSource = 'googlePlay';
    }

    var isAndroidButNotChrome;
    if (options.requireChromeOnAndroid) {
      isAndroidButNotChrome = (isAndroid) && (parsedUserAgent.browser.name !== 'Chrome');
    }

    if (parsedUserAgent.os.name === 'iOS') {
      updateSource = 'appStore';
    }

    var done = true;

    var changeOpacity = function (opacityValue) {
      outdatedUI.style.opacity = opacityValue / 100;
      outdatedUI.style.filter = 'alpha(opacity=' + opacityValue + ')';
    };

    var fadeIn = function (opacityValue) {
      changeOpacity(opacityValue);
      if (opacityValue === 1) {
        outdatedUI.style.display = 'block';
      }
      if (opacityValue === 100) {
        done = true;
      }
    };

    var isBrowserOutOfDate = function () {
      var browserName = parsedUserAgent.browser.name;
      var browserMajorVersion = parsedUserAgent.browser.major;
      var isOutOfDate = false;
      if (browserSupport[browserName]) {
        if (browserMajorVersion < browserSupport[browserName]) {
          isOutOfDate = true;
        }
      }
      return isOutOfDate;
    };

    // Returns true if a browser supports a css3 property
    var isPropertySupported = function (prop) {
      if (!prop) {
        return true;
      }
      var div = document.createElement('div');
      var vendorPrefixes = 'Khtml Ms O Moz Webkit'.split(' ');
      var count = vendorPrefixes.length;

      if (div.style[prop]) {
        return true;
      }

      prop = prop.replace(/^[a-z]/, function (val) {
        return val.toUpperCase();
      });

      while (count--) {
        if (div.style[vendorPrefixes[count] + prop]) {
          return true;
        }
      }
      return false;
    };

    var makeFadeInFunction = function (x) {
      return function () {
        fadeIn(x);
      };
    };

        // Style element explicitly - TODO: investigate and delete if not needed
    var startStylesAndEvents = function () {
      var buttonClose = document.getElementById('buttonCloseUpdateBrowser');
      var buttonUpdate = document.getElementById('buttonUpdateBrowser');

      //check settings attributes
      outdatedUI.style.backgroundColor = backgroundColor;
      //way too hard to put !important on IE6
      outdatedUI.style.color = textColor;
      outdatedUI.children[0].style.color = textColor;
      outdatedUI.children[1].style.color = textColor;

      // Update button is desktop only
      if (buttonUpdate) {
        buttonUpdate.style.color = textColor;
        if (buttonUpdate.style.borderColor) {
          buttonUpdate.style.borderColor = textColor;
        }

        // Override the update button color to match the background color
        buttonUpdate.onmouseover = function () {
          this.style.color = backgroundColor;
          this.style.backgroundColor = textColor;
        };

        buttonUpdate.onmouseout = function () {
          this.style.color = textColor;
          this.style.backgroundColor = backgroundColor;
        };
      }

      buttonClose.style.color = textColor;

      buttonClose.onmousedown = function () {
        outdatedUI.style.display = 'none';
        return false;
      };
    };

    var getmessage = function (lang) {
      var messages = languageMessages[lang] || languageMessages.en;

      var updateMessages = {
        'web': '<p>' + messages.update.web + '<a id="buttonUpdateBrowser" href="' + messages.url + '">' + messages.callToAction + '</a></p>',
        'googlePlay': '<p>' + messages.update.googlePlay +
        '<a id="buttonUpdateBrowser" href="https://play.google.com/store/apps/details?id=com.android.chrome">' + messages.callToAction + '</a></p>',
        'appStore': '<p>' + messages.update[updateSource] + '</p>'
      };

      var updateMessage = updateMessages[updateSource];

      return '<h6>' + messages.outOfDate + '</h6>' + updateMessage +
        '<p class="last"><a href="#" id="buttonCloseUpdateBrowser" title="' + messages.close + '">×</a></p>';
    };

        // Check if browser is supported
    if (isBrowserOutOfDate() || ! isPropertySupported(requiredCssProperty) || isAndroidButNotChrome) {

            // This is an outdated browser
      if (done && outdatedUI.style.opacity !== '1') {
        done = false;

        for (var i = 1; i <= 100; i++) {
          setTimeout(makeFadeInFunction(i), i * 8);
        }
      }

      var insertContentHere = document.getElementById('outdated');
      insertContentHere.innerHTML = getmessage(language);
      startStylesAndEvents();
    }
  };

    // Load main when DOM ready.
  var oldOnload = window.onload;
  if (typeof window.onload !== 'function') {
    window.onload = main;
  }
  else {
    window.onload = function () {
      if (oldOnload) {
        oldOnload();
      }
      main();
    };
  }
};