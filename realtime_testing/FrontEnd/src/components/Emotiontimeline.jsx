import React, { useEffect, useState, useRef } from "react";
import Plot from 'react-plotly.js';

const SAMPLING_RATE = 3000; // Calculate engagement score every 5 seconds

const Emotiontimeline = () => {
    var state = {
        boredom: {
            x: [],
            y: [], 
            name: 'boredom',
            line: {shape: 'spline'}
        },
        engagement: {
            x: [],
            y: [], 
            name: 'engagement',
            line: {shape: 'spline'}
        },
        confusion: {
            x: [],
            y: [], 
            name: 'confusion',
            line: {shape: 'spline'}
        },
        frustration: {
            x: [],
            y: [], 
            name: 'frustration',
            line: {shape: 'spline'}
        },

        angry: {
            x: [],
            y: [], 
            name: 'Enojado',
            line: {shape: 'spline'}
        },
        disgust: {
            x: [],
            y: [], 
            name: 'Disgustado',
            line: {shape: 'spline'}
        },
        fear: {
            x: [],
            y: [], 
            name: 'Asustado',
            line: {shape: 'spline'}
        },
        happy: {
            x: [],
            y: [], 
            name: 'Feliz',
            line: {shape: 'spline'}
        },
        sad: {
            x: [],
            y: [], 
            name: 'Triste',
            line: {shape: 'spline'}
        },
        surprise: {
            x: [],
            y: [], 
            name: 'Sorprendido',
            line: {shape: 'spline'}
        },
        neutral: {
            x: [],
            y: [], 
            name: 'Neutral',
            line: {shape: 'spline'}
        },
        emotionLayout: { 
            xaxis:{title: 'Tiempo (s)'},
            yaxis:{title: 'Emociones (%)'},
            datarevision: 0,
        },
        revision: 0,
        isConnected: false,
        connectionStatus: "Not Connected",
        updateIntervalId: null
    };

    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const stripRef = useRef(null);
    const [emotionsPlot, updateEmotionsPlot] = useState(null);


    useEffect(() => {
        getVideo();
    }, [videoRef]);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: 300 } })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.error("error:", err);
            });
    };

    const takePhoto = () => {
        let photo = photoRef.current;
        let strip = stripRef.current;

        console.warn(strip);

        const data = photo.toDataURL("image/jpeg");

        console.warn(data);
        const link = document.createElement("a");
        link.href = data;
        link.setAttribute("download", "myWebcam");
        link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
        strip.insertBefore(link, strip.firstChild);
    };

    const paintToCanvas = () => {
        let video = videoRef.current;
        let photo = photoRef.current;
        let ctx = photo.getContext("2d");

        const width = 320;
        const height = 240;
        photo.width = width;
        photo.height = height;

        return setInterval(() => {
            ctx.drawImage(video, 0, 0, width, height);
            var img = ctx.getImageData(0, 0, width, height).data;
            img = Array.from(img)
            getEmotionScore(JSON.stringify(img));
        }, SAMPLING_RATE);
    };


    function getEmotionScore(img) {
        fetch("http://localhost:5000/getEmotionScore", {
            crossDomain:true,
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: img,
        })
          .then(res => res.json())
          .then(res => {
            const {angry, disgust, fear, happy, sad, surprise, neutral, emotionLayout} = state;
            var curTime = parseInt(res['timestamp']);
            
            if (curTime != -1) {
                var i = angry.x.length - 1;
                while (i >= 0 && angry.x[i] > curTime) {
                    i--;
                }
                angry.x.splice(i + 1, 0, curTime);
                angry.y.splice(i + 1, 0, parseFloat(res['emotion']['angry']));
                angry.line.shape = 'spline';

                disgust.x.splice(i + 1, 0, curTime);
                disgust.y.splice(i + 1, 0, parseFloat(res['emotion']['disgust']));
                disgust.line.shape = 'spline';

                fear.x.splice(i + 1, 0, curTime);
                fear.y.splice(i + 1, 0, parseFloat(res['emotion']['fear']));
                fear.line.shape = 'spline';

                happy.x.splice(i + 1, 0, curTime);
                happy.y.splice(i + 1, 0, parseFloat(res['emotion']['happy']));
                happy.line.shape = 'spline';

                sad.x.splice(i + 1, 0, curTime);
                sad.y.splice(i + 1, 0, parseFloat(res['emotion']['sad']));
                sad.line.shape = 'spline';

                surprise.x.splice(i + 1, 0, curTime);
                surprise.y.splice(i + 1, 0, parseFloat(res['emotion']['surprise']));
                surprise.line.shape = 'spline';

                neutral.x.splice(i + 1, 0, curTime);
                neutral.y.splice(i + 1, 0, parseFloat(res['emotion']['neutral']));
                neutral.line.shape = 'spline';
            }
            state.revision = state.revision + 1;
            emotionLayout.datarevision = state.revision + 1;
        });
        updateEmotionsPlot(<Plot
            data={[
                state.angry, state.disgust, state.fear, state.happy, state.sad, state.surprise, state.neutral
            ]}
            layout={state.emotionLayout}
            revision={state.revision}
            graphDiv="graph"
        />)
    };



    return (
        <div>
            <button onClick={() => takePhoto()}>Take a photo</button>
            
            <video onCanPlay={() => paintToCanvas()} ref={videoRef} />
            <canvas ref={photoRef} />
            <div>
                <div ref={stripRef} />
            </div>

            <div>
                <h1>Emotions</h1>
                {emotionsPlot}
                
            </div>

        </div>
    );
};

export default Emotiontimeline;
