import { profile } from '../data'
import Reveal from './Reveal'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <span className="section-tag">About</span>
          <h2 className="section-title">关于我</h2>
          <p className="section-desc">
            做软硬件结合的事——从原理图到控制算法，把系统亲手做出来。
          </p>
        </Reveal>
        <div className="about-grid">
          <Reveal delay={100}>
            <div className="about-text">
              <p>
                我是郑君，百色学院物联网工程专业本科在读（专业排名前
                3%）。具备嵌入式全栈开发能力——从嘉立创 EDA
                绘制原理图与 PCB、手工焊接调试，到底层驱动编写与控制算法实现，
                可独立完成完整项目闭环。
              </p>
              <p>
                熟悉 STM32 / MSPM0G3507 / ESP32 / K230
                多平台开发，掌握 I2C、SPI、UART、CAN 通信协议以及 WiFi、2.4G
                无线数据链路与 4G 通信，熟悉 FreeRTOS 实时系统与 RFID
                应用；控制方面擅长串级 PID、互补滤波与卡尔曼滤波姿态解算、多传感器融合；并能将
                YOLOv12 模型训练后部署到 K230
                端侧芯片，实现边缘 AI 识别。
              </p>
              <p>
                5 个项目全部围绕机器人运动控制展开——循迹、平衡、打靶，其中电赛
                E 题系统两周内独立交付。先后获得电赛 H
                题省二等奖、蓝桥杯单片机设计二等奖、计算机设计大赛三等奖、传智杯嵌入式二等奖。习惯用示波器和数据说话，
                反复整定直到系统稳定为止。
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="about-info">
              <div className="about-info-item">
                <span className="about-info-label">姓名</span>
                <span className="about-info-value">{profile.name}</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">求职意向</span>
                <span className="about-info-value">
                  {profile.jobIntent.replace('求职意向：', '')}
                </span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">学校专业</span>
                <span className="about-info-value">{profile.school}</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">年级</span>
                <span className="about-info-value">{profile.grade}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
