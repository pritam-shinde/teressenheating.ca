export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/boiler-repair/',
      permanent: true,
    },
  }
}

const BoilersRepairRedirect = () => null

export default BoilersRepairRedirect
