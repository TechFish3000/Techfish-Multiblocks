
//var positions = [[-1, 2],[0, 2],[1, 2],[-2, 1],[-1, 1],[0, 1],[1, 1],[2, 1],[-2, 0],[-1, 0],[1, 0],[2, 0],[-2, -1],[-1, -1],[0, -1],[1, -1],[2, -1],[-1, -2],[0, -2],[1, -2]]
//var duo = Vars.content.getByName(ContentType.block, "duo")
var dict = {}
var time = 0
var mg_reload = 15
const trryt = extendContent(ItemTurret, "minigun", {

    init(){
        this.super$init()
        print("loaded")
    },
    load(){
        this.super$load()
        dict = {}
    },
    update(tile){
        
        if (dict[tile] == null){
            dict[tile] = [0, 0]
        }
        print("---")
        for (var property in dict) {
            print(property.toString() + " + " + dict[property].toString())
        }
        print("###")
        print(Time.delta())
        print(tile.ent().reload)
        
        print(dict[tile][0])
        print("###")
        // dict keys are the tiles
        // dict [0] is the speedup
        // dict [1] is the time, for comparison

        this.super$update(tile)
        dict[tile][1] += 1

        if (Time.delta() - tile.ent().reload <= 0.8 && dict[tile][0] < 13){
            dict[tile][0] += 1
            
            //tile.ent().reload = 0
        }
        if (tile.ent().reload >= mg_reload - dict[tile][0]){
            tile.ent().reload = mg_reload
        }
        if (dict[tile][1] % 10 == 0 && dict[tile][0] > 0){
            dict[tile][0] -= 1
        }
        //if (tile.ent().shotCounter > dict[tile][0] && tile.ent().reloadTime > 1 && tile.ent().reload > tile.block().reloadTime - dict[tile][2]){
        //    dict[tile][0] += 1
        //     dict[tile][2] += 1
        //     tile.ent().reload = 0
        // }
        // if (dict[tile][1] % 20 == 0 && tile.ent().reloadTime < 20){
        //     tile.ent().reloadTime += 1
        // }
        
    }


}
)
//trryt.update = true;