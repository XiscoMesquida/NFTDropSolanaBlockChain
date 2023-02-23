import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image src='https://upload.wikimedia.org/wikipedia/commons/5/5d/Leliel_Neon_Genesis_Evangelion.png' width={60} height={60} layout='fixed' />
    </div>
  )
}

export default Logo
