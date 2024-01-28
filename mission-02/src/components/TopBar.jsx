
import search from '../assets/search.svg';
import './TopBar.css';

function SearchBar() {
  return (
    <form action="/" className="search-container">
      <label htmlFor="search-input" className="sr-only">검색</label>
      <input type="text" placeholder="검색" id="search-input"/>
      <button>
        <img src={search} alt="돋보기" />
      </button>
    </form>
  )
}

function Category() {
  return (
    <div className="category-container">
      <button>전체</button>
      <button>같이해요</button>
      <button>질의응답</button>
    </div>
  )
}

export default function TopBar() {
  return (
    <>
      <SearchBar />
      <Category />
    </>
  )
}