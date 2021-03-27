type NavigationBarProps = {
  activePage?: string;
};

export default function NavigationBar({ activePage }: NavigationBarProps): JSX.Element {
  return (
    <div>
      <span>Navigation bar.</span>
    </div>
  );
}
