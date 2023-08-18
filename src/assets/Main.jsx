import ResumeLeft from "./components/resume__left/ResumeLeft"
import ResumeRight from "./components/resume__right/ResumeRight"

const Main = () => {
  return (
    <main className="l-main bd-container">
      <div className="resume" id="area-cv">
        <ResumeLeft />
        <ResumeRight />
      </div>
    </main>
  )
}

export default Main