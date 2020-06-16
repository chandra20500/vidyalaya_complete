import React from 'react';
import Topbar from './Topbar';
import Sidebar from './sidebar';
import Hidden from '@material-ui/core/Hidden';

export default function ButtonAppBar() {
  return (
    <div>
      {/*<Topbar />*/}
      <Hidden mdDown>
      		<Sidebar />
      </Hidden>
    </div>
  );
}
