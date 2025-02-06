// TODO

export default function Navbar() {
  return (
    <nav className=" text-white h-[96px] fixed z-[999] w-screen hidden">
      <div className="max-w-[940px] mx-auto flex items-center justify-between h-full">
        <div>Logo</div>
        <ul className="flex items-center justify-center gap-4 uppercase">
          {["Home", "About", "Services", "Contact"].map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
