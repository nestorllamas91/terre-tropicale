import { MouseEvent } from 'react';

import Icon from '@/app/shared/icon/component';

type ButtonProps = {
  action: string;
  icon: {
    path: string;
    viewBox: string;
  };
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ action, icon, onClick }: ButtonProps): JSX.Element => (
  <button
    onClick={e => onClick(e)}
    className="flex justify-center items-center px-2 py-0.5 rounded text-black hover:text-black bg-lime-400 hover:bg-lime-500 border-2 border-lime-600 focus:outline-none"
  >
    <Icon path={icon.path} viewBox={icon.viewBox} className="w-5 mr-2" />
    <span>{action}</span>
  </button>
);

export default Button;
