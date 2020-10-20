(function (root) {
    function AudioManage() {
        this.audio = new Audio();
        this.status = 'pause';
    }
    AudioManage.prototype = {
        //加载音乐
        load:function(src) {
            this.audio.src = src;
            this.audio.load();
        },
        //播放音乐
        play:function() {
            this.audio.play();
            this.status = 'play';
        },
        //暂停音乐
        pause:function() {
            this.audio.pause();
            this.status = 'pause';
        },
        //音乐播放完成事件
        end:function(fn) {
            this.audio.onended = fn;
        },
        //跳到音乐的某个时间点
        playTo:function(time) {
            this.audio.currentTime = time;
        }
    }
    root.music = new AudioManage();
})(window.player || (window.player = {}))