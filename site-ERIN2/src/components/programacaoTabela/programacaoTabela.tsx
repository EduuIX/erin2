import React from 'react';

const ProgramacaoTabela: React.FC = () => {
  return (
    <table
      style={{
        borderCollapse: 'collapse',
        width: '100%',
        tableLayout: 'fixed',
        border: '1px solid black',
      }}
    >
      <thead>
        <tr style={{ backgroundColor: '#150797', color: '#fff' }}>
          <th colSpan={2} style={{ border: '1px solid black', padding: 8, textAlign: 'center' }}>
            DIA 01 – 13/08 (QUARTA-FEIRA)
          </th>
          <th colSpan={2} style={{ border: '1px solid black', padding: 8, textAlign: 'center' }}>
            DIA 02 – 14/08 (QUINTA-FEIRA)
          </th>
          <th colSpan={2} style={{ border: '1px solid black', padding: 8, textAlign: 'center' }}>
            DIA 03 – 15/08 (SEXTA-FEIRA)
          </th>
        </tr>
        <tr style={{ backgroundColor: '#150797', color: '#fff' }}>
          <th style={{ border: '1px solid black', padding: 8, textAlign: 'center' }}>Horário</th>
          <th style={{ border: '1px solid black', padding: 8, textAlign: 'center' }}>Evento</th>
          <th style={{ border: '1px solid black', padding: 8, textAlign: 'center' }}>Horário</th>
          <th style={{ border: '1px solid black', padding: 8, textAlign: 'center' }}>Evento</th>
          <th style={{ border: '1px solid black', padding: 8, textAlign: 'center' }}>Horário</th>
          <th style={{ border: '1px solid black', padding: 8, textAlign: 'center' }}>Evento</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={cellStyle}>08h20 – 09h00</td>
          <td style={cellStyle}>Solenidade de Abertura</td>
          <td style={cellStyle}></td>
          <td style={cellStyle}>Minicursos Técnicos</td>
          <td style={cellStyle}>08h30 – 09h45</td>
          <td style={cellStyle}>Palestra 2: Sociedade Brasileira de Computação: Desafios e Perspectivas</td>
        </tr>
        <tr>
          <td style={cellStyle}>09h15 – 10h00</td>
          <td style={cellStyle}>Painel de Abertura: Norte Conectado: Transformação Digital e Inclusão Tecnológica na Amazônia</td>
          <td style={cellStyle}></td>
          <td style={cellStyle}>Sessões Técnicas de Trabalhos Científicos</td>
          <td style={cellStyle}>09h45 – 10h00</td>
          <td style={cellStyle}>Intervalo</td>
        </tr>
        <tr>
          <td style={cellStyle}>10h00 – 10h15</td>
          <td style={cellStyle}>Intervalo</td>
          <td style={cellStyle}>08h30 – 12h00</td>
          <td style={cellStyle}>Webinars</td>
          <td style={cellStyle}>10h00 – 12h00</td>
          <td style={cellStyle}>Painel 3: Inteligência Artificial e Desenvolvimento 10h15 – 12h00 Regional</td>
        </tr>
        <tr>
          <td style={cellStyle}>10h15 – 12h00</td>
          <td style={cellStyle}>Painel 1: Conectividade e Inovação para a Amazônia Digital</td>
          <td style={cellStyle}></td>
          <td style={cellStyle}>Oficinas Interativas</td>
          <td style={cellStyle}>12H00 – 14H00</td>
          <td style={cellStyle}>Almoço</td>
        </tr>
        <tr>
          <td style={cellStyle}>12h00 – 14h00</td>
          <td style={cellStyle}>Almoço</td>
          <td style={cellStyle}>12H00 – 14H00</td>
          <td style={cellStyle}>Mostra de Projetos e Soluções Inovadoras</td>
          <td style={cellStyle}>14h00 – 16h30</td>
          <td style={cellStyle}>Painel 4: Empreendedorismo Digital e Inclusivo</td>
        </tr>
        <tr>
          <td style={cellStyle}>14h00 – 15h15</td>
          <td style={cellStyle}>Palestra 1: Computação e Internet Quântica: Fronteiras da Nova Era Digital</td>
          <td style={cellStyle}>12H00 – 14H00</td>
          <td style={cellStyle}>Almoço</td>
          <td style={cellStyle}>16h30</td>
          <td style={cellStyle}>Encerramento e Agradecimentos Finais</td>
        </tr>
        <tr>
          <td style={cellStyle}>15h15 – 15h30</td>
          <td style={cellStyle}>Intervalo</td>
          <td style={cellStyle}></td>
          <td style={cellStyle}>Minicursos Técnicos</td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
        </tr>
        <tr>
          <td style={cellStyle}>15h30 – 17h30</td>
          <td style={cellStyle}>Painel 2: Políticas Públicas e Inovação: Articulação entre Governo, Indústria e Academia</td>
          <td style={cellStyle}>14h00 – 17h00</td>
          <td style={cellStyle}>Oficinas Avançadas e Hands-on</td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
        </tr>
        <tr>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}>15h30 – 17h30</td>
          <td style={cellStyle}>Sessões de Pôsteres e Banners Científicos</td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
        </tr>
      </tbody>
    </table>
  );
};

const cellStyle = {
  border: '1px solid black',
  padding: 8,
  verticalAlign: 'top',
  wordBreak: 'break-word' as const,
};


export { ProgramacaoTabela };
