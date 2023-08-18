import Home from "./Home"
import Social from "./Social"
import Profile from "./Profile"
import Education from "./Education"
import Skills from "./Skills"


const ResumeLeft = () => {
    return (
        <div className="resume__left">
            <Home />
            <Social />
            <Profile />
            <Education />
            <Skills />
        </div>
    )
}

export default ResumeLeft