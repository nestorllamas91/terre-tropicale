type HeaderProps = {
  activePage: string;
};

export default function Header({ activePage }: HeaderProps): JSX.Element {
  return (
    <div>
      <span>Header.</span>
    </div>
  );
}
