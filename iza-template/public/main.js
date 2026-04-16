/* ==========================================================
   Hypergene Profitbase Docs — Custom JS
   Place in: iza-template/public/main.js
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
    // --- "Was this helpful?" feedback widget ---
    // Only add to article pages, not to landing or TOC pages
    const isLanding = document.querySelector('.landing-page');
    const article = document.querySelector('article[role="main"]') || document.querySelector('article');

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
            feedback.innerHTML = `<span>Thanks for your feedback!</span>`;

            // Optional: send to analytics
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
