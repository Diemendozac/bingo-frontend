'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/ui-components"
import { Input } from "@/components/ui/ui-components"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/ui-components"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function HomePage() {
  const [gameId, setGameId] = useState('')
  const [isWaiting, setIsWaiting] = useState(false)

  const handleStartGame = () => {
    setIsWaiting(true)
    // Aquí iría la lógica para iniciar un nuevo juego
  }

  const handleJoinGame = () => {
    // Aquí iría la lógica para unirse a un juego existente
    console.log('Unirse al juego con ID:', gameId)
  }

  if (isWaiting) {
    return <WaitingRoom />
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Bingo Multijugador</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full text-lg py-6" onClick={handleStartGame}>
            Iniciar Nuevo Juego
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full text-lg py-6">
                Ingresar a un Juego
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Ingresar a un Juego</DialogTitle>
                <DialogDescription>
                  Ingresa el ID del juego al que quieres unirte.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Input
                  id="gameId"
                  value={gameId}
                  onChange={(e) => setGameId(e.target.value)}
                  placeholder="ID del juego"
                />
                <Button onClick={handleJoinGame}>Unirse al Juego</Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  )
}

function WaitingRoom() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Esperando Jugadores</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-lg">
            Esperando a que se conecten otros jugadores...
          </p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}