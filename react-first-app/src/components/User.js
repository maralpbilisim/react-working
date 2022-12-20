import React from 'react'
import PropTypes from "prop-types"

// export default function User(props) {
//     console.log(props);
//   return (
//     <div>
//    { props.islog ? <h1>`${props.name}  ${props.surname}`</h1>:"giriş yapmadınız"}    
//     </div>
//   )
// }

export default function User({name,islog,surname,friends}) {
  
  return (
  <>
   <h1>{ islog ? `${name}  ${surname}`:"giriş yapmadınız"} </h1>
    {
       friends.map((friend,index)=>
       <div key={friend.id}>{friend.name}</div>
       ) 
    }
   </>
  )
}
User.propTypes={
    name:PropTypes.string
}