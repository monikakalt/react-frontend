import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Global } from '@emotion/core'

import Root from './components/layout/Root'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import AboutSlider from './components/layout/AboutSlider'
import IndexPage from './pages/index'
import HeroesPage from './pages/heroes'
import TeamsPage from './pages/teams'
import normalize from './styles/normalize'
import globals from './styles/globals'
import PreFooter from './components/layout/PreFooter'

// If your app is big + you have routes with a lot of components, you should consider
// code-splitting your routes! If you bundle stuff up with Webpack, I recommend `react-loadable`.
//
// $ yarn add react-loadable
// $ yarn add --dev @types/react-loadable
//
// The given `pages/` directory provides an example of a directory structure that's easily
// code-splittable.

const Routes: React.SFC = () => (
  <Root>
    <Global styles={normalize} />
    <Global styles={globals} />
    <Header title="Your Purpose." />
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/" component={IndexPage} />
      <Route path="/" component={IndexPage} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
    <AboutSlider />
    <PreFooter title="YourPurpose.de" />
    <Footer title="YourPurpose.de" />
  </Root>
)

export default Routes
