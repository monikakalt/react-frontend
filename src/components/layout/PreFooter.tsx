import * as React from 'react'

interface PreFooterProps {
  title: string
}

const titleFooter = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '36px',
  lineHeight: '49px',
  color: '#000000',
  paddingLeft: '70px',
  marginTop: '30px',
  float: 'left',
  width: '70%'
} as React.CSSProperties

const iconsFooter = {
  float: 'right',
  width: '28%'
} as React.CSSProperties

const registerBtn = {
  border: 'none',
  color: 'white',
  background: '#BDBDBD',
  borderRadius: '6px',
  height: '40px',
  width: '130px',
  marginBottom: '15px'
} as React.CSSProperties

const loginBtn = {
  border: '1px solid #BDBDBD',
  boxSizing: 'border-box',
  borderRadius: '6px',
  background: 'white',
  color: '#BDBDBD',
  height: '40px',
  width: '130px'
} as React.CSSProperties

const footer = {
  height: '200px',
  display: 'inline',
  paddingTop: '30px'
} as React.CSSProperties

const buttonContainer = {
  float: 'right',
  width: '135px',
  marginBottom: '78px',
  marginRight: '53px'
} as React.CSSProperties

const PreFooter: React.SFC<PreFooterProps> = ({ title }) => (
  <div style={footer}>
    <div style={titleFooter}>
      Y<u>our</u> Purpose.
    </div>
    <div style={iconsFooter}>
      {/* <div>
        <span>Policies</span>
        <span>Payment</span>
        <span>Shipping</span>
        <span>Refund</span>
      </div>
      <div>
        <span>Partners</span>
        <span>Serviced</span>
        <span>Products</span>
      </div>
      <div>
        <span>Company</span>
        <span>About us</span>
        <span>Contact us</span>
        <span>FAQ</span>
      </div> */}

      <div style={buttonContainer}>
        <input style={registerBtn} type="button" value="Register" />
        <input style={loginBtn} type="button" value="Login" />
      </div>
    </div>
  </div>
)

export default PreFooter
