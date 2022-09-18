
const DisplayPosts  = (props) => {
    return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Post</th>            
        </tr>
        </thead>
        <tbody>
        {posts.map((post) => {
          return (
          <tr>
            <td>{entry.name}</td>
            <td>{entry.post}</td>
          </tr>
          );
        })}        
        </tbody>
      </table>
    );
}
 
export default DisplayPosts;