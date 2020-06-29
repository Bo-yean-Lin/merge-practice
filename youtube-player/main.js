var player;
var currentPlay=0;

function onYouTubeIframeAPIReady(){
    player = new YT.Player("player",
        {
            height:"390",
            width:"640",
            videoId:playList[currentPlay],
            playerVars:{
                "autoplay":0, //不自動播放
                "controls":0, //不顯示控制項
                "start":playTime[currentPlay][0], //起始秒數
                "end":playTime[currentPlay][1], //節數秒數
                "showinfo":0, //2018/9/25被廢除，關不掉上方標題
                "rel":0, //2018/9/25後，還是會顯示，可透過預載影片擋住
                "iv_load_policy":3 //不顯示影片註解式行銷
            },
            events:{
                "onReady":onPlayerReady,
                "onStateChange":onPlayerStateChange
            }
        }
    );
}

function onPlayerReady(event){

    $("#playButton").click(function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

function onPlayerStateChange(event){
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        if(currentPlay<playList.length-1){
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }else{
            currentPlay = 0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large" 
            })
        }
    }
    if(player.getVideoLoadedFraction()>0){
        $("h2").text(player.getVideoData().title);
    }
}