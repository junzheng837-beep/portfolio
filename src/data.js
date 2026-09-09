// 生成 AI 配图
export function aiImage(prompt, size = 'landscape_4_3') {
  return `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`
}

// ===== 个人信息（来源：简历）=====
export const profile = {
  name: '郑君',
  title: '嵌入式软件开发',
  hello: '你好，我是',
  jobIntent: '求职意向：嵌入式软件开发工程师',
  intro:
    '百色学院物联网工程本科在读（专业排名前 3%），具备嵌入式全栈开发能力——从电路原理图设计、PCB 绘制与焊接，到底层驱动编写、串级 PID 控制算法实现，可独立完成完整项目闭环。熟悉 STM32 / MSPM0G3507 / ESP32 / K230 多平台开发，掌握 I2C、SPI、UART、CAN 等通信协议、FreeRTOS 实时系统与 RFID 应用；擅长多传感器融合、互补滤波姿态解算，并能将 YOLOv12 模型训练后部署至端侧芯片。5 个项目全部围绕机器人运动控制展开（循迹、平衡、打靶），获电赛省二等奖、蓝桥杯单片机二等奖等多项奖项，积累了丰富的硬件调试与示波器排障经验。',
  email: 'junzheng837@gmail.com',
  phone: '18777981605',
  github: 'https://github.com/junzheng837-beep',
  school: '百色学院 · 物联网工程',
  grade: '本科在读 · 2024.09 - 2028.06',
  rank: '专业排名前 3%',
  courses:
    '嵌入式系统、数字电路、模拟电路、C 语言程序设计、通信原理、JAVA 程序设计',
}

// ===== 技能（来源：简历·专业技能）=====
export const skills = [
  {
    icon: '🔧',
    name: '单片机平台',
    desc: '多平台项目实战经验，覆盖主控开发到端侧 AI 部署',
    tags: ['STM32 F103/F407', 'MSPM0G3507', 'ESP32', 'K230 端侧 AI 芯片'],
  },
  {
    icon: '🐍',
    name: '编程语言',
    desc: '底层驱动与上层算法开发的主力语言',
    tags: ['C/C++（熟练）', 'Python（熟练）'],
  },
  {
    icon: '🔌',
    name: '通信协议',
    desc: '多种协议均有实际项目使用经验',
    tags: ['I2C', 'SPI', 'UART', 'CAN', 'WiFi（ESP8266）', '2.4G（NRF24L01）', '4G 通信'],
  },
  {
    icon: '🎮',
    name: '控制算法',
    desc: '面向机器人运动控制的多环控制与姿态解算',
    tags: ['速度环/位置环/串级 PID', '互补滤波', '卡尔曼滤波'],
  },
  {
    icon: '🧠',
    name: 'AI 部署',
    desc: '从模型训练到端侧落地的完整链路',
    tags: ['YOLOv12 训练', 'K230 端侧部署', '运动模糊增强', '多帧置信度滤波'],
  },
  {
    icon: '⚡',
    name: '实时系统与识别',
    desc: 'RTOS 任务调度与无线识别应用开发',
    tags: ['FreeRTOS', 'RFID'],
  },
  {
    icon: '🔩',
    name: '硬件技能',
    desc: '从原理图到成品的硬件全流程能力',
    tags: ['原理图设计', 'PCB 绘制打板', '手工焊接调试', '示波器/逻辑分析仪'],
  },
  {
    icon: '🛠️',
    name: '开发工具',
    desc: '日常开发与版本管理工具链',
    tags: ['Keil MDK', 'CCS', 'VS Code', 'Git', '嘉立创 EDA Pro'],
  },
]

