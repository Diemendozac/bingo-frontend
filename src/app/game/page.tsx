'use client'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/ui-components"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/ui-components"
import { Progress } from "@/components/ui/progress"

type BingoNumber = {
  number: number
  marked: boolean
}

export default function BingoGame() {
  const [currentNumber, setCurrentNumber] = useState<number | null>(null)
  const [card, setCard] = useState<BingoNumber[]>([])
  const [timeLeft, setTimeLeft] = useState(10) // 10 segundos para cada número

  useEffect(() => {
    // Simular la obtención del cartón desde la API
    const fetchCard = async () => {
      // Aquí iría la llamada real a la API
      const numbers = Array.from({ length: 75 }, (_, i) => i + 1)
      const shuffled = numbers.sort(() => Math.random() - 0.5).slice(0, 25)
      setCard(shuffled.map(number => ({ number, marked: false })))
    }
    fetchCard()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          const newNumber = Math.floor(Math.random() * 75) + 1
          setCurrentNumber(newNumber)
          return 10 // Reiniciar el temporizador
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function markNumber(index: number) {
    const newCard = [...card]
    newCard[index].marked = !newCard[index].marked
    setCard(newCard)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Bingo Multijugador</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Tu Cartón de Bingo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-2">
                {card.map((cell, index) => (
                  <Button
                    key={index}
                    className={`h-12 ${cell.marked ? 'bg-green-500 hover:bg-green-600' : ''}`}
                    onClick={() => markNumber(index)}
                  >
                    {cell.number}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Panel de Control</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">Número Actual</h2>
                <div className="text-6xl font-bold">{currentNumber || '-'}</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Próximo número en:</span>
                  <span>{timeLeft} segundos</span>
                </div>
                <Progress value={(10 - timeLeft) * 10} />
              </div>
              <Button className="w-full">
                ¡BINGO!
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}