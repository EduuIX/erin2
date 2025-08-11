import React from 'react';
import './programacaoTabela.css'

const ProgramacaoTabela: React.FC = () => {
  return (
    <table className='tabela'
      style={{
        borderCollapse: 'collapse',
        width: '100%',
        tableLayout: 'fixed',
        border: '1px solid black',
      }}
    >
      <thead>
        <tr style={{ backgroundColor: '#88b10c', color: '#fff' }}>
          <th colSpan={2} style={{ border: '1px solid black', padding: 8, textAlign: 'center' }}>
            DIA 01 – 13/08 (QUARTA-FEIRA)
          </th>
          <th colSpan={2} style={{ backgroundColor: '#88b10c', border: '1px solid black', padding: 8, textAlign: 'center' }}>
            DIA 02 – 14/08 (QUINTA-FEIRA)
          </th>
          <th colSpan={2} style={{ border: '1px solid black', padding: 8, textAlign: 'center' }}>
            DIA 03 – 15/08 (SEXTA-FEIRA)
          </th>
        </tr>
        <tr style={{ backgroundColor: '#88b10c', color: '#fff' }}>
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
          <td style={cellStyle2}>09h00 – 10h15</td>
          <td style={cellStyle2}>Webinar 1: Sociedade Brasileira de Computação: Desafios e Perspectivas</td>
          <td style={cellStyle}>08h30 – 09h45</td>
          <td style={cellStyle}>Palestra 2: Sociedade Brasileira de Computação: Desafios e Perspectivas</td>
        </tr>
        <tr>
          <td style={cellStyle}>09h15 – 10h00</td>
          <td style={cellStyle}>Painel de Abertura: Norte Conectado: Transformação Digital e Inclusão Tecnológica na Amazônia</td>
          <td style={cellStyle2}>10h15 – 10h45</td>
          <td style={cellStyle2}>Intervalo</td>
          <td style={cellStyle}>09h45 – 10h00</td>
          <td style={cellStyle}>Intervalo</td>
        </tr>
        <tr>
          <td style={cellStyle}>10h00 – 10h15</td>
          <td style={cellStyle}>Intervalo</td>
          <td style={cellStyle2}>10h45 – 12h00</td>
          <td style={cellStyle2}>Webinar 2: Inteligência Artificial e Engenharia de Sistemas Inteligentes</td>
          <td style={cellStyle}>10h00 – 12h00</td>
          <td style={cellStyle}>Painel 3: TI Estratégica e Escalável: Experiências do Amapá para o Mundo</td>
        </tr>
        <tr>
          <td style={cellStyle}>10h15 – 12h00</td>
          <td style={cellStyle}>Painel 1: Conectividade e Inovação para a Amazônia Digital</td>
          <td style={cellStyle2}></td>
          <td style={cellStyle2}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>

        </tr>
        <tr>
          <td style={cellStyle}>12h00 – 14h00</td>
          <td style={cellStyle}>Almoço</td>
          <td style={cellStyle2}>12H00 – 14H00</td>
          <td style={cellStyle2}>Almoço</td>
          <td style={cellStyle}>12H00 – 14H00</td>
          <td style={cellStyle}>Almoço</td>
        </tr>
        <tr>
          <td style={cellStyle}>14h00 – 15h15</td>
          <td style={cellStyle}>Palestra 1: A Justiça Social no Amapá: cidadania através do ensino de informática</td>
          <td style={cellStyle2}>14h30 – 15h30</td>
          <td style={cellStyle2}>Sessão Técnica 2 – Inteligência Artificial e Engenharia de Software</td>
          <td style={cellStyle}>14h30 – 16h30</td>
          <td style={cellStyle}>Sessão Técnica 4  – Tecnologias Educacionais e Inovação no Ensino</td>
        </tr>
        <tr>
          <td style={cellStyle}>15h15 – 15h30</td>
          <td style={cellStyle}>Intervalo</td>
          <td style={cellStyle2}>15h30 – 16h00</td>
          <td style={cellStyle2}>Intervalo</td>
          <td style={cellStyle}>16h30</td>
          <td style={cellStyle}>Encerramento e Agradecimentos Finais</td>
        </tr>
        <tr>
          <td style={cellStyle}>15h30 – 16h30</td>
          <td style={cellStyle}>Palestra 2: Método GTI: sua TI do caos à inovação em 7 estágios</td>
          <td style={cellStyle2}>16h00 – 17h30</td>
          <td style={cellStyle2}>Sessão Técnica 3 – Segurança e Privacidade em Sistemas Inteligentes</td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
        </tr>
        <tr>
          <td style={cellStyle}>16h30 – 17h30</td>
          <td style={cellStyle}>Sessão Técnica 1: Robótica, Inclusão Digital e Cidadania</td>
          <td style={cellStyle2}></td>
          <td style={cellStyle2}></td>
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
  wordBreak: 'break-word' as const,
};

const cellStyle2 = {
  border: '1px solid black',
  padding: 8,
  wordBreak: 'break-word' as const,
  backgroundColor: '#ededed'
};


export { ProgramacaoTabela };
