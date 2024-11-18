import { useState } from 'react';

export default function Cadastro({ rota }) {
    const [etapa, setEtapa] = useState(1); // Inicializa na primeira etapa
    const [possuiCarro, setPossuiCarro] = useState(null);
    const [temExperiencia, setTemExperiencia] = useState(null);
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        endereco: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handlePossuiCarroChange = (answer) => {
        setPossuiCarro(answer);
        setEtapa(2); // Vai para a próxima etapa após escolher uma opção
    };

    const handleTemExperienciaChange = (answer) => {
        setTemExperiencia(answer);
        setEtapa(3); // Vai para a próxima etapa após escolher uma opção
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
            ...(rota === 'telecomunicacoes' && { experiencia: temExperiencia }), // Só inclui a experiência se a tela for telecomunicações
        };

        let apiUrl;
        if (rota === 'telecomunicacoes') {
            apiUrl = '/api/cadastroTelecomunicacoes';
        } else {
            apiUrl = '/api/cadastroTVDE';
        }

        try {
            const response = await fetch(apiUrl, {
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
                setErrorMessage('');
            } else {
                setErrorMessage(result.error);
            }
        } catch (error) {
            setErrorMessage('Erro ao enviar o formulário.');
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto pt-14">
            <h2 className="text-md mb-4 text-center">Entre em contato conosco</h2>
            {/* Botão de Voltar para a etapa anterior */}
            {etapa > 1 && <div className="mb-4 mt-6">
                <button
                    onClick={() => setEtapa(etapa - 1)} // Volta para a etapa 1
                    className="text-blue-300 text-base font-semibold inline-flex items-center mt-2"
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
            </div>}


            {etapa === 1 && (
                // Etapa 1: Pergunta "Possui carro?"
                <div className='text-center pt-16'>
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
            )}

            {etapa === 2 && (
                // Etapa 2: Pergunta sobre experiência
                <div className='text-center'>
                    <h2 className="text-xl mb-4 text-center">Você tem experiência na área?</h2>
                    <button
                        onClick={() => handleTemExperienciaChange(true)}
                        className="bg-blue-500 text-white py-2 px-8 rounded mr-4"
                    >
                        Sim
                    </button>
                    <button
                        onClick={() => handleTemExperienciaChange(false)}
                        className="bg-gray-500 text-white py-2 px-8 rounded"
                    >
                        Não
                    </button>

                </div>
            )}

            {etapa === 3 && (
                // Etapa 3: Formulário de Cadastro
                <div className='px-2'>
                    {/* Indicativo da opção marcada */}
                    <div className='pb-4'>
                        <p className="text-base ">
                            {possuiCarro ? 'Possui carro? Sim.' : 'Possui carro? Não.'}
                        </p>
                        {rota === 'telecomunicacoes' && temExperiencia !== null && (
                            <p className="text-base ">
                                {temExperiencia ? 'Tem experiência na área?? Sim.' : 'Tem experiência na área?? Não.'}
                            </p>
                        )}
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* <h2 className="text-xl mb-4 text-center">Formulário de Cadastro</h2> */}
                        <div className="mb-4">
                            <label className="block">Nome</label>
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleFormChange}
                                className="w-full p-2 border rounded text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block ">Telefone</label>
                            <input
                                type="text"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleFormChange}
                                className="w-full p-2 border rounded text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block ">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                className="w-full p-2 border rounded text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block ">Endereço</label>
                            <input
                                type="text"
                                name="endereco"
                                value={formData.endereco}
                                onChange={handleFormChange}
                                className="w-full p-2 border rounded text-black"
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
