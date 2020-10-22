import * as React from 'react'
import { createStyles, makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100px'
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120
      }
    }
  })
)

createMuiTheme({
  overrides: {
    MuiInput: {
      root: {
        borderRadius: 0,
        backgroundColor: '#red',
        border: '1px solid pink',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(100% - 24px)'
      }
    }
  }
})

const style = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '357px'
} as React.CSSProperties

const joinUsStyle = {
  width: '465px',
  height: '75.04px',
  color: 'white',
  background: 'rgba(147, 147, 147, 0.5)',
  backdropFilter: 'blur(3.20553px)',
  borderRadius: '16.0276px',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  marginTop: '157px'
} as React.CSSProperties

const joinHeader = {
  textAlign: 'center',
  verticalAlign: 'middle'
} as React.CSSProperties

const inputStyle = {
  border: 'none',
  marginBottom: '30px',
  background: '#F8F8F8',
  width: '300px',
  height: '37px',
  boxShadow: 'inset 0px 2.16909px 2.16909px rgba(0, 0, 0, 0.25)'
} as React.CSSProperties

const submitStyle = {
  width: '190px',
  height: '37px',
  border: 'none',
  background: '#C2E0F5',
  boxShadow: '0px 2.16909px 2.16909px rgba(0, 0, 0, 0.25)',
  borderRadius: '5.42273px'
} as React.CSSProperties

const textAreaStyle = {
  border: 'none',
  marginBottom: '30px',
  background: '#F8F8F8',
  width: '300px',
  height: '200px',
  boxShadow: 'inset 0px 2.16909px 2.16909px rgba(0, 0, 0, 0.25)'
} as React.CSSProperties

const whyJoin = {
  position: 'relative',
  width: '60%',
  marginLeft: '47%',
  marginRight: 'auto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  color: '#706E6E',
  fontSize: '22px',
  lineHeight: '30px',
  letterSpacing: '0.04em'
} as React.CSSProperties

const interested = {
  position: 'relative',
  width: '60%',
  marginLeft: '42%',
  marginRight: 'auto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  color: '#706E6E',
  fontSize: '22px',
  lineHeight: '30px',
  letterSpacing: '0.04em'
} as React.CSSProperties

const getInTouch = {
  position: 'relative',
  width: '412.67px',
  height: '36.33px',
  marginLeft: '40%',
  fontStyle: 'normal',
  fontSize: '27.1136px',
  lineHeight: '37px',
  alignItems: 'center',
  textAlign: 'center',
  letterSpacing: '0.04em',
  marginTop: '2px',
  color: '#706E6E'
} as React.CSSProperties

const grid = {
  position: 'relative',
  width: '60%',
  marginLeft: '28%',
  marginRight: 'auto',
  marginBottom: '200px',
  marginTop: '40px'
} as React.CSSProperties

const formGrid = {
  marginTop: '40px',
  position: 'relative',
  width: '43%',
  marginLeft: '33%',
  marginRight: 'auto',
  marginBottom: '200px'
} as React.CSSProperties

const border = {
  borderBottom: '2.05296px solid #C4C4C4',
  marginBottom: '40px'
} as React.CSSProperties

const box = {
  display: 'inline-flex',
  marginBottom: '50px'
} as React.CSSProperties

const textBox = {
  display: 'grid',
  width: '270px'
}

const boxTitle = {
  fontStyle: 'normal',
  fontSize: '12.7379px',
  lineHeight: '17px',
  letterSpacing: '0.04em'
} as React.CSSProperties

const boxContent = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '12.7379px',
  lineHeight: '17px',
  letterSpacing: '0.04em'
} as React.CSSProperties

const img = {
  marginRight: '16px'
} as React.CSSProperties

const header = {
  height: '280px'
} as React.CSSProperties

const content = {
  marginTop: '30px'
} as React.CSSProperties

function IndexPage() {
  const classes = useStyles()

  const [, setAge] = React.useState('')

  return (
    <div>
      <div>
        <div style={header}>
          <img src="../joinus.jpg" className="joinus" style={style} alt="" />
          <div style={joinUsStyle}>
            <h1 style={joinHeader}>Join Us As A Partner</h1>
          </div>
        </div>
        <div style={content}>
          <div style={whyJoin}>Why Join Us?</div>
          <Grid style={grid} container>
            <Grid item xs={6}>
              <div className="single-row">
                <div style={box}>
                  <img style={img} src="../increase.svg" alt="" />
                  <div style={textBox}>
                    <span style={boxTitle}>Increase Your Reach</span>
                    <span style={boxContent}>
                      Listing your company on our platform allows you to reach new customers and increase your visibility.
                    </span>
                  </div>
                </div>
              </div>
              <div className="single-row">
                <div style={box}>
                  <img style={img} src="../fit.svg" alt="" />
                  <div style={textBox}>
                    <span style={boxTitle}>Customers Who Fit</span>
                    <span style={boxContent}>
                      We recommend services to customers based on their specific needs which encourages booking and loyalty.
                    </span>
                  </div>
                </div>
              </div>
              <div className="single-row">
                <div style={box}>
                  <img style={img} src="../revenue.svg" alt="" />
                  <div style={textBox}>
                    <span style={boxTitle}>No Revenue, No Expense</span>
                    <span style={boxContent}>
                      It is completely free to be present on our platform. You don’t pay anything if your services are not booked. On top of
                      that, the first 5 bookings will be free of charge.
                    </span>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="single-row">
                <div style={box}>
                  <img style={img} src="../plant.svg" alt="" />
                  <div style={textBox}>
                    <span style={boxTitle}>People, Planet &amp; Profit</span>
                    <span style={boxContent}>
                      Your company contributes towards making the world a better place with every booking of your service.
                    </span>
                  </div>
                </div>
              </div>
              <div className="single-row">
                <div style={box}>
                  <img style={img} src="../marketing.svg" alt="" />
                  <div style={textBox}>
                    <span style={boxTitle}>Free Marketing &amp; CSR</span>
                    <span style={boxContent}>
                      We promote your services on our platform and newsletters. What’s more, we make your communal support transparent on
                      your profile!
                    </span>
                  </div>
                </div>
              </div>
              <div className="single-row">
                <div style={box}>
                  <img style={img} src="../bookability.svg" alt="" />
                  <div style={textBox}>
                    <span style={boxTitle}>Bookability</span>
                    <span style={boxContent}>
                      We enable your business to go online. By being a partner, your services can be easily booked via our platform. If you
                      already have a digital presence, we provide a seamless calendar integration management system.
                    </span>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div style={border} />
        <div>
          <div style={interested}>Interested In A Parnership?</div>
          <div style={getInTouch}>Get In Touch</div>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid style={formGrid} container>
              <Grid item xs={6}>
                <input style={inputStyle} placeholder="Name of Provider" type="text" />
                <input placeholder="Name of Contact Person" style={inputStyle} />
                <input placeholder="Contact Email" style={inputStyle} />
                <select name="Service Categories " style={inputStyle}>
                  <option value="volvo">Exercise</option>
                  <option value="saab">Languages</option>
                  <option value="mercedes">Travelling</option>
                  <option value="audi">Mindfulness</option>
                </select>
                <input placeholder="Contact Email" type="submit" style={submitStyle} />
              </Grid>
              <Grid item xs={6}>
                <input placeholder="Address (optional)" style={inputStyle} />
                <input placeholder="Contact Number" style={inputStyle} />
                <input placeholder="Website (if applicable)" style={inputStyle} />
                <textarea style={textAreaStyle} placeholder="Brief Description of Company and Services Provided" />
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
