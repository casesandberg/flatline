'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

class Page extends React.Component {
  classes() {
    return {
      'default': {
        page: {
          padding: '20px',
        },
      },
    }
  }

  render() {
    return (
      <div is="page">
        Project
      </div>
    )
  }
}

export default ReactCSS(Page)
