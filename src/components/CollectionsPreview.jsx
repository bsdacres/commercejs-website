import  styles from './styles.module.css'


export default function CollectionsPreview(props){
  return(
    <div class={styles.collections} style={{'background-image': `linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0)), url(${props.background})`}}>
        <h1>
          {props.title}
          <a>Expore the Collection</a>
        </h1>
    </div>
  )
}