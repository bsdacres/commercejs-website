import  styles from './styles.module.css'


export default function CollectionsPreview(props){
  return(
    <div class={styles.collections} style={{'background-image': `url(${props.background})`}}>
      <h1>
        {props.title}
      </h1>
    </div>
  )
}