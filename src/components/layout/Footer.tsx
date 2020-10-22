import * as React from 'react'
import styled from '../../utils/styled'

interface FooterProps {
  title: string
}

const titleFooter = {
  paddingLeft: '70px',
  float: 'left',
  width: '70%'
} as React.CSSProperties

const iconsFooter = {
  float: 'right',
  width: '28%'
} as React.CSSProperties

const img = {
  marginRight: '15px'
} as React.CSSProperties

const follow = {
  marginRight: '25px'
} as React.CSSProperties

const footer = {
  borderTop: '1px solid rgba(0, 0, 0, 0.5)',
  height: '100px',
  display: 'inline',
  paddingTop: '30px'
} as React.CSSProperties

const Footer: React.SFC<FooterProps> = ({ title }) => (
  <div style={footer}>
    <div style={titleFooter}>&copy; YourPurpose.de</div>
    <div style={iconsFooter}>
      <span style={follow}>Follow us:</span>
      <img src="../Ellipse.svg" style={img} alt="" />
      <img src="../Ellipse.svg" style={img} alt="" />
      <img src="../Ellipse.svg" style={img} alt="" />
      <img src="../Ellipse.svg" style={img} alt="" />
    </div>
  </div>
)

export default Footer
