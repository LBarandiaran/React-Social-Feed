import './DisplayPosts.css'

const DisplayPosts  = (props) => {
    return (
      <div>
       
          
        <div>
        {props.parentPosts.map((post, index) => {
          return (
          <div key={index}>
            <div>{post.name}</div>
            <div>{post.post}</div>
          </div>
          );
        })}        
        </div>
      </div>
    );
}
 
export default DisplayPosts;