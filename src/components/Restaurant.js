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
  
    const moneyIcons = [...Array(money)].map((e, i) => <span key={i}>$</span>)

    return (

       <div className='restaurant-card'>
           <Divider horizontal></Divider>
           
            <Card id='card-info' style={{borderColor:'#71ACB2'}}>
                <img id='card-img' src={od_img1} wrapped ui={false} onClick={handleShowDetails} />
                <Card.Content>
                    <Card.Header style={{fontFamily:'Simonetta', color:'#71ACB2'}}>{name}</Card.Header>
                    <Card.Meta>
                        <span>
                            {moneyIcons}
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
