import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Box, MapPin, Thermometer } from "lucide-react"

const containers = [
  { id: "MSCU-882910-1", type: "Standard 40'", zone: "A-1", block: "12", status: "Importação", cargo: "Eletrônicos" },
  { id: "HLCU-102933-4", type: "Reefer 20'", zone: "REEF-1", block: "04", status: "Exportação", cargo: "Frutas", temp: "-18°C" },
  { id: "MAEU-772109-0", type: "Open Top 40'", zone: "B-2", block: "22", status: "Vazio", cargo: "-" },
  { id: "ZIMU-441029-2", type: "Standard 20'", zone: "A-4", block: "08", status: "Transbordo", cargo: "Têxteis" },
  { id: "COSU-123456-7", type: "Standard 40'", zone: "A-1", block: "15", status: "Importação", cargo: "Peças Automotivas" },
]

export default function ContainersPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Inventário de Containers</h1>
        <p className="text-muted-foreground">Localização e status de todas as unidades no pátio.</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Buscar por número do container..." className="pl-9 h-10 border-zinc-200" />
        </div>
        <Button variant="outline" className="h-10">
          <Filter className="mr-2 size-4" /> Tipo de Carga
        </Button>
      </div>

      <Card className="border-none shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Identificação</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Carga</TableHead>
                <TableHead className="text-right">Sensores</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {containers.map((container) => (
                <TableRow key={container.id}>
                  <TableCell className="font-mono font-medium">{container.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Box className="size-4 text-muted-foreground" />
                      {container.type}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-3 text-muted-foreground" />
                      <span className="text-sm">Zona {container.zone}, Bloco {container.block}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={container.status === "Vazio" ? "outline" : "secondary"} className="font-normal capitalize">
                      {container.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm font-medium">{container.cargo}</TableCell>
                  <TableCell className="text-right">
                    {container.temp ? (
                      <div className="flex items-center justify-end gap-1 text-blue-500 font-medium text-xs">
                        <Thermometer className="size-3" />
                        {container.temp}
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">-</span>
                    )}
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
