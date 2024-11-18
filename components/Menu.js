export default function Menu() {
    return (
      <nav className="md:space-x-12 flex flex-col md:flex-row items-start md:space-y-0 space-y-4 pl-6">
        <a href="#" className="hover:text-gray-600 uppercase font-semibold md:text-xl text-2xl">A empresa</a>
        <a href="#" className="hover:text-gray-600 uppercase font-semibold md:text-xl text-2xl">Telecomunicações</a>
        <a href="#" className="hover:text-gray-600 uppercase font-semibold md:text-xl text-2xl">TVDE</a>
        <a href="#" className="hover:text-gray-600 uppercase font-semibold md:text-xl text-2xl">Transporte</a>
      </nav>
    );
  }
  