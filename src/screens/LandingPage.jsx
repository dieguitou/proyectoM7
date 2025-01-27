import { Fragment } from 'react';
import info from '../utils/info';


const LandingPage = () => {
    return (
        <div className='landingContent'>
            <div className='landingHeader'>{info.title}</div>
            <div className="table">
                {info.info.map((info) => {
                    return (
                        <Fragment key={info.title}>
                        <div className="table-row">
                            <div className="table-cell">
                                <h3>{info.title}<hr /></h3>
                            </div>
                        </div>
                        <div className='table-row'>
                        {info.description.map((description, index)=>{
                            return(
                                <div key={index} className='table-cell'>
                                    {description.info}
                                </div>
                            )
                        })}
                        </div>
                        </Fragment>
                    )
                })}
            </div>
            <br/>
            <hr style={{width:'90%', marginLeft:'0%', borderColor:'#f7f7f7'}}/>
            <div style={{textAlign:'center'}}>&copy; 2024 Modulo 7. USIP.</div>
        </div>
    )
}
export default LandingPage;