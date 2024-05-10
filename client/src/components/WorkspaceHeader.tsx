const Header = ({ children }) => {
  return (
    <header className="shadow-xs sticky top-0 flex h-24 flex-row items-center justify-between border-b border-gray-200 bg-white/70 py-6 pl-10 pr-4 backdrop-blur-xl">
      {children}
    </header>
  )
}

export default Header
