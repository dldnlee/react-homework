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
제가 필요한 컴포넌트는 아토믹 디자인을 고려해서, 유기체 컴포넌트를 2개(TopBar, Posts) 만들고, 각 컴포넌트 안에서 분자를 구현해서 내부적으로 사용하기로 결정 했습니다.

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

<img src="https://github.com/dldnlee/react-homework/assets/83799987/b189b5f4-3ef7-4a25-a555-70fd614897fe" width="250px">


### Posts.jsx
Post.jsx는 내부에 각 게시물의 템플릿의 마크업을 구현한 Post 컴포넌트가 있고 Posts 컴포넌트는 게시물들을 담고 있는 컨테이너 역할을 해줍니다.

#### 동적 렌더링 전 코드:
```
function Post() {
  return (
    <button type="button" className='post-instance'>
      <div className='post-badge'>질의응답</div>
      <h2 className='post-title'>안녕하세요</h2>
      <p className='post-content'>안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요</p>
      <p className='post-location'>연남동</p>
    </button>
  )
}

export default function Posts() { 
  return (
    <div className="post-container">
      {posts}
    </div>
  )
}
```
<img src="https://github.com/dldnlee/react-homework/assets/83799987/aae38417-0f5f-48fa-a514-54b36ea4ce23" width="250px" >

### props로 동적 렌더링 및 리스트 렌더링
Post 컴포넌트의 매개변수로 props를 사용해서 동적 렌더링 기능을 추가 했습니다. 
```
function Post(props) {
  return (
    <button type="button" className='post-instance'>
      <div className='post-badge'>{props.category}</div>
      <h2 className='post-title'>{props.title.length > 20 ? props.content.slice(0, 20) + "..." : props.title}</h2>
      <p className='post-content'>{props.content.length > 30 ? props.content.slice(0, 30) + "..." : props.content}</p>
      <p className='post-location'>{props.location}</p>
    </button>
  )
}
```

#### 리스트 렌더링
데이터 파일에서 데이터를 불러오고 `.map()`메서드로 Post props에 값을 할당 해줬습니다.
```
const posts = postData.map(post => {
  return (
    <Post
      key={post.id}
      {...post}
    />
  )
})
```
마지막으로 새로 만든 리스트를 Posts 컴포넌트 안에 넣어줘서 마크업을 완료했습니다.
```
export default function Posts() { 
  return (
    <div className="post-container">
      {posts}
    </div>
  )
}
```
<br>
<img src="https://github.com/dldnlee/react-homework/assets/83799987/c9aed924-3270-45d4-8393-b6a6c90a311f" width="250px">


## Conclusion
이번에 선택한 게시물 페이지 동적 렌더링을 위한 마크업과 구현하는데만 거의 하루 정도 걸렸던 기억이 있는데, 경험을 통해 작동원리를 이해하고 리액트라는 편리한 도구를 사용하니 2시간도 안 걸려서 조금 허무하면서도 너무 행복했습니다!! 
바닐라 프로젝트가 노가다였다는 생각이 들었지만, 자바스크립트라는 언어에 대한 이해도가 높아졌다는게 확실히 느껴졌습니다.

