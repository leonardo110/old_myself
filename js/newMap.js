const chinaGeoCoordMap = {
//   黑龙江: [127.9688, 45.368],
//   内蒙古: [110.3467, 41.4899],
//   吉林: [125.8154, 44.2584],
//   辽宁: [123.1238, 42.1216],
//   河北: [114.4995, 38.1006],
//   天津: [117.4219, 39.4189],
//   宁夏: [106.3586, 38.1775],
//   新疆: [87.9236, 43.5883],
//   西藏: [91.11, 29.97],
//   重庆: [108.384366, 30.439702],
//   安徽: [117.29, 32.0581],
//   湖北: [114.3896, 30.6628],
//   贵州: [106.6992, 26.7682],
//   广东: [113.12244, 23.009505],
//   广西: [108.479, 23.1152],
//   海南: [110.3893, 19.8516],
//   甘肃: [103.5901, 36.3043],
    西安: [108.9467,34.2612],
    北京市: [116.4551, 40.2539],
    平遥: [112.1836,37.2052],
    长治: [113.5672,35.9454],
    青海: [100.2278,36.8928],
    成都: [104.0468,30.5469],
    秦皇岛: [119.5530,39.9353],
    洛阳: [112.4586,34.5938],
    苏州: [120.5910,31.3145],
    杭州: [120.1206,30.2220],
    福州: [119.2444,26.0891],
    南昌: [115.8009,28.6563],
    长沙: [112.9366,28.1830],
    丽江: [100.2128,26.8911],
    昆明: [102.6470,24.9346],
    大理: [100.1299, 25.4663],
    上海: [121.3404,31.1957],
    淮安: [118.7503,33.8219],
};

const chinaDatas = [
    [
        {
            name: "西安",
            value: 12,
        },
    ],
    [
        {
            name: "北京市",
            value: 6,
        },
    ],
    [
        {
            name: "平遥",
            value: 3,
        },
    ],
    [
        {
            name: "长治",
            value: 3,
        },
    ],
    // [
    //     {
    //     name: "甘肃",
    //     value: 1,
    //     },
    // ],
    [
        {
            name: "青海",
            value: 3,
        },
    ],
    [
        {
            name: "成都",
            value: 3,
        },
    ],
    [
        {
            name: "秦皇岛",
            value: 3,
        },
    ],
    [
        {
            name: "洛阳",
            value: 3,
        },
    ],
    [
        {
            name: "苏州",
            value: 9,
        },
    ],
    [
        {
            name: "杭州",
            value: 9,
        },
    ],
    [
        {
            name: "福州",
            value: 3,
        },
    ],
    [
        {
            name: "南昌",
            value: 12,
        },
    ],
    [
        {
            name: "长沙",
            value: 3,
        },
    ],
    [
        {
            name: "丽江",
            value: 3,
        },
    ],
    [
        {
            name: "昆明",
            value: 3,
        },
    ],
    [
        {
            name: "大理",
            value: 3,
        },
    ],
    [
        {
            name: "上海",
            value: 9,
        },
    ],
    [
        {
            name: "淮安",
            value: 3,
        },
    ],
];

const convertData = function (data) {
  const res = [];
  for (let i = 0; i < data.length; i++) {
    const dataItem = data[i];
    const fromCoord = chinaGeoCoordMap[dataItem[0].name];
    const toCoord = [108.9467,34.2612];
    if (fromCoord && toCoord) {
      res.push([
        {
          coord: toCoord,
          value: dataItem[0].value,
        },
        {
          coord: fromCoord,
        },
      ]);
    }
  }
  return res;
};
const series = [];
const chart = echarts.init(document.getElementById("map"));
[["西安", chinaDatas]].forEach(function (item, i) {
    series.push(
        {
            type: "lines",
            zlevel: 1,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: "arrow", //箭头图标
                symbolSize: 10, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: 0.3, //尾迹线条曲直度
                },
            },
            data: convertData(item[1]),
        },
        {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
                //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: "stroke", //波纹绘制方式 stroke, fill
                scale: 10, //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: "right", //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function (params) {
                        //圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 10,
                },
                emphasis: {
                    show: true,
                },
            },
            symbol: "circle",
            symbolSize: function (val) {
                return 3 + val[2] * 1; //圆环大小
            },
            itemStyle: {
                normal: {
                show: false,
                    color: "#FFA54F",
                },
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[0].name,
                    value: chinaGeoCoordMap[dataItem[0].name].concat([
                        dataItem[0].value,
                    ]),
                };
            }),
        },
        //被攻击点
        {
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: "stroke",
                scale: 4,
            },
            label: {
                normal: {
                    show: true,
                    position: "right",
                    //offset:[5, 0],
                    color: "#0f0",
                    formatter: "{b}",
                    textStyle: {
                        color: "#0f0",
                    },
                },
                emphasis: {
                    show: true,
                    color: "#FFA54F",
                },
            },
            symbol: "pin",
            symbolSize: 50,
            data: [
                {
                    name: item[0],
                    value: chinaGeoCoordMap[item[0]].concat([10]),
                },
            ],
        }
    );
});

