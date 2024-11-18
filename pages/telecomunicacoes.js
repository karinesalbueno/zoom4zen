import Cadastro from "../components/Cadastro";
import Layout from "../components/Layout";

export default function Telecomunicacoes() {
  return (
    <Layout>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 text-center pb-2">Telecomunicações</h2>
        <p className="text-lg text-gray-700 mt-2">
          bla bla bla bla telecomunicacoes
          <Cadastro rota={'telecomunicacoes'} />
        </p>
      </div>
    </Layout>
  );
}
