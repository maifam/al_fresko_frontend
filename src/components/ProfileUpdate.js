import {Segment, Header, Form, Button, Divider} from 'semantic-ui-react';
import {useState} from 'react';
import{useHistory} from 'react-router-dom';

function ProfileUpdate({ user, setCurrentUser, setOpen}) {

    console.log(user)

    const [name, setName] = useState(user.name)
    const [image, setImage] = useState(user.image_url)
    const [errors, setErrors] = useState([])
    const history = useHistory();

    function handleEditProfile(e){
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', name)
        formData.append('user_image', image)

        const token = localStorage.getItem('token')
        if (token) { 
            fetch(`https://enigmatic-island-27273.herokuapp.com/users/${user.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                }, 
                method: 'PATCH', 
                body: formData, 
                })
            .then((r) => r.json())
            .then((data) => {
                if (data.errors) {
                    setErrors(data.errors)
                }else{
                    setCurrentUser(data)
                    setOpen(false)
                }
            })
        }
    }

    return (

        <div className="edit-profile">
        
        <Segment>
          <Header as='h2' color='black' textAlign='center'>
          </Header>
          <Form onSubmit={handleEditProfile} >
              <Divider horizontal>Update your info</Divider>
              <input type='text' 
                    name='name'
                    value={name}
                    placeholder={user.name}
                    onChange={(e)=>setName(e.target.value)}
                />
              <input type='file'
                    name='image'
                    accept='image/png, image/jpeg, image/jpg'
                    multiple={false} 
                    onChange={(e) => setImage(e.target.files[0])}
                />
           
              <Button type='submit'>Update!</Button>
            
          </Form>
        </Segment>
      </div>

    )
}

export default ProfileUpdate;