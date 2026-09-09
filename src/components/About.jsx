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
                3%）。具备嵌入式全栈开发能力，能独立完成从电路原理图设计、PCB
                焊接到底层驱动编写与控制算法实现的全流程。
              </p>
              <p>
                熟悉 STM32 / MSPM0G3507
                平台开发，掌握 I2C、SPI、UART 等多种串口通信协议。5
                个项目均围绕机器人运动控制展开——循迹、平衡、打靶，具备 PID
                串级控制、多传感器融合等核心能力，也有丰富的硬件调试与排障经验。
              </p>
              <p>
                主修嵌入式系统、数字电路、模拟电路、通信原理等课程。先后获得电赛
                H 题省二等奖、蓝桥杯单片机设计二等奖等奖项。习惯用示波器和数据说话，
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
              <div className="about-info-item">
                <span className="about-info-label">专业排名</span>
                <span className="about-info-value">{profile.rank}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
