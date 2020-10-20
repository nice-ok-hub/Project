(function (root) {
    function Index(len) {
        this.Index = 0;
        this.len = len;
    }
    Index.prototype = {
        prev:function() {
            return this.get(-1);
        },
        next:function() {
            return this.get(1);
        },
        get:function(val) {
            this.Index = (this.Index + val + this.len) % this.len;
            return this.Index;
        }
    }
    root.controlIndex = Index;
})(window.player || (window.player = {}))