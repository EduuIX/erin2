import './pagamento.css'

const FormasDePagamento = () => {
    return (
        <>
            <section className='pagamento'>
                <h2>Formas de Pagamento</h2>
                <p>
                    O pagamento da inscrição poderá ser realizado por meio de boleto bancário, 
                    cartão de crédito, débito em conta do Banco do Brasil, nota de empenho ou 
                    faturamento, através do portal do sistema ECOS. Os pagamentos por boleto e 
                    débito encerram-se dia 14/08/2025, os pagamentos por cartão de crédito, nota de 
                    empenho e faturamento ficarão abertos até o último dia do evento 
                    (essa data não se aplica a graduandos e pós-graduandos com isenção da taxa de 
                    inscrição).
                </p>
            </section>
        </>
    );
}

export { FormasDePagamento }