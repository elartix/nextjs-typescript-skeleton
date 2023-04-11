import cn from 'classnames';
import { PropsWithChildren } from 'react';

import { BaseNavbar } from './BaseNavbar';
import { BaseFooter } from './BaseFooter';

type BaseLayoutProps = {
   className?: string
}

export const BaseLayout = function BaseLayout ({ className, children }: PropsWithChildren<BaseLayoutProps>) {
  return (
    <div className={cn('base-layout', className)}>
      <BaseNavbar />
      { children }
      <BaseFooter />
    </div>
  );
};

BaseLayout.defaultProps = {
  className: null,
};
