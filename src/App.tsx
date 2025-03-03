import Registration from "./components/Registration"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ResumeLogin from "./components/ResumeLogin"
import WelcomePage from "./components/WelcomePage"
import SideBar from "./components/SideBar"
import SideBarIcon from "./components/SideBarIcon"
import JobSearch from "./components/JobSearch"
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route element ={<WelcomePage/>} path="/"/>
      <Route element={<ResumeLogin/>} path="/login" />
      <Route element={<Registration/>}path="/register"/>
      <Route element={<SideBar isOpen={false}/>}path="/sidebar"/>
      <Route element={<SideBarIcon onClick={function (): void {
            throw new Error("Function not implemented.")
          } }/>}path="/icon"/>
      <Route element={<JobSearch/>}path="/jobsearch"/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
