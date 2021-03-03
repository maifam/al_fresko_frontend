import React from 'react';
import { useHistory} from 'react-router-dom';
import { Card, Icon, Rating, Button, Divider} from 'semantic-ui-react';


function Restaurant({restaurant, currentUser}) {

    const {id, name, cuisine, address, money, od_img1} = restaurant
    const history = useHistory()

    function handleShowDetails(){
        if (currentUser) {
            history.push(`/restaurants/${id}`)
        }else {
            alert('Please login to see more details!')
            history.push('/login')
        }
    }


    return (

       <div className='restaurant-card'>
           <Divider horizontal></Divider>
           
            <Card id='card-info'>
                <img id='card-img' src={od_img1} wrapped ui={false} onClick={handleShowDetails} />
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>
                        <span>
                            <Rating disabled icon='heart' maxRating={money}  />
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        <a>
                            <Icon name='map marker alternate'/>{address}
                        </a>
                    </Card.Description>
                    
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='utensils' />
                        {cuisine}
                    </a>
                </Card.Content>
            </Card>
            
        </div>
    
       
  );
}
    
    export default Restaurant;



    // <div className='card'>
    //     <div className='card-info'> 
    //         <img className="image" src={od_img1} alt={name} />
    //         <br></br>
    //         <h2> {name}</h2>
    //         <p>{cuisine}</p>
    //         <p>{money}</p>
    //         <p>{address}</p>
    //         <br></br>
    //         <button onClick={handleShowDetails}>Show Details</button>
    //     </div>
    // </div>