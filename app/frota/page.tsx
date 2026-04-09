import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Filter, MoreHorizontal, Ship, Truck, Anchor } from "lucide-react"

const fleet = [
  { id: "SH-001", name: "Oceanic Star", type: "Navio Cargueiro", status: "Em Porto", capacity: "12,000 TEU", arrival: "08/04 14:00" },
  { id: "SH-002", name: "Sea Breeze", type: "Petroleiro", status: "Aguardando", capacity: "80,000 DWT", arrival: "09/04 06:15" },
  { id: "TR-102", name: "Volvo FH 540", type: "Caminhão Pesado", status: "Em Trânsito", driver: "Carlos Silva", location: "Setor Norte" },
  { id: "TR-105", name: "Scania R 450", type: "Caminhão Pesado", status: "Manutenção", driver: "-", location: "Oficina Central" },
  { id: "CR-012", name: "Liebherr LTM", type: "Guindaste Móvel", status: "Operacional", capacity: "500t", operator: "João Souza" },
]

export default function FleetPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Frota e Equipamentos</h1>
          <p className="text-muted-foreground">Gerenciamento de veículos, navios e maquinário pesado.</p>
        </div>
        <Button className="bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900">
          <Plus className="mr-2 size-4" /> Registrar Ativo
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Buscar ativo ou ID..." className="pl-9 h-10 border-zinc-200" />
        </div>
        <Button variant="outline" className="h-10">
          <Filter className="mr-2 size-4" /> Filtros
        </Button>
      </div>

      <Card className="border-none shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Nome/Modelo</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Detalhes Operacionais</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fleet.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-mono text-xs font-medium">{item.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-zinc-100 flex items-center justify-center dark:bg-zinc-800">
                        {item.type.includes("Navio") ? <Ship className="size-4" /> : item.type.includes("Caminhão") ? <Truck className="size-4" /> : <Anchor className="size-4" />}
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{item.type}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        item.status === "Em Porto" || item.status === "Operacional" ? "default" : 
                        item.status === "Manutenção" ? "destructive" : "secondary"
                      }
                      className="font-normal"
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">
                    {item.capacity && <span className="text-muted-foreground">Capacidade: {item.capacity}</span>}
                    {item.driver && <span className="text-muted-foreground">Condutor: {item.driver}</span>}
                    {item.operator && <span className="text-muted-foreground">Operador: {item.operator}</span>}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="size-4" />
                    </Button>
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
