import Experience from './Experience'
import Certificates from './Certificates'
import References from './References'
import Languages from './Languages'
import Interests from './Interests'

const ResumeRight = () => {
    return (
        <div className="resume__right">
            <Experience />
            <Certificates />{/* 
            <References /> */}
            <Languages />
            <Interests />
        </div>
    )
}

export default ResumeRight