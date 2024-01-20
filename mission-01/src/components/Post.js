export default function Post(props) {
  return(
    <div className="flex flex-col justify-center items-center">
      <img src={props.image} alt={props.altText} className="h-[70px] w-[100px]"/>
      <p className="text-sm">{props.postTitle}</p>
      <p className="text-xs">{props.category} | {props.author}</p>
    </div>
  )
}