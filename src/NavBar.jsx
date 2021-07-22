import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Container = styled.div`
    width: 100%;
    padding: 0;
    border: 2px solid red;
`

const Nav = styled.nav.attrs({
    className: 'navbar-dark bg-dark',
})`
    position: relative;
    display: flex;
    width: 100%;
`
const Links = styled.div`
    position: absolute;
    right: 0;
    border: 2px solid red;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 0;
    height: 100%:
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />

                    <Link to="/" className="navbar-brand">
                        ThreadBear
                    </Link>
                    <Links>
                        <Link to="/movies/list" className="nav-link">
                            List Movies
                        </Link>
                        <Link to="/movies/list" className="nav-link">
                            List Movies
                        </Link>
                        <Link to="/movies/list" className="nav-link">
                            List Movies
                        </Link>
                    </Links>
                </Nav>
            </Container>
        )
    }
}

export default NavBar