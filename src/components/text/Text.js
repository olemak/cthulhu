import React from 'react'
import './text.css'

const copy = {
    about:      '<h2>Version</h2><p>I don\'t even know if there should be any more info going on here</p>',
    colophon:   '<h2>Credentials</h2><p>Made by Ole Martin Kristiansen(Twitter: @ol3mak), using:</p><p>React - thanks, Facebook!</p><p>Cthulhu logo courtesy of Pcon<br><a href="http://pcon.github.io/design/cthulhu/">pcon.github.io/design/cthulhu/</a></p><p>Icons courtesy of Glyph iconset by Frexy<br><a href="http://glyph.smarticons.co/">glyph.smarticons.co</a></p><p><b>Skeleton CSS</b>This minimal CSS is the bare-bones and excellent CSS library Skeleton.<br><a href="http://getskeleton.com/">getskeleton.com</a><br>Also, a shout out for Normalizer!</p><p>The font is Poiret One, from Google Fonts</p>',
    subscribe:  '<h2>GM options</h2><p>I\'ve been thingking about makeing some additional features for groups, such as character sharing, network saving (so your characters are available from multiple devices) and so on.</p>'
  }

  const Text = (text) => {

    return (
      <div dangerouslySetInnerHTML={{__html: copy[text.textIndex]}} />
    )
}




Text.propTypes = {
  textIndex: React.PropTypes.string.isRequired
}


export default Text 