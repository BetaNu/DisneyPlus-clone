import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://api.time.com/wp-content/uploads/2018/06/bo-rgb-s120_22a_cs_pub-pub16-318.jpg" />
            </Background>
            <ImageTitle>
                <img src="https://lumiere-a.akamaihd.net/v1/images/bao_logo_41274152.png?region=0%2C0%2C2048%2C1024&lossy=true&width=650" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="play"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="play"/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="Groupwatch"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 · 7m · Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                In "Bao," an aging Chinese mom suffering from empty nest syndrome gets another chance at motherhood when one of her dumplings springs to life as a lively, giggly dumpling boy. Mom excitedly welcomes this new bundle of joy into her life, but Dumpling starts growing up fast, and Mom must come to the bittersweet revelation that nothing stays cute and small forever. This short film from Pixar Animation Studios and director Domee Shi explores the ups and downs of the parent-child relationship through the colorful, rich, and tasty lens of the Chinese immigrant community in Canada.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70 px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;

`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    

    span {
        font-size: 26px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background:: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    color: rgb(249, 249, 249);
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
`

