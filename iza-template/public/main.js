/* ==========================================================
   Hypergene Profitbase Docs — Custom JS v10
   ========================================================== */

export default {
  defaultTheme: 'light',

  iconLinks: [
    {
      icon: 'github',
      href: 'https://github.com/Profitbase-Public/Episode-Docs',
      title: 'GitHub'
    },
    {
      icon: 'globe',
      href: 'https://www.hypergene.com/en/profitbase',
      title: 'Hypergene Profitbase'
    }
  ],

  start: () => {
    const isLanding = document.querySelector('.landing-page');
    const article = document.querySelector('article[role="main"]') || document.querySelector('article');

    // =========================================================
    // Landing search — activates DocFX navbar search
    // =========================================================
    if (isLanding) {
      const landingInput = document.querySelector('.landing-search-input');

      if (landingInput) {
        const activateSearch = () => {
          const query = landingInput.value.trim();
          if (!query) return;

          const navInput = document.getElementById('search-query');
          if (!navInput) return;

          // Show navbar search
          const navSearch = navInput.closest('.search');
          if (navSearch) {
            navSearch.style.cssText = 'position:static!important;width:auto!important;height:auto!important;overflow:visible!important;opacity:1!important;pointer-events:auto!important;';
          }

          // Transfer query and trigger DocFX search
          navInput.value = query;
          navInput.dispatchEvent(new Event('input', { bubbles: true }));
          navInput.focus();

          // Hide landing content, show only search results
          const landingPage = document.querySelector('.landing-page');
          if (landingPage) {
            landingPage.style.display = 'none';
          }
        };

        // Enter triggers search
        landingInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            activateSearch();
          }
        });

        // Search button triggers search
        const searchBtn = document.querySelector('.search-kbd');
        if (searchBtn) {
          searchBtn.style.cursor = 'pointer';
          searchBtn.addEventListener('click', () => {
            activateSearch();
          });
        }
      }
    }

    // =========================================================
    // "Was this helpful?" feedback widget
    // =========================================================
    if (article && !isLanding) {
      const existing = article.querySelector('.feedback-row');
      if (!existing) {
        const feedback = document.createElement('div');
        feedback.className = 'feedback-row';
        feedback.innerHTML = `
          <span>Was this page helpful?</span>
          <button data-value="yes">Yes</button>
          <button data-value="no">No</button>
        `;
        article.appendChild(feedback);

        feedback.querySelectorAll('button').forEach(btn => {
          btn.addEventListener('click', () => {
            const value = btn.getAttribute('data-value');
            feedback.innerHTML = '<span>Thanks for your feedback!</span>';

            if (typeof gtag === 'function') {
              gtag('event', 'docs_feedback', {
                page: window.location.pathname,
                helpful: value
              });
            }
          });
        });
      }
    }
  }
};