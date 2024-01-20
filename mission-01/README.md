# React API로 페이지 일부 구현해보기
이번 과제로 저는 저희 조가 구현한 프로젝트의 페이지 일부를 리액트로 렌더링해보려고 했습니다. 구현해보려고 했던 인터페이스는 데어터베이스에서 가져온 데이터를 렌더링 해주는 기능을 리액트로 구현하는 것이었습니다.

<img src="https://github.com/dldnlee/react-homework/assets/83799987/1f1dbe86-aaf3-407d-b680-f96fb8e28b0f" width="250px">
<br>
빨간색으로 표시한 부분 안에 있는 게시물들을 리액트 컴포넌트로 나누어서 렌더링 해보는 것이 저희 목표였습니다. 

## 개발 환경
저는 옛날에 리액트를 아주 조금 학습하게 되어서, `npx create-react-app mission-01`으로 리액트 개발 환경을 구축했습니다.
추가적으로 tailwind을 사용하는 것을 선호하고 한 페이지에 모든 것을 작업할 수 있도록 tailwind를 사용했습니다.
다음으로 컴포넌트를 만들기 위해 `components`라는 폴더를 만들었고, 근 안에 `Post.js`라는 파일을 만들었습니다.


## 개발 과정
### 1. 재사용 가능한 컴포넌트 만들기
재사용이 가능한 컴포넌트를 만들기 위해 `Post.js`파일 안에는 오직 하나의 게시물 안에 들어갈 내용만 추가 했습니다.
그리고 사용자한테 보일 게시글에 들어갈 내용과 스타일링을 추가해줬습니다.

Post.js
```
export default function Post(props) {
  return(
    <div className="flex flex-col justify-center items-center">
      <img src={props.image} alt={props.altText} className="h-[70px] w-[100px]"/>
      <p className="text-sm">{props.postTitle}</p>
      <p className="text-xs">{props.category} | {props.author}</p>
    </div>
  )
}
```
### 2. 만든 컴포넌트가 잘 작동하는지 확인하기
구현한 컴포넌트를 불러왔을 때 잘 렌더링 되는지 확인하기 위해 `App.js`에서 import를 한 후에 렌더링을 해봤습니다.
```
function App() {
  return (
    <div className="App max-w-[260px] grid grid-cols-2 gap-[10px] px-2 py-2">
      <Post
        image={PostImage}
        postTitle="안녕 난 이은원이야"
        category="JSX"
        author="이은원"
      />
    </div>
  );
}
```
이렇게 props로 들어가야할 항목들을 입력해준 다음에 렌더링 해본 결과:
<img src="https://github.com/dldnlee/react-homework/assets/83799987/6c68c437-f578-4841-81e2-d1533861bada" width="50px">
