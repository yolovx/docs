(() => {
  const header = document.querySelector('[data-md-component="header"]');
  const tabs = document.querySelector('[data-md-component="tabs"]');

  if (!header || !tabs) return;

  let previousScrollY = window.scrollY;
  let animationPending = false;
  let ignoreScrollUntil = 0;

  const updateTabsHeight = () => {
    document.documentElement.style.setProperty('--yolovx-tabs-height', `${tabs.scrollHeight}px`);
  };

  const setTabsHidden = (hidden) => {
    if (tabs.classList.contains('md-tabs--hidden') === hidden) return;

    tabs.classList.toggle('md-tabs--hidden', hidden);
    ignoreScrollUntil = performance.now() + 250;
  };

  const updateNavigation = () => {
    const currentScrollY = window.scrollY;

    if (performance.now() < ignoreScrollUntil) {
      previousScrollY = currentScrollY;
      animationPending = false;
      return;
    }

    const scrollingDown = currentScrollY > previousScrollY;

    setTabsHidden(currentScrollY > 80 && scrollingDown);
    previousScrollY = currentScrollY;
    animationPending = false;
  };

  updateTabsHeight();
  setTabsHidden(previousScrollY > 80);
  window.addEventListener('resize', updateTabsHeight, { passive: true });
  window.addEventListener('pageshow', () => {
    window.requestAnimationFrame(() => {
      previousScrollY = window.scrollY;
      setTabsHidden(previousScrollY > 80);
    });
  });
  window.addEventListener('scroll', () => {
    if (animationPending) return;

    animationPending = true;
    window.requestAnimationFrame(updateNavigation);
  }, { passive: true });
})();