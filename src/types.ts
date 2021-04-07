import type { ReactChild, ReactFragment } from 'react';

export type WithChildren<Props = Record<string, unknown>> = Props & {
  children: ReactChild | ReactFragment;
};
