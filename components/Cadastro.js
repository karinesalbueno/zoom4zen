import { useState } from 'react';

export default function Cadastro() {
    const [possuiCarro, setPossuiCarro] = useState(null);
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        endereco: '',
    });
    const [errorMessage, setErrorMessage] = useState(''); 
    const handlePossuiCarroChange = (answer) => {
        setPossuiCarro(answer);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSubmit = {
            ...formData,
            possui_carro: possuiCarro,
        };

        try {
            const response = await fetch('/api/cadastroTVDE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSubmit),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                setFormData({ nome: '', telefone: '', email: '', endereco: '' });
                setErrorMessage(''); // Limpar a mensagem de erro, se houver
            } else {
                setErrorMessage(result.error); // Exibe a mensagem de erro recebida da API
            }
        } catch (error) {
            setErrorMessage('Erro ao enviar o formulário.'); 
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto pt-14 justify-items-center">
            <h2 className="text-md mb-4 text-gray-700 font-medium">Formulário de Cadastro</h2>

            {possuiCarro === null ? (
                // Etapa 1: Pergunta "Possui carro?"
                <div>
                    <h2 className="text-xl mb-4 text-center">Você possui carro?</h2>
                    <button
                        onClick={() => handlePossuiCarroChange(true)}
                        className="bg-blue-500 text-white py-2 px-8 rounded mr-4"
                    >
                        Sim
                    </button>
                    <button
                        onClick={() => handlePossuiCarroChange(false)}
                        className="bg-gray-500 text-white py-2 px-8 rounded"
                    >
                        Não
                    </button>
                </div>
            ) : (
                // Etapa 2: Formulário para preencher informações
                <div>
                    <div className="mb-4">
                        {/* Botão de Voltar */}
                        <button
                            onClick={() => setPossuiCarro(null)}
                            className="text-blue-500 text-lg font-semibold inline-flex items-center mt-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            Voltar
                        </button>
                        {/* Indicativo da opção marcada */}
                        <p className="text-base ">
                            {possuiCarro ?
                                <span className=''>Possui carro? Sim.</span>
                                :
                                <span>Possui carro? Não.</span>}
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Nome</label>
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleFormChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Telefone</label>
                            <input
                                type="number"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleFormChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Endereço</label>
                            <input
                                type="text"
                                name="endereco"
                                value={formData.endereco}
                                onChange={handleFormChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        {errorMessage && (
                            <div className="text-red-500 mb-4 text-center">
                                {errorMessage}
                            </div>
                        )}

                        <div className="flex justify-end">
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
