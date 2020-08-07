1. sinus wave
2. spiral design
   #. örnek kod -> https://stackblitz.com/edit/react-pixi-with-redux-example?file=components%2FButtonGroup.js

medium makale tips

1. https://www.wordstream.com/blog/ws/2016/07/19/medium-optimization-tips

export const recursiveArr = {
object: {
object: {},
position: { x: 15, y: 15 }
},
position: { x: 15, y: 150 }
};

https://codepen.io/SkuliOskarsson/pen/ZbJKVW?editors=0010
https://stackoverflow.com/questions/37440408/how-to-detect-esc-key-press-in-react-and-how-to-handle-it/46123962

1 - tıklandığı anki konum(character.position) ve tıklamayı bıraktığı anki konumları farkını bir değişkende tut. [+]
2 - Bu 2 sayı farkına göre pointerupoutside sağlandığında tam zıttı yöne doğru characteri fırlatsın (positon değişsin) [+] fix
3 - Eğer vurursa score artsın ve target resmi değişsin, vuramazsa ...

THROW_CHAR
MOVE_START (pos) + eklenecek
MOVE_END (newPos)
HIT_SUCCESS OR HIT_FAILED
