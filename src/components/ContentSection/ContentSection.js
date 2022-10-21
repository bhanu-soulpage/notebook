import './ContentSection.css'
import andres from './pexels-andres-ayrton-6578391.png'
import brett from './pexels-brett-sayles-2881232.png'
import fauxels from './pexels-fauxels-3182834.png'
function ContentSection() {
    return (
        <div className='container'>
            <div className=" row pt-4">
                    <div className=" col-sm-12 col-md-4 d-flex flex-column justify-content-center pt-3">
                        <p className="content-top-text">What Netboks ?</p>
                        <h1 className="content-main-head">Why Join to Netbook Social Network?</h1>
                        <p className="content-sub-text">Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</p>
                        <ul className="list-items">
                            <li className="list-item">Groups</li>
                            <li className="list-item">Messages</li>
                            <li className="list-item">Share</li>
                        </ul>
                    </div>

                    <div className="col-sm-12 col-md-4 d-flex"> 
                            <img src = {fauxels} className="content-left-image w-100 p-5 " />
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <img src={brett} className=" content-right-images w-100"/>
                        <img src={andres}className="  content-right-images w-100"/>
                    </div>
                   
                       
                </div>
        </div>
    )
}

export default ContentSection;