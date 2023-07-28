import React from 'react'
import CompNavbar from '../Componentes/Navbar'
import CompFooter from '../Componentes/Footer'

function BaseSistema({
    componente: Componente
}) {
    return (
        <div>
            <CompNavbar />
            <Componente />
            <CompFooter />
        </div>
    )
}

export default BaseSistema