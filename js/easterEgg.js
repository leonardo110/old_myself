/**
 * 彩蛋系统
 * 1. 台词卡：点击「绿洲」里的任意海报，抽一句台词（可「再来一句」）
 * 2. 矩阵雨：键盘依次输入 matrix（或 ↑↑↓↓←→←→BA）开启/关闭绿色代码雨
 *
 * 台词数据在 js/quotes.js 的 FILM_QUOTES 里，改文案只改那里。
 */
(function () {
  'use strict';

  var QUOTES = window.FILM_QUOTES || [];

  /* ------------------------------------------------------------------ */
  /* 台词卡                                                              */
  /* ------------------------------------------------------------------ */
  var modal = null;
  var quoteIndex = 0;
  var lastFocus = null;

  function buildModal() {
    if (modal) return;

    modal = document.createElement('div');
    modal.className = 'quote-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML =
      '<div class="quote-backdrop" data-quote-close></div>' +
      '<div class="quote-card" role="dialog" aria-modal="true" aria-labelledby="quoteFilm">' +
      '<span class="quote-mark" aria-hidden="true">“</span>' +
      '<button class="quote-close" type="button" aria-label="关闭台词卡" data-quote-close>&times;</button>' +
      '<p class="quote-kicker">台词彩蛋 · <span id="quoteFilm"></span></p>' +
      '<p class="quote-en" id="quoteEn"></p>' +
      '<p class="quote-zh" id="quoteZh"></p>' +
      '<div class="quote-foot">' +
      '<span class="quote-year" id="quoteYear"></span>' +
      '<button class="quote-next" type="button" id="quoteNext">再来一句 →</button>' +
      '</div>' +
      '</div>';

    document.body.appendChild(modal);

    modal.addEventListener('click', function (event) {
      var target = event.target;
      if (target && target.hasAttribute && target.hasAttribute('data-quote-close')) {
        closeQuote();
      }
    });

    document.getElementById('quoteNext').addEventListener('click', function () {
      showQuote(nextIndex());
    });
  }

  function nextIndex() {
    if (QUOTES.length < 2) return quoteIndex;
    var next = quoteIndex;
    while (next === quoteIndex) {
      next = Math.floor(Math.random() * QUOTES.length);
    }
    return next;
  }

  function showQuote(index) {
    buildModal();
    var quote = QUOTES[index];
    if (!quote) return;

    quoteIndex = index;
    document.getElementById('quoteFilm').textContent = quote.title;
    document.getElementById('quoteEn').textContent = quote.en;
    document.getElementById('quoteZh').textContent = quote.zh;
    document.getElementById('quoteYear').textContent = quote.year ? quote.year + ' · 银幕' : '';

    if (!modal.classList.contains('is-open')) {
      lastFocus = document.activeElement;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      var closeBtn = modal.querySelector('.quote-close');
      if (closeBtn) closeBtn.focus({ preventScroll: true });
    }
  }

  function closeQuote() {
    if (!modal || !modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  function quoteIndexOf(title) {
    for (var i = 0; i < QUOTES.length; i++) {
      if (QUOTES[i].title === title) return i;
    }
    return -1;
  }

  function bindCards() {
    var cards = document.querySelectorAll('.book-card');
    for (var i = 0; i < cards.length; i++) {
      (function (card) {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', card.getAttribute('title') + '：查看台词');

        card.addEventListener('click', function () {
          var index = quoteIndexOf(card.getAttribute('title') || '');
          showQuote(index >= 0 ? index : Math.floor(Math.random() * QUOTES.length));
        });

        card.addEventListener('keydown', function (event) {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            var index = quoteIndexOf(card.getAttribute('title') || '');
            showQuote(index >= 0 ? index : Math.floor(Math.random() * QUOTES.length));
          }
        });
      })(cards[i]);
    }
  }

  /* ------------------------------------------------------------------ */
  /* 矩阵雨                                                              */
  /* ------------------------------------------------------------------ */
  var matrixState = { on: false, raf: 0, canvas: null, ctx: null, drops: [], fontSize: 18 };
  var MATRIX_CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFXYZ';

  function buildRain() {
    if (matrixState.canvas) return;
    var canvas = document.createElement('canvas');
    canvas.className = 'matrix-rain';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.appendChild(canvas);
    matrixState.canvas = canvas;
    matrixState.ctx = canvas.getContext('2d');
    window.addEventListener('resize', sizeRain);
  }

  function sizeRain() {
    var canvas = matrixState.canvas;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var cols = Math.ceil(canvas.width / matrixState.fontSize);
    var rows = Math.ceil(canvas.height / matrixState.fontSize);
    // 随机初始化每一列的下落位置，开启瞬间就是满屏代码雨（而不是从顶部慢慢落下来）
    matrixState.drops = new Array(cols).fill(0).map(function () {
      return Math.floor(Math.random() * rows);
    });
  }

  function renderFrame() {
    var state = matrixState;
    var ctx = state.ctx;
    var canvas = state.canvas;
    if (!ctx || !canvas) return;

    ctx.fillStyle = 'rgba(2, 8, 6, 0.14)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#39ff88';
    ctx.font = state.fontSize + 'px monospace';

    for (var i = 0; i < state.drops.length; i++) {
      var char = MATRIX_CHARS.charAt(Math.floor(Math.random() * MATRIX_CHARS.length));
      var x = i * state.fontSize;
      var y = state.drops[i] * state.fontSize;
      ctx.fillText(char, x, y);
      if (y > canvas.height && Math.random() > 0.975) state.drops[i] = 0;
      state.drops[i]++;
    }
  }

  function drawRain() {
    renderFrame();
    matrixState.raf = requestAnimationFrame(drawRain);
  }

  function startMatrix() {
    if (matrixState.on) return;
    matrixState.on = true;
    buildRain();
    sizeRain();
    matrixState.canvas.classList.add('is-on');
    document.body.classList.add('theme-matrix');
    matrixState.ctx.clearRect(0, 0, matrixState.canvas.width, matrixState.canvas.height);
    // 预渲染几帧，开启瞬间就是满屏拖尾，而不是等着慢慢长出来
    for (var i = 0; i < 12; i++) renderFrame();
    drawRain();
    showToast('WELCOME TO THE MATRIX · 再输入一次 matrix 退出');
  }

  function stopMatrix() {
    if (!matrixState.on) return;
    matrixState.on = false;
    cancelAnimationFrame(matrixState.raf);
    if (matrixState.canvas) matrixState.canvas.classList.remove('is-on');
    document.body.classList.remove('theme-matrix');
    showToast('THE MATRIX HAS YOU · 回到现实');
  }

  function toggleMatrix() {
    if (matrixState.on) stopMatrix();
    else startMatrix();
  }

  /* ------------------------------------------------------------------ */
  /* 轻提示                                                              */
  /* ------------------------------------------------------------------ */
  var toastTimer = null;

  function showToast(text) {
    var toast = document.querySelector('.mx-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'mx-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    clearTimeout(toastTimer);
    toast.classList.remove('is-on');
    // 强制一次重排，让淡出后再淡入的过渡真正生效（比 requestAnimationFrame 稳）
    void toast.offsetWidth;
    toast.classList.add('is-on');
    toastTimer = setTimeout(function () {
      toast.classList.remove('is-on');
    }, 3200);
  }

  /* ------------------------------------------------------------------ */
  /* 键盘彩蛋                                                            */
  /* ------------------------------------------------------------------ */
  var buffer = '';
  var keyHistory = [];
  var KONAMI = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];

  function matchesKonami(keys) {
    if (keys.length < KONAMI.length) return false;
    var offset = keys.length - KONAMI.length;
    for (var i = 0; i < KONAMI.length; i++) {
      if (keys[offset + i] !== KONAMI[i]) return false;
    }
    return true;
  }

  // 在输入框 / 留言编辑器里打字时不触发彩蛋
  function isTyping(target) {
    if (!target) return false;
    var tag = (target.tagName || '').toLowerCase();
    return tag === 'input' || tag === 'textarea' || tag === 'select' || target.isContentEditable;
  }

  function bindKeys() {
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeQuote();
        if (matrixState.on) stopMatrix();
        return;
      }

      if (isTyping(event.target)) return;

      var key = (event.key || '').toLowerCase();

      buffer = (buffer + key).slice(-12);
      keyHistory.push(key);
      if (keyHistory.length > KONAMI.length) keyHistory.shift();

      if (matchesKonami(keyHistory) || buffer.slice(-6) === 'matrix') {
        buffer = '';
        keyHistory = [];
        toggleMatrix();
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* 初始化                                                              */
  /* ------------------------------------------------------------------ */
  function init() {
    if (!QUOTES.length) return;
    bindCards();
    bindKeys();

    // 切到后台时暂停代码雨，省点电
    document.addEventListener('visibilitychange', function () {
      if (!matrixState.on) return;
      if (document.hidden) {
        cancelAnimationFrame(matrixState.raf);
      } else {
        drawRain();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
