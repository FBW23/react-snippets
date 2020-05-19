import React from 'react'

const Main = () => {

    const result = 10 + 10
    const person = { name: "Rob", infected: true }
  
    const courseModules = ['React', 'NodeJS', 'DataServer', 'Fullstack Server', 'Final Projects']
  
    const studentList = [
      {name: "Bianca", country: "Brazil"},
      {name: "Balazs", country: "Hungary"},
      {name: "Julia", country: "Brazil"}
    ]
  
    return (
        <main>
            <div>This is main &#128514;</div>
            {/* <img src={logo512} alt="Logo 512" /> */}
            <div>{ 5 + 5 }</div>
            <div>{ result }</div>
            <div>{ person.name }</div>
            <div>
            {/* { person.infected ? <b>Go into quarantine, man!</b> : 
                <span>Social distancing, please!</span> } */}
            { person.infected && 
                <>
                    <b>Go into quarantine, man: </b> 
                    <a href="https://www.who.int/news-room/campaigns/connecting-the-world-to-combat-coronavirus/healthyathome?gclid=Cj0KCQjw2PP1BRCiARIsAEqv-pTNhfgmcY5vQaETp_tjYIEIWpuBSG8D9gCOIizb4mLz2GnxNmukHLkaAmM6EALw_wcB" >Rules</a>
                </>
            }          
            </div>
            <ul>
            {studentList.map(student => (
                <li><span>{student.name}</span>: <span>{student.country}</span></li>
            ))}
            </ul>
            {/* <ul>
            { courseModules.map(module => (
                <li>{module}</li>
            ))}
            </ul> */}
      </main>
    )
}

export default Main