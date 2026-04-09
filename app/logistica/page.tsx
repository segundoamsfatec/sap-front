import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react"

const queue = [
  { id: "LOG-001", time: "14:30", type: "Expedição", carrier: "TransBrás", vehicle: "ABC-1234", dock: "C-01", status: "Em Doca" },
  { id: "LOG-002", time: "15:00", type: "Recebimento", carrier: "LogiSud", vehicle: "XYZ-9988", dock: "A-04", status: "Aguardando" },
  { id: "LOG-003", time: "15:15", type: "Expedição", carrier: "PortCargo", vehicle: "KJH-5522", dock: "C-02", status: "Chamado" },
  { id: "LOG-004", time: "16:00", type: "Recebimento", carrier: "SwiftPort", vehicle: "LLP-0011", dock: "A-05", status: "Agendado" },
]

export default function LogisticsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Fluxo Logístico</h1>
        <p className="text-muted-foreground">Agendamentos, fluxo de docas e prioridades operacionais.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-none shadow-sm bg-zinc-50 dark:bg-zinc-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tempo Médio de Espera</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24 min</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <CheckCircle2 className="size-3 text-emerald-500" /> Dentro da meta
            </p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-zinc-50 dark:bg-zinc-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Docas Ocupadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18 / 24</div>
            <p className="text-xs text-muted-foreground mt-1">75% da capacidade total</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-zinc-50 dark:bg-zinc-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Alertas de Atraso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">02</div>
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="size-3" /> Requer atenção imediata
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Fila de Atendimento</CardTitle>
            <CardDescription>Acompanhamento de entrada e saída de veículos.</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="h-9">
              <Calendar className="mr-2 size-4" /> Ver Agenda
            </Button>
            <Button size="sm" className="h-9 bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900">
              Próximo da Fila
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Horário</TableHead>
                <TableHead>Operação</TableHead>
                <TableHead>Transportadora</TableHead>
                <TableHead>Placa</TableHead>
                <TableHead>Doca</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {queue.map((item) => (
                <TableRow key={item.id} className="cursor-pointer">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="size-3 text-muted-foreground" />
                      {item.time}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                       <ArrowRight className="size-3 text-muted-foreground" />
                       {item.type}
                    </div>
                  </TableCell>
                  <TableCell>{item.carrier}</TableCell>
                  <TableCell className="font-mono text-xs">{item.vehicle}</TableCell>
                  <TableCell className="font-medium">{item.dock}</TableCell>
                  <TableCell className="text-right">
                    <Badge 
                      variant={
                        item.status === "Em Doca" ? "default" : 
                        item.status === "Chamado" ? "secondary" : 
                        item.status === "Aguardando" ? "outline" : "outline"
                      }
                      className="font-normal"
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
