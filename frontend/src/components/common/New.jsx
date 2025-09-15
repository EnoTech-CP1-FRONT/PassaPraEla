import React from 'react';

const NoticiasFutebol = () => {
    // Substitua 'SUA_CLIENT_ID' pelo ID que você obteve da API Futebol
    const clientId = 'WMMX6TYU939F'; 
    const iframeSrc = `https://api.api-futebol.com.br/v1/widgets/rodadas?client_id=${clientId}`;

    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
                Últimas Rodadas
            </h2>
            <div style={{ maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
                <iframe
                    src={iframeSrc}
                    title="API Futebol"
                    width="100%"
                    frameBorder="0"
                    style={{ height: '100%', minHeight: '700px' }}
                />
            </div>
        </div>
    );
};

export default NoticiasFutebol;