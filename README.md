# 🧮 Calcgotchi

Uma calculadora com personalidade!  
A **Calcgotchi** é uma calculadora fofa que expressa emoções com base no resultado da operação.  
Desenvolvida como forma de explorar lógica de programação e desenhar no `<canvas>` com JavaScript.

![preview da calcgotchi]([assets/preview.gif](https://calcgotchi.vercel.app/))

---

## 💡 Funcionalidades

- Realiza operações básicas: soma, subtração, multiplicação e divisão.
- Mostra expressões faciais diferentes com base no resultado:
  - 😊 Positivo → rostinho feliz
  - 😐 Zero → rostinho neutro
  - 😢 Negativo → rostinho triste
  - ❌ Erro → carinha bugada
- Layout estilizado e centralizado.
- Interface divertida com visual retrô.

---

## 🧙‍♀️ Explorando o Canvas

O destaque do projeto é o uso do **Canvas 2D** para desenhar rostos interativos. A função `desenharRosto()` usa comandos como `arc()`, `lineTo()` e `fill()` para criar expressões diferentes.

### Exemplo:

```javascript
ctx.arc(125, 65, 25, 0, Math.PI, false); // boca feliz
