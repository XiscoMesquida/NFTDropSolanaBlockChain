const styles = {
  wrapper: 'flex w-full items-center justify-center pt-16 lg:pt-20',
  container: 'space-y-10',
  heroTitle: 'xl:pr-40 text-7xl font-bold',
  heroParagraph: 'xl:pr-40',
  heroCta: 'flex items-center space-x-10',
  mintButton:
    'rounded-xl border border-gray-100 bg-transparent px-8 py-4 font-semibold text-gray-100 transition-all hover:bg-gray-100 hover:text-[#1d1d1d]',
}

const Hero = () => {

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>ArtEcho Strands</h1>
        <p className={styles.heroParagraph}>
          Next organic internet*
        </p>
        <p className={styles.heroParagraph}>
        For profane experience, on the contrary, spaceis
homogeneous and neutral; no break qualitatively differentiates the various parts of its mass. Geometrical space
can be cut and delimited in any direction; but no qualitative differentiation and, hence, no orientation are given
by virtue of its inherent structure. TEST.
        </p>
        

        <div className={styles.heroCta}>
        </div>
      </div>
    </main>
  )
}

export default Hero