// ===== 项目展示（来源：简历·项目经历）=====
export const projects = [
  {
    name: '电赛 H 题——小球平衡与循迹系统',
    desc: '设计移动平台实现小车循迹运动的同时，通过视觉系统采集数据并控制小球在平台上保持平衡。负责视觉数据采集与标注、底层循迹 PID 驱动与平衡控制参数整定，获省级二等奖。',
    tags: ['视觉采集', '循迹 PID', '平衡控制', '省二等奖'],
    role: '核心成员 · 2026.07 - 2026.08',
    image: 'media/h2026-cover.jpg',
    detail: {
      title: '车载平衡滚球运动控制系统核心技术展示',
      video: 'media/h2026-demo.mp4',
    },
  },
  {
    name: '电赛 E 题——移动循迹激光打靶系统',
    desc: '独立交付的完整电赛系统：嘉立创 EDA Pro 绘制原理图与 PCB 并手工焊接，MSPM0G3507 + 霍尔编码电机串级 PID 循迹（偏差 ≤±3mm），二自由度云台 + 陀螺仪姿态补偿 + K230 实时识别靶标，移动中完成激光打靶。',
    tags: ['MSPM0G3507', '串级 PID', 'K230 视觉', '硬件全栈'],
    role: '独立完成 · 2025.11 - 2025.12',
    image: aiImage(
      'Electronics competition demo: a two-wheel-drive tracking car with a laser turret gimbal and camera module firing a red laser beam precisely at a target board, laboratory setting, clean bright background, product photography',
    ),
  },
  {
    name: '边缘 AI 视觉追踪与扑克牌识别系统',
    desc: '集成 AI 视觉的循迹小车：YOLOv12 训练扑克牌识别模型并部署于 K230 端侧，运动模糊数据增强 + 多帧置信度滤波；速度闭环 PID 实现圆形轨迹平滑运动，识别结果经 UART 回传主控实时叠加显示。',
    tags: ['YOLOv12', 'K230 部署', '速度闭环', 'UART 通信'],
    role: '独立开发 · 2026.05 - 至今',
    image: aiImage(
      'Computer vision demo: a smart camera-equipped robot car driving on a circular track while recognizing playing cards, bounding box detection overlays on cards, bright clean laboratory environment, technology product photography',
    ),
  },
  {
    name: 'STM32 自平衡循迹小车与无线调参系统',
    desc: 'STM32F103 + MPU6050 互补滤波姿态解算，直立环 + 速度环 + 转向环三环串级 PID，八路灰度平衡循线；NRF24L01 搭建 2.4G 数据链路实现全参数远程在线调整，原理图到联调全流程独立完成。',
    tags: ['STM32', '串级 PID', '互补滤波', 'NRF24L01'],
    role: '独立开发 · 2025.09 - 2025.10',
    image: aiImage(
      'Two-wheel self-balancing robot car prototype standing upright on a desk, exposed PCB with microcontroller, IMU sensor and motor drivers, oscilloscope in background, clean bright electronics lab, product photography',
    ),
  },
  {
    name: '分布式智能种植环境监控系统',
    desc: '双 STM32 协同架构：现场终端 + 远程终端经 ESP8266 WiFi 通信；融合土壤湿度、SHT30 温湿度、BH1750 光照、MQ-135 空气质量多传感器，舵机遮阳帘 / 排风扇 / 水泵依据阈值自动闭环调控。',
    tags: ['双机协同', '多传感器融合', 'ESP8266', '闭环调控'],
    role: '独立开发 · 2026.03 - 2026.05',
    image: aiImage(
      'Indoor smart agriculture monitoring system: potted plants with small electronic sensors, microcontroller boards, small fan and water pump module on a shelf, clean modern minimal setup, bright soft lighting',
    ),
  },
]

// ===== 荣誉奖项（来源：简历·获奖）=====
export const awards = [
  {
    icon: '🏆',
    title: '全国大学生电子设计竞赛 H 题 · 省级二等奖',
    desc: '小球平衡与循迹系统 · 2026',
  },
  {
    icon: '🥈',
    title: '蓝桥杯单片机设计与开发 · 二等奖',
    desc: '2025',
  },
  {
    icon: '🥉',
    title: '中国大学生计算机设计大赛 · 三等奖',
    desc: '嵌入式方向',
  },
  {
    icon: '🏅',
    title: '传智杯嵌入式赛道 · 二等奖',
    desc: '嵌入式应用开发',
  },
]
