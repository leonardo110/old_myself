const graph = {
  "nodes": [
    {
      "id": "Web",
      "name": "Web",
      "symbolSize": 30,
      "x": -10,
      "y": 30,
      "value": 30,
      "category": 0
    },
    {
      "id": "Html",
      "name": "Html", 
      "symbolSize": 20,
      "x": -100,
      "y": 60,
      "value": 20,
      "category": 1
    },
    {
      "id": "Canvas",
      "name": "Canvas",
      "symbolSize": 10,
      "x": -140,
      "y": 80,
      "value": 10,
      "category": 2
    },
    {
      "id": "SPA",
      "name": "SPA",
      "symbolSize": 10,
      "x": -90,
      "y": 90,
      "value": 10,
      "category": 2
    },
    {
      "id": "BootStrap",
      "name": "BootStrap",
      "symbolSize": 15,
      "x": -30,
      "y": 90,
      "value": 15,
      "category": 2
    },
    {
      "id": "AntV",
      "name": "AntV",
      "symbolSize": 15,
      "x": 35,
      "y": 85,
      "value": 15,
      "category": 2
    },
    {
      "id": "Css",
      "name": "Css",
      "symbolSize": 20,
      "x": 60,
      "y": 55,
      "value": 20,
      "category": 3
    },
    {
      "id": "Scss",
      "name": "Scss",
      "symbolSize": 10,
      "x": 130,
      "y": 70,
      "value": 10,
      "category": 4
    },
    {
      "id": "Less",
      "name": "Less",
      "symbolSize": 10,
      "x": 110,
      "y": 20,
      "value": 10,
      "category": 4
    },
    {
      "id": "JavaScript",
      "name": "JavaScript",
      "symbolSize": 20,
      "x": -25,
      "y": -25,
      "value": 20,
      "category": 5
    },
    {
      "id": "WebGL",
      "name": "WebGL",
      "symbolSize": 15,
      "x": -65,
      "y": -75,
      "value": 15,
      "category": 6
    },
    {
      "id": "WebPack",
      "name": "WebPack",
      "symbolSize": 15,
      "x": -110,
      "y": -70,
      "value": 15,
      "category": 6
    },
    {
      "id": "React",
      "name": "React",
      "symbolSize": 15,
      "x": -30,
      "y": -95,
      "value": 15,
      "category": 6
    },
    {
      "id": "Vue",
      "name": "Vue",
      "symbolSize": 15,
      "x": 5,
      "y": -85,
      "value": 15,
      "category": 6
    },
    {
      "id": "ECharts",
      "name": "ECharts",
      "symbolSize": 15,
      "x": 70,
      "y": -50,
      "value": 15,
      "category": 6
    },
    {
      "id": "Vite",
      "name": "Vite",
      "symbolSize": 15,
      "x": 35,
      "y": -60,
      "value": 15,
      "category": 6
    },
    {
      "id": "jQuery",
      "name": "jQuery",
      "symbolSize": 15,
      "x": 30,
      "y": -30,
      "value": 15,
      "category": 6
    },
    {
      "id": "NodeJS",
      "name": "NodeJS",
      "symbolSize": 15,
      "x": -55,
      "y": 20,
      "value": 15,
      "category": 6
    },
    {
      "id": "NPM",
      "name": "NPM",
      "symbolSize": 15,
      "x": -110,
      "y": -5,
      "value": 15,
      "category": 6
    },
    {
      "id": "Babel",
      "name": "Babel",
      "symbolSize": 15,
      "x": -150,
      "y": -45,
      "value": 15,
      "category": 6
    },
    {
      "id": "Yarn",
      "name": "Yarn",
      "symbolSize": 15,
      "x": -135,
      "y": 30,
      "value": 15,
      "category": 6
    },
    {
      "id": "VitePress",
      "name": "VitePress",
      "symbolSize": 15,
      "x": 60,
      "y": -85,
      "value": 15,
      "category": 6
    },
    {
      "id": "TypeScript",
      "name": "TypeScript",
      "symbolSize": 15,
      "x": 20,
      "y": 20,
      "value": 15,
      "category": 6
    },
    {
      "id": "Axios",
      "name": "Axios",
      "symbolSize": 15,
      "x": 80,
      "y": 15,
      "value": 15,
      "category": 6
    },
    {
      "id": "Server",
      "name": "Server",
      "symbolSize": 25,
      "x": 70,
      "y": -10,
      "value": 25,
      "category": 7
    },
    {
      "id": "Docker",
      "name": "Docker",
      "symbolSize": 20,
      "x": 110,
      "y": -65,
      "value": 20,
      "category": 8
    },
    {
      "id": "Nginx",
      "name": "Nginx",
      "symbolSize": 20,
      "x": 115,
      "y": -25,
      "value": 20,
      "category": 8
    },
    {
      "id": "SSR",
      "name": "SSR",
      "symbolSize": 20,
      "x": 140,
      "y": 5,
      "value": 20,
      "category": 8
    },
  ],
  "links": [
    {
      "source": "Web",
      "target": "Html"
    },
    {
      "source": "Html",
      "target": "AntV"
    },
    {
      "source": "CSS",
      "target": "AntV"
    },
    {
      "source": "JavaScript",
      "target": "AntV"
    },
    {
      "source": "Html",
      "target": "Canvas"
    },
    {
      "source": "Html",
      "target": "SPA"
    },
    {
      "source": "Html",
      "target": "BootStrap"
    },
    {
      "source": "Css",
      "target": "BootStrap"
    },
    {
      "source": "Web",
      "target": "Css"
    },
    {
      "source": "Css",
      "target": "Scss"
    },
    {
      "source": "Css",
      "target": "Less"
    },
    {
      "source": "Web",
      "target": "JavaScript"
    },
    {
      "source": "JavaScript",
      "target": "Vue"
    },
    {
      "source": "JavaScript",
      "target": "BootStrap"
    },
    {
      "source": "Vue",
      "target": "VitePress"
    },
    {
      "source": "Vite",
      "target": "VitePress"
    },
    {
      "source": "JavaScript",
      "target": "React"
    },
    {
      "source": "JavaScript",
      "target": "TypeScript"
    },
    {
      "source": "JavaScript",
      "target": "JQuery"
    },
    {
      "source": "JavaScript",
      "target": "NodeJS"
    },
    {
      "source": "JavaScript",
      "target": "NPM"
    },
    {
      "source": "JavaScript",
      "target": "Babel"
    },
    {
      "source": "Babel",
      "target": "WebPack"
    },
    {
      "source": "JavaScript",
      "target": "WebPack"
    },
    {
      "source": "JavaScript",
      "target": "WebGL"
    },
    {
      "source": "JavaScript",
      "target": "jQuery"
    },
    {
      "source": "JavaScript",
      "target": "Yarn"
    },
    {
      "source": "JavaScript",
      "target": "ECharts"
    },
    {
      "source": "JavaScript",
      "target": "Vite"
    },
    {
      "source": "JavaScript",
      "target": "Server"
    },
    {
      "source": "JavaScript",
      "target": "Axios"
    },
    {
      "source": "Server",
      "target": "Axios"
    },
    {
      "source": "Server",
      "target": "Docker"
    },
    {
      "source": "Server",
      "target": "Nginx"
    },
    {
      "source": "Server",
      "target": "SSR"
    },
  ],
  "categories": [
    {
      "name": "A"
    },
    {
      "name": "B"
    },
    {
      "name": "C"
    },
    {
      "name": "D"
    },
    {
      "name": "E"
    },
    {
      "name": "F"
    },
    {
      "name": "G"
    },
    {
      "name": "H"
    },
    {
      "name": "I"
    }
  ]
}

