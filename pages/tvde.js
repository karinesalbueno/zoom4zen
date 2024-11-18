import Cadastro from "../components/Cadastro";
import Layout from "../components/Layout";

export default function Tvde() {
  return (
    <Layout>
      <div className="text-justify">
        <h2 className="text-lg font-medium text-center pb-1">TVDE</h2>
        <p className="text-lg mt-2">
          Oferecemos veículos ideais para motoristas que desejam atuar no transporte de passageiros (TVDE). Nossa frota é composta por carros seguros, confortáveis e econômicos para garantir uma experiência de qualidade tanto para motoristas quanto para passageiros.
        </p>
        <Cadastro rota={'tvde'} />
      </div>
    </Layout>
  );
}
