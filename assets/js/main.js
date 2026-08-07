/* ================================================
   VAGAS PELO BRASIL — main.js
   PostHog (via proxy) + mobile nav
   ================================================ */

// ---------- Mobile Nav Toggle ----------
(function() {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('open');
    });
  }
})();

// ---------- PostHog ----------
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onFeatureFlags onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

posthog.init('phc_XXXXXXXXXXXXXXXXXXXXXXXXXXXXX', {
  api_host: 'https://ph.vagaspelobrasil.com.br',
  person_profiles: 'identified_only',
  capture_pageview: true
});

// ---------- Popup promocional (DNA Women) ----------
// 1x por sessao (sessionStorage). Imagem em /assets/img/popup.jpeg.
(function() {
  if (sessionStorage.getItem('vpb_popup_dna')) return;
  function show() {
    sessionStorage.setItem('vpb_popup_dna', '1');
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px';
    var box = document.createElement('div');
    box.style.cssText = 'position:relative;max-width:min(480px,92vw)';
    var close = document.createElement('button');
    close.setAttribute('aria-label', 'Fechar');
    close.innerHTML = '&times;';
    close.style.cssText = 'position:absolute;top:-14px;right:-14px;width:32px;height:32px;border-radius:50%;border:0;background:#fff;color:#222;font-size:20px;line-height:1;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.35)';
    var link = document.createElement('a');
    link.href = 'https://trk.aeobr.com.br/c/dna-women-caracol-site';
    link.target = '_blank';
    link.rel = 'sponsored noopener';
    var img = document.createElement('img');
    img.src = '/assets/img/popup.jpeg';
    img.alt = 'Promocao';
    img.style.cssText = 'display:block;max-width:100%;max-height:80vh;border-radius:8px';
    link.appendChild(img);
    box.appendChild(link);
    box.appendChild(close);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    function dismiss() { overlay.remove(); }
    close.addEventListener('click', dismiss);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) dismiss(); });
    link.addEventListener('click', dismiss);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', show);
  else show();
})();