const musicIdList = [
  "不走寻常路",
  "纽约地铁", 
  "七里香",
  "以父之名",
  "忍者",
  "夜的第七章",
  "最后的战役",
  "稻香",
  "退后",
  "晴天",
  "说好的幸福呢",
  "兰亭序",
  "说了再见",
  "反方向的钟",
  "轨迹",
  "花海",
  "半岛铁盒",
  "蒲公英的约定",
  "最长的电影",
  "甜甜的",
  "爱在西元前",
  "枫",
  "烟花易冷",
  "一路向北",
  "我落泪情绪零碎",
  "不能说的秘密",
  "搁浅",
  "夜曲",
  "发如雪",
  "蜗牛",
  "龙卷风",
  "爱情悬崖",
  "安静",
  "青花瓷",
  "外婆",
  "断了的弦",
  "借口",
  "本草纲目",
  "上海一九四三",
  "逆鳞",
  "同一种调调",
  "白色风车",
  "龙拳",
  "威廉古堡",
  "一口气全念对",
  "困兽之斗",
  "迷魂曲",
  "完美主义",
  "无双",
  "公公偏头痛",
  "免费教学录影带",
  "魔术先生",
  "床边故事",
  "霍元甲",
  "半兽人",
  "斗牛",
  "皮影戏",
  "瓦解",
  "东风破",
  "我的地盘",
  "可爱女人",
  "开不了口",
  "超跑女神",
  "手写的从前",
  "暗号",
  "千里之外",
  "雨下一整晚",
  "听妈妈的话",
  "娘子",
  "周大侠",
  "星晴",
  "印第安老斑鸠",
  "黑色幽默",
  "可爱女人",
  "我的地盘",
  "心雨",
  "黄金甲",
  "她的睫毛",
  "园游会",
  "前世情人",
  "乱舞春秋",
  "爷爷泡的茶",
  "龙战骑士",
  "琴伤",
  "懦夫",
  "四面楚歌",
  "给我一首歌的时间",
  "梯田",
  "火车叨位去",
  "三年二班",
  "飘移",
  "浪漫手机",
  "红模仿",
  "阳光宅男",
  "伊斯坦堡",
  "世界未末日",
  "将军",
  "分裂",
  "双刀",
  "麦芽糖",
  "蓝色风暴",
  "跨时代",
  "止战之殇",
  "迷迭香",
  "牛仔很忙",
  "乔克叔叔",
  "扯",
  "双截棍",
]

const one_lrc = "[ti:不走寻常路]\n[ar:周杰伦]\n[al:不走寻常路]\n[by:]\n[offset:0]\n[00:00:00] 不走寻常路 - 周杰伦\n[00:03:00] 词：周杰伦\n[00:06:00] 曲：周杰伦\n[00:41.00]我向前一步 不走寻常路\n[00:43.05]这意大利面你就要走出一条新思路\n[00:45.31]看我黄皮肤 秀篮球工夫\n[00:47.23]在另旁隔壁你敢不敢来挑战艺术\n[00:49.78]我向前一步(向前一步)\n[00:52.01]不走寻常路 (不走寻常路)\n[00:54.72]我向前一步(向前一步)\n[00:56.96]不走寻常路 (不走寻常路)\n[01:08.84]我向前一步(向前一步)\n[01:10.55]不走寻常路 (不走寻常路)\n[01:12.79]我向前一步(向前一步)\n[01:15.07]不走寻常路 (不走寻常路)\n[01:35.48]我向前一步 不走寻常路\n[01:37.25]这意大利面你就要走出一条新思路\n[01:39.98]看我黄皮肤 秀篮球工夫\n[01:41.71]在另旁隔壁你敢不敢来挑战艺术\n[01:44.18]我向前一步(向前一步)\n[01:46.33]不走寻常路 (不走寻常路)\n[01:49.12]我向前一步(向前一步)\n[01:51.48]不走寻常路 (不走寻常路)\n[02:11.76]我向前一步(向前一步)\n[02:13.92]不走寻常路 (不走寻常路)\n[02:16.22]我向前一步(向前一步)\n[02:18.58]不走寻常路 (不走寻常路)\n[02:21.04]我向前一步(向前一步)\n[02:23.33]不走寻常路 (不走寻常路)\n[02:25.65]我向前一步(向前一步)\n[02:27.93]不走寻常路 (不走寻常路)\n[02:30.27]我向前一步(向前一步)\n[02:32.51]不走寻常路 (不走寻常路)\n[02:34.77]我向前一步(向前一步)\n[02:36.81]不走寻常路 (不走寻常路)\n"

const second_lrc = 
  "[ti:纽约地铁]\n" +
  "[ar:周杰伦]\n" +
  "[al:纽约地铁]\n" +
  "[by:]\n" +
  "[offset:0]\n" +
  "[00:00:00] 纽约地铁 - 周杰伦\n" +
  "[00:02:00] 词：黄俊郎\n" +
  "[00:05:00] 曲：周杰伦\n" +
  "[00:24:00] 曼哈顿的夕阳\n" +
  "[00:25:00] 投射出尊严的黄色小调\n" +
  "[00:27:00] 对照黯淡\n" +
  "[00:28:00] 地下道那卑微的咆哮\n" +
  "[00:29:00] 名利在炫耀\n" +
  "[00:30:00] 在酒池燃烧\n" +
  "[00:31:00] 我想要忘掉\n" +
  "[00:32:00] 我会改变\n" +
  "[00:33:00] 我会祷告\n" +
  "[00:34:00] 我会变得重要\n" +
  "[00:35:00] 咬着牙齿 坚持穿过\n" +
  "[00:37:00] 布鲁克林的转角\n" +
  "[00:38:00] 我想洗掉回忆里\n" +
  "[00:40:00] 那一阵一阵的嘲笑\n" +
  "[00:41:00] 生存只有一种立场\n" +
  "[00:43:00] 一块以我命名的土壤\n" +
  "[00:45:00] 跟一扇有阳光的窗\n" +
  "[00:46:00] 我的打拼 是用生命\n" +
  "[00:48:00] 肩膀的痛\n" +
  "[00:49:00] 有时梦到 被人开枪\n" +
  "[00:51:00] 醒来还是害怕\n" +
  "[00:52:00] 你可知道 我哭的时候\n" +
  "[00:54:00] 绝对不出声\n" +
  "[00:55:00] 笑的时候 我会故意\n" +
  "[00:56:00] 越来越大声\n" +
  "[00:57:00] 我的故乡 到底在哪\n" +
  "[00:59:00] 你可知道 在我的双脚\n" +
  "[01:01:00] 只能可以这样一直走\n" +
  "[01:03:00] 为了一块饼 一台车\n" +
  "[01:05:00] 一个避雨的屋檐\n" +
  "[01:06:00] 要是倒下去的时候\n" +
  "[01:07:00] 想要倒在这\n" +
  "[01:08:00] 我们的天真 只能后退\n" +
  "[01:11:00] 生存的街 没有无邪\n" +
  "[01:14:00] 每个深夜都该学会\n" +
  "[01:17:00] 用冷笑包围 痛的懊悔\n" +
  "[01:19:00] 站在纽约的地下铁\n" +
  "[01:22:00] 我的寂寞 更加深邃\n" +
  "[01:25:00] 这个世界 想要活着\n" +
  "[01:28:00] 就不要有感觉\n" +
  "[01:33:00] 异乡陌生的香 刺眼的光\n" +
  "[01:36:00] 小小的床 白色的墙\n" +
  "[01:38:00] 十字的长廊 排斥的目光\n" +
  "[01:40:00] 浪潮般的沮丧失望\n" +
  "[01:42:00] 我爬的方向 应该向着阳光\n" +
  "[01:44:00] 让背后的伤赶不上\n" +
  "[01:46:00] 不会被挫折埋葬 我要更强\n" +
  "[01:48:00] 我会超出你想象\n" +
  "[01:50:00] 我不想成为像\n" +
  "[01:51:00] 诗人书里的一句感伤\n" +
  "[01:53:00] 我不是好莱坞\n" +
  "[01:54:00] 电影里面的过场\n" +
  "[01:55:00] 我的打拼 是用生命\n" +
  "[01:57:00] 肩膀的痛\n" +
  "[01:58:00] 有时梦到 被人开枪\n" +
  "[02:00:00] 醒来还是害怕\n" +
  "[02:01:00] 你可知道 我哭的时候\n" +
  "[02:03:00] 绝对不出声\n" +
  "[02:04:00] 笑的时候 我会故意\n" +
  "[02:05:00] 越来越大声\n" +
  "[02:06:00] 我的故乡 到底在哪\n" +
  "[02:08:00] 你可知道 在我的双脚\n" +
  "[02:10:00] 只能可以这样一直走\n" +
  "[02:12:00] 为了一块饼 一台车\n" +
  "[02:13:00] 一个避雨的屋檐\n" +
  "[02:15:00] 要是倒下去的时候\n" +
  "[02:16:00] 想要倒在这\n" +
  "[02:17:00] 我们的天真 只能后退\n" +
  "[02:20:00] 生存的街 没有无邪\n" +
  "[02:23:00] 每个深夜都该学会\n" +
  "[02:26:00] 用冷笑包围 痛的懊悔\n" +
  "[02:28:00] 站在纽约的地下铁\n" +
  "[02:31:00] 我的寂寞 更加深邃\n" +
  "[02:34:00] 这个世界 想要活着\n" +
  "[02:37:00] 就不要有感觉\n" +
  "[02:39:00] 我们的天真 只能后退\n" +
  "[02:42:00] 生存的街 没有无邪\n" +
  "[02:45:00] 每个深夜都该学会\n" +
  "[02:48:00] 用冷笑包围 痛的懊悔\n" +
  "[02:50:00] 站在纽约的地下铁\n" +
  "[02:53:00] 我的寂寞 更加深邃\n" +
  "[02:56:00] 这个世界 想要活着\n" +
  "[02:59:00] 就不要有感觉\n";

