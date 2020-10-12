import { Howl } from 'howler';

class AudioPlayer {
    constructor(token) {
		if (!AudioPlayer.instance) {
            AudioPlayer.instance = this;
            this.howler = null;    
            setInterval(() => {
                if (this.howler?.playing()){
                window.dispatchEvent(
                    new CustomEvent(
                        "updateSliderProgression",
                        { detail: this.howler.seek() * 1000})
                    )}
            }, 500);
		}
		return AudioPlayer.instance;
    }

    setTrackUrl(url){
        if (this.howler!== null && this.howler.playing()){
            this.howler.stop()
        }
        this.howler = new Howl({
            src: [url], 
            format: ['mp3','wav','ogg','webm'],
            html5: true,
        });
        this.howler.on("end", () => { 
            window.dispatchEvent(new CustomEvent("nextSong"))
        })
    }

    playTrack(){
        this.howler.play()
    }


    togglePauseResume(){
        if (this.howler.playing()){
            this.howler.pause()
        }
        else{
            this.howler.play()
        }
    }
}
export const audioPlayer = new AudioPlayer();