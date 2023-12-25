"use client"
import AddToDo from "@/components/AddToDo";
import ToDos from "@/components/ToDos";
import './page.css'

export default function Home() {
  return (
    <div className="main_container">
      <h1>Tasks</h1>
      <div className="second_half">
        <AddToDo />
        <ToDos />
      </div>
    </div>
  )
}