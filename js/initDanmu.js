// 初始化的评论
let initMsgLst = []

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
      view: 50,
      stash: 100
    },
    interval: 1000,
    rate: 1,
    plugin: {
      $createNode(danmaku) {
        const domValueList = danmaku.data.split('-')
        // 如果为true则为新提交的评论
        const flag = domValueList[domValueList.length - 1] !== 'new'
        const url = domValueList[0]
        danmaku.node.innerHTML = `
          <div class=${flag ? 'danmu-body' : 'danmu-body-new'}>
            <img class='avatar-img' src=${url} />
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
    for (let index = 1; index < list.length; index++) {
        const item = list[index];
        const { avatar, nick, type, orig } = item
        if (type !== "administrator") {
          manager.push(`${avatar}-${nick}-${orig}`);
        }
    }
}

function getWalineMsg(size, flag) {
    let httpRequest = new XMLHttpRequest();
    //第二步：打开连接  将请求参数写在url中
    httpRequest.open(
      "GET",
      `https://msgboard.site/comment?path=%2F&pageSize=${size}&page=1&lang=zh-CN&sortBy=insertedAt_desc`,
      false
    );
    httpRequest.onreadystatechange = async function () {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          var json = httpRequest.responseText; //获取到json字符串，还需解析
          const msgList = JSON.parse(json).data
          if (flag === 'init') {
            initMsgLst = msgList
            initManager()
            initDanmuDom(msgList)
          } else {
            newMsgLst = [...msgList].filter((item) => {
              return item.type !== 'administrator'
            })
            const { avatar, nick, orig } = newMsgLst[0]
            manager.unshift(`${avatar}-${nick}-${orig}-new`)
          }
        }
      }
    };
    //第三步：发送请求
    httpRequest.send(null);
}

getWalineMsg(50, 'init')

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
              alert('\t✨ 留言提醒 ✨\n\n作者最近工作繁忙，\n您的留言内容已推送邮件告知，\n请您耐心等待回复~\n\n祝您开心！🎉')
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

// 创建一个观察器实例
const observer = new MutationObserver((mutations) => {
  mutations.forEach(async(mutation) => {
      console.log('in mutation...', mutation)
      if (mutation.type === 'characterData' || mutation.type === 'childList') {
          // 发送邮件
          console.log('send email...')
          const srcUrl = document.querySelectorAll('.wl-card-item')[0].querySelector('.wl-user img').src
          if (!srcUrl.includes('pic.imgdb.cn')) {
              await getWalineMsg(2, 'new')
              sendEmailNew()
          }
      }
  });
});

// 获取目标元素
var intervalFunc = setInterval(() => {
  const targetNode = document.querySelector('.wl-num');
  if (targetNode) {
      observeFunc(targetNode)
      clearInterval(intervalFunc)
  }
}, 3000);

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      console.log('freeze...')
      manager.freeze();
    } else {
      console.log('unfreeze...')
      manager.unfreeze();
    }
  });
})

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