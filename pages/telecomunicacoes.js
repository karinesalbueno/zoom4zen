import Cadastro from "../components/Cadastro";
import Layout from "../components/Layout";

export default function Telecomunicacoes() {
  return (
    <Layout>
      <div className="text-justify">
        <h2 className="text-xl font-medium text-center pb-2">Telecomunicações</h2>
        <p className="text-lg mt-2">
          bla bla bla bla telecomunicacoes
          <Cadastro rota={'telecomunicacoes'} />
        </p>
      </div>
    </Layout>
  );
}
