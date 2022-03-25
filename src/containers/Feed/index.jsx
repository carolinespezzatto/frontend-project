import Post from '../../components/smarts/Post'
import cat01 from '../../assets/cat-01.jpeg'
import cat02 from '../../assets/cat-02.jpeg'

function Feed() {
  return (
    <>
      <Post
        profile={{ name: 'gato.persa', picture: cat01 }}
        photo={cat01}
        description="Se alongando ao ar livre!"
        pastTime="12 dias atrás"
      />
      <Post
        profile={{ name: 'maine.coon', picture: cat02 }}
        photo={cat02}
        description="Dando uma volta para aquecer as patas."
        pastTime="15 dias atrás"
      />
    </>
  )
}

export default Feed
