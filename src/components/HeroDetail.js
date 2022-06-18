import React, {useEffect, useState} from "react";

const HeroDetail = ({hero}) => {

    // const [roles, setRoles] = useState(0)

    // useEffect(() => {
    //     setRoles(hero.roles.join(', '))
    // })
   

    return (
        <div>
            <h2>Name: {hero.localized_name}</h2>
            <p>Primary Attribute: {hero.primary_attr}</p>
            <p>Attack Type: {hero.attack_type}</p>
            <p>No of Legs:{hero.legs}</p>
            <p>Roles: {hero.roles}</p>
        </div>
    )
}

export default HeroDetail;