// 新提交的评论（仅限新提交的）
let newMsgLst = []

let manager

function initManager() {
  manager = new Danmu.create({
    mode: 'strict',
    // 其他配置选项
    trackHeight: '25%',
    durationRange: [15000, 30000],
    speed: null,
    gap: 350,
    limits: {
      view: 30,
      stash: 100
    },
    interval: 1000,
    rate: 1,
    plugin: {
      $createNode(danmaku) {
        const domValueList = danmaku.data.split('-')
        // 如果为true则为新提交的评论
        const flag = domValueList[domValueList.length - 1] !== 'new'
        let url = domValueList[0]
        const nick = domValueList[1]
        danmaku.node.innerHTML = `
          <div class=${flag ? 'danmu-body' : 'danmu-body-new'}>
            <img class='avatar-img' src=${url} alt='吃瓜'>
            <span class='danmu-content-text'>
              <span>${domValueList[1]}</span>：${domValueList[2]}
            </span>
          </div>
        `;
        danmaku.setloop();
        // danmaku.pause()
      },
    },
  });
  const danmuDom = document.getElementById('danmu');
  // 挂载，然后开始渲染
  manager.mount(danmuDom);
  manager.setTrackHeight('100% / 5');
  manager.startPlaying();
}

function initDanmuDom(list) {
    for (let index = 0; index < list.length; index++) {
        const item = list[index];
        const { avatar, nick, type, orig } = item
        if (type !== "administrator") {
          let str = `${avatar}-${nick}-${orig}`
          if (index === 0) {
            str+='-new'
          }
          manager.push(str);
        }
    }
}

async function invokeApi(flag, url) {
    await fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('弹幕初始化不正常');
        }
        return response.json(); // 解析为JSON
      })
      .then(data => {
          const msgList = data.data
          if (flag === 'init') {
            initManager()
            addEvent()
            initDanmuDom(msgList)
          } else {
            newMsgLst = [...msgList].filter((item) => {
              return item.type !== 'administrator'
            })
            const { avatar, nick, orig } = newMsgLst[0]
            manager.unshift(`${avatar}-${nick}-${orig}-new`)
          }
      })
      .catch(error => {
        console.error('弹幕初始化请求失败:', error);
      });
}

/**
 * 发送邮件、弹幕
 */
function sendEmailNew() {
  const fromName = document.querySelectorAll('.wl-card-item')[0].querySelector('.wl-nick').innerText
  // const content = document.querySelectorAll('.wl-card-item')[0].querySelector('.wl-content').innerText
  //第一步：建立所需的对象
  let httpRequest = new XMLHttpRequest();
  const urlStr = 'https://api.emailjs.com/api/v1.0/email/send'
  httpRequest.open('POST', urlStr, true);
  httpRequest.setRequestHeader("Content-Type", "application/json")
  httpRequest.setRequestHeader("accessToken", 'pvs-WoCFVPrHTVP2yXQ0a')
  var data = {
    service_id: 'service_1zz86vm',
    template_id: 'template_rky5kdc',
    user_id: '4TTOyipOWaFt3nIgq',
    template_params: {
      'form_name': fromName,
      'from_content': newMsgLst[0].orig,
      'from_message': '【Waline】'
    }
  };
  console.log('start httpRequest...', fromName, newMsgLst[0].orig)
  httpRequest.onreadystatechange = () => {
    console.log('in httpRequest...', httpRequest)
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
            var result = httpRequest.responseText;
            if (result === 'OK') {
              Swal.fire({
                width: 650,
                title: '✨ 留言提醒 ✨',
                text: '您的留言内容已推送邮件告知，\n请您耐心等待回复~\n\n🎉祝您开心！🎉'
              });
            }
        } else {
          console.error('邮件发送失败...')
        }
    } else {
        console.error('邮件发送失败...')
    }
  }
  //第三步：发送请求
  httpRequest.send(JSON.stringify(data));
}

function addAlt() {
  const itemList = document.querySelectorAll('.wl-reaction-img img');
  for (let index = 0; index < itemList.length; index++) {
      let itemDom = itemList[index];
      itemDom.setAttribute('alt', '表情');
  }
}

// 创建一个观察器实例
const observer = new MutationObserver((mutations) => {
  mutations.forEach(async(mutation) => {
      console.log('in mutation...', mutation)
      if (mutation.type === 'characterData' || mutation.type === 'childList') {
          // 发送邮件
          console.log('send email...')
          const srcUrl = document.querySelectorAll('.wl-card-item')[0].querySelector('.wl-user img').src
          if (!srcUrl.includes('pic.imgdb.cn')) {
              await invokeApi('new', `https://shenglang.site/comment?path=%2F&pageSize=1&page=1&lang=zh-CN&sortBy=insertedAt_desc`)
              sendEmailNew()
          }
      }
  });
});

// 获取目标元素
var intervalFunc = setInterval(() => {
  const targetNode = document.querySelector('.wl-num');
  if (targetNode) {
      addAlt() // SEO优化
      observeFunc(targetNode)
      clearInterval(intervalFunc)
  }
}, 3000);


function addEvent() {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      manager.freeze();
    } else {
      manager.unfreeze();
    }
  });
  const zoomNum = window.devicePixelRatio;
  if (zoomNum !== 1) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      top: '100px',
      showConfirmButton: false,
      timer: 5500,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: 'info',
      title: "请将浏览器缩放至100%后重新刷新页面以获得最佳体验~"
    });
  }
}

function observeFunc(targetNode) {
  // 配置观察选项
  const config = {
      characterData: true,
      childList: true,
      subtree: true
  };
  // 开始观察
  console.log('start observe...')
  observer.observe(targetNode, config);
}

setTimeout(() => {
  // 查询前30条留言
  invokeApi('init', `https://shenglang.site/comment?path=%2F&pageSize=30&page=1&lang=zh-CN&sortBy=insertedAt_desc`)
}, 2000);