const option = {
    title: {
        text: '足迹',
        subtext: 'Tip: 台湾 是中国领土不可分割的一部分',
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
        trigger: "item",
        backgroundColor: "#1515158f",
        borderColor: "#FFF",
        textStyle: {
            color: "#fff",
        },
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: "z-index:100",
        formatter: function (params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            const res = "";
            const name = chinaDatas[params.dataIndex][0].name;
            const value = chinaDatas[params.dataIndex][0].value;
            // if (name === '西安') {
            //     res = "<span style='color:#fff;'>" + name + "<br/>！！！秦人集合！！！</span>";
            // } else {
            //     res = "<span style='color:#fff;'>" + name + "<br/>去过：" + (value / 3) + "次</span>";
            // }
            return res;
        },
    },
    toolbox: {
        feature: {
            dataView: { show: false, readOnly: false },
            restore: { show: false },
            saveAsImage: { show: false }
        }
    },
    backgroundColor: "transparent",
    visualMap: {
        //图例值控制
        min: 1,
        max: 30,
        calculable: true,
        show: true,
        color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
        textStyle: {
            color: "#fff",
        },
    },
    geo: {
        map: "china",
        zoom: 1,
        label: {
            emphasis: {
                show: false,
            },
        },
        roam: true, //是否允许缩放
        itemStyle: {
            // 鼠标移入
            emphasis: { color: '#fff', areaColor: '#1515158f', shadowColor: '#409EFF', shadowBlur: 45, zoom: 1.1 },
            // 一直展示
            normal: {
                label: { show: true, color: '#fff' },
                borderColor: '#2791ff', // 边界线白色
                areaColor: 'transparent', // 区域颜色，可根据需要设置
                borderWidth: 1.8, // 边缘发光宽度
            },
        },
    },
    series: series,
};

chart.setOption(option);
// [
//     {
//       name: "新疆",
//       value: 3,
//     },
// ],
// [
//     {
//       name: "西藏",
//       value: 3,
//     },
// ],
// [
//     {
//       name: "重庆",
//       value: 9,
//     },
// ],
// [
//     {
//       name: "广东",
//       value: 10,
//     },
// ],
// [
//     {
//       name: "安徽",
//       value: 9,
//     },
// ],
// [
//     {
//       name: "湖北",
//       value: 10,
//     },
// ],
// [
//     {
//       name: "贵州",
//       value: 8,
//     },
// ],
// [
//     {
//       name: "广西",
//       value: 7,
//     },
// ],
// [
//     {
//       name: "海南",
//       value: 7,
//     },
// ],
// [
//     {
//       name: "宁夏",
//       value: 5,
//     },
// ],
// [
//     {
//       name: "黑龙江",
//       value: 5,
//     },
// ],
// [
//     {
//       name: "内蒙古",
//       value: 3,
//     },
// ],
// [
//     {
//       name: "吉林",
//       value: 3,
//     },
// ],
// [
//     {
//       name: "辽宁",
//       value: 5,
//     },
// ],
// [
//     {
//       name: "河北",
//       value: 6,
//     },
// ],
// [
//     {
//       name: "天津",
//       value: 5,
//     },
// ],