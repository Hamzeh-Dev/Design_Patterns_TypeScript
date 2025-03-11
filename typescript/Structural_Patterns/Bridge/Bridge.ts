
interface MediaPlayerImplementation {
    playAudio(): void;
    playVideo(): void;
}

class WindowsMediaPlayer implements MediaPlayerImplementation {
    playAudio(): void {
        console.log("Playing audio on windows media player");
    }
    playVideo(): void {
        console.log("Playing video on windows media player");
    }
}

class MacOSMediaPlayer implements MediaPlayerImplementation {
    playAudio(): void {
        console.log("Playing audio on MacOS media player");
    }
    playVideo(): void {
        console.log("Playing video on MacOS media player");
    }
}

abstract class MediaPlayerAbstraction {
    constructor(protected implementation: MediaPlayerImplementation) {}

    abstract playFile(): void;
}

class AudioPlayer extends MediaPlayerAbstraction {
    playFile(): void {
        this.implementation.playAudio();
    }
}

class VideoPlayer extends MediaPlayerAbstraction {
    playFile(): void {
        this.implementation.playVideo();
    }
}

// * Client Code
const WindowsPlayer = new AudioPlayer(new WindowsMediaPlayer());
WindowsPlayer.playFile();

const MacOSPlayer = new VideoPlayer(new MacOSMediaPlayer());
MacOSPlayer.playFile();