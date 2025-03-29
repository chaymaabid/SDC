import memorie1 from '../../assets/memories/memorie1.jpg';
import memorie2 from '../../assets/memories/memorie2.jpg';
import memorie3 from '../../assets/memories/memorie3.jpg';
import memorie4 from '../../assets/memories/memorie4.jpg';
import memorie5 from '../../assets/memories/memorie5.jpg';
import memorie6 from '../../assets/memories/memorie6.jpg';
import memorie7 from '../../assets/memories/memorie7.jpg';
import memorie8 from '../../assets/memories/memorie8.jpg';
import memorie9 from '../../assets/memories/memorie9.jpg';
import  './memories.css';
function Memories(){
    return(
        <>
        <h1 className="heading"><span>SDC-2024</span></h1>
        <div className='Memories_wrapper  section'>
            
            <div className='MemoriesCard'>
                <img src={memorie2} alt="img1"/>
                <div className='MemoriesContent'>
                    <h3>DZSQDSDF</h3>
                    
                </div>
            </div>
            <div className='MemoriesCard'>
                <img src={memorie7} alt="img1"/>
                <div className='MemoriesContent'>
                    <h3>image1</h3>
                    <a href='#'> view more</a>
                </div>
            </div>
            <div className='MemoriesCard'>
                <img src={memorie3} alt="img1"/>
                <div className='MemoriesContent'>
                    <h3>ifgrg</h3>
                    <a href='#'> view more</a>
                </div>
            </div>
            <div className='MemoriesCard'>
                <img src={memorie4} alt="img1"/>
                <div className='MemoriesContent'>
                    <h3>image4</h3>
                    <a href='#'> view more</a>
                </div>
            </div>
            <div className='MemoriesCard'>
                <img src={memorie5} alt="img1"/>
                <div className='MemoriesContent'>
                    <h3>image1</h3>
                    <a href='#'> view more</a>
                </div>
            </div>
            <div className='MemoriesCard'>
                <img src={memorie6} alt="img1"/>
                <div className='MemoriesContent'>
                    <h3>image1</h3>
                    <a href='#'> view more</a>
                </div>
            </div>
            <div className='MemoriesCard'>
                <img src={memorie1} alt="img1"/>
                <div className='MemoriesContent'>
                    <h3>image1</h3>
                    <a href='#'> view more</a>
                </div>
            </div>
            <div className='MemoriesCard'>
                <img src={memorie8} alt="img1"/>
                <div className='MemoriesContent'>
                    <h3>image1</h3>
                    <a href='#'> view more</a>
                </div>
            </div>
            <div className='MemoriesCard'>
                <img src={memorie9} alt="img1"/>
                <div className='MemoriesContent'>
                    <h3>image1</h3>
                    <a href='#'> view more</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Memories;