/**
 * 加载动画的百分比 / 阶段文案
 * 只负责数字和文案，真正的淡出还是由 site.js 控制（1.5s 后 opacity 0）
 */
(function () {
  'use strict';

  var pctDom = document.getElementById('loaderPct');
  var phaseDom = document.getElementById('loaderPhase');
  if (!pctDom) return;

  var DURATION = 2200;
  var PHASES = [
    [0, '初始化'],
    [700, '加载资源'],
    [1500, '渲染场景'],
    [2050, '完成'],
  ];
  var start = 0;

  function ease(t) {
    // 和进度条的 cubic-bezier(.25,.8,.3,1) 接近，数字和条子差不多同步
    return 1 - Math.pow(1 - t, 2.4);
  }

  function phaseOf(elapsed) {
    var text = PHASES[0][1];
    for (var i = 0; i < PHASES.length; i++) {
      if (elapsed >= PHASES[i][0]) text = PHASES[i][1];
    }
    return text;
  }

  function tick(now) {
    if (!start) start = now;
    var elapsed = now - start;
    var t = Math.min(1, elapsed / DURATION);
    pctDom.textContent = Math.round(ease(t) * 100);

    if (phaseDom) {
      var next = phaseOf(elapsed);
      if (phaseDom.textContent !== next) phaseDom.textContent = next;
    }

    if (t < 1) requestAnimationFrame(tick);
  }

  if ('requestAnimationFrame' in window) {
    requestAnimationFrame(tick);
  } else {
    pctDom.textContent = '100';
    if (phaseDom) phaseDom.textContent = '完成';
  }
})();
