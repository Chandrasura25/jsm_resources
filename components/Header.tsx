import React from 'react'
interface Props{
    title: string;
    query:string;
    category: string
}
const Header = ({title, query, category}:Props) => {
  return (
    <div>Header</div>
  )
}

export default Header