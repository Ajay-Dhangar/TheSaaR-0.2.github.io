
on_mobile();

// To check if the user is on mobile
function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

// if user is on mobile then
function on_mobile()
{
    var image = document.getElementById("image1")
    var image = document.getElementById("image2")
    if (detectMob())
    {
        image1.style.textAlign = 'center'
        image2.style.textAlign = 'center'
    }
}
