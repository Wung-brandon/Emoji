import './box.css'
// import images from './images'
import emojipedia from './emoji'

function Box(){
    return (
        <div>
            <h1>
                <span className='emojipedia'>emojipedia</span>
            </h1>


            <dl className='dictionary'>
                {emojipedia.map(
                    emoji => <div className='boxes'>
                    <dt>
                        <img src={emoji.img} alt="cry-emoji" />
                        <br />
                        <span className='general'>{emoji.name}</span>
    
                    </dt>
                    <dd>{emoji.meaning} </dd>
                </div>
    
               
                )}
                
                </dl>
        </div>
 
    )
}

export default Box