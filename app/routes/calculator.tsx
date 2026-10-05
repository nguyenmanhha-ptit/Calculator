import _ from "lodash";
import type { Route } from "./+types/home";
import { Button } from "../components/ui/button";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Calculator() {
 
  return (
  <div className="w-120 p-5 border-4 border-black  rounded-2xl" >
    <div className="h-[80px] border-2 border-black rounded-md">
  
    </div>

    <input type="text"  id="display" />
    <div className="w-100 grid grid-cols-4 gap-8">
      <Button>01</Button>
      <Button>02</Button>
      <Button>03</Button>
      <Button>-</Button>
      <Button>04</Button>
      <Button>05</Button>
      <Button>06</Button>
      <Button>*</Button>
      <Button>07</Button>
      <Button>08</Button>
      <Button>09</Button>
      <Button>:</Button>
      <Button>0</Button>
      <Button>,</Button>
      <Button>=</Button>
      <Button>+</Button>
      
   </div>
  </div>
)}
