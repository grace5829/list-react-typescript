import Heading from "./components/Heading"
import { Section } from "./components/Section"
import {Counter} from  "./components/Counter"
import { useState } from "react"
import List from "./components/List"

const App = () => {
  const [count,setCount]= useState<number>(1)

  return (
    <>
    <Heading title={"Hello"} />
    <Section title={"Different Title"}> This is my Section.</Section>

    {/* setCount is a prop and "Count is {count}" is the children */}
    <Counter setCount={setCount}> Count is {count}</Counter>
    <List items={["Coffee", "Tea", "Tacos"]} render={(item:string)=> <span className="gold">{item}</span>}></List>
    </>
      )
}

export default App