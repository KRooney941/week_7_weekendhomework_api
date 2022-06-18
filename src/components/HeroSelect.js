import React from "react";

const HeroSelect = ({allHeroes, onHeroSelected}) => {

    const heroOptions = allHeroes.map((hero, id) => {
        return <option key={id} value={id}>{hero.localized_name}</option>
    })


    const handleChange = (event) => {
        const chosenHero = allHeroes[event.target.value]
        onHeroSelected(chosenHero)
    }



  return (
      <select onChange={handleChange}>
          <option selected disabled value="">Please choose a Hero</option>
          {heroOptions}
      </select>
  )

}

export default HeroSelect;