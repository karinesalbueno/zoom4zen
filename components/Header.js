import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Meu Site</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><a href="#" className="hover:underline">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
