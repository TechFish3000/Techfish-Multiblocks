
var positions = [[-1, 2],[0, 2],[1, 2],[-2, 1],[-1, 1],[0, 1],[1, 1],[2, 1],[-2, 0],[-1, 0],[1, 0],[2, 0],[-2, -1],[-1, -1],[0, -1],[1, -1],[2, -1],[-1, -2],[0, -2],[1, -2]]
//var duo = Vars.content.getByName(ContentType.block, "duo")
const tower = extendContent(PowerGenerator, "solartower", {

    

    buildConfiguration(tile, table) {
        table.addImageButton(Icon.upOpen, Styles.clearTransi, run(() => {
            //configure the tile to signal that it has been pressed (this sync on client to server)
            tile.configure(0)
        })).size(50)
    },

    
    configured(tile, value) {
        var mirror = Vars.content.getByName(ContentType.block, "techfish-testing-mirror");
        print("---")
        print(Vars.content.blocks())
        print(tile.getNearby(1, 0).block())
        print(tile.getNearby(1, 0).block().class)
        print(mirror)
        print(mirror.class)
        tile.ent().productionEfficiency = 0.0
        
        positions.forEach(pos => {
            if (tile.getNearby(pos[0], pos[1]).block() == mirror) {tile.ent().productionEfficiency += 0.05}
        });
        //if (tile.getNearby(1, 0).block() == mirror) {tile.ent().productionEfficiency += 0.25}
        //if (tile.getNearby(-1, 0).block() == mirror) {tile.ent().productionEfficiency += 0.25}
        //if (tile.getNearby(0, 1).block() == mirror) {tile.ent().productionEfficiency += 0.25}
        //if (tile.getNearby(0, -1).block() == mirror) {tile.ent().productionEfficiency += 0.25}
        
    }


}
)
