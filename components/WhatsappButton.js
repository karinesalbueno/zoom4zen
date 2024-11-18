import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
    const whatsappNumber = '5578787909';
    const message = encodeURIComponent('Oi, gostaria de mais informações sobre a zoom4zen');
    
    const handleClick = () => {
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div
            onClick={handleClick}
            className="fixed bottom-12 right-6     bg-green-500 text-white p-4 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform"
            style={{ zIndex: 100 }}
        >
            <FaWhatsapp size={30} />
        </div>
    );
}
