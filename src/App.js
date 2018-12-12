import React, {Component} from 'react';
import Post from './components/post';
import PostCreator from './components/postCreator';

const postArray = [
  {
    content: 'asdasdasdasd',
    time: '16:23',
    author: 'Baraky',
    initialLikes: 2
  },{
    content: 'Texto do novo post',
    time: '12:13',
    author: 'Baraky',
    initialLikes: 0
  }
]

class App extends Component { 
    constructor(){
      super();
      this.state = {
        posts: postArray
      }
    }

    insertPost(post){
      const myPosts = this.state.posts;
      myPosts.push(post);
      this.setState({posts: myPosts});
    }

    render(){
      return(
        <div>
          <h1>Minha rede social</h1>
          <PostCreator onCreate={this.insertPost.bind(this)} />
        
          {this.state.posts.map((post,i) => {
            return (
              <Post key={i} post={post}/>
            )
          })}
      
        </div>
      )
    }
}

export default App;