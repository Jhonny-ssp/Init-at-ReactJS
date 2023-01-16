export default function Section(props) {
    return (
        <section>
        <div>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
            <ul className={props.className}>
                {/* Items da lista */}
                {props.children}

                 {/* Children -> Filho de section (Itens da lista ficam dentro da section) */}   
                 {/* Pega todos os filhos do HTML e coloca dentro desse componente */}
            </ul>
        </div>
    </section>

    )
}