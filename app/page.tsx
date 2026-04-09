import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Truck, Container, Ship, Users, ArrowUpRight, ArrowDownRight } from "lucide-react"

const stats = [
  {
    title: "Navios em Porto",
    value: "14",
    description: "+2 desde ontem",
    icon: Ship,
    trend: "up",
  },
  {
    title: "Containers Processados",
    value: "1,284",
    description: "+12% esta semana",
    icon: Container,
    trend: "up",
  },
  {
    title: "Frota Ativa",
    value: "42",
    description: "3 em manutenção",
    icon: Truck,
    trend: "down",
  },
  {
    title: "Pessoal em Turno",
    value: "156",
    description: "Turno A (Manhã)",
    icon: Users,
    trend: "neutral",
  },
]

const recentActivity = [
  { id: "OP-4921", type: "Descarga", container: "MSC-7721", status: "Concluído", time: "10m atrás" },
  { id: "OP-4922", type: "Carga", container: "HAP-1102", status: "Em progresso", time: "15m atrás" },
  { id: "OP-4923", type: "Inspeção", container: "MAERSK-992", status: "Aguardando", time: "22m atrás" },
  { id: "OP-4924", type: "Descarga", container: "ZIM-4482", status: "Concluído", time: "45m atrás" },
  { id: "OP-4925", type: "Carga", container: "COSCO-123", status: "Cancelado", time: "1h atrás" },
]

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral das operações portuárias em tempo real.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-none shadow-sm bg-zinc-50/50 dark:bg-zinc-900/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {stat.trend === "up" && <ArrowUpRight className="size-3 text-emerald-500" />}
                {stat.trend === "down" && <ArrowDownRight className="size-3 text-red-500" />}
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4 border-none shadow-sm">
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>Operações de containers nas últimas 24 horas.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Operação</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Container</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Tempo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivity.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell className="font-medium">{activity.id}</TableCell>
                    <TableCell>{activity.type}</TableCell>
                    <TableCell>{activity.container}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          activity.status === "Concluído" ? "default" : 
                          activity.status === "Em progresso" ? "secondary" : 
                          activity.status === "Cancelado" ? "destructive" : "outline"
                        }
                        className="font-normal"
                      >
                        {activity.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">{activity.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3 border-none shadow-sm">
          <CardHeader>
            <CardTitle>Ocupação do Pátio</CardTitle>
            <CardDescription>Distribuição de carga por setor.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: "Setor Norte (Alpha)", value: 85 },
                { label: "Setor Sul (Beta)", value: 42 },
                { label: "Armazém Central", value: 68 },
                { label: "Área de Refrigeração", value: 15 },
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>{item.label}</span>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <div 
                      className="h-full rounded-full bg-zinc-900 dark:bg-zinc-50" 
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
