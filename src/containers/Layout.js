import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {blue900} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    // primary1Color: cyan500,
    // primary2Color: cyan700,
    // primary3Color: grey400,
    accent1Color: blue900,
    // accent2Color: grey100,
    // accent3Color: grey500,
    // textColor: darkBlack,
    // alternateTextColor: white,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    // pickerHeaderColor: cyan500,
    // clockCircleColor: fade(darkBlack, 0.07),
    // shadowColor: fullBlack
  },
}, {
  /* Component Styles (avatar, appBar)
   * - one key for each component so they can be customized individually
   */
  avatar: {
    borderColor: null,
  },
  /* If rendering from the server:
   * - need to use the same user agent for the auto prexifer, so uncomment userAgent line below
   * - also will need to use the same `process.env.NODE_ENV` value for the client & server
   */
  // userAgent: req.headers['user-agent'],
});

function Layout (props) {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      {props.children}
    </MuiThemeProvider>
  )
}

module.exports = Layout;