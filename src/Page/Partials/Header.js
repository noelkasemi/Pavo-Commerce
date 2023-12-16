import Nav from "./Nav";

export default function Header({ style }) {
  return (
    <>
      {/* Header */}
      <header
        id="header"
        className={`
          ${style} top-0 z-30 bg-white shadow w-full fixed `}
      >
        {/* end of container */}
        <Nav />
      </header>
      {/* end of header */}
    </>
  );
}
