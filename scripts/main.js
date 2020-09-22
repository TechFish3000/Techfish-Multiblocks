// Debug mode

var DebugMode = true

// Bare mode, will only load the scripts in Barescripts[]

var BareMode = false
var BareScripts = []
//var BareScripts = []
// scripts to be loaded

var Scripts = ["solartower"]



if (!BareMode) {
    for (var i = 0; i < Scripts.length; i++) {
        require(Scripts[i])
        if (DebugMode) {
            print("Script " + Scripts[i] + " loaded.")
        }
    }
}
else {
    print("Bare mode enabled, remember what you're doing, don't break anything.")
    for (var v = 0; v < BareScripts.length; v++) {
        require(BareScripts[v])
        if (DebugMode) {
            print("Bare Script " + BareScripts[v] + " loaded.")
        }
    }
}





