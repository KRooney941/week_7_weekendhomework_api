import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import HeroDetail from "../components/HeroDetail";
import HeroSelect from "../components/HeroSelect";


const HeroContainer = () => {
    const [hero, setHero] = useState([]);
    const [selectedHero, setSelectedHero] = useState([])


    useEffect(() => {
        fetch("https://api.opendota.com/api/heroes")
        .then(res => res.json())
        .then(data => setHero(data))
      }, []);

      const onHeroSelected = function(hero){
          setSelectedHero(hero)
      }

    return (
        <>
            <Header/>
            <HeroSelect allHeroes ={hero} onHeroSelected = {onHeroSelected}/>
            { selectedHero ? <HeroDetail hero ={selectedHero}/> : null}
        </>
    )

}

export default HeroContainer;