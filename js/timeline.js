/**
 * 迭代时间线交互
 * - 底部进度条（滑块大小 = 可视区域占内容的比例）
 * - 左右箭头翻页
 * - 桌面端按住拖动滚动（触摸交给系统原生滚动）
 * - 首次滚动后淡出「左右滑动查看」提示
 */
(function () {
  'use strict';

  function init() {
    var track = document.getElementById('chronicles-container');
    if (!track) return;

    var prevBtn = document.querySelector('.chronicles-nav.is-prev');
    var nextBtn = document.querySelector('.chronicles-nav.is-next');
    var progress = document.querySelector('.chronicles-progress span');
    var hint = document.querySelector('.chronicles-hint');

    var dragging = false;
    var dragStartX = 0;
    var dragStartLeft = 0;
    var dragMoved = false;
    var ticking = false;

    function maxScroll() {
      return Math.max(0, track.scrollWidth - track.clientWidth);
    }

    function hideHint() {
      if (hint) hint.classList.add('is-hidden');
    }

    function render() {
      ticking = false;
      var max = maxScroll();
      var scrollable = max > 4;

      if (progress) {
        var visible = scrollable ? track.clientWidth / track.scrollWidth : 1;
        var thumb = Math.max(0.09, Math.min(1, visible));
        var ratio = scrollable ? Math.min(1, track.scrollLeft / max) : 0;
        progress.style.width = (thumb * 100).toFixed(2) + '%';
        progress.style.transform = 'translateX(' + (ratio * (1 / thumb - 1) * 100).toFixed(2) + '%)';
      }

      if (prevBtn) prevBtn.disabled = !scrollable || track.scrollLeft <= 2;
      if (nextBtn) nextBtn.disabled = !scrollable || track.scrollLeft >= max - 2;

      // 首次吸附可能会让 scrollLeft 有几个像素的偏移，这里用较大阈值避免误隐藏
      if (scrollable && track.scrollLeft > 40) hideHint();
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(render);
    }

    track.addEventListener('scroll', onScroll, { passive: true });
    track.addEventListener('wheel', hideHint, { passive: true });
    track.addEventListener('touchstart', hideHint, { passive: true });

    /* ---------------- 箭头翻页 ---------------- */
    function step(direction) {
      var amount = Math.max(240, Math.round(track.clientWidth * 0.8));
      if (track.scrollBy) {
        track.scrollBy({ left: direction * amount, behavior: 'smooth' });
      } else {
        track.scrollLeft += direction * amount;
      }
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { step(-1); hideHint(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { step(1); hideHint(); });

    /* ---------------- 桌面端拖动 ---------------- */
    track.addEventListener('pointerdown', function (event) {
      if (event.pointerType === 'touch') return;
      hideHint();
      dragging = true;
      dragMoved = false;
      dragStartX = event.clientX;
      dragStartLeft = track.scrollLeft;
      track.classList.add('is-dragging');
      if (track.setPointerCapture) {
        try { track.setPointerCapture(event.pointerId); } catch (error) {}
      }
    });

    track.addEventListener('pointermove', function (event) {
      if (!dragging) return;
      var dx = event.clientX - dragStartX;
      if (Math.abs(dx) > 4) dragMoved = true;
      track.scrollLeft = dragStartLeft - dx;
      if (event.cancelable) event.preventDefault();
    });

    function endDrag(event) {
      if (!dragging) return;
      dragging = false;
      track.classList.remove('is-dragging');
      if (event && event.pointerId !== undefined && track.releasePointerCapture) {
        try { track.releasePointerCapture(event.pointerId); } catch (error) {}
      }
    }

    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
    window.addEventListener('pointerup', endDrag);

    // 拖动结束后抑制这一次 click，避免误触
    track.addEventListener(
      'click',
      function (event) {
        if (!dragMoved) return;
        dragMoved = false;
        event.preventDefault();
        event.stopPropagation();
      },
      true
    );

    /* ---------------- 尺寸变化 ---------------- */
    function refresh() {
      if (maxScroll() < 4 && track.scrollLeft > 0) track.scrollLeft = 0;
      render();
    }

    if (window.QuanCY && window.QuanCY.onViewportChange) {
      window.QuanCY.onViewportChange(refresh);
    } else {
      window.addEventListener('resize', function () {
        setTimeout(refresh, 120);
      });
    }

    // 从最早一条开始看
    track.scrollLeft = 0;
    render();

    // 字体 / 图片加载完宽度可能还会变，再校正一次
    window.addEventListener('load', function () { setTimeout(refresh, 200); });
    setTimeout(refresh, 500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
