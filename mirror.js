
var positions = [[-1, 2],[0, 2],[1, 2],[-2, 1],[-1, 1],[0, 1],[1, 1],[2, 1],[-2, 0],[-1, 0],[1, 0],[2, 0],[-2, -1],[-1, -1],[0, -1],[1, -1],[2, -1],[-1, -2],[0, -2],[1, -2]]

const mirror = extendContent(Block, "mirror", {


    load(){
        this.super$load();
        this.region = Core.atlas.find(this.name);
        this.topRegion = Core.atlas.find(this.name + "-top");
    },
    draw(tile){
        var rot = null
        
        entity = tile.ent();
		
		Draw.rect(this.region, tile.drawx(), tile.drawy());

		Draw.color(heatColor);
		Draw.alpha(Mathf.absin(Time.time(), 8, 0.6) * entity.productionEfficiency);
		Draw.rect(this.topRegion, tile.drawx(), tile.drawy(), rot);

		Draw.reset();
	}
}
)