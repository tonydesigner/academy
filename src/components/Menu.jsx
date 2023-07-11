import { Link } from "react-router-dom"

export function Menu() {
    const menu =
        [
            { title: 'Financeiro', link: '/financeiro' },
            { title: 'Alunos', link: '/alunos' },
            { title: 'Modalidades', link: '/modalidade' },
            { title: 'LogOut', link: '/academy' },
        ]
    return (
        <>
            <div className="menu">
                <ul>
                    {
                        menu.map(i =>
                            <Link to={i.link} className="link cor">
                                <li>{i.title} </li>
                            </Link>
                        )
                    }
                </ul>

            </div>
        </>
    )
}