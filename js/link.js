function initLink() {
  var chartDom = document.getElementById('link');
  if (!chartDom) return;
  // 窄屏（移动端）适度缩小标题与整体缩放，PC 端数值保持不变
  var isNarrow = document.documentElement.clientWidth <= 768;
  var link_options;
  var myChart = echarts.init(chartDom);
  link_options = {
    title: {
      text: '技能',
      subtext: 'Web三剑客：HTML（骨骼）、CSS（皮肤）、JavaScript（灵魂）',
      left: 'left',
      textStyle: {
        fontWeight: 'bolder',
        fontSize: isNarrow ? 20 : 24,
        color: '#fff',
      },
      subtextStyle: {
        fontWeight: 'bolder',
        fontSize: isNarrow ? 12 : 13,
        color: '#4cd84f',
      }
    },
    tooltip: {
      show: false
    },
    series: [
      {
        name: 'Skill',
        type: 'graph',
        layout: 'none',
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          show: true,
          position: 'right',
          formatter: '{b}'
        },
        color: ['#73c0de', '#3ba272',  '#ea7ccc', '#5470c6', '#91cc75', '#9a60b4', '#fc8452', '#fac858', '#ee6666'],
        labelLayout: {
          hideOverlap: true
        },
        scaleLimit: {
          min: 0.5,
          max: 1.5
        },
        lineStyle: {
          color: 'source',
          curveness: 0.1,
          width: 2
        },
        zoom: isNarrow ? 0.85 : 0.9,
      }
    ],
  };
  link_options && myChart.setOption(link_options);

  // 窗口尺寸 / 横竖屏变化时重绘，避免图表被拉伸或留白
  var resizeChart = function () {
    myChart.resize();
  };
  if (window.QuanCY && window.QuanCY.onViewportChange) {
    window.QuanCY.onViewportChange(resizeChart);
  } else {
    window.addEventListener('resize', resizeChart);
  }
}

// 确保DOM完全加载
document.addEventListener('DOMContentLoaded', () => {
  initLink()
});
