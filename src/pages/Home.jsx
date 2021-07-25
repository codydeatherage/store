import spot from '../bg-spot.svg'
import styled from 'styled-components'
import LoginForm from './../components/LoginForm'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #94b3d6;
`

const ImgContainer = styled.div`
    width: 60vw;
    margin-left: 5vw;
    margin-top: 5vh;
`
const Home = () => {
    return (
        <Container>
            <ImgContainer>
                <img src={spot} alt=""></img>
            </ImgContainer>
        </Container>
    )
}

export default Home