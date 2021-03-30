type HeaderProps = {
  activePage: string;
};

export default function Header({ activePage }: HeaderProps): JSX.Element {
  return (
    <div className="mt-14 bg-red-400">
      <span>Header</span>
    </div>
  );
}
