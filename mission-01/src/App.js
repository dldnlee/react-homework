
import './App.css';
import Post from './components/Post';
import PostImage from './assets/postImage.avif';


const posts = [
  {
    image:PostImage,
    postTitle:"누군가 만든 것",
    category:"UI|UX",
    author:"이은원"
  },
  {
    image:PostImage,
    postTitle:"누군가 만든 것",
    category:"FrontEnd",
    author:"김종민"
  },
  {
    image:PostImage,
    postTitle:"누군가 만든 것",
    category:"Backend",
    author:"양희원"
  },
  {
    image:PostImage,
    postTitle:"누군가 만든 것",
    category:"Backend",
    author:"양희원"
  },
  {
    image:PostImage,
    postTitle:"누군가 만든 것",
    category:"Backend",
    author:"양희원"
  },
  {
    image:PostImage,
    postTitle:"누군가 만든 것",
    category:"Backend",
    author:"양희원"
  },
];

const jsxPosts = posts.map((item) => {
  return(
    <Post 
      image={item.image}
      postTitle={item.postTitle}
      category={item.category}
      author={item.author}
    />
  )
})  


function App() {
  return (
    <div className="App max-w-[260px] grid grid-cols-2 gap-[10px] px-2 py-2">
      {jsxPosts}
    </div>
  );
}


export default App;