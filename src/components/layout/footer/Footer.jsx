import './footer.css'
import LogoAngelus from '../../../assets/brands/LogoAngela.svg'
import LogoBrayan from '../../../assets/brands/LogoBrayan.svg'

const Footer = () => {
    return(
        <footer>
            <div className='responsability'>
                <p>Descargo de responsabilidad</p>
                <p>Ninguna parte del contenido que ofrecemos debe interpretarse como un asesoramiento financiero, jurídico o de cualquier otro tipo en el que pueda basarse de forma específica para la consecución de algún propósito.</p>
            </div>
            <div className='brands'>
                <img src={LogoAngelus} alt="Logo Angelus"/>
                <img src={LogoBrayan} alt="Logo Brayan"/>
                <div>
                    <p>© 2022 Crypto Currency</p>
                    <p>All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer