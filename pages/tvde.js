import Cadastro from "../components/Cadastro";
import Layout from "../components/Layout";

export default function Tvde() {
  return (
    <Layout>
      <div>
        <h2 className="text-lg font-semibold text-gray-800 text-center pb-1">TVDE</h2>
        <p className="text-lg text-gray-700 mt-2">
          Oferecemos veículos ideais para motoristas que desejam atuar no transporte de passageiros (TVDE). Nossa frota é composta por carros seguros, confortáveis e econômicos para garantir uma experiência de qualidade tanto para motoristas quanto para passageiros.
        </p>
        <Cadastro />
      </div>
    </Layout>
  );
}
