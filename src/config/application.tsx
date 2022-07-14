import React, { Fragment } from 'react';
import GlobalStyles from './theme/global';

interface ApplicationProps {
  children: React.ReactNode;
}

function Application({ children }: ApplicationProps) {
  return (
    <Fragment>
      <GlobalStyles />
      {children}
    </Fragment>
  );
}

export { Application };
