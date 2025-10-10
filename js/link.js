function initLink() {
  var chartDom = document.getElementById('link');
  var link_options;
  var myChart = echarts.init(chartDom);
  link_options = {
    title: {
      text: '技能',
      subtext: 'Web三剑客：HTML（骨骼）、CSS（皮肤）、JavaScript（灵魂）',
      left: 'left',
      textStyle: {
        fontWeight: 'bolder',
        fontSize: 24,
        color: '#fff',
      },
      subtextStyle: {
        fontWeight: 'bolder',
        fontSize: 13,
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
        zoom: 0.9,
      }
    ],
  };
  link_options && myChart.setOption(link_options);
}

// 确保DOM完全加载
document.addEventListener('DOMContentLoaded', () => {
  initLink()
});
