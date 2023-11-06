/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

function PeopleListItem(props) {
  const { person } = props

  const personURL = `/john/${person.name.first}`;
  return (
    <li className='peoples-card'>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      
       <Link to={personURL} 
       state={person} >View more</Link>
    </li>
  )
}

export default PeopleListItem
