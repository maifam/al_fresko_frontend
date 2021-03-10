import React, {useState} from 'react';
import BookmarkList from './BookmarkList';
import ProfileUpdate from './ProfileUpdate';
import { Modal, Button, Grid, Segment, FormInput } from 'semantic-ui-react';

function Profile({user, bookmarks, onRemoveBookmark, setCurrentUser}) {

    const myBookmarks = bookmarks.filter(bookmark => {
        if (bookmark.user_id == user.id) {
            return true
        }else {
            return null
        }
    })

    const [open, setOpen] = useState(false)
    console.log(user)

    return (
        <Segment raised style={{borderColor: '#71ACB2'}} >
            <Grid columns={2} >
                <Grid.Column>
                    <div className='profile-page'>
                        <h2 id='welcome-profile'> Welcome, {user.name}</h2>
                        <img className="profile-img" src={user.image_url} alt={user.username} />
                        <p><strong>username: </strong>{user.username}</p> 
                        <p><strong>member since: </strong>March 7, 2021</p> 
                        <p>
                            <Modal basic 
                                onClose={() => setOpen(false)}
                                onOpen={() => setOpen(true)}
                                open={open}
                                size='small'
                                trigger={<Button basic color='teal'>Edit Profile</Button>}>
                                    <ProfileUpdate user={user} setCurrentUser={setCurrentUser} setOpen={setOpen}/>
                            </Modal>
                        </p>
                       
                    </div>
                </Grid.Column>

                <Grid.Column>
                    <p>
                        <BookmarkList bookmarks={myBookmarks} onRemoveBookmark={onRemoveBookmark} currentUser={user}/>
                    </p>
                </Grid.Column>
            </Grid>
            
        </Segment>
        
       
    );
}
    
export default Profile;

// bookmarks={user.bookmarks}






{/* <div className='profile-page'>
            <h2> Welcome to your page, {user.name}</h2>
            <img className="profile-img" src={user.image} alt={user.username} />
            <p><strong>username: </strong>{user.username}</p> 

            <BookmarkList bookmarks={myBookmarks} onRemoveBookmark={onRemoveBookmark} currentUser={user}/>
           
        </div> */}