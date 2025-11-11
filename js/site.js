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

// 全局脚本（添加“回到顶部”按钮交互）
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

// “回到顶部”图标逻辑：底部显示，点击平滑回顶，到顶隐藏
(function initTopBtn() {
  const topBtn = getDomById("topBtn");
  if (!topBtn) return;

  // 阻尼与显示阈值（可按需调整）
  const damping = 0.5;      // 位移减速比例（0.3~0.6 推荐）
  const showOffset = 120;   // 距离底部多少像素内开始显示

  let isAutoScroll = false;
  let startTop = 0;

  const getScrollTop = () =>
    document.documentElement.scrollTop || document.body.scrollTop;
  const getScrollHeight = () =>
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const getClientHeight = () =>
    document.documentElement.clientHeight || window.innerHeight;

  // 点击平滑回顶，同时图标跟随上升（减速）
  topBtn.addEventListener("click", () => {
    startTop = getScrollTop();
    isAutoScroll = true;
    topBtn.style.opacity = "0.5";
    topBtn.style.pointerEvents = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const updateTopBtn = () => {
    const currentTop = getScrollTop();
    const nearBottom =
      Math.ceil(currentTop + getClientHeight()) >= document.body.scrollHeight * 0.98;
    const atTop = currentTop <= 0;

    if (isAutoScroll) {
      // 已上升距离，并按阻尼减速位移
      const delta = Math.max(0, startTop - currentTop);
      topBtn.style.transform = `translateY(${-delta * damping}px)`;

      if (atTop) {
        isAutoScroll = false;
        topBtn.style.opacity = "0";
        topBtn.style.pointerEvents = "none";
        topBtn.style.transform = "translateY(0)";
      } else {
        topBtn.style.opacity = "0.5";
      }
    } else {
      // 非自动滚动：只在靠近底部时显示
      topBtn.style.transform = "translateY(0)";
      if (nearBottom) {
        topBtn.style.opacity = "0.5";
        topBtn.style.pointerEvents = "auto";
      } else {
        topBtn.style.opacity = "0";
        topBtn.style.pointerEvents = "none";
      }
    }
  };

  updateTopBtn();
  window.addEventListener("scroll", updateTopBtn);
})();


