export function Caixa(props) {
    return (
        <>
            <div className="caixa center">
                <span>
                    <box-icon name={props.nome} ></box-icon>
                    <h3>{props.title}</h3>
                </span>

            </div>
        </>
    )
}