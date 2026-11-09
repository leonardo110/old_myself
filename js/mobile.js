/**
 * 移动端交互增强
 * 1. 窄屏下的汉堡菜单 / 侧滑抽屉导航
 * 2. 触屏设备上点击电影卡片展示立体效果（代替鼠标 hover）
 * 3. 统一的视口变化监听（供 ECharts 等复用）
 *
 * 说明：所有改动只在 documentElement.clientWidth <= 768 或触屏设备上生效，
 *       桌面端的表现与改造前完全一致。
 */
(function () {
  'use strict';

  var MOBILE_MAX_WIDTH = 768;
  var viewportHandlers = [];
  var viewportTimer = null;

  /**
   * 是否移动端布局。
   * 这里刻意使用 documentElement.clientWidth：页面历史原因处于 quirks 模式，
   * 部分环境（含移动端模拟器）的 window.innerWidth 并不等于真实可视宽度。
   */
  function isMobileLayout() {
    return document.documentElement.clientWidth <= MOBILE_MAX_WIDTH;
  }

  function notifyViewportChange() {
    var mobile = isMobileLayout();
    for (var i = 0; i < viewportHandlers.length; i++) {
      try {
        viewportHandlers[i](mobile);
      } catch (error) {
        console.error('[mobile] viewport handler error:', error);
      }
    }
  }

  /** 注册视口尺寸变化回调，注册时会立即执行一次 */
  function onViewportChange(handler) {
    viewportHandlers.push(handler);
    handler(isMobileLayout());
  }

  function scheduleViewportChange(delay) {
    clearTimeout(viewportTimer);
    viewportTimer = setTimeout(notifyViewportChange, delay);
  }

  window.addEventListener('resize', function () {
    scheduleViewportChange(180);
  });
  window.addEventListener('orientationchange', function () {
    scheduleViewportChange(320);
  });

  window.QuanCY = {
    isMobileLayout: isMobileLayout,
    onViewportChange: onViewportChange,
  };

  /* ------------------------------------------------------------------ */
  /* 导航抽屉                                                            */
  /* ------------------------------------------------------------------ */
  var nav = document.getElementById('navTopMenu');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('hrefDiv');

  function setNavOpen(open) {
    if (!nav || !navToggle) return;
    nav.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
  }

  if (nav && navToggle) {
    navToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      setNavOpen(!nav.classList.contains('nav-open'));
    });

    if (navLinks) {
      // 点击任意导航项后收起抽屉
      navLinks.addEventListener('click', function (event) {
        var target = event.target;
        if (target && target.closest && target.closest('a')) setNavOpen(false);
      });
    }

    // 点击抽屉以外的区域收起
    document.addEventListener('click', function (event) {
      if (!nav.classList.contains('nav-open')) return;
      if (nav.contains(event.target)) return;
      setNavOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' || event.keyCode === 27) setNavOpen(false);
    });

    // 回到 PC 宽度时复位
    onViewportChange(function (mobile) {
      if (!mobile) setNavOpen(false);
    });
  }

  /* ------------------------------------------------------------------ */
  /* 触屏设备：点击卡片切换立体效果                                      */
  /* ------------------------------------------------------------------ */
  var supportsHover =
    window.matchMedia && window.matchMedia('(hover: hover)').matches;

  if (!supportsHover) {
    var bookCards = document.querySelectorAll('.book-card');
    for (var i = 0; i < bookCards.length; i++) {
      (function (card) {
        card.addEventListener('click', function () {
          var isActive = card.classList.contains('is-active');
          for (var j = 0; j < bookCards.length; j++) {
            bookCards[j].classList.remove('is-active');
          }
          if (!isActive) card.classList.add('is-active');
        });
      })(bookCards[i]);
    }
  }
})();
