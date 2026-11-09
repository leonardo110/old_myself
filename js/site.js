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

function getPageScrollHeight() {
  return Math.max(
    document.documentElement.scrollHeight || 0,
    document.body.scrollHeight || 0
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
  const logDom = document.querySelector('#chronicles-container')
  if (logDom) {
    logDom.scrollLeft = logDom.scrollWidth
  }
  // 流程年份
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

// “回到顶部”图标逻辑：底部显示，点击平滑回顶，到顶隐藏
(function initTopBtn() {
  const topBtn = getDomById("topBtn");
  if (!topBtn) return;

  // 阻尼与显示阈值（可按需调整）
  const damping = 0.5;      // 位移减速比例（0.3~0.6 推荐）

  let isAutoScroll = false;
  let startTop = 0;

  const getScrollTop = () => getPageScrollTop();
  const getScrollHeight = () => getPageScrollHeight();
  // 注意：quirks 模式下移动端的 documentElement.clientHeight 会返回内容总高度，
  // 这里优先取 window.innerHeight（真实可视高度）
  const getClientHeight = () =>
    window.innerHeight || document.documentElement.clientHeight;

  // 点击平滑回顶，同时图标跟随上升（减速）
  topBtn.addEventListener("click", () => {
    startTop = getScrollTop();
    isAutoScroll = true;
    topBtn.style.opacity = "0.5";
    topBtn.style.pointerEvents = "none";
    scrollPageTo(0);
  });

  const updateTopBtn = () => {
    const currentTop = getScrollTop();
    const nearBottom =
      Math.ceil(currentTop + getClientHeight()) >= getScrollHeight() * 0.98;
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
  onPageScroll(updateTopBtn);
})();


