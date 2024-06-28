"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveBar } from "@nivo/bar"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen overflow-x-hidden max-w-screen">
      <aside className="hidden sm:flex flex-col items-center w-20 p-4 space-y-4 bg-gray-100">
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>VO</AvatarFallback>
        </Avatar>
        <nav className="flex flex-col space-y-4">
          <HomeIcon className="w-6 h-6 text-gray-600" />
          <GitGraphIcon className="w-6 h-6 text-gray-600" />
          <BellIcon className="w-6 h-6 text-gray-600" />
          <SettingsIcon className="w-6 h-6 text-gray-600" />
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-white">
        <header className="flex items-center justify-between pb-4 border-b">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>VO</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 p-0">
              <h1 className="text-lg font-bold mb-0">Vitor Oliveira</h1>
              <p className="text-sm text-gray-500 mt-0">Administrador</p>
            </div>
          </div>
          <Button variant="outline">Nova Automação</Button>
        </header>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Button variant="outline">Dia</Button>
            <Button variant="outline">Semana</Button>
            <Button variant="outline">Mês</Button>
            <Button variant="outline" className="flex sm:hidden">Período</Button>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <Input type="date" placeholder="from Jan 1, 2022" />
            <Input type="date" placeholder="to Dec 31, 2022" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
          <Card className="bg-purple-600 text-white max-w-full sm:max-w-full">
            <CardHeader>
              <CardTitle>Total</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Caixa</p>
              <h2 className="text-2xl font-bold">R$ 153,655</h2>
              <p className="text-sm">12%</p>
              <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="text-sm ">
                  <p>Depósitos</p>
                  <p>R$ 321,549</p>
                  <p>43</p>
                </div>
                <div className="text-sm ">
                  <p>Saques</p>
                  <p>R$ 167,839</p>
                  <p>15%</p>
                </div>
                <div className="text-sm ">
                  <p>Transações</p>
                  <p>R$ 489,388</p>
                  <p>12%</p>
                </div>
                <div className="text-sm ">
                  <p>Taxas</p>
                  <p>R$ 8,656</p>
                  <p>12%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          {[
            "PayBrokers - Green",
            "PayBrokers - Heds",
            "PrimePag - PixTrade",
            "Pagfast - Green",
            "AnSpace - BetMillion",
            "AnSpace - O Sortudo",
            "AnSpace - Heads",
          ].map((title) => (
            <Card key={title} className="max-w-full">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Caixa</p>
                <h2 className="text-2xl font-bold">R$ 153,655</h2>
                <p className="text-sm">12%</p>
                <div className="grid grid-cols-2 gap-4 pt-3">
                  <div>
                    <p>Depósitos</p>
                    <p>R$ 321,549</p>
                    <p>43</p>
                  </div>
                  <div>
                    <p>Saques</p>
                    <p>R$ 167,839</p>
                    <p>15%</p>
                  </div>
                  <div>
                    <p>Transações</p>
                    <p>R$ 489,388</p>
                    <p>12%</p>
                  </div>
                  <div>
                    <p>Taxas</p>
                    <p>R$ 8,656</p>
                    <p>12%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-full">
          <Card className="p-2 max-w-full">
            <CardContent>
              <PieChart className="w-full h-64" />
            </CardContent>
          </Card>
          <Card className="pt-6 mmax-w-full"> 
            <CardContent>
              <BarChart className="w-full h-64" />
            </CardContent>
          </Card>
          <Card className="pt-6 max-w-full">
            <CardContent>
              <BarChart className="w-full h-64" />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function GitGraphIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function PieChart(props: any) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}