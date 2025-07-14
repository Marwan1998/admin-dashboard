import { Header } from "components"

const dashboard = () => {
  const user = {name: 'Marwan'};
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? 'Guest'} 👋`}
        description="Track activity, trends and popular destinations in real time"  
      />

      dashboard content
      
    </main>
  )
}

export default dashboard