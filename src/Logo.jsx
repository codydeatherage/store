import styled from 'styled-components'
import logo from './logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})`
height: 100%`

const Logo = () => {
    return (
        <Wrapper >
            <img src={logo} width="50" height="100%" alt="" />
        </Wrapper>
    )
}

export default Logo