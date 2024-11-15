
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';

class WebSocketService {
  private socket: Socket;
  public message$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
    this.socket = io('http://localhost:8000');  // Reemplaza con la URL de tu backend
    this.socket.on('connect', () => console.log('Connected to WebSocket'));
    this.socket.on('gameState', (message: string) => this.message$.next(message));
  }

  public emit(event: string, data: JSON) {
    this.socket.emit(event, data);
  }

  public disconnect() {
    this.socket.disconnect();
  }
}

export default new WebSocketService();
