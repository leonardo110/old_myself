/**
 * 技能 —— 技术图谱（蜘蛛网 + 依赖连线 + HUD 读数）
 * -------------------------------------------------------------------------
 * 结构：中心 Web → 5 个方向节点（内环）→ 各方向技术（外环，按方向分扇区）。
 * 细节：每个方向占的扇区按技术数量分配；外环节点内外两圈交错避让；
 *      技术之间另有若干“依赖”虚线（Vue→Vite、NPM→Node.js …）。
 * 交互：悬停点亮「技术 → 方向 → 中心」链路 + 该技术的依赖线，右下角读数跟着变。
 * 手机：半径放不下 24 个节点，改成纵向关系树。
 */
(function () {
  'use strict';

  var GROUPS = [
    { id: 'html', name: 'HTML', role: '骨骼', items: ['Canvas', 'SPA', 'BootStrap'] },
    { id: 'css', name: 'CSS', role: '皮肤', items: ['Scss', 'Less', 'BootStrap'] },
    {
      id: 'js',
      name: 'JavaScript',
      role: '灵魂',
      items: ['Vue', 'React', 'TypeScript', 'jQuery', 'Vite', 'VitePress', 'WebPack', 'Babel', 'NPM', 'Yarn', 'Node.js'],
    },
    { id: 'gfx', name: '图形 / 可视化', role: '渲染', items: ['WebGL', 'ECharts', 'AntV'] },
    { id: 'server', name: 'Server', role: '服务', items: ['Axios', 'Docker', 'Nginx', 'SSR'] },
  ];

  /** 技术之间的依赖关系，写成「方向:名称」，同名项会精确落到对应方向的节点上 */
  var LINKS = [
    ['js:Vue', 'js:Vite'],
    ['js:Vite', 'js:VitePress'],
    ['js:Babel', 'js:WebPack'],
    ['js:NPM', 'js:Yarn'],
    ['js:NPM', 'js:Node.js'],
    ['js:Node.js', 'server:Server'],
    ['server:Axios', 'server:Server'],
    ['server:Docker', 'server:Server'],
    ['server:SSR', 'server:Server'],
    ['gfx:ECharts', 'html:Canvas'],
    ['gfx:WebGL', 'html:Canvas'],
    ['gfx:AntV', 'html:Canvas'],
    ['js:React', 'js:TypeScript'],
    ['js:Vue', 'js:TypeScript'],
    ['js:jQuery', 'js:JavaScript'],
    ['css:Scss', 'css:BootStrap'],
  ];

  var web = document.getElementById('skillWeb');
  if (!web) return;

  var readoutName = document.getElementById('skillReadoutName');
  var readoutMeta = document.getElementById('skillReadoutMeta');
  var counter = document.getElementById('skillCounter');

  /* ---------------- 数据 ---------------- */
  var nodes = [];
  var edges = [];

  function buildModel() {
    nodes = [{ id: 'core', kind: 'core', label: 'Web', sub: '三剑客' }];
    edges = [];

    GROUPS.forEach(function (group) {
      nodes.push({
        id: 'g-' + group.id,
        kind: 'group',
        label: group.name,
        sub: group.role,
        groupId: group.id,
        count: group.items.length,
      });
      edges.push({ id: 'c-' + group.id, from: 'core', to: 'g-' + group.id, kind: 'core' });

      group.items.forEach(function (name, index) {
        var id = 't-' + group.id + '-' + index;
        nodes.push({ id: id, kind: 'tech', label: name, groupId: group.id });
        edges.push({ id: 'e-' + group.id + '-' + index, from: 'g-' + group.id, to: id, kind: 'tech' });
      });
    });
  }

  function nodeById(id) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].id === id) return nodes[i];
    }
    return null;
  }

  function resolveRef(ref) {
    var index = ref.indexOf(':');
    var groupId = ref.slice(0, index);
    var label = ref.slice(index + 1);
    var groupNode = nodeById('g-' + groupId);
    if (groupNode && groupNode.label === label) return groupNode.id;
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.kind === 'tech' && node.groupId === groupId && node.label === label) return node.id;
    }
    return null;
  }

  function groupOf(node) {
    if (!node || !node.groupId) return null;
    return nodeById('g-' + node.groupId);
  }

  /** 名字出现在多个方向时标记出来 */
  var SHARED = (function () {
    var map = {};
    GROUPS.forEach(function (group) {
      group.items.forEach(function (name) {
        map[name] = (map[name] || 0) + 1;
      });
    });
    return map;
  })();

  function uniqueCount() {
    var seen = {};
    GROUPS.forEach(function (group) {
      group.items.forEach(function (name) {
        seen[name] = 1;
      });
    });
    return Object.keys(seen).length;
  }

  /* ---------------- 工具 ---------------- */
  function toRad(deg) {
    return (deg * Math.PI) / 180;
  }

  function esc(text) {
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ---------------- 桌面：径向图谱 ---------------- */
  function layoutRadial(width, height) {
    var cx = width / 2;
    var cy = height / 2;
    var rGroup = Math.min(height * 0.22, 138);
    var rNear = Math.min(height * 0.38, 232);
    var rFar = Math.min(height * 0.46, 282);

    var total = 0;
    GROUPS.forEach(function (group) {
      total += group.items.length;
    });

    var core = nodeById('core');
    core.x = cx;
    core.y = cy;

    var angle = -90; // 从正上方开始顺时针铺扇区
    var sectors = [];

    GROUPS.forEach(function (group) {
      var span = (360 * group.items.length) / total;
      var a0 = angle;
      var a1 = angle + span;
      var mid = (a0 + a1) / 2;
      sectors.push({ a0: a0, a1: a1 });

      var midRad = toRad(mid);
      var groupNode = nodeById('g-' + group.id);
      groupNode.x = cx + rGroup * Math.cos(midRad);
      groupNode.y = cy + rGroup * Math.sin(midRad);

      group.items.forEach(function (name, index) {
        var a = a0 + ((index + 0.5) * span) / group.items.length;
        var r = index % 2 === 0 ? rNear : rFar;
        var rad = toRad(a);
        var techNode = nodeById('t-' + group.id + '-' + index);
        techNode.x = cx + r * Math.cos(rad);
        techNode.y = cy + r * Math.sin(rad);
      });

      angle = a1;
    });

    return { cx: cx, cy: cy, rGroup: rGroup, rNear: rNear, rFar: rFar, sectors: sectors };
  }

  function edgePath(from, to, cx, cy) {
    var mx = (from.x + to.x) / 2;
    var my = (from.y + to.y) / 2;
    // 控制点稍微往中心收一点，线会带一点点“蛛丝”的弧度
    var qx = mx + (cx - mx) * 0.16;
    var qy = my + (cy - my) * 0.16;
    return (
      'M' + from.x.toFixed(1) + ' ' + from.y.toFixed(1) +
      ' Q' + qx.toFixed(1) + ' ' + qy.toFixed(1) +
      ' ' + to.x.toFixed(1) + ' ' + to.y.toFixed(1)
    );
  }

  function linkPath(a, b) {
    var mx = (a.x + b.x) / 2;
    var my = (a.y + b.y) / 2;
    var dx = b.x - a.x;
    var dy = b.y - a.y;
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var nx = -dy / len;
    var ny = dx / len;
    var bow = 16;
    return (
      'M' + a.x.toFixed(1) + ' ' + a.y.toFixed(1) +
      ' Q' + (mx + nx * bow).toFixed(1) + ' ' + (my + ny * bow).toFixed(1) +
      ' ' + b.x.toFixed(1) + ' ' + b.y.toFixed(1)
    );
  }

  /** 依赖关系解析成节点，并统计每个节点挂了几条依赖 */
  function buildLinks() {
    var links = [];
    var degree = {};
    LINKS.forEach(function (pair) {
      var a = resolveRef(pair[0]);
      var b = resolveRef(pair[1]);
      if (!a || !b || a === b) return;
      links.push({ id: 'l-' + links.length, from: a, to: b });
      degree[a] = (degree[a] || 0) + 1;
      degree[b] = (degree[b] || 0) + 1;
    });
    return { links: links, degree: degree };
  }

  function renderRadial() {
    var width = web.clientWidth;
    var height = web.clientHeight;
    if (!width || !height) return;

    var geo = layoutRadial(width, height);
    var linkData = buildLinks();
    var parts = [];

    parts.push('<svg class="skill-lines" viewBox="0 0 ' + width + ' ' + height + '" aria-hidden="true">');

    // 同心圆
    [geo.rGroup, (geo.rNear + geo.rFar) / 2, geo.rFar].forEach(function (r, i) {
      parts.push(
        '<circle class="web-ring' + (i === 2 ? ' web-ring-outer' : '') + '" cx="' + geo.cx + '" cy="' + geo.cy + '" r="' + r.toFixed(1) + '"></circle>'
      );
    });

    // 外圈刻度（每 5° 一根短线，像仪表盘）
    for (var deg = 0; deg < 360; deg += 5) {
      var rad = toRad(deg);
      var inner = geo.rFar + 8;
      var outer = geo.rFar + (deg % 15 === 0 ? 16 : 12);
      parts.push(
        '<line class="web-tick' + (deg % 15 === 0 ? ' is-major' : '') + '" x1="' + (geo.cx + inner * Math.cos(rad)).toFixed(1) +
          '" y1="' + (geo.cy + inner * Math.sin(rad)).toFixed(1) +
          '" x2="' + (geo.cx + outer * Math.cos(rad)).toFixed(1) +
          '" y2="' + (geo.cy + outer * Math.sin(rad)).toFixed(1) + '"></line>'
      );
    }

    // 辐射线（扇区边界）
    geo.sectors.forEach(function (sector) {
      [sector.a0, sector.a1].forEach(function (d) {
        var r2 = toRad(d);
        parts.push(
          '<line class="web-spoke" x1="' + geo.cx + '" y1="' + geo.cy + '" x2="' + (geo.cx + geo.rFar * Math.cos(r2)).toFixed(1) +
            '" y2="' + (geo.cy + geo.rFar * Math.sin(r2)).toFixed(1) + '"></line>'
        );
      });
    });

    // 依赖线（画在主干线下面）
    linkData.links.forEach(function (link) {
      var a = nodeById(link.from);
      var b = nodeById(link.to);
      parts.push(
        '<path class="edge edge-link" data-edge="' + link.id + '" data-from="' + link.from + '" data-to="' + link.to + '" d="' + linkPath(a, b) + '"></path>'
      );
    });

    // 主干连接线
    edges.forEach(function (edge) {
      var from = nodeById(edge.from);
      var to = nodeById(edge.to);
      var cls = 'edge' + (edge.kind === 'core' ? ' edge-core' : '');
      parts.push(
        '<path class="' + cls + '" data-edge="' + edge.id + '" data-from="' + edge.from + '" data-to="' + edge.to + '" d="' + edgePath(from, to, geo.cx, geo.cy) + '"></path>'
      );
    });

    // 共享技术之间的虚线（BootStrap 同时属于 HTML / CSS）
    var boots = nodes.filter(function (node) {
      return node.kind === 'tech' && node.label === 'BootStrap';
    });
    if (boots.length === 2) {
      var b1 = boots[0];
      var b2 = boots[1];
      var mx = (b1.x + b2.x) / 2;
      var my = (b1.y + b2.y) / 2;
      var qx = mx + (mx - geo.cx) * 0.55;
      var qy = my + (my - geo.cy) * 0.55;
      parts.push(
        '<path class="edge edge-shared" data-edge="shared" data-from="' + b1.id + '" data-to="' + b2.id + '" d="M' +
          b1.x.toFixed(1) + ' ' + b1.y.toFixed(1) + ' Q' + qx.toFixed(1) + ' ' + qy.toFixed(1) + ' ' + b2.x.toFixed(1) + ' ' + b2.y.toFixed(1) + '"></path>'
      );
    }

    parts.push('</svg>');

    // 节点
    nodes.forEach(function (node) {
      var cls = 'skill-node skill-' + node.kind;
      if (node.kind === 'group') cls += ' skill-group-node';
      if (node.kind === 'tech' && SHARED[node.label] > 1) cls += ' is-shared';

      var inner;
      if (node.kind === 'core') {
        inner = '<b>' + node.label + '</b><small>' + node.sub + '</small>';
      } else if (node.kind === 'group') {
        inner = '<b>' + node.label + '</b><em>' + node.sub + '</em>';
      } else {
        inner = '<i class="node-port"></i>' + node.label;
      }

      parts.push(
        '<div class="' + cls + '" data-id="' + node.id + '" data-group="' + (node.groupId || '') + '"' +
          ' style="left:' + node.x.toFixed(1) + 'px;top:' + node.y.toFixed(1) + 'px">' + inner + '</div>'
      );
    });

    web.innerHTML = parts.join('');

    // HUD 计数
    if (counter) {
      counter.textContent =
        'NODES ' + nodes.length + '  ·  EDGES ' + web.querySelectorAll('.edge').length;
    }

    bindHover(linkData.degree);
  }

  /* ---------------- 手机：纵向关系树 ---------------- */
  function renderVertical() {
    var parts = ['<div class="skill-v">', '<div class="skill-v-core"><b>Web</b><span>三剑客</span></div>', '<div class="skill-v-list">'];

    GROUPS.forEach(function (group) {
      var chips = group.items
        .map(function (name) {
          var shared = SHARED[name] > 1 ? ' is-shared' : '';
          return '<span class="skill-v-chip' + shared + '">' + esc(name) + '</span>';
        })
        .join('');

      parts.push(
        '<div class="skill-v-group">' +
          '<div class="skill-v-head"><b>' + esc(group.name) + '</b><em>' + group.role + '</em><i>' + group.items.length + '</i></div>' +
          '<div class="skill-v-chips">' + chips + '</div>' +
          '</div>'
      );
    });

    parts.push('</div></div>');
    web.innerHTML = parts.join('');
  }

  /* ---------------- 悬停：点亮一条链路 + 更新读数 ---------------- */
  function bindHover(degree) {
    var hasHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    var nodeEls = web.querySelectorAll('.skill-node');
    var edgeEls = web.querySelectorAll('.edge');
    var litNodes = [];
    var litEdges = [];

    function resetReadout() {
      if (readoutName) readoutName.textContent = '—';
      if (readoutMeta) readoutMeta.textContent = '悬停任意节点查看关系';
    }

    function setReadout(node) {
      if (!node || !readoutName || !readoutMeta) return;
      if (node.kind === 'core') {
        readoutName.textContent = 'WEB CORE';
        readoutMeta.textContent = nodes.length + ' 节点 · ' + edges.length + ' 主干连接';
        return;
      }
      if (node.kind === 'group') {
        readoutName.textContent = node.label.toUpperCase();
        readoutMeta.textContent = node.sub + ' · ' + node.count + ' 项技术';
        return;
      }
      var group = groupOf(node);
      var deps = degree[node.id] || 0;
      readoutName.textContent = node.label;
      readoutMeta.textContent = (group ? group.label + ' · ' : '') + (deps ? deps + ' 条依赖' : '叶子节点');
    }

    function clear() {
      litNodes.forEach(function (el) {
        el.classList.remove('is-lit');
      });
      litEdges.forEach(function (el) {
        el.classList.remove('is-lit');
      });
      litNodes = [];
      litEdges = [];
      web.classList.remove('is-focusing');
      resetReadout();
    }

    function keep(el, bucket) {
      if (!el || el.classList.contains('is-lit')) return;
      el.classList.add('is-lit');
      bucket.push(el);
    }

    function light(el) {
      keep(el, litNodes);
    }

    function lightEdge(el) {
      keep(el, litEdges);
    }

    function focus(nodeEl) {
      clear();
      var id = nodeEl.getAttribute('data-id');
      var node = nodeById(id);
      if (!node) return;

      light(nodeEl);
      setReadout(node);

      if (node.kind === 'core') {
        web.classList.add('is-focusing');
        nodeEls.forEach(light);
        edgeEls.forEach(lightEdge);
        return;
      }

      light(web.querySelector('.skill-core'));

      if (node.kind === 'group') {
        edgeEls.forEach(function (edge) {
          if (edge.getAttribute('data-from') === id || edge.getAttribute('data-to') === id) lightEdge(edge);
        });
        nodeEls.forEach(function (el) {
          if (el.getAttribute('data-group') === node.groupId && el.getAttribute('data-id') !== id) light(el);
        });
        lightEdge(web.querySelector('[data-edge="c-' + node.groupId + '"]'));
      } else {
        light(web.querySelector('[data-id="g-' + node.groupId + '"]'));
        lightEdge(web.querySelector('[data-edge="c-' + node.groupId + '"]'));

        edgeEls.forEach(function (edge) {
          if (edge.getAttribute('data-to') === id || edge.getAttribute('data-from') === id) lightEdge(edge);
        });

        // 依赖线的另一端也点亮，方便顺着关系看下去
        edgeEls.forEach(function (edge) {
          if (!edge.classList.contains('edge-link')) return;
          var from = edge.getAttribute('data-from');
          var to = edge.getAttribute('data-to');
          if (from !== id && to !== id) return;
          light(web.querySelector('[data-id="' + (from === id ? to : from) + '"]'));
        });
      }

      web.classList.add('is-focusing');
    }

    web.addEventListener('mouseover', function (event) {
      var nodeEl = event.target.closest ? event.target.closest('.skill-node') : null;
      if (nodeEl) focus(nodeEl);
    });

    web.addEventListener('mouseleave', clear);
    nodeEls.forEach(function (el) {
      el.addEventListener('mouseleave', clear);
    });
  }

  /* ---------------- 启动 ---------------- */
  function render() {
    buildModel();
    var narrow = document.documentElement.clientWidth <= 768;
    if (narrow) {
      web.classList.add('is-vertical');
      renderVertical();
    } else {
      web.classList.remove('is-vertical');
      renderRadial();
    }
  }

  var meta = document.getElementById('skillMeta');
  if (meta) meta.innerHTML = GROUPS.length + ' 个方向 · <b>' + uniqueCount() + '</b> 项技术';

  render();

  var resizeTimer = null;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(render, 160);
  }
  if (window.QuanCY && window.QuanCY.onViewportChange) {
    window.QuanCY.onViewportChange(onResize);
  } else {
    window.addEventListener('resize', onResize);
  }
})();
