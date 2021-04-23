namespace SpriteKind {
    export const c = SpriteKind.create()
}
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let notec = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 7 7 7 7 7 7 2 . . . . . 
    . . . 2 7 4 4 4 4 7 2 . . . . . 
    . . . 2 7 4 2 4 4 7 2 . . . . . 
    . . . 2 7 4 5 2 4 7 2 . . . . . 
    . . . 2 4 4 2 5 4 7 2 . . . . . 
    . . . 2 7 7 7 4 4 7 2 . . . . . 
    . . . 2 7 4 4 4 7 7 2 . . . . . 
    . . . 2 7 7 7 7 7 7 2 . . . . . 
    . . . 2 7 7 7 7 7 7 2 . . . . . 
    . . . 2 7 7 7 7 7 7 2 . . . . . 
    . . . 2 7 7 7 7 7 7 2 . . . . . 
    . . . 2 7 7 7 7 7 7 2 . . . . . 
    . . . 2 7 7 7 7 7 7 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.c)
tiles.placeOnTile(notec, tiles.getTileLocation(1, 1))
notec = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 7 7 7 7 7 7 2 . . . . . 
    . . . 2 7 4 4 4 4 7 2 . . . . . 
    . . . 2 7 4 2 4 4 7 2 . . . . . 
    . . . 2 7 4 5 2 4 7 2 . . . . . 
    . . . 2 4 4 2 5 4 7 2 . . . . . 
    . . . 2 7 7 7 4 4 7 2 . . . . . 
    . . . 2 7 4 4 4 7 7 2 . . . . . 
    . . . 2 7 7 7 7 7 7 2 . . . . . 
    . . . 2 7 7 7 7 7 7 2 . . . . . 
    . . . 2 7 7 7 7 7 7 2 . . . . . 
    . . . 2 7 7 7 7 7 7 2 . . . . . 
    . . . 2 7 7 7 7 7 7 2 . . . . . 
    . . . 2 7 7 7 7 7 7 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.c)
tiles.placeOnTile(notec, tiles.getTileLocation(1, 1))
