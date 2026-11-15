/**
 * 足迹地图
 * -------------------------------------------------------------------------
 * 视觉：深青底 + 绿色描边国家轮廓、自西安放射的发光航线（沿线有流动光点）、
 *      城市涟漪光点、网格/扫描线的 HUD 外框。
 * 交互：悬停看详情 tooltip；点击城市 → 高亮该条航线 + 弹出信息卡；
 *      再点一次 / 点空白 / 关闭按钮取消；「自动巡航」依次点亮城市。
 */
(function () {
  'use strict';

  if (typeof echarts === 'undefined') return;

  var HOME_NAME = '西安';
  var HOME_COORD = [108.9467, 34.2612];

  var CITY_COORD = {
    西安: [108.9467, 34.2612],
    北京市: [116.4551, 40.2539],
    平遥: [112.1836, 37.2052],
    长治: [113.5672, 35.9454],
    青海: [100.2278, 36.8928],
    成都: [104.0468, 30.5469],
    秦皇岛: [119.553, 39.9353],
    洛阳: [112.4586, 34.5938],
    苏州: [120.591, 31.3145],
    杭州: [120.1206, 30.222],
    福州: [119.2444, 26.0891],
    南昌: [115.8009, 28.6563],
    长沙: [112.9366, 28.183],
    丽江: [100.2128, 26.8911],
    昆明: [102.647, 24.9346],
    大理: [100.1299, 25.4663],
    上海: [121.3404, 31.1957],
    淮安: [118.7503, 33.8219],
    北海: [109.101, 21.4296],
    涠洲岛: [109.1104, 21.0324],
    安康: [108.1724, 32.927],
  };

  // 原始权重（3 的倍数，除以 3 即去过次数）
  var CITY_DATA = [
    { name: '西安', value: 12 },
    { name: '北京市', value: 6 },
    { name: '平遥', value: 3 },
    { name: '长治', value: 3 },
    { name: '青海', value: 3 },
    { name: '成都', value: 3 },
    { name: '秦皇岛', value: 3 },
    { name: '洛阳', value: 3 },
    { name: '苏州', value: 9 },
    { name: '杭州', value: 9 },
    { name: '福州', value: 3 },
    { name: '南昌', value: 12 },
    { name: '长沙', value: 3 },
    { name: '丽江', value: 3 },
    { name: '昆明', value: 3 },
    { name: '大理', value: 3 },
    { name: '上海', value: 9 },
    { name: '淮安', value: 3 },
    { name: '北海', value: 3 },
    { name: '涠洲岛', value: 3 },
    { name: '安康', value: 3 },
  ];

  function timesOf(value) {
    return Math.max(1, Math.round(value / 3));
  }

  var CITIES = CITY_DATA.map(function (item) {
    var coord = CITY_COORD[item.name];
    if (!coord) return null;
    return { name: item.name, coord: coord, value: item.value, times: timesOf(item.value) };
  }).filter(Boolean);

  var OTHERS = CITIES.filter(function (city) {
    return city.name !== HOME_NAME;
  });

  var isNarrow = document.documentElement.clientWidth <= 768;

  // 几个城市挨得太近，单独挪一下标签，避免叠成一团
  var LABEL_ADJUST = {
    北京市: { offset: [0, -12], position: 'top' },
    秦皇岛: { offset: [12, 2] },
    苏州: { offset: [0, -10], position: 'top' },
    上海: { offset: [11, 0], position: 'right' },
    杭州: { offset: [0, 11], position: 'bottom' },
    安康: { offset: [-10, 1], position: 'left' },
    北海: { offset: [-10, 2], position: 'left' },
    涠洲岛: { offset: [0, 12], position: 'bottom' },
    丽江: { offset: [-9, -2], position: 'left' },
    大理: { offset: [-10, 9], position: 'bottom' },
    昆明: { offset: [10, 7] },
  };

  /** 按次数给航线上色：次数越多越亮越粗 */
  function routeStyle(times) {
    if (times >= 4) return { color: 'rgba(140, 255, 168, 0.95)', width: 1.8 };
    if (times >= 3) return { color: 'rgba(76, 216, 79, 0.82)', width: 1.4 };
    if (times >= 2) return { color: 'rgba(64, 214, 160, 0.6)', width: 1.1 };
    return { color: 'rgba(72, 176, 176, 0.42)', width: 0.9 };
  }

  var routeData = OTHERS.map(function (city) {
    var style = routeStyle(city.times);
    return {
      name: city.name,
      coords: [HOME_COORD, city.coord],
      lineStyle: { color: style.color, width: style.width },
    };
  });

  var cityPoints = OTHERS.map(function (city) {
    var point = {
      name: city.name,
      value: city.coord.concat([city.times]),
      times: city.times,
      symbolSize: 5 + city.times * 2.2,
    };
    var adjust = LABEL_ADJUST[city.name];
    if (adjust) point.label = adjust;
    // 手机上地图小，只给常去的城市显示名字，其余点一下看详情
    if (isNarrow && city.times < 2) {
      point.label = { show: false };
    }
    return point;
  });

  var homePoint = {
    name: HOME_NAME,
    value: HOME_COORD.concat([4]),
    times: 4,
  };

  var option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      // 手机上信息卡已经够用，不弹 tooltip，免得挡住地图
      show: !isNarrow,
      backgroundColor: 'rgba(6, 18, 24, 0.94)',
      borderColor: 'rgba(76, 216, 79, 0.45)',
      borderWidth: 1,
      padding: [10, 14],
      textStyle: { color: '#eafff2', fontSize: 12, lineHeight: 18 },
      extraCssText:
        'border-radius: 10px; box-shadow: 0 12px 30px rgba(0,0,0,.45); backdrop-filter: blur(6px);',
      formatter: function (params) {
        var data = params.data;
        if (!data || !data.name) return '';
        if (params.seriesId === 'home') {
          return '<b>' + data.name + '</b><br/><span style="color:#7dff9a">出发地</span>';
        }
        var times = data.times || Math.round((data.value && data.value[2]) || 1);
        return (
          '<b>' + data.name + '</b><br/>' +
          '<span style="color:#9fe9b8">去过 ' + times + ' 次</span><br/>' +
          '<span style="color:rgba(255,255,255,.55);font-size:11px">' +
          HOME_NAME + ' ⇄ ' + data.name +
          '</span>'
        );
      },
    },
    geo: {
      map: 'china',
      zoom: isNarrow ? 1.06 : 1,
      // 手机上关闭 roam，避免在地图上上下滑动时被“平移地图”吃掉，页面滚动更顺
      roam: !isNarrow,
      scaleLimit: { min: 1, max: 5 },
      label: { emphasis: { show: false } },
      itemStyle: {
        normal: {
          areaColor: 'rgba(10, 32, 38, 0.55)',
          borderColor: 'rgba(76, 216, 79, 0.32)',
          borderWidth: 0.9,
          shadowColor: 'rgba(76, 216, 79, 0.25)',
          shadowBlur: 10,
        },
        emphasis: {
          areaColor: 'rgba(76, 216, 79, 0.16)',
          borderColor: '#7dff9a',
          borderWidth: 1.4,
          shadowColor: 'rgba(76, 216, 79, 0.6)',
          shadowBlur: 24,
        },
      },
    },
    series: [
      // 0. 全部航线
      {
        id: 'routes',
        type: 'lines',
        zlevel: 1,
        effect: {
          show: true,
          period: isNarrow ? 3.2 : 3.8,
          trailLength: 0.42,
          symbol: 'circle',
          symbolSize: isNarrow ? 1.6 : 2.2,
          color: '#b6ffd0',
        },
        lineStyle: { width: 1, opacity: 0.62, curveness: 0.22 },
        data: routeData,
      },
      // 1. 被选中/聚焦的那一条（平时为空）
      {
        id: 'focus',
        type: 'lines',
        zlevel: 2,
        effect: {
          show: true,
          period: 2.2,
          trailLength: 0.7,
          symbol: 'circle',
          symbolSize: 3.2,
          color: '#eafff2',
        },
        lineStyle: { width: 2.4, opacity: 1, curveness: 0.22, color: 'rgba(220, 255, 235, 0.95)' },
        data: [],
      },
      // 2. 城市光点
      {
        id: 'cities',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 3,
        rippleEffect: { period: 4, brushType: 'stroke', scale: isNarrow ? 2.6 : 3.4 },
        symbol: 'circle',
        itemStyle: { color: '#8bffb0', shadowBlur: 10, shadowColor: 'rgba(76, 216, 79, 0.8)' },
        label: {
          show: true,
          position: 'right',
          offset: [6, 0],
          fontSize: isNarrow ? 10 : 12,
          color: 'rgba(230, 255, 238, 0.86)',
          formatter: '{b}',
        },
        // 窄屏空间小，重叠的直接隐藏；宽屏用纵向错位让标签都露出来
        ...(isNarrow
          ? { labelLayout: { hideOverlap: true } }
          : { labelLayout: { moveOverlap: 'shiftY' } }),
        emphasis: {
          scale: 1.7,
          itemStyle: { color: '#ffffff', shadowBlur: 22, shadowColor: '#4cd84f' },
          label: { color: '#ffffff', fontWeight: 'bold' },
        },
        select: {
          itemStyle: { color: '#ffffff', borderColor: '#4cd84f', borderWidth: 2, shadowBlur: 24 },
          label: { color: '#ffffff', fontWeight: 'bold' },
        },
        data: cityPoints,
      },
      // 3. 出发地
      {
        id: 'home',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 4,
        rippleEffect: { period: 3, brushType: 'stroke', scale: 4.6 },
        symbol: 'circle',
        symbolSize: 9,
        itemStyle: { color: '#ffffff', shadowBlur: 16, shadowColor: '#7dff9a' },
        label: {
          show: true,
          position: 'bottom',
          offset: [0, 6],
          fontSize: isNarrow ? 10 : 12,
          fontWeight: 'bold',
          color: '#7dff9a',
          formatter: HOME_NAME,
        },
        data: [homePoint],
      },
    ],
  };

  var chart = echarts.init(document.getElementById('map'));
  chart.setOption(option);

  /* ---------------- 交互：聚焦 / 卡片 / 巡航 ---------------- */
  var card = document.getElementById('mapCard');
  var cardName = document.getElementById('mapCardName');
  var cardMeta = document.getElementById('mapCardMeta');
  var cardRoute = document.getElementById('mapCardRoute');
  var cardClose = document.getElementById('mapCardClose');
  var tourBtn = document.getElementById('mapTour');
  var tourLabel = tourBtn ? tourBtn.querySelector('span') : null;

  var current = -1;
  var tourTimer = null;

  function setSelected(index) {
    if (current >= 0) {
      chart.dispatchAction({ type: 'unselect', seriesId: 'cities', dataIndex: current });
    }
    current = index;

    if (index < 0) {
      chart.setOption({ series: [{ id: 'focus', data: [] }] });
      if (!isNarrow) chart.setOption({ tooltip: { show: true } });
      if (card) {
        card.classList.remove('is-on');
        card.setAttribute('aria-hidden', 'true');
      }
      return;
    }

    var city = OTHERS[index];
    // 卡片打开期间先收起 tooltip，避免两套信息叠在一起
    if (!isNarrow) {
      chart.setOption({ tooltip: { show: false } });
      chart.dispatchAction({ type: 'hideTip' });
    }
    chart.setOption({
      series: [
        {
          id: 'focus',
          data: [{ name: city.name, coords: [HOME_COORD, city.coord] }],
        },
      ],
    });
    chart.dispatchAction({ type: 'select', seriesId: 'cities', dataIndex: index });

    if (card) {
      if (cardName) cardName.textContent = city.name;
      if (cardMeta) cardMeta.textContent = '去过 ' + city.times + ' 次';
      if (cardRoute) cardRoute.textContent = HOME_NAME + ' ⇄ ' + city.name;
      card.classList.add('is-on');
      card.setAttribute('aria-hidden', 'false');
    }
  }

  /** 按名字找下标（巡调用） */
  function indexOfCity(name) {
    for (var i = 0; i < OTHERS.length; i++) {
      if (OTHERS[i].name === name) return i;
    }
    return -1;
  }

  function stopTour() {
    if (!tourTimer) return;
    clearInterval(tourTimer);
    tourTimer = null;
    if (tourBtn) {
      tourBtn.classList.remove('is-on');
      tourBtn.setAttribute('aria-pressed', 'false');
    }
    if (tourLabel) tourLabel.textContent = '自动巡航';
  }

  function tourStep() {
    var next = current + 1;
    if (next >= OTHERS.length) next = 0;
    setSelected(next);
  }

  function startTour() {
    if (tourTimer) return;
    if (tourBtn) {
      tourBtn.classList.add('is-on');
      tourBtn.setAttribute('aria-pressed', 'true');
    }
    if (tourLabel) tourLabel.textContent = '停止巡航';
    tourStep();
    tourTimer = setInterval(tourStep, 2200);
  }

  if (tourBtn) {
    tourBtn.addEventListener('click', function () {
      if (tourTimer) {
        stopTour();
      } else {
        startTour();
      }
    });
  }

  if (cardClose) {
    cardClose.addEventListener('click', function () {
      stopTour();
      setSelected(-1);
    });
  }

  chart.on('click', function (params) {
    if (params.seriesId !== 'cities') return;
    stopTour();
    var idx = typeof params.dataIndex === 'number' ? params.dataIndex : indexOfCity(params.name);
    if (idx < 0) return;
    setSelected(idx === current ? -1 : idx);
  });

  // 点地图空白处取消
  chart.getZr().on('click', function (event) {
    if (event.target) return;
    stopTour();
    setSelected(-1);
  });

  // 切到后台就停下巡航，避免空转
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stopTour();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && current >= 0) {
      stopTour();
      setSelected(-1);
    }
  });

  /* ---------------- 统计数字 ---------------- */
  var stats = document.getElementById('mapStats');
  if (stats) {
    stats.innerHTML =
      '<div class="map-stat"><b>' + CITIES.length + '</b><span>城市</span></div>' +
      '<div class="map-stat"><b>' + OTHERS.length + '</b><span>路线</span></div>';
  }

  /* ---------------- 尺寸变化 ---------------- */
  var resizeMapChart = function () {
    chart.resize();
  };
  if (window.QuanCY && window.QuanCY.onViewportChange) {
    window.QuanCY.onViewportChange(resizeMapChart);
  } else {
    window.addEventListener('resize', resizeMapChart);
  }
})();
