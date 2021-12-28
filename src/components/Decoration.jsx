import '../css-modules/decoration.css'
import mojs from '@mojs/core'

const Decoration = () => {


    setInterval(() => randomizedConfetti(), 2000);

    setInterval(() =>clearInterval(),10000)
    function bursty(x, y) {
        const burst = new mojs.Burst({
            left: 0,
            top: 0,
            radius: { 0: 200 },
            count: 20,
            degree: 360,
            children: {
                fill: { white: "#8842d5" },
                duration: 2000
            }
        }).tune({
            x: x,
            y: y
        });

        burst.replay();
    }

    function randomizedConfetti() {
        let randomX = Math.floor(Math.random() * (document.body.clientWidth - 100) + 0);
        let randomY = Math.floor(Math.random() * (window.innerHeight - 200) + 0);
        const burst = new mojs.Burst({
            left: 0,
            top: 0,
            radius: { 0: 200 },
            count: 20,
            degree: 360,
            children: {
                fill: { white: "#8842d5" },
                duration: 2000
            }
        }).tune({
            x: randomX,
            y: randomY
        });

        burst.replay();
    }


    return (
        <div className="container" onClick={(e) => bursty(e.pageX, e.pageY)}>
            <div className="text" data-splitting="">Geral!!!</div>
            <div className="presents">
                <div className="present orange">
                    <div className="lid"></div>
                    <div className="box"></div>
                    <div className="bow"></div>
                    <div className="ribbon"></div>
                </div>
                <div className="present blue">
                    <div className="lid"></div>
                    <div className="box"></div>
                    <div className="bow"></div>
                    <div className="ribbon"></div>
                </div>
                <div className="present green">
                    <div className="lid"></div>
                    <div className="box"></div>
                    <div className="bow"></div>
                    <div className="ribbon"></div>
                </div>
            </div>
            <p className="text" data-splitting="">Feliz cumpleaños 
            <br />y Feliz año nuevo!</p>
        </div>
    );
}

export default Decoration;