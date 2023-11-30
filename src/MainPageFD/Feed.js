import Navbar from "./Navbar";
import './feed.css'
import '../index.css';

let arrobj = [
    {
        "name_of_item" : "casio black color Analog watch",
        "picture-url" : " images/feed/watchjpg.jpg",
        "reward" : " 300",
        "desc" : " I lost my casio watch near AB1 ground floor fluid dynamics laboratory steps , In case anyone finds pls contact : 1234567890" 
    },

    {
        "name_of_item" : "Samsung purple color earbuds 2021 edition",
        "picture-url" : " images/feed/earbuds.jpg",
        "reward" : " 600",
        "desc" : " I lost my Samsung purple color earbuds 2021 edition near AB1 ground floor fluid dynamics laboratory steps , In case anyone finds pls contact : 1234567890" 
    }

]

function Feed(){
    return(
        <div>
            <Navbar/>
            <section className="back-color" >
                <div className="container">
                    <div className="Feed">
                            { 
                                arrobj.map((objarr) => (
                                <div className="Post-post" >
                                    <div className="Post-details">
                                        <h2>{objarr.name_of_item}</h2>
                                    </div>
                                    <div className="Post-image">
                                            <img src={objarr["picture-url"]} alt= {objarr.name_of_item}/>
                                            <h1>Reward : {objarr.reward}</h1>
                                    </div>
                                    <div className="Post-desc">
                                        <p>{objarr.desc}</p>
                                    </div>
                                </div>
                                ))
                            }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Feed;