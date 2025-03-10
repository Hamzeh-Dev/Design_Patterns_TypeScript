class Amplifier {
    turmOn(): void {
        console.log("Amblifier is turned on");
    }
    setVolume(level: number): void {
        console.log(`Volume is to ${level}`);
    }
}

class DVDPlayer {
    turmOn(): void {
        console.log("DVD Player is turned on");
    }
    play(movie: string): void {
        console.log(`Playing ${movie}`);
    }
}

class Projector {
    turmOn(): void {
        console.log("Projector is turned on");
    }
    setInput(dvdPlayer: DVDPlayer): void {
        console.log(`input set to ${dvdPlayer}`);
    }
}

class Lights {
    dim(level: number): void {
        console.log(`Lights dimmed to ${level}`);
    }
}

class HomeThreaterFacade {
    constructor(
        private amplifier: Amplifier,
        private dvdPlayer: DVDPlayer,
        private projector: Projector,
        private lights: Lights,
    ) {}

    watchMovie(movie: string, vlomue: number, level: number) {
        console.log(`Get ready to watch ${movie}`);
        this.lights.dim(level);
        this.amplifier.turmOn();
        this.amplifier.setVolume(vlomue);
        this.dvdPlayer.turmOn();
        this.projector.turmOn();
        this.projector.setInput(this.dvdPlayer);
        this.dvdPlayer.play(movie);
    }
}

// * Client Code
const amplifier = new Amplifier;
const dvdPlayer = new DVDPlayer;
const projector = new Projector;
const lights = new Lights;

const homeThreaterFacade = new HomeThreaterFacade(amplifier, dvdPlayer, projector, lights);
homeThreaterFacade.watchMovie("Inception", 10, 5);