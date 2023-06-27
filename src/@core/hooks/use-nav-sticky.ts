import { useState } from 'react';
import { type MutableElementRef, useScrollPosition } from './use-scroll-position';

export interface UseNavStickyOutput {
  isSticky: boolean,
}

export interface NavStickyOptions {
  stickyScrollDelay: number,
  stickyScrollOffsetTrigger: number,
  stickyScrollUseWindow: boolean,
  stickyScrollElement?: MutableElementRef
}

const defaultOptions: NavStickyOptions = {
  stickyScrollDelay: 280,
  stickyScrollUseWindow: true,
  stickyScrollOffsetTrigger: 100,
  // stickyScrollElement: null
};

export const useNavSticky = (options?: NavStickyOptions): UseNavStickyOutput => {
  const stickyOptions: NavStickyOptions = {
    ...defaultOptions,
    ...options || {}
  };

  const [isSticky, setSticky] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y >= stickyOptions.stickyScrollOffsetTrigger) {
      setSticky(() => true);
    } else {
      setSticky(() => false);
    }
  }, [setSticky], null, stickyOptions.stickyScrollUseWindow, stickyOptions.stickyScrollDelay);

  return {
    isSticky,
  };
};
