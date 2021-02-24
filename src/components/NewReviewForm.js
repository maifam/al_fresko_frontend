function NewReviewForm() {

    return (
        
        <div>
            <h3> NewReviewForm </h3>
            <form>
                <label>
                    Content: 
                    <textarea type='textarea' name='content'/>
                </label>
                <input type='submit' value='submit'/>
            </form>
        </div>
       
    );
}
    
export default NewReviewForm;