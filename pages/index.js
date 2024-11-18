import Image from 'next/image';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <main className="pt-20 px-8 text-center">
        <div className="relative w-full h-16 mb-8 mt-12">
          <Image
            src="/images/logo.png"
            alt="Imagem"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        <h1 className="text-xl font-semibold mb-6">Bem-vindo, somos uma empresa especializada em soluções de mobilidade!</h1>

        <div className="space-x-4">
          <button className="bg-blue-500 text-white px-20 py-4 rounded-lg hover:bg-blue-600 font-semibold">
            Quero fazer parte da equipe
          </button>
          {/* <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Botão 2
          </button> */}
        </div>
      </main>
    </div>
  );
}
