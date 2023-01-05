import React, { useState, useEffect } from 'react'
import Markdwon from './Markdwon'
import JsonFile from '../jsons/demo.json'
import '../styles/Markdown.styl'

export default function Demo(props) {

  const [value, setValue] = useState(JsonFile.value)

  return (
    <Markdwon
      value={value}
      onChange={val => setValue(val)}
    />
  )
}
