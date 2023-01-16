import './styles.css';
import Header from './components/Header'
import Section from './components/Section'
import ListItem from './components/ListItem'

{/* Estruturação de dados */}
const gamesListData = [
  {
    href:"https://www.twitch.tv/directory/game/League%20of%20Legends", 
    imgUrl:"https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg", 
    alt:"Imagem do jogo League of Legends"
  },
  {
    href:"https://www.twitch.tv/directory/game/VALORANT", 
    imgUrl:"https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg", 
    alt:"Imagem do jogo Valorant"
  },
  {
    href:"https://www.twitch.tv/directory/game/Minecraft", 
    imgUrl:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg", 
    alt:"Imagem do jogo Minecraft"
  },
  {
    href:"https://www.twitch.tv/directory/game/Teamfight%20Tactics", 
    imgUrl:"https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg", 
    alt:"Imagem do jogo TFT"
  },
] 

const channelListData = [
  {
    href: "https://www.twitch.tv/maykbrito",
    imgUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png", 
    alt:"Imagem de Mayk Brit"
  },
  {
    href: "https://www.twitch.tv/alanzoka",
    imgUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-70x70.png", 
    alt:"Imagem de Alanzoka"
  },
  {
    href: "https://www.twitch.tv/uigor3k",
    imgUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/ac95a7b85e0b6f89-profile_image-70x70.jpeg", 
    alt:"Imagem de Igor 3k"
  }
]

const socialListData = [
  {
    url: "https://instagram.com/",
    imgUrl: "/assets/instagram.svg",
    alt: "Imagem de Instagram"
  },
  {
    url: "https://twitter.com/",
    imgUrl: "/assets/twitter.svg",
    alt: "Imagem de Twitter"
  },
  {
    url: "https://twitch.com/",
    imgUrl: "/assets/twitch.svg",
    alt: "Imagem de Twitch"
  },
  {
    url: "https://youtube.com/",
    imgUrl: "/assets/youtube.svg",
    alt: "Imagem de YouTube"
  }
]

function App() {
  return (
    <div className="App">
      {/* Para inserir JS no React, usar par de chaves */}

      <Header/>

      <main>
        <Section
        title="Meus jogos"  
        subtitle="Os games que eu mais curto jogar"
        className="games-list"
        >

          
          { /* Higher Order Function   */
            gamesListData.map(item => {
              return (
                <ListItem 
                  url={item.href}
                  imgUrl={item.imgUrl}
                  alt={item.alt}
                />
              )
            })
          }

        </Section> {/* Da pra passar atributos para as tags do React */}

        <Section 
        title="Canais e Streamers"
        subtitle="Lista de canais e transmissões que não perco"
        className="channel-list"
        >

          { /* Higher Order Function   */}

          {
            channelListData.map(item => {
              return (
                <ListItem
                  url={item.href}
                  imgUrl={item.imgUrl}
                  alt={item.alt}
                /> 
              )
            })
          }


        </Section>

        <Section 
        title="Minhas redes"
        subtitle="Se conecte comigo agora mesmo "
        className="social-list">

          {
            socialListData.map(item => {
              return (
                <ListItem
                url={item.url}
                imgUrl={item.imgUrl}
                alt={item.alt}
                />
             )})
          }


        </Section>

      </main>

    </div>
  );
}

export default App;
