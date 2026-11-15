function getDomById(name) {
  return document.getElementById(name)
}

/* -------------------------------------------------------------------------- */
/* 滚动相关工具                                                                */
/* 历史原因：PC 端 body 是滚动容器（body 被绝对定位且限制为 100vh），         */
/* 移动端为了让浏览器工具栏正常伸缩，改成了文档滚动。这里统一封装，           */
/* 两种模式都能正确滚动 / 读取滚动位置。                                       */
/* -------------------------------------------------------------------------- */
function bodyIsScroller() {
  var body = document.body
  return (
    !!body &&
    body.scrollHeight > body.clientHeight + 2 &&
    getComputedStyle(body).overflowY !== "visible"
  )
}

function getPageScrollTop() {
  return Math.max(
    window.pageYOffset || 0,
    document.documentElement.scrollTop || 0,
    document.body.scrollTop || 0
  )
}

function scrollPageTo(y) {
  var top = Math.max(0, Math.round(y))
  try {
    window.scrollTo({ top: top, behavior: "smooth" })
  } catch (error) {
    window.scrollTo(0, top)
  }
  // 当 body 才是滚动容器时，上面的调用不一定生效，这里补一次
  if (bodyIsScroller()) {
    try {
      document.body.scrollTo({ top: top, behavior: "smooth" })
    } catch (error) {
      document.body.scrollTop = top
    }
  }
}

// 顶部固定导航遮挡的高度
function getNavOffset(extra) {
  var isMobile = document.documentElement.clientWidth <= 768
  return isMobile ? 64 : (extra || 0) + 100
}

function scrollToDom(dom, extra) {
  if (!dom) return
  scrollPageTo(dom.offsetTop - getNavOffset(extra))
}

// 同时监听 window 与 body 的 scroll（body 为滚动容器时 scroll 事件不会冒泡到 window）
function onPageScroll(handler) {
  window.addEventListener("scroll", handler, { passive: true })
  if (document.body) {
    document.body.addEventListener("scroll", handler, { passive: true })
  }
}

getDomById("scrollDownIcon").onclick = () => {
  scrollToDom(getDomById("skill"));
};

getDomById("skillText").onclick = () => {
  scrollToDom(getDomById("skill"));
};

getDomById("aboutText").onclick = () => {
  scrollToDom(document.getElementsByClassName("like-card")[0]);
};

getDomById("footmarkText").onclick = () => {
  scrollToDom(document.getElementsByClassName("mapMark")[0]);
};

getDomById("favorite").onclick = () => {
  scrollToDom(document.getElementsByClassName("like-card")[1]);
};

getDomById("msgText").onclick = () => {
  scrollToDom(document.getElementsByClassName("walineDiv")[0]);
};

getDomById("logText").onclick = () => {
  scrollToDom(getDomById("chronicles"), 100);
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

document.querySelector('#openSaturn').onclick = () => {
  window.open("https://quancy.cn/gemini/saturn", "_blank");
}

document.querySelector('#copyright p b').innerText = `©${new Date().getFullYear()} 权朝阳`

setTimeout(() => {
  // 流程年份（时间线默认从最早一条开始，横向滚动逻辑见 js/timeline.js）
  const thisYear = new Date().getFullYear();
  const yearDom = document.getElementById('this-year');
  if (yearDom) {
    yearDom.innerText = thisYear;
  }
}, 0);

// 全局脚本（顶部导航滚动后加毛玻璃）
onPageScroll(function scrollLoadMore() {
  const navDom = getDomById("navTopMenu");
  if (!navDom) return;
  const isMobile = document.documentElement.clientWidth <= 768;
  if (getPageScrollTop() > 0) {
    navDom.style.backdropFilter = "blur(" + (isMobile ? 18 : 100) + "px)";
    navDom.style.webkitBackdropFilter = "blur(" + (isMobile ? 18 : 100) + "px)";
  } else {
    navDom.style.backdropFilter = "";
    navDom.style.webkitBackdropFilter = "";
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
  if (document.hidden) return; // 后台标签页不再空转
  var shower = getDomById("sitTip"); //不断获取新的被输出的数据
  if (!shower) return;
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

// 点击左上角头像 / QuanCY 字母回到页面顶部
(function initLogoToTop() {
  const logo = getDomById("logoContent");
  if (!logo) return;

  const backToTop = () => scrollPageTo(0);

  logo.addEventListener("click", backToTop);
  // 键盘也能触发（回车 / 空格）
  logo.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      backToTop();
    }
  });
})();


