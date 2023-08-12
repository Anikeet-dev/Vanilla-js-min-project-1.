setInterval(() => {
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();

    hRotation = 30*hTime + mTime/2;
    mRotation = 6*mTime;
    sRotation = 6*sTime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);

// 12hr ->360deg.
// 1 hr ->360deg/12hr= 30deg.

// for hour hand:
//     60min -> 30deg
//     1min -> 60min/30deg = (1/2)deg.
//     i.e. m -> (m/2)deg rotation

// for minute hand:
//     60min -> 360deg rotation.
//     1 min -> 360/60 = 6deg.

// for second hand:
//     60sec -> 360deg rotation
//     1 sec -> 6deg

// formula's: 
//     hour hand = (30h + m/2)
//     minute hand = 6deg * m
//     second hand =6deg *s