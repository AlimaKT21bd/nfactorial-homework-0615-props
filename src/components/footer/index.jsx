import MovieIcon from '@mui/icons-material/Movie';
import StarRateIcon  from '@mui/icons-material/StarRate';


const swLinks = [
    {
      url: "https://star-wars-film.ru/",
      name: "star_wars_films",
      component: <MovieIcon style={{color:"#999"}} />,
    },
    {
      url: "https://tenor.com/view/baby-yoda-baby-yoda-dancing-baby-yoda-dance-dance-dance-moves-gif-22982736",
      name: "must_have",
      component: <StarRateIcon style={{color:"#999"}} />,
    },
];


export const Footer = ({theme}) => {
    return (
        <div className={`centered  ${theme} `}>
        
            <div className="links-layout">
                {swLinks.map((link) => (
                    <a
                    key={link.name}
                    className="link"
                    href={link.url}
                    target="_blank"
                    alt={link.name}
                    rel="noreferrer"
                    >
                    {link.component}
                    </a>
                ))}
            </div>
            <h1 style={{color:"#999", fontSize: "large", fontWeight : "bold"}}>-----May the Force be with you-----</h1>
            
        </div>
    );
};
  
//style = {{display:" grid", gridTemplateColumns: "1fr 1fr 1f", justifyItems: "center", alignItems: "center"}}