const locale = {
  nick: '昵称',
  nickError: '昵称不能少于3个字符',
  mail: '邮箱',
  mailError: '请填写正确的邮件地址',
  link: '网址',
  optional: '可选',
  placeholder: '欢迎评论',
  sofa: '来发评论吧~',
  submit: '发布',
  like: '喜欢',
  cancelLike: '取消喜欢',
  reply: '回复',
  cancelReply: '取消回复',
  comment: '评论',
  refresh: '刷新',
  more: '加载更多...',
  preview: '预览',
  emoji: '表情',
  uploadImage: '上传图片',
  seconds: '秒前',
  minutes: '分钟前',
  hours: '小时前',
  days: '天前',
  now: '刚刚',
  uploading: '正在上传',
  login: '登录',
  logout: '退出',
  admin: '博主',
  sticky: '置顶',
  word: '字',
  wordHint: '评论字数应在 $0 到 $1 字之间！\n当前字数：$2',
  anonymous: '吃瓜群众',
  level0: '潜水',
  level1: '冒泡',
  level2: '吐槽',
  level3: '活跃',
  level4: '话痨',
  level5: '',
  gif: '表情包',
  gifSearchPlaceholder: '搜索表情包',
  profile: '个人资料',
  approved: '通过',
  waiting: '待审核',
  spam: '垃圾',
  unsticky: '取消置顶',
  oldest: '按倒序',
  latest: '按正序',
  hottest: '按热度',
  reactionTitle: '你认为这个网站怎么样？留下你的评论吧~',
};

const cardDescList = [
  '基于标准HTML、CSS和JavaScript构建，并提供了一套声明式的、组件化的编程模型。',
  '用于构建用户界面的JS库，特点是声明式编码、JSX 语法、和 React Native 编写原生应用等。',
  'Autodesk公司出品的世界顶级的三维动画软件，应用对象是专业的影视广告，角色动画，电影特技等。',
  '一种具有函数优先的轻量级，解释型或即时编译型的编程语言。'
]

