
'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/ui-components"
import { Input } from "@/components/ui/ui-components"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/ui-components"

export default function AuthComponent() {
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isLogin) {
      console.log('Intento de inicio de sesión con:', username, password)
    } else {
      console.log('Intento de registro con:', username, password)
    }
  }

  const toggleAuthMode = () => {
    setIsLogin(!isLogin)
    setUsername('')
    setPassword('')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Bingo Multijugador</CardTitle>
          <CardDescription className="text-center">
            {isLogin ? 'Inicia sesión para jugar' : 'Regístrate para empezar'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Nombre de usuario
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu nombre de usuario"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Contraseña
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" type="submit" onClick={handleSubmit}>
            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
          </Button>
          <Button className="w-full" onClick={toggleAuthMode}>
            {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}