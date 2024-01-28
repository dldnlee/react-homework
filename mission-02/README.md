# 리액트로 동적 렌더링 해보기
바닐라 프로젝트에서 동적으로 렌더링 했던 조각을 리액트를 사용해서 마크업 하는 작업을 해봤습니다.
제가 선택한 동적 렌더링 조각은 게시물 페이지였습니다. <br>
<img src="https://github.com/dldnlee/react-homework/assets/83799987/b24ed66d-99ac-41ce-bd08-dee1106ffbfc" width="250px" />
<br>
데이터베이스에서 기록을 가져와서, 게시물이 템플릿에 맞게 렌더링되는 기능입니다.


## Scaffolding
가장 먼저 기본적인 환경 구성을 빠르게할 수 있게, `npm create vite@latest`를 사용해서 vite기반 리액트 환경을 설정했습니다.
필요없는 파일들은 삭제하고 구분이 필요할 만한 폴더를 만들었습니다. <br>
<img src="https://github.com/dldnlee/react-homework/assets/83799987/9e23fd43-8db6-4c8d-8de9-5b2779426460" width="150px">


## Components
제가 필요한 컴포넌트는 아토믹 디자인을 고려해서, 유기체 컴포넌트를 2개 만들고, 각 컴포넌트 안에서 분자를 구현해서 내부적으로 사용하기로 결정 했습니다.

### TopBar.jsx
가장 먼저 앱의 상단에 있는 검색 필드랑 원하는 카테고리를 선택할 수 있는 버튼 집합을 구현했습니다.

전체적인 구조는 TopBar 안에 Search랑 Category가 들어가도록 구현했습니다.
```
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
```
Category랑 SearchBar는 다른 곳에 사용할 필요 없다고 생각해서 내보내지 않고 그냥 TopBar.jsx안에서 사용될 수 있게끔 구현하고 App.jsx에서 TopBar.jsx를 불러와서 렌더링 했습니다.

