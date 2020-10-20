(function () {
    function MusicPlayer(dom) {
        this.wrap = dom;
        this.dataList = [];

        this.rotateTimer = null;
        this.indexObj = null;
        this.curIndex = 0;
    }
    MusicPlayer.prototype = {
        init:function() {
            this.getDom();
            this.getData('../mock/data.json');
        },
        getDom:function() {
            this.record = document.querySelector('.songImg img');
            this.controlBtns = document.querySelectorAll('.control li');
        },
        getData:function(url) {
            var that = this;
            $.ajax({
                url: url,
                method: 'get',
                success: function (data) {
                    that.dataList = data;
                    that.listPlay();
                    that.indexObj = new player.controlIndex(data.length);
                    that.loadMusic(that.indexObj.Index);
                    that.musicControl()

                },
                error: function () {
                    console.log("数据i请求失败")
                }
            })
        },
        loadMusic:function(index) {
            player.render(this.dataList[index])
            player.music.load(this.dataList[index].audioSrc)
            if (player.music.status == 'play') {
                player.music.play()
                this.controlBtns[2].className = 'playing';
                this.imgRotate(0)
            }
            this.list.changeSelect(index);
            this.curIndex = index;
        },
        musicControl:function() {
            var that = this;
            this.controlBtns[1].addEventListener('touchend', function () {
                player.music.status = 'play';

                that.loadMusic(that.indexObj.prev());
            })
            this.controlBtns[2].addEventListener('touchend', function () {
                if (player.music.status == 'play') {
                    player.music.pause();
                    this.className = '';
                    that.imgStop();
                } else {
                    player.music.play();
                    this.className = 'playing';
                    var deg = that.record.dataset.rotate || 0;
                    that.imgRotate(deg)

                }
            })
            this.controlBtns[3].addEventListener('touchend', function () {
                player.music.status = 'play';

                that.loadMusic(that.indexObj.next());
            })
        },
        imgRotate:function(deg) {
            var that = this;
            clearInterval(that.rotateTimer);
            that.rotateTimer = setInterval(function () {
                deg = +deg + 0.2;
                that.record.style.transform = 'rotate(' + deg + 'deg)'
                that.record.dataset.rotate = deg;
            }, 1000 / 60)
        },
        imgStop:function() {
            clearInterval(this.rotateTimer)
        },
        listPlay:function() {
            var that = this;
            this.list = player.listControl(this.dataList, this.wrap)
            this.controlBtns[4].addEventListener('touchend', function () {
                that.list.slideUp()
            })
            this.list.musicList.forEach(function (item, index) {
                item.addEventListener('touchend',function(){
                    if(that.curIndex == index){
                        return
                    }
                    player.music.status = 'play';
                    that.indexObj.index = index;
                    that.loadMusic(index);
                    that.list.slideDown();
                })
            })
        }
    }
    var musicPlayer = new MusicPlayer(document.getElementById('wrap'));
    musicPlayer.init()
})(window.Zepto, window.player);