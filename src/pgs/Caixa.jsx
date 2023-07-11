export function Caixa(props) {
    return (
        <>
            <div className="caixa">
                <box-icon name={props.nome} ></box-icon>
                <h3>{props.title}</h3>
            </div>
        </>
    )
}