import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {

    // PARA BOM FUNCIONAMENTO, FEITO PARA O PROXIMO DEV COLOCAR EM STRIN/NUM
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: "marca ou string nao identificada",
    ano_lancamento: 0, 
}

export default Item