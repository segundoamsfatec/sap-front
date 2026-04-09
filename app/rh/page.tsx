import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, UserPlus, Filter, Mail, Phone, MoreHorizontal } from "lucide-react"

const employees = [
  { id: "EMP-101", name: "Ana Martins", role: "Coord. Operacional", status: "Em Turno", email: "ana.m@port.com", avatar: "AM" },
  { id: "EMP-102", name: "Ricardo Santos", role: "Op. Guindaste", status: "Em Turno", email: "ricardo.s@port.com", avatar: "RS" },
  { id: "EMP-103", name: "Juliana Lima", role: "Analista Logísticos", status: "Folga", email: "juliana.l@port.com", avatar: "JL" },
  { id: "EMP-104", name: "Marcos Oliveira", role: "Segurança do Trabalho", status: "Treinamento", email: "marcos.o@port.com", avatar: "MO" },
  { id: "EMP-105", name: "Roberto Costa", role: "Técnico de Manutenção", status: "Afastado", email: "roberto.c@port.com", avatar: "RC" },
]

export default function HRPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Recursos Humanos</h1>
          <p className="text-muted-foreground">Gestão de pessoal, turnos e certificações operacionais.</p>
        </div>
        <Button className="bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900">
          <UserPlus className="mr-2 size-4" /> Adicionar Colaborador
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: "Total de Colaboradores", value: "342" },
          { label: "Ativos Agora", value: "156" },
          { label: "Em Treinamento", value: "12" },
          { label: "Certificações Vencendo", value: "05" },
        ].map((stat) => (
          <Card key={stat.label} className="border-none shadow-sm bg-zinc-50 dark:bg-zinc-900">
            <CardContent className="p-4">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Buscar colaborador..." className="pl-9 h-10 border-zinc-200" />
        </div>
        <Button variant="outline" className="h-10">
          <Filter className="mr-2 size-4" /> Todos os Departamentos
        </Button>
      </div>

      <Card className="border-none shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Colaborador</TableHead>
                <TableHead>Cargo/Função</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((emp) => (
                <TableRow key={emp.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8 border">
                        <AvatarFallback className="text-xs bg-zinc-100 dark:bg-zinc-800">{emp.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">{emp.name}</span>
                        <span className="text-xs text-muted-foreground">{emp.id}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm font-medium">{emp.role}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        emp.status === "Em Turno" ? "default" : 
                        emp.status === "Folga" ? "secondary" : 
                        emp.status === "Treinamento" ? "secondary" : "destructive"
                      }
                      className="font-normal"
                    >
                      {emp.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="size-4 cursor-pointer hover:text-foreground transition-colors" />
                      <Phone className="size-4 cursor-pointer hover:text-foreground transition-colors" />
                    </div>
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
