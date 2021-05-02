type IconProps = {
  path: string;
  viewBox: string;
  className?: string;
};

const Icon = ({ path, viewBox, className }: IconProps): JSX.Element => (
  <svg viewBox={viewBox} className={className}>
    <path d={path} />
  </svg>
);

export default Icon;
