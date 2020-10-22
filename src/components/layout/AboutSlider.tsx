import * as React from 'react'

const sliderContainer = {
  background: '#F9F9F9',
  height: '329px',
  display: 'inline-flex',
  width: '100%'
} as React.CSSProperties

const textBox = {
  color: '#BCBABA',
  height: '100x',
  width: '237px',
  marginTop: '107px',
  marginLeft: '297px',
  fontSize: '33.2px'
} as React.CSSProperties

const boldText = {
  fontWeight: 'bold'
} as React.CSSProperties

const img = {
  height: '249px',
  width: '338px',
  marginRight: '22px',
  marginTop: '41px'
} as React.CSSProperties

const AboutSlider: React.SFC = () => (
  <div style={sliderContainer}>
    <div style={textBox}>
      <div>What our partners</div>
      <div style={boldText}>say about us.</div>
    </div>
    <img src="../Rect.png" style={img} alt="" />
    <img src="../Rect.png" style={img} alt="" />
    <img src="../Rect.png" style={img} alt="" />
  </div>
)

export default AboutSlider