const jaychouList = [
    {
      "n": 1,
      "title": "晴天",
      "singer": "周杰伦",
      "hash": "6D6BC2D6AE2B21943F810A2CD23E2260",
      "Duration": "4:29"
    },
    {
      "n": 2,
      "title": "稻香",
      "singer": "周杰伦",
      "hash": "8909E1809908CD8E3BF6CF85D98B93F0",
      "Duration": "3:43"
    },
    {
      "n": 3,
      "title": "搁浅",
      "singer": "周杰伦",
      "hash": "FBC234520FED713C30C1C026E7352770",
      "Duration": "4:00"
    },
    {
      "n": 4,
      "title": "青花瓷",
      "singer": "周杰伦",
      "hash": "37A8F50A9EC3B267C3CC6BEC633D9C4A",
      "Duration": "3:59"
    },
    {
      "n": 5,
      "title": "夜曲",
      "singer": "周杰伦",
      "hash": "16C8AB298231370293D16BCF9E5FF9B6",
      "Duration": "3:46"
    },
    {
      "n": 6,
      "title": "一路向北",
      "singer": "周杰伦",
      "hash": "70DE0DAF4DB31CBB56B82D1821B16F86",
      "Duration": "4:55"
    },
    {
      "n": 7,
      "title": "兰亭序",
      "singer": "周杰伦",
      "hash": "4EC10B1B7B9BEB2F0ADB89BBEC5F664B",
      "Duration": "4:13"
    },
    {
      "n": 8,
      "title": "蒲公英的约定",
      "singer": "周杰伦",
      "hash": "6996B4D89596673746AEE3D54F7E5367",
      "Duration": "4:07"
    },
    {
      "n": 9,
      "title": "明明就",
      "singer": "周杰伦",
      "hash": "D85C14E02008B7A2F97D55CDC29C2221",
      "Duration": "4:20"
    },
    {
      "n": 10,
      "title": "枫",
      "singer": "周杰伦",
      "hash": "0D7E8C11C961A17EB8779FEB0CA772E3",
      "Duration": "4:35"
    },
    {
      "n": 11,
      "title": "爱你没差",
      "singer": "周杰伦",
      "hash": "66F31869BBAA767A929F35EEE1CCC5C9",
      "Duration": "4:40"
    },
    {
      "n": 12,
      "title": "说好的幸福呢",
      "singer": "周杰伦",
      "hash": "892B7AD62499C97A1A994454423E30F6",
      "Duration": "4:16"
    },
    {
      "n": 13,
      "title": "退后",
      "singer": "周杰伦",
      "hash": "5971DE0B235D5B2708D6A6FEB3D31B6F",
      "Duration": "4:21"
    },
    {
      "n": 14,
      "title": "七里香",
      "singer": "周杰伦",
      "hash": "2C7CEB6CC2340ECC8948E0ACE62F0CF8",
      "Duration": "4:59"
    },
    {
      "n": 15,
      "title": "告白气球",
      "singer": "周杰伦",
      "hash": "688857974673645CE89EDA26A36DB19D",
      "Duration": "3:35"
    },
    {
      "n": 16,
      "title": "花海",
      "singer": "周杰伦",
      "hash": "3328808CECBD1A1038166003840FDDD7",
      "Duration": "4:24"
    },
    {
      "n": 17,
      "title": "珊瑚海",
      "singer": "周杰伦、Lara梁心颐",
      "hash": "90E34F0C582168E7EA857915771AB220",
      "Duration": "4:15"
    },
    {
      "n": 18,
      "title": "红尘客栈",
      "singer": "周杰伦",
      "hash": "48729371F20FB048EF4E51D4CD41DBF5",
      "Duration": "4:34"
    },
    {
      "n": 19,
      "title": "烟花易冷",
      "singer": "周杰伦",
      "hash": "B9FC03DF9015D6BFF0554A110BF2C84F",
      "Duration": "4:23"
    },
    {
      "n": 20,
      "title": "说了再见",
      "singer": "周杰伦",
      "hash": "966C718DA96EE29B3B466F773BFA9E2F",
      "Duration": "4:42"
    },
    {
      "n": 21,
      "title": "听妈妈的话",
      "singer": "周杰伦",
      "hash": "B55FCC75168E0C8F3EB8AAD347911328",
      "Duration": "4:25"
    },
    {
      "n": 22,
      "title": "爱在西元前",
      "singer": "周杰伦",
      "hash": "66B756FB1331807B032EF97F7BA9948E",
      "Duration": "3:54"
    },
    {
      "n": 23,
      "title": "最长的电影",
      "singer": "周杰伦",
      "hash": "DBE8FCD4C5072CF6139A28E32D45B990",
      "Duration": "3:55"
    },
    {
      "n": 24,
      "title": "我落泪情绪零碎",
      "singer": "周杰伦",
      "hash": "27943EB1CBD46F7BB165B054CE6EBDC8",
      "Duration": "4:17"
    },
    {
      "n": 25,
      "title": "半岛铁盒",
      "singer": "周杰伦",
      "hash": "67BA8A4A0681F2078BC423CB13B904B7",
      "Duration": "5:19"
    },
    {
      "n": 26,
      "title": "给我一首歌的时间",
      "singer": "周杰伦",
      "hash": "EAD10DC931A1102A10FDCD3665010322",
      "Duration": "4:13"
    },
    {
      "n": 27,
      "title": "发如雪",
      "singer": "周杰伦",
      "hash": "1F7E7659B9FFF4FB6F71562A61BBC25F",
      "Duration": "4:59"
    },
    {
      "n": 28,
      "title": "简单爱",
      "singer": "周杰伦",
      "hash": "6E44CE19BE5872384FA184B995CCE23B",
      "Duration": "4:31"
    },
    {
      "n": 29,
      "title": "不能说的秘密",
      "singer": "周杰伦",
      "hash": "EDFC5DD1AC3D58971AB95B3E2700D015",
      "Duration": "4:56"
    },
    {
      "n": 30,
      "title": "等你下课",
      "singer": "周杰伦",
      "hash": "5D043EC8BF78A185A01CC45A6032DE1F",
      "Duration": "4:30"
    },
    {
      "n": 31,
      "title": "反方向的钟",
      "singer": "周杰伦",
      "hash": "A6049AAB184A305CAA906C6BBB8E8233",
      "Duration": "4:18"
    },
    {
      "n": 32,
      "title": "借口",
      "singer": "周杰伦",
      "hash": "47C5990AEBDBDC27239D989BC3FF638E",
      "Duration": "4:20"
    },
    {
      "n": 33,
      "title": "不该",
      "singer": "周杰伦、张惠妹",
      "hash": "FCF336E81DA45A8E696032FFC1708175",
      "Duration": "4:51"
    },
    {
      "n": 34,
      "title": "轨迹",
      "singer": "周杰伦",
      "hash": "E2FCB8D3A0BCDA595D2A71239A54888F",
      "Duration": "5:26"
    },
    {
      "n": 35,
      "title": "你听得到",
      "singer": "周杰伦",
      "hash": "9C475C36AFDF058F0A095610C476C80D",
      "Duration": "3:50"
    },
    {
      "n": 36,
      "title": "手写的从前",
      "singer": "周杰伦",
      "hash": "2920D0149AD73FAC588C264539F7927F",
      "Duration": "4:57"
    },
    {
      "n": 37,
      "title": "我是如此相信",
      "singer": "周杰伦",
      "hash": "310DE26DE1CB56B576371BB4375E8694",
      "Duration": "4:25"
    },
    {
      "n": 38,
      "title": "暗号",
      "singer": "周杰伦",
      "hash": "B4E946F6A8AAEDC1704F632BEF821027",
      "Duration": "4:31"
    },
    {
      "n": 39,
      "title": "龙卷风",
      "singer": "周杰伦",
      "hash": "DC01CBBB77D98925BABBC8DFEF7C5D02",
      "Duration": "4:10"
    },
    {
      "n": 40,
      "title": "东风破",
      "singer": "周杰伦",
      "hash": "B24AB4AD67A1E7228121180247503E84",
      "Duration": "5:15"
    },
    {
      "n": 41,
      "title": "夜的第七章",
      "singer": "周杰伦、潘儿",
      "hash": "337D5E77AA94AEFC88BD1D67544FA0B9",
      "Duration": "3:48"
    },
    {
      "n": 42,
      "title": "安静",
      "singer": "周杰伦",
      "hash": "1822697A2FF6AC13824C1B0B3CE44C34",
      "Duration": "5:34"
    },
    {
      "n": 43,
      "title": "我不配",
      "singer": "周杰伦",
      "hash": "00CBE76AE7676D5D2A3D832D202C8FFD",
      "Duration": "4:48"
    },
    {
      "n": 44,
      "title": "开不了口",
      "singer": "周杰伦",
      "hash": "32DD461A82439D4B75E87ECC3F047E6A",
      "Duration": "4:45"
    },
    {
      "n": 45,
      "title": "以父之名",
      "singer": "周杰伦",
      "hash": "DBC0207490EB51153EF933EF5A7E98E4",
      "Duration": "5:42"
    },
    {
      "n": 46,
      "title": "彩虹",
      "singer": "周杰伦",
      "hash": "06FCF5CDF4EE8A6599645D73FE80349F",
      "Duration": "4:23"
    },
    {
      "n": 47,
      "title": "园游会",
      "singer": "周杰伦",
      "hash": "45A5CB9C80ECC8AEA868A0AE55CDFD42",
      "Duration": "4:15"
    },
    {
      "n": 48,
      "title": "霍元甲",
      "singer": "周杰伦",
      "hash": "39F9B306592D67729596A955DEAD35FF",
      "Duration": "4:38"
    },
    {
      "n": 49,
      "title": "爱情废柴",
      "singer": "周杰伦",
      "hash": "5663E05DF2CAF8B65931048A05BAE8AB",
      "Duration": "4:46"
    },
    {
      "n": 50,
      "title": "说好不哭 (with 五月天阿信)",
      "singer": "周杰伦",
      "hash": "18A42CD957A84D105A39B23447277EA4",
      "Duration": "3:40"
    },
    {
      "n": 51,
      "title": "断了的弦",
      "singer": "周杰伦",
      "hash": "27CC65D785149AAB04998C31A4E16A1D",
      "Duration": "4:57"
    },
    {
      "n": 52,
      "title": "倒带 (Live)",
      "singer": "周杰伦",
      "hash": "CF25DBB549990526CD3DF00C8E073B57",
      "Duration": "4:36"
    },
    {
      "n": 53,
      "title": "回到过去",
      "singer": "周杰伦",
      "hash": "79A00772CAC20558F4DC7780DA7BC5FC",
      "Duration": "3:53"
    },
    {
      "n": 54,
      "title": "黑色毛衣",
      "singer": "周杰伦",
      "hash": "F0C226F11E47A7FDC8D9512624AC6F1E",
      "Duration": "4:12"
    },
    {
      "n": 55,
      "title": "大笨钟",
      "singer": "周杰伦",
      "hash": "59F1595E1E2B2AB85FF31E19C24D6298",
      "Duration": "4:02"
    },
    {
      "n": 56,
      "title": "雨下一整晚",
      "singer": "周杰伦",
      "hash": "9818BF1D542672B43E07B0A99EB5B9FA",
      "Duration": "4:16"
    },
    {
      "n": 57,
      "title": "甜甜的",
      "singer": "周杰伦",
      "hash": "82EDE88EBAA21DB5B288E6290AC64C71",
      "Duration": "4:03"
    },
    {
      "n": 58,
      "title": "本草纲目",
      "singer": "周杰伦",
      "hash": "78E0A0A9831228186ADEF7DFCC3E0212",
      "Duration": "3:29"
    },
    {
      "n": 59,
      "title": "说好不哭",
      "singer": "周杰伦",
      "hash": "A29884CCA0E8CC7EB1B602116916250E",
      "Duration": "3:42"
    },
    {
      "n": 60,
      "title": "千里之外",
      "singer": "周杰伦、费玉清",
      "hash": "055A1AE5D7B2355BBBB52307E99E43A9",
      "Duration": "4:16"
    },
    {
      "n": 61,
      "title": "白色风车",
      "singer": "周杰伦",
      "hash": "99616AA2A32AB8F9519594F39AE3A9C8",
      "Duration": "4:32"
    },
    {
      "n": 62,
      "title": "可爱女人",
      "singer": "周杰伦",
      "hash": "9197D310C02AEEDCEAD21C55EC56FA03",
      "Duration": "3:59"
    },
    {
      "n": 63,
      "title": "爷爷泡的茶",
      "singer": "周杰伦",
      "hash": "825BF773667A800EDB21BF854B51DBC1",
      "Duration": "4:00"
    },
    {
      "n": 64,
      "title": "爱的飞行日记",
      "singer": "周杰伦、杨瑞代",
      "hash": "BA4ED805C985EAC9CF1764EC35BD283A",
      "Duration": "4:15"
    },
    {
      "n": 65,
      "title": "最伟大的作品",
      "singer": "周杰伦",
      "hash": "510EB8C042D36F87C3BDEFD39E08856A",
      "Duration": "4:04"
    },
    {
      "n": 66,
      "title": "菊花台",
      "singer": "周杰伦",
      "hash": "DAE19FB014618253B8D0EC4C5EB33AEB",
      "Duration": "4:54"
    },
    {
      "n": 67,
      "title": "星晴",
      "singer": "周杰伦",
      "hash": "83D98D282339143E5577EF383413CE4C",
      "Duration": "4:19"
    },
    {
      "n": 68,
      "title": "止战之殇",
      "singer": "周杰伦",
      "hash": "10CADB376608493D8672FC6C5A3BB97C",
      "Duration": "4:34"
    },
    {
      "n": 69,
      "title": "圣诞星",
      "singer": "周杰伦",
      "hash": "5FA340B158C2E385E64338177384CFD7",
      "Duration": "3:02"
    },
    {
      "n": 70,
      "title": "心雨",
      "singer": "周杰伦",
      "hash": "5EF03A8A1244FCCC41B3D13DA3678B87",
      "Duration": "4:30"
    },
    {
      "n": 71,
      "title": "布拉格广场",
      "singer": "蔡依林、周杰伦",
      "hash": "11ED7139CB728E806E9CFFEA8BF736CC",
      "Duration": "4:54"
    },
    {
      "n": 72,
      "title": "算什么男人",
      "singer": "周杰伦",
      "hash": "1097B1D82DBC81D823F342FD255B9689",
      "Duration": "4:49"
    },
    {
      "n": 73,
      "title": "浪漫手机",
      "singer": "周杰伦",
      "hash": "F96FEE269E7D6CEEF52721CE1FF0B3B8",
      "Duration": "4:00"
    },
    {
      "n": 74,
      "title": "黑色幽默",
      "singer": "周杰伦",
      "hash": "D681FA093916B2205C13A4C5700302E7",
      "Duration": "4:43"
    },
    {
      "n": 75,
      "title": "她的睫毛",
      "singer": "周杰伦",
      "hash": "CDDD15CA84029993171179D51B40E0F1",
      "Duration": "3:52"
    },
    {
      "n": 76,
      "title": "红颜如霜",
      "singer": "周杰伦",
      "hash": "7CFFD39CDAD40EC5CD7C9CE1C3BCEBBC",
      "Duration": "4:17"
    },
    {
      "n": 77,
      "title": "阳光宅男",
      "singer": "周杰伦",
      "hash": "1C1342D0E5892DCB2BD7C1066819ED35",
      "Duration": "3:42"
    },
    {
      "n": 78,
      "title": "米兰的小铁匠",
      "singer": "周杰伦",
      "hash": "8A6185D930DFB90A62BA4BE72AADD61A",
      "Duration": "4:00"
    },
    {
      "n": 79,
      "title": "分裂",
      "singer": "周杰伦",
      "hash": "B18C28D529C8850E5DFAB4A37BA9E651",
      "Duration": "4:14"
    },
    {
      "n": 80,
      "title": "世界末日 (Live)",
      "singer": "周杰伦",
      "hash": "0B38E5ED0C48413588C8BC2688891708",
      "Duration": "4:25"
    },
    {
      "n": 81,
      "title": "外婆",
      "singer": "周杰伦",
      "hash": "01546DADC5C5C66518DCB8BFC90F2A7D",
      "Duration": "4:04"
    },
    {
      "n": 82,
      "title": "听见下雨的声音",
      "singer": "周杰伦",
      "hash": "3FFB377D2C6C90116CA288AF137FC75F",
      "Duration": "4:39"
    },
    {
      "n": 83,
      "title": "一点点",
      "singer": "周杰伦",
      "hash": "4FD20B97E8D7E0909B847E87F77BB509",
      "Duration": "3:42"
    },
    {
      "n": 84,
      "title": "半兽人",
      "singer": "周杰伦",
      "hash": "CE70896153B46BF589B50DD5255BF534",
      "Duration": "4:07"
    },
    {
      "n": 85,
      "title": "飘移",
      "singer": "周杰伦",
      "hash": "FE48EF108C7383F71B95D4BE94026B74",
      "Duration": "4:05"
    },
    {
      "n": 86,
      "title": "美人鱼",
      "singer": "周杰伦",
      "hash": "4A9EBB33DF7616277A2B0D9DC93F49A8",
      "Duration": "3:39"
    },
    {
      "n": 87,
      "title": "好久不见",
      "singer": "周杰伦",
      "hash": "7BE7A1030E31BF13476DCC15CE3C0FC0",
      "Duration": "4:11"
    },
    {
      "n": 88,
      "title": "默 (Live)",
      "singer": "李荣浩、周杰伦",
      "hash": "7B778542D5B285E8F7884028F7B2EE15",
      "Duration": "2:13"
    },
    {
      "n": 89,
      "title": "哪里都是你",
      "singer": "周杰伦",
      "hash": "47F6987B9A8BF1459872537B51F60DCF",
      "Duration": "4:39"
    },
    {
      "n": 90,
      "title": "最后的战役",
      "singer": "周杰伦",
      "hash": "4AE86E0171CC14D8017FD1C14FF16759",
      "Duration": "4:11"
    },
    {
      "n": 91,
      "title": "青花瓷 (Single Version)",
      "singer": "周杰伦",
      "hash": "D89EFC4F198C5E5BAC6ED455EE4ABD0C",
      "Duration": "3:59"
    },
    {
      "n": 92,
      "title": "牛仔很忙",
      "singer": "周杰伦",
      "hash": "A541A42555AFB636BF17508C1DA28D22",
      "Duration": "2:48"
    },
    {
      "n": 93,
      "title": "对不起",
      "singer": "周杰伦",
      "hash": "8F3B6D06159D8131806C723A9779D097",
      "Duration": "3:45"
    },
    {
      "n": 94,
      "title": "龙拳",
      "singer": "周杰伦",
      "hash": "C7B7C515A05E9773FD92B4683982EB4F",
      "Duration": "4:34"
    },
    {
      "n": 95,
      "title": "还在流浪",
      "singer": "周杰伦",
      "hash": "B1643F7EDAD1AE5EF306174F94C57BA6",
      "Duration": "4:25"
    },
    {
      "n": 96,
      "title": "爱情悬崖",
      "singer": "周杰伦",
      "hash": "3D069092B3A262DCFA9ED489D22F9296",
      "Duration": "4:22"
    },
    {
      "n": 97,
      "title": "搁浅 (Live)",
      "singer": "周杰伦",
      "hash": "C2D42AD2070678122CCFCD9FBF1179D3",
      "Duration": "4:21"
    },
    {
      "n": 98,
      "title": "威廉古堡",
      "singer": "周杰伦",
      "hash": "B9C4490CAF581C4612BF0672965A9802",
      "Duration": "3:56"
    },
    {
      "n": 99,
      "title": "错过的烟火",
      "singer": "周杰伦",
      "hash": "F850C917F6F1A1721AEECC31761E23E7",
      "Duration": "4:17"
    },
    {
      "n": 100,
      "title": "双截棍",
      "singer": "周杰伦",
      "hash": "238E0B261E8B05D1E67C8CB6A92AC567",
      "Duration": "3:21"
    },
    {
      "n": 101,
      "title": "Mine Mine",
      "singer": "周杰伦",
      "hash": "C6F3EAB7AB94B4E50AD2BF645CF9E8D2",
      "Duration": "4:28"
    },
    {
      "n": 102,
      "title": "超人不会飞",
      "singer": "周杰伦",
      "hash": "4A1483A74416F3B9C74D76287295D053",
      "Duration": "5:00"
    },
    {
      "n": 103,
      "title": "屋顶",
      "singer": "温岚、周杰伦",
      "hash": "347BDED53FF74C06DCB59BD2838E3E86",
      "Duration": "5:19"
    },
    {
      "n": 104,
      "title": "最长的电影 (Live)",
      "singer": "周杰伦",
      "hash": "736B7E4C0EDB486EBF7A4FCDDC068715",
      "Duration": "4:01"
    },
    {
      "n": 105,
      "title": "说了再见 (钢琴版)",
      "singer": "周杰伦",
      "hash": "09C54558A418B93A02CCAB9DEE741B4A",
      "Duration": "0:00"
    },
    {
      "n": 106,
      "title": "粉色海洋",
      "singer": "周杰伦",
      "hash": "011910288223F1B26CC8964AB4383F03",
      "Duration": "3:06"
    },
    {
      "n": 107,
      "title": "你比从前快乐 (Live)",
      "singer": "周杰伦",
      "hash": "5947725B15EDCD2905C63C410A8B6B6F",
      "Duration": "3:22"
    },
    {
      "n": 108,
      "title": "周大侠",
      "singer": "周杰伦",
      "hash": "DAB06E01BF4715AA9485EF416D6B6FE6",
      "Duration": "2:14"
    },
    {
      "n": 109,
      "title": "四面楚歌",
      "singer": "周杰伦、林迈可",
      "hash": "A8022E1D13867155E35EF56D71DDB6AF",
      "Duration": "4:08"
    },
    {
      "n": 110,
      "title": "倒影",
      "singer": "周杰伦",
      "hash": "770EBA310E3FC9855263E04DA2F65E96",
      "Duration": "3:54"
    },
    {
      "n": 111,
      "title": "蒲公英的约定 (Live)",
      "singer": "周杰伦",
      "hash": "4F95F653E53692D5A5AD0B773AC09B19",
      "Duration": "4:12"
    },
    {
      "n": 112,
      "title": "迷迭香",
      "singer": "周杰伦",
      "hash": "47FA875C7F28260CD1BFF9CEC7B9FC0B",
      "Duration": "4:11"
    },
    {
      "n": 113,
      "title": "将军",
      "singer": "周杰伦",
      "hash": "B4C8E634067F12CD397309DD8FC211FB",
      "Duration": "3:24"
    },
    {
      "n": 114,
      "title": "上海一九四三",
      "singer": "周杰伦",
      "hash": "2CD58CA92563EE4CC6349BE0061B4E31",
      "Duration": "3:15"
    },
    {
      "n": 115,
      "title": "傻笑",
      "singer": "周杰伦、袁咏琳",
      "hash": "B6ADDA5F92D4ECD831872CA3AAECDA0E",
      "Duration": "4:50"
    },
    {
      "n": 116,
      "title": "Mojito",
      "singer": "周杰伦",
      "hash": "65634C769BC962C5AC395F72A1EAA459",
      "Duration": "3:05"
    },
    {
      "n": 117,
      "title": "蜗牛 (Live)",
      "singer": "周杰伦",
      "hash": "FC49102453D5DDFC22136957333B3C5C",
      "Duration": "3:58"
    },
    {
      "n": 118,
      "title": "时光机",
      "singer": "周杰伦",
      "hash": "E7BDD7ACF1220616651220E2726F7539",
      "Duration": "5:12"
    },
    {
      "n": 119,
      "title": "麦芽糖",
      "singer": "周杰伦",
      "hash": "B8D4506C30E794FDEAC0C3F434F05595",
      "Duration": "4:20"
    },
    {
      "n": 120,
      "title": "默 (2015中国好声音第四季第一期现场)",
      "singer": "周杰伦",
      "hash": "3B3344CC281301E2B2DA2D3AF5F873AB",
      "Duration": "2:04"
    },
    {
      "n": 121,
      "title": "天涯过客",
      "singer": "周杰伦",
      "hash": "495348BC8417F85E0958009B0BF74CD6",
      "Duration": "4:13"
    },
    {
      "n": 122,
      "title": "听爸爸的话",
      "singer": "周杰伦",
      "hash": "81F8DE2BACBAD200237222BB348A5AC4",
      "Duration": "4:23"
    },
    {
      "n": 123,
      "title": "画沙",
      "singer": "周杰伦、袁咏琳",
      "hash": "6ED1222656891B660FCD6CE2AD161CDE",
      "Duration": "4:29"
    },
    {
      "n": 124,
      "title": "忍者",
      "singer": "周杰伦",
      "hash": "7FFD71A628DC573C55D48C8A363C41DB",
      "Duration": "2:38"
    },
    {
      "n": 125,
      "title": "一路向北 (Live)",
      "singer": "周杰伦",
      "hash": "76E3FD694324FBAD2479353829B43706",
      "Duration": "4:58"
    },
    {
      "n": 126,
      "title": "瓦解 (Live)",
      "singer": "周杰伦",
      "hash": "269CBEA9FC4EAB70C0894F392AB29847",
      "Duration": "3:37"
    },
    {
      "n": 127,
      "title": "三年二班",
      "singer": "周杰伦",
      "hash": "B8F7AD16F90B4F0986616442D90A9D07",
      "Duration": "4:40"
    },
    {
      "n": 128,
      "title": "珊瑚海+One Last Time (网友改编)",
      "singer": "周杰伦、Ariana Grande、Lara梁心颐",
      "hash": "5D8BC66E706E01369B1295758EBA0418",
      "Duration": "4:17"
    },
    {
      "n": 129,
      "title": "印第安老斑鸠",
      "singer": "周杰伦",
      "hash": "82F707D64213AFDFD664091624C6A3DE",
      "Duration": "5:04"
    },
    {
      "n": 130,
      "title": "千山万水",
      "singer": "周杰伦",
      "hash": "8AC4F90B1E3DF716D216D74223016E17",
      "Duration": "4:07"
    },
    {
      "n": 131,
      "title": "黄金甲",
      "singer": "周杰伦",
      "hash": "0FD936A3D9A1C84710D95F8B4C93C7FA",
      "Duration": "3:34"
    },
    {
      "n": 132,
      "title": "轨迹 (Live)",
      "singer": "周杰伦",
      "hash": "849077106A489820A72DEED004C70FBC",
      "Duration": "6:34"
    },
    {
      "n": 133,
      "title": "我的地盘",
      "singer": "周杰伦",
      "hash": "B3F38BB094EC04EB9D2683F4D003FBF4",
      "Duration": "4:04"
    },
    {
      "n": 134,
      "title": "乱舞春秋",
      "singer": "周杰伦",
      "hash": "0B6D82E1D99BE18D32D8A5EFAAB65D2E",
      "Duration": "4:39"
    },
    {
      "n": 135,
      "title": "明明就 (Live)",
      "singer": "周杰伦",
      "hash": "D3B5F60CFC815C6ADBFE6EC01FA58552",
      "Duration": "4:15"
    },
    {
      "n": 136,
      "title": "怎么了",
      "singer": "周杰伦、袁咏琳",
      "hash": "0B023EC70B2A41DE04C8F7E967D677E9",
      "Duration": "3:52"
    },
    {
      "n": 137,
      "title": "说走就走",
      "singer": "周杰伦",
      "hash": "9CBB8AD96F98C07C67DF0E5E8CEAC48C",
      "Duration": "4:26"
    },
    {
      "n": 138,
      "title": "Six Degrees",
      "singer": "派伟俊、周杰伦",
      "hash": "8E60F0A6A23F29CAEE77BD9ECDEFE0BD",
      "Duration": "3:14"
    },
    {
      "n": 139,
      "title": "骑士精神",
      "singer": "蔡依林、周杰伦",
      "hash": "EF02044B46C27902D943F7496FBFC6F0",
      "Duration": "4:17"
    },
    {
      "n": 140,
      "title": "手语",
      "singer": "周杰伦",
      "hash": "E8A347B86B549A0B5B3B006CBCDE477E",
      "Duration": "4:48"
    },
    {
      "n": 141,
      "title": "自导自演",
      "singer": "周杰伦",
      "hash": "212B5DECB2F2B73E6E12DA901A6CC77B",
      "Duration": "4:15"
    },
    {
      "n": 142,
      "title": "龙战骑士",
      "singer": "周杰伦",
      "hash": "105A2705BEEE36A8BED029A8E1A6311D",
      "Duration": "4:31"
    },
    {
      "n": 143,
      "title": "火车叨位去",
      "singer": "周杰伦",
      "hash": "84E0154978700326B9EC1ED9C22ED5BB",
      "Duration": "4:36"
    },
    {
      "n": 144,
      "title": "路小雨",
      "singer": "周杰伦",
      "hash": "09F30C927B8F93CA52D16CE756F05494",
      "Duration": "1:39"
    },
    {
      "n": 145,
      "title": "红模仿",
      "singer": "周杰伦",
      "hash": "A0BDCE469459AAA8AD3A4C88B679BFF5",
      "Duration": "3:05"
    },
    {
      "n": 146,
      "title": "你好吗",
      "singer": "周杰伦",
      "hash": "6649F46E6E19ED444EDAC2E1ADF22CBB",
      "Duration": "3:44"
    },
    {
      "n": 147,
      "title": "暗号 (Live)",
      "singer": "周杰伦",
      "hash": "F7F5ACD5B8D797C13250B377B104E692",
      "Duration": "4:47"
    },
    {
      "n": 148,
      "title": "爱我别走 (Live)",
      "singer": "周杰伦",
      "hash": "05EF081CDD6977EE1A00B9E659DA13F1",
      "Duration": "3:54"
    },
    {
      "n": 149,
      "title": "梯田",
      "singer": "周杰伦",
      "hash": "5FFA6CF20B977CBA7CC465B7B8C8B152",
      "Duration": "3:33"
    },
    {
      "n": 150,
      "title": "逆鳞",
      "singer": "周杰伦",
      "hash": "905CB011289FC676F91D5A2823F57F65",
      "Duration": "3:54"
    },
    {
      "n": 151,
      "title": "稻香 (3D环绕版)",
      "singer": "周杰伦",
      "hash": "74A79113F51D559728430C96EF5C7F9A",
      "Duration": "3:39"
    },
    {
      "n": 152,
      "title": "乔克叔叔",
      "singer": "周杰伦",
      "hash": "BFD2ADBE420EAD55BC9CEDF4A1EDC10E",
      "Duration": "4:16"
    },
    {
      "n": 153,
      "title": "你怎么连话都说不清楚 (Live)",
      "singer": "周杰伦",
      "hash": "56EE5E8D42C674F3E9682CA0B2BBC59C",
      "Duration": "4:06"
    },
    {
      "n": 154,
      "title": "红尘客栈 (DJ 凯西版)",
      "singer": "周杰伦",
      "hash": "86A734BA617236AEBD6AFDB2E76C9DAA",
      "Duration": "2:42"
    },
    {
      "n": 155,
      "title": "青花瓷 (Live)",
      "singer": "周杰伦",
      "hash": "424F3AF7A3E1EC97D7F1ACE6F97ACD3B",
      "Duration": "3:58"
    },
    {
      "n": 156,
      "title": "床边故事",
      "singer": "周杰伦",
      "hash": "E12192D7B0A3E370BB2B5A4BCBB8F4C2",
      "Duration": "3:45"
    },
    {
      "n": 157,
      "title": "不爱我就拉倒",
      "singer": "周杰伦",
      "hash": "F24AA54882CB06B6EED8D029E8D6B971",
      "Duration": "4:06"
    },
    {
      "n": 158,
      "title": "爸，我回来了",
      "singer": "周杰伦",
      "hash": "359A75A06C1AD4BF01535FB432F06025",
      "Duration": "3:55"
    },
    {
      "n": 159,
      "title": "不能说的秘密 (Live)",
      "singer": "周杰伦",
      "hash": "5788F6BB081A69108ABAAB27E91ACA7B",
      "Duration": "4:57"
    },
    {
      "n": 160,
      "title": "娘子",
      "singer": "周杰伦",
      "hash": "0B28A8DF42B44E234321DCFAF9E0D700",
      "Duration": "4:31"
    },
    {
      "n": 161,
      "title": "鞋子特大号",
      "singer": "周杰伦",
      "hash": "D48531885E65A38C8960E839A97E3C3C",
      "Duration": "3:41"
    },
    {
      "n": 162,
      "title": "完美主义",
      "singer": "周杰伦",
      "hash": "28DEDF26183951FCCB0D834621EB43CA",
      "Duration": "4:04"
    },
    {
      "n": 163,
      "title": "双刀",
      "singer": "周杰伦",
      "hash": "393716A06AB0A9FFB89520AC17962652",
      "Duration": "4:51"
    },
    {
      "n": 164,
      "title": "刀马旦",
      "singer": "CoCo李玟、周杰伦",
      "hash": "FA861E2D6243DC0A379E060075785544",
      "Duration": "3:12"
    },
    {
      "n": 165,
      "title": "超跑女神",
      "singer": "周杰伦",
      "hash": "48047E817AA50591AB74E9D584E61007",
      "Duration": "2:36"
    },
    {
      "n": 166,
      "title": "跨时代",
      "singer": "周杰伦",
      "hash": "89139393743D1325C3D0B8DC04EB1434",
      "Duration": "3:14"
    },
    {
      "n": 167,
      "title": "给我一首歌的时间 (2010超时代世界巡回演唱会台北站)",
      "singer": "蔡依林、周杰伦",
      "hash": "B265922AD48C2174D94788D9C9DBC3B5",
      "Duration": "5:00"
    },
    {
      "n": 168,
      "title": "夜曲 (Live)",
      "singer": "周杰伦",
      "hash": "A097C5845FA9D429A74ED85D06B2FA68",
      "Duration": "3:43"
    },
    {
      "n": 169,
      "title": "公主病",
      "singer": "周杰伦",
      "hash": "CBBF21DE8C251DD8AE1EE8464B17D586",
      "Duration": "3:38"
    },
    {
      "n": 170,
      "title": "伊斯坦堡",
      "singer": "周杰伦",
      "hash": "8AEE65201DCF6BDB2BE07BC7290CBF38",
      "Duration": "3:29"
    },
    {
      "n": 171,
      "title": "乌克丽丽",
      "singer": "周杰伦",
      "hash": "AD557D167625018F2E1904C6484FEDDA",
      "Duration": "2:55"
    },
    {
      "n": 172,
      "title": "半岛铁盒 (Live)",
      "singer": "周杰伦",
      "hash": "3CC555DABCFFAD4A6C6036B10DA2F506",
      "Duration": "6:04"
    },
    {
      "n": 173,
      "title": "七里香 (Live)",
      "singer": "周杰伦",
      "hash": "A961FE36799604D96D3D47624414F88C",
      "Duration": "5:02"
    },
    {
      "n": 174,
      "title": "给我一首歌的时间 (DJ版)",
      "singer": "周杰伦",
      "hash": "77C30084AA6B6A4C87E0311830BAE274",
      "Duration": "5:22"
    },
    {
      "n": 175,
      "title": "你听得到 (Live)",
      "singer": "周杰伦",
      "hash": "92340879549379E336D5F7BFAAE2D272",
      "Duration": "3:49"
    },
    {
      "n": 176,
      "title": "不该 (Live)",
      "singer": "周杰伦、张惠妹",
      "hash": "5BF2B7F872AF0A9F7FFE23302420D46D",
      "Duration": "5:01"
    },
    {
      "n": 177,
      "title": "我要夏天",
      "singer": "周杰伦、杨瑞代",
      "hash": "FB9B1F2445A226FC23DBC94CFCC57F9E",
      "Duration": "3:39"
    },
    {
      "n": 178,
      "title": "兰亭序",
      "singer": "周杰伦",
      "hash": "A9C336071FBE04F483AACCDD925B44EB",
      "Duration": "2:52"
    },
    {
      "n": 179,
      "title": "晴天 (Live)",
      "singer": "周杰伦",
      "hash": "EB2CD30DD7258994F008E6DBDCE79024",
      "Duration": "4:59"
    },
    {
      "n": 180,
      "title": "困兽之斗",
      "singer": "周杰伦",
      "hash": "260109A46C0E6E3437786E28B1A2F2DA",
      "Duration": "4:29"
    },
    {
      "n": 181,
      "title": "前世情人",
      "singer": "周杰伦",
      "hash": "E47668136DEB6F8CE965359029ED53A1",
      "Duration": "3:22"
    },
    {
      "n": 182,
      "title": "疗伤烧肉粽",
      "singer": "周杰伦",
      "hash": "88EB806FA303F4D7D6FBD26B7566D1F1",
      "Duration": "3:07"
    },
    {
      "n": 183,
      "title": "退后 (Live)",
      "singer": "周杰伦",
      "hash": "CAA063A6DFAAE8D7F823F7CBF6805BB3",
      "Duration": "4:24"
    },
    {
      "n": 184,
      "title": "世界未末日",
      "singer": "周杰伦",
      "hash": "7493FAB14279AD50E14AF8B5EDDFDF52",
      "Duration": "4:23"
    },
    {
      "n": 185,
      "title": "借口 (Live)",
      "singer": "周杰伦",
      "hash": "BD9A508663E9061FAB7FE387B13340D0",
      "Duration": "4:21"
    },
    {
      "n": 186,
      "title": "无双",
      "singer": "周杰伦",
      "hash": "E55C6678DDD243046A2BEA3946FAB354",
      "Duration": "3:53"
    },
    {
      "n": 187,
      "title": "断了的弦 (Live)",
      "singer": "周杰伦",
      "hash": "72813199DDD57F11C90FB329F0BF18EF",
      "Duration": "4:50"
    },
    {
      "n": 188,
      "title": "同一种调调",
      "singer": "周杰伦",
      "hash": "D9DBE9DBF59AF2CE357A0C2A8EA59647",
      "Duration": "3:51"
    },
    {
      "n": 189,
      "title": "琴伤",
      "singer": "周杰伦",
      "hash": "0360C2709A3219DB22B3CD683C8A8B91",
      "Duration": "3:19"
    },
    {
      "n": 190,
      "title": "你是我的OK绷",
      "singer": "周杰伦、浪花兄弟",
      "hash": "597EBBF810698AD9D2FC3B7007EBF2E3",
      "Duration": "4:38"
    },
    {
      "n": 191,
      "title": "爱你没差 (DJ 阿若版)",
      "singer": "周杰伦",
      "hash": "98D98C6290147CFEC45555C97E20710F",
      "Duration": "3:31"
    },
    {
      "n": 192,
      "title": "淘汰 (Live)",
      "singer": "陈奕迅、周杰伦",
      "hash": "3C5A44EC3B0269809B71B07BCF2E1E8F",
      "Duration": "3:58"
    },
    {
      "n": 193,
      "title": "海盗",
      "singer": "蔡依林、周杰伦",
      "hash": "4871878E7FD970A6B654D471ADF00D68",
      "Duration": "4:35"
    },
    {
      "n": 194,
      "title": "听妈妈的话 (Live)",
      "singer": "周杰伦、潘玮柏、张学友",
      "hash": "18E3A94B89332AED16E28FBA7CE0D993",
      "Duration": "3:24"
    },
    {
      "n": 195,
      "title": "晴天 (Live)",
      "singer": "周杰伦",
      "hash": "76096C059B26EBAA16B482F921A07BE0",
      "Duration": "4:09"
    },
    {
      "n": 196,
      "title": "说好的幸福呢+淘汰+青花瓷 (Live)",
      "singer": "周杰伦",
      "hash": "039D8D609A2E34F922BEB147D0CBCEB7",
      "Duration": "3:44"
    },
    {
      "n": 197,
      "title": "斗牛",
      "singer": "周杰伦",
      "hash": "9D6D4CAAE1405B45BE0A18AB955EB791",
      "Duration": "4:38"
    },
    {
      "n": 198,
      "title": "蓝色风暴",
      "singer": "周杰伦",
      "hash": "4777FE8D56BEAD9EDE9FDDA55F60BB23",
      "Duration": "4:47"
    },
    {
      "n": 199,
      "title": "白色风车 (Live)",
      "singer": "周杰伦",
      "hash": "FB32C78419BB376766301D092DDEC8DC",
      "Duration": "4:38"
    },
    {
      "n": 200,
      "title": "一路向北",
      "singer": "昕一",
      "hash": "BE214A54C6731875B52D22F3A58A5DCC",
      "Duration": "4:55"
    }
]