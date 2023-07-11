export function Box(props){
    return(
        <>
            <div className="box">
                <box-icon name={props.name}></box-icon>
                <h3>{props.title} </h3>
            </div>
        </>
    )
}