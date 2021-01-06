import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://images.unsplash.com/photo-1609694923332-ac96287d7203?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}
          fotoPost={'https://picsum.photos/id/1025/200/150'}
        />

        <Post
          nomeUsuario={'maria'}
          fotoUsuario={'https://images.unsplash.com/photo-1609357912334-e96886c0212b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'}
          fotoPost={'https://picsum.photos/id/1011/200/150'}
        />

        <Post
          nomeUsuario={'joão'}
          fotoUsuario={'https://images.unsplash.com/photo-1600460504119-fa5c1a6dd966?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'}
          fotoPost={'https://picsum.photos/id/1015/200/150'}
        />
      </div>
    );
  }
}

export default App;
