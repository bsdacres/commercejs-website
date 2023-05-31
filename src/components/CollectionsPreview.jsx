import  styles from './styles.module.css'


export default function CollectionsPreview(props){
  return(
    <div class={styles.collections} style={{'background-image': `linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0)), url(${props.background})`}}>
        <h1>
          {props.title}
<<<<<<< HEAD
          <a>Expore the Collection</a>
=======
>>>>>>> 4e15d29344ed1b3b45edb73481549dc785737a19
        </h1>
    </div>
  )
}