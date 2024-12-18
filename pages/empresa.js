import Layout from "../components/Layout";

export default function Empresa() {
  return (
    <Layout>
      <div className="text-justify">
        <h2 className="text-xl font-medium text-center pb-2">A Empresa</h2>
        <p className="text-lg  mt-2">
          Somos uma empresa especializada em soluções de mobilidade, oferecendo carros para TVDE (Transporte de Veículos de Transporte de Passageiros). Nossa missão é fornecer veículos de alta qualidade e segurança para motoristas, garantindo uma experiência de transporte eficiente e acessível.
        </p>
        <p className="text-lg  mt-4">
          Nosso compromisso é com a excelência e inovação no setor de mobilidade. Se você está buscando um carro de confiança para TVDE, estamos aqui para ajudá-lo.
        </p>
        <div className="mt-6 text-gray-950 font-medium pt-16 text-center">
          <p className="text-lg text-gray-400">Qualquer dúvida, entre em contato conosco!</p>
          <p className="text-lg text-gray-400">E-mail: <a href="mailto:diogo@4zen.com.br" className="text-blue-500">diogo@4zen.com.br</a></p>
          <p className="text-lg text-gray-400">WhatsApp: <a href="tel:+351 968 112 761" className="text-blue-500">+55 08 7878 7909</a></p>
        </div>
      </div>
    </Layout>
  );
}
