import Image from 'next/image';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <Header />

      <main className="pt-20 px-6 text-center">
        <div className="relative w-full h-16 mb-8">
          <Image
            src="/images/logo.png"
            alt="Imagem"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        <h1 className="text-3xl font-semibold mb-6">Bem-vindo ao nosso site!</h1>

        <div className="space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Botão 1
          </button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Botão 2
          </button>
        </div>
      </main>
    </div>
  );
}
