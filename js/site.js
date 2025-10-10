function getDomById(name) {
  return document.getElementById(name)
}

getDomById("scrollDownIcon").onclick = () => {
  document.body.scrollTop = getDomById("skill").offsetTop - 100;
};

getDomById("aboutText").onclick = () => {
  document.body.scrollTop =
    document.getElementsByClassName("like-card")[0].offsetTop - 100;
};

getDomById("footmarkText").onclick = () => {
  document.body.scrollTop =
    document.getElementsByClassName("mapMark")[0].offsetTop - 100;
};

getDomById("favorite").onclick = () => {
  document.body.scrollTop =
    document.getElementsByClassName("like-card")[1].offsetTop - 100;
};

getDomById("msgText").onclick = () => {
  document.body.scrollTop =
    document.getElementsByClassName("walineDiv")[0].offsetTop - 100;
};

getDomById("logText").onclick = () => {
  document.body.scrollTop =
    getDomById("chronicles").offsetTop - 200;
};

getDomById("footer-contribution").onmouseenter = () => {
  const domList = document.querySelectorAll("#footer-contribution img");
  domList.forEach((dom) => {
    dom.removeAttribute("contributionImg");
    dom.setAttribute("class", "intervalCss");
  });
  setTimeout(() => {
    domList.forEach((dom) => {
      dom.style["margin-right"] = "0px";
    });
  }, 150);
};

getDomById("footer-contribution").onmouseleave = () => {
  const domList = document.querySelectorAll("#footer-contribution img");
  domList.forEach((dom) => {
    dom.removeAttribute("intervalCss");
    dom.setAttribute("class", "contributionImg");
    dom.style["margin-right"] = "-15px";
  });
};

getDomById("jay").onclick = () => {
  window.open("https://baike.baidu.com/item/周杰伦/129156", "_blank");
};

getDomById("cr7").onclick = () => {
  window.open(
    "https://baike.baidu.com/item/克里斯蒂亚诺·罗纳尔多/4510104",
    "_blank"
  );
};

getDomById("marvel").onclick = () => {
  window.open("https://baike.baidu.com/item/漫威", "_blank");
};

getDomById("DC").onclick = () => {
  window.open("https://baike.baidu.com/item/DC漫画", "_blank");
};

getDomById("mailId").onclick = () => {
  window.open("mailto:jaychou_master@163.com");
};

document.querySelector('#copyright p b').innerText = `©${new Date().getFullYear()} 权朝阳`

setTimeout(() => {
  const logDom = document.querySelector('#chronicles-container')
  logDom.scrollLeft = logDom.scrollWidth
}, 0);

window.addEventListener("scroll", function scrollLoadMore() {
  let scrollTop = document.body.scrollTop; //滚动上去隐藏部分的高度
  if (scrollTop > 0) {
    getDomById("navTopMenu").style.backdropFilter = "blur(100px)";
  } else {
    getDomById("navTopMenu").style.backdropFilter = "";
  }
});

setTimeout(() => {
  const loaderStyle = document.getElementsByClassName("loader")[0].style;
  loaderStyle.opacity = 0;
  loaderStyle.height = "0px";
  getDomById("contentPage").style.opacity = 1;
}, 1500);

// 生成随机数
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function date() {
  var shower = getDomById("sitTip"); //不断获取新的被输出的数据
  var subtime = (Date.now() - new Date("2023-06-09 12:00:00")) / 1000; //计算时间差,并将毫秒转化为秒
  var days = parseInt(subtime / 86400); //天  24*60*60*1000
  var hours = fillZero(parseInt(subtime / 3600) - 24 * days); //小时  60*60  总小时数-过去小时数=现在小时数
  var mins = fillZero(parseInt((subtime % 3600) / 60)); //分钟 - (day*24)  以60秒为一整份  取余 剩下秒数 秒数/60就是分钟数
  var secs = fillZero(parseInt(subtime % 60)); //以60秒为一整份  取余  剩下秒数
  let timer =
    "已悄悄运行：" + days + "天" + hours + "小时" + mins + "分" + secs + "秒";
  shower.innerHTML = timer; //输入自己规定的形式的数据
}

function fillZero(num) {
  let numStr = num + "";
  return numStr.length === 1 ? "0" + numStr : numStr;
}

function chaju(date1, date2) {
  //建立一个方法来进行计算
  var time1 = Date.parse(date1); //将日期转换成毫秒值
  var time2 = Date.parse(date2);
  var time3 = time2 - time1; //毫秒值进行计算
  return time3;
}

setInterval(function () {
  date();
}, 1000);


