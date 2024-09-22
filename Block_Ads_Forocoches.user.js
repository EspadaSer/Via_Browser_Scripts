// ==UserScript==
// @name         Block_Ads_Forocoches
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bloquea anuncios en forocoches.com
// @author       TuNombre
// @match        *forocoches.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Selecciona y oculta los elementos de anuncios
    var adElements = document.querySelectorAll('.anuncio, .ad, .adsbygoogle, [id^="google_ads"], .banner, .optidigital-wrapper-div');
    
    adElements.forEach(function(ad) {
        ad.style.display = 'none';
    });

    // Para bloquear dinámicamente anuncios que se cargan después
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) {
                    var ads = node.querySelectorAll('.anuncio, .ad, .adsbygoogle, [id^="google_ads"], .banner, .optidigital-wrapper-div');
                    ads.forEach(function(ad) {
                        ad.style.display = 'none';
                    });
                }
            });
        });
    });

    // Observa el documento para cambios dinámicos
